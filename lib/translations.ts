export type Lang = 'en' | 'cs'

export type Translations = {
  nav: {
    links: string[]
    cta: string
  }
  hero: {
    eyebrow: string
    line1: string
    accent: string
    suffix: string
    body: string
    cta1: string
    cta2: string
  }
  proof: {
    stats: { number: string; unit?: string; label: string }[]
  }
  problem: {
    prefix: string
    accent: string
    items: { title: string; body: string }[]
  }
  products: {
    eyebrow: string
    headline1: string
    headline2: string
    items: { name: string; tag: string; description: string; oneliner: string }[]
  }
  howItWorks: {
    headline: string
    steps: { number: string; title: string; body: string }[]
  }
  results: {
    line1: string
    accent: string
    items: { sector: string; metric: string; label: string; description: string }[]
  }
  cta: {
    line1: string
    accent: string
    body: string
    button: string
    sub: string
  }
  footer: {
    links: string[]
    copy: string
  }
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      links: ['PRODUCTS', 'WORK', 'ABOUT'],
      cta: 'BOOK A CALL →',
    },
    hero: {
      eyebrow: 'AI AUTOMATION AGENCY — PRAGUE',
      line1: 'AI AGENTS THAT',
      accent: 'ACTUALLY',
      suffix: ' WORK.',
      body: 'We automate the work your team hates doing. No long onboarding. No vague deliverables. Results in 30 days.',
      cta1: 'BOOK A FREE AUDIT →',
      cta2: 'SEE RESULTS',
    },
    proof: {
      stats: [
        { number: '30', unit: 'DAYS', label: 'TO FIRST RESULTS' },
        { number: '100%', label: 'PROCESSES AUTOMATED' },
        { number: '0', label: 'FLUFF INCLUDED' },
        { number: '5+', label: 'INDUSTRIES SERVED' },
      ],
    },
    problem: {
      prefix: 'YOUR TEAM IS',
      accent: 'WASTING TIME.',
      items: [
        { title: 'MANUAL WORK', body: 'Processes that should take 5 minutes. Every. Single. Day. Your team deserves better.' },
        { title: 'LOST HOURS', body: 'Reporting that eats entire afternoons. Email chains nobody reads. Decisions delayed.' },
        { title: 'BROKEN TOOLS', body: "Systems that don't talk to each other. Data copied by hand. Errors that cost you clients." },
        { title: 'SLOW GROWTH', body: "You're growing, but your ops aren't. Hiring more people to do what machines should do." },
      ],
    },
    products: {
      eyebrow: 'PRODUCT LINE',
      headline1: 'FIVE PRODUCTS.',
      headline2: 'ONE MISSION.',
      items: [
        { name: 'SHARPEST EDGE', tag: 'Entry', description: "AI audit — we map where you're losing time and money.", oneliner: "Find where you're bleeding." },
        { name: 'SHARPEST CUT', tag: 'Implementation', description: 'First AI agent deployed — one process, immediate results.', oneliner: 'One cut. Immediate results.' },
        { name: 'SHARPEST CORE', tag: 'Main product', description: 'Full automation of key business processes — monthly retainer.', oneliner: 'The engine of your operations.' },
        { name: 'SHARPEST STACK', tag: 'Enterprise', description: 'Complete AI workforce — entire back-office automated.', oneliner: 'Your entire back-office. Automated.' },
        { name: 'SHARPEST LOOP', tag: 'Ongoing', description: 'Continuous optimisation — we never stop improving.', oneliner: 'We never stop sharpening.' },
      ],
    },
    howItWorks: {
      headline: 'HOW IT WORKS.',
      steps: [
        { number: '01', title: 'AUDIT', body: '30-min call. We identify the exact process to automate first. No homework for you. Just answers.' },
        { number: '02', title: 'BUILD', body: 'We build your first agent in 2 weeks. No vague roadmaps. No surprises. You see progress daily.' },
        { number: '03', title: 'DEPLOY', body: 'Live in 30 days. You see results before month 2 begins. Then we optimise. Then we do it again.' },
      ],
    },
    results: {
      line1: 'RESULTS.',
      accent: 'NOT PROMISES.',
      items: [
        { sector: 'LEGAL SERVICES', metric: '14H', label: 'SAVED PER WEEK', description: 'Automated contract review pipeline. 0 paralegals needed for routine documents.' },
        { sector: 'E-COMMERCE', metric: '3×', label: 'FASTER ORDER PROCESSING', description: 'Full order-to-fulfilment automation. Customer service load cut by 60%.' },
        { sector: 'CONSULTING FIRM', metric: '€40K', label: 'SAVED IN YEAR ONE', description: 'Replaced 3 manual reporting processes. One agent. Runs every night.' },
      ],
    },
    cta: {
      line1: 'READY TO STOP',
      accent: 'WASTING TIME?',
      body: "One call. 30 minutes. We tell you exactly what we'd automate and what it would cost you not to.",
      button: 'BOOK A FREE AUDIT →',
      sub: 'No commitment. No sales pitch. Just the answer.',
    },
    footer: {
      links: ['PRODUCTS', 'ABOUT', 'CONTACT'],
      copy: 'sharpest.agency — © 2026 — No fluff. Just results.',
    },
  },

  cs: {
    nav: {
      links: ['PRODUKTY', 'PRÁCE', 'O NÁS'],
      cta: 'DOMLUVIT SCHŮZKU →',
    },
    hero: {
      eyebrow: 'AGENTURA PRO AI AUTOMATIZACI — PRAHA',
      line1: 'AI AGENTI, KTEŘÍ',
      accent: 'SKUTEČNĚ',
      suffix: ' FUNGUJÍ.',
      body: 'Automatizujeme práci, kterou váš tým nesnáší dělat. Žádné zdlouhavé onboardingy. Žádné mlhavé výstupy. Výsledky za 30 dní.',
      cta1: 'REZERVOVAT BEZPLATNÝ AUDIT →',
      cta2: 'ZOBRAZIT VÝSLEDKY',
    },
    proof: {
      stats: [
        { number: '30', unit: 'DNÍ', label: 'DO PRVNÍCH VÝSLEDKŮ' },
        { number: '100%', label: 'PROCESŮ AUTOMATIZOVÁNO' },
        { number: '0', label: 'ZBYTEČNOSTÍ' },
        { number: '5+', label: 'OBSLOUŽENÝCH ODVĚTVÍ' },
      ],
    },
    problem: {
      prefix: 'VÁŠ TÝM',
      accent: 'ZTRÁCÍ ČAS.',
      items: [
        { title: 'RUČNÍ PRÁCE', body: 'Procesy, které by měly trvat 5 minut. Každý. Jediný. Den. Váš tým si zaslouží víc.' },
        { title: 'ZTRACENÉ HODINY', body: 'Reporty, které spolykají celá odpoledne. E-mailové řetězce, které nikdo nečte. Rozhodnutí odkládána.' },
        { title: 'NEFUNKČNÍ NÁSTROJE', body: 'Systémy, které spolu nekomunikují. Data kopírovaná ručně. Chyby, které vás stojí klienty.' },
        { title: 'POMALÝ RŮST', body: 'Rostete, ale vaše operativa ne. Najímáte lidi na práci, kterou měly dělat stroje.' },
      ],
    },
    products: {
      eyebrow: 'PRODUKTOVÁ ŘADA',
      headline1: 'PĚT PRODUKTŮ.',
      headline2: 'JEDNA MISE.',
      items: [
        { name: 'SHARPEST EDGE', tag: 'Vstupní', description: 'AI audit — zmapujeme, kde ztrácíte čas a peníze.', oneliner: 'Najděte, kde krvácíte.' },
        { name: 'SHARPEST CUT', tag: 'Implementace', description: 'První nasazený AI agent — jeden proces, okamžité výsledky.', oneliner: 'Jeden řez. Okamžité výsledky.' },
        { name: 'SHARPEST CORE', tag: 'Hlavní produkt', description: 'Plná automatizace klíčových obchodních procesů — měsíční retainer.', oneliner: 'Motor vašich operací.' },
        { name: 'SHARPEST STACK', tag: 'Enterprise', description: 'Kompletní AI pracovní síla — celý back-office automatizován.', oneliner: 'Celý váš back-office. Automatizovaný.' },
        { name: 'SHARPEST LOOP', tag: 'Průběžný', description: 'Kontinuální optimalizace — nikdy nepřestáváme zlepšovat.', oneliner: 'Nikdy nepřestáváme ostřit.' },
      ],
    },
    howItWorks: {
      headline: 'JAK TO FUNGUJE.',
      steps: [
        { number: '01', title: 'AUDIT', body: '30minutový hovor. Identifikujeme přesný proces k automatizaci jako první. Žádná příprava z vaší strany. Jen odpovědi.' },
        { number: '02', title: 'VÝVOJ', body: 'Prvního agenta postavíme za 2 týdny. Žádné mlhavé roadmapy. Žádná překvapení. Pokrok vidíte každý den.' },
        { number: '03', title: 'NASAZENÍ', body: 'Ostrý provoz za 30 dní. Výsledky uvidíte před začátkem druhého měsíce. Pak optimalizujeme. A pak to uděláme znovu.' },
      ],
    },
    results: {
      line1: 'VÝSLEDKY.',
      accent: 'NE SLIBY.',
      items: [
        { sector: 'PRÁVNÍ SLUŽBY', metric: '14H', label: 'UŠETŘENO TÝDNĚ', description: 'Automatizovaný proces přezkumu smluv. 0 paralegálů potřebných pro rutinní dokumenty.' },
        { sector: 'E-COMMERCE', metric: '3×', label: 'RYCHLEJŠÍ ZPRACOVÁNÍ OBJEDNÁVEK', description: 'Plná automatizace od objednávky po expedici. Zátěž zákaznického servisu snížena o 60 %.' },
        { sector: 'KONZULTAČNÍ FIRMA', metric: '€40K', label: 'UŠETŘENO V PRVNÍM ROCE', description: 'Nahrazeny 3 ruční reportingové procesy. Jeden agent. Běží každou noc.' },
      ],
    },
    cta: {
      line1: 'PŘIPRAVENI PŘESTAT',
      accent: 'ZTRÁCET ČAS?',
      body: 'Jeden hovor. 30 minut. Řekneme vám přesně, co bychom automatizovali a co vás stojí nečinnost.',
      button: 'REZERVOVAT BEZPLATNÝ AUDIT →',
      sub: 'Žádný závazek. Žádný sales pitch. Jen odpověď.',
    },
    footer: {
      links: ['PRODUKTY', 'O NÁS', 'KONTAKT'],
      copy: 'sharpest.agency — © 2026 — Žádná vata. Jen výsledky.',
    },
  },
}

export default translations
