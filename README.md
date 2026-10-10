# Lees op jouw manier

Een statische website met Dinands verhaal en een leesweergave die je zelf kunt aanpassen. De site gebruikt alleen HTML, CSS en JavaScript: er zijn geen installatie, server of externe JavaScript-pakketten nodig.

## Lokaal openen

Open `index.html` in een browser. Voor wijzigingen kun je de pagina opnieuw laden.

## Wat kun je aanpassen?

- **Tekstopmaak:** lettertype, tekstgrootte, regelafstand, ruimte tussen letters en woorden, alinearuimte, tekstbreedte en kleurthema.
- **Letter-effecten:** letters binnen woorden laten wisselen, kleine b/d- en p/q-verwarring en letters rustig laten zweven. Elk effect heeft een eigen aan/uit-schakelaar en sterkte. Ook de tijd tussen wissels en de duur van de verplaatsing zijn instelbaar.
- **Leeswaas:** zet de waas uit, laat hem continu zien of af en toe verschijnen. Bij af en toe kun je de intervalinstelling en de duur aanpassen.
- **Leesliniaal:** schakel een regelband in die de aanwijzer volgt wanneer die over de leestekst beweegt.
- **Rustige leesstand:** verbergt tijdelijk de instellingen en achtergrondinformatie. Gebruik de knop om terug te keren of druk op `Escape`.
- **Eigen verhaal:** pas de titel en leestekst aan. Lege velden gebruiken het standaardverhaal.
- **Profielen:** begin met een startpunt, waaronder **Makkelijk lezen**, of bewaar, laad en verwijder zelf benoemde profielen.

De knop onder het verhaal wisselt tussen de normale weergave en de effectinstellingen die je daarvoor gebruikte. De pauzeknop stopt beweging en waas tijdelijk.

## Opslag en privacy

Instellingen, eigen verhaal en zelf opgeslagen profielen worden met `localStorage` opgeslagen in de browser op het huidige apparaat. Ze worden niet naar GitHub of een server gestuurd en synchroniseren niet automatisch met andere browsers of apparaten. De opslag kan verdwijnen wanneer de browsergegevens worden gewist. GitHub Pages kan de website statisch hosten; een backend is niet nodig.

## Publiceren met GitHub Pages

1. Zet `index.html`, `app.js`, `styles.css` en `README.md` in de hoofdmap van de repository.
2. Commit en push de wijzigingen naar GitHub.
3. Open in de repository **Settings → Pages**.
4. Kies bij de bron **Deploy from a branch**, selecteer de branch `main` en map `/(root)`, en sla op.
5. Open de URL die GitHub Pages daar toont. Een volgende push naar die branch werkt de gepubliceerde site bij.

## Feedback

Deel de pagina met familie en vrienden en vertel hoe jij lezen ervaart. Ideeën voor ontbrekende instellingen of effecten zijn welkom in de [Discord-server](https://discord.gg/Fw57dWnwY8) of via [GitHub Issues](https://github.com/wildnest135/mijn-dyslexie-site/issues). Ik kijk wat ik kan toevoegen zodat je jouw ervaring met hen kunt delen.

## Over de leeservaring

De website is een persoonlijk, educatief gespreksexperiment en geen diagnose of exacte simulatie van dyslexie. Ervaringen verschillen per persoon. Gebruik de effecten niet als maatstaf voor hoe dyslexie voor iemand voelt. Lees ook meer bij [Dyslexie Centraal](https://dyslexiecentraal.nl/) en de [NHS](https://www.nhs.uk/conditions/dyslexia-in-children/).
