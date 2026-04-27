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
    color: '#6366f1'
  },
  {
    id: 'cb2',
    title: '&#128200; Key Numbers',
    content: 'Sample size: N = \nEffect size: \nConfidence interval: \nSignificance level: α = \nResponse rate: \nTime period:',
    color: '#22c55e'
  },
  {
    id: 'cb3',
    title: '&#127942; Top 3 Contributions',
    content: '1. \n2. \n3. ',
    color: '#f59e0b'
  },
  {
    id: 'cb4',
    title: '&#9888; Known Limitations (+ counters)',
    content: 'Limitation 1: \n  Counter: \n\nLimitation 2: \n  Counter: \n\nLimitation 3: \n  Counter: ',
    color: '#ef4444'
  },
];

// Accent colors for cheat sheet block left-border
const CHEATBLOCK_COLORS = [
  '#6366f1', '#22c55e', '#f59e0b', '#ef4444',
  '#06b6d4', '#a855f7', '#ec4899', '#94a3b8',
];

// ── Committee Members ────────────────────────────────────────────────────────
const DEFAULT_COMMITTEE = [
  {
    id: 'cm1',
    name: 'Dr. Robert Allison',
    role: 'External Examiner',
    dept: 'Dept. of Electrical Engineering & Computer Science, York University',
    focus: 'Visual-vestibular integration, perception of self-motion, 3D display technology, cybersickness, virtual reality, stereoscopic vision, oculomotor control.',
    angles: [
      'How do your methods compare to engineering-based approaches in the same space?',
      'What are the computational/systems-level implications of your findings?',
      'Have you considered how your results would translate to VR/AR display applications?',
      'How does your work interface with models of visual-vestibular conflict?',
      'What would your findings predict for someone experiencing cybersickness?',
      'Could your paradigm be implemented in a real-time or applied system?',
    ],
    notes: 'External examiner — typically the most rigorous. Comes from an engineering perspective so may push on technical precision, quantitative models, and real-world applicability. Expect questions that bridge your work to visual-vestibular systems and applied technology.',
    color: '#ef4444',
  },
  {
    id: 'cm2',
    name: 'Dr. Michael Barnett-Cowan',
    role: 'Supervisor',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Multisensory perception, vestibular system, temporal perception, subjective vertical, bodily self-consciousness, sensory weighting, balance and orientation.',
    angles: [
      'How does your work advance or challenge existing models of multisensory integration?',
      'Why did you choose this specific methodological approach over alternatives we considered?',
      'How robust are your findings across individual differences in vestibular sensitivity?',
      'What is the theoretical contribution beyond the empirical results?',
      'How does this fit into the broader lab research program?',
    ],
    notes: 'Your supervisor — knows your work best and will likely ask clarifying questions that help you shine. May also probe areas where the committee could push back, giving you a chance to demonstrate depth. Be prepared to articulate the "big picture" contribution clearly.',
    color: '#6366f1',
  },
  {
    id: 'cm3',
    name: 'Dr. Richard Staines',
    role: 'Internal Member',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Neurophysiology of motor control, somatosensory cortex, sensorimotor integration, TMS, EEG/ERP, cortical plasticity, upper limb movement.',
    angles: [
      'What neural mechanisms underlie the effects you observed?',
      'Have you considered a cortical or neurophysiological explanation for your findings?',
      'How does your work relate to sensorimotor integration at the neural level?',
      'Could TMS or EEG be used to extend your findings neurophysiologically?',
      'What does your work imply for motor learning or rehabilitation contexts?',
      'How did you account for individual differences in neural processing?',
    ],
    notes: 'Likely to push on the neural/mechanistic "why" behind your findings. If your dissertation is behavioural, be ready to speak to the neurophysiological plausibility of your results and acknowledge what neural work could follow. Connect your findings to sensorimotor pathways where possible.',
    color: '#22c55e',
  },
  {
    id: 'cm4',
    name: 'Dr. Ewa Niechwiej-Szwedo',
    role: 'Internal Member',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Visuomotor control, eye-hand coordination, reaching and grasping, vision for action, developmental motor control, low vision populations.',
    angles: [
      'How do your findings relate to online vs. feedforward visuomotor control?',
      'Have you considered how eye movements or gaze behaviour interact with your paradigm?',
      'What are the implications for populations with visual or motor impairments?',
      'How does your methodology account for variability in motor execution?',
      'Could your findings be extended to a naturalistic, whole-body movement context?',
      'How do your results fit within the vision-for-perception vs. vision-for-action framework?',
    ],
    notes: 'Will likely probe visuomotor and applied angles — how vision interacts with action in your paradigm. If your work is more perceptual, be ready to bridge to motor output or gaze behaviour. May also ask about clinical or applied relevance.',
    color: '#f59e0b',
  },
  {
    id: 'cm5',
    name: 'Dr. Roxane Itier',
    role: 'Internal-External Member',
    dept: 'Dept. of Psychology, University of Waterloo',
    focus: 'Face and social perception, visual attention, ERP/EEG (N170, P1, N2), social cognition, gaze processing, emotion recognition, cognitive neuroscience.',
    angles: [
      'How does attention modulate the perceptual effects you report?',
      'Have you considered the role of top-down cognitive or social factors in your paradigm?',
      'How does your work connect to broader cognitive neuroscience frameworks?',
      'What is the psychological (not just physiological) interpretation of your findings?',
      'Could individual differences in attention or cognitive style explain your variance?',
      'How robust are your effects when cognitive load or divided attention is introduced?',
    ],
    notes: 'Psychology and cognitive neuroscience perspective — the "internal-external" role means she bridges departments. Likely to ask about cognitive/psychological mechanisms, attention, and individual differences. May also ask about the broader theoretical framing from a cognitive science viewpoint. Be ready to connect your work to psychological theory, not just physiology.',
    color: '#a855f7',
  },
];

const MEMBER_ROLE_COLORS = {
  'Supervisor':              '#6366f1',
  'Internal Member':         '#22c55e',
  'Internal-External Member':'#a855f7',
  'External Examiner':       '#ef4444',
  'Chair':                   '#94a3b8',
};
