const GRID = {
  columns: 24,
  rows: 36,
  cellSize: 44,
};

const GRID_COLS = GRID.columns;
const GRID_ROWS = GRID.rows;

const CAMERA = {
  minZoom: 0.45,
  maxZoom: 2.2,
  zoomStep: 0.12,
  orbitSpeed: 0.01,
  panStep: 0.75,
  damping: 0.14,
  focusPadding: 3,
};

const PROJECTION = {
  columnX: 0.92,
  columnY: 0.34,
  rowX: -0.92,
  rowY: 0.34,
  lift: 0.82,
  boardDepth: 0.95,
  houseHeight: 1.05,
  cardHeight: 0.18,
  tokenHeight: 0.92,
};

const TOKEN = {
  radius: 14,
  stackOffset: 7,
};

const DEFAULT_HEALTH = 20;

const ZONES = [
  { id: 1, label: "Zone 1", color: "rgba(191, 77, 64, 0.16)", border: "rgba(232, 155, 143, 0.55)", columnStart: 0, columnEnd: 11, rowStart: 0, rowEnd: 11 },
  { id: 2, label: "Zone 2", color: "rgba(197, 136, 55, 0.16)", border: "rgba(234, 202, 141, 0.55)", columnStart: 0, columnEnd: 11, rowStart: 12, rowEnd: 23 },
  { id: 3, label: "Zone 3", color: "rgba(112, 156, 61, 0.16)", border: "rgba(182, 221, 139, 0.55)", columnStart: 0, columnEnd: 11, rowStart: 24, rowEnd: 35 },
  { id: 4, label: "Zone 4", color: "rgba(60, 128, 117, 0.16)", border: "rgba(126, 210, 192, 0.55)", columnStart: 12, columnEnd: 23, rowStart: 0, rowEnd: 11 },
  { id: 5, label: "Zone 5", color: "rgba(67, 101, 171, 0.16)", border: "rgba(151, 185, 245, 0.55)", columnStart: 12, columnEnd: 23, rowStart: 12, rowEnd: 23 },
  { id: 6, label: "Zone 6", color: "rgba(133, 83, 167, 0.16)", border: "rgba(205, 163, 240, 0.55)", columnStart: 12, columnEnd: 23, rowStart: 24, rowEnd: 35 },
];

const BOARD_OBJECT_LIBRARY = [
  { type: "house-3x3", label: "3x3 House", width: 3, height: 3, color: "#9b6f4b" },
  { type: "house-5x5", label: "5x5 House", width: 5, height: 5, color: "#7c573a" },
];

const STARTING_BOARD_OBJECTS = [
  { type: "house-5x5", count: 1 },
  { type: "house-3x3", count: 6 },
];

const TEAMS = [
  { value: "neutral", label: "Neutral" },
  { value: "blue", label: "Blue Team" },
  { value: "red", label: "Red Team" },
  { value: "green", label: "Green Team" },
  { value: "gold", label: "Gold Team" },
];

const CHARACTER_IMAGE_PATHS = [
  "./Characters/Apollo.jpg",
  "./Characters/AttackDog.jpg",
  "./Characters/BlizzardBuddy.jpg",
  "./Characters/C-137.jpg",
  "./Characters/Camo.jpg",
  "./Characters/Clone.jpg",
  "./Characters/Crazy Eyes.jpg",
  "./Characters/Doppelganger.jpg",
  "./Characters/Fernando.jpg",
  "./Characters/Frost.jpg",
  "./Characters/Grigri.jpg",
  "./Characters/Ian.jpg",
  "./Characters/Irina.jpg",
  "./Characters/Krabulon.jpg",
  "./Characters/Maggie.jpg",
  "./Characters/MajorDan.jpg",
  "./Characters/Moji.jpg",
  "./Characters/MonkClazo.jpg",
  "./Characters/OldManJenkins.jpg",
  "./Characters/Ramses.jpg",
  "./Characters/Rudy.jpg",
  "./Characters/Shank.jpg",
  "./Characters/SwiftArrow.jpg",
  "./Characters/Telly.jpg",
  "./Characters/TheArchitect.jpg",
  "./Characters/TheInspector.jpg",
  "./Characters/TheUpgradeMaster.jpg",
  "./Characters/Valkyrie.jpg",
  "./Characters/WarElephant.jpg",
  "./Characters/Zombie.jpg",
];

const CARD_IMAGE_PATHS = [
  "./Deck/Armory/Items/ChaosPotion.jpg",
  "./Deck/Armory/Items/ChronoStone.jpg",
  "./Deck/Armory/Items/DigDeep.jpg",
  "./Deck/Armory/Items/EnergyBar.jpg",
  "./Deck/Armory/Items/ShieldOfDishonor.jpg",
  "./Deck/Armory/Items/StunGun.jpg",
  "./Deck/Armory/Items/TokenTransfer.jpg",
  "./Deck/Armory/Upgrades/AdrenalineRush.jpg",
  "./Deck/Armory/Upgrades/AngerIssues.jpg",
  "./Deck/Armory/Upgrades/AsStubbornAsAnOx.jpg",
  "./Deck/Armory/Upgrades/BattleForged.jpg",
  "./Deck/Armory/Upgrades/BetterLuckNextTime.jpg",
  "./Deck/Armory/Upgrades/BigBoned.jpg",
  "./Deck/Armory/Upgrades/BionicFear.jpg",
  "./Deck/Armory/Upgrades/BlackJack.jpg",
  "./Deck/Armory/Upgrades/BountyHunter.jpg",
  "./Deck/Armory/Upgrades/BoxingGlove.jpg",
  "./Deck/Armory/Upgrades/BoyScoutBadge.jpg",
  "./Deck/Armory/Upgrades/CalmingExperience.jpg",
  "./Deck/Armory/Upgrades/DanceWithTheDevil.jpg",
  "./Deck/Armory/Upgrades/DigDeeper.jpg",
  "./Deck/Armory/Upgrades/DoubleStrike.jpg",
  "./Deck/Armory/Upgrades/DoubleTap.jpg",
  "./Deck/Armory/Upgrades/DreamsAndNightmares.jpg",
  "./Deck/Armory/Upgrades/Far-sighted.jpg",
  "./Deck/Armory/Upgrades/FieryPersonality.jpg",
  "./Deck/Armory/Upgrades/GlycogenStorage.jpg",
  "./Deck/Armory/Upgrades/Greed.jpg",
  "./Deck/Armory/Upgrades/HauntYouFromTheGrave.jpg",
  "./Deck/Armory/Upgrades/Hero'sSoul.jpg",
  "./Deck/Armory/Upgrades/HideandSeek.jpg",
  "./Deck/Armory/Upgrades/Inspiration.jpg",
  "./Deck/Armory/Upgrades/Juggernaut.jpg",
  "./Deck/Armory/Upgrades/LifelongLearner.jpg",
  "./Deck/Armory/Upgrades/Longshot.jpg",
  "./Deck/Armory/Upgrades/Necromancer'sTouch.jpg",
  "./Deck/Armory/Upgrades/NoWitnesses.jpg",
  "./Deck/Armory/Upgrades/Overcharged.jpg",
  "./Deck/Armory/Upgrades/PerfectPatient.jpg",
  "./Deck/Armory/Upgrades/PillPopper.jpg",
  "./Deck/Armory/Upgrades/Potion of Everlasting Health.jpg",
  "./Deck/Armory/Upgrades/Prodigy.jpg",
  "./Deck/Armory/Upgrades/ProfessionalShooter.jpg",
  "./Deck/Armory/Upgrades/PunchBuggyNoPunchBack.jpg",
  "./Deck/Armory/Upgrades/PutYourBigBoyPantsOn.jpg",
  "./Deck/Armory/Upgrades/RiskItForTheBiscuit.jpg",
  "./Deck/Armory/Upgrades/Rival.jpg",
  "./Deck/Armory/Upgrades/Robotic Reflexes.jpg",
  "./Deck/Armory/Upgrades/RuleBreaker.jpg",
  "./Deck/Armory/Upgrades/RunningShoes.jpg",
  "./Deck/Armory/Upgrades/ScaredyCat.jpg",
  "./Deck/Armory/Upgrades/Scatterbrained.jpg",
  "./Deck/Armory/Upgrades/Shrapnel.jpg",
  "./Deck/Armory/Upgrades/SlayerOfLeviathans.jpg",
  "./Deck/Armory/Upgrades/SoreWinner.jpg",
  "./Deck/Armory/Upgrades/StoppingPower.jpg",
  "./Deck/Armory/Upgrades/StrongerThanYouLook.jpg",
  "./Deck/Armory/Upgrades/TemperTantrum.jpg",
  "./Deck/Armory/Upgrades/TheLastDance.jpg",
  "./Deck/Armory/Upgrades/TooCoolForSchool.jpg",
  "./Deck/Armory/Upgrades/UltimateFan.jpg",
  "./Deck/Armory/Upgrades/Vengeance.jpg",
  "./Deck/Armory/Upgrades/VengefulShadows.jpg",
  "./Deck/Armory/Upgrades/WakeupCall.jpg",
  "./Deck/Armory/Upgrades/WarTreasure.jpg",
  "./Deck/Armory/Upgrades/WarmingUp.jpg",
  "./Deck/Armory/Upgrades/WaterBreak.jpg",
  "./Deck/Events/ArmoryRefresh.jpg",
  "./Deck/Events/BanishedIncentive.jpg",
  "./Deck/Events/BankHeist.jpg",
  "./Deck/Events/BlessedAreThePoor.jpg",
  "./Deck/Events/BlessedExistence.jpg",
  "./Deck/Events/BloodBountt.jpg",
  "./Deck/Events/CelestialShrine.jpg",
  "./Deck/Events/CheatCode.jpg",
  "./Deck/Events/DirtyHighRoller.jpg",
  "./Deck/Events/FlipFlop.jpg",
  "./Deck/Events/GamblersParadise.jpg",
  "./Deck/Events/GasLeak.jpg",
  "./Deck/Events/GottaTinkle.jpg",
  "./Deck/Events/GravitationalFluctuations.jpg",
  "./Deck/Events/LightningStrike.jpg",
  "./Deck/Events/MeteorShower.jpg",
  "./Deck/Events/NaturallyGifted.jpg",
  "./Deck/Events/OrbofAnomal.jpg",
  "./Deck/Events/OrcsForHire.jpg",
  "./Deck/Events/PoopYourPants.jpg",
  "./Deck/Events/Pop-upShop.jpg",
  "./Deck/Events/Power-up.jpg",
  "./Deck/Events/PrayerToThegods.jpg",
  "./Deck/Events/RaceAgainstTime.jpg",
  "./Deck/Events/RegenerativeMedicine.jpg",
  "./Deck/Events/RoundEmUp.jpg",
  "./Deck/Events/SacredPromise.jpg",
  "./Deck/Events/Sacrificetothegods.jpg",
  "./Deck/Events/SelfishDeity.jpg",
  "./Deck/Events/SlotMachine.jpg",
  "./Deck/Events/SurpriseParty.jpg",
  "./Deck/Events/SwapMeet.jpg",
  "./Deck/Events/TheMarchOfTime.jpg",
  "./Deck/Events/Thunderstorm.jpg",
  "./Deck/Events/TrollTax.jpg",
  "./Deck/Events/WeightoftheWorld.jpg",
  "./Deck/Events/YourLuckyDay.jpg",
  "./Deck/Events/ZOE.jpg",
  "./Deck/Events/ZoneOfHealing.jpg",
];

const state = {
  canvas: null,
  context: null,
  characters: [],
  nextCharacterId: 1,
  selectedId: null,
  selectedObjectId: null,
  hoveredCell: null,
  teamNames: Object.fromEntries(TEAMS.map((team) => [team.value, team.label])),
  deck: [],
  discard: [],
  drawnCards: [],
  boardCards: [],
  nextBoardCardId: 1,
  boardObjects: [],
  nextObjectId: 1,
  lastRoll: null,
  expandedAssignedCardId: null,
  playableCharacters: createPlayableCharacters(),
  expandedCharacterId: null,
  boardMetrics: {
    displayWidth: 0,
    displayHeight: 0,
    internalWidth: 0,
    internalHeight: 0,
    tileWidth: 0,
    tileHeight: 0,
  },
  camera: {
    current: {
      zoom: 0.9,
      rotation: 0,
      lookAtColumn: GRID.columns / 2,
      lookAtRow: GRID.rows / 2,
    },
    target: {
      zoom: 0.9,
      rotation: 0,
      lookAtColumn: GRID.columns / 2,
      lookAtRow: GRID.rows / 2,
    },
  },
  drag: {
    type: null,
    characterId: null,
    startCell: null,
    targetCell: null,
    blocked: false,
    objectId: null,
    objectOffset: null,
    rotationOrigin: null,
  },
  lineTool: {
    active: false,
    fromId: null,
    toId: null,
  },
  calculatorExpression: "",
  multiplayer: {
    socket: null,
    connected: false,
    roomCode: "",
    playerName: "Player",
    status: "Run the Node server to enable multiplayer lobbies.",
    syncTimer: null,
    applyingRemoteState: false,
  },
  screen: "lobby",
  renderLoopStarted: false,
  globalEventsBound: false,
  needsRender: true,
};

const ui = {};

init();

function createDeck() {
  return shuffleArray(
    CARD_IMAGE_PATHS.flatMap((image, index) => {
      const segments = image.split("/");
      const fileName = segments[segments.length - 1].replace(/\.jpg$/i, "");
      const group = segments[segments.length - 2];
      const family = segments[segments.length - 3] || "";
      const copies = family === "Armory" && group === "Items" ? 3 : 1;

      return Array.from({ length: copies }, (_, copyIndex) => ({
        id: `${fileName}-${index + 1}-${copyIndex + 1}`,
        title: formatCardTitle(fileName),
        image,
        meta: formatCardMeta(family, group),
        tone: getCardTone(family, group),
      }));
    }),
  );
}

function createPlayableCharacters() {
  return CHARACTER_IMAGE_PATHS.map((image) => {
    const fileName = image.split("/").pop().replace(/\.jpg$/i, "");
    return {
      name: formatCardTitle(fileName),
      image,
    };
  });
}

function renderPlayableCharacterOptions() {
  ui.characterInput.innerHTML = state.playableCharacters.map((character) => {
    return `<option value="${escapeHtml(character.name)}">${escapeHtml(character.name)}</option>`;
  }).join("");
}

function init() {
  state.deck = createDeck();
  seedStartingBoardObjects();
  mountUi();
  setupGlobalEvents();
}

function mountUi() {
  const app = document.querySelector("#app");
  if (state.screen === "lobby") {
    mountLobbyUi(app);
    return;
  }

  mountGameUi(app);
}

function mountLobbyUi(app) {
  app.innerHTML = `
    <div class="tabletop-shell lobby-shell">
      <section class="lobby-screen">
        <div class="lobby-hero glass-panel">
          <p class="eyebrow">Skleggle Online</p>
          <h1 class="lobby-title">Enter The Battleground</h1>
          <p class="lede">Host a room or join an existing lobby first. Once you're in, the site will take you straight to the board.</p>
        </div>

        <section class="glass-panel lobby-panel stack">
          <div>
            <p class="eyebrow">Lobby Access</p>
            <h2>Join Or Create</h2>
          </div>
          <label class="field">
            <span>Name</span>
            <input id="player-name-input" type="text" maxlength="24" value="${escapeHtml(state.multiplayer.playerName || "Player")}" />
          </label>
          <label class="field">
            <span>Room Code</span>
            <input id="room-code-input" type="text" maxlength="6" placeholder="ABC123" value="${escapeHtml(state.multiplayer.roomCode || "")}" />
          </label>
          <div class="lobby-actions">
            <button id="host-lobby" type="button" class="primary-button">Create Lobby</button>
            <button id="join-lobby" type="button" class="ghost-button wide">Join Lobby</button>
          </div>
          <div class="mini-stats">
            <div>
              <small>Connection</small>
              <strong id="multiplayer-connection">Offline</strong>
            </div>
            <div>
              <small>Lobby</small>
              <strong id="multiplayer-room">-</strong>
            </div>
          </div>
          <div id="multiplayer-status" class="dice-result">${escapeHtml(state.multiplayer.status)}</div>
        </section>
      </section>
    </div>
  `;

  ui.playerNameInput = document.querySelector("#player-name-input");
  ui.roomCodeInput = document.querySelector("#room-code-input");
  ui.hostLobby = document.querySelector("#host-lobby");
  ui.joinLobby = document.querySelector("#join-lobby");
  ui.multiplayerConnection = document.querySelector("#multiplayer-connection");
  ui.multiplayerRoom = document.querySelector("#multiplayer-room");
  ui.multiplayerStatus = document.querySelector("#multiplayer-status");
  ui.hostLobby.addEventListener("click", onHostLobby);
  ui.joinLobby.addEventListener("click", onJoinLobby);
  renderMultiplayerStatus();
}

function mountGameUi(app) {
  app.innerHTML = `
    <div class="tabletop-shell">
      <header class="topbar glass-panel">
        <div class="topbar-game">
          <h1 class="topbar-title">3D Skleggle</h1>
          <div class="topbar-actions">
            <span class="session-pill">Lobby <strong id="topbar-room-code">${escapeHtml(state.multiplayer.roomCode || "Solo")}</strong></span>
            <button id="leave-lobby" type="button" class="ghost-button wide">Leave Lobby</button>
          </div>
        </div>
      </header>

      <div class="table-layout">
        <aside class="left-rail">
          <form id="character-form" class="glass-panel rail-card stack">
            <div>
              <p class="eyebrow">Spawn Token</p>
              <h2>Add Piece</h2>
            </div>
            <label class="field">
              <span>Character</span>
              <select id="character-input"></select>
            </label>
            <label class="field">
              <span>Color</span>
              <input id="color-input" type="color" value="#cf6f4a" />
            </label>
            <label class="field">
              <span>Team</span>
              <select id="team-input"></select>
            </label>
            <button type="submit" class="primary-button">Place On Table</button>
            <p class="hint">Playable characters come from the Characters folder. Drag pieces to move them. Drag empty space to orbit the camera. Use WASD or arrow keys to pan the camera. Mouse wheel zooms.</p>
          </form>

          <section class="deck-tray glass-panel rail-card stack">
            <div class="deck-header">
              <div>
                <p class="eyebrow">Deck Area</p>
                <h2>Draw Cards</h2>
              </div>
              <div class="deck-meta">
                <span id="deck-count">Deck 0</span>
                <span id="discard-count">Discard 0</span>
              </div>
            </div>
            <div class="deck-layout">
              <div class="deck-controls">
                <button id="draw-card" type="button" class="primary-button">Draw Card</button>
                <button id="reset-deck" type="button" class="ghost-button wide">Reset Deck</button>
              </div>
              <div id="drawn-cards" class="drawn-cards"></div>
            </div>
          </section>
        </aside>

        <section class="board-column">
          <main class="table-stage glass-panel">
            <div class="table-felt">
              <div class="table-glow"></div>
              <canvas id="tabletop-canvas"></canvas>
            </div>
          </main>

          <section class="glass-panel rail-card stack inspector-panel">
            <div>
              <p class="eyebrow">Selection</p>
              <h2>Inspector</h2>
            </div>
            <div id="selection-info" class="selection-info">No piece selected.</div>
            <div id="selection-controls" class="selection-controls"></div>
            <div id="selected-character-card" class="selected-character-card"></div>
            <div id="assigned-cards" class="assigned-cards"></div>
            <div class="mini-stats">
              <div>
                <small>Hovered</small>
                <strong id="hovered-cell">-</strong>
              </div>
              <div>
                <small>Zoom</small>
                <strong id="zoom-level">90%</strong>
              </div>
            </div>
          </section>
        </section>

        <aside class="right-rail">
          <section class="glass-panel rail-card stack">
            <div>
              <p class="eyebrow">Team Roster</p>
              <h2>Pieces By Team</h2>
            </div>
            <div id="team-groups" class="team-groups"></div>
          </section>

          <section class="glass-panel rail-card stack">
            <div>
              <p class="eyebrow">Modules</p>
              <h2>Room Widgets</h2>
            </div>
            <div class="widget-list">
              <button id="roll-die" type="button" class="widget-action">
                <span>Dice tray</span>
                <strong>Roll d6</strong>
              </button>
              <div id="dice-result" class="dice-result">No roll yet.</div>
              <div class="widget-block">
                <div class="widget-row tool-widget">
                  <span>Line of sight</span>
                  <button id="toggle-line-tool" type="button" class="ghost-button">Select</button>
                </div>
                <div class="line-tool-grid">
                  <label class="field compact-field">
                    <span>From</span>
                    <select id="line-from-select"></select>
                  </label>
                  <label class="field compact-field">
                    <span>To</span>
                    <select id="line-to-select"></select>
                  </label>
                </div>
              </div>
              <div class="widget-row object-widget">
                <span>Board objects</span>
                <div class="object-widget-actions">
                  <button id="add-house-3x3" type="button" class="ghost-button">3x3 House</button>
                  <button id="add-house-5x5" type="button" class="ghost-button">5x5 House</button>
                </div>
              </div>
              <button id="delete-board-object" type="button" class="ghost-button wide">Delete Selected Building</button>
              <div class="widget-block calculator-widget">
                <div class="widget-row">
                  <span>Calculator</span>
                  <strong>Built in</strong>
                </div>
                <div id="calculator-display" class="calculator-display">0</div>
                <div id="calculator-pad" class="calculator-pad">
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="(">(</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key=")">)</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-action="backspace">DEL</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-action="clear">C</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="7">7</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="8">8</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="9">9</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="/">/</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="4">4</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="5">5</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="6">6</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="*">*</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="1">1</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="2">2</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="3">3</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="-">-</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="0">0</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key=".">.</button>
                  <button type="button" class="calculator-key primary-button" data-calculator-action="equals">=</button>
                  <button type="button" class="calculator-key ghost-button" data-calculator-key="+">+</button>
                </div>
                <div id="calculator-result" class="dice-result">Calculator ready.</div>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <div id="character-card-overlay" class="character-card-overlay" hidden>
        <div class="character-card-overlay-panel">
          <button id="collapse-character-card" type="button" class="collapse-character-card-button">Collapse</button>
          <img id="character-card-overlay-image" class="character-card-overlay-image" alt="" />
          <div class="character-card-overlay-meta">
            <strong id="character-card-overlay-title"></strong>
            <small id="character-card-overlay-subtitle"></small>
          </div>
        </div>
      </div>
    </div>
  `;

  ui.form = document.querySelector("#character-form");
  ui.characterInput = document.querySelector("#character-input");
  ui.colorInput = document.querySelector("#color-input");
  ui.teamInput = document.querySelector("#team-input");
  ui.selectionInfo = document.querySelector("#selection-info");
  ui.selectionControls = document.querySelector("#selection-controls");
  ui.selectedCharacterCard = document.querySelector("#selected-character-card");
  ui.assignedCards = document.querySelector("#assigned-cards");
  ui.characterCardOverlay = document.querySelector("#character-card-overlay");
  ui.collapseCharacterCard = document.querySelector("#collapse-character-card");
  ui.characterCardOverlayImage = document.querySelector("#character-card-overlay-image");
  ui.characterCardOverlayTitle = document.querySelector("#character-card-overlay-title");
  ui.characterCardOverlaySubtitle = document.querySelector("#character-card-overlay-subtitle");
  ui.teamGroups = document.querySelector("#team-groups");
  ui.leaveLobby = document.querySelector("#leave-lobby");
  ui.topbarRoomCode = document.querySelector("#topbar-room-code");
  ui.rollDie = document.querySelector("#roll-die");
  ui.diceResult = document.querySelector("#dice-result");
  ui.calculatorDisplay = document.querySelector("#calculator-display");
  ui.calculatorPad = document.querySelector("#calculator-pad");
  ui.calculatorResult = document.querySelector("#calculator-result");
  ui.toggleLineTool = document.querySelector("#toggle-line-tool");
  ui.lineFromSelect = document.querySelector("#line-from-select");
  ui.lineToSelect = document.querySelector("#line-to-select");
  ui.addHouse3x3 = document.querySelector("#add-house-3x3");
  ui.addHouse5x5 = document.querySelector("#add-house-5x5");
  ui.deleteBoardObject = document.querySelector("#delete-board-object");
  ui.hoveredCell = document.querySelector("#hovered-cell");
  ui.zoomLevel = document.querySelector("#zoom-level");
  ui.drawCard = document.querySelector("#draw-card");
  ui.resetDeck = document.querySelector("#reset-deck");
  ui.deckCount = document.querySelector("#deck-count");
  ui.discardCount = document.querySelector("#discard-count");
  ui.drawnCards = document.querySelector("#drawn-cards");
  state.canvas = document.querySelector("#tabletop-canvas");
  state.context = state.canvas.getContext("2d");
  setupCanvas();
  setupGameEvents();
  resetCamera();
  renderPlayableCharacterOptions();
  renderTeamOptions();
  refreshTeamGroups();
  renderDeckArea();
  renderSelectionControls();
  renderLineTool();
  renderCalculatorDisplay();
  renderMultiplayerStatus();
  refreshStatus();
  if (!state.renderLoopStarted) {
    startRenderLoop();
    state.renderLoopStarted = true;
  }
}

function setupCanvas() {
  resizeCanvas();
  state.canvas.addEventListener("contextmenu", (event) => event.preventDefault());
  state.canvas.addEventListener("dragover", onCanvasDragOver);
  state.canvas.addEventListener("drop", onCanvasDrop);
}

function setupGlobalEvents() {
  if (state.globalEventsBound) {
    return;
  }
  state.globalEventsBound = true;
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("pointerup", onPointerUp);
}

function setupGameEvents() {
  state.canvas.addEventListener("pointerdown", onPointerDown);
  state.canvas.addEventListener("pointermove", onPointerMove);
  state.canvas.addEventListener("wheel", onWheel, { passive: false });
  ui.form.addEventListener("submit", onAddCharacter);
  ui.teamGroups.addEventListener("input", onTeamNameInput);
  ui.selectionControls.addEventListener("click", onSelectionControlsClick);
  ui.selectionControls.addEventListener("change", onSelectionControlsChange);
  ui.selectedCharacterCard.addEventListener("click", onSelectedCharacterCardClick);
  ui.collapseCharacterCard.addEventListener("click", collapseCharacterCard);
  ui.characterCardOverlay.addEventListener("click", onCharacterCardOverlayClick);
  ui.drawnCards.addEventListener("click", onDrawnCardsClick);
  ui.assignedCards.addEventListener("click", onAssignedCardsClick);
  ui.leaveLobby.addEventListener("click", onLeaveLobby);
  ui.rollDie.addEventListener("click", onRollDie);
  ui.calculatorPad.addEventListener("click", onCalculatorPadClick);
  ui.toggleLineTool.addEventListener("click", onToggleLineTool);
  ui.lineFromSelect.addEventListener("change", onLineToolChange);
  ui.lineToSelect.addEventListener("change", onLineToolChange);
  ui.addHouse3x3.addEventListener("click", () => onAddBoardObject("house-3x3"));
  ui.addHouse5x5.addEventListener("click", () => onAddBoardObject("house-5x5"));
  ui.deleteBoardObject.addEventListener("click", onDeleteSelectedBoardObject);
  ui.drawCard.addEventListener("click", onDrawCard);
  ui.resetDeck.addEventListener("click", onResetDeck);
  ui.drawnCards.addEventListener("dragstart", onDrawnCardsDragStart);
}

function onResize() {
  if (state.screen !== "game" || !state.canvas || !state.context) {
    return;
  }
  resizeCanvas();
  state.needsRender = true;
}

function resizeCanvas() {
  const bounds = state.canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  state.canvas.width = Math.floor(bounds.width * ratio);
  state.canvas.height = Math.floor(bounds.height * ratio);
  state.context.setTransform(ratio, 0, 0, ratio, 0, 0);
  state.boardMetrics.displayWidth = bounds.width;
  state.boardMetrics.displayHeight = bounds.height;
  state.boardMetrics.internalWidth = state.canvas.width / ratio;
  state.boardMetrics.internalHeight = state.canvas.height / ratio;
  state.boardMetrics.tileWidth = state.boardMetrics.internalWidth / GRID_COLS;
  state.boardMetrics.tileHeight = state.boardMetrics.internalHeight / GRID_ROWS;
}

function resetCamera() {
  const boardCenter = getBoardCenter();
  state.camera.current.zoom = 0.9;
  state.camera.current.rotation = 0;
  state.camera.current.lookAtColumn = boardCenter.column;
  state.camera.current.lookAtRow = boardCenter.row;
  state.camera.target.zoom = 0.9;
  state.camera.target.rotation = 0;
  state.camera.target.lookAtColumn = boardCenter.column;
  state.camera.target.lookAtRow = boardCenter.row;
  state.needsRender = true;
}

function startRenderLoop() {
  requestAnimationFrame(stepFrame);
}

function stepFrame() {
  if (state.screen !== "game" || !state.canvas || !state.context) {
    requestAnimationFrame(stepFrame);
    return;
  }
  const moved = updateCamera();
  if (moved || state.needsRender) {
    refreshStatus();
    draw();
    state.needsRender = false;
  }
  requestAnimationFrame(stepFrame);
}

function updateCamera() {
  const current = state.camera.current;
  const target = state.camera.target;
  let moved = false;

  moved = lerpCameraValue(current, target, "zoom") || moved;
  moved = lerpCameraValue(current, target, "rotation") || moved;
  moved = lerpCameraValue(current, target, "lookAtColumn") || moved;
  moved = lerpCameraValue(current, target, "lookAtRow") || moved;

  return moved;
}

function lerpCameraValue(current, target, key) {
  const difference = target[key] - current[key];
  if (Math.abs(difference) < 0.0005) {
    current[key] = target[key];
    return false;
  }

  current[key] += difference * CAMERA.damping;
  return true;
}

function panCamera(cameraXDelta, cameraZDelta) {
  const rotation = state.camera.target.rotation;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const worldColumnDelta = (cameraXDelta * cos) + (cameraZDelta * sin);
  const worldRowDelta = (-cameraXDelta * sin) + (cameraZDelta * cos);

  state.camera.target.lookAtColumn = clamp(
    state.camera.target.lookAtColumn + worldColumnDelta,
    -CAMERA.focusPadding,
    GRID.columns + CAMERA.focusPadding,
  );
  state.camera.target.lookAtRow = clamp(
    state.camera.target.lookAtRow + worldRowDelta,
    -CAMERA.focusPadding,
    GRID.rows + CAMERA.focusPadding,
  );
  state.needsRender = true;
}

function renderDeckArea() {
  ui.deckCount.textContent = `Deck ${state.deck.length}`;
  ui.discardCount.textContent = `Discard ${state.discard.length}`;
  ui.drawnCards.innerHTML = "";

  if (state.drawnCards.length === 0) {
    const empty = document.createElement("div");
    empty.className = "drawn-empty";
    empty.textContent = "Drawn cards will appear here.";
    ui.drawnCards.appendChild(empty);
  } else {
    for (const card of state.drawnCards) {
      const element = document.createElement("article");
      element.className = `draw-card ${card.tone}`;
      element.draggable = true;
      element.dataset.cardId = card.id;
      const assignmentOptions = renderCharacterOptions();
      element.innerHTML = `
        <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.title)}" class="draw-card-image" />
        <small>${card.meta}</small>
        <strong>${card.title}</strong>
        <span>${state.characters.length ? "Choose a piece for this card" : "Add a piece to assign cards"}</span>
        <div class="assign-card-controls">
          <select class="assign-card-select" data-card-id="${escapeHtml(card.id)}" ${state.characters.length ? "" : "disabled"}>
            ${assignmentOptions}
          </select>
          <div class="assign-card-actions">
            <button type="button" class="assign-card-button" data-card-id="${escapeHtml(card.id)}" ${state.characters.length ? "" : "disabled"}>Assign</button>
            <button type="button" class="discard-card-button" data-card-id="${escapeHtml(card.id)}">Discard</button>
          </div>
        </div>
      `;
      ui.drawnCards.appendChild(element);
    }
  }
}

function onDrawnCardsClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest(".assign-card-button");
  if (button) {
    const { cardId } = button.dataset;
    if (!cardId) {
      return;
    }

    const controls = button.closest(".assign-card-controls");
    const select = controls?.querySelector(".assign-card-select");
    const characterId = Number(select?.value);
    if (!characterId) {
      return;
    }

    assignCardToCharacter(cardId, characterId);
    return;
  }

  const discardButton = target?.closest(".discard-card-button");
  if (discardButton) {
    const { cardId } = discardButton.dataset;
    if (!cardId) {
      return;
    }

    discardDrawnCard(cardId);
  }
}

function onDrawnCardsDragStart(event) {
  const target = event.target instanceof Element ? event.target.closest(".draw-card") : null;
  if (!(target instanceof HTMLElement) || !event.dataTransfer) {
    return;
  }

  const { cardId } = target.dataset;
  if (!cardId) {
    return;
  }

  event.dataTransfer.setData("text/plain", cardId);
  event.dataTransfer.effectAllowed = "move";
}

function onAssignedCardsClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  const expandButton = target?.closest(".expand-assigned-card-button");
  if (expandButton) {
    const { cardId } = expandButton.dataset;
    if (!cardId) {
      return;
    }

    toggleAssignedCardSize(cardId);
    return;
  }

  const discardButton = target?.closest(".discard-assigned-card-button");
  if (!discardButton) {
    return;
  }

  const { cardId } = discardButton.dataset;
  if (!cardId) {
    return;
  }

  discardAssignedCard(cardId);
}

function onSelectedCharacterCardClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest(".expand-character-card-button");
  if (!button) {
    return;
  }

  expandCharacterCard();
}

function onCharacterCardOverlayClick(event) {
  if (event.target !== ui.characterCardOverlay) {
    return;
  }

  collapseCharacterCard();
}

function onCanvasDragOver(event) {
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

function onCanvasDrop(event) {
  event.preventDefault();
  const cardId = event.dataTransfer?.getData("text/plain");
  if (!cardId) {
    return;
  }

  const point = getCanvasPoint(event);
  const cell = getCellFromPoint(point);
  if (!cell || isCellOccupied(cell)) {
    return;
  }

  placeCardOnBoard(cardId, cell);
  markGameDirty();
}

function onRollDie() {
  const result = Math.floor(Math.random() * 6) + 1;
  state.lastRoll = result;
  ui.diceResult.textContent = `Rolled ${result}`;
  markGameDirty();
}

function onToggleLineTool() {
  state.lineTool.active = !state.lineTool.active;
  if (!state.lineTool.active) {
    state.lineTool.fromId = null;
    state.lineTool.toId = null;
  }
  renderLineTool();
  draw();
}

function onLineToolChange() {
  state.lineTool.fromId = Number(ui.lineFromSelect.value) || null;
  state.lineTool.toId = Number(ui.lineToSelect.value) || null;
  draw();
}

function onKeyDown(event) {
  if (state.screen !== "game") {
    return;
  }
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
    return;
  }

  if ((event.key === "Delete" || event.key === "Backspace") && state.selectedObjectId) {
    event.preventDefault();
    onDeleteSelectedBoardObject();
    return;
  }

  const offsets = {
    ArrowUp: { x: 0, z: -1 },
    ArrowDown: { x: 0, z: 1 },
    ArrowLeft: { x: -1, z: 0 },
    ArrowRight: { x: 1, z: 0 },
    w: { x: 0, z: -1 },
    s: { x: 0, z: 1 },
    a: { x: -1, z: 0 },
    d: { x: 1, z: 0 },
  };

  const offset = offsets[event.key] || offsets[event.key.toLowerCase?.() || ""];
  if (!offset) {
    return;
  }

  event.preventDefault();
  panCamera(offset.x * CAMERA.panStep, offset.z * CAMERA.panStep);
}

function onDrawCard() {
  if (state.deck.length === 0) {
    ui.diceResult.textContent = "Deck empty. Reset to draw again.";
    return;
  }

  const card = state.deck.shift();
  state.drawnCards.unshift(card);
  renderDeckArea();
  markGameDirty();
}

function onResetDeck() {
  state.deck = createDeck();
  state.discard = [];
  state.drawnCards = [];
  renderDeckArea();
  renderSelectionCards();
  markGameDirty();
}

function onCalculate() {
  const expression = state.calculatorExpression.trim();
  if (!expression) {
    ui.calculatorResult.textContent = "Enter a calculation.";
    return;
  }

  if (!/^[\d+\-*/().\s]+$/.test(expression)) {
    ui.calculatorResult.textContent = "Use only numbers and + - * / ( ).";
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression});`)();
    if (!Number.isFinite(result)) {
      ui.calculatorResult.textContent = "Result is not a real number.";
      return;
    }
    ui.calculatorResult.textContent = `${expression} = ${formatCalculatorResult(result)}`;
  } catch {
    ui.calculatorResult.textContent = "Invalid expression.";
  }
}

function onClearCalculator() {
  state.calculatorExpression = "";
  renderCalculatorDisplay();
  ui.calculatorResult.textContent = "Calculator ready.";
}

function onCalculatorPadClick(event) {
  const target = event.target instanceof Element ? event.target.closest("button") : null;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const action = target.dataset.calculatorAction;
  if (action === "equals") {
    onCalculate();
    return;
  }

  if (action === "clear") {
    onClearCalculator();
    return;
  }

  if (action === "backspace") {
    state.calculatorExpression = state.calculatorExpression.slice(0, -1);
    renderCalculatorDisplay();
    return;
  }

  const key = target.dataset.calculatorKey;
  if (!key) {
    return;
  }

  appendCalculatorKey(key);
}

function appendCalculatorKey(key) {
  state.calculatorExpression += key;
  renderCalculatorDisplay();
}

function renderCalculatorDisplay() {
  ui.calculatorDisplay.textContent = state.calculatorExpression || "0";
}

function onAddBoardObject(type) {
  const template = BOARD_OBJECT_LIBRARY.find((entry) => entry.type === type);
  if (!template) {
    return;
  }

  const targetCell = findFirstOpenArea(template.width, template.height, state.hoveredCell);
  if (!targetCell) {
    ui.diceResult.textContent = "No room for that object.";
    return;
  }

  createBoardObject(template, targetCell);
  refreshStatus();
  draw();
  markGameDirty();
}

function onAddCharacter(event) {
  event.preventDefault();
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const playableCharacter = state.playableCharacters.find((character) => character.name === ui.characterInput.value);
  const color = ui.colorInput.value;
  const team = ui.teamInput.value;
  if (!playableCharacter) {
    return;
  }

  createCharacter({
    name: playableCharacter.name,
    image: playableCharacter.image,
    color,
    team,
  });
  ui.colorInput.value = color;
  ui.teamInput.value = team;
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  window.scrollTo(scrollX, scrollY);
  draw();
}

function createCharacter({ name, image = "", color, team = "neutral", cell }) {
  const targetCell = cell || findFirstOpenCell();
  if (!targetCell) {
    return;
  }

  const character = {
    id: state.nextCharacterId,
    name,
    image,
    color,
    team,
    cards: [],
    health: DEFAULT_HEALTH,
    tacticalTokens: 0,
    ultimateTokens: 0,
    cell: { ...targetCell },
  };

  state.nextCharacterId += 1;
  state.characters.push(character);
  if (!state.lineTool.fromId) {
    state.lineTool.fromId = character.id;
  } else if (!state.lineTool.toId && state.lineTool.fromId !== character.id) {
    state.lineTool.toId = character.id;
  }
  selectCharacter(character.id);
  refreshTeamGroups();
  renderLineTool();
  refreshStatus();
  markGameDirty();
}

function seedStartingBoardObjects() {
  state.boardObjects = [];
  state.nextObjectId = 1;

  STARTING_BOARD_OBJECTS.forEach(({ type, count }) => {
    const template = BOARD_OBJECT_LIBRARY.find((entry) => entry.type === type);
    if (!template) {
      return;
    }

    for (let index = 0; index < count; index += 1) {
      const targetCell = findRandomOpenArea(template.width, template.height);
      if (!targetCell) {
        break;
      }
      createBoardObject(template, targetCell);
    }
  });
}

function createBoardObject(template, cell) {
  state.boardObjects.push({
    id: state.nextObjectId,
    type: template.type,
    label: template.label,
    width: template.width,
    height: template.height,
    color: template.color,
    cell: { ...cell },
  });
  state.nextObjectId += 1;
}

function onDeleteSelectedBoardObject() {
  if (!state.selectedObjectId) {
    ui.diceResult.textContent = "Select a building to delete.";
    return;
  }

  const object = getBoardObjectById(state.selectedObjectId);
  if (!object) {
    state.selectedObjectId = null;
    ui.diceResult.textContent = "Building no longer exists.";
    refreshStatus();
    draw();
    return;
  }

  state.boardObjects = state.boardObjects.filter((entry) => entry.id !== object.id);
  state.selectedObjectId = null;
  ui.diceResult.textContent = `${object.label} deleted.`;
  refreshStatus();
  draw();
  markGameDirty();
}

function onPointerDown(event) {
  const point = getCanvasPoint(event);
  const hit = getCharacterAtPoint(point);
  if (event.button === 0 && hit) {
    state.selectedObjectId = null;
    state.drag.type = "character";
    state.drag.characterId = hit.id;
    state.drag.startCell = { ...hit.cell };
    state.drag.targetCell = { ...hit.cell };
    state.drag.blocked = false;
    selectCharacter(hit.id);
    state.canvas.setPointerCapture(event.pointerId);
    return;
  }

  const objectHit = getBoardObjectAtPoint(point);
  if (event.button === 0 && objectHit) {
    state.selectedId = null;
    state.selectedObjectId = objectHit.id;
    const clickedCell = getCellFromPoint(point);
    state.drag.type = "object";
    state.drag.objectId = objectHit.id;
    state.drag.startCell = { ...objectHit.cell };
    state.drag.targetCell = { ...objectHit.cell };
    state.drag.objectOffset = clickedCell
      ? {
          column: clickedCell.column - objectHit.cell.column,
          row: clickedCell.row - objectHit.cell.row,
        }
      : { column: 0, row: 0 };
    state.drag.blocked = false;
    state.canvas.setPointerCapture(event.pointerId);
    return;
  }

  if (event.button === 0 || event.button === 2) {
    state.drag.type = "rotate";
    state.drag.rotationOrigin = {
      x: point.x,
      rotation: state.camera.target.rotation,
    };
    state.canvas.setPointerCapture(event.pointerId);
    return;
  }

  state.hoveredCell = getCellFromPoint(point);
  state.needsRender = true;
}

function onPointerMove(event) {
  const point = getCanvasPoint(event);

  if (state.drag.type === "rotate" && state.drag.rotationOrigin) {
    const deltaX = point.x - state.drag.rotationOrigin.x;
    state.camera.target.rotation = state.drag.rotationOrigin.rotation + (deltaX * CAMERA.orbitSpeed);
    state.needsRender = true;
    return;
  }

  const hoveredCell = getCellFromPoint(point);
  state.hoveredCell = hoveredCell;

  if (state.drag.type === "character" && state.drag.characterId) {
    state.drag.targetCell = hoveredCell;
    state.drag.blocked = hoveredCell
      ? isCellOccupied(hoveredCell, state.drag.characterId)
      : false;
  }

  if (state.drag.type === "object" && state.drag.objectId) {
    const object = getBoardObjectById(state.drag.objectId);
    if (!object || !hoveredCell) {
      state.drag.targetCell = null;
      state.drag.blocked = true;
    } else {
      const offset = state.drag.objectOffset || { column: 0, row: 0 };
      const nextCell = {
        column: hoveredCell.column - offset.column,
        row: hoveredCell.row - offset.row,
      };
      state.drag.targetCell = nextCell;
      state.drag.blocked = !canPlaceObjectAt(nextCell, object.width, object.height, object.id);
    }
  }

  state.needsRender = true;
}

function onPointerUp(event) {
  if (state.screen !== "game" || !state.canvas) {
    return;
  }
  let changed = false;
  if (state.drag.type === "character" && state.drag.characterId) {
    const character = getCharacterById(state.drag.characterId);
    if (character && state.drag.targetCell && !state.drag.blocked) {
      character.cell = { ...state.drag.targetCell };
      selectCharacter(character.id);
      refreshTeamGroups();
      changed = true;
    }
  }

  if (state.drag.type === "object" && state.drag.objectId) {
    const object = getBoardObjectById(state.drag.objectId);
    if (object && state.drag.targetCell && !state.drag.blocked) {
      object.cell = { ...state.drag.targetCell };
      changed = true;
    }
  }

  state.drag.type = null;
  state.drag.characterId = null;
  state.drag.objectId = null;
  state.drag.startCell = null;
  state.drag.targetCell = null;
  state.drag.blocked = false;
  state.drag.objectOffset = null;
  state.drag.rotationOrigin = null;

  if (state.canvas.hasPointerCapture?.(event.pointerId)) {
    state.canvas.releasePointerCapture(event.pointerId);
  }

  state.needsRender = true;
  if (changed) {
    markGameDirty();
  }
}

function onWheel(event) {
  event.preventDefault();
  const delta = event.deltaY < 0 ? CAMERA.zoomStep : -CAMERA.zoomStep;
  applyZoom(delta, getCanvasPoint(event));
}

function applyZoom(delta, pivot) {
  const previousZoom = state.camera.target.zoom;
  const nextZoom = clamp(previousZoom + delta, CAMERA.minZoom, CAMERA.maxZoom);
  if (nextZoom === previousZoom) {
    return;
  }
  state.camera.target.zoom = nextZoom;
  state.needsRender = true;
}

function draw() {
  const context = state.context;
  const width = state.canvas.clientWidth;
  const height = state.canvas.clientHeight;

  context.clearRect(0, 0, width, height);
  drawBackground(context, width, height);
  drawBoard(context);
  drawHoverCell(context);
  drawBoardObjects(context);
  drawBoardCards(context);
  drawLineOfSight(context);
  drawCharacters(context);
}

function drawBackground(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#21322b");
  gradient.addColorStop(0.55, "#1a261f");
  gradient.addColorStop(1, "#141b17");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.fillStyle = "rgba(255, 255, 255, 0.03)";
  for (let index = 0; index < 18; index += 1) {
    context.beginPath();
    context.arc(70 + index * 90, 80 + (index % 5) * 120, 2, 0, Math.PI * 2);
    context.fill();
  }
}

function drawBoard(context) {
  const top = getCellFootprint({ column: 0, row: 0 }, GRID.columns, GRID.rows, 0);
  const bottom = getCellFootprint({ column: 0, row: 0 }, GRID.columns, GRID.rows, -PROJECTION.boardDepth);

  context.fillStyle = "#7a5c39";
  fillPolygon(context, [top[2], top[3], bottom[3], bottom[2]]);

  context.fillStyle = "#5d432a";
  fillPolygon(context, [top[1], top[2], bottom[2], bottom[1]]);

  const boardGradient = context.createLinearGradient(top[0].x, top[0].y, top[2].x, top[2].y);
  boardGradient.addColorStop(0, "#dfc894");
  boardGradient.addColorStop(0.55, "#b79d6f");
  boardGradient.addColorStop(1, "#99825a");
  context.fillStyle = boardGradient;
  fillPolygon(context, top);

  context.save();
  clipPolygon(context, top);

  const stripeLimit = GRID.rows + GRID.columns;
  for (let stripe = -GRID.rows; stripe < stripeLimit; stripe += 1) {
    const stripePoints = [
      projectPoint(stripe, 0, 0),
      projectPoint(stripe + 0.38, 0, 0),
      projectPoint(stripe + GRID.rows + 0.38, GRID.rows, 0),
      projectPoint(stripe + GRID.rows, GRID.rows, 0),
    ];
    context.fillStyle = "rgba(72, 47, 20, 0.08)";
    fillPolygon(context, stripePoints);
  }

  drawZones(context);

  context.strokeStyle = "rgba(71, 46, 23, 0.34)";
  context.lineWidth = 1;
  for (let column = 0; column <= GRID.columns; column += 1) {
    drawSegment(context, projectPoint(column, 0, 0), projectPoint(column, GRID.rows, 0));
  }

  for (let row = 0; row <= GRID.rows; row += 1) {
    drawSegment(context, projectPoint(0, row, 0), projectPoint(GRID.columns, row, 0));
  }

  context.restore();

  context.strokeStyle = "#f4e4b6";
  context.lineWidth = 3;
  strokePolygon(context, top);
}

function drawZones(context) {
  for (const zone of ZONES) {
    const polygon = getCellFootprint(
      { column: zone.columnStart, row: zone.rowStart },
      zone.columnEnd - zone.columnStart + 1,
      zone.rowEnd - zone.rowStart + 1,
      0.02,
    );

    context.fillStyle = zone.color;
    fillPolygon(context, polygon);

    context.strokeStyle = zone.border;
    context.lineWidth = 2;
    strokePolygon(context, polygon);

    const markerColumn = zone.columnStart + 1;
    const markerRow = zone.rowStart + 1;
    const marker = projectPoint(markerColumn + 0.5, markerRow + 0.5, 0.04);
    context.fillStyle = "rgba(255, 246, 227, 0.88)";
    context.font = `${Math.max(18, 18 * state.camera.current.zoom)}px Georgia`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(zone.id), marker.x, marker.y);
  }
}

function drawHoverCell(context) {
  const cell = state.drag.type === "character" || state.drag.type === "object"
    ? state.drag.targetCell
    : state.hoveredCell;
  if (!cell) {
    return;
  }

  const width = state.drag.type === "object" && state.drag.objectId
    ? getBoardObjectById(state.drag.objectId)?.width || 1
    : 1;
  const height = state.drag.type === "object" && state.drag.objectId
    ? getBoardObjectById(state.drag.objectId)?.height || 1
    : 1;
  const polygon = getCellFootprint(cell, width, height, 0.03);

  context.fillStyle = state.drag.blocked ? "rgba(210, 92, 72, 0.36)" : "rgba(87, 186, 170, 0.28)";
  fillPolygon(context, polygon);
  context.strokeStyle = state.drag.blocked ? "rgba(242, 179, 164, 0.9)" : "rgba(204, 255, 241, 0.9)";
  context.lineWidth = 2;
  strokePolygon(context, polygon);
}

function drawCharacters(context) {
  const cells = new Map();
  for (const character of state.characters) {
    const key = getCellKey(character.cell);
    if (!cells.has(key)) {
      cells.set(key, []);
    }
    cells.get(key).push(character);
  }

  for (const characters of cells.values()) {
    characters.forEach((character, index) => {
      const isDragging = state.drag.type === "character" && state.drag.characterId === character.id;
      const cell = isDragging && state.drag.targetCell ? state.drag.targetCell : character.cell;
      drawCharacter(context, character, cell, index, isDragging);
    });
  }
}

function drawBoardObjects(context) {
  for (const object of state.boardObjects) {
    const isDragging = state.drag.type === "object" && state.drag.objectId === object.id && state.drag.targetCell;
    const isSelected = state.selectedObjectId === object.id;
    const objectCell = isDragging ? state.drag.targetCell : object.cell;
    const faces = getCuboidFaces(objectCell, object.width, object.height, PROJECTION.houseHeight, 0);
    const roof = getRoofFaces(objectCell, object.width, object.height, PROJECTION.houseHeight, 0.62);
    const wallTopColor = "#8a5d36";
    const wallLightColor = "#7b512f";
    const wallMidColor = "#6f4728";
    const wallDarkColor = "#5e3b21";
    const roofLightColor = "#70412a";
    const roofDarkColor = "#56301e";
    const fillFaces = [
      { points: faces.bottom, color: wallDarkColor },
      { points: faces.north, color: wallMidColor },
      { points: faces.west, color: wallLightColor },
      { points: faces.east, color: wallDarkColor },
      { points: faces.south, color: wallMidColor },
      { points: faces.top, color: wallTopColor },
      { points: roof.northGable, color: wallDarkColor },
      { points: roof.southGable, color: wallMidColor },
      { points: roof.westSlope, color: roofLightColor },
      { points: roof.eastSlope, color: roofDarkColor },
    ].sort((left, right) => {
      return getAverageFaceDepth(left.points) - getAverageFaceDepth(right.points);
    });

    context.strokeStyle = isDragging ? "#fff8e4" : isSelected ? "#ffe6a0" : "#3b2314";
    context.lineWidth = isDragging ? 3 : isSelected ? 4 : 2;

    for (const face of fillFaces) {
      context.fillStyle = face.color;
      fillPolygon(context, face.points);
      strokePolygon(context, face.points);
    }

  }
}

function drawBoardCards(context) {
  for (const card of state.boardCards) {
    const polygon = getProjectedRect(card.cell.column + 0.18, card.cell.row + 0.12, 0.64, 0.9, PROJECTION.cardHeight);
    const shadow = polygon.map((point) => ({ x: point.x + 5, y: point.y + 8 }));

    context.fillStyle = "rgba(12, 18, 14, 0.28)";
    fillPolygon(context, shadow);

    context.fillStyle = "rgba(253, 246, 230, 0.96)";
    fillPolygon(context, polygon);

    context.strokeStyle = "rgba(91, 64, 40, 0.72)";
    context.lineWidth = 2;
    strokePolygon(context, polygon);

    const center = getPolygonCenter(polygon);
    context.fillStyle = "rgba(67, 44, 27, 0.9)";
    context.font = `${Math.max(9, 10 * state.camera.current.zoom)}px Georgia`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Card", center.x, center.y);
  }
}

function drawLineOfSight(context) {
  if (!state.lineTool.active || !state.lineTool.fromId || !state.lineTool.toId || state.lineTool.fromId === state.lineTool.toId) {
    return;
  }

  const fromCharacter = getCharacterById(state.lineTool.fromId);
  const toCharacter = getCharacterById(state.lineTool.toId);
  if (!fromCharacter || !toCharacter) {
    return;
  }

  const fromPoint = getCellCenter(fromCharacter.cell);
  const toPoint = getCellCenter(toCharacter.cell);
  const blocked = isLineBlockedByHouse(fromPoint, toPoint);

  context.strokeStyle = blocked ? "#d95858" : "#9bf0b5";
  context.lineWidth = 4;
  context.setLineDash([10, 8]);
  context.beginPath();
  context.moveTo(fromPoint.x, fromPoint.y);
  context.lineTo(toPoint.x, toPoint.y);
  context.stroke();
  context.setLineDash([]);
}

function drawCharacter(context, character, cell, stackIndex, isDragging) {
  const center = projectPoint(cell.column + 0.5, cell.row + 0.5, PROJECTION.tokenHeight + stackIndex * 0.08 + (isDragging ? 0.16 : 0));
  const base = projectPoint(cell.column + 0.5, cell.row + 0.5, 0.03);
  const radiusX = TOKEN.radius * state.camera.current.zoom * 1.05;
  const radiusY = TOKEN.radius * state.camera.current.zoom * 0.54;
  const bodyHeight = Math.max(16, GRID.cellSize * state.camera.current.zoom * 0.72);

  context.fillStyle = "rgba(9, 16, 13, 0.24)";
  context.beginPath();
  context.ellipse(base.x, base.y + radiusY * 1.4, radiusX * 1.22, radiusY * 0.88, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = shadeColor(character.color, -28);
  context.beginPath();
  context.moveTo(center.x - radiusX, center.y);
  context.lineTo(center.x - radiusX, center.y + bodyHeight);
  context.bezierCurveTo(center.x - radiusX * 0.2, center.y + bodyHeight + radiusY, center.x + radiusX * 0.2, center.y + bodyHeight + radiusY, center.x + radiusX, center.y + bodyHeight);
  context.lineTo(center.x + radiusX, center.y);
  context.closePath();
  context.fill();

  const tokenGradient = context.createRadialGradient(
    center.x - radiusX * 0.45,
    center.y - radiusY * 0.8,
    radiusY * 0.25,
    center.x,
    center.y,
    radiusX * 1.15,
  );
  tokenGradient.addColorStop(0, "#fff8ef");
  tokenGradient.addColorStop(0.16, character.color);
  tokenGradient.addColorStop(1, shadeColor(character.color, -22));

  context.fillStyle = tokenGradient;
  context.beginPath();
  context.ellipse(center.x, center.y, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();

  context.lineWidth = state.selectedId === character.id ? 4 : 2;
  context.strokeStyle = state.selectedId === character.id ? "#fffdf4" : "rgba(255, 243, 222, 0.7)";
  context.stroke();

  drawLabel(context, character.name, center.x, center.y - bodyHeight * 0.62);
}

function drawLabel(context, text, centerX, baselineY) {
  context.font = "600 13px Georgia";
  const width = context.measureText(text).width + 18;
  const height = 24;
  const x = centerX - width / 2;
  const y = baselineY - height;

  context.fillStyle = "rgba(11, 19, 15, 0.78)";
  roundRect(context, x, y, width, height, 12);
  context.fill();

  context.fillStyle = "#fff6ea";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, centerX, y + height / 2 + 0.5);
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function getProjectionMetrics() {
  const size = GRID.cellSize * state.camera.current.zoom;
  return {
    screenX: size * PROJECTION.columnX,
    screenY: size * PROJECTION.columnY,
    lift: size * PROJECTION.lift,
    tileWidth: state.boardMetrics.tileWidth,
    tileHeight: state.boardMetrics.tileHeight,
  };
}

function getBoardCenter() {
  return {
    column: GRID_COLS / 2,
    row: GRID_ROWS / 2,
  };
}

function orbitCamera(worldX, worldZ) {
  const cos = Math.cos(state.camera.current.rotation);
  const sin = Math.sin(state.camera.current.rotation);
  return {
    x: (worldX * cos) - (worldZ * sin),
    z: (worldX * sin) + (worldZ * cos),
  };
}

function getCameraScreenOrigin() {
  return {
    x: state.canvas.clientWidth / 2,
    y: state.canvas.clientHeight * 0.56,
  };
}

function projectPoint(column, row, elevation = 0) {
  const metrics = getProjectionMetrics();
  const origin = getCameraScreenOrigin();
  const worldX = column - state.camera.current.lookAtColumn;
  const worldZ = row - state.camera.current.lookAtRow;
  const cameraSpace = orbitCamera(worldX, worldZ);
  return {
    x: origin.x + ((cameraSpace.x - cameraSpace.z) * metrics.screenX),
    y: origin.y + ((cameraSpace.x + cameraSpace.z) * metrics.screenY) - (elevation * metrics.lift),
  };
}

function getCellFootprint(cell, width = 1, height = 1, elevation = 0) {
  return [
    projectPoint(cell.column, cell.row, elevation),
    projectPoint(cell.column + width, cell.row, elevation),
    projectPoint(cell.column + width, cell.row + height, elevation),
    projectPoint(cell.column, cell.row + height, elevation),
  ];
}

function getProjectedRect(column, row, width, height, elevation = 0) {
  return [
    projectPoint(column, row, elevation),
    projectPoint(column + width, row, elevation),
    projectPoint(column + width, row + height, elevation),
    projectPoint(column, row + height, elevation),
  ];
}

function getCuboidFaces(cell, width, height, topElevation, bottomElevation = 0) {
  const top = getCellFootprint(cell, width, height, topElevation);
  const bottom = getCellFootprint(cell, width, height, bottomElevation);

  return {
    top,
    bottom: [bottom[3], bottom[2], bottom[1], bottom[0]],
    north: [top[0], top[1], bottom[1], bottom[0]],
    east: [top[1], top[2], bottom[2], bottom[1]],
    south: [top[2], top[3], bottom[3], bottom[2]],
    west: [top[3], top[0], bottom[0], bottom[3]],
  };
}

function getRoofFaces(cell, width, height, baseElevation, roofHeight) {
  const ridgeStart = projectPoint(cell.column + (width / 2), cell.row, baseElevation + roofHeight);
  const ridgeEnd = projectPoint(cell.column + (width / 2), cell.row + height, baseElevation + roofHeight);
  const top = getCellFootprint(cell, width, height, baseElevation);

  return {
    westSlope: [top[0], ridgeStart, ridgeEnd, top[3]],
    eastSlope: [ridgeStart, top[1], top[2], ridgeEnd],
    northGable: [top[0], top[1], ridgeStart],
    southGable: [top[3], ridgeEnd, top[2]],
    ridge: [ridgeStart, ridgeEnd],
  };
}

function getPolygonBounds(points) {
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
    x: Math.min(...xs),
    y: Math.min(...ys),
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
    size: Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)),
  };
}

function fillPolygon(context, points) {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    context.lineTo(points[index].x, points[index].y);
  }
  context.closePath();
  context.fill();
}

function strokePolygon(context, points) {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    context.lineTo(points[index].x, points[index].y);
  }
  context.closePath();
  context.stroke();
}

function clipPolygon(context, points) {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let index = 1; index < points.length; index += 1) {
    context.lineTo(points[index].x, points[index].y);
  }
  context.closePath();
  context.clip();
}

function drawSegment(context, from, to) {
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
}

function getPolygonCenter(points) {
  return {
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
  };
}

function getAverageFaceDepth(points) {
  return points.reduce((sum, point) => sum + point.y, 0) / points.length;
}

function getInsetPolygon(points, amount) {
  const center = getPolygonCenter(points);
  return points.map((point) => ({
    x: point.x + ((center.x - point.x) * amount),
    y: point.y + ((center.y - point.y) * amount),
  }));
}

function getCanvasPoint(event) {
  const bounds = state.canvas.getBoundingClientRect();
  const boardWidth = state.boardMetrics.internalWidth || state.canvas.clientWidth;
  const boardHeight = state.boardMetrics.internalHeight || state.canvas.clientHeight;
  const scaleX = boardWidth / Math.max(bounds.width, 1);
  const scaleY = boardHeight / Math.max(bounds.height, 1);
  return {
    x: (event.clientX - bounds.left) * scaleX,
    y: (event.clientY - bounds.top) * scaleY,
  };
}

function getCellFromPoint(point) {
  const boardPolygon = getCellFootprint({ column: 0, row: 0 }, GRID_COLS, GRID_ROWS, 0);
  if (!pointInPolygon(point, boardPolygon)) {
    return null;
  }

  const metrics = getProjectionMetrics();
  const origin = getCameraScreenOrigin();
  const dx = point.x - origin.x;
  const dy = point.y - origin.y;
  const cameraX = ((dx / metrics.screenX) + (dy / metrics.screenY)) / 2;
  const cameraZ = ((dy / metrics.screenY) - (dx / metrics.screenX)) / 2;
  const cos = Math.cos(state.camera.current.rotation);
  const sin = Math.sin(state.camera.current.rotation);
  const worldX = (cameraX * cos) + (cameraZ * sin);
  const worldZ = (-cameraX * sin) + (cameraZ * cos);
  const edgeEpsilon = 0.000001;
  const exactColumn = worldX + state.camera.current.lookAtColumn;
  const exactRow = worldZ + state.camera.current.lookAtRow;
  const clampedColumn = clamp(exactColumn, 0, GRID_COLS - edgeEpsilon);
  const clampedRow = clamp(exactRow, 0, GRID_ROWS - edgeEpsilon);
  const column = Math.floor(clampedColumn);
  const row = Math.floor(clampedRow);

  if (column < 0 || row < 0 || column >= GRID_COLS || row >= GRID_ROWS) {
    return null;
  }

  return { column, row };
}

function getCellScreenRect(cell) {
  const polygon = getCellFootprint(cell, 1, 1, 0);
  return getPolygonBounds(polygon);
}

function getCellCenter(cell) {
  return projectPoint(cell.column + 0.5, cell.row + 0.5, PROJECTION.tokenHeight);
}

function getCharacterAtPoint(point) {
  let closestCharacter = null;
  let closestScore = Number.POSITIVE_INFINITY;

  for (let index = state.characters.length - 1; index >= 0; index -= 1) {
    const character = state.characters[index];
    const occupants = getOccupants(character.cell);
    const stackIndex = occupants.findIndex((entry) => entry.id === character.id);
    const center = projectPoint(character.cell.column + 0.5, character.cell.row + 0.5, PROJECTION.tokenHeight + stackIndex * 0.08);
    const radiusX = TOKEN.radius * state.camera.current.zoom * 1.1;
    const radiusY = TOKEN.radius * state.camera.current.zoom * 0.62;
    const ellipseDistance = (((point.x - center.x) ** 2) / (radiusX ** 2)) + (((point.y - center.y) ** 2) / (radiusY ** 2));
    if (ellipseDistance <= 1.2) {
      return character;
    }

    const distance = Math.hypot(point.x - center.x, point.y - center.y);
    const generousRadius = Math.max(radiusX * 1.8, 26);
    if (distance <= generousRadius && distance < closestScore) {
      closestCharacter = character;
      closestScore = distance;
    }
  }

  return closestCharacter;
}

function getBoardObjectAtPoint(point) {
  for (let index = state.boardObjects.length - 1; index >= 0; index -= 1) {
    const object = state.boardObjects[index];
    const polygon = getCellFootprint(object.cell, object.width, object.height, PROJECTION.houseHeight);
    if (pointInPolygon(point, polygon) || pointInPolygon(point, getCellFootprint(object.cell, object.width, object.height, 0))) {
      return object;
    }
  }

  return null;
}

function placeCardOnBoard(cardId, cell) {
  const cardIndex = state.drawnCards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return;
  }

  const [card] = state.drawnCards.splice(cardIndex, 1);
  state.boardCards.push({
    id: state.nextBoardCardId,
    title: card.title,
    image: card.image,
    cell: { ...cell },
  });
  state.nextBoardCardId += 1;
  renderDeckArea();
  draw();
  markGameDirty();
}

function isCellOccupied(cell, excludedId, excludedObjectId) {
  if (isCellBlockedByObject(cell, excludedObjectId)) {
    return true;
  }

  if (state.boardCards.some((card) => card.cell.column === cell.column && card.cell.row === cell.row)) {
    return true;
  }

  return state.characters.some((character) => {
    if (character.id === excludedId) {
      return false;
    }
    return character.cell.column === cell.column && character.cell.row === cell.row;
  });
}

function isCellBlockedByObject(cell, excludedObjectId) {
  return state.boardObjects.some((object) => {
    if (object.id === excludedObjectId) {
      return false;
    }
    return isCellInsideObject(cell, object);
  });
}

function isCellInsideObject(cell, object) {
  return (
    cell.column >= object.cell.column &&
    cell.column < object.cell.column + object.width &&
    cell.row >= object.cell.row &&
    cell.row < object.cell.row + object.height
  );
}

function getOccupants(cell) {
  return state.characters.filter((character) => {
    return character.cell.column === cell.column && character.cell.row === cell.row;
  });
}

function findFirstOpenCell() {
  for (let row = 0; row < GRID_ROWS; row += 1) {
    for (let column = 0; column < GRID_COLS; column += 1) {
      if (!isCellOccupied({ column, row })) {
        return { column, row };
      }
    }
  }
  return null;
}

function getCharacterById(id) {
  return state.characters.find((character) => character.id === id) || null;
}

function getBoardObjectById(id) {
  return state.boardObjects.find((object) => object.id === id) || null;
}

function getZoneForCell(cell) {
  return ZONES.find((zone) => {
    return (
      cell.column >= zone.columnStart &&
      cell.column <= zone.columnEnd &&
      cell.row >= zone.rowStart &&
      cell.row <= zone.rowEnd
    );
  }) || null;
}

function getZoneColorHex(zoneId) {
  const map = {
    1: 0xb96256,
    2: 0xc79a5d,
    3: 0x7da65f,
    4: 0x5a9d94,
    5: 0x688bc8,
    6: 0x8a6cc0,
  };
  return map[zoneId] || 0xc4ab7e;
}

function renderLineTool() {
  ui.toggleLineTool.textContent = state.lineTool.active ? "Deselect" : "Select";
  ui.lineFromSelect.disabled = !state.lineTool.active || state.characters.length === 0;
  ui.lineToSelect.disabled = !state.lineTool.active || state.characters.length === 0;

  const options = [`<option value="">Select piece</option>`].concat(
    state.characters.map((character) => `<option value="${character.id}">${escapeHtml(character.name)} (${escapeHtml(formatTeamLabel(character.team))})</option>`),
  ).join("");

  ui.lineFromSelect.innerHTML = options;
  ui.lineToSelect.innerHTML = options;
  ui.lineFromSelect.value = state.lineTool.fromId ? String(state.lineTool.fromId) : "";
  ui.lineToSelect.value = state.lineTool.toId ? String(state.lineTool.toId) : "";
}

function renderTeamOptions() {
  ui.teamInput.innerHTML = TEAMS.map((team) => {
    return `<option value="${team.value}">${escapeHtml(state.teamNames[team.value])}</option>`;
  }).join("");
}

function onTeamNameInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  const teamValue = input.dataset.teamValue;
  if (!teamValue) {
    return;
  }

  const fallback = TEAMS.find((team) => team.value === teamValue)?.label || "Team";
  const nextName = input.value.trim() || fallback;
  state.teamNames[teamValue] = nextName;
  if (input.value.trim() === "") {
    input.value = nextName;
  }

  const currentValue = ui.teamInput.value;
  renderTeamOptions();
  ui.teamInput.value = currentValue;
  refreshTeamGroups();
  renderLineTool();

  if (state.selectedId) {
    selectCharacter(state.selectedId);
  }
  markGameDirty();
}

function onSelectionControlsClick(event) {
  const target = event.target instanceof Element ? event.target : null;
  const character = getCharacterById(state.selectedId);
  const editTeamButton = target?.closest(".edit-team-button");
  if (editTeamButton) {
    const panel = ui.selectionControls.querySelector(".team-edit-panel");
    panel?.toggleAttribute("hidden");
    return;
  }

  const deleteCharacterButton = target?.closest(".delete-character-button");
  if (deleteCharacterButton && character) {
    state.characters = state.characters.filter((entry) => entry.id !== character.id);
    state.selectedId = null;
    if (state.lineTool.fromId === character.id) {
      state.lineTool.fromId = null;
    }
    if (state.lineTool.toId === character.id) {
      state.lineTool.toId = null;
    }
    refreshTeamGroups();
    renderLineTool();
    selectCharacter(null);
    draw();
    markGameDirty();
    return;
  }

  const saveTeamButton = target?.closest(".save-team-button");
  if (!saveTeamButton) {
    return;
  }

  const select = ui.selectionControls.querySelector(".team-edit-select");
  if (!(select instanceof HTMLSelectElement) || !character) {
    return;
  }

  character.team = select.value;
  refreshTeamGroups();
  renderLineTool();
  selectCharacter(character.id);
  draw();
  markGameDirty();
}

function onSelectionControlsChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  const character = getCharacterById(state.selectedId);
  if (!character) {
    return;
  }

  if (target.matches("[data-field='health']")) {
    character.health = clamp(Number(target.value) || 0, 0, 999);
    target.value = String(character.health);
  }

  if (target.matches("[data-field='tacticalTokens']")) {
    character.tacticalTokens = clamp(Number(target.value) || 0, 0, 99);
    target.value = String(character.tacticalTokens);
  }

  if (target.matches("[data-field='ultimateTokens']")) {
    character.ultimateTokens = clamp(Number(target.value) || 0, 0, 99);
    target.value = String(character.ultimateTokens);
  }

  selectCharacter(character.id);
  draw();
  markGameDirty();
}

function selectCharacter(id) {
  state.selectedId = id;
  if (id) {
    state.selectedObjectId = null;
  }
  const character = getCharacterById(id);
  if (!character) {
    ui.selectionInfo.textContent = "No piece selected.";
    renderSelectionControls();
    renderSelectedCharacterCard();
    renderSelectionCards();
    renderDeckArea();
    refreshStatus();
    return;
  }

  ui.selectionInfo.innerHTML = `
    <strong>${escapeHtml(character.name)}</strong>
    <span>Cell ${formatCell(character.cell)}</span>
    <span>Team ${escapeHtml(formatTeamLabel(character.team))}</span>
    <small>Health ${character.health} | Tactical ${character.tacticalTokens} | Ultimate ${character.ultimateTokens}</small>
  `;
  renderSelectionControls();
  renderSelectedCharacterCard();
  renderSelectionCards();
  renderDeckArea();
  refreshStatus();
}

function renderSelectionControls() {
  const character = getCharacterById(state.selectedId);

  if (!character) {
    ui.selectionControls.innerHTML = `<div class="selection-controls-empty">Select a piece to edit health, team, and tokens.</div>`;
    return;
  }

  ui.selectionControls.innerHTML = `
    <section class="selection-panel">
      <div class="selection-panel-header">
        <strong>Piece Controls</strong>
        <div class="selection-panel-actions">
          <button type="button" class="edit-team-button ghost-button">Edit Team</button>
          <button type="button" class="delete-character-button ghost-button">Delete Character</button>
        </div>
      </div>
      <div class="selection-grid">
        <label class="field compact-field">
          <span>Health</span>
          <input type="number" min="0" max="999" step="1" data-field="health" value="${character.health}" />
        </label>
        <label class="field compact-field">
          <span>Tactical Tokens</span>
          <input type="number" min="0" max="99" step="1" data-field="tacticalTokens" value="${character.tacticalTokens}" />
        </label>
        <label class="field compact-field">
          <span>Ultimate Tokens</span>
          <input type="number" min="0" max="99" step="1" data-field="ultimateTokens" value="${character.ultimateTokens}" />
        </label>
      </div>
      <div class="team-edit-panel" hidden>
        <label class="field compact-field">
          <span>Assign Team</span>
          <select class="team-edit-select">
            ${TEAMS.map((team) => `<option value="${team.value}"${team.value === character.team ? " selected" : ""}>${escapeHtml(formatTeamLabel(team.value))}</option>`).join("")}
          </select>
        </label>
        <p class="hint">Move the piece to Neutral to remove it from its current team.</p>
        <button type="button" class="primary-button save-team-button">Save Team</button>
      </div>
    </section>
  `;
}

function renderSelectedCharacterCard() {
  const character = getCharacterById(state.selectedId);

  if (!character) {
    state.expandedCharacterId = null;
    ui.selectedCharacterCard.innerHTML = `<div class="selected-character-empty">Select a piece to view the character card.</div>`;
    return;
  }

  ui.selectedCharacterCard.innerHTML = `
    <article class="character-card-view">
      <img src="${escapeHtml(character.image)}" alt="${escapeHtml(character.name)}" class="character-card-image" />
      <div class="character-card-meta">
        <strong>${escapeHtml(character.name)}</strong>
        <small>${escapeHtml(formatTeamLabel(character.team))}</small>
      </div>
      <button type="button" class="expand-character-card-button">Expand</button>
    </article>
  `;
}

function renderSelectionCards() {
  const character = getCharacterById(state.selectedId);
  ui.assignedCards.innerHTML = "";

  if (!character) {
    ui.assignedCards.innerHTML = `<div class="assigned-empty">Select a piece to view assigned cards.</div>`;
    return;
  }

  if (character.cards.length === 0) {
    ui.assignedCards.innerHTML = `<div class="assigned-empty">No cards assigned to ${escapeHtml(character.name)}.</div>`;
    return;
  }

  for (const card of character.cards) {
    const item = document.createElement("article");
    const isExpanded = state.expandedAssignedCardId === card.id;
    item.className = `assigned-card${isExpanded ? " expanded" : ""}`;
    item.dataset.cardId = card.id;
    item.innerHTML = `
      <img src="${escapeHtml(card.image)}" alt="${escapeHtml(card.title)}" class="assigned-card-image" />
      <div class="assigned-card-meta">
        <strong>${escapeHtml(card.title)}</strong>
        <small>${escapeHtml(card.meta)}</small>
      </div>
      <div class="assigned-card-actions">
        <button type="button" class="discard-assigned-card-button" data-card-id="${escapeHtml(card.id)}">Discard</button>
        <button type="button" class="expand-assigned-card-button" data-card-id="${escapeHtml(card.id)}">${isExpanded ? "Collapse" : "Expand"}</button>
      </div>
    `;
    ui.assignedCards.appendChild(item);
  }
}

function assignCardToCharacter(cardId, characterId) {
  const character = getCharacterById(characterId);
  if (!character) {
    return;
  }

  const cardIndex = state.drawnCards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return;
  }

  const [card] = state.drawnCards.splice(cardIndex, 1);
  character.cards.unshift(card);
  renderDeckArea();
  renderSelectionCards();
  markGameDirty();
}

function discardDrawnCard(cardId) {
  const cardIndex = state.drawnCards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return;
  }

  const [card] = state.drawnCards.splice(cardIndex, 1);
  state.discard.unshift(card);
  renderDeckArea();
  markGameDirty();
}

function discardAssignedCard(cardId) {
  const character = getCharacterById(state.selectedId);
  if (!character) {
    return;
  }

  const cardIndex = character.cards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return;
  }

  const [card] = character.cards.splice(cardIndex, 1);
  state.discard.unshift(card);
  if (state.expandedAssignedCardId === cardId) {
    state.expandedAssignedCardId = null;
  }
  renderSelectionCards();
  renderDeckArea();
  markGameDirty();
}

function expandCharacterCard() {
  const character = getCharacterById(state.selectedId);
  if (!character) {
    return;
  }

  state.expandedCharacterId = character.id;
  ui.characterCardOverlayImage.src = character.image;
  ui.characterCardOverlayImage.alt = character.name;
  ui.characterCardOverlayTitle.textContent = character.name;
  ui.characterCardOverlaySubtitle.textContent = formatTeamLabel(character.team);
  ui.characterCardOverlay.hidden = false;
}

function collapseCharacterCard() {
  state.expandedCharacterId = null;
  ui.characterCardOverlay.hidden = true;
  ui.characterCardOverlayImage.src = "";
  ui.characterCardOverlayImage.alt = "";
  ui.characterCardOverlayTitle.textContent = "";
  ui.characterCardOverlaySubtitle.textContent = "";
}

function toggleAssignedCardSize(cardId) {
  state.expandedAssignedCardId = state.expandedAssignedCardId === cardId ? null : cardId;
  renderSelectionCards();
}

function renderCharacterOptions() {
  if (state.characters.length === 0) {
    return `<option value="">No pieces available</option>`;
  }

  return state.characters.map((character) => {
    const isSelected = character.id === state.selectedId ? " selected" : "";
    return `<option value="${character.id}"${isSelected}>${escapeHtml(character.name)} (${escapeHtml(formatTeamLabel(character.team))})</option>`;
  }).join("");
}

function refreshRoster() {
  return;
}

function refreshTeamGroups() {
  ui.teamGroups.innerHTML = "";

  for (const team of TEAMS) {
    const section = document.createElement("section");
    section.className = "team-group";
    const members = state.characters.filter((character) => character.team === team.value);

    section.innerHTML = `
      <div class="team-group-header">
        <input type="text" class="team-group-name" data-team-value="${team.value}" value="${escapeHtml(formatTeamLabel(team.value))}" maxlength="24" />
        <span>${members.length}</span>
      </div>
    `;

    if (members.length === 0) {
      const empty = document.createElement("div");
      empty.className = "team-group-empty";
      empty.textContent = "No pieces assigned.";
      section.appendChild(empty);
    } else {
      const list = document.createElement("div");
      list.className = "team-member-list";

      for (const character of members) {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "team-member";
        item.innerHTML = `
          <span class="swatch" style="background:${escapeHtml(character.color)}"></span>
          <span class="character-meta">
            <strong>${escapeHtml(character.name)}</strong>
            <small>${formatCell(character.cell)} | HP ${character.health}</small>
          </span>
        `;
        item.addEventListener("click", () => {
          selectCharacter(character.id);
          draw();
        });
        list.appendChild(item);
      }

      section.appendChild(list);
    }

    ui.teamGroups.appendChild(section);
  }
}

function refreshStatus() {
  if (ui.hoveredCell) {
    ui.hoveredCell.textContent = state.hoveredCell ? formatCell(state.hoveredCell) : "-";
  }
  if (ui.zoomLevel) {
    ui.zoomLevel.textContent = `${Math.round(state.camera.current.zoom * 100)}%`;
  }
  if (ui.deleteBoardObject) {
    ui.deleteBoardObject.disabled = !state.selectedObjectId;
  }
  renderMultiplayerStatus();
}

function onHostLobby() {
  connectMultiplayer();
  if (!state.multiplayer.socket) {
    return;
  }

  const roomCode = ui.roomCodeInput.value.trim().toUpperCase();
  state.multiplayer.socket.emit("host_lobby", {
    playerName: getPlayerName(),
    roomCode,
    stateSnapshot: exportGameState(),
  });
  state.multiplayer.status = roomCode ? `Creating lobby ${roomCode}...` : "Creating lobby...";
  renderMultiplayerStatus();
}

function onJoinLobby() {
  connectMultiplayer();
  if (!state.multiplayer.socket) {
    return;
  }

  const roomCode = ui.roomCodeInput.value.trim().toUpperCase();
  if (!roomCode) {
    state.multiplayer.status = "Enter a room code to join.";
    renderMultiplayerStatus();
    return;
  }

  state.multiplayer.socket.emit("join_lobby", {
    roomCode,
    playerName: getPlayerName(),
  });
  state.multiplayer.status = `Joining ${roomCode}...`;
  renderMultiplayerStatus();
}

function onLeaveLobby() {
  if (!state.multiplayer.socket || !state.multiplayer.roomCode) {
    state.multiplayer.status = "Not currently in a lobby.";
    renderMultiplayerStatus();
    return;
  }

  window.clearTimeout(state.multiplayer.syncTimer);
  state.multiplayer.socket.emit("leave_lobby");
  resetLobbyState("Left lobby.");
  state.screen = "lobby";
  state.canvas = null;
  state.context = null;
  mountUi();
}

function connectMultiplayer() {
  if (state.multiplayer.socket) {
    return;
  }

  if (typeof window.io !== "function") {
    state.multiplayer.status = "Socket server unavailable. Start with npm run dev.";
    renderMultiplayerStatus();
    return;
  }

  const socket = window.io();
  state.multiplayer.socket = socket;

  socket.on("connect", () => {
    state.multiplayer.connected = true;
    state.multiplayer.status = state.multiplayer.roomCode
      ? `Connected to ${state.multiplayer.roomCode}.`
      : "Connected. Host or join a lobby.";
    renderMultiplayerStatus();
  });

  socket.on("disconnect", () => {
    state.multiplayer.connected = false;
    state.multiplayer.status = "Disconnected from server.";
    renderMultiplayerStatus();
  });

  socket.on("joined_lobby", (payload) => {
    state.multiplayer.roomCode = payload.roomCode || "";
    state.multiplayer.status = payload.message || `Joined ${state.multiplayer.roomCode}.`;
    enterGameScreen();
    if (payload.stateSnapshot) {
      applyGameStateSnapshot(payload.stateSnapshot);
    }
    renderMultiplayerStatus();
  });

  socket.on("state_sync", (payload) => {
    if (!payload?.stateSnapshot) {
      return;
    }
    applyGameStateSnapshot(payload.stateSnapshot);
    state.multiplayer.status = `Synced with lobby ${state.multiplayer.roomCode}.`;
    renderMultiplayerStatus();
  });

  socket.on("lobby_left", () => {
    resetLobbyState("Left lobby.");
    state.screen = "lobby";
    state.canvas = null;
    state.context = null;
    mountUi();
  });

  socket.on("lobby_error", (payload) => {
    state.multiplayer.status = payload?.message || "Lobby error.";
    renderMultiplayerStatus();
  });

  socket.on("lobby_status", (payload) => {
    state.multiplayer.status = payload?.message || state.multiplayer.status;
    renderMultiplayerStatus();
  });
}

function getPlayerName() {
  const playerName = ui.playerNameInput.value.trim() || "Player";
  ui.playerNameInput.value = playerName;
  state.multiplayer.playerName = playerName;
  return playerName;
}

function renderMultiplayerStatus() {
  ui.multiplayerConnection?.replaceChildren(document.createTextNode(state.multiplayer.connected ? "Online" : "Offline"));
  ui.multiplayerRoom?.replaceChildren(document.createTextNode(state.multiplayer.roomCode || "-"));
  ui.multiplayerStatus?.replaceChildren(document.createTextNode(state.multiplayer.status));
  if (ui.roomCodeInput) {
    ui.roomCodeInput.value = state.multiplayer.roomCode || "";
  }
  if (ui.playerNameInput) {
    ui.playerNameInput.value = state.multiplayer.playerName || "Player";
  }
  if (ui.topbarRoomCode) {
    ui.topbarRoomCode.textContent = state.multiplayer.roomCode || "Solo";
  }
}

function resetLobbyState(message) {
  window.clearTimeout(state.multiplayer.syncTimer);
  state.multiplayer.roomCode = "";
  state.multiplayer.status = message;
  state.multiplayer.applyingRemoteState = false;
  renderMultiplayerStatus();
}

function enterGameScreen() {
  if (state.screen === "game") {
    return;
  }
  state.screen = "game";
  mountUi();
}

function markGameDirty() {
  state.needsRender = true;
  queueMultiplayerSync();
}

function queueMultiplayerSync() {
  if (!state.multiplayer.socket || !state.multiplayer.connected || !state.multiplayer.roomCode || state.multiplayer.applyingRemoteState) {
    return;
  }

  window.clearTimeout(state.multiplayer.syncTimer);
  state.multiplayer.syncTimer = window.setTimeout(() => {
    state.multiplayer.socket.emit("push_state", {
      roomCode: state.multiplayer.roomCode,
      stateSnapshot: exportGameState(),
    });
  }, 120);
}

function exportGameState() {
  return {
    characters: structuredClone(state.characters),
    nextCharacterId: state.nextCharacterId,
    teamNames: structuredClone(state.teamNames),
    deck: structuredClone(state.deck),
    discard: structuredClone(state.discard),
    drawnCards: structuredClone(state.drawnCards),
    boardCards: structuredClone(state.boardCards),
    nextBoardCardId: state.nextBoardCardId,
    boardObjects: structuredClone(state.boardObjects),
    nextObjectId: state.nextObjectId,
    lastRoll: state.lastRoll,
    lineTool: structuredClone(state.lineTool),
  };
}

function applyGameStateSnapshot(snapshot) {
  state.multiplayer.applyingRemoteState = true;
  state.characters = snapshot.characters || [];
  state.nextCharacterId = snapshot.nextCharacterId || 1;
  state.teamNames = { ...Object.fromEntries(TEAMS.map((team) => [team.value, team.label])), ...(snapshot.teamNames || {}) };
  state.deck = snapshot.deck || [];
  state.discard = snapshot.discard || [];
  state.drawnCards = snapshot.drawnCards || [];
  state.boardCards = snapshot.boardCards || [];
  state.nextBoardCardId = snapshot.nextBoardCardId || 1;
  state.boardObjects = snapshot.boardObjects || [];
  state.nextObjectId = snapshot.nextObjectId || 1;
  state.lastRoll = snapshot.lastRoll ?? null;
  state.lineTool = { active: false, fromId: null, toId: null, ...(snapshot.lineTool || {}) };
  if (!getCharacterById(state.selectedId)) {
    state.selectedId = null;
  }
  renderTeamOptions();
  refreshTeamGroups();
  renderLineTool();
  selectCharacter(state.selectedId);
  renderDeckArea();
  renderSelectionCards();
  refreshStatus();
  draw();
  state.multiplayer.applyingRemoteState = false;
}

function isInBounds(cell) {
  return cell.column >= 0 && cell.row >= 0 && cell.column < GRID_COLS && cell.row < GRID_ROWS;
}

function formatTeamLabel(teamValue) {
  return state.teamNames[teamValue] || "Neutral";
}

function getCellKey(cell) {
  return `${cell.column}:${cell.row}`;
}

function getBlockedCellCount() {
  return state.boardObjects.reduce((count, object) => count + (object.width * object.height), 0);
}

function findFirstOpenArea(width, height, preferredCell) {
  if (preferredCell && canPlaceObjectAt(preferredCell, width, height)) {
    return preferredCell;
  }

  for (let row = 0; row <= GRID.rows - height; row += 1) {
    for (let column = 0; column <= GRID.columns - width; column += 1) {
      const cell = { column, row };
      if (canPlaceObjectAt(cell, width, height)) {
        return cell;
      }
    }
  }

  return null;
}

function findRandomOpenArea(width, height) {
  const candidates = [];
  for (let row = 0; row <= GRID_ROWS - height; row += 1) {
    for (let column = 0; column <= GRID_COLS - width; column += 1) {
      const cell = { column, row };
      if (canPlaceObjectAt(cell, width, height)) {
        candidates.push(cell);
      }
    }
  }

  if (candidates.length === 0) {
    return null;
  }

  return shuffleArray(candidates)[0];
}

function canPlaceObjectAt(cell, width, height, excludedObjectId) {
  if (!isInBounds(cell) || cell.column + width > GRID.columns || cell.row + height > GRID.rows) {
    return false;
  }

  for (let row = cell.row; row < cell.row + height; row += 1) {
    for (let column = cell.column; column < cell.column + width; column += 1) {
      if (state.characters.some((character) => character.cell.column === column && character.cell.row === row)) {
        return false;
      }

      if (state.boardCards.some((card) => card.cell.column === column && card.cell.row === row)) {
        return false;
      }

      if (isCellBlockedByObject({ column, row }, excludedObjectId)) {
        return false;
      }
    }
  }

  return true;
}

function isLineBlockedByHouse(fromPoint, toPoint) {
  return state.boardObjects.some((object) => {
    const polygon = getCellFootprint(object.cell, object.width, object.height, PROJECTION.houseHeight);
    return doesLineIntersectPolygon(fromPoint, toPoint, polygon);
  });
}

function getObjectScreenRect(object) {
  return getPolygonBounds(getCellFootprint(object.cell, object.width, object.height, PROJECTION.houseHeight));
}

function doesLineIntersectPolygon(fromPoint, toPoint, polygon) {
  if (pointInPolygon(fromPoint, polygon) || pointInPolygon(toPoint, polygon)) {
    return true;
  }

  for (let index = 0; index < polygon.length; index += 1) {
    const nextIndex = (index + 1) % polygon.length;
    if (doSegmentsIntersect(fromPoint, toPoint, polygon[index], polygon[nextIndex])) {
      return true;
    }
  }

  return false;
}

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
    const current = polygon[index];
    const before = polygon[previous];
    const intersects = ((current.y > point.y) !== (before.y > point.y))
      && (point.x < ((before.x - current.x) * (point.y - current.y) / (before.y - current.y)) + current.x);
    if (intersects) {
      inside = !inside;
    }
  }
  return inside;
}

function doSegmentsIntersect(a, b, c, d) {
  const denominator = ((d.y - c.y) * (b.x - a.x)) - ((d.x - c.x) * (b.y - a.y));
  if (denominator === 0) {
    return false;
  }

  const ua = (((d.x - c.x) * (a.y - c.y)) - ((d.y - c.y) * (a.x - c.x))) / denominator;
  const ub = (((b.x - a.x) * (a.y - c.y)) - ((b.y - a.y) * (a.x - c.x))) / denominator;
  return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
}

function formatCell(cell) {
  const letter = String.fromCharCode(65 + cell.column);
  return `${letter}${cell.row + 1}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatCardTitle(fileName) {
  return fileName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim();
}

function formatCardMeta(family, group) {
  if (family === "Events") {
    return "Event";
  }
  if (family === "Armory") {
    if (group === "Items") {
      return "";
    }
    if (group === "Upgrades") {
      return "";
    }
  }
  return group;
}

function getCardTone(family, group) {
  if (family === "Events") {
    return "crimson";
  }
  if (group === "Items") {
    return "amber";
  }
  if (group === "Upgrades") {
    return "ocean";
  }
  return "sage";
}

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[randomIndex]] = [clone[randomIndex], clone[index]];
  }
  return clone;
}

function formatCalculatorResult(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }
  return value.toFixed(4).replace(/\.?0+$/, "");
}

function shadeColor(hex, percent) {
  const value = hex.replace("#", "");
  const channels = [0, 2, 4].map((offset) => parseInt(value.slice(offset, offset + 2), 16));
  const adjusted = channels.map((channel) => {
    const next = Math.round(channel * (100 + percent) / 100);
    return clamp(next, 0, 255).toString(16).padStart(2, "0");
  });
  return `#${adjusted.join("")}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[character];
  });
}
