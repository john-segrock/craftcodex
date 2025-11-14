# 1. Struktur för "Offert / boka möte"-sida

## Route:
`/offert`
(du kan länka dit från navbar/CTA, t.ex. **"Begär offert"**)

## Innehåll:

### Huvudidé:
En sida som är lite mer seriös och fokuserad än vanliga kontaktformuläret. Här visar ni att ni tar in projektförfrågningar och mötesbokningar.

### Sektioner:

#### 1. Intro
- Kort text om att detta är steget för att få offert eller boka ett möte.

#### 2. Formulär
**Fält:**

- **Vad vill du göra? (radio/select)**
    - Jag vill få en offert
    - Jag vill boka ett möte
- **Typ av projekt (select)**
    - Webbsida / webbapp
    - Mobilapp (iOS / Android)
    - Skräddarsytt system / integration
    - Annat / osäker
- **Budgetnivå (select, ej obligatorisk)**
    - < 20 000 kr
    - 20 000 – 50 000 kr
    - 50 000 – 100 000 kr
    - 100 000+ kr
    - Vet inte än
- **Tidsram (input eller select)**
    - Så snart som möjligt
    - Inom 1–3 månader
    - 3+ månader
- **Beskrivning av projektet (textarea)**
- **Kontaktuppgifter**
    - Namn
    - E-post
    - Företag / organisation (valfritt)
    - Telefon (valfritt men bra)

#### 3. Trygghetstext
- T.ex. "Du förbinder dig inte till något, vi återkommer med frågor eller förslag."

***

# Hur kopplar ni detta i resten av sidan?

- **I Navbar:** lägg till en länk:
  ```json
  { href: "/offert", label: "Offert" }
  ```
- **I hero/CTA-knappar:**
  - “Begär offert” → länka till /offert i stället för /#contact om ni vill
- Kontaktsektionen på startsidan kan då vara mer “allmän”, medan /offert är mer “nu kör vi på projekt”.