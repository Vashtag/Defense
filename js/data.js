// Default questions and flashcard data.
// This file is replaced/extended by localStorage — edit via the UI.

const DEFAULT_QUESTIONS = [
  // ── Introduction & Core Argument ─────────────────────────────────────────
  { id: 'q1',  category: 'Introduction & Core Argument', difficulty: 'easy',   tags: ['overview','elevator-pitch'],  text: 'Give me your 3-minute summary of this dissertation for a non-specialist audience.' },
  { id: 'q2',  category: 'Introduction & Core Argument', difficulty: 'medium', tags: ['framing','theory'],           text: 'Your title is "Recalibrating Reality." What exactly is being recalibrated, and by what mechanism?' },
  { id: 'q3',  category: 'Introduction & Core Argument', difficulty: 'hard',   tags: ['theory','conflict'],          text: 'You frame cybersickness as a failure of cue reweighting rather than simply a product of sensory conflict. How is that claim distinct from — and an advance over — classic sensory conflict theory (Reason & Brand, 1975)?' },
  { id: 'q4',  category: 'Introduction & Core Argument', difficulty: 'medium', tags: ['gap','motivation'],           text: 'What specific gap in the cybersickness literature did this dissertation address, and why had it not been addressed before?' },
  { id: 'q5',  category: 'Introduction & Core Argument', difficulty: 'hard',   tags: ['theory','predictive-coding'], text: 'You invoke the "controlled hallucination" framing from predictive processing. How does that framing actually change the predictions you would make about who gets sick and why?' },

  // ── Experiment 1 — SVV ───────────────────────────────────────────────────
  { id: 'q6',  category: 'Experiment 1 — SVV',        difficulty: 'easy',   tags: ['SVV','task'],         text: 'Walk me through exactly what the SVV task measures and why you expected it to change after VR exposure.' },
  { id: 'q7',  category: 'Experiment 1 — SVV',        difficulty: 'medium', tags: ['SVV','results'],      text: 'Your key SVV result was F(1,18) = 8.07, p = 0.012, η²p = 0.34. Interpret that effect for a non-statistician.' },
  { id: 'q8',  category: 'Experiment 1 — SVV',        difficulty: 'hard',   tags: ['SVV','posture'],      text: 'You measured SVV in a recumbent posture post-exposure. How does that posture choice affect the availability of body cues and therefore the validity of your cue-weight estimates?' },
  { id: 'q9',  category: 'Experiment 1 — SVV',        difficulty: 'hard',   tags: ['SVV','stats'],        text: 'The Condition × Background interaction was non-significant (p = 0.173) but showed η²p = 0.10. How do you interpret a null p-value alongside a medium effect size?' },
  { id: 'q10', category: 'Experiment 1 — SVV',        difficulty: 'hard',   tags: ['SVV','Gaussian'],     text: 'You chose a Gaussian model to relate ΔSVV to FMS rather than a linear model. Justify that choice, and what would a linear fit have told you instead?' },
  { id: 'q11', category: 'Experiment 1 — SVV',        difficulty: 'hard',   tags: ['SVV','sickness'],     text: 'In the grey background condition, greater sickness was associated with LESS SVV change. Walk through the logic of why rigidity — not flexibility — predicts sickness.' },
  { id: 'q12', category: 'Experiment 1 — SVV',        difficulty: 'medium', tags: ['SVV','clusters'],     text: 'Describe your Flexible Adapter and Rigid Perceiver clusters from Experiment 1. What exactly distinguished their cue-weight profiles and FMS scores?' },

  // ── Experiment 2 — OCHART ────────────────────────────────────────────────
  { id: 'q13', category: 'Experiment 2 — OCHART',     difficulty: 'medium', tags: ['OCHART','rationale'],  text: 'Why use OCHART in addition to SVV? What does the Perceptual Upright add that SVV alone cannot capture?' },
  { id: 'q14', category: 'Experiment 2 — OCHART',     difficulty: 'hard',   tags: ['OCHART','discrepancy'],text: 'Experiment 1 showed a significant gravity-ward SVV shift; Experiment 2 showed no significant group-level PU shift. How do you explain that discrepancy between tasks?' },
  { id: 'q15', category: 'Experiment 2 — OCHART',     difficulty: 'hard',   tags: ['OCHART','pooling'],    text: 'You pooled Experiment 2 participants with the no-EVS arm of Experiment 3 to increase power. The direction of body-weight change reversed between the Exp-2-only and pooled analyses. Does that not undermine your inference?' },
  { id: 'q16', category: 'Experiment 2 — OCHART',     difficulty: 'hard',   tags: ['OCHART','vision-FMS'], text: 'You found that increased visual weighting post-VR predicted higher FMS (ρ = 0.37, p = 0.027), but when study group was added as a covariate the effect became non-significant. How confident are you in that association?' },
  { id: 'q17', category: 'Experiment 2 — OCHART',     difficulty: 'medium', tags: ['OCHART','body-weight'],text: 'OCHART baseline body cue weight was ~53%, while SVV-derived body weight was ~15%. What accounts for this large difference between the two tasks?' },

  // ── Experiment 3 — EVS ───────────────────────────────────────────────────
  { id: 'q18', category: 'Experiment 3 — EVS',        difficulty: 'medium', tags: ['EVS','hypothesis'],   text: 'Walk me through the step-by-step logic of why you predicted that stochastic EVS would reduce cybersickness.' },
  { id: 'q19', category: 'Experiment 3 — EVS',        difficulty: 'hard',   tags: ['EVS','failure'],      text: 'EVS significantly increased cybersickness (FMS median 9.0 → 14.5, p = 0.001, r = 0.67). What are the most plausible explanations for why the manipulation backfired?' },
  { id: 'q20', category: 'Experiment 3 — EVS',        difficulty: 'hard',   tags: ['EVS','exclusions'],   text: '12 of 28 participants were excluded from vector sum model analyses due to poor convergence. What does that level of model failure tell you — about your model, your participants, or your paradigm?' },
  { id: 'q21', category: 'Experiment 3 — EVS',        difficulty: 'hard',   tags: ['EVS','parameters'],   text: 'You used continuous bilateral stochastic EVS throughout exposure. How do you know it was the mechanism (vestibular noise) and not the perceptual side-effects of stimulation itself that drove the increase in sickness?' },
  { id: 'q22', category: 'Experiment 3 — EVS',        difficulty: 'medium', tags: ['EVS','sex'],          text: 'Females had significantly higher baseline FMS than males (p = 0.032). You attribute the non-significant EVS effect in females to a ceiling effect. Is that post-hoc, and how would you test it prospectively?' },
  { id: 'q23', category: 'Experiment 3 — EVS',        difficulty: 'medium', tags: ['EVS','game'],         text: 'You used ADR1FT in Experiment 3 instead of Echo VR used in Experiments 1 and 2. What comparability issues does that create?' },

  // ── Sensory Reweighting & Vector Sum Model ───────────────────────────────
  { id: 'q24', category: 'Reweighting & Modelling',   difficulty: 'medium', tags: ['model','vector-sum'],  text: 'Explain the weighted vector sum model. What does it assume, what does it estimate, and how did you fit it?' },
  { id: 'q25', category: 'Reweighting & Modelling',   difficulty: 'hard',   tags: ['model','gravity'],     text: 'Gravity is fixed at 1 in your vector sum model. Why? What would change — mathematically and interpretively — if you estimated it freely?' },
  { id: 'q26', category: 'Reweighting & Modelling',   difficulty: 'hard',   tags: ['model','compositional'],text: 'Cue weights in your model are compositional — they must sum to a fixed total. How does this constraint limit the inferences you can draw about individual cue changes?' },
  { id: 'q27', category: 'Reweighting & Modelling',   difficulty: 'hard',   tags: ['model','Bayesian'],    text: 'You discuss Bayesian Causal Inference as a theoretical framing. Why did you use the vector sum model rather than a full Bayesian observer model? What would a BCI model have added?' },
  { id: 'q28', category: 'Reweighting & Modelling',   difficulty: 'medium', tags: ['model','MLE'],         text: 'How does your vector sum model relate to Maximum Likelihood Estimation frameworks for multisensory integration?' },

  // ── Individual Differences & Cluster Analysis ────────────────────────────
  { id: 'q29', category: 'Individual Differences',    difficulty: 'medium', tags: ['clusters','adapters'],  text: 'Describe the Flexible Adapter and Rigid Perceiver profiles that emerged across experiments. What pattern of cue-weight change defines each?' },
  { id: 'q30', category: 'Individual Differences',    difficulty: 'hard',   tags: ['clusters','FMS'],       text: 'In the pooled Experiment 2/3 sample, Flexible Adapters showed larger cue redistribution but did NOT have significantly lower FMS (p = 0.777). If adaptability does not reliably reduce sickness in your data, what does your dissertation actually show?' },
  { id: 'q31', category: 'Individual Differences',    difficulty: 'hard',   tags: ['clusters','regression'],text: 'The Experiment 3 no-EVS group was more body-dominant at baseline than Experiment 2 and showed more post-VR body down-weighting. How do you distinguish genuine adaptive reweighting from statistical regression to the mean?' },
  { id: 'q32', category: 'Individual Differences',    difficulty: 'medium', tags: ['clusters','prediction'],text: 'What pre-VR variables — measurable before exposure — would you use to prospectively predict who will be a Flexible Adapter versus a Rigid Perceiver?' },

  // ── Methodology & Design ─────────────────────────────────────────────────
  { id: 'q33', category: 'Methodology & Design',      difficulty: 'medium', tags: ['design','FMS'],         text: 'Why did you use the Fast Motion Sickness (FMS) scale rather than the Simulator Sickness Questionnaire (SSQ) or another validated measure?' },
  { id: 'q34', category: 'Methodology & Design',      difficulty: 'hard',   tags: ['design','power'],       text: 'Your sample sizes range from N = 18–28. How did you determine these, and are they sufficient to reliably estimate individual cue weights with the vector sum model?' },
  { id: 'q35', category: 'Methodology & Design',      difficulty: 'hard',   tags: ['design','order'],       text: 'How did you control for order effects, practice effects, and carryover between sessions — particularly in Experiment 3 with repeated EVS/no-EVS conditions?' },
  { id: 'q36', category: 'Methodology & Design',      difficulty: 'medium', tags: ['design','VR'],          text: 'You chose commercially available VR games (Echo VR, ADR1FT) as your sickening stimuli rather than custom stimuli. What are the trade-offs of that choice for experimental control?' },
  { id: 'q37', category: 'Methodology & Design',      difficulty: 'hard',   tags: ['design','normality'],   text: 'Several of your key distributions violated normality assumptions. Walk me through how you handled that throughout the thesis and how it affects your conclusions.' },

  // ── Contributions & Implications ─────────────────────────────────────────
  { id: 'q38', category: 'Contributions & Implications', difficulty: 'easy',   tags: ['contribution','novel'],     text: 'What is your single most original contribution to the cybersickness or multisensory integration literature?' },
  { id: 'q39', category: 'Contributions & Implications', difficulty: 'medium', tags: ['contribution','applied'],    text: 'You mention "personalised VR protocols" as a practical implication. Concretely, what would that look like for a game developer or clinician?' },
  { id: 'q40', category: 'Contributions & Implications', difficulty: 'hard',   tags: ['contribution','flexible'],   text: 'The Flexible/Rigid distinction — is this a stable individual trait, a situational state, or something else? What evidence do you have either way?' },
  { id: 'q41', category: 'Contributions & Implications', difficulty: 'hard',   tags: ['contribution','EVS-future'], text: 'Given that your EVS manipulation backfired, what would a better-designed EVS study look like? What parameters would you change?' },

  // ── Limitations & Future Work ────────────────────────────────────────────
  { id: 'q42', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['limitations','sample'],      text: 'Your samples were not fully characterised for prior VR experience, gaming background, or hormonal cycle phase (relevant given sex differences). How might those uncontrolled variables have influenced your results?' },
  { id: 'q43', category: 'Limitations & Future Work', difficulty: 'hard',   tags: ['limitations','critique'],    text: 'What is the strongest methodological critique of this dissertation, and how would you respond to it?' },
  { id: 'q44', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['future','replication'],      text: 'What would a pre-registered, adequately powered replication of your most important finding look like?' },
  { id: 'q45', category: 'Limitations & Future Work', difficulty: 'medium', tags: ['future','neural'],           text: 'Your findings are entirely behavioural. What neural measures would most directly test the reweighting mechanism you propose?' },

  // ── Committee-Specific ───────────────────────────────────────────────────
  { id: 'q46', category: 'Committee — Dr. Allison',   difficulty: 'hard',   tags: ['Allison','engineering'],     text: '[Allison] From an engineering perspective, how would you operationalize sensory reweighting capacity as a real-time signal to drive adaptive VR display parameters?' },
  { id: 'q47', category: 'Committee — Dr. Allison',   difficulty: 'hard',   tags: ['Allison','VOR'],             text: '[Allison] How does the VOR intersect with the visuo-vestibular conflicts you generated in VR, and did you consider measuring oculomotor responses?' },
  { id: 'q48', category: 'Committee — Dr. Allison',   difficulty: 'medium', tags: ['Allison','display'],         text: '[Allison] Your VR stimuli came from commercial headsets. What display parameters — field of view, latency, refresh rate — could have driven sickness independently of sensory conflict, and how did you control for them?' },
  { id: 'q49', category: 'Committee — Dr. Staines',   difficulty: 'hard',   tags: ['Staines','neural'],          text: '[Staines] What cortical and subcortical mechanisms do you believe underlie the reweighting shift you observed, and how would TMS or EEG test that?' },
  { id: 'q50', category: 'Committee — Dr. Staines',   difficulty: 'hard',   tags: ['Staines','plasticity'],      text: '[Staines] You describe VR-induced reweighting as "short-term neural plasticity." What timescale are we talking about, and what is the neural substrate for that plasticity?' },
  { id: 'q51', category: 'Committee — Dr. Niechwiej-Szwedo', difficulty: 'hard', tags: ['Niechwiej-Szwedo','gaze'], text: '[Niechwiej-Szwedo] Did you monitor eye movements during OCHART? Gaze shifts toward or away from the letter probe could confound your PU estimates.' },
  { id: 'q52', category: 'Committee — Dr. Niechwiej-Szwedo', difficulty: 'medium', tags: ['Niechwiej-Szwedo','visuomotor'], text: '[Niechwiej-Szwedo] How do your findings extend — or not — to dynamic whole-body VR tasks involving active reaching and locomotion rather than passive perceptual judgments?' },
  { id: 'q53', category: 'Committee — Dr. Itier',     difficulty: 'hard',   tags: ['Itier','attention'],         text: '[Itier] How might top-down attentional allocation modulate sensory cue weighting in your paradigm? Could attentional differences between individuals confound your cue-weight estimates?' },
  { id: 'q54', category: 'Committee — Dr. Itier',     difficulty: 'medium', tags: ['Itier','cognitive'],         text: '[Itier] The Flexible/Rigid distinction maps onto cognitive flexibility constructs from psychology. Have you related your clusters to any psychological measures of cognitive or perceptual flexibility?' },
];

const DEFAULT_FLASHCARDS = [
  // Core Concepts
  { id: 'fc1',  deck: 'Core Concepts', front: 'Sensory Reweighting',            back: 'The CNS dynamically adjusts the relative influence of sensory inputs (visual, vestibular, proprioceptive) based on their momentary reliability. Driven by short-term neural plasticity. Key mechanism: down-weight unreliable cues, up-weight stable ones.' },
  { id: 'fc2',  deck: 'Core Concepts', front: 'Cybersickness (your definition)', back: 'Not merely a product of sensory conflict — a FAILURE of the CNS to successfully reweight unreliable cues. Individuals who rapidly de-emphasise body/visual cues in favour of gravitational inputs are protected. Individuals who maintain maladaptive cue reliance get sicker.' },
  { id: 'fc3',  deck: 'Core Concepts', front: 'Weighted Vector Sum Model',       back: 'PU = v + b + g. Each cue (vision v, body b, gravity g) is a weighted vector. Gravity fixed at 1. v and b fit via Marquardt-Levenberg to OCHART/SVV data across 12 condition cells (6 backgrounds x 2 postures). Compositional: weights sum to a constant.' },
  { id: 'fc4',  deck: 'Core Concepts', front: 'SVV (Subjective Visual Vertical)', back: 'Participant adjusts a rod to perceived vertical while lying sideways (RSD posture). Deviates toward body axis (A-effect). Post-VR gravity-ward shift = body cue down-weighting. Gravity-dominant task (~85% gravity weight at baseline vs ~15% body).' },
  { id: 'fc5',  deck: 'Core Concepts', front: 'OCHART / Perceptual Upright',     back: 'Oriented CHAracter Recognition Test. Identify orientation of letter "p" across 24 rotations x 6 visual backgrounds x 2 body postures. PU estimated via vector sum fit. Body-dominant (~53% body weight at baseline). More sensitive to visual and body cue shifts than SVV.' },
  { id: 'fc6',  deck: 'Core Concepts', front: 'EVS (Electrical Vestibular Stim.)',back: 'Stochastic bilateral current at mastoid electrodes — adds noise to vestibular afferents. Predicted: degrade vestibular reliability -> CNS reweights toward gravity -> less conflict -> less sickness. Actual result (Exp 3): EVS worsened sickness (FMS 9 -> 14.5, p=0.001, r=0.67).' },
  { id: 'fc7',  deck: 'Core Concepts', front: 'FMS — Fast Motion Sickness Scale', back: 'Single-item verbal rating 0-20 collected every 1 min during VR exposure. Chosen for minimal task interruption. Captures within-session sickness trajectory. Preferred over SSQ (post-hoc only, 16 items) for real-time monitoring.' },
  { id: 'fc8',  deck: 'Core Concepts', front: 'A-effect vs E-effect',            back: 'A-effect (Aubert): SVV tilts toward body axis at moderate lateral tilts. E-effect: at large tilts (>60 deg), SVV tilts toward gravity. Your studies used 90 deg right-side-down — near the A-to-E transition. Post-VR shift away from A-effect = gravity up-weighting.' },
  // Key Results
  { id: 'fc9',  deck: 'Key Results',   front: 'Exp 1 — Main SVV effect',        back: 'F(1,18)=8.07, p=0.012, partial η²p=0.34 (large effect). Significant gravity-ward SVV shift after 20-min Echo VR. Permutation check: p=0.009. N=20 participants, right-side-down posture.' },
  { id: 'fc10', deck: 'Key Results',   front: 'Exp 1 — Avg cue weight changes',  back: 'Delta Vision = +1.02%, Delta Body = -2.79%, Delta Gravity = +1.77%. Body down-weighted, gravity up-weighted. Condition x Cue Type interaction: F(2,38)=17.43, p<0.001, η²p=0.37.' },
  { id: 'fc11', deck: 'Key Results',   front: 'Exp 1 — Clusters',               back: 'Flexible Adapters (N=8): DeltaBody=-5.92%, DeltaGravity=+6.74%, FMS M=5.88. Rigid Perceivers (N=11): DeltaBody=-1.45%, DeltaGravity=+0.24%, FMS M=4.55. Difference NOT significant (p=0.227, d=0.40). Exploratory only.' },
  { id: 'fc12', deck: 'Key Results',   front: 'Exp 2 — OCHART group-level',      back: 'No significant group-level PU shift in Exp 2 alone (N=18). Pooled with Exp 3 no-EVS (N=36): DeltaBody=-1.21%, DeltaGravity=+1.42% — converges with Exp 1 direction. Visual background dominated PU variance (η²p=0.54 vs η²p=0.02 for VR exposure).' },
  { id: 'fc13', deck: 'Key Results',   front: 'Exp 2 — Vision-FMS link',         back: 'Pooled N=36: delta vision cue weight positively predicted FMS (Spearman rho=0.37, p=0.027). Participants who UP-weighted vision post-VR got sicker — maladaptive. Linear model R²=0.12. NOT robust to study-group covariate (p=0.182). Treat as exploratory.' },
  { id: 'fc14', deck: 'Key Results',   front: 'Exp 3 — EVS worsened sickness',   back: 'FMS median: no-EVS=9.0 vs EVS=14.5. Wilcoxon p=0.001, r=0.67 (large effect). Time in VR significantly shorter with EVS (p=0.046). 12/28 participants excluded from vector sum due to model non-convergence.' },
  { id: 'fc15', deck: 'Key Results',   front: 'Exp 3 — Sex differences',         back: 'Females: higher FMS than males in no-EVS condition (Mdn 15 vs 8, p=0.032). EVS effect significant only in males (p=0.007, r=0.75). Females showed ceiling effect — already highly sick without EVS. EVS-induced change did not differ by sex (p=0.317).' },
  // Theory
  { id: 'fc16', deck: 'Theory',        front: 'Sensory Conflict Theory',         back: '(Reason & Brand, 1975). Sickness arises when sensory inputs conflict with stored neural predictions. Explains WHY VR causes sickness — but NOT why susceptibility varies so widely. Your advance: reweighting CAPACITY explains individual differences in susceptibility.' },
  { id: 'fc17', deck: 'Theory',        front: 'Bayesian Causal Inference (BCI)', back: '(de Winkel et al., 2018). Brain decides whether to integrate or segregate cues based on inferred common cause. Under sustained VR conflict, may switch to cue segregation mode rather than forced fusion. Explains why individual differences emerge: different thresholds for segregation.' },
  { id: 'fc18', deck: 'Theory',        front: 'Predictive Processing',           back: '(Clark, 2013; Seth & Friston, 2016). Perception = brain minimises prediction error between top-down generative model and sensory input. VR replaces reliable sensory regularities with artificial ones. Cybersickness = failure to update the generative model fast enough to resolve persistent error.' },
  // Defense Tips
  { id: 'fc19', deck: 'Defense Tips',  front: '3-sentence dissertation summary', back: 'This dissertation asked why some people tolerate VR while others get sick from identical exposure. Across three experiments I measured how the brain reweights visual, vestibular, and body cues before and after sickening VR, finding that cybersickness reflects failure to down-weight unreliable cues — and that artificially disrupting vestibular signals makes adaptation worse, not better.' },
  { id: 'fc20', deck: 'Defense Tips',  front: 'Handling the EVS failure',        back: '"The EVS result was informative precisely because it did not work as predicted. It shows that degrading vestibular reliability is not sufficient to trigger adaptive reweighting — the CNS needs an intact conflicted signal to recalibrate against, not a degraded one. That distinction is itself a finding."' },
  { id: 'fc21', deck: 'Defense Tips',  front: 'Handling the small-N critique',   back: '"N=18-28 is consistent with within-subject psychophysical designs where each participant contributes many trials. The limitation is power to detect small individual-differences effects in model-derived weights — I acknowledge this explicitly and give specific powered follow-up designs in the limitations section."' },
  { id: 'fc22', deck: 'Defense Tips',  front: 'When clusters do not predict FMS', back: '"The cluster analysis was pre-specified as exploratory, and the null FMS difference (p=0.777) does not mean reweighting is irrelevant. It means either the binary cluster assignment is too coarse, or that FMS variance is too large for N=35 to detect the effect. A dimensional approach with continuous delta-body as predictor is a more sensitive next step."' },
];

const DEFAULT_CHEATBLOCKS = [
  {
    id: 'cb1',
    title: '&#127919; Dissertation in 3 Sentences',
    content: 'This dissertation asked why some people tolerate VR while others get sick from identical exposure.\n\nAcross three experiments measuring visual, vestibular, and body cue weighting before and after sickening VR, I found that cybersickness reflects failure to down-weight unreliable cues — and that artificially disrupting vestibular signals (EVS) makes adaptation worse, not better.\n\nThis matters because it reframes cybersickness from a conflict problem to an adaptation problem, pointing toward personalized habituation protocols as the countermeasure.',
    color: '#6366f1'
  },
  {
    id: 'cb2',
    title: '&#128200; Key Numbers by Experiment',
    content: 'EXP 1 (SVV, N=20, Echo VR, 20 min)\n  Main effect: F(1,18)=8.07, p=.012, η²p=.34\n  Avg ΔBody = -2.79%, ΔGravity = +1.77%\n  Flexible Adapters: ΔBody=-5.92%, FMS M=5.88\n  Rigid Perceivers:  ΔBody=-1.45%, FMS M=4.55\n\nEXP 2 (OCHART, N=20→18 fits, Echo VR)\n  No significant group-level PU shift\n  Pooled N=36: ΔBody=-1.21%, ΔGravity=+1.42%\n  Vision-FMS: ρ=0.37, p=.027 (exploratory)\n\nEXP 3 (EVS + OCHART, N=28, ADR1FT)\n  FMS no-EVS Mdn=9.0 vs EVS Mdn=14.5\n  Wilcoxon p=.001, r=0.67 (large)\n  12/28 excluded (model non-convergence)\n  Females > Males in no-EVS (p=.032)',
    color: '#22c55e'
  },
  {
    id: 'cb3',
    title: '&#127942; Top 3 Contributions',
    content: '1. First empirical link between the DIRECTION of post-VR sensory reweighting (body down, gravity up) and cybersickness protection — using two independent perceptual tasks (SVV and OCHART) with convergent results.\n\n2. First demonstration that EVS exacerbates rather than reduces VR-induced cybersickness under continuous bilateral stochastic stimulation — showing vestibular noise is not equivalent to adaptive reweighting.\n\n3. Flexible Adapter / Rigid Perceiver typology as an individual-differences framework for cybersickness susceptibility — grounded in cue-weight redistribution profiles rather than self-report trait measures.',
    color: '#f59e0b'
  },
  {
    id: 'cb4',
    title: '&#9888; Known Limitations + Counters',
    content: 'Small N (18–28):\n  → Within-subject design; each P gives many trials. Acknowledged; powered replication designed in Ch.5.\n\nSVV in recumbent posture post-exposure:\n  → Chosen to assess body cue availability at 90° tilt; limits generalization to upright. Noted explicitly.\n\nEVS parameters unoptimised:\n  → Continuous bilateral stochastic — may have caused perceptual disturbance. Future work: pulsed/intermittent waveforms, dose-response.\n\nCross-experiment pooling (Ch.3):\n  → Kruskal-Wallis showed no study differences in cue weights or FMS (all p>.07). Justified but exploratory.\n\nSex differences underpowered:\n  → Ceiling effect in females likely; future work: stratify by sex a priori.',
    color: '#ef4444'
  },
  {
    id: 'cb5',
    title: '&#128161; The EVS Story (key talking point)',
    content: 'Hypothesis: EVS noise → vestibular unreliability → CNS reweights → less conflict → less sickness.\n\nResult: EVS worsened sickness (p=.001, r=.67) and shortened VR tolerance.\n\nBest explanations:\n  1. Stochastic current caused perceptual disturbance independent of reweighting mechanism\n  2. EVS effects are online only — no durable recalibration post-stimulation\n  3. GVS acts as a directional tilt signal, not pure noise — may have added conflict rather than reducing vestibular reliability\n  4. Intact (if conflicted) vestibular signal needed for CNS to recalibrate against\n\nTake-home: vestibular noise ≠ adaptive reweighting. The mechanism requires a coherent signal to update against.',
    color: '#a855f7'
  },
  {
    id: 'cb6',
    title: '&#128101; Committee Angles at a Glance',
    content: 'Allison (External, EE&CS):\n  → Engineering validity, display parameters, VOR, real-time applications\n\nBarnett-Cowan (Supervisor):\n  → Big picture, theoretical coherence, lab narrative\n\nStaines (Internal, Neurophysiology):\n  → Neural mechanism, cortical plasticity, TMS/EEG follow-up\n\nNiechwiej-Szwedo (Internal, Visuomotor):\n  → Eye movements during OCHART, whole-body active VR, visuomotor populations\n\nItier (Internal-External, Psychology):\n  → Attention modulation, cognitive flexibility, psychological trait correlates',
    color: '#06b6d4'
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
      'Your VR stimuli used commercial headsets (Quest 2 / similar). What display parameters — FOV, latency, refresh rate — could have independently driven sickness, and how did you control for them?',
      'The VOR stabilises gaze during head motion. Did you consider measuring VOR gain or oculomotor responses during or after VR to validate the vestibular conflict you induced?',
      'From an engineering standpoint, how would you operationalize "sensory reweighting capacity" as a real-time, measurable signal that could drive adaptive VR rendering?',
      'How does the vector sum model compare to Kalman filter or observer model approaches used in engineering literature on sensory fusion?',
      'Your EVS was stochastic and bilateral. What specific waveform parameters (frequency, amplitude, duration) would you change in a second study, and on what basis?',
      'Could your Flexible Adapter classification be used as a pre-screening tool to triage users before VR deployment? What would the sensitivity/specificity look like?',
    ],
    notes: 'External examiner — expect the most probing technical questions. Allison publishes on visual-vestibular integration, VOR, 3D displays, and cybersickness countermeasures. He will scrutinize your EVS parameters, model validity, and applied translation. Prepare engineering-level answers for your methods.',
    color: '#ef4444',
  },
  {
    id: 'cm2',
    name: 'Dr. Michael Barnett-Cowan',
    role: 'Supervisor',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Multisensory perception, vestibular system, temporal perception, subjective vertical, bodily self-consciousness, sensory weighting, balance and orientation.',
    angles: [
      'How do the three experiments build a cumulative argument rather than three separate studies?',
      'The Chung & Barnett-Cowan (2023) paper showed a similar SVV gravity-ward shift. What does your dissertation add beyond replicating that finding?',
      'What is the theoretical take-home that survives across all three experiments, given that Exp 2 did not replicate the group-level shift and Exp 3 backfired?',
      'How does Flexible Adapter / Rigid Perceiver status relate to prior constructs in your lab — e.g., field dependence, temporal binding?',
      'Where does this work fit in the lab\'s broader research program on vestibular perception and bodily self-consciousness?',
    ],
    notes: 'Your supervisor — knows the work intimately. His questions will typically be structured to let you articulate the big picture or to give you a chance to rebut anticipated committee concerns. Prepare the "so what across all three studies" narrative carefully — he will want you to own the cross-experiment story.',
    color: '#6366f1',
  },
  {
    id: 'cm3',
    name: 'Dr. Richard Staines',
    role: 'Internal Member',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Neurophysiology of motor control, somatosensory cortex, sensorimotor integration, TMS, EEG/ERP, cortical plasticity, upper limb movement.',
    angles: [
      'You describe the reweighting shift as driven by "short-term neural plasticity." What specific neural substrate do you mean — PIVC, parietal operculum, MSTd? What is the timescale?',
      'How would you use TMS or EEG to causally test whether the cortical vestibular areas (PIVC, parietal operculum) mediate the reweighting you observed behaviourally?',
      'The Flexible Adapter profile involves body cue down-weighting. What does that mean at the level of vestibulospinal and somatosensory cortical processing?',
      'Your EVS increased sickness. Could the mechanism be cortical — e.g., EVS disrupting PIVC activity in a way that impairs cue integration rather than simply adding noise?',
      'What does your work predict for populations with known vestibular cortex lesions or peripheral vestibular dysfunction? Is your paradigm a potential clinical assessment tool?',
    ],
    notes: 'Staines will ask "what is the neural mechanism" for everything. Your dissertation is entirely behavioural, so be ready with a clear, specific answer about which cortical and subcortical circuits mediate the reweighting you observed, and what a neurophysiological follow-up would look like. PIVC, parietal operculum, MSTd, and the vestibulospinal tract are the key structures to know cold.',
    color: '#22c55e',
  },
  {
    id: 'cm4',
    name: 'Dr. Ewa Niechwiej-Szwedo',
    role: 'Internal Member',
    dept: 'Dept. of Kinesiology and Health Sciences, University of Waterloo',
    focus: 'Visuomotor control, eye-hand coordination, reaching and grasping, vision for action, developmental motor control, low vision populations.',
    angles: [
      'Did you monitor eye movements during the OCHART task? Gaze shifts toward the letter probe or drift induced by EVS could confound your PU estimates.',
      'Your participants judged a static letter orientation — a passive perceptual task. How do your reweighting findings extend to active visuomotor tasks like reaching or locomotion in VR?',
      'The VOR is directly relevant to your visual-vestibular conflict paradigm. Did EVS affect VOR gain, and how might that interact with your OCHART results?',
      'Your right-side-down posture is highly constrained. How generalizable is the reweighting you observe to upright stance or dynamic whole-body movement?',
      'Cybersickness affects motor performance in VR training applications. What does your reweighting framework predict for motor learning under cybersickness conditions?',
    ],
    notes: 'Niechwiej-Szwedo will likely probe gaze behaviour and visuomotor relevance. The key vulnerability is that OCHART is a static perceptual judgment with no motor output — be ready to bridge to dynamic, action-relevant contexts and acknowledge that eye movements were not tracked during the task.',
    color: '#f59e0b',
  },
  {
    id: 'cm5',
    name: 'Dr. Roxane Itier',
    role: 'Internal-External Member',
    dept: 'Dept. of Psychology, University of Waterloo',
    focus: 'Face and social perception, visual attention, ERP/EEG (N170, P1, N2), social cognition, gaze processing, emotion recognition, cognitive neuroscience.',
    angles: [
      'How might top-down attentional allocation modulate sensory cue weighting in your OCHART and SVV tasks? Could participants who attend more to the visual background show artificially elevated visual cue weights?',
      'The Flexible Adapter vs. Rigid Perceiver distinction maps closely onto cognitive flexibility constructs in psychology. Have you related cluster membership to any psychological measures — e.g., field dependence (Witkin), cognitive flexibility scales?',
      'Individual differences in cybersickness susceptibility are substantial. Beyond sensory weighting, what cognitive or personality traits (e.g., visuo-spatial ability, interoceptive sensitivity, anxiety) might predict your outcome variables?',
      'Your FMS measure is a single-item verbal scale. From a psychometric standpoint, how valid is it as an index of the sickness construct compared to SSQ or physiological measures?',
      'Could you measure the neural signature of cue reweighting online using EEG during VR exposure — for instance, changes in vestibular-evoked potentials or frontal-parietal connectivity?',
    ],
    notes: 'Itier bridges psychology and cognitive neuroscience. She will probe attentional confounds in your tasks, the psychological validity of your individual-differences framework, and measurement psychometrics. The key vulnerability is that you did not include any cognitive or personality measures alongside your perceptual tasks — prepare a clear rationale and a future-work plan that includes them.',
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
