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
  theme: "light",
  scramble: 50,
  confusion: 50,
  motion: 50,
  haze: 100,
  hazeMode: "intermittent",
  hazeIntervalMode: "random",
  hazeInterval: 8,
  hazeDuration: 2,
  motionPaused: false
};

const presets = {
  maker: {
    font: "system",
    fontSize: 19,
    lineHeight: 17,
    letterSpacing: 0,
    theme: "light",
    scramble: 50,
    confusion: 50,
    motion: 50,
    haze: 100,
    hazeMode: "intermittent",
    hazeIntervalMode: "random",
    hazeInterval: 8,
    hazeDuration: 2,
    motionPaused: false
  },
  calm: { font: "system", fontSize: 20, lineHeight: 20, letterSpacing: 1, theme: "cream", scramble: 0 },
  spacious: { font: "system", fontSize: 22, lineHeight: 22, letterSpacing: 2, theme: "light", scramble: 0 },
  contrast: { font: "system", fontSize: 20, lineHeight: 19, letterSpacing: 1, theme: "high-contrast", scramble: 0 }
};

const controls = {
  font: document.querySelector("#font-family"),
  fontSize: document.querySelector("#font-size"),
  lineHeight: document.querySelector("#line-height"),
  letterSpacing: document.querySelector("#letter-spacing"),
  theme: document.querySelector("#color-theme"),
  scramble: document.querySelector("#word-shuffle"),
  confusion: document.querySelector("#letter-confusion"),
  motion: document.querySelector("#letter-motion"),
  haze: document.querySelector("#reading-haze"),
  hazeMode: document.querySelector("#haze-mode"),
  hazeIntervalMode: document.querySelector("#haze-interval-mode"),
  hazeInterval: document.querySelector("#haze-interval"),
  hazeDuration: document.querySelector("#haze-duration"),
  motionPaused: document.querySelector("#motion-paused")
};

const output = {
  fontSize: document.querySelector("#font-size-value"),
  lineHeight: document.querySelector("#line-height-value"),
  letterSpacing: document.querySelector("#letter-spacing-value"),
  scramble: document.querySelector("#word-shuffle-value"),
  confusion: document.querySelector("#letter-confusion-value"),
  motion: document.querySelector("#letter-motion-value"),
  haze: document.querySelector("#reading-haze-value"),
  hazeInterval: document.querySelector("#haze-interval-value"),
  hazeDuration: document.querySelector("#haze-duration-value"),
  hazeOverlay: document.querySelector("#haze-overlay"),
  pauseHaze: document.querySelector("#pause-haze"),
  readingText: document.querySelector("#reading-text"),
  preset: document.querySelector("#preset"),
  saveStatus: document.querySelector("#save-status")
};

function readSettings() {
  let stored;
  try {
    stored = localStorage.getItem("lees-op-mijn-manier");
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
    delete parsed.customText;
    return {
      ...defaultSettings,
      ...parsed,
      preset: ["maker", "custom", "calm", "spacious", "contrast"].includes(parsed.preset)
        ? parsed.preset
        : "custom",
      font: ["system", "serif", "mono"].includes(parsed.font) ? parsed.font : defaultSettings.font,
      theme: ["light", "cream", "dark", "high-contrast"].includes(parsed.theme) ? parsed.theme : defaultSettings.theme,
      fontSize: clamp(parsed.fontSize, 16, 30, defaultSettings.fontSize),
      lineHeight: clamp(parsed.lineHeight, 13, 24, defaultSettings.lineHeight),
      letterSpacing: clamp(parsed.letterSpacing, 0, 3, defaultSettings.letterSpacing),
      scramble: clamp(parsed.scramble, 0, 100, defaultSettings.scramble),
      confusion: clamp(parsed.confusion, 0, 100, defaultSettings.confusion),
      motion: clamp(parsed.motion, 0, 100, clamp(parsed.scramble, 0, 100, defaultSettings.motion)),
      haze: clamp(parsed.haze, 0, 100, defaultSettings.haze),
      hazeMode: ["intermittent", "constant"].includes(parsed.hazeMode) ? parsed.hazeMode : defaultSettings.hazeMode,
      hazeIntervalMode: ["fixed", "random"].includes(parsed.hazeIntervalMode) ? parsed.hazeIntervalMode : "fixed",
      hazeInterval: clamp(parsed.hazeInterval, 5, 60, defaultSettings.hazeInterval),
      hazeDuration: clamp(parsed.hazeDuration, 1, 10, defaultSettings.hazeDuration),
      motionPaused: typeof parsed.motionPaused === "boolean" ? parsed.motionPaused : defaultSettings.motionPaused
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

let settings = readSettings();
let effectTimer = null;
let hazeTimer = null;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function applySettings() {
  controls.font.value = settings.font;
  controls.fontSize.value = settings.fontSize;
  controls.lineHeight.value = settings.lineHeight;
  controls.letterSpacing.value = settings.letterSpacing;
  controls.theme.value = settings.theme;
  controls.scramble.value = settings.scramble;
  controls.confusion.value = settings.confusion;
  controls.motion.value = settings.motion;
  controls.haze.value = settings.haze;
  controls.hazeMode.value = settings.hazeMode;
  controls.hazeIntervalMode.value = settings.hazeIntervalMode;
  controls.hazeInterval.value = settings.hazeInterval;
  controls.hazeDuration.value = settings.hazeDuration;
  controls.hazeInterval.disabled = settings.hazeMode === "constant" || settings.hazeIntervalMode === "random";
  controls.hazeDuration.disabled = settings.hazeMode === "constant";
  controls.hazeIntervalMode.disabled = settings.hazeMode === "constant";
  output.preset.value = settings.preset;
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
  document.body.dataset.theme = settings.theme;
  document.body.dataset.motionPaused = settings.motionPaused;
  document.body.dataset.effectActive = settings.motion > 0;
  output.hazeOverlay.style.setProperty("--haze-blur", `${settings.haze / 100 * 50}px`);
  output.hazeOverlay.style.setProperty("--haze-tint", "0");

  output.fontSize.value = `${settings.fontSize} px`;
  output.lineHeight.value = (settings.lineHeight / 10).toFixed(1).replace(".", ",");
  output.letterSpacing.value = `${settings.letterSpacing} px`;
  output.scramble.value = settings.scramble === 0 ? "Uit" : `${settings.scramble}%`;
  output.confusion.value = settings.confusion === 0 ? "Uit" : `${settings.confusion}%`;
  output.motion.value = settings.motion === 0 ? "Uit" : `${settings.motion}%`;
  output.haze.value = settings.haze === 0 ? "Uit" : `${settings.haze}%`;
  output.hazeInterval.value = settings.hazeIntervalMode === "random"
    ? "7–10 sec (willekeurig)"
    : `${settings.hazeInterval} sec`;
  output.hazeDuration.value = `${settings.hazeDuration} sec`;
  output.pauseHaze.setAttribute("aria-pressed", String(settings.motionPaused));
  output.pauseHaze.textContent = settings.motionPaused ? "Hervat effecten" : "Pauzeer waas";
  renderText();
  syncEffectTimer();
  syncHaze();
}

function syncEffectTimer() {
  if (effectTimer !== null) {
    window.clearInterval(effectTimer);
    effectTimer = null;
  }

  if ((settings.scramble > 0 || settings.confusion > 0) && !settings.motionPaused && !reducedMotionQuery.matches) {
    effectTimer = window.setInterval(renderText, 350);
  }
}

function syncHaze() {
  if (hazeTimer !== null) {
    window.clearTimeout(hazeTimer);
    hazeTimer = null;
  }

  output.hazeOverlay.classList.remove("is-active");
  if (settings.haze === 0 || settings.motionPaused || reducedMotionQuery.matches) return;

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

function scrambleWord(word, intensity) {
  if (word.length < 4 || Math.random() * 100 >= intensity) return word;
  const letters = [...word];
  const first = 1 + Math.floor(Math.random() * (letters.length - 2));
  let second = 1 + Math.floor(Math.random() * (letters.length - 2));
  if (second === first) second = first === letters.length - 2 ? 1 : first + 1;
  [letters[first], letters[second]] = [letters[second], letters[first]];
  return letters.join("");
}

function confuseLetters(text, intensity) {
  const pairs = new Map([
    ["b", "d"], ["d", "b"],
    ["p", "q"], ["q", "p"]
  ]);

  return [...text].map((character) => {
    if (Math.random() * 100 >= intensity) return character;
    const replacement = pairs.get(character.toLowerCase());
    if (!replacement) return character;
    return character === character.toUpperCase() ? replacement.toUpperCase() : replacement;
  }).join("");
}

let renderedSourceParagraphs = [];
let renderedCharacters = [];

function renderText() {
  const source = exampleText;
  const sourceParagraphs = source.split(/\n+/u).filter(Boolean);
  const needsRebuild = sourceParagraphs.length !== renderedSourceParagraphs.length ||
    sourceParagraphs.some((paragraph, index) => paragraph !== renderedSourceParagraphs[index]);

  if (needsRebuild) {
    renderedSourceParagraphs = sourceParagraphs;
    renderedCharacters = [];
    output.readingText.replaceChildren();

    for (const paragraph of sourceParagraphs) {
      const paragraphElement = document.createElement("p");
      const readableText = document.createElement("span");
      readableText.className = "visually-hidden";
      readableText.textContent = paragraph;
      const visualText = document.createElement("span");
      visualText.className = "visual-text";
      visualText.setAttribute("aria-hidden", "true");
      const characterElements = [];

      for (const character of paragraph) {
        const characterElement = document.createElement("span");
        characterElement.textContent = character;
        if (/\p{L}/u.test(character)) {
          characterElement.className = "moving-letter";
          characterElement.dataset.driftX = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftY = (Math.random() * 2 - 1).toString();
          characterElement.dataset.driftRotation = (Math.random() * 2 - 1).toString();
          characterElement.style.setProperty("--drift-duration", `${1.8 + Math.random() * 1.8}s`);
          characterElement.style.setProperty("--drift-delay", `${Math.random() * -3}s`);
        } else {
          characterElement.className = "visual-character";
        }
        visualText.append(characterElement);
        characterElements.push(characterElement);
      }

      paragraphElement.append(readableText, visualText);
      output.readingText.append(paragraphElement);
      renderedCharacters.push(characterElements);
    }
  }

  sourceParagraphs.forEach((paragraph, index) => {
    const shuffledText = settings.scramble === 0
      ? paragraph
      : paragraph.replace(/\p{L}+/gu, (word) => scrambleWord(word, settings.scramble));
    const displayedText = settings.confusion === 0
      ? shuffledText
      : confuseLetters(shuffledText, settings.confusion);
    const displayedCharacters = [...displayedText];
    renderedCharacters[index].forEach((element, characterIndex) => {
      element.textContent = displayedCharacters[characterIndex];
      if (element.classList.contains("moving-letter")) {
        const distance = settings.motion / 100;
        element.style.setProperty("--drift-x", `${Number(element.dataset.driftX) * 5 * distance}px`);
        element.style.setProperty("--drift-y", `${Number(element.dataset.driftY) * 5 * distance}px`);
        element.style.setProperty("--drift-rotation", `${Number(element.dataset.driftRotation) * 4 * distance}deg`);
      }
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
  applySettings();
  saveSettings();
}

controls.font.addEventListener("change", () => updateSetting("font", controls.font.value));
controls.theme.addEventListener("change", () => updateSetting("theme", controls.theme.value));
controls.fontSize.addEventListener("input", () => updateSetting("fontSize", Number(controls.fontSize.value)));
controls.lineHeight.addEventListener("input", () => updateSetting("lineHeight", Number(controls.lineHeight.value)));
controls.letterSpacing.addEventListener("input", () => updateSetting("letterSpacing", Number(controls.letterSpacing.value)));
controls.scramble.addEventListener("input", () => updateSetting("scramble", Number(controls.scramble.value)));
controls.confusion.addEventListener("input", () => updateSetting("confusion", Number(controls.confusion.value)));
controls.motion.addEventListener("input", () => updateSetting("motion", Number(controls.motion.value)));
controls.haze.addEventListener("input", () => updateSetting("haze", Number(controls.haze.value)));
controls.hazeMode.addEventListener("change", () => updateSetting("hazeMode", controls.hazeMode.value));
controls.hazeIntervalMode.addEventListener("change", () => updateSetting("hazeIntervalMode", controls.hazeIntervalMode.value));
controls.hazeInterval.addEventListener("input", () => updateSetting("hazeInterval", Number(controls.hazeInterval.value)));
controls.hazeDuration.addEventListener("input", () => updateSetting("hazeDuration", Number(controls.hazeDuration.value)));
controls.motionPaused.addEventListener("change", () => updateSetting("motionPaused", controls.motionPaused.checked));
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
  settings = { ...settings, ...preset, preset: output.preset.value };
  applySettings();
  saveSettings();
});

document.querySelector("#reset-settings").addEventListener("click", () => {
  settings = { ...defaultSettings };
  applySettings();
  saveSettings();
});

applySettings();
