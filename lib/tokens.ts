export const colors = {
  black:  '#0A0A0A',
  white:  '#F5F5F0',
  yellow: '#FFE500',
  gray:   '#C8C8C0',
  mid:    '#3A3A3A',
} as const

export const border = '2px solid #0A0A0A'

export const products = [
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
] as const
