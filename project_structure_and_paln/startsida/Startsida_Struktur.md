# Craftcodex Startsida - Struktur & Innehåll

## 1. Navbar / Header

**Syfte:** Göra det lätt att navigera + ge ett första intryck av professionalism.

**Innehåll:**
* **Logotyp / textlogga:** Craftcodex
* **Meny:**
    * Hem
    * Tjänster
    * Process / Så jobbar vi
    * Portfolio (eller “Projekt”)
    * Om oss
    * Kontakt
* **Call to Action-knapp:**
    * “Begär offert”
    * eller “Boka möte”

**Komponenter:**
* `<Navbar>` med:
    * Logo-komponent
    * Menylänkar
    * CTA-knapp
    * Hamburger-menyn för mobil

---

## 2. Hero-sektion (med plasma-animation)

**Syfte:** Direkt säga vad ni gör, för vem och varför man ska kontakta er.

**Innehåll:**
* **Kort huvudrubrik (H1), t.ex:**
  "Vi bygger moderna webb- & app-lösningar för företag som vill växa digitalt."
* **Kort underrad:**
  "Craftcodex hjälper startups, småföretag och privatpersoner att ta sina idéer från skiss till färdig produkt – webbsidor, appar och skräddarsydda system."
* **1–2 CTA-knappar:**
    * “Begär offert”
    * “Se våra tjänster”
* **Liten trygghetstext under knappar:**
  “Snabb återkoppling · Transparent prissättning · Skräddarsydd utveckling”

**Visuellt / komponenter:**
* Mörk bakgrund, t.ex. gradient.
* Plasma-liknande animation i bakgrunden (t.ex. fullskärmsdiv bakom texten).
* **Layout:**
    * Vänster: text och knappar.
    * Höger: illustration / “mockup” på skärm med en app/webb (kan vara enkel placeholder i början).
* **Komponenter:**
    * `<HeroSection>`
    * `<PrimaryButton>`, `<SecondaryButton>`
    * `<AnimatedBackground>` (plasma)

---

## 3. “Varför Craftcodex?” – värdeerbjudande

**Syfte:** Förklara snabbt vilka fördelar ni ger jämfört med “en random utvecklare”.

**Innehåll (3–4 punkter):**
* **Exempelrubrik:** “Varför välja Craftcodex?”
* **Varje punkt kan vara ett kort kort (card):**
    * “Helhetslösningar” – från idé, design, backend till hosting & support.
    * “Modern tech stack” – React, Next.js, Java, Spring, Flutter m.m.
    * “Personlig kontakt” – ni pratar direkt med utvecklarna, inga mellanhänder.
    * “Flexibel prissättning” – fast pris per projekt eller löpande timdebitering.

**Komponenter:**
* `<SectionTitle>`
* `<ValueCard>` lista (grid i 3–4 kolumner på desktop, 1–2 på mobil)

---

## 4. Tjänsteöversikt (kort version på startsidan)

Ni kommer ha en egen /tjänster-sida, men på startsidan ska det finnas en sammanfattning.

**Innehåll:**
* **Rubrik:** “Vad vi hjälper dig med”
* **Underkategorier, t.ex. 4 tjänste-kort:**
    1. **Webbsidor & webbappar**
       * Företagssidor, bokningssystem, dashboards, e-handel
    2. **Mobilappar (iOS & Android)**
       * Flutter / React Native, integrerad med befintliga system
    3. **Skräddarsydda system**
       * Interna verktyg, integrationer, automation, API:er
    4. **Hosting & support**
       * Drift, övervakning, säkerhet, löpande förbättringar
* **Komponenter:**
    * `<ServicePreviewSection>`
    * `<ServiceCard>` (ikon + titel + 2–3 rader text)
    * Länk/knapp: “Läs mer om våra tjänster”

---

## 5. Process / Så jobbar vi

**Syfte:** Skapa trygghet – många icke-tekniska kunder vill veta hur det går till.

**Innehåll:**
* **Rubrik:** “Så går det till”
* **4 enkla steg, t.ex:**
    1. **1. Första samtalet** – ni lyssnar på kundens idé och behov.
    2. **2. Förslag & offert** – ni tar fram lösning, tidplan och pris.
    3. **3. Utveckling & feedback** – ni bygger, kunden får se delresultat.
    4. **4. Lansering & support** – ni hjälper att driftsätta och stötta efteråt.

**Komponenter:**
* `<ProcessTimeline>` eller `<StepCard>` i horisontell layout (på desktop)
* Ikoner för varje steg

---

## 6. Portfolio / Projekt-teaser

**Innehåll:**
* **Rubrik:** “Projekt vi är stolta över”
* **För varje projekt:**
    * Namn / titel
    * Kort beskrivning (vad det löser)
    * Teknikstack (React, Spring, PostgreSQL, etc.)
    * Liten bild / mockup

**Komponenter:**
* `<ProjectCard>` (bild + text)
* `<ProjectsGrid>`
* Knapp: “Se fler projekt” (kan senare leda till `/portfolio`)

---

## 7. Teamet bakom Craftcodex (med era ansikten)

**Syfte:** Göra sidan personlig och skapa förtroende.

**Innehåll:**
* **Rubrik:** “Teamet bakom Craftcodex”
* **För varje person:**
    * Foto (cirkelformat eller rundade hörn)
    * Namn
    * Roll: t.ex. “Fullstack-utvecklare”
    * **Kort text (2–3 meningar):**
        * Vad du är bra på
        * Vad du brinner för (t.ex. problemlösning, UX, backendprestanda)
    * **Eventuellt länkar:**
        * LinkedIn
        * GitHub

**Komponenter:**
* `<TeamSection>`
* `<TeamMemberCard>`

---

## 8. Kundtyper / vem vi jobbar med (valfri men bra)

**Syfte:** Tydliggöra att ni jobbar med både startups, småföretag och privatpersoner.

**Innehåll:**
* **Rubrik:** “För vilka vi bygger lösningar”
* **3 kort:**
    * Startups – MVP, skalbara appar, snabba iterationer
    * Små & medelstora företag – webbplats, interna system
    * Privatpersoner & frilansare – personliga hemsidor, bokning, portfolior

**Komponenter:**
* `<CustomerTypeCard>` i grid

---

## 9. Starkt Call to Action / Kontaktteaser

**Syfte:** Avsluta sidan med något handlingsdrivande.

**Innehåll:**
* **Rubrik:**
  “Redo att ta nästa steg med din idé?”
* **Text:**
  “Berätta kort vad du vill bygga, så återkommer vi snabbt med ett förslag.”
* **Knappar:**
    * “Begär offert”
    * “Boka ett kostnadsfritt möte”

**Komponenter:**
* `<CallToActionSection>`
* Knappar som scrollar ner till kontaktformuläret eller öppnar mailto.

---

## 10. Footer

**Innehåll:**
* **Logga / namnet:** “Craftcodex”
* **Kort tagline:** “Modern mjukvaruutveckling för webb & mobil.”
* **Länkar:**
    * Hem
    * Tjänster
    * Om oss
    * Kontakt
* **E-postadress**
* **(Senare)** org.nr, ev. adress, sociala medier

**Komponenter:**
* `<Footer>`