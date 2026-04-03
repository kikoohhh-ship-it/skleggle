import AppKit
import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

let fileManager = FileManager.default
let sourceDirectory = URL(fileURLWithPath: "sprites", isDirectory: true)
let outputDirectory = URL(fileURLWithPath: "sprites_transparent", isDirectory: true)

let whiteThreshold = 235

func isNearWhite(_ r: Int, _ g: Int, _ b: Int) -> Bool {
  return r >= whiteThreshold && g >= whiteThreshold && b >= whiteThreshold
}

guard let files = try? fileManager.contentsOfDirectory(
  at: sourceDirectory,
  includingPropertiesForKeys: nil,
  options: [.skipsHiddenFiles]
) else {
  fputs("Unable to read sprites directory.\n", stderr)
  exit(1)
}

try? fileManager.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

for fileURL in files where fileURL.pathExtension.lowercased() == "jpg" {
  guard
    let imageSource = CGImageSourceCreateWithURL(fileURL as CFURL, nil),
    let image = CGImageSourceCreateImageAtIndex(imageSource, 0, nil)
  else {
    fputs("Skipping unreadable file: \(fileURL.lastPathComponent)\n", stderr)
    continue
  }

  let width = image.width
  let height = image.height
  let bytesPerPixel = 4
  let bytesPerRow = width * bytesPerPixel
  let bitsPerComponent = 8

  guard let context = CGContext(
    data: nil,
    width: width,
    height: height,
    bitsPerComponent: bitsPerComponent,
    bytesPerRow: bytesPerRow,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  ) else {
    fputs("Skipping file with context failure: \(fileURL.lastPathComponent)\n", stderr)
    continue
  }

  context.draw(image, in: CGRect(x: 0, y: 0, width: width, height: height))

  guard let rawPointer = context.data else {
    fputs("Skipping file with missing pixel data: \(fileURL.lastPathComponent)\n", stderr)
    continue
  }

  let pixelBuffer = rawPointer.bindMemory(to: UInt8.self, capacity: width * height * bytesPerPixel)
  var visited = Array(repeating: false, count: width * height)
  var queue: [(Int, Int)] = []
  queue.reserveCapacity(width * 2 + height * 2)

  func enqueueIfBackground(_ x: Int, _ y: Int) {
    guard x >= 0, y >= 0, x < width, y < height else { return }
    let visitIndex = y * width + x
    guard !visited[visitIndex] else { return }

    let pixelIndex = y * bytesPerRow + x * bytesPerPixel
    let r = Int(pixelBuffer[pixelIndex])
    let g = Int(pixelBuffer[pixelIndex + 1])
    let b = Int(pixelBuffer[pixelIndex + 2])

    guard isNearWhite(r, g, b) else { return }

    visited[visitIndex] = true
    queue.append((x, y))
  }

  for x in 0..<width {
    enqueueIfBackground(x, 0)
    enqueueIfBackground(x, height - 1)
  }

  for y in 0..<height {
    enqueueIfBackground(0, y)
    enqueueIfBackground(width - 1, y)
  }

  var head = 0
  while head < queue.count {
    let (x, y) = queue[head]
    head += 1

    let pixelIndex = y * bytesPerRow + x * bytesPerPixel
    pixelBuffer[pixelIndex + 3] = 0

    enqueueIfBackground(x + 1, y)
    enqueueIfBackground(x - 1, y)
    enqueueIfBackground(x, y + 1)
    enqueueIfBackground(x, y - 1)
  }

  let outputURL = outputDirectory.appendingPathComponent(fileURL.deletingPathExtension().lastPathComponent).appendingPathExtension("png")
  guard let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    fputs("Failed to create destination for \(outputURL.lastPathComponent)\n", stderr)
    continue
  }

  guard let outputImage = context.makeImage() else {
    fputs("Failed to finalize image for \(fileURL.lastPathComponent)\n", stderr)
    continue
  }

  CGImageDestinationAddImage(destination, outputImage, nil)
  if !CGImageDestinationFinalize(destination) {
    fputs("Failed to write \(outputURL.lastPathComponent)\n", stderr)
  } else {
    print("Wrote \(outputURL.path)")
  }
}
