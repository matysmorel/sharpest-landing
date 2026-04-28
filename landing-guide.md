# SHARPEST — Landing Page Guide
**Stack : Next.js / React · Version 1.0 · 2026**

> Règle d'or : une page = un message = une action. Quand tu doutes — demande-toi : *"Est-ce assez sharp ?"*

---

## Table des matières

1. [Système de design](#1-système-de-design)
2. [Bibliothèque de composants React](#2-bibliothèque-de-composants-react)
3. [Structure de la landing page](#3-structure-de-la-landing-page)
4. [Setup Next.js](#4-setup-nextjs)
5. [Voice & Copy Rules](#5-voice--copy-rules)
6. [Checklist pré-lancement](#6-checklist-pré-lancement)

---

## 1. Système de design

### 1.1 Couleurs

| Token | Hex | Usage |
|-------|-----|-------|
| `black` | `#0A0A0A` | Texte, bordures, fonds de sections, nav |
| `white` | `#F5F5F0` | Fond principal — plus chaud que le blanc pur |
| `yellow` | `#FFE500` | Accent unique par composition — CTAs, highlights |
| `gray` | `#C8C8C0` | Texte secondaire, séparateurs, éléments de support |
| `mid` | `#3A3A3A` | Corps de texte atténué, sous-titres |

**Règle du jaune :** un seul usage visible de jaune par "zone" visuelle (hero, section, card). Le jaune crie — s'il est partout, il ne crie plus.

**Couleurs interdites :** bleu, violet, orange, rouge. Pas de palettes multi-couleurs. Pas de thème "sombre bleuté" façon agency IA générique.

### 1.2 Typographie

| Rôle | Police | Usage |
|------|--------|-------|
| Display / Headlines | **Bebas Neue** | H1, H2, noms de produits, taglines, hero text. Toujours en majuscules. |
| Body / UI | **Instrument Sans** | Corps de texte, descriptions, navigation, contenu long |
| Labels / Code | **DM Mono** | Tags, métadonnées, eyebrows, numéros, captions, labels techniques |

**Hiérarchie typographique recommandée :**

```
Hero H1        → Bebas Neue  100–120px  letter-spacing: 4px
Section H2     → Bebas Neue  64–80px    letter-spacing: 3px
Card title     → Bebas Neue  32–40px    letter-spacing: 2px
Body large     → Instrument Sans  18px  line-height: 1.7
Body           → Instrument Sans  15–16px  line-height: 1.6
Label / Eyebrow → DM Mono  11–12px  uppercase  letter-spacing: 3px
Caption        → DM Mono  10–11px  uppercase  letter-spacing: 2px
```

### 1.3 Bordures & Espacement

```css
/* Règle unique de bordure — s'applique partout */
border: 2px solid #0A0A0A;

/* Jamais */
border-radius: anything;
box-shadow: anything;
background: linear-gradient(...);
```

**Espacements de référence :**

```
Section padding vertical  : 80–100px
Section padding horizontal: 60px (max-width 1200px, centré)
Composant padding         : 24–32px
Gap grille                : 0 (les bordures font le séparateur)
```

### 1.4 Grille

- Layout **une colonne** sur la homepage (contenu empilé verticalement)
- Grilles internes autorisées : 2 ou 3 colonnes maximum, bordures 2px comme séparateur
- Pas d'éléments flottants, pas de positionnement absolu décoratif
- Tout est aligné. Rien ne flotte.

### 1.5 Tokens Tailwind (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        white: '#F5F5F0',
        yellow: '#FFE500',
        gray: '#C8C8C0',
        mid: '#3A3A3A',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-instrument)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      borderWidth: {
        DEFAULT: '2px',
      },
    },
  },
}

export default config
```

---

## 2. Bibliothèque de composants React

### 2.1 `<Button>`

**Variantes :** `primary` (fond noir) · `ghost` (transparent) · `yellow` (fond jaune)

```tsx
// components/ui/Button.tsx
type ButtonProps = {
  variant?: 'primary' | 'ghost' | 'yellow'
  children: React.ReactNode
  href?: string
}

export function Button({ variant = 'primary', children, href }: ButtonProps) {
  const base = 'inline-block font-mono text-xs uppercase tracking-[3px] px-7 py-3.5 border-2 border-black'
  const variants = {
    primary: 'bg-black text-white',
    ghost:   'bg-transparent text-black',
    yellow:  'bg-yellow text-black',
  }
  const cls = `${base} ${variants[variant]}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
```

**Usage :**
```tsx
<Button variant="primary">BOOK A FREE AUDIT →</Button>
<Button variant="ghost">SEE RESULTS</Button>
<Button variant="yellow">BOOK A CALL →</Button>
```

**Règles :**
- Pas de `border-radius`
- Hover : `bg-mid` pour primary · `bg-black text-white` pour ghost — pas de `box-shadow`
- Jamais plus de 2 boutons côte à côte

---

### 2.2 `<MonoLabel>`

Eyebrows, tags, numéros de section, captions techniques.

```tsx
// components/ui/MonoLabel.tsx
type MonoLabelProps = {
  children: React.ReactNode
  color?: 'gray' | 'yellow' | 'white'
}

export function MonoLabel({ children, color = 'gray' }: MonoLabelProps) {
  const colors = {
    gray:   'text-mid',
    yellow: 'text-yellow',
    white:  'text-white',
  }
  return (
    <span className={`font-mono text-[11px] uppercase tracking-[3px] ${colors[color]}`}>
      {children}
    </span>
  )
}
```

**Usage :**
```tsx
<MonoLabel>AI AUTOMATION AGENCY — PRAGUE</MonoLabel>
<MonoLabel color="yellow">01 / AUDIT</MonoLabel>
```

---

### 2.3 `<SectionHeader>`

Header de section — fond noir, numéro jaune, titre Bebas.

```tsx
// components/ui/SectionHeader.tsx
type SectionHeaderProps = {
  number: string  // ex : "01"
  title: string
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="bg-black flex items-center gap-4 px-6 py-3 border-b-2 border-black">
      <span className="font-mono text-yellow text-[11px] tracking-[2px]">{number}</span>
      <span className="font-display text-white text-2xl tracking-[3px]">{title}</span>
    </div>
  )
}
```

---

### 2.4 `<ProductCard>`

```tsx
// components/ui/ProductCard.tsx
type ProductCardProps = {
  name: string       // ex : "SHARPEST EDGE"
  tag: string        // ex : "Entry"
  description: string
  oneliner: string
}

export function ProductCard({ name, tag, description, oneliner }: ProductCardProps) {
  return (
    <div className="border-2 border-black p-6">
      <div className="flex items-start justify-between mb-4">
        <span className="font-display text-3xl tracking-[2px]">{name}</span>
        <span className="font-mono text-[10px] bg-yellow border border-black px-2 py-0.5 uppercase tracking-[2px]">
          {tag}
        </span>
      </div>
      <p className="text-sm text-mid leading-relaxed mb-3">{description}</p>
      <p className="text-sm italic text-mid">"{oneliner}"</p>
    </div>
  )
}
```

---

### 2.5 `<StatBlock>`

Chiffre géant + label pour la bande de preuve.

```tsx
// components/ui/StatBlock.tsx
type StatBlockProps = {
  number: string  // ex : "30"
  unit?: string   // ex : "DAYS"
  label: string   // ex : "TO FIRST RESULTS"
}

export function StatBlock({ number, unit, label }: StatBlockProps) {
  return (
    <div className="p-8 border-r-2 border-black last:border-r-0 text-center">
      <div className="font-display text-7xl tracking-wider leading-none">
        {number}
        {unit && <span className="text-4xl ml-1">{unit}</span>}
      </div>
      <MonoLabel color="gray">{label}</MonoLabel>
    </div>
  )
}
```

---

## 3. Structure de la landing page

### Vue d'ensemble

```
┌─────────────────────────────────────────┐
│  01. NAVIGATION (sticky, fond noir)     │
├─────────────────────────────────────────┤
│  02. HERO                               │
├─────────────────────────────────────────┤
│  03. PROOF STRIP (chiffres clés)        │
├─────────────────────────────────────────┤
│  04. PROBLEM STATEMENT                  │
├─────────────────────────────────────────┤
│  05. PRODUITS (5 cartes)                │
├─────────────────────────────────────────┤
│  06. COMMENT ÇA MARCHE                  │
├─────────────────────────────────────────┤
│  07. RÉSULTATS                          │
├─────────────────────────────────────────┤
│  08. CTA FINAL (fond noir)              │
├─────────────────────────────────────────┤
│  09. FOOTER (fond noir)                 │
└─────────────────────────────────────────┘
```

---

### 3.1 Navigation

**Objectif :** présence de marque + accès rapide à la CTA principale.

```
┌────────────────────────────────────────────────────────────┐
│ [logo.jpeg]      PRODUCTS   WORK   ABOUT   [BOOK A CALL →] │  ← fond #0A0A0A, h-[60px]
└────────────────────────────────────────────────────────────┘
```

**Copy :**
- Liens : `PRODUCTS` · `WORK` · `ABOUT`
- CTA : `BOOK A CALL →` (couleur `#FFE500`, DM Mono)

**Règles :**
- `position: sticky; top: 0; z-index: 50`
- Hauteur fixe 60px — pas de mega-menu, pas de dropdown
- Logo : image `logo.jpeg` ou texte `SHARPEST` en Bebas Neue si image indisponible
- Bordure `border-b-2 border-black` non visible sur fond noir (peut être omise)
- Sur mobile : logo + burger → menu plein écran fond noir, liens en colonne

```tsx
// components/layout/Navbar.tsx
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-black h-[60px] flex items-center justify-between px-10">
      <img src="/logo.jpeg" alt="SHARPEST" className="h-8" />
      <div className="flex items-center gap-8">
        {['PRODUCTS', 'WORK', 'ABOUT'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`}
             className="font-mono text-gray text-xs tracking-widest hover:text-white transition-colors">
            {link}
          </a>
        ))}
        <Button variant="yellow" href="#contact">BOOK A CALL →</Button>
      </div>
    </nav>
  )
}
```

---

### 3.2 Hero

**Objectif :** billboard unique. Une phrase. Une action. Rien d'autre.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  AI AUTOMATION AGENCY — PRAGUE          ← DM Mono gris    │
│                                                            │
│  AI AGENTS THAT                         ← Bebas 100px     │
│  ████ACTUALLY████ WORK.                 ← "ACTUALLY" sur  │
│                                           fond jaune      │
│  We automate the work your team hates   ← Instrument Sans │
│  doing. No long onboarding. No vague    │
│  deliverables. Results in 30 days.      │
│                                         │
│  [BOOK A FREE AUDIT →]  [SEE RESULTS]  ← buttons         │
│                                                            │
└────────────────────────────────────────────────────────────┘
  fond : #F5F5F0 · padding : 100px 60px
```

**Copy prêt à l'emploi :**

```
Eyebrow  : AI AUTOMATION AGENCY — PRAGUE
H1       : AI AGENTS THAT ACTUALLY WORK.
Body     : We automate the work your team hates doing.
           No long onboarding. No vague deliverables.
           Results in 30 days.
CTA 1    : BOOK A FREE AUDIT →
CTA 2    : SEE RESULTS
```

**Règles :**
- Fond `#F5F5F0`, jamais d'image de fond
- H1 : mot(s) clés sur `background: #FFE500; padding: 0 8px` (inline)
- Sous-titre : max-width 480px, couleur `#3A3A3A`
- Les deux boutons côte à côte : primary + ghost
- Seule animation autorisée : `opacity: 0 → 1` au chargement (`animate-fade-in`)

```tsx
// app/sections/Hero.tsx
export function Hero() {
  return (
    <section className="bg-white px-16 py-24">
      <MonoLabel className="block mb-5">AI AUTOMATION AGENCY — PRAGUE</MonoLabel>
      <h1 className="font-display text-[100px] tracking-[4px] leading-none mb-6">
        AI AGENTS THAT<br />
        <span className="bg-yellow px-2">ACTUALLY</span> WORK.
      </h1>
      <p className="font-body text-[17px] text-mid leading-[1.7] max-w-[480px] mb-9">
        We automate the work your team hates doing. No long onboarding.
        No vague deliverables. Results in 30 days.
      </p>
      <div className="flex gap-3">
        <Button variant="primary">BOOK A FREE AUDIT →</Button>
        <Button variant="ghost">SEE RESULTS</Button>
      </div>
    </section>
  )
}
```

---

### 3.3 Proof Strip

**Objectif :** crédibilité immédiate via chiffres. Pas de mots — des faits.

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│     30       │    100%      │      0       │     5+       │
│    DAYS      │  AUTOMATED   │    FLUFF     │  INDUSTRIES  │
│ TO RESULTS   │  PROCESSES   │   INCLUDED   │   SERVED     │
└──────────────┴──────────────┴──────────────┴──────────────┘
  border-top: 2px  border-bottom: 2px  fond: #F5F5F0
```

**Contenu suggéré :**

| Chiffre | Label |
|---------|-------|
| `30 DAYS` | TO FIRST RESULTS |
| `100%` | PROCESSES AUTOMATED |
| `0` | FLUFF INCLUDED |
| `5+` | INDUSTRIES SERVED |

**Règles :** chiffres en Bebas Neue 72px, labels en DM Mono 11px, colonnes séparées par bordures verticales 2px.

---

### 3.4 Problem Statement

**Objectif :** faire résonner le problème du client avant de proposer la solution.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  YOUR TEAM IS ██WASTING TIME.██              ← H2 Bebas   │
│                                                            │
├─────────────────────────┬──────────────────────────────────┤
│  Manual processes that  │  Reporting that takes 2 days.   │
│  should take 5 minutes. │  Email chains nobody reads.     │
│  Every. Single. Day.    │  Tools that don't talk to each  │
│                         │  other.                         │
└─────────────────────────┴────────────────────────────────-─┘
  fond : #F5F5F0 · grid 2 colonnes avec border-right
```

**Copy prêt à l'emploi :**

```
H2      : YOUR TEAM IS WASTING TIME.
          ("WASTING TIME" sur fond jaune)
Col 1   : Manual processes that should take 5 minutes. Every. Single. Day.
Col 2   : Reporting that eats afternoons. Email chains nobody reads.
          Tools that don't talk to each other.
```

---

### 3.5 Produits

**Objectif :** montrer la gamme et guider vers le bon point d'entrée.

```
┌────────────────────────────────────────────────────────────┐
│  PRODUCT LINE                            ← DM Mono eyebrow │
│  FIVE PRODUCTS. ONE MISSION.             ← Bebas H2        │
├────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────┐  ┌──────────────────────┐ │
│ │ SHARPEST EDGE    [Entry]    │  │ SHARPEST CUT  [Impl] │ │
│ │ AI audit — map your waste   │  │ One agent, fast.     │ │
│ │ "Find where you're bleeding"│  │ "One cut. Results."  │ │
│ └─────────────────────────────┘  └──────────────────────┘ │
│ ┌─────────────────────────────┐  ...                       │
└────────────────────────────────────────────────────────────┘
```

**Données produits :**

```tsx
const products = [
  {
    name: 'SHARPEST EDGE',
    tag: 'Entry',
    description: 'AI audit — we map where you\'re losing time and money.',
    oneliner: 'Find where you\'re bleeding.',
  },
  {
    name: 'SHARPEST CUT',
    tag: 'Implementation',
    description: 'First AI agent deployed — one process, immediate results.',
    oneliner: 'One cut. Immediate results.',
  },
  {
    name: 'SHARPEST CORE',
    tag: 'Main product',
    description: 'Full automation of key business processes — monthly retainer.',
    oneliner: 'The engine of your operations.',
  },
  {
    name: 'SHARPEST STACK',
    tag: 'Enterprise',
    description: 'Complete AI workforce — entire back-office automated.',
    oneliner: 'Your entire back-office. Automated.',
  },
  {
    name: 'SHARPEST LOOP',
    tag: 'Ongoing',
    description: 'Continuous optimisation — we never stop improving.',
    oneliner: 'We never stop sharpening.',
  },
]
```

**Règles :** grid 2 colonnes (le 5e seul sur sa ligne ou centré). Pas d'icônes. Tag en jaune. Séparateurs via bordures.

---

### 3.6 Comment ça marche

**Objectif :** dédramatiser le processus, montrer la rapidité.

```
┌────────────────────────────────────────────────────────────┐
│  HOW IT WORKS.                           ← Bebas H2        │
├───────────────────┬────────────────────┬───────────────────┤
│  01               │  02                │  03               │
│  AUDIT            │  BUILD             │  DEPLOY           │
│                   │                    │                   │
│  30-min call. We  │  We build your     │  Live in 30 days. │
│  identify the     │  first agent in    │  You see results  │
│  exact process    │  2 weeks. No       │  before month 2.  │
│  to automate.     │  vague roadmaps.   │                   │
└───────────────────┴────────────────────┴───────────────────┘
  3 colonnes, bordures verticales 2px
```

**Copy prêt à l'emploi :**

```
Étape 01 — AUDIT
  "30-min call. We identify the exact process to automate first."

Étape 02 — BUILD
  "We build your first agent in 2 weeks. No vague roadmaps. No surprises."

Étape 03 — DEPLOY
  "Live in 30 days. You see results before month 2 begins."
```

---

### 3.7 Résultats

**Objectif :** preuves concrètes. Pas de promesses — des faits mesurables.

```
┌────────────────────────────────────────────────────────────┐
│  RESULTS. NOT PROMISES.                  ← Bebas H2        │
├──────────────────────────────────────────────────────────┬─┤
│  LEGAL SERVICES                          ← DM Mono sector │ │
│  14 HOURS                                ← Bebas 80px     │ │
│  SAVED PER WEEK                          ← DM Mono label  │ │
│  Automated contract review pipeline. 0 paralegals needed. │ │
├──────────────────────────────────────────────────────────┤ │
│  E-COMMERCE                                               │ │
│  3× FASTER                                                │ │
│  ORDER PROCESSING                                         │ │
│  ...                                                      │ │
└───────────────────────────────────────────────────────────┘
```

**Règles :**
- Pas de photos, pas de logos clients sans permission
- Chiffre en Bebas Neue 72–80px
- Secteur en DM Mono uppercase
- Description courte (1-2 phrases max) en Instrument Sans
- Si pas encore de case studies : utiliser des chiffres hypothétiques clairement présentés comme cibles

---

### 3.8 CTA Final

**Objectif :** dernière chance de conversion — simple, direct, sans friction.

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│      READY TO STOP WASTING TIME?         ← Bebas blanc    │
│                                                            │
│  One call. 30 minutes. We tell you exactly                 │
│  what we'd automate and how long it takes. ← Inst. Sans   │
│                                                            │
│              [BOOK A FREE AUDIT →]       ← btn jaune      │
│                                                            │
└────────────────────────────────────────────────────────────┘
  fond : #0A0A0A · padding : 100px 60px · texte centré
```

**Copy prêt à l'emploi :**

```
H2        : READY TO STOP WASTING TIME?
Body      : One call. 30 minutes. We tell you exactly what we'd automate
            and what it would cost you not to.
CTA       : BOOK A FREE AUDIT →
Sous-CTA  : No commitment. No sales pitch. Just the answer.
            (DM Mono gris, 11px)
```

---

### 3.9 Footer

```
┌────────────────────────────────────────────────────────────┐
│ [SHARPEST — jaune]         PRODUCTS  ABOUT  CONTACT       │  ← fond noir
├────────────────────────────────────────────────────────────┤
│ sharpest.agency — © 2026 — No fluff. Just results.        │  ← DM Mono gris
└────────────────────────────────────────────────────────────┘
```

**Règles :**
- Fond `#0A0A0A`
- Logo ou texte `SHARPEST` en `#FFE500` Bebas Neue
- Liens en DM Mono gris — pas de grid complexe
- Note légale en DM Mono 11px

---

## 4. Setup Next.js

### 4.1 Arborescence recommandée

```
sharpest/
├── app/
│   ├── layout.tsx          ← fonts + metadata + Navbar
│   ├── page.tsx            ← assemblage des sections
│   └── globals.css         ← reset + variables CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── Products.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   └── FinalCta.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── MonoLabel.tsx
│       ├── SectionHeader.tsx
│       ├── ProductCard.tsx
│       └── StatBlock.tsx
├── public/
│   └── logo.jpeg
├── lib/
│   └── tokens.ts           ← constantes de design (couleurs, etc.)
└── tailwind.config.ts
```

### 4.2 Fonts via `next/font` (`app/layout.tsx`)

```tsx
import { Bebas_Neue, Instrument_Sans, DM_Mono } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${instrumentSans.variable} ${dmMono.variable}`}>
      <body className="bg-white text-black font-body">{children}</body>
    </html>
  )
}
```

### 4.3 Metadata (`app/layout.tsx`)

```tsx
export const metadata = {
  title: 'SHARPEST — AI Agents That Actually Work.',
  description: 'We automate the work your team hates doing. No long onboarding. Results in 30 days.',
  openGraph: {
    title: 'SHARPEST — No Fluff. Just Results.',
    description: 'AI automation agency. Prague.',
    images: ['/og-image.png'],  // à créer : fond noir + logo jaune
  },
}
```

### 4.4 `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 0 !important;   /* aucune exception */
}

body {
  background: #F5F5F0;
  color: #0A0A0A;
  -webkit-font-smoothing: antialiased;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
}
```

### 4.5 `lib/tokens.ts`

```ts
export const colors = {
  black:  '#0A0A0A',
  white:  '#F5F5F0',
  yellow: '#FFE500',
  gray:   '#C8C8C0',
  mid:    '#3A3A3A',
} as const

export const border = '2px solid #0A0A0A'

export const fonts = {
  display: 'var(--font-bebas)',
  body:    'var(--font-instrument)',
  mono:    'var(--font-dm-mono)',
} as const
```

---

## 5. Voice & Copy Rules

### 5.1 DO / DON'T

| ✅ ON ÉCRIT COMME ÇA | ❌ JAMAIS ÇA |
|---------------------|-------------|
| "We automate the work you hate." | "We leverage cutting-edge AI solutions" |
| "Results in 30 days." | "Revolutionary AI-powered platform" |
| "Sharp. Fast. Done." | "Game-changing" / "World-class" |
| "Find where you're bleeding." | "Empowering businesses with..." |
| "No long onboarding." | "Best-in-class AI capabilities" |
| Phrases courtes. Rythme. | Paragraphes sans fin. |
| Voix active. | Voix passive. |

### 5.2 Mots interdits

```
revolutionary · leveraging · cutting-edge · game-changing
world-class · best-in-class · innovative · synergy
transformative · disruptive · holistic · seamless
```

### 5.3 Formules approuvées par section

**Hero**
- `AI AGENTS THAT ACTUALLY WORK.`
- `NO FLUFF. JUST RESULTS.`
- `SHARP. FAST. DONE.`

**CTAs**
- `BOOK A FREE AUDIT →`
- `BOOK A CALL →`
- `SEE RESULTS`
- `GET STARTED →`

**Produits**
- `Find where you're bleeding.`
- `One cut. Immediate results.`
- `The engine of your operations.`
- `Your entire back-office. Automated.`
- `We never stop sharpening.`

**Social proof**
- Chiffres concrets, pas de superlatifs
- Format : `[chiffre] [unité] / [LABEL]`

---

## 6. Checklist pré-lancement

### Design
- [ ] Zéro `border-radius` dans le CSS
- [ ] Zéro `box-shadow` dans le CSS
- [ ] Zéro `linear-gradient` ou `radial-gradient`
- [ ] Maximum 3 couleurs par section (black + white + yellow)
- [ ] Zéro image stock, zéro photo de personne avec ordinateur
- [ ] Zéro icône décoratif — typographie seule
- [ ] Bordures 2px solid #0A0A0A cohérentes partout
- [ ] Jaune utilisé une seule fois par zone visuelle

### Typographie
- [ ] Bebas Neue chargée et appliquée sur tous les H1/H2
- [ ] Instrument Sans sur le body
- [ ] DM Mono sur labels, tags, eyebrows, metadata
- [ ] Tout uppercase sur les headlines

### Copy
- [ ] Zéro mot de la liste noire (section 5.2)
- [ ] H1 hero présent et percutant
- [ ] CTA unique et clair sur chaque section majeure
- [ ] Sous-titres ≤ 2 phrases

### Performance
- [ ] Fonts préchargées via `next/font/google` (pas de `@import` dans CSS)
- [ ] Image logo optimisée (WebP si possible, sinon JPEG optimisé)
- [ ] Pas d'animations CSS complexes — `opacity` uniquement

### Accessibilité
- [ ] Contraste black/yellow : ✅ conforme WCAG AA
- [ ] Contraste gray (`#C8C8C0`) sur white (`#F5F5F0`) : ⚠️ à vérifier — préférer `#3A3A3A` pour le texte
- [ ] `alt` sur le logo
- [ ] Navigation clavier fonctionnelle

### Mobile (responsive)
- [ ] Nav : logo + bouton `BOOK A CALL` visible, reste en menu burger
- [ ] Hero : H1 réduit à 60–72px, padding réduit
- [ ] Grilles 2–3 colonnes → 1 colonne sur mobile
- [ ] Proof strip → scroll horizontal ou 2×2 grid
- [ ] Boutons : pleine largeur sur mobile

---

*SHARPEST — Landing Page Guide v1.0 — 2026*
*"When in doubt — ask: is this sharp enough?"*
