// Default questions and flashcard data.
// This file is replaced/extended by localStorage — edit via the UI.

const DEFAULT_QUESTIONS = [
  // ── Introduction & Motivation ───────────────────────────────────────────
  { id: 'q1',  category: 'Introduction & Motivation', difficulty: 'easy',   tags: ['overview'],           text: 'Can you summarize your dissertation in three minutes for a general audience?' },
  { id: 'q2',  category: 'Introduction & Motivation', difficulty: 'easy',   tags: ['motivation'],         text: 'Why did you choose this research topic? What motivated you?' },
  { id: 'q3',  category: 'Introduction & Motivation', difficulty: 'medium', tags: ['significance'],       text: 'What is the broader significance of your work? Who cares, and why should they?' },
  { id: 'q4',  category: 'Introduction & Motivation', difficulty: 'medium', tags: ['gap'],                text: 'What gap in the literature does your study address?' },
  { id: 'q5',  category: 'Introduction & Motivation', difficulty: 'hard',   tags: ['framing'],            text: 'How did you decide on your research questions, and what alternatives did you consider?' },

  // ── Literature Review ───────────────────────────────────────────────────
  { id: 'q6',  category: 'Literature Review',         difficulty: 'medium', tags: ['seminal'],            text: 'What are the most important prior works your research builds on?' },
  { id: 'q7',  category: 'Literature Review',         difficulty: 'medium', tags: ['comparison'],         text: 'How does your work differ from [key related study]?' },
  { id: 'q8',  category: 'Literature Review',         difficulty: 'hard',   tags: ['critical'],           text: 'What are the weaknesses of the existing literature that your work addresses?' },
  { id: 'q9',  category: 'Literature Review',         difficulty: 'easy',   tags: ['scope'],              text: 'Were there any important papers published after you completed your literature review?' },
  { id: 'q10', category: 'Literature Review',         difficulty: 'hard',   tags: ['theory'],             text: 'How does your theoretical framework relate to the dominant frameworks in your field?' },

  // ── Methodology ─────────────────────────────────────────────────────────
  { id: 'q11', category: 'Methodology',               difficulty: 'medium', tags: ['design'],             text: 'Walk us through your research design. Why this approach over alternatives?' },
  { id: 'q12', category: 'Methodology',               difficulty: 'hard',   tags: ['validity'],           text: 'How do you establish the internal and external validity of your study?' },
  { id: 'q13', category: 'Methodology',               difficulty: 'hard',   tags: ['reliability'],        text: 'How did you ensure reliability and replicability in your methods?' },
  { id: 'q14', category: 'Methodology',               difficulty: 'medium', tags: ['sample'],             text: 'How was your sample/dataset selected, and is it representative?' },
  { id: 'q15', category: 'Methodology',               difficulty: 'hard',   tags: ['assumptions'],        text: 'What key assumptions does your methodology rely on, and how did you test them?' },
  { id: 'q16', category: 'Methodology',               difficulty: 'medium', tags: ['ethics'],             text: 'What ethical considerations guided your research process?' },
  { id: 'q17', category: 'Methodology',               difficulty: 'hard',   tags: ['alternatives'],       text: 'Why did you not use [alternative method]? How would results differ?' },

  // ── Results & Analysis ──────────────────────────────────────────────────
  { id: 'q18', category: 'Results & Analysis',        difficulty: 'easy',   tags: ['findings'],           text: 'What are your most important findings?' },
  { id: 'q19', category: 'Results & Analysis',        difficulty: 'medium', tags: ['statistics'],         text: 'Walk me through the statistical/analytical approach you used to reach your conclusions.' },
  { id: 'q20', category: 'Results & Analysis',        difficulty: 'hard',   tags: ['unexpected'],         text: 'Were there any unexpected results? How did you interpret them?' },
  { id: 'q21', category: 'Results & Analysis',        difficulty: 'hard',   tags: ['alternative'],        text: 'Could your results be explained by an alternative hypothesis? How do you rule that out?' },
  { id: 'q22', category: 'Results & Analysis',        difficulty: 'medium', tags: ['effect-size'],        text: 'Are your findings statistically significant AND practically meaningful? Explain the difference.' },

  // ── Contributions ───────────────────────────────────────────────────────
  { id: 'q23', category: 'Contributions',             difficulty: 'easy',   tags: ['novel'],              text: 'What is the single most original contribution of your dissertation?' },
  { id: 'q24', category: 'Contributions',             difficulty: 'medium', tags: ['theory'],             text: 'What theoretical contribution does your work make to the field?' },
  { id: 'q25', category: 'Contributions',             difficulty: 'medium', tags: ['practical'],          text: 'What are the practical or policy implications of your findings?' },
  { id: 'q26', category: 'Contributions',             difficulty: 'hard',   tags: ['impact'],             text: 'In five years, how do you expect your work to have changed the field?' },

  // ── Limitations & Future Work ────────────────────────────────────────────
  { id: 'q27', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['limitations'],        text: 'What are the main limitations of your study?' },
  { id: 'q28', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['generalizability'],   text: 'To what populations or contexts can your findings be generalized?' },
  { id: 'q29', category: 'Limitations & Future Work', difficulty: 'easy',   tags: ['next-steps'],         text: 'What would you do differently if you were starting this project today?' },
  { id: 'q30', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['future'],             text: 'What are the most important next steps for research in this area?' },
  { id: 'q31', category: 'Limitations & Future Work', difficulty: 'hard',   tags: ['critique'],           text: 'What is the strongest critique someone could level at your dissertation, and how would you respond?' },

  // ── Defense Process ─────────────────────────────────────────────────────
  { id: 'q32', category: 'Defense Process',           difficulty: 'easy',   tags: ['overview'],           text: 'If a committee member has not read your full dissertation, how would you orient them quickly?' },
  { id: 'q33', category: 'Defense Process',           difficulty: 'medium', tags: ['disagreement'],       text: 'A committee member disagrees with your interpretation of a key finding. How do you respond?' },
  { id: 'q34', category: 'Defense Process',           difficulty: 'hard',   tags: ['pressure'],           text: 'You are asked a question you genuinely do not know the answer to. What do you do?' },
  { id: 'q35', category: 'Defense Process',           difficulty: 'medium', tags: ['revisions'],          text: 'What revisions do you anticipate needing to make after your defense?' },
];

const DEFAULT_FLASHCARDS = [
  { id: 'fc1', deck: 'Key Concepts', front: 'Internal Validity', back: 'The degree to which a causal conclusion drawn from a study is warranted — i.e., that the IV actually caused the observed change in the DV, ruling out confounds.' },
  { id: 'fc2', deck: 'Key Concepts', front: 'External Validity', back: 'The extent to which study findings can be generalized beyond the specific study sample, setting, or time period.' },
  { id: 'fc3', deck: 'Key Concepts', front: 'Construct Validity', back: 'How well a test or instrument measures the theoretical construct it is intended to measure.' },
  { id: 'fc4', deck: 'Key Concepts', front: 'Effect Size', back: 'A quantitative measure of the magnitude of a phenomenon, independent of sample size. Common measures: Cohen\'s d, r, η², odds ratio.' },
  { id: 'fc5', deck: 'Key Concepts', front: 'Statistical Power', back: 'The probability of correctly rejecting a false null hypothesis (1 − β). Convention: ≥ .80. Increases with larger N, larger effect, and lower α.' },
  { id: 'fc6', deck: 'Key Concepts', front: 'Confounding Variable', back: 'A variable that correlates with both the independent and dependent variables, potentially producing a spurious association.' },
  { id: 'fc7', deck: 'Research Methods', front: 'Triangulation', back: 'Using multiple methods, data sources, or investigators to cross-check findings and increase credibility.' },
  { id: 'fc8', deck: 'Research Methods', front: 'Member Checking', back: 'A qualitative credibility technique — sharing findings/interpretations with participants to confirm accuracy.' },
  { id: 'fc9', deck: 'Research Methods', front: 'Saturation', back: 'In qualitative research, the point at which no new themes or information emerge from additional data collection.' },
  { id: 'fc10', deck: 'Defense Tips', front: 'The "3-Minute Summary" Rule', back: '1) What is the problem? 2) What did you do? 3) What did you find? 4) Why does it matter? Practice until automatic.' },
  { id: 'fc11', deck: 'Defense Tips', front: 'Handling "I don\'t know"', back: 'Say: "That\'s a great question — I haven\'t fully explored that angle. My initial thinking would be X, but I\'d want to look further at Y." Shows honesty + intellectual curiosity.' },
  { id: 'fc12', deck: 'Defense Tips', front: 'Bridging a hostile question', back: 'Acknowledge the concern, briefly concede any valid point, then bridge to your strongest evidence: "You\'re right that X is a limitation — and I address this by..."' },
];

const DEFAULT_CHEATBLOCKS = [
  {
    id: 'cb1',
    title: '&#127919; Dissertation in 3 Sentences',
    content: 'Replace this with your own:\n\nThis study investigated [topic] using [method] with [sample/data].\n\nFindings showed [key result 1] and [key result 2].\n\nThis matters because [so-what statement].',
    color: '#eef2ff'
  },
  {
    id: 'cb2',
    title: '&#128200; Key Numbers',
    content: 'Sample size: N = \nEffect size: \nConfidence interval: \nSignificance level: α = \nResponse rate: \nTime period:',
    color: '#f0fdf4'
  },
  {
    id: 'cb3',
    title: '&#127942; Top 3 Contributions',
    content: '1. \n2. \n3. ',
    color: '#fff7ed'
  },
  {
    id: 'cb4',
    title: '&#9888; Known Limitations (+ counters)',
    content: 'Limitation 1: \n  Counter: \n\nLimitation 2: \n  Counter: \n\nLimitation 3: \n  Counter: ',
    color: '#fef2f2'
  },
];

const CHEATBLOCK_COLORS = [
  '#eef2ff', '#f0fdf4', '#fff7ed', '#fef2f2',
  '#f0f9ff', '#fdf4ff', '#fefce8', '#f8fafc',
];
