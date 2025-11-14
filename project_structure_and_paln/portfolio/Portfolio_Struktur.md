# 1. Struktur & innehåll för portfolio

Jag utgår från att ni vill kunna visa:
* Titel på projektet
* Kort beskrivning
* Typ (webbapp, mobilapp, system…)
* Tech stack
* År
* Länk (om publikt)

För sidan föreslår jag:

1. **Intro överst**
    * Kort text om att det är en mix av kundprojekt & demoprojekt/MVP:er
2. **Grid med projektkort**
    * Varje kort: titel, typ, kort text, tech-taggar
3. **Möjlighet att markera vissa som “highlight”**
    * T.ex. första 1–2 som sticker ut
4. **Senare kan ni lägga till:**
    * Filter per kategori (Alla · Webb · App · System)

---

## Exempelprojekt att börja med (ni kan byta namn sen)

1. **Bokningsportal för tjänsteföretag**
   Webbapp för bokning, kundhantering och adminpanel.
   Stack: `React`, `Next.js`, `Spring Boot`, `PostgreSQL`, `Tailwind`, `Docker`
2. **KPI-dashboard för intern uppföljning**
   Dashboard med realtidsdata, grafer och rollbaserad inloggning.
   Stack: `React`, `TypeScript`, `REST/GraphQL`, `PostgreSQL`
3. **Community-app för medlemmar**
   Mobilapp för nyheter, pushnotiser, medlemsprofil och inloggning.
   Stack: `Flutter` eller `React Native`, `API-backend`, `JWT`
4. **Portfoliosida för kreatör**
   Enkel men snygg personlig webbplats med projektgalleri och kontakt.
   Stack: `Next.js`, `Tailwind`

---

> 💡 **När ni senare har riktiga projekt:**
> * Uppdatera `projects-arrayen` med riktiga titlar, år, beskrivningar och stack
> * Lägg in riktiga screenshots i stället för gradient-placeholder

> **Vill ni sen gå ännu djupare kan vi göra:**
> * Dynamiska projektsidor `/portfolio/[slug]` med mer info, bilder, problem–lösning–resultat-struktur.