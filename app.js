const exampleText = [
  "Hoi, ik ben Dinand en ik zou me eens even willen voorstellen. Ik heb dyslexie, waardoor lezen en schrijven voor mij soms wat moeilijker kan zijn. Wanneer ik een tekst lees, kan het gebeuren dat lange woorden moeilijker te herkennen zijn, dat letters door elkaar lijken te lopen of dat ik een zin meerdere keren moet lezen voordat ik helemaal begrijp wat er staat. Hierdoor kan lezen soms meer tijd en moeite kosten dan bij iemand die geen dyslexie heeft.",
  "Door mijn dyslexie ervaar ik teksten soms anders dan andere mensen. Woorden die voor de ene persoon gemakkelijk te lezen zijn, kunnen voor mij juist lastig zijn om snel te herkennen en te begrijpen. Dit betekent niet dat ik dingen niet kan begrijpen, maar wel dat mijn hersenen informatie soms op een andere manier verwerken. Iedereen leest en ervaart de wereld op zijn eigen manier, en ik wil graag laten zien hoe dat er voor mij uitziet.",
  "Voor een project maak ik daarom mijn eigen website. Met deze website wil ik mensen laten ervaren hoe ik de wereld lees, zie en beleef met dyslexie. Ik wil laten zien dat lezen niet voor iedereen hetzelfde is en dat een gewone tekst voor iemand met dyslexie soms heel anders kan overkomen. Door teksten op verschillende manieren weer te geven, wil ik bezoekers laten ontdekken hoe lastig het kan zijn om bepaalde woorden en zinnen te lezen wanneer letters moeilijker te herkennen zijn.",
  "Naast dit project heb ik verschillende hobby's. Ik vind het bijvoorbeeld leuk om computers en technologie te ontdekken, zelf programma's te maken met Python en verschillende simulatiegames te spelen. Vooral DCS World en Arma Reforger vind ik interessant. In DCS World vlieg ik graag met militaire vliegtuigen, zoals de F-16 Fighting Falcon. Ook vind ik de militaire luchtvaart interessant en leer ik graag meer over vliegtuigen, helikopters en de techniek die daarbij komt kijken.",
  "Met programmeren kan ik mijn eigen ideeën uitwerken en ontdekken hoe dingen achter de schermen werken. Ik vind het leuk om problemen op te lossen, nieuwe dingen te leren en zelf iets te maken dat ook echt werkt. Mijn dyslexie kan sommige dingen moeilijker maken, maar het houdt mij niet tegen om aan mijn interesses te werken en nieuwe uitdagingen aan te gaan.",
  "Met mijn website hoop ik dat mensen niet alleen meer leren over dyslexie, maar ook beter begrijpen dat iedereen informatie op een andere manier kan ervaren. Ik wil bezoekers niet alleen vertellen hoe dyslexie kan voelen, maar ze er ook zelf iets van laten ervaren. Zo kunnen ze voor even ontdekken hoe het is wanneer lezen niet altijd vanzelf gaat."
].join("\n\n");

const storiesByLanguage = {
  en: [
    "Hi, I'm Dinand, and I'd like to introduce myself. I have dyslexia, which can sometimes make reading and writing more difficult for me. When I read, long words can be harder to recognise, letters can seem to move around, or I may need to read a sentence several times before I fully understand it. As a result, reading can take more time and effort for me than for someone without dyslexia.",
    "Because of my dyslexia, I sometimes experience text differently from other people. Words that are easy for one person to read can be difficult for me to recognise and understand quickly. This does not mean I cannot understand things; my brain sometimes processes information differently. Everyone reads and experiences the world in their own way, and I want to show what that can look like for me.",
    "That is why I am making my own website for a project. I want this website to help people experience how I read, see, and experience the world with dyslexia. I want to show that reading is not the same for everyone, and that an ordinary text can feel very different to someone with dyslexia. By showing text in different ways, I hope visitors can discover how challenging it can be when letters are harder to recognise.",
    "I have several hobbies. I enjoy exploring computers and technology, making programs with Python, and playing simulation games. I am especially interested in DCS World and Arma Reforger. In DCS World, I like flying military aircraft such as the F-16 Fighting Falcon. I am also interested in military aviation and enjoy learning about aircraft, helicopters, and the technology behind them.",
    "Programming lets me develop my own ideas and discover how things work behind the scenes. I enjoy solving problems, learning new things, and making something that really works. Dyslexia can make some things more difficult, but it does not stop me from pursuing my interests and taking on new challenges.",
    "With my website, I hope people will not only learn more about dyslexia, but also understand that everyone can experience information differently. I do not just want to tell visitors what dyslexia can feel like; I want them to experience something for themselves. They can briefly discover what it is like when reading does not always come easily."
  ].join("\n\n"),
  de: [
    "Hallo, ich bin Dinand und möchte mich kurz vorstellen. Ich habe Legasthenie, wodurch mir Lesen und Schreiben manchmal schwerer fallen. Beim Lesen sind lange Wörter für mich oft schwieriger zu erkennen. Buchstaben scheinen sich manchmal zu verschieben, oder ich muss einen Satz mehrmals lesen, bis ich ihn ganz verstanden habe. Deshalb kostet mich Lesen manchmal mehr Zeit und Mühe als Menschen ohne Legasthenie.",
    "Durch meine Legasthenie erlebe ich Texte manchmal anders als andere Menschen. Wörter, die für andere leicht zu lesen sind, kann ich oft nicht so schnell erkennen und verstehen. Das bedeutet nicht, dass ich Dinge nicht verstehen kann, sondern dass mein Gehirn Informationen manchmal anders verarbeitet. Jeder liest und erlebt die Welt auf seine eigene Weise. Ich möchte zeigen, wie das bei mir aussieht.",
    "Für ein Projekt erstelle ich deshalb meine eigene Website. Damit möchte ich anderen zeigen, wie ich mit Legasthenie lese, sehe und die Welt erlebe. Lesen ist nicht für alle gleich, und ein gewöhnlicher Text kann für Menschen mit Legasthenie ganz anders wirken. Mit verschiedenen Textdarstellungen möchte ich zeigen, wie schwierig es sein kann, wenn Buchstaben schwerer zu erkennen sind.",
    "Ich habe verschiedene Hobbys. Ich entdecke gern Computer und Technik, programmiere mit Python und spiele Simulationsspiele. Besonders interessieren mich DCS World und Arma Reforger. In DCS World fliege ich gern Militärflugzeuge wie die F-16 Fighting Falcon. Außerdem interessiere ich mich für die Militärluftfahrt und lerne gern mehr über Flugzeuge, Hubschrauber und die Technik dahinter.",
    "Beim Programmieren kann ich meine eigenen Ideen umsetzen und herausfinden, wie Dinge im Hintergrund funktionieren. Ich löse gern Probleme, lerne Neues und entwickle etwas, das wirklich funktioniert. Meine Legasthenie kann manche Dinge schwieriger machen, aber sie hält mich nicht davon ab, meinen Interessen nachzugehen und neue Herausforderungen anzunehmen.",
    "Mit meiner Website hoffe ich, dass Menschen mehr über Legasthenie erfahren und verstehen, dass jeder Informationen anders erleben kann. Ich möchte nicht nur erzählen, wie sich Legasthenie anfühlen kann, sondern Besucher auch etwas davon selbst erleben lassen. So können sie kurz entdecken, wie es ist, wenn Lesen nicht immer leichtfällt."
  ].join("\n\n"),
  nl: exampleText
};

const translations = {
  en: {
    pageTitle: "Read my way", brand: "Read my way", brandAria: "Read my way, home", headerNote: "A reading experience you can adjust", languageLabel: "Language", fontSerif: "Serif", fontMono: "Monospace", saveProfile: "Save profile",
    eyebrow: "A place where reading feels different", storyLabel: "MY STORY", storyTitle: "Hi, I'm Dinand", readingTime: "10 minute read", pageHeading: "My story",
    intro: "I'm Dinand. Below, I share a little about myself and how I experience reading with dyslexia. You can adjust how the text appears in the settings.",
    normalRead: "Read normally", enableEffects: "Turn effects back on", normalActive: "Normal reading mode is active.", focusMode: "Focus reading mode", exitFocus: "Exit reading mode",
    readingNote: "This is an educational reading experiment, not a true simulation of dyslexia. There is no single experience shared by everyone with dyslexia.",
    backgroundLabel: "BACKGROUND", infoTitle: "About dyslexia and this experiment", whatIsDyslexiaTitle: "What is dyslexia?",
    whatIsDyslexia: "Dyslexia is a learning difference that can mainly affect fluent and accurate reading and spelling. Reading may take more time and effort. It says nothing about a person's intelligence. Experiences and helpful support differ from person to person.",
    pageDoesTitle: "What does this page do?", pageDoes: "The inspiration describes one person's experience of reading that takes concentration, and experiments with occasionally swapped letters. This page makes those letter effects adjustable and adds gentle, random movement. It is an artificial example to start a conversation about reading effort, not a depiction of how anyone's brain or vision works.",
    useCarefullyTitle: "Use it thoughtfully", useCarefully: "Use this as a short demonstration or conversation starter, not as a test, diagnosis, or proof of what dyslexia feels like. Ask people with dyslexia about their own experiences, and let them skip or pause the effects. Font, spacing, and colour settings are personal preferences; they are not treatment and do not work the same way for everyone.",
    readMoreTitle: "Read more", sourceGeon: "Geon — ‘Dsxyliea’ (inspiration for the letter experiment)", sourceDyslexieCentraal: "Dyslexie Centraal — information about reading difficulties and dyslexia", sourceNhs: "NHS — information about dyslexia and support (English)",
    researchLabel: "RESEARCH AND EXPERIENCE", researchTitle: "A closer look at dyslexia", researchIntro: "This short overview draws on research and health information. It is general information, not a diagnosis or a description that fits everyone.",
    readingExperienceTitle: "Why can reading take more effort?", readingExperienceBody: "Reading involves recognising written words, linking letters with speech sounds, and building meaning from sentences. For some people with dyslexia, recognising words accurately or quickly is less automatic. More attention may go into working out words, leaving less available to hold on to the meaning of a long sentence. A reader may go back and read it again, even when they understand the ideas perfectly well.", readingExampleBody: "For example, one reader may recognise a long word straight away, while another needs to sound it out and then reread the sentence to reconnect with its meaning. This is only an illustration: people with dyslexia read in many different ways.",
    dailyLifeTitle: "Possible experiences in daily life", dailyLifeBody: "Reading and spelling may be slow or tiring; written instructions, unfamiliar names, or reading aloud may take extra effort. After a long text, someone may feel mentally tired, lose the thread, or need a break. Other people may mainly notice spelling or planning tasks, and some people experience few difficulties in particular situations.", visualNuance: "Letters do not generally move or reverse for everyone with dyslexia. Some people do report visual discomfort or difficulty following lines, but that is not a universal feature or proof of dyslexia. The moving-letter effects on this site are an optional illustration, not a simulation.",
    evidenceTitle: "What research says, with context", evidenceBody: "Dyslexia mainly affects word reading and/or spelling, including accuracy and reading speed. It occurs across a range of abilities and is not a measure of intelligence. A research review estimated that about 1 in 14 primary-school-age children worldwide met the study criteria. Estimates depend on language, methods, and definitions, so this is not an exact figure for the Netherlands or for diagnosed people.", wellbeingBody: "Reading difficulties can be associated with stress, reading fatigue, anxiety, or lower confidence for some people. An association does not mean dyslexia inevitably causes mental-health problems. Supportive teaching, understanding, and suitable tools can make a difference.",
    overlapTitle: "Other needs and useful support", overlapBody: "Dyslexia can occur alongside ADHD, developmental language disorder, or dyscalculia, but these are distinct conditions and not everyone has more than one. Difficulties with memory, organisation, or processing speed may also occur for some people; they are not requirements for dyslexia.", supportBody: "Helpful support depends on the person. It can include structured reading and spelling instruction, extra time, clear step-by-step directions, text-to-speech, audiobooks, or adjustments at school, college, or work. A qualified specialist can assess reading and spelling needs; an online demonstration cannot diagnose dyslexia.",
    researchSourcesTitle: "Research and guidance", researchSourceIda: "International Dyslexia Association — 2025 definition and explanation", researchSourcePrevalence: "Systematic review — estimated prevalence in primary-school-age children", researchSourceWellbeing: "Systematic review and meta-analysis — reading difficulties and mental health", researchSourceNhsAdults: "NHS — dyslexia in adults and support",
    quizLabel: "QUICK QUIZ", quizTitle: "What do you know about dyslexia?", quizIntro: "Ten questions with explanations. This is for learning, not a test or diagnosis.", quizCheck: "Check answer", quizNext: "Next question", quizRestart: "Try again", quizChooseAnswer: "Choose an answer first.", quizCorrect: "That's right!", quizIncorrect: "Not quite.", quizQuestionCount: "Question {current} of {total}", quizScore: "You got {score} out of {total} correct.", quizComplete: "Quiz complete", quizGoodScore: "Great work. Keep in mind that people's experiences differ.", quizKeepLearning: "Thanks for taking the quiz. The explanations and sources above are there if you'd like to learn more.",
    quizQuestions: [
      { question: "What does dyslexia mainly affect?", options: ["Reading and spelling, including accuracy or speed", "Intelligence", "Vision in the same way for everyone"], answer: 0, explanation: "Dyslexia mainly affects learning to read and spell words. It is not a measure of intelligence, and it does not look the same for everyone." },
      { question: "Do letters move or turn around for everyone with dyslexia?", options: ["Yes, that is required for a dyslexia diagnosis", "No. Experiences vary, and moving letters are not a universal feature", "Only when reading aloud"], answer: 1, explanation: "Some people describe visual discomfort, but moving or reversed letters are not a universal feature or proof of dyslexia." },
      { question: "What does the estimate of about 1 in 14 children mean?", options: ["An exact rate for every country", "A worldwide research estimate for primary-school-age children, based on study criteria", "The number of children who need the same support"], answer: 1, explanation: "It is an estimate from research, not an exact Dutch rate or a count of everyone with a formal diagnosis. Results depend on how studies define and identify dyslexia." },
      { question: "Can dyslexia occur alongside ADHD or dyscalculia?", options: ["No, they rule each other out", "Yes, they can occur together but are distinct conditions", "Yes, everyone with dyslexia also has them"], answer: 1, explanation: "These distinct conditions can occur together, but many people with dyslexia do not have ADHD or dyscalculia." },
      { question: "What kind of support may help?", options: ["The same single method for everyone", "Never allowing extra time or reading tools", "Support matched to the person, such as structured instruction or text-to-speech"], answer: 2, explanation: "Helpful support depends on the person and may include explicit reading instruction, extra time, clear steps, or tools such as text-to-speech." },
      { question: "Can someone understand a topic well but still read slowly?", options: ["Yes. Understanding and reading speed are different", "No. Slow reading always means poor understanding", "Only children can do that"], answer: 0, explanation: "A person may understand ideas well while needing extra time and effort to recognise written words." },
      { question: "Can dyslexia still affect someone in adulthood?", options: ["No, everyone grows out of it", "Yes, although skills and strategies can improve", "Only if they did not read as a child"], answer: 1, explanation: "Dyslexia can continue into adulthood. Learning and support can improve skills and make tasks easier to manage." },
      { question: "Does mixing up b and d by itself prove someone has dyslexia?", options: ["Yes, it is enough for a diagnosis", "No, by itself it does not prove dyslexia", "Yes, but only in adults"], answer: 1, explanation: "Letter reversals or confusion can happen for different reasons and are not, on their own, a diagnosis." },
      { question: "Will everyone with dyslexia develop anxiety or low confidence?", options: ["Yes, it always happens", "No. Some people may experience this, but it is not inevitable", "Only people who read aloud"], answer: 1, explanation: "Some people experience stress or lower confidence, but this is not inevitable. Supportive environments can help." },
      { question: "Who can assess whether someone has dyslexia?", options: ["An online quiz", "A qualified specialist who assesses reading and spelling", "A single eyesight check"], answer: 1, explanation: "A proper assessment looks at reading and spelling skills and should be carried out by a qualified professional. This quiz cannot diagnose dyslexia." }
    ],
    experienceLabel: "YOUR EXPERIENCE", contactTitle: "Share what you need", contactIntro: "Many parts of this page are adjustable. Show it to your family and friends and tell them how you experience reading. Is a setting missing, or do you have an idea for an effect? Let me know. I'll see what I can add to help you share your experience with them.", feedbackPrompt: "Have a suggestion? Share it in", discordLink: "the Discord server", orPostIt: "or post it in", issuesLink: "the GitHub repository issues", contactNote: "This page cannot show exactly what dyslexia feels like for everyone. Your own story matters most.",
    settingsTitle: "Reading settings", settingsSubtitle: "Choose what feels comfortable for you.", presetLabel: "Start with a preset", presetMaker: "The creator's experience", presetCustom: "My settings", presetCalm: "Calm", presetEasy: "Easy reading", presetSpacious: "Extra spacing", presetContrast: "Higher contrast", presetHelp: "These are starting points, not fixed profiles or diagnoses.",
    saveOwnProfile: "Save a custom profile", savedProfiles: "Saved profiles", chooseProfile: "Choose a profile", save: "Save", load: "Load", delete: "Delete", profileNamePlaceholder: "Profile name", customTitlePlaceholder: "Hi, I'm Dinand",
    categoryTypography: "Text appearance", fontLabel: "Font", fontSimple: "Simple (sans-serif)", fontSizeLabel: "Text size", lineHeightLabel: "Line spacing", letterSpacingLabel: "Letter spacing", wordSpacingLabel: "Word spacing", paragraphSpacingLabel: "Paragraph spacing", textWidthLabel: "Text width", themeLabel: "Colour theme", themeLight: "Soft light", themeCream: "Warm cream", themeDark: "Dark", themeContrast: "High contrast",
    categoryEffects: "Letter effects", shuffleLabel: "Shuffle letters within words", shuffleToggle: "Shuffling on", confusionLabel: "Confuse letters", confusionToggle: "Letter confusion on", motionLabel: "Let letters float", motionToggle: "Floating on", shuffleIntervalLabel: "Time between letter changes", shuffleDurationLabel: "Movement duration", pauseEffects: "Pause movement and haze",
    categoryHaze: "Reading haze", hazeStrengthLabel: "Haze strength", hazeToggle: "Reading haze on", hazeModeLabel: "When the haze appears", hazeIntermittent: "Occasionally", hazeConstant: "Continuously", hazeIntervalType: "Interval type", intervalFixed: "Fixed interval", intervalRandom: "Random between 7 and 10 sec", hazeIntervalLabel: "Time between haze moments", hazeDurationLabel: "How long the haze lasts",
    categoryRuler: "Reading ruler", rulerToggle: "Follow with ruler", rulerHelp: "The ruler follows your pointer over the reading text and dims the surrounding lines.", categoryCustomStory: "Your own story", customTitleLabel: "Title", customTextLabel: "Reading text", customTextPlaceholder: "Leave empty to use the default story.", applyText: "Apply text", defaultStory: "Default story", resetSettings: "Reset settings", saveStatus: "Settings are saved on this device.", footer: "Your settings stay on this device. This page is not a diagnosis and does not replace professional advice.", pauseHaze: "Pause haze",
    savedLocally: "Settings saved on this device.", saveFailed: "Could not save; your settings will only last while this page is open.", storageUnavailable: "Storage is unavailable; settings will only last while this page is open.", readSettingsFailed: "Saved settings could not be read; default settings are being used.", profilesSaved: "Profiles saved on this device.", profileSaveFailed: "Could not save profiles; check available browser storage.", enterProfileName: "Enter a name for this profile first.", maxProfiles: "You can save up to 30 profiles.", profileApplied: "Profile ‘{name}’ applied.", normalStatus: "The text is back to normal. You can start reading again from the top.", hazeIntervalRandomValue: "7–10 sec (random)", off: "Off", seconds: "sec", resumeEffects: "Resume effects"
  },
  de: {
    pageTitle: "Lies auf meine Weise", brand: "Lies auf meine Weise", brandAria: "Lies auf meine Weise, Startseite", headerNote: "Ein Leseerlebnis zum Anpassen", languageLabel: "Sprache", fontSerif: "Serifenschrift", fontMono: "Monospace", saveProfile: "Profil speichern",
    eyebrow: "Ein Ort, an dem sich Lesen anders anfühlt", storyLabel: "MEINE GESCHICHTE", storyTitle: "Hallo, ich bin Dinand", readingTime: "10 Minuten Lesezeit", pageHeading: "Meine Geschichte",
    intro: "Ich bin Dinand. Hier erzähle ich etwas über mich und darüber, wie ich das Lesen mit Legasthenie erlebe. In den Einstellungen kannst du die Textdarstellung anpassen.",
    normalRead: "Text normal lesen", enableEffects: "Effekte wieder einschalten", normalActive: "Der normale Lesemodus ist aktiv.", focusMode: "Ruhiger Lesemodus", exitFocus: "Lesemodus beenden",
    readingNote: "Dies ist ein pädagogisches Leseexperiment und keine echte Simulation von Legasthenie. Es gibt nicht nur eine einzige Erfahrung, die für alle Menschen mit Legasthenie gilt.",
    backgroundLabel: "HINTERGRUND", infoTitle: "Über Legasthenie und dieses Experiment", whatIsDyslexiaTitle: "Was ist Legasthenie?",
    whatIsDyslexia: "Legasthenie ist eine Lernbesonderheit, die vor allem flüssiges und genaues Lesen und Schreiben beeinflussen kann. Lesen kann dadurch mehr Zeit und Mühe kosten. Das sagt nichts über die Intelligenz eines Menschen aus. Erfahrungen und hilfreiche Unterstützung sind von Person zu Person verschieden.",
    pageDoesTitle: "Was macht diese Seite?", pageDoes: "Die Inspiration beschreibt die persönliche Erfahrung, dass Lesen viel Konzentration erfordern kann, und experimentiert mit gelegentlich vertauschten Buchstaben. Auf dieser Seite lassen sich die Buchstabeneffekte einstellen; außerdem gibt es leichte, zufällige Bewegungen. Das ist ein künstliches Beispiel für ein Gespräch über die Anstrengung beim Lesen und keine Darstellung davon, wie das Gehirn oder Sehen eines Menschen funktioniert.",
    useCarefullyTitle: "Bitte bewusst verwenden", useCarefully: "Verwende dies als kurze Demonstration oder Gesprächsanstoß, nicht als Test, Diagnose oder Beweis dafür, wie sich Legasthenie anfühlt. Frage Menschen mit Legasthenie nach ihren eigenen Erfahrungen und lass sie die Effekte überspringen oder pausieren. Schriftart, Abstände und Farben sind persönliche Vorlieben; sie sind keine Behandlung und wirken nicht bei allen gleich.",
    readMoreTitle: "Weiterlesen", sourceGeon: "Geon — ‘Dsxyliea’ (Inspiration für das Buchstabenexperiment)", sourceDyslexieCentraal: "Dyslexie Centraal — Informationen zu Leseschwierigkeiten und Legasthenie", sourceNhs: "NHS — Informationen zu Legasthenie und Unterstützung (Englisch)",
    researchLabel: "FORSCHUNG UND ERFAHRUNG", researchTitle: "Legasthenie genauer betrachtet", researchIntro: "Dieser kurze Überblick fasst Forschung und Gesundheitsinformationen zusammen. Er dient der allgemeinen Information und ist weder eine Diagnose noch eine Beschreibung, die auf alle zutrifft.",
    readingExperienceTitle: "Warum kann Lesen mehr Mühe kosten?", readingExperienceBody: "Beim Lesen müssen geschriebene Wörter erkannt, Buchstaben mit Sprachlauten verbunden und Satzbedeutungen erschlossen werden. Für manche Menschen mit Legasthenie läuft das Erkennen von Wörtern weniger automatisch ab. Sie benötigen mehr Aufmerksamkeit, um Wörter zu entschlüsseln; dadurch bleibt manchmal weniger Aufmerksamkeit, um die Bedeutung eines langen Satzes im Kopf zu behalten. Dann wird ein Satz vielleicht noch einmal gelesen, obwohl die Gedanken darin gut verstanden werden.", readingExampleBody: "Zum Beispiel erkennt eine Person ein langes Wort sofort, während eine andere es erst Laut für Laut erschließt und den Satz erneut liest, um den Zusammenhang wiederzufinden. Das ist nur ein Beispiel: Menschen mit Legasthenie lesen auf sehr unterschiedliche Weise.",
    dailyLifeTitle: "Mögliche Erfahrungen im Alltag", dailyLifeBody: "Lesen und Rechtschreibung können langsam oder anstrengend sein. Schriftliche Anweisungen, unbekannte Namen oder lautes Vorlesen können zusätzliche Mühe kosten. Nach einem langen Text kann man sich geistig erschöpft fühlen, den Faden verlieren oder eine Pause brauchen. Bei anderen fallen vor allem Rechtschreibung oder Planungsaufgaben auf; manche haben in bestimmten Situationen kaum Schwierigkeiten.", visualNuance: "Buchstaben bewegen oder spiegeln sich nicht grundsätzlich bei allen Menschen mit Legasthenie. Manche berichten über visuelle Beschwerden oder Schwierigkeiten, einer Zeile zu folgen. Das ist jedoch kein Merkmal, das alle betrifft, und kein Beweis für Legasthenie. Die bewegten Buchstaben auf dieser Website sind eine optionale Illustration, keine Simulation.",
    evidenceTitle: "Was die Forschung sagt – mit Einordnung", evidenceBody: "Legasthenie betrifft vor allem das Lesen und/oder Schreiben von Wörtern, einschließlich Genauigkeit und Lesegeschwindigkeit. Sie kommt bei unterschiedlichen Begabungen vor und ist kein Maß für Intelligenz. Eine Übersichtsarbeit schätzte, dass weltweit etwa 1 von 14 Kindern im Grundschulalter die Kriterien der untersuchten Studien erfüllte. Die Schätzungen hängen von Sprache, Methoden und Definitionen ab und sind daher keine genaue Zahl für die Niederlande oder für diagnostizierte Personen.", wellbeingBody: "Leseschwierigkeiten können bei manchen Menschen mit Stress, Lesemüdigkeit, Angst oder geringerem Selbstvertrauen verbunden sein. Ein Zusammenhang bedeutet nicht, dass Legasthenie zwangsläufig psychische Probleme verursacht. Unterstützender Unterricht, Verständnis und passende Hilfsmittel können helfen.",
    overlapTitle: "Weitere Bedürfnisse und hilfreiche Unterstützung", overlapBody: "Legasthenie kann zusammen mit ADHS, einer Sprachentwicklungsstörung oder Dyskalkulie auftreten. Das sind jedoch unterschiedliche Bedingungen, und nicht jeder hat mehrere davon. Manche Menschen haben zusätzlich Schwierigkeiten mit Gedächtnis, Organisation oder Verarbeitungsgeschwindigkeit; das gehört nicht zwingend zu Legasthenie.", supportBody: "Welche Unterstützung hilft, ist individuell verschieden. Dazu gehören strukturierter Lese- und Rechtschreibunterricht, mehr Zeit, klare Schritte, Vorlesefunktionen, Hörbücher oder Anpassungen in Schule, Ausbildung und Beruf. Eine qualifizierte Fachperson kann Lese- und Rechtschreibbedürfnisse beurteilen; eine Online-Demonstration kann keine Legasthenie diagnostizieren.",
    researchSourcesTitle: "Forschung und Informationen", researchSourceIda: "International Dyslexia Association — Definition und Erklärung von 2025", researchSourcePrevalence: "Systematische Übersichtsarbeit — geschätzte Häufigkeit bei Grundschulkindern", researchSourceWellbeing: "Systematische Übersichtsarbeit und Metaanalyse — Leseschwierigkeiten und psychische Gesundheit", researchSourceNhsAdults: "NHS — Legasthenie bei Erwachsenen und Unterstützung",
    quizLabel: "KURZES QUIZ", quizTitle: "Was weißt du über Legasthenie?", quizIntro: "Zehn Fragen mit Erklärungen. Das Quiz dient zum Lernen und ist weder ein Test noch eine Diagnose.", quizCheck: "Antwort prüfen", quizNext: "Nächste Frage", quizRestart: "Noch einmal versuchen", quizChooseAnswer: "Wähle zuerst eine Antwort.", quizCorrect: "Richtig!", quizIncorrect: "Nicht ganz.", quizQuestionCount: "Frage {current} von {total}", quizScore: "Du hast {score} von {total} richtig beantwortet.", quizComplete: "Quiz abgeschlossen", quizGoodScore: "Gut gemacht. Denk daran: Die Erfahrungen sind verschieden.", quizKeepLearning: "Danke fürs Mitmachen. Oben findest du Erklärungen und Quellen, wenn du mehr erfahren möchtest.",
    quizQuestions: [
      { question: "Was wird durch Legasthenie hauptsächlich beeinflusst?", options: ["Lesen und Rechtschreibung, einschließlich Genauigkeit oder Tempo", "Die Intelligenz", "Das Sehen bei allen auf dieselbe Weise"], answer: 0, explanation: "Legasthenie betrifft vor allem das Erlernen des Lesens und Schreibens von Wörtern. Sie ist kein Maß für Intelligenz und zeigt sich nicht bei allen gleich." },
      { question: "Bewegen oder drehen sich Buchstaben bei allen Menschen mit Legasthenie?", options: ["Ja, das gehört zwingend zur Diagnose", "Nein. Die Erfahrungen unterscheiden sich; bewegte Buchstaben sind kein allgemeines Merkmal", "Nur beim Vorlesen"], answer: 1, explanation: "Manche Menschen berichten über visuelle Beschwerden. Bewegte oder umgedrehte Buchstaben sind jedoch kein allgemeines Merkmal und kein Beweis für Legasthenie." },
      { question: "Was bedeutet die Schätzung von etwa 1 von 14 Kindern?", options: ["Eine genaue Quote für jedes Land", "Eine weltweite Forschungsschätzung für Grundschulkinder anhand der Kriterien der Studien", "Die Zahl der Kinder, die alle dieselbe Unterstützung brauchen"], answer: 1, explanation: "Es ist eine Forschungsschätzung, keine genaue deutsche Quote und keine Zählung aller offiziell diagnostizierten Personen. Ergebnisse hängen davon ab, wie Studien Legasthenie definieren und feststellen." },
      { question: "Kann Legasthenie zusammen mit ADHS oder Dyskalkulie auftreten?", options: ["Nein, sie schließen sich gegenseitig aus", "Ja, sie können zusammen auftreten, sind aber unterschiedliche Bedingungen", "Ja, alle Menschen mit Legasthenie haben auch diese Bedingungen"], answer: 1, explanation: "Diese unterschiedlichen Bedingungen können zusammen auftreten. Viele Menschen mit Legasthenie haben jedoch weder ADHS noch Dyskalkulie." },
      { question: "Welche Unterstützung kann hilfreich sein?", options: ["Dieselbe einzelne Methode für alle", "Niemals mehr Zeit oder Lesehilfen anbieten", "Individuell passende Unterstützung, zum Beispiel strukturierter Unterricht oder Vorlesefunktion"], answer: 2, explanation: "Welche Unterstützung hilft, ist individuell verschieden. Dazu können gezielter Leseunterricht, mehr Zeit, klare Schritte oder Vorlesewerkzeuge gehören." },
      { question: "Kann jemand ein Thema gut verstehen und trotzdem langsam lesen?", options: ["Ja. Verständnis und Lesetempo sind verschieden", "Nein. Langsames Lesen bedeutet immer schlechtes Verständnis", "Das kommt nur bei Kindern vor"], answer: 0, explanation: "Jemand kann Inhalte gut verstehen und trotzdem mehr Zeit und Mühe brauchen, um geschriebene Wörter zu erkennen." },
      { question: "Kann Legasthenie auch Erwachsene betreffen?", options: ["Nein, alle wachsen daraus heraus", "Ja, Fähigkeiten und Strategien können sich aber verbessern", "Nur wenn sie als Kind nicht gelesen haben"], answer: 1, explanation: "Legasthenie kann bis ins Erwachsenenalter bestehen. Lernen und Unterstützung können Fähigkeiten verbessern und den Alltag erleichtern." },
      { question: "Beweist eine Verwechslung von b und d allein Legasthenie?", options: ["Ja, das reicht für eine Diagnose", "Nein, allein beweist es keine Legasthenie", "Ja, aber nur bei Erwachsenen"], answer: 1, explanation: "Buchstabenverwechslungen können verschiedene Ursachen haben und sind für sich allein keine Diagnose." },
      { question: "Bekommen alle Menschen mit Legasthenie Angst oder wenig Selbstvertrauen?", options: ["Ja, das passiert immer", "Nein. Manche erleben das, aber es ist nicht unvermeidlich", "Nur Menschen, die laut lesen"], answer: 1, explanation: "Manche Menschen erleben Stress oder weniger Selbstvertrauen, aber das ist nicht unvermeidlich. Ein unterstützendes Umfeld kann helfen." },
      { question: "Wer kann feststellen, ob jemand Legasthenie hat?", options: ["Ein Online-Quiz", "Eine qualifizierte Fachperson, die Lesen und Schreiben beurteilt", "Ein einzelner Sehtest"], answer: 1, explanation: "Eine fachliche Beurteilung untersucht Lese- und Rechtschreibfähigkeiten und sollte von einer qualifizierten Fachperson durchgeführt werden. Dieses Quiz kann keine Legasthenie diagnostizieren." }
    ],
    experienceLabel: "DEINE ERFAHRUNG", contactTitle: "Teile, was du brauchst", contactIntro: "Viele Bereiche dieser Seite lassen sich anpassen. Zeige sie deiner Familie und deinen Freunden und erzähle ihnen, wie du das Lesen erlebst. Fehlt eine Einstellung oder hast du eine Idee für einen Effekt? Sag mir Bescheid. Ich schaue, was ich ergänzen kann, damit du deine Erfahrung mit ihnen teilen kannst.", feedbackPrompt: "Hast du einen Vorschlag? Teile ihn auf", discordLink: "dem Discord-Server", orPostIt: "oder schreibe ihn in die", issuesLink: "GitHub-Repository-Issues", contactNote: "Diese Seite kann nicht genau zeigen, wie sich Legasthenie für alle anfühlt. Deine eigene Geschichte ist am wichtigsten.",
    settingsTitle: "Leseeinstellungen", settingsSubtitle: "Wähle, was sich für dich angenehm anfühlt.", presetLabel: "Mit einem Profil beginnen", presetMaker: "Die Erfahrung des Erstellers", presetCustom: "Meine Einstellungen", presetCalm: "Ruhig", presetEasy: "Leichter lesen", presetSpacious: "Mehr Abstand", presetContrast: "Hoher Kontrast", presetHelp: "Dies sind Ausgangspunkte, keine festen Profile oder Diagnosen.",
    saveOwnProfile: "Eigenes Profil speichern", savedProfiles: "Gespeicherte Profile", chooseProfile: "Profil auswählen", save: "Speichern", load: "Laden", delete: "Löschen", profileNamePlaceholder: "Profilname", customTitlePlaceholder: "Hallo, ich bin Dinand",
    categoryTypography: "Textdarstellung", fontLabel: "Schriftart", fontSimple: "Einfach (serifenlos)", fontSizeLabel: "Textgröße", lineHeightLabel: "Zeilenabstand", letterSpacingLabel: "Buchstabenabstand", wordSpacingLabel: "Wortabstand", paragraphSpacingLabel: "Absatzabstand", textWidthLabel: "Textbreite", themeLabel: "Farbschema", themeLight: "Sanft hell", themeCream: "Warmes Creme", themeDark: "Dunkel", themeContrast: "Hoher Kontrast",
    categoryEffects: "Buchstabeneffekte", shuffleLabel: "Buchstaben im Wort vertauschen", shuffleToggle: "Vertauschen an", confusionLabel: "Buchstaben verwechseln", confusionToggle: "Buchstabenverwechslung an", motionLabel: "Buchstaben schweben lassen", motionToggle: "Schweben an", shuffleIntervalLabel: "Zeit zwischen Buchstabenwechseln", shuffleDurationLabel: "Bewegungsdauer", pauseEffects: "Bewegung und Schleier pausieren",
    categoryHaze: "Leseschleier", hazeStrengthLabel: "Stärke des Schleiers", hazeToggle: "Leseschleier an", hazeModeLabel: "Wann der Schleier erscheint", hazeIntermittent: "Gelegentlich", hazeConstant: "Dauerhaft", hazeIntervalType: "Intervalltyp", intervalFixed: "Festes Intervall", intervalRandom: "Zufällig zwischen 7 und 10 Sek.", hazeIntervalLabel: "Zeit zwischen Schleiermomenten", hazeDurationLabel: "Dauer des Schleiers",
    categoryRuler: "Leselineal", rulerToggle: "Lineal folgen lassen", rulerHelp: "Das Lineal folgt deinem Mauszeiger über dem Lesetext und blendet die umliegenden Zeilen ab.", categoryCustomStory: "Eigene Geschichte", customTitleLabel: "Titel", customTextLabel: "Lesetext", customTextPlaceholder: "Leer lassen, um die Standardgeschichte zu verwenden.", applyText: "Text übernehmen", defaultStory: "Standardgeschichte", resetSettings: "Einstellungen zurücksetzen", saveStatus: "Einstellungen werden auf diesem Gerät gespeichert.", footer: "Deine Einstellungen bleiben auf diesem Gerät. Diese Seite stellt keine Diagnose und ersetzt keine professionelle Beratung.", pauseHaze: "Schleier pausieren",
    savedLocally: "Einstellungen auf diesem Gerät gespeichert.", saveFailed: "Speichern fehlgeschlagen; die Einstellungen gelten nur, solange diese Seite geöffnet ist.", storageUnavailable: "Speicher nicht verfügbar; Einstellungen gelten nur, solange diese Seite geöffnet ist.", readSettingsFailed: "Gespeicherte Einstellungen konnten nicht gelesen werden; Standardeinstellungen werden verwendet.", profilesSaved: "Profile auf diesem Gerät gespeichert.", profileSaveFailed: "Profile konnten nicht gespeichert werden; prüfe den verfügbaren Browserspeicher.", enterProfileName: "Gib zuerst einen Namen für dieses Profil ein.", maxProfiles: "Du kannst höchstens 30 Profile speichern.", profileApplied: "Profil ‘{name}’ wurde angewendet.", normalStatus: "Der Text wird wieder normal angezeigt. Du kannst oben erneut mit dem Lesen beginnen.", hazeIntervalRandomValue: "7–10 Sek. (zufällig)", off: "Aus", seconds: "Sek.", resumeEffects: "Effekte fortsetzen"
  },
  nl: {
    pageTitle: "Lees op mijn manier", brand: "Lees op mijn manier", brandAria: "Lees op jouw manier, startpagina", headerNote: "Een leeservaring die je zelf instelt", languageLabel: "Taal", fontSerif: "Serif", fontMono: "Monospace", saveProfile: "Profiel opslaan",
    eyebrow: "Een plek waar lezen anders is", storyLabel: "MIJN VERHAAL", storyTitle: "Hoi, ik ben Dinand", readingTime: "10 minuten lezen", pageHeading: "Mijn verhaal",
    intro: "Ik ben Dinand. Hieronder vertel ik iets over mezelf en over hoe ik lezen met dyslexie ervaar. Met de instellingen kun je de tekstweergave aanpassen.",
    normalRead: "Lees deze tekst normaal", enableEffects: "Effecten weer aanzetten", normalActive: "De normale leesstand is actief.", focusMode: "Rustige leesstand", exitFocus: "Leesstand afsluiten",
    readingNote: "Dit is een educatief leesexperiment, geen echte simulatie van dyslexie. Er is geen één ervaring die voor iedereen met dyslexie geldt.",
    backgroundLabel: "ACHTERGROND", infoTitle: "Over dyslexie en dit experiment", whatIsDyslexiaTitle: "Wat is dyslexie?",
    whatIsDyslexia: "Dyslexie is een leerstoornis die vooral invloed kan hebben op vlot en nauwkeurig lezen en spellen. Lezen kan daardoor meer tijd en inspanning kosten. Het zegt niets over iemands intelligentie. Hoe iemand het ervaart en welke ondersteuning helpt, verschilt per persoon.",
    pageDoesTitle: "Wat doet deze pagina?", pageDoes: "De inspiratiebron beschrijft één persoonlijke ervaring van lezen dat veel concentratie vraagt, en experimenteert met af en toe verwisselde letters in woorden. Deze pagina maakt dat letter-effect instelbaar en voegt kleine, willekeurige bewegingen toe. Het is een kunstmatig voorbeeld om over leesinspanning te praten, geen weergave van wat iemands brein of zicht doet.",
    useCarefullyTitle: "Gebruik het met aandacht", useCarefully: "Gebruik dit als korte demonstratie of gesprekstarter, niet als test, diagnose of bewijs van hoe dyslexie voelt. Vraag mensen met dyslexie zelf naar hun ervaring en laat hen de effecten overslaan of pauzeren. De instellingen voor lettertype, ruimte en kleur zijn persoonlijke voorkeuren; ze zijn geen behandeling en werken niet voor iedereen hetzelfde.",
    readMoreTitle: "Meer lezen", sourceGeon: "Geon — ‘Dsxyliea’ (inspiratie voor het letterexperiment)", sourceDyslexieCentraal: "Dyslexie Centraal — informatie over leesproblemen en dyslexie", sourceNhs: "NHS — informatie over dyslexie en ondersteuning (Engels)",
    researchLabel: "ONDERZOEK EN ERVARING", researchTitle: "Meer over dyslexie", researchIntro: "Deze korte verdieping is gebaseerd op onderzoek en gezondheidsinformatie. Het is algemene informatie, geen diagnose of beschrijving die voor iedereen geldt.",
    readingExperienceTitle: "Waarom kan lezen meer moeite kosten?", readingExperienceBody: "Bij lezen herken je geschreven woorden, verbind je letters aan spraakklanken en bouw je betekenis op uit zinnen. Voor sommige mensen met dyslexie gaat woordherkenning minder automatisch. Er kan meer aandacht nodig zijn om woorden te ontcijferen, waardoor soms minder aandacht overblijft om de betekenis van een lange zin vast te houden. Dan lees je een zin misschien opnieuw, ook als je de ideeën prima begrijpt.", readingExampleBody: "De ene lezer herkent een lang woord meteen; een ander moet het eerst verklanken en de zin opnieuw lezen om de betekenis weer op te pakken. Dit is maar een voorbeeld: mensen met dyslexie lezen op veel verschillende manieren.",
    dailyLifeTitle: "Mogelijke ervaringen in het dagelijks leven", dailyLifeBody: "Lezen en spellen kunnen langzaam of vermoeiend zijn. Geschreven instructies, onbekende namen of hardop lezen kunnen extra inspanning vragen. Na een lange tekst kan iemand mentaal moe zijn, de draad kwijtraken of een pauze nodig hebben. Bij anderen vallen vooral spelling of plannen op; sommige mensen hebben in bepaalde situaties weinig moeite.", visualNuance: "Letters bewegen of spiegelen niet standaard bij iedereen met dyslexie. Sommige mensen ervaren wel visueel ongemak of moeite met het volgen van regels, maar dat geldt niet voor iedereen en bewijst geen dyslexie. De bewegende letters op deze website zijn een optionele illustratie, geen simulatie.",
    evidenceTitle: "Wat onderzoek zegt, met nuance", evidenceBody: "Dyslexie heeft vooral invloed op het lezen en/of spellen van woorden, waaronder nauwkeurigheid en leessnelheid. Het komt voor bij uiteenlopende talenten en zegt niets over intelligentie. Een onderzoeksreview schatte dat wereldwijd ongeveer 1 op de 14 basisschoolkinderen voldeed aan de criteria van de onderzochte studies. De schatting hangt af van taal, methode en definitie en is dus geen exact cijfer voor Nederland of voor mensen met een diagnose.", wellbeingBody: "Leesproblemen kunnen bij sommige mensen samengaan met stress, leesvermoeidheid, angst of minder zelfvertrouwen. Een verband betekent niet dat dyslexie automatisch mentale gezondheidsproblemen veroorzaakt. Begrip, passend onderwijs en geschikte hulpmiddelen kunnen verschil maken.",
    overlapTitle: "Andere behoeften en wat kan helpen", overlapBody: "Dyslexie kan samengaan met ADHD, een taalontwikkelingsstoornis of dyscalculie. Dat zijn verschillende aandoeningen en niet iedereen heeft er meer dan één. Sommige mensen hebben ook moeite met geheugen, organiseren of verwerkingssnelheid; dat hoort niet noodzakelijk bij dyslexie.", supportBody: "Welke ondersteuning helpt, verschilt per persoon. Denk aan gestructureerde lees- en spellingbegeleiding, extra tijd, duidelijke stappen, tekst-naar-spraak, luisterboeken of aanpassingen op school, opleiding of werk. Een deskundige kan lees- en spellingbehoeften onderzoeken; een online voorbeeld kan geen dyslexie vaststellen.",
    researchSourcesTitle: "Onderzoek en informatie", researchSourceIda: "International Dyslexia Association — definitie en toelichting uit 2025", researchSourcePrevalence: "Systematische review — geschatte prevalentie bij basisschoolkinderen", researchSourceWellbeing: "Systematische review en meta-analyse — leesproblemen en mentale gezondheid", researchSourceNhsAdults: "NHS — dyslexie bij volwassenen en ondersteuning",
    quizLabel: "KORTE QUIZ", quizTitle: "Wat weet jij over dyslexie?", quizIntro: "Tien vragen met uitleg. Deze quiz is bedoeld om van te leren, niet als test of diagnose.", quizCheck: "Controleer antwoord", quizNext: "Volgende vraag", quizRestart: "Opnieuw proberen", quizChooseAnswer: "Kies eerst een antwoord.", quizCorrect: "Dat klopt!", quizIncorrect: "Niet helemaal.", quizQuestionCount: "Vraag {current} van {total}", quizScore: "Je had er {score} van de {total} goed.", quizComplete: "Quiz afgerond", quizGoodScore: "Goed gedaan. Onthoud dat ervaringen per persoon verschillen.", quizKeepLearning: "Bedankt voor het meedoen. Bovenaan vind je uitleg en bronnen als je meer wilt lezen.",
    quizQuestions: [
      { question: "Waar heeft dyslexie vooral invloed op?", options: ["Lezen en spellen, waaronder nauwkeurigheid of tempo", "Intelligentie", "Het zicht van iedereen op dezelfde manier"], answer: 0, explanation: "Dyslexie heeft vooral invloed op het leren lezen en spellen van woorden. Het zegt niets over intelligentie en ziet er niet bij iedereen hetzelfde uit." },
      { question: "Bewegen of draaien letters bij iedereen met dyslexie?", options: ["Ja, dat hoort bij de diagnose", "Nee. Ervaringen verschillen; bewegende letters zijn geen kenmerk van iedereen", "Alleen bij hardop lezen"], answer: 1, explanation: "Sommige mensen ervaren visueel ongemak, maar bewegende of omgekeerde letters zijn geen kenmerk van iedereen en bewijzen geen dyslexie." },
      { question: "Wat betekent de schatting van ongeveer 1 op de 14 kinderen?", options: ["Een exact percentage voor elk land", "Een wereldwijde onderzoeksschatting bij basisschoolkinderen volgens de criteria van de studies", "Het aantal kinderen dat allemaal dezelfde hulp nodig heeft"], answer: 1, explanation: "Het is een onderzoeksschatting, geen exact Nederlands cijfer en geen telling van iedereen met een officiële diagnose. De uitkomst hangt af van hoe onderzoeken dyslexie definiëren en vaststellen." },
      { question: "Kan dyslexie samengaan met ADHD of dyscalculie?", options: ["Nee, die sluiten elkaar uit", "Ja, dat kan, maar het zijn verschillende aandoeningen", "Ja, iedereen met dyslexie heeft dat ook"], answer: 1, explanation: "Deze verschillende aandoeningen kunnen samen voorkomen, maar veel mensen met dyslexie hebben geen ADHD of dyscalculie." },
      { question: "Welke ondersteuning kan helpen?", options: ["Voor iedereen precies dezelfde aanpak", "Nooit extra tijd of hulpmiddelen geven", "Ondersteuning die bij de persoon past, zoals gerichte leesles of tekst-naar-spraak"], answer: 2, explanation: "Wat helpt verschilt per persoon. Mogelijke ondersteuning is gerichte leesbegeleiding, extra tijd, duidelijke stappen of hulpmiddelen zoals tekst-naar-spraak." },
      { question: "Kan iemand een onderwerp goed begrijpen en toch langzaam lezen?", options: ["Ja. Begrip en leessnelheid zijn verschillend", "Nee. Langzaam lezen betekent altijd dat iemand de tekst niet begrijpt", "Alleen kinderen kunnen dat"], answer: 0, explanation: "Iemand kan ideeën goed begrijpen en toch extra tijd en inspanning nodig hebben om geschreven woorden te herkennen." },
      { question: "Kan dyslexie ook op volwassen leeftijd invloed hebben?", options: ["Nee, iedereen groeit eroverheen", "Ja, vaardigheden en strategieën kunnen wel verbeteren", "Alleen als iemand als kind niet heeft gelezen"], answer: 1, explanation: "Dyslexie kan blijven bestaan op volwassen leeftijd. Leren en ondersteuning kunnen vaardigheden verbeteren en taken makkelijker maken." },
      { question: "Bewijst b en d verwisselen op zichzelf dat iemand dyslexie heeft?", options: ["Ja, dat is genoeg voor een diagnose", "Nee, op zichzelf bewijst het geen dyslexie", "Ja, maar alleen bij volwassenen"], answer: 1, explanation: "Letters verwisselen kan verschillende oorzaken hebben en is op zichzelf geen diagnose." },
      { question: "Krijgt iedereen met dyslexie angst of weinig zelfvertrouwen?", options: ["Ja, dat gebeurt altijd", "Nee. Sommige mensen ervaren dit, maar het is niet onvermijdelijk", "Alleen mensen die hardop lezen"], answer: 1, explanation: "Sommige mensen ervaren stress of minder zelfvertrouwen, maar dit hoeft niet. Een begripvolle omgeving kan helpen." },
      { question: "Wie kan beoordelen of iemand dyslexie heeft?", options: ["Een online quiz", "Een deskundige die lezen en spellen onderzoekt", "Een enkele oogmeting"], answer: 1, explanation: "Een goede beoordeling kijkt naar lees- en spellingvaardigheden en wordt uitgevoerd door een gekwalificeerde deskundige. Deze quiz kan geen dyslexie vaststellen." }
    ],
    experienceLabel: "JOUW ERVARING", contactTitle: "Deel wat jij nodig hebt", contactIntro: "Veel onderdelen van deze pagina zijn aanpasbaar. Laat je familie en vrienden de pagina zien en vertel hoe jij lezen ervaart. Mist er iets in de instellingen of heb je een idee voor een effect? Laat het me weten; ik kijk wat ik kan toevoegen zodat je jouw ervaring met hen kunt delen.", feedbackPrompt: "Heb je een suggestie? Deel die in", discordLink: "de Discord-server", orPostIt: "of plaats die bij", issuesLink: "de GitHub-repo-issues", contactNote: "Deze pagina kan niet precies laten zien hoe dyslexie voor iedereen voelt. Jouw eigen verhaal blijft het belangrijkst.",
    settingsTitle: "Leesinstellingen", settingsSubtitle: "Kies wat voor jou prettig voelt.", presetLabel: "Begin met een startpunt", presetMaker: "Hoe de maker het ervaart", presetCustom: "Mijn instellingen", presetCalm: "Rustig", presetEasy: "Makkelijk lezen", presetSpacious: "Extra ruimte", presetContrast: "Meer contrast", presetHelp: "Dit zijn startpunten, geen vaste profielen of diagnoses.",
    saveOwnProfile: "Eigen profiel bewaren", savedProfiles: "Bewaarde profielen", chooseProfile: "Kies een profiel", save: "Opslaan", load: "Laden", delete: "Verwijderen", profileNamePlaceholder: "Naam van profiel", customTitlePlaceholder: "Hoi, ik ben Dinand",
    categoryTypography: "Tekstopmaak", fontLabel: "Lettertype", fontSimple: "Eenvoudig (sans-serif)", fontSizeLabel: "Tekstgrootte", lineHeightLabel: "Regelafstand", letterSpacingLabel: "Ruimte tussen letters", wordSpacingLabel: "Ruimte tussen woorden", paragraphSpacingLabel: "Ruimte tussen alinea's", textWidthLabel: "Tekstbreedte", themeLabel: "Kleurthema", themeLight: "Zacht licht", themeCream: "Warm crème", themeDark: "Donker", themeContrast: "Hoog contrast",
    categoryEffects: "Letter-effecten", shuffleLabel: "Letters van plek wisselen", shuffleToggle: "Verspringen aan", confusionLabel: "Letters verwarren", confusionToggle: "Letterverwarring aan", motionLabel: "Letters laten zweven", motionToggle: "Zweven aan", shuffleIntervalLabel: "Tijd tussen letterwissels", shuffleDurationLabel: "Duur van verplaatsen", pauseEffects: "Beweging en waas pauzeren",
    categoryHaze: "Leeswaas", hazeStrengthLabel: "Sterkte van de leeswaas", hazeToggle: "Leeswaas aan", hazeModeLabel: "Wanneer de waas verschijnt", hazeIntermittent: "Af en toe", hazeConstant: "Continu", hazeIntervalType: "Intervaltype", intervalFixed: "Vast interval", intervalRandom: "Willekeurig tussen 7 en 10 sec", hazeIntervalLabel: "Tijd tussen waasmomenten", hazeDurationLabel: "Hoe lang de waas blijft",
    categoryRuler: "Leesliniaal", rulerToggle: "Liniaal volgen", rulerHelp: "De liniaal volgt je aanwijzer over de leestekst en dimt de regels eromheen.", categoryCustomStory: "Eigen verhaal", customTitleLabel: "Titel", customTextLabel: "Leestekst", customTextPlaceholder: "Laat leeg om het standaardverhaal te gebruiken.", applyText: "Tekst toepassen", defaultStory: "Standaardverhaal", resetSettings: "Herstel instellingen", saveStatus: "Instellingen worden bewaard op dit apparaat.", footer: "Je instellingen blijven op dit apparaat. Deze pagina stelt geen diagnose en vervangt geen professioneel advies.", pauseHaze: "Pauzeer waas",
    savedLocally: "Instellingen bewaard op dit apparaat.", saveFailed: "Opslaan is niet gelukt; je instellingen gelden alleen zolang deze pagina open is.", storageUnavailable: "Opslag is niet beschikbaar; instellingen gelden alleen zolang deze pagina open is.", readSettingsFailed: "Bewaarde instellingen konden niet worden gelezen; de standaardinstellingen worden gebruikt.", profilesSaved: "Profielen bewaard op dit apparaat.", profileSaveFailed: "Profielen opslaan is niet gelukt; controleer de beschikbare browseropslag.", enterProfileName: "Vul eerst een naam in voor dit profiel.", maxProfiles: "Je kunt maximaal 30 profielen bewaren.", profileApplied: "Profiel ‘{name}’ toegepast.", normalStatus: "De tekst staat weer normaal. Je kunt bovenaan opnieuw beginnen.", hazeIntervalRandomValue: "7–10 sec (willekeurig)", off: "Uit", seconds: "sec", resumeEffects: "Effecten hervatten"
  }
};

let currentLanguage = "en";

function translate(key, values = {}) {
  const template = translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
  return template.replace(/\{(\w+)\}/gu, (_, name) => values[name] ?? "");
}

const defaultSettings = {
  language: "en",
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
  language: document.querySelector("#language-select"),
  languageMenuToggle: document.querySelector("#language-menu-toggle"),
  languageMenu: document.querySelector("#language-menu"),
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
  quizProgress: document.querySelector("#quiz-progress"),
  quizForm: document.querySelector("#quiz-form"),
  quizQuestion: document.querySelector("#quiz-question"),
  quizOptions: document.querySelector("#quiz-options"),
  quizSubmit: document.querySelector("#quiz-submit"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  quizNext: document.querySelector("#quiz-next"),
  quizResult: document.querySelector("#quiz-result"),
  quizRestart: document.querySelector("#quiz-restart"),
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
    output.saveStatus.textContent = translate("storageUnavailable");
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
      language: ["en", "de", "nl"].includes(parsed.language) ? parsed.language : defaultSettings.language,
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
    output.saveStatus.textContent = translate("readSettingsFailed");
    return { ...defaultSettings };
  }
}

function clamp(value, min, max, fallback) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? Math.min(max, Math.max(min, numericValue)) : fallback;
}

function normalizeProfileSettings(profileSettings) {
  const normalized = { ...defaultSettings, ...profileSettings };
  normalized.language = ["en", "de", "nl"].includes(normalized.language) ? normalized.language : defaultSettings.language;
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
  controls.savedProfiles.replaceChildren(new Option(translate("chooseProfile"), ""));
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
    output.profileStatus.textContent = translate("profilesSaved");
    return true;
  } catch (error) {
    console.error("Profielen konden niet worden bewaard.", error);
    output.profileStatus.textContent = translate("profileSaveFailed");
    return false;
  }
}

let settings = readSettings();
let effectTimer = null;
let hazeTimer = null;
const quizState = { index: 0, score: 0, answered: false };
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function renderQuizQuestion() {
  const questions = translations[currentLanguage].quizQuestions;
  const question = questions[quizState.index];
  quizState.answered = false;
  output.quizProgress.textContent = translate("quizQuestionCount", {
    current: quizState.index + 1,
    total: questions.length
  });
  output.quizQuestion.textContent = question.question;
  output.quizOptions.replaceChildren();

  question.options.forEach((optionText, optionIndex) => {
    const label = document.createElement("label");
    label.className = "quiz-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-answer";
    input.value = String(optionIndex);
    input.id = `quiz-answer-${quizState.index}-${optionIndex}`;
    const text = document.createElement("span");
    text.textContent = optionText;
    label.append(input, text);
    output.quizOptions.append(label);
  });

  output.quizFeedback.hidden = true;
  output.quizFeedback.textContent = "";
  output.quizFeedback.className = "quiz-feedback";
  output.quizSubmit.hidden = false;
  output.quizNext.hidden = true;
  output.quizResult.hidden = true;
  output.quizRestart.hidden = true;
  output.quizForm.hidden = false;
}

function completeQuiz() {
  const total = translations[currentLanguage].quizQuestions.length;
  output.quizProgress.textContent = translate("quizComplete");
  output.quizForm.hidden = true;
  output.quizFeedback.hidden = true;
  output.quizResult.replaceChildren();
  const score = document.createElement("strong");
  score.className = "quiz-score";
  score.textContent = translate("quizScore", { score: quizState.score, total });
  const note = document.createElement("p");
  note.textContent = translate(quizState.score === total ? "quizGoodScore" : "quizKeepLearning");
  output.quizResult.append(score, note);
  output.quizResult.hidden = false;
  output.quizRestart.hidden = false;
}

function applySettings() {
  currentLanguage = settings.language;
  controls.language.value = settings.language;
  const languageNames = { en: "English", de: "Deutsch", nl: "Nederlands" };
  document.querySelector("#language-code").textContent = settings.language.toUpperCase();
  document.querySelector("#language-name").textContent = languageNames[settings.language];
  document.querySelectorAll(".language-option").forEach((option) => {
    const selected = option.dataset.language === settings.language;
    option.setAttribute("aria-selected", String(selected));
    option.tabIndex = selected ? 0 : -1;
  });
  document.documentElement.lang = settings.language;
  document.title = translate("pageTitle");
  renderSavedProfiles();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = translate(element.dataset.i18nTitle);
  });
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
  output.readingTitle.textContent = settings.customTitle.trim() || translate("storyTitle");
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
  output.scramble.value = !settings.shuffleEnabled || settings.scramble === 0 ? translate("off") : `${settings.scramble}%`;
  output.confusion.value = !settings.confusionEnabled || settings.confusion === 0 ? translate("off") : `${settings.confusion}%`;
  output.motion.value = !settings.motionEnabled || settings.motion === 0 ? translate("off") : `${settings.motion}%`;
  output.shuffleInterval.value = `${settings.shuffleInterval} ${translate("seconds")}`;
  output.shuffleDuration.value = `${settings.shuffleDuration.toFixed(1).replace(".", currentLanguage === "en" ? "." : ",")} ${translate("seconds")}`;
  output.haze.value = !settings.hazeEnabled || settings.haze === 0 ? translate("off") : `${settings.haze}%`;
  output.hazeInterval.value = settings.hazeIntervalMode === "random"
    ? translate("hazeIntervalRandomValue")
    : `${settings.hazeInterval} ${translate("seconds")}`;
  output.hazeDuration.value = `${settings.hazeDuration} ${translate("seconds")}`;
  output.pauseHaze.setAttribute("aria-pressed", String(settings.motionPaused));
  output.pauseHaze.textContent = translate(settings.motionPaused ? "resumeEffects" : "pauseHaze");
  output.normalReading.setAttribute("aria-pressed", String(settings.normalReading));
  output.normalReading.textContent = translate(settings.normalReading ? "enableEffects" : "normalRead");
  output.normalReadingStatus.textContent = settings.normalReading ? translate("normalActive") : "";
  output.saveStatus.textContent = translate("savedLocally");
  output.focusModeToggle.setAttribute("aria-pressed", String(settings.focusMode));
  output.focusModeToggle.textContent = translate(settings.focusMode ? "exitFocus" : "focusMode");
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
  const source = settings.customText.trim() || storiesByLanguage[settings.language];
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
    output.saveStatus.textContent = translate("savedLocally");
  } catch (error) {
    console.error("De leesinstellingen konden niet worden bewaard.", error);
    output.saveStatus.textContent = translate("saveFailed");
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
controls.language.addEventListener("change", () => {
  settings.language = controls.language.value;
  applySettings();
  saveSettings();
  quizState.index = 0;
  quizState.score = 0;
  renderQuizQuestion();
});
controls.languageMenuToggle.addEventListener("click", () => {
  const opening = controls.languageMenu.hidden;
  controls.languageMenu.hidden = !opening;
  controls.languageMenuToggle.setAttribute("aria-expanded", String(opening));
  if (opening) {
    controls.languageMenu.querySelector(`[data-language="${settings.language}"]`)?.focus();
  }
});
controls.languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-language]");
  if (!option) return;
  controls.language.value = option.dataset.language;
  controls.language.dispatchEvent(new Event("change", { bubbles: true }));
  controls.languageMenu.hidden = true;
  controls.languageMenuToggle.setAttribute("aria-expanded", "false");
  controls.languageMenuToggle.focus();
});
controls.languageMenu.addEventListener("keydown", (event) => {
  const options = [...controls.languageMenu.querySelectorAll("[data-language]")];
  const currentIndex = options.indexOf(document.activeElement);
  let nextIndex = currentIndex;
  if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % options.length;
  else if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + options.length) % options.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = options.length - 1;
  else if (event.key === "Escape") {
    controls.languageMenu.hidden = true;
    controls.languageMenuToggle.setAttribute("aria-expanded", "false");
    controls.languageMenuToggle.focus();
    event.preventDefault();
    return;
  } else if (event.key === "Enter" || event.key === " ") {
    document.activeElement.click();
    event.preventDefault();
    return;
  } else {
    return;
  }
  event.preventDefault();
  options[nextIndex].focus();
});
controls.languageMenuToggle.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  event.preventDefault();
  controls.languageMenu.hidden = false;
  controls.languageMenuToggle.setAttribute("aria-expanded", "true");
  controls.languageMenu.querySelector(`[data-language="${settings.language}"]`)?.focus();
});
document.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".language-control")) return;
  controls.languageMenu.hidden = true;
  controls.languageMenuToggle.setAttribute("aria-expanded", "false");
});
controls.savedProfiles.addEventListener("change", renderSavedProfiles);
output.saveProfile.addEventListener("click", () => {
  const name = controls.savedProfileName.value.trim();
  if (!name) {
    output.profileStatus.textContent = translate("enterProfileName");
    controls.savedProfileName.focus();
    return;
  }
  if (savedProfiles.length >= 30) {
    output.profileStatus.textContent = translate("maxProfiles");
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
  output.profileStatus.textContent = translate("profileApplied", { name: profile.name });
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
  output.normalReadingStatus.textContent = settings.normalReading ? translate("normalStatus") : "";
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

output.quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (quizState.answered) return;
  const selected = output.quizForm.querySelector('input[name="quiz-answer"]:checked');
  if (!selected) {
    output.quizFeedback.textContent = translate("quizChooseAnswer");
    output.quizFeedback.className = "quiz-feedback is-error";
    output.quizFeedback.hidden = false;
    return;
  }

  const question = translations[currentLanguage].quizQuestions[quizState.index];
  const selectedIndex = Number(selected.value);
  const correct = selectedIndex === question.answer;
  quizState.answered = true;
  if (correct) quizState.score += 1;

  output.quizOptions.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
    const label = input.closest(".quiz-option");
    if (Number(input.value) === question.answer) label.classList.add("is-correct");
    if (input === selected && !correct) label.classList.add("is-incorrect");
  });

  output.quizFeedback.replaceChildren();
  const result = document.createElement("strong");
  result.textContent = translate(correct ? "quizCorrect" : "quizIncorrect");
  const explanation = document.createElement("p");
  explanation.textContent = question.explanation;
  output.quizFeedback.append(result, explanation);
  output.quizFeedback.className = `quiz-feedback ${correct ? "is-correct" : "is-incorrect"}`;
  output.quizFeedback.hidden = false;
  output.quizSubmit.hidden = true;
  output.quizNext.hidden = false;
  output.quizNext.focus();
});

output.quizNext.addEventListener("click", () => {
  if (quizState.index + 1 >= translations[currentLanguage].quizQuestions.length) {
    completeQuiz();
    output.quizRestart.focus();
    return;
  }
  quizState.index += 1;
  renderQuizQuestion();
  output.quizQuestion.focus();
});

output.quizRestart.addEventListener("click", () => {
  quizState.index = 0;
  quizState.score = 0;
  renderQuizQuestion();
  output.quizQuestion.focus();
});

renderSavedProfiles();
applySettings();
renderQuizQuestion();