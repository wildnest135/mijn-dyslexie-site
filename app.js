const exampleText = [
  "Hoi, ik ben Dinand en ik zou me eens even willen voorstellen. Ik heb dyslexie, waardoor lezen en schrijven voor mij soms wat moeilijker kan zijn. Wanneer ik een tekst lees, kan het gebeuren dat lange woorden moeilijker te herkennen zijn, dat letters door elkaar lijken te lopen of dat ik een zin meerdere keren moet lezen voordat ik helemaal begrijp wat er staat. Hierdoor kan lezen soms meer tijd en moeite kosten dan bij iemand die geen dyslexie heeft.",
  "Door mijn dyslexie ervaar ik teksten soms anders dan andere mensen. Woorden die voor de ene persoon gemakkelijk te lezen zijn, kunnen voor mij juist lastig zijn om snel te herkennen en te begrijpen. Dit betekent niet dat ik dingen niet kan begrijpen, maar wel dat mijn hersenen informatie soms op een andere manier verwerken. Iedereen leest en ervaart de wereld op zijn eigen manier, en ik wil graag laten zien hoe dat er voor mij uitziet.",
  "Voor een project maak ik daarom mijn eigen website. Met deze website wil ik mensen laten ervaren hoe ik de wereld lees, zie en beleef met dyslexie. Ik wil laten zien dat lezen niet voor iedereen hetzelfde is en dat een gewone tekst voor iemand met dyslexie soms heel anders kan overkomen. Door teksten op verschillende manieren weer te geven, wil ik bezoekers laten ontdekken hoe lastig het kan zijn om bepaalde woorden en zinnen te lezen wanneer letters moeilijker te herkennen zijn.",
  "Naast dit project heb ik verschillende hobby's. Ik vind het bijvoorbeeld leuk om computers en technologie te ontdekken, zelf programma's te maken met Python en verschillende simulatiegames te spelen. Vooral DCS World en Arma Reforger vind ik interessant. In DCS World vlieg ik graag met militaire vliegtuigen, zoals de F-16 Fighting Falcon. Ook vind ik de militaire luchtvaart interessant en leer ik graag meer over vliegtuigen, helikopters en de techniek die daarbij komt kijken.",
  "Met programmeren kan ik mijn eigen ideeën uitwerken en ontdekken hoe dingen achter de schermen werken. Ik vind het leuk om problemen op te lossen, nieuwe dingen te leren en zelf iets te maken dat ook echt werkt. Mijn dyslexie kan sommige dingen moeilijker maken, maar het houdt mij niet tegen om aan mijn interesses te werken en nieuwe uitdagingen aan te gaan.",
  "Met mijn website hoop ik dat mensen niet alleen meer leren over dyslexie, maar ook beter begrijpen dat iedereen informatie op een andere manier kan ervaren. Ik wil bezoekers niet alleen vertellen hoe dyslexie kan voelen, maar ze er ook zelf iets van laten ervaren. Zo kunnen ze voor even ontdekken hoe het is wanneer lezen niet altijd vanzelf gaat."
].join("\n\n");

const defaultSettings = {
  preset: "maker",
  font: "system",
  fontSize: 19,
  lineHeight: 17,
  letterSpacing: 0,
  wordSpacing: 0,
  paragraphSpacing: 1,
  textWidth: 100,
  theme: "light",
  customTitle: "",
  customText: "",
  scramble: 50,
  shuffleEnabled: true,
  confusion: 50,
  confusionEnabled: true,
  motion: 50,
  motionEnabled: true,
  shuffleInterval: 4,
  shuffleDuration: 1.4,
  haze: 100,
  hazeEnabled: true,
  hazeMode: "intermittent",
  hazeIntervalMode: "random",
  hazeInterval: 8,
  hazeDuration: 2,
  motionPaused: false,
  normalReading: false,
  normalReadingBackup: null,
  rulerEnabled: false,
  focusMode: false
};

const presets = {
  maker: {
    font: "system",
    fontSize: 19,
    lineHeight: 17,
    letterSpacing: 0,
    theme: "light",
    shuffleInterval: 4,
    shuffleDuration: 1.4,
    scramble: 50,
    shuffleEnabled: true,
    confusion: 50,
    confusionEnabled: true,
    motion: 50,
    motionEnabled: true,
    haze: 100,
    hazeEnabled: true,
    hazeMode: "intermittent",
    hazeIntervalMode: "random",
    hazeInterval: 8,
    hazeDuration: 2,
    motionPaused: false
  },
  calm: { font: "system", fontSize: 20, lineHeight: 20, letterSpacing: 1, theme: "cream", scramble: 0, shuffleEnabled: false, confusion: 0, confusionEnabled: false, motion: 0, motionEnabled: false, haze: 0, hazeEnabled: false },
  "makkelijk-lezen": {
    font: "system", fontSize: 22, lineHeight: 22, letterSpacing: 1,
    wordSpacing: 3, paragraphSpacing: 1.4, textWidth: 75, theme: "cream",
    scramble: 0, shuffleEnabled: false, confusion: 0, confusionEnabled: false,
    motion: 0, motionEnabled: false, haze: 0, hazeEnabled: false
  },
  spacious: { font: "system", fontSize: 22, lineHeight: 22, letterSpacing: 2, theme: "light", scramble: 0, shuffleEnabled: false, confusion: 0, confusionEnabled: false, motion: 0, motionEnabled: false, haze: 0, hazeEnabled: false },
  contrast: { font: "system", fontSize: 20, lineHeight: 19, letterSpacing: 1, theme: "high-contrast", scramble: 0, shuffleEnabled: false, confusion: 0, confusionEnabled: false, motion: 0, motionEnabled: false, haze: 0, hazeEnabled: false }
};

const controls = {
  font: document.querySelector("#font-family"),
  fontSize: document.querySelector("#font-size"),
  lineHeight: document.querySelector("#line-height"),
  letterSpacing: document.querySelector("#letter-spacing"),
  wordSpacing: document.querySelector("#word-spacing"),
  paragraphSpacing: document.querySelector("#paragraph-spacing"),
  textWidth: document.querySelector("#text-width"),
  theme: document.querySelector("#color-theme"),
  customStoryTitle: document.querySelector("#custom-story-title"),
  customStoryText: document.querySelector("#custom-story-text"),
  scramble: document.querySelector("#word-shuffle"),
  confusion: document.querySelector("#letter-confusion"),
  motion: document.querySelector("#letter-motion"),
  shuffleInterval: document.querySelector("#shuffle-interval"),
  shuffleDuration: document.querySelector("#shuffle-duration"),
  haze: document.querySelector("#reading-haze"),
  hazeMode: document.querySelector("#haze-mode"),
  hazeIntervalMode: document.querySelector("#haze-interval-mode"),
  hazeInterval: document.querySelector("#haze-interval"),
  hazeDuration: document.querySelector("#haze-duration"),
  motionPaused: document.querySelector("#motion-paused"),
  shuffleEnabled: document.querySelector("#shuffle-enabled"),
  confusionEnabled: document.querySelector("#confusion-enabled"),
  motionEnabled: document.querySelector("#motion-enabled"),
  hazeEnabled: document.querySelector("#haze-enabled"),
  rulerEnabled: document.querySelector("#ruler-enabled"),
  savedProfileName: document.querySelector("#saved-profile-name"),
  savedProfiles: document.querySelector("#saved-profiles-list")
};

const output = {
  fontSize: document.querySelector("#font-size-value"),
  lineHeight: document.querySelector("#line-height-value"),
  letterSpacing: document.querySelector("#letter-spacing-value"),
  wordSpacing: document.querySelector("#word-spacing-value"),
  paragraphSpacing: document.querySelector("#paragraph-spacing-value"),
  textWidth: document.querySelector("#text-width-value"),
  scramble: document.querySelector("#word-shuffle-value"),
  confusion: document.querySelector("#letter-confusion-value"),
  motion: document.querySelector("#letter-motion-value"),
  haze: document.querySelector("#reading-haze-value"),
  hazeInterval: document.querySelector("#haze-interval-value"),
  hazeDuration: document.querySelector("#haze-duration-value"),
  shuffleInterval: document.querySelector("#shuffle-interval-value"),
  shuffleDuration: document.querySelector("#shuffle-duration-value"),
  hazeOverlay: document.querySelector("#haze-overlay"),
  pauseHaze: document.querySelector("#pause-haze"),
  readingRuler: document.querySelector("#reading-ruler"),
  readingText: document.querySelector("#reading-text"),
  readingTitle: document.querySelector("#reading-title"),
  normalReading: document.querySelector("#normal-reading"),
  normalReadingStatus: document.querySelector("#normal-reading-status"),
  focusModeToggle: document.querySelector("#focus-mode-toggle"),
  saveProfile: document.querySelector("#save-profile"),
  loadProfile: document.querySelector("#load-profile"),
  deleteProfile: document.querySelector("#delete-profile"),
  profileStatus: document.querySelector("#profile-status"),
  applyCustomStory: document.querySelector("#apply-custom-story"),
  resetCustomStory: document.querySelector("#reset-custom-story"),
  preset: document.querySelector("#preset"),
  saveStatus: document.querySelector("#save-status")
};

function readSettings() {
  let stored;
  try {
    stored = localStorage.getItem("lees-op-jouw-manier");
    if (stored === null) stored = localStorage.getItem("lees-op-mijn-manier");
  } catch (error) {
    console.error("De bewaarde leesinstellingen konden niet worden geopend.", error);
    output.saveStatus.textContent = "Opslag is niet beschikbaar; instellingen gelden alleen zolang deze pagina open is.";
    return { ...defaultSettings };
  }
  if (!stored) return { ...defaultSettings };

  try {
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new TypeError("De bewaarde instellingen hebben niet het verwachte formaat.");
    }
    return {
      ...defaultSettings,
      ...parsed,
      preset: ["maker", "custom", "calm", "spacious", "contrast"].includes(parsed.preset)
        || parsed.preset === "makkelijk-lezen"
        ? parsed.preset
        : "custom",
      font: ["system", "serif", "mono"].includes(parsed.font) ? parsed.font : defaultSettings.font,
      theme: ["light", "cream", "dark", "high-contrast"].includes(parsed.theme) ? parsed.theme : defaultSettings.theme,
      customTitle: typeof parsed.customTitle === "string" ? parsed.customTitle.slice(0, 80) : defaultSettings.customTitle,
      customText: typeof parsed.customText === "string" ? parsed.customText.slice(0, 12000) : defaultSettings.customText,
      fontSize: clamp(parsed.fontSize, 16, 30, defaultSettings.fontSize),
      lineHeight: clamp(parsed.lineHeight, 13, 24, defaultSettings.lineHeight),
      letterSpacing: clamp(parsed.letterSpacing, 0, 3, defaultSettings.letterSpacing),
      wordSpacing: clamp(parsed.wordSpacing, 0, 16, defaultSettings.wordSpacing),
      paragraphSpacing: clamp(parsed.paragraphSpacing, 0.5, 2.5, defaultSettings.paragraphSpacing),
      textWidth: clamp(parsed.textWidth, 50, 100, defaultSettings.textWidth),
      scramble: clamp(parsed.scramble, 0, 100, defaultSettings.scramble),
      shuffleEnabled: typeof parsed.shuffleEnabled === "boolean" ? parsed.shuffleEnabled : defaultSettings.shuffleEnabled,
      confusion: clamp(parsed.confusion, 0, 100, defaultSettings.confusion),
      confusionEnabled: typeof parsed.confusionEnabled === "boolean" ? parsed.confusionEnabled : defaultSettings.confusionEnabled,
      motion: clamp(parsed.motion, 0, 100, clamp(parsed.scramble, 0, 100, defaultSettings.motion)),
      motionEnabled: typeof parsed.motionEnabled === "boolean" ? parsed.motionEnabled : defaultSettings.motionEnabled,
      shuffleInterval: clamp(parsed.shuffleInterval, 3, 10, defaultSettings.shuffleInterval),
      shuffleDuration: clamp(parsed.shuffleDuration, 0.6, 2.2, defaultSettings.shuffleDuration),
      haze: clamp(parsed.haze, 0, 100, defaultSettings.haze),
      hazeEnabled: typeof parsed.hazeEnabled === "boolean" ? parsed.hazeEnabled : defaultSettings.hazeEnabled,
      hazeMode: ["intermittent", "constant"].includes(parsed.hazeMode) ? parsed.hazeMode : defaultSettings.hazeMode,
      hazeIntervalMode: ["fixed", "random"].includes(parsed.hazeIntervalMode) ? parsed.hazeIntervalMode : "fixed",
      hazeInterval: clamp(parsed.hazeInterval, 5, 60, defaultSettings.hazeInterval),
      hazeDuration: clamp(parsed.hazeDuration, 1, 10, defaultSettings.hazeDuration),
      motionPaused: typeof parsed.motionPaused === "boolean" ? parsed.motionPaused : defaultSettings.motionPaused,
      normalReading: typeof parsed.normalReading === "boolean" ? parsed.normalReading : defaultSettings.normalReading,
      rulerEnabled: typeof parsed.rulerEnabled === "boolean" ? parsed.rulerEnabled : defaultSettings.rulerEnabled,
      focusMode: typeof parsed.focusMode === "boolean" ? parsed.focusMode : defaultSettings.focusMode,
      normalReadingBackup: parsed.normalReadingBackup && typeof parsed.normalReadingBackup === "object"
        ? {
          scramble: clamp(parsed.normalReadingBackup.scramble, 0, 100, defaultSettings.scramble),
          shuffleEnabled: typeof parsed.normalReadingBackup.shuffleEnabled === "boolean"
            ? parsed.normalReadingBackup.shuffleEnabled
            : defaultSettings.shuffleEnabled,
          confusion: clamp(parsed.normalReadingBackup.confusion, 0, 100, defaultSettings.confusion),
          confusionEnabled: typeof parsed.normalReadingBackup.confusionEnabled === "boolean"
            ? parsed.normalReadingBackup.confusionEnabled
            : defaultSettings.confusionEnabled,
          motion: clamp(parsed.normalReadingBackup.motion, 0, 100, defaultSettings.motion),
          motionEnabled: typeof parsed.normalReadingBackup.motionEnabled === "boolean"
            ? parsed.normalReadingBackup.motionEnabled
            : defaultSettings.motionEnabled,
          haze: clamp(parsed.normalReadingBackup.haze, 0, 100, defaultSettings.haze),
          hazeEnabled: typeof parsed.normalReadingBackup.hazeEnabled === "boolean"
            ? parsed.normalReadingBackup.hazeEnabled
            : defaultSettings.hazeEnabled,
          motionPaused: typeof parsed.normalReadingBackup.motionPaused === "boolean"
            ? parsed.normalReadingBackup.motionPaused
            : defaultSettings.motionPaused
        }
        : defaultSettings.normalReadingBackup
    };
  } catch (error) {
    console.error("De bewaarde leesinstellingen konden niet worden gelezen.", error);
    output.saveStatus.textContent = "Bewaarde instellingen konden niet worden gelezen; de standaardinstellingen worden gebruikt.";
    return { ...defaultSettings };
  }
}

function clamp(value, min, max, fallback) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? Math.min(max, Math.max(min, numericValue)) : fallback;
}

function normalizeProfileSettings(profileSettings) {
  const normalized = { ...defaultSettings, ...profileSettings };
  normalized.preset = "custom";
  normalized.font = ["system", "serif", "mono"].includes(normalized.font) ? normalized.font : defaultSettings.font;
  normalized.theme = ["light", "cream", "dark", "high-contrast"].includes(normalized.theme)
    ? normalized.theme
    : defaultSettings.theme;
  normalized.customTitle = typeof normalized.customTitle === "string" ? normalized.customTitle.slice(0, 80) : "";
  normalized.customText = typeof normalized.customText === "string" ? normalized.customText.slice(0, 12000) : "";
  normalized.fontSize = clamp(normalized.fontSize, 16, 30, defaultSettings.fontSize);
  normalized.lineHeight = clamp(normalized.lineHeight, 13, 24, defaultSettings.lineHeight);
  normalized.letterSpacing = clamp(normalized.letterSpacing, 0, 3, defaultSettings.letterSpacing);
  normalized.wordSpacing = clamp(normalized.wordSpacing, 0, 16, defaultSettings.wordSpacing);
  normalized.paragraphSpacing = clamp(normalized.paragraphSpacing, 0.5, 2.5, defaultSettings.paragraphSpacing);
  normalized.textWidth = clamp(normalized.textWidth, 50, 100, defaultSettings.textWidth);
  normalized.scramble = clamp(normalized.scramble, 0, 100, defaultSettings.scramble);
  normalized.confusion = clamp(normalized.confusion, 0, 100, defaultSettings.confusion);
  normalized.motion = clamp(normalized.motion, 0, 100, defaultSettings.motion);
  normalized.shuffleInterval = clamp(normalized.shuffleInterval, 3, 10, defaultSettings.shuffleInterval);
  normalized.shuffleDuration = clamp(normalized.shuffleDuration, 0.6, 2.2, defaultSettings.shuffleDuration);
  normalized.haze = clamp(normalized.haze, 0, 100, defaultSettings.haze);
  normalized.hazeInterval = clamp(normalized.hazeInterval, 5, 60, defaultSettings.hazeInterval);
  normalized.hazeDuration = clamp(normalized.hazeDuration, 1, 10, defaultSettings.hazeDuration);
  normalized.hazeMode = ["intermittent", "constant"].includes(normalized.hazeMode)
    ? normalized.hazeMode
    : defaultSettings.hazeMode;
  normalized.hazeIntervalMode = ["fixed", "random"].includes(normalized.hazeIntervalMode)
    ? normalized.hazeIntervalMode
    : defaultSettings.hazeIntervalMode;
  for (const key of ["shuffleEnabled", "confusionEnabled", "motionEnabled", "hazeEnabled", "motionPaused", "rulerEnabled"]) {
    normalized[key] = Boolean(normalized[key]);
  }
  normalized.focusMode = false;
  normalized.normalReading = false;
  normalized.normalReadingBackup = null;
  return normalized;
}

function readSavedProfiles() {
  try {
    const parsed = JSON.parse(localStorage.getItem("lees-op-jouw-manier-profielen") || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((profile) =>
      profile && typeof profile.id === "string" && typeof profile.name === "string" && profile.settings
    ).slice(0, 30).map((profile) => ({
      id: profile.id,
      name: profile.name.slice(0, 40),
      settings: normalizeProfileSettings(profile.settings)
    }));
  } catch (error) {
    console.error("Bewaarde profielen konden niet worden gelezen.", error);
    return [];
  }
}

let savedProfiles = readSavedProfiles();

function renderSavedProfiles() {
  const selectedId = controls.savedProfiles.value;
  controls.savedProfiles.replaceChildren(new Option("Kies een profiel", ""));
  savedProfiles.forEach((profile) => {
    const option = new Option(profile.name, profile.id);
    controls.savedProfiles.append(option);
  });
  controls.savedProfiles.value = savedProfiles.some((profile) => profile.id === selectedId) ? selectedId : "";
  const hasSelection = controls.savedProfiles.value !== "";
  output.loadProfile.disabled = !hasSelection;
  output.deleteProfile.disabled = !hasSelection;
}

function persistSavedProfiles() {
  try {
    localStorage.setItem("lees-op-jouw-manier-profielen", JSON.stringify(savedProfiles));
    output.profileStatus.textContent = "Profielen bewaard op dit apparaat.";
    return true;
  } catch (error) {
    console.error("Profielen konden niet worden bewaard.", error);
    output.profileStatus.textContent = "Opslaan is niet gelukt; controleer de beschikbare browseropslag.";
    return false;
  }
}

let settings = readSettings();
let effectTimer = null;
let hazeTimer = null;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function applySettings() {
  controls.font.value = settings.font;
  controls.fontSize.value = settings.fontSize;
  controls.lineHeight.value = settings.lineHeight;
  controls.letterSpacing.value = settings.letterSpacing;
  controls.wordSpacing.value = settings.wordSpacing;
  controls.paragraphSpacing.value = settings.paragraphSpacing;
  controls.textWidth.value = settings.textWidth;
  controls.theme.value = settings.theme;
  controls.customStoryTitle.value = settings.customTitle;
  controls.customStoryText.value = settings.customText;
  controls.scramble.value = settings.scramble;
  controls.confusion.value = settings.confusion;
  controls.motion.value = settings.motion;
  controls.shuffleEnabled.checked = settings.shuffleEnabled;
  controls.confusionEnabled.checked = settings.confusionEnabled;
  controls.motionEnabled.checked = settings.motionEnabled;
  controls.hazeEnabled.checked = settings.hazeEnabled;
  controls.rulerEnabled.checked = settings.rulerEnabled;
  controls.shuffleInterval.value = settings.shuffleInterval;
  controls.shuffleDuration.value = settings.shuffleDuration;
  controls.haze.value = settings.haze;
  controls.hazeMode.value = settings.hazeMode;
  controls.hazeIntervalMode.value = settings.hazeIntervalMode;
  controls.hazeInterval.value = settings.hazeInterval;
  controls.hazeDuration.value = settings.hazeDuration;
  controls.hazeInterval.disabled = settings.hazeMode === "constant" || settings.hazeIntervalMode === "random";
  controls.hazeDuration.disabled = settings.hazeMode === "constant";
  controls.hazeIntervalMode.disabled = settings.hazeMode === "constant";
  output.preset.value = settings.preset;
  output.readingTitle.textContent = settings.customTitle.trim() || "Hoi, ik ben Dinand";
  controls.motionPaused.checked = settings.motionPaused;

  const textStyle = output.readingText.style;
  textStyle.fontFamily = {
    system: "Arial, sans-serif",
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"Courier New", monospace'
  }[settings.font];
  textStyle.fontSize = `${settings.fontSize}px`;
  textStyle.lineHeight = (settings.lineHeight / 10).toFixed(1);
  textStyle.letterSpacing = `${settings.letterSpacing}px`;
  textStyle.wordSpacing = `${settings.wordSpacing}px`;
  textStyle.setProperty("--paragraph-spacing", `${settings.paragraphSpacing}em`);
  textStyle.width = `${settings.textWidth}%`;
  textStyle.marginInline = "auto";
  textStyle.setProperty("--ruler-height", `${settings.fontSize * settings.lineHeight / 10}px`);
  document.body.dataset.theme = settings.theme;
  document.body.dataset.motionPaused = settings.motionPaused;
  document.body.dataset.effectActive = settings.motionEnabled && settings.motion > 0;
  document.body.dataset.focusMode = settings.focusMode;
  document.body.dataset.rulerActive = settings.rulerEnabled;
  output.hazeOverlay.style.setProperty("--haze-blur", `${settings.haze / 100 * 55}px`);
  output.hazeOverlay.style.setProperty("--haze-tint", "0");

  output.fontSize.value = `${settings.fontSize} px`;
  output.lineHeight.value = (settings.lineHeight / 10).toFixed(1).replace(".", ",");
  output.letterSpacing.value = `${settings.letterSpacing} px`;
  output.wordSpacing.value = `${settings.wordSpacing} px`;
  output.paragraphSpacing.value = `${settings.paragraphSpacing.toFixed(1).replace(".", ",")}×`;
  output.textWidth.value = `${settings.textWidth}%`;
  output.scramble.value = !settings.shuffleEnabled || settings.scramble === 0 ? "Uit" : `${settings.scramble}%`;
  output.confusion.value = !settings.confusionEnabled || settings.confusion === 0 ? "Uit" : `${settings.confusion}%`;
  output.motion.value = !settings.motionEnabled || settings.motion === 0 ? "Uit" : `${settings.motion}%`;
  output.shuffleInterval.value = `${settings.shuffleInterval} sec`;
  output.shuffleDuration.value = `${settings.shuffleDuration.toFixed(1).replace(".", ",")} sec`;
  output.haze.value = !settings.hazeEnabled || settings.haze === 0 ? "Uit" : `${settings.haze}%`;
  output.hazeInterval.value = settings.hazeIntervalMode === "random"
    ? "7–10 sec (willekeurig)"
    : `${settings.hazeInterval} sec`;
  output.hazeDuration.value = `${settings.hazeDuration} sec`;
  output.pauseHaze.setAttribute("aria-pressed", String(settings.motionPaused));
  output.pauseHaze.textContent = settings.motionPaused ? "Hervat effecten" : "Pauzeer waas";
  output.normalReading.setAttribute("aria-pressed", String(settings.normalReading));
  output.normalReading.textContent = settings.normalReading ? "Zet effecten weer aan" : "Lees deze tekst normaal";
  output.normalReadingStatus.textContent = settings.normalReading ? "Normale leesstand is actief." : "";
  output.focusModeToggle.setAttribute("aria-pressed", String(settings.focusMode));
  output.focusModeToggle.textContent = settings.focusMode ? "Leesstand afsluiten" : "Rustige leesstand";
  renderText();
  syncEffectTimer();
  syncHaze();
}

function syncEffectTimer() {
  if (effectTimer !== null) {
    window.clearInterval(effectTimer);
    effectTimer = null;
  }

  if (((settings.shuffleEnabled && settings.scramble > 0) || (settings.confusionEnabled && settings.confusion > 0)) && !settings.motionPaused && !reducedMotionQuery.matches) {
    effectTimer = window.setInterval(renderText, settings.shuffleInterval * 1000);
  }
}

function syncHaze() {
  if (hazeTimer !== null) {
    window.clearTimeout(hazeTimer);
    hazeTimer = null;
  }

  output.hazeOverlay.classList.remove("is-active");
  if (!settings.hazeEnabled || settings.haze === 0 || settings.motionPaused || reducedMotionQuery.matches) return;

  const showHazePatches = () => {
    output.hazeOverlay.style.setProperty("--haze-opacity", `${settings.haze / 100}`);
    output.hazeOverlay.classList.add("is-active");
  };

  if (settings.hazeMode === "constant") {
    showHazePatches();
    return;
  }

  const getInterval = () => settings.hazeIntervalMode === "random"
    ? 7 + Math.random() * 3
    : settings.hazeInterval;
  const scheduleHaze = (wait = getInterval() * 1000) => {
    hazeTimer = window.setTimeout(() => {
      showHazePatches();

      hazeTimer = window.setTimeout(() => {
        output.hazeOverlay.classList.remove("is-active");
        scheduleHaze(Math.max(0, (getInterval() - settings.hazeDuration) * 1000));
      }, settings.hazeDuration * 1000);
    }, wait);
  };

  scheduleHaze();
}

function scrambleWordPositions(word, currentPositions, intensity) {
  if (intensity === 0) return currentPositions.map((_, index) => index);

  const positions = [...currentPositions];
  if (word.length < 4 || Math.random() * 100 >= intensity) return positions;

  const isShuffled = positions.some((position, index) => position !== index);
  const possibleSwaps = [];
  for (let first = 1; first < positions.length - 1; first += 1) {
    for (let second = first + 1; second < positions.length - 1; second += 1) {
      const nextPositions = [...positions];
      [nextPositions[first], nextPositions[second]] = [nextPositions[second], nextPositions[first]];
      const returnsToOriginal = nextPositions.every((position, index) => position === index);
      if (!isShuffled || !returnsToOriginal) possibleSwaps.push(nextPositions);
    }
  }

  return possibleSwaps.length === 0
    ? positions
    : possibleSwaps[Math.floor(Math.random() * possibleSwaps.length)];
}

function confuseLetters(text, intensity) {
  const pairs = new Map([
    ["b", "d"], ["d", "b"],
    ["p", "q"], ["q", "p"]
  ]);

  return [...text].map((character) => {
    if (Math.random() * 100 >= intensity) return character;
    if (character !== character.toLowerCase()) return character;
    const replacement = pairs.get(character.toLowerCase());
    if (!replacement) return character;
    return replacement;
  }).join("");
}

let renderedSourceParagraphs = [];
let renderedWords = [];
let renderedMotion = null;

function renderText() {
  const source = settings.customText.trim() || exampleText;
  const sourceParagraphs = source.split(/\n+/u).filter(Boolean);
  const needsRebuild = sourceParagraphs.length !== renderedSourceParagraphs.length ||
    sourceParagraphs.some((paragraph, index) => paragraph !== renderedSourceParagraphs[index]);

  if (needsRebuild) {
    renderedSourceParagraphs = sourceParagraphs;
    renderedWords = [];
    output.readingText.replaceChildren();

    for (const paragraph of sourceParagraphs) {
      const paragraphElement = document.createElement("p");
      const readableText = document.createElement("span");
      readableText.className = "visually-hidden";
      readableText.textContent = paragraph;
      const visualText = document.createElement("span");
      visualText.className = "visual-text";
      visualText.setAttribute("aria-hidden", "true");
      const paragraphWords = [];
      const tokens = paragraph.match(/\p{L}+|[^\p{L}]+/gu) ?? [];
      for (const token of tokens) {
        if (!/^\p{L}+$/u.test(token)) {
          visualText.append(document.createTextNode(token));
          continue;
        }

        const wordElement = document.createElement("span");
        wordElement.className = "moving-word";
        const letters = [...token].map((character) => {
          const characterElement = document.createElement("span");
          characterElement.className = "moving-letter";
          characterElement.textContent = character;
          characterElement.dataset.driftX = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftY = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftX2 = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftY2 = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftX3 = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftY3 = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftRotation = (Math.random() * 2 - 1).toString();
          characterElement.style.setProperty("--drift-duration", `${7 + Math.random() * 4}s`);
          characterElement.style.setProperty("--drift-delay", `${Math.random() * -3}s`);
          wordElement.append(characterElement);
          return characterElement;
        });
        visualText.append(wordElement);
        paragraphWords.push({
          text: token,
          element: wordElement,
          letters,
          order: letters.map((_, index) => index)
        });
      }

      paragraphElement.append(readableText, visualText);
      output.readingText.append(paragraphElement);
      renderedWords.push(paragraphWords);
    }
  }

  if (renderedMotion !== settings.motion) {
    const distance = settings.motion / 100;
    renderedWords.flat().forEach((word) => {
      word.letters.forEach((element) => {
        element.style.setProperty("--drift-x", `${Number(element.dataset.driftX) * 8 * distance}px`);
        element.style.setProperty("--drift-y", `${Number(element.dataset.driftY) * 8 * distance}px`);
        element.style.setProperty("--drift-x2", `${Number(element.dataset.driftX2) * 8 * distance}px`);
        element.style.setProperty("--drift-y2", `${Number(element.dataset.driftY2) * 8 * distance}px`);
        element.style.setProperty("--drift-x3", `${Number(element.dataset.driftX3) * 8 * distance}px`);
        element.style.setProperty("--drift-y3", `${Number(element.dataset.driftY3) * 8 * distance}px`);
        element.style.setProperty("--drift-rotation", `${Number(element.dataset.driftRotation) * 1.5 * distance}deg`);
      });
    });
    renderedMotion = settings.motion;
  }

  const updates = renderedWords.flat().map((word) => {
    const sourceLetters = [...word.text];
    const positions = scrambleWordPositions(word.text, word.order, settings.shuffleEnabled ? settings.scramble : 0);
    const shuffledText = positions.map((position) => sourceLetters[position]).join("");
    const displayedCharacters = [...(settings.confusion === 0
      ? shuffledText
      : confuseLetters(shuffledText, settings.confusionEnabled ? settings.confusion : 0))];
    const orderChanged = positions.some((position, index) => position !== word.order[index]);
    const textChanged = displayedCharacters.some((character, index) =>
      character !== word.letters[positions[index]].textContent);

    return orderChanged || textChanged
      ? { word, positions, displayedCharacters, orderChanged }
      : null;
  }).filter(Boolean);

  updates.forEach(({ word, orderChanged }) => {
    if (orderChanged) {
      word.oldPositions = new Map(word.letters.map((element) => [element, element.getBoundingClientRect()]));
    }
  });

  updates.forEach(({ word, positions, displayedCharacters, orderChanged }) => {
    const orderedLetters = positions.map((position) => word.letters[position]);
    orderedLetters.forEach((element, index) => {
      if (element.textContent !== displayedCharacters[index]) {
        element.textContent = displayedCharacters[index];
      }
    });
    if (orderChanged) {
      word.element.append(...orderedLetters);
      word.order = positions;
    }
  });

  updates.filter(({ orderChanged }) => orderChanged).forEach(({ word, positions }) => {
    positions.forEach((position) => {
      const element = word.letters[position];
      const oldPosition = word.oldPositions.get(element);
      const newPosition = element.getBoundingClientRect();
      const offsetX = oldPosition.left - newPosition.left;
      const offsetY = oldPosition.top - newPosition.top;
      if (Math.abs(offsetX) + Math.abs(offsetY) < 1) return;
      element.animate(
        [
          { transform: `translate(${offsetX}px, ${offsetY}px)` },
          { transform: "translate(0, 0)" }
        ],
        { duration: settings.shuffleDuration * 1000, easing: "ease-in-out" }
      );
    });
  });
}

function saveSettings() {
  try {
    localStorage.setItem("lees-op-jouw-manier", JSON.stringify(settings));
    output.saveStatus.textContent = "Instellingen bewaard op dit apparaat.";
  } catch (error) {
    console.error("De leesinstellingen konden niet worden bewaard.", error);
    output.saveStatus.textContent = "Opslaan is niet gelukt; je instellingen gelden alleen zolang deze pagina open is.";
  }
}

function updateSetting(key, value) {
  settings[key] = value;
  settings.preset = "custom";
  if (["scramble", "shuffleEnabled", "confusion", "confusionEnabled", "motion", "motionEnabled", "haze", "hazeEnabled", "motionPaused"].includes(key)) {
    settings.normalReading = false;
    settings.normalReadingBackup = null;
  }
  applySettings();
  saveSettings();
}

controls.font.addEventListener("change", () => updateSetting("font", controls.font.value));
controls.theme.addEventListener("change", () => updateSetting("theme", controls.theme.value));
controls.fontSize.addEventListener("input", () => updateSetting("fontSize", Number(controls.fontSize.value)));
controls.lineHeight.addEventListener("input", () => updateSetting("lineHeight", Number(controls.lineHeight.value)));
controls.letterSpacing.addEventListener("input", () => updateSetting("letterSpacing", Number(controls.letterSpacing.value)));
controls.wordSpacing.addEventListener("input", () => updateSetting("wordSpacing", Number(controls.wordSpacing.value)));
controls.paragraphSpacing.addEventListener("input", () => updateSetting("paragraphSpacing", Number(controls.paragraphSpacing.value)));
controls.textWidth.addEventListener("input", () => updateSetting("textWidth", Number(controls.textWidth.value)));
controls.scramble.addEventListener("input", () => updateSetting("scramble", Number(controls.scramble.value)));
controls.shuffleEnabled.addEventListener("change", () => updateSetting("shuffleEnabled", controls.shuffleEnabled.checked));
controls.confusion.addEventListener("input", () => updateSetting("confusion", Number(controls.confusion.value)));
controls.confusionEnabled.addEventListener("change", () => updateSetting("confusionEnabled", controls.confusionEnabled.checked));
controls.motion.addEventListener("input", () => updateSetting("motion", Number(controls.motion.value)));
controls.motionEnabled.addEventListener("change", () => updateSetting("motionEnabled", controls.motionEnabled.checked));
controls.shuffleInterval.addEventListener("input", () => updateSetting("shuffleInterval", Number(controls.shuffleInterval.value)));
controls.shuffleDuration.addEventListener("input", () => updateSetting("shuffleDuration", Number(controls.shuffleDuration.value)));
controls.haze.addEventListener("input", () => updateSetting("haze", Number(controls.haze.value)));
controls.hazeEnabled.addEventListener("change", () => updateSetting("hazeEnabled", controls.hazeEnabled.checked));
controls.hazeMode.addEventListener("change", () => updateSetting("hazeMode", controls.hazeMode.value));
controls.hazeIntervalMode.addEventListener("change", () => updateSetting("hazeIntervalMode", controls.hazeIntervalMode.value));
controls.hazeInterval.addEventListener("input", () => updateSetting("hazeInterval", Number(controls.hazeInterval.value)));
controls.hazeDuration.addEventListener("input", () => updateSetting("hazeDuration", Number(controls.hazeDuration.value)));
controls.motionPaused.addEventListener("change", () => updateSetting("motionPaused", controls.motionPaused.checked));
controls.rulerEnabled.addEventListener("change", () => updateSetting("rulerEnabled", controls.rulerEnabled.checked));
controls.savedProfiles.addEventListener("change", renderSavedProfiles);
output.saveProfile.addEventListener("click", () => {
  const name = controls.savedProfileName.value.trim();
  if (!name) {
    output.profileStatus.textContent = "Vul eerst een naam in voor dit profiel.";
    controls.savedProfileName.focus();
    return;
  }
  if (savedProfiles.length >= 30) {
    output.profileStatus.textContent = "Je kunt maximaal 30 profielen bewaren.";
    return;
  }
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  savedProfiles.push({
    id,
    name: name.slice(0, 40),
    settings: normalizeProfileSettings(settings)
  });
  renderSavedProfiles();
  controls.savedProfiles.value = id;
  renderSavedProfiles();
  persistSavedProfiles();
  controls.savedProfileName.value = "";
});
output.loadProfile.addEventListener("click", () => {
  const profile = savedProfiles.find((item) => item.id === controls.savedProfiles.value);
  if (!profile) return;
  settings = normalizeProfileSettings(profile.settings);
  applySettings();
  saveSettings();
  output.profileStatus.textContent = `Profiel '${profile.name}' toegepast.`;
});
output.deleteProfile.addEventListener("click", () => {
  const selectedId = controls.savedProfiles.value;
  if (!savedProfiles.some((profile) => profile.id === selectedId)) return;
  savedProfiles = savedProfiles.filter((profile) => profile.id !== selectedId);
  renderSavedProfiles();
  persistSavedProfiles();
});
output.readingText.addEventListener("pointermove", (event) => {
  if (!settings.rulerEnabled) return;
  const rulerHeight = settings.fontSize * settings.lineHeight / 10;
  output.readingRuler.style.top = `${Math.max(0, event.clientY - rulerHeight / 2)}px`;
});
output.focusModeToggle.addEventListener("click", () => {
  updateSetting("focusMode", !settings.focusMode);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && settings.focusMode) updateSetting("focusMode", false);
});
output.normalReading.addEventListener("click", () => {
  if (settings.normalReading) {
    Object.assign(settings, settings.normalReadingBackup || {
      scramble: defaultSettings.scramble,
      shuffleEnabled: defaultSettings.shuffleEnabled,
      confusion: defaultSettings.confusion,
      confusionEnabled: defaultSettings.confusionEnabled,
      motion: defaultSettings.motion,
      motionEnabled: defaultSettings.motionEnabled,
      haze: defaultSettings.haze,
      hazeEnabled: defaultSettings.hazeEnabled,
      motionPaused: defaultSettings.motionPaused
    });
    settings.normalReading = false;
    settings.normalReadingBackup = null;
  } else {
    settings.normalReadingBackup = {
      scramble: settings.scramble,
      shuffleEnabled: settings.shuffleEnabled,
      confusion: settings.confusion,
      confusionEnabled: settings.confusionEnabled,
      motion: settings.motion,
      motionEnabled: settings.motionEnabled,
      haze: settings.haze,
      hazeEnabled: settings.hazeEnabled,
      motionPaused: settings.motionPaused
    };
    settings.shuffleEnabled = false;
    settings.confusionEnabled = false;
    settings.motionEnabled = false;
    settings.hazeEnabled = false;
    settings.motionPaused = false;
    settings.normalReading = true;
  }
  settings.preset = "custom";
  applySettings();
  saveSettings();
  output.readingText.scrollIntoView({
    behavior: reducedMotionQuery.matches ? "auto" : "smooth",
    block: "start"
  });
});
output.applyCustomStory.addEventListener("click", () => {
  settings.customTitle = controls.customStoryTitle.value.trim();
  settings.customText = controls.customStoryText.value.trim();
  settings.preset = "custom";
  applySettings();
  saveSettings();
});
output.resetCustomStory.addEventListener("click", () => {
  settings.customTitle = "";
  settings.customText = "";
  settings.preset = "custom";
  applySettings();
  saveSettings();
});
output.pauseHaze.addEventListener("click", () => {
  controls.motionPaused.checked = !settings.motionPaused;
  controls.motionPaused.dispatchEvent(new Event("change", { bubbles: true }));
});
reducedMotionQuery.addEventListener("change", () => {
  syncEffectTimer();
  syncHaze();
});

output.preset.addEventListener("change", () => {
  const preset = presets[output.preset.value];
  if (!preset) return;
  settings = {
    ...settings,
    ...preset,
    preset: output.preset.value,
    normalReading: false,
    normalReadingBackup: null,
    focusMode: false
  };
  applySettings();
  saveSettings();
});

document.querySelector("#reset-settings").addEventListener("click", () => {
  settings = { ...defaultSettings };
  applySettings();
  saveSettings();
});

renderSavedProfiles();
applySettings();