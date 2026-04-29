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
  // ── Allison (extended) ───────────────────────────────────────────────────
  { id: 'q55', category: 'Committee — Dr. Allison',   difficulty: 'hard',   tags: ['Allison','models'],          text: '[Allison] How does your vector-sum model compare to MLE/Bayesian, Kalman-filter, or observer-model approaches used in the engineering literature on sensory fusion?' },
  { id: 'q56', category: 'Committee — Dr. Allison',   difficulty: 'hard',   tags: ['Allison','EVS'],             text: '[Allison] Your EVS was stochastic and bilateral. What specific waveform parameters — frequency, amplitude, duration — would you change in a second study, and on what basis?' },
  { id: 'q57', category: 'Committee — Dr. Allison',   difficulty: 'medium', tags: ['Allison','screening'],       text: '[Allison] Could your Flexible Adapter classification be used as a pre-screening tool to triage users before VR deployment? What would sensitivity/specificity look like?' },
  { id: 'q69', category: 'Committee — Dr. Allison',   difficulty: 'hard',   tags: ['Allison','vergence','accommodation'], text: '[Allison] HMDs decouple vergence from accommodation — the vergence-accommodation conflict. How does this conflict interact with the visual-vestibular conflict you studied, and could it independently drive or exacerbate cybersickness in your paradigm?' },
  // ── Barnett-Cowan ────────────────────────────────────────────────────────
  { id: 'q58', category: 'Committee — Dr. Barnett-Cowan', difficulty: 'hard',   tags: ['Barnett-Cowan','converging'], text: '[Barnett-Cowan] How do the three experiments form a cumulative, converging argument? Exp 2 was null and Exp 3 backfired — how is that a coherent program?' },
  { id: 'q59', category: 'Committee — Dr. Barnett-Cowan', difficulty: 'hard',   tags: ['Barnett-Cowan','replication'],text: '[Barnett-Cowan] How does the dissertation go beyond a replication of Chung & Barnett-Cowan (2023)? What new theoretical or empirical ground does it break?' },
  { id: 'q60', category: 'Committee — Dr. Barnett-Cowan', difficulty: 'hard',   tags: ['Barnett-Cowan','theory'],    text: '[Barnett-Cowan] Given mixed results (Exp 2 null, Exp 3 backfired), what is your headline theoretical take-home, and how do you defend it?' },
  { id: 'q61', category: 'Committee — Dr. Barnett-Cowan', difficulty: 'medium', tags: ['Barnett-Cowan','typology'],  text: '[Barnett-Cowan] How does the Flexible Adapter / Rigid Perceiver typology relate to field dependence/independence and the temporal binding window?' },
  { id: 'q62', category: 'Committee — Dr. Barnett-Cowan', difficulty: 'medium', tags: ['Barnett-Cowan','self'],       text: '[Barnett-Cowan] How does VR-induced vestibular conflict relate to bodily self-consciousness, and where does your work fit in that literature?' },
  // ── Staines (extended) ───────────────────────────────────────────────────
  { id: 'q63', category: 'Committee — Dr. Staines',   difficulty: 'hard',   tags: ['Staines','somatosensory'],   text: '[Staines] Down-weighting of body cues in the Flexible Adapter cluster — what is the vestibulospinal and somatosensory-cortical substrate for that?' },
  { id: 'q64', category: 'Committee — Dr. Staines',   difficulty: 'hard',   tags: ['Staines','lesion'],          text: '[Staines] What would you predict for SVV and cybersickness patterns in patients with cortical vestibular lesions or peripheral vestibular dysfunction?' },
  // ── Niechwiej-Szwedo (extended) ──────────────────────────────────────────
  { id: 'q65', category: 'Committee — Dr. Niechwiej-Szwedo', difficulty: 'hard',   tags: ['Niechwiej-Szwedo','EVS'],   text: '[Niechwiej-Szwedo] EVS induces ocular torsion and torsional nystagmus. How do those eye movements interact with OCHART letter-recognition and your PU estimates?' },
  { id: 'q66', category: 'Committee — Dr. Niechwiej-Szwedo', difficulty: 'medium', tags: ['Niechwiej-Szwedo','rehab'],  text: '[Niechwiej-Szwedo] What are the implications of your Flexible/Rigid clusters for VR-based motor rehabilitation — does cybersickness susceptibility threaten motor learning?' },
  // ── Itier (extended) ─────────────────────────────────────────────────────
  { id: 'q67', category: 'Committee — Dr. Itier',     difficulty: 'medium', tags: ['Itier','FMS'],               text: '[Itier] Why did you use the Fast Motion Sickness (FMS) scale rather than the SSQ or MISC? What are the psychometric trade-offs?' },
  { id: 'q68', category: 'Committee — Dr. Itier',     difficulty: 'hard',   tags: ['Itier','EEG'],               text: '[Itier] What EEG markers would you predict for "Flexible Adapter" vs "Rigid Perceiver" individuals during VR exposure, and what does the current literature say?' },
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

// Pre-loaded answer frameworks for committee questions (q46–q54)
// User edits stored in localStorage will override these defaults.
const DEFAULT_ANSWERS = {
  'q46': `KEY CITATIONS:
- Dennison, Wisti & D'Zmura (2016) Displays — stomach activity, blink rate, breathing predicted sickness R²≤0.75
- Islam et al. (2020) IEEE TVCG — multimodal LSTM (HR, HRV, EDA, gaze) >85% real-time classification
- Tasnim, Islam, Desai & Quarles (2024) IEEE TVCG — personalization critical; generic models underperform
- Recenti et al. (2021) Front Bioeng Biotechnol — EEG+EMG+ECG classified susceptible individuals with high accuracy
- Krokos & Varshney (2022) Virtual Reality — pupillometric variation precedes nausea by 30–60 s
- Chardonnet, Mirzaei & Mérienne (2017) Int J HCI — postural sway predicts subsequent onset
- Fairclough (2009) Interacting with Computers — theoretical framing of biocybernetic loops

ANSWER FRAMEWORK:
Distinguish three biomarker tiers: (1) Autonomic/peripheral (EDA/GSR, HR, HRV, gastric tachyarrhythmia) — robust but lag 30–60 s. (2) Oculomotor (pupil diameter, blink rate, gaze entropy, smooth-pursuit gain) — fast (sub-second), now available in commercial HMD eye-tracking. (3) Central (EEG spectral power at Cz/O2/F7, theta/alpha changes, ERPs) — most direct conflict markers but currently impractical in consumer VR.

Cite Dennison & D'Zmura (2016), Islam/Quarles (2020–2024), and Recenti et al. for accuracy benchmarks (~75–87%). Argue an effective biocybernetic loop should fuse modalities (Fairclough 2009) and personalize thresholds (Tasnim 2024) — directly extending the Flexible/Rigid clustering to operational adaptive systems (FOV vignetting, snap-turning, content slow-down) intervening before SSQ-level sickness emerges.`,

  'q47': `KEY CITATIONS:
- Di Girolamo et al. (2001) Acta Oto-Laryngologica — 20-min HMD exposure produced significant post-exposure VOR gain changes
- Draper et al. (1998, 2001) Human Factors — visual magnifications (0.5×, 2×) → VOR gain adaptation correlated with SSQ
- Oman (1982, 1990) Acta Otolaryngol / Can J Physiol Pharmacol — Luenberger-observer; predicts VOR-gain change as correlate of internal-model updating
- Reason & Brand (1975) Motion Sickness — foundational; VOR as read-out of "neural store" updating
- Warchoł et al. (2024) J Clinical Medicine — brief VR changes VOR/OKR weighting consistent with adaptive shift to OKR

ANSWER FRAMEWORK:
Position VOR gain as the most direct behavioural read-out of internal-model updating predicted by Reason & Brand (1975) and Oman (1982/1990): when visual head-locked imagery does not match canal/otolith signals, brainstem-cerebellum recalibrates VOR gain, and the magnitude indexes both adaptation and the conflict signal driving sickness.

Draper's scale-factor work is the seminal demonstration that VOR gain shifts correlate with SSQ. Di Girolamo (2001) and Warchoł (2024) show VR-induced VOR/OKR reweighting consistent with vestibular down-weighting — exactly what the "Flexible Adapter" cluster should exhibit. Caveat: VOR adaptation does not always correlate with sickness adaptation, so VOR is a necessary but not sufficient marker, complementing SVV/OCHART and EVS responses. Future studies should incorporate video head-impulse testing pre/post VR.`,

  'q48': `KEY CITATIONS:
- Stanney et al. (2020) Int J HCI — wide FOV, latency, IPD mismatch, low resolution as independent engineering drivers
- Stauffert, Niebling & Latoschik (2020) Front VR — systematic review; dose-response between motion-to-photon latency and SSQ; MTP <20 ms recommended
- Palmisano, Allison & Kim (2020) Front VR — DVP framework integrating lag, jitter, and scale factor
- Draper et al. (2001) Human Factors — scale factor, not latency alone, drove VOR adaptation/sickness
- Moss & Muth (2011) Human Factors — peripheral occlusion (FOV) was primary driver, not latency alone
- Kinsella et al. (2016) Aerosp Med Hum Perf — latency variability (jitter) more provocative than absolute magnitude

ANSWER FRAMEWORK:
FOV, motion-to-photon latency, refresh rate, and resolution are conceptually independent but empirically confounded across commercial HMDs. The Quest 2 deployment held these constant within-subjects, so individual differences (Flexible Adapter vs Rigid Perceiver) cannot be contaminated by hardware variance.

Cite Stanney et al. (2020) and Stauffert et al. (2020) plus Palmisano et al. (2020, DVP) for latency's dose-response. Note Draper (2001) and Moss & Muth (2011) found latency alone does not always elevate SSQ, while Kinsella et al. (2016) showed latency variability (jitter ~0.2 Hz) is the more provocative variable — implying fixed-hardware studies must report measured (not nominal) MTP. A future iteration should orthogonally manipulate FOV restriction and inject controlled latency via software (delayed re-projection) within the same Quest 2 platform.`,

  'q49': `KEY CITATIONS (Neural substrates):
- zu Eulenburg et al. (2012) NeuroImage — ALE meta-analysis: OP2 in parietal operculum as human PIVC homologue
- Lopez, Blanke & Mast (2012) Neuroscience — distributed multimodal vestibular cortex; right-hemispheric dominance
- Gu, Angelaki & DeAngelis (2008) Nature Neuroscience — MSTd combines visual/vestibular heading with subadditive weights
- Fetsch et al. (2012) Nature Neuroscience — reliability-based dynamic cue reweighting on seconds timescale
- Yu et al. (2024) Sci Rep — EEG effective connectivity: minutes-scale reconfiguration after visual-vestibular conflict

KEY CITATIONS (TMS/EEG):
- Kheradmand, Lasker & Zee (2015) Cereb Cortex — cTBS over right supramarginal gyrus (TPJ) → immediate ipsilateral SVV tilt
- Fiori et al. (2015) J Neurophysiol — cTBS over right TPJ disrupts maintenance of internal verticality
- Arshad et al. (2013, 2014) Cereb Cortex; Brain Stimul — tDCS modulating left/right TPJ produces asymmetric VOR suppression
- Nakul, Bartolomei & Lopez (2021) Front Neurol — vestibular-evoked cerebral potentials (p38, N80, p199, n340, p461)
- Gale et al. (2016) J Neurophysiol — natural vestibular stimulation evokes alpha-band desynchronization

ANSWER FRAMEWORK:
The cortical vestibular system is a distributed multisensory network whose core hub is OP2/PIVC in the parietal operculum/posterior insula (zu Eulenburg 2012; Lopez & Blanke 2011), with right-hemispheric dominance. PIVC receives convergent somatosensory and visual self-motion signals; immediately adjacent PIC and MSTd carry congruent visual-vestibular heading representations.

Cue reweighting operates on multiple timescales: seconds (trial-by-trial reliability-based reweighting in MSTd; Fetsch et al. 2012), minutes (rapid network reconfiguration; Yu et al. 2024), and hours-days (spaceflight reweighting; Hupfeld et al. 2022). The Flexible/Rigid clusters likely index individual differences in the gain of this reliability-weighted Bayesian computation.

For TMS/EEG tests: single-pulse and theta-burst TMS over right TPJ/supramarginal gyrus produces immediate SVV tilts (Kheradmand 2015; Fiori 2015), demonstrating this region is necessary—not merely correlated—for verticality estimation. EEG signatures include short-latency VEMPs, middle-latency parietal-operculum p38, and alpha-band desynchronization over parieto-temporal sites (Gale et al. 2016). Cluster-specific EEG (alpha ERD, late VEPs to GVS) is a tractable next step; TMS over TPJ as a causal manipulation.`,

  'q50': `KEY CITATIONS (Plasticity timescales):
- Fetsch et al. (2012) Nature Neuroscience — seconds-scale trial-by-trial reliability reweighting in MSTd
- Yu et al. (2024) Sci Rep — EEG effective connectivity reconfiguration within minutes
- Hupfeld et al. (2022) Cereb Cortex — spaceflight cortical reweighting recovering by 3 months
- Assländer & Peterka (2014) J Neurophysiol — sensory reweighting dynamics in postural control

KEY CITATIONS (EVS cortical mechanism):
- Bense et al. (2001) J Neurophysiol — bilateral PIVC activation + deactivation of visual cortex (reciprocal visuo-vestibular inhibition)
- Brandt et al. (1998) Brain — visual motion deactivates PIVC; reciprocal inhibitory interaction
- Weech, Moon & Troje (2018, 2020) PLoS ONE; Exp Brain Res — nGVS reduces cybersickness acutely but extinguishes after 3–6 min
- Allred & Clark (2024/2025) Communications Engineering — "detrimental GVS" increases sickness 56%
- Cevette et al. (2012) Aviat Space Environ Med — bilateral bipolar GVS can increase motion sickness with conflicting visual scenes

ANSWER FRAMEWORK:
"Short-term neural plasticity" here spans multiple nested timescales. At the fastest (seconds to minutes), it is reliability-based dynamic reweighting in MSTd and parietal cortex — the same Bayesian updating operating trial-by-trial (Fetsch et al. 2012), which Yu et al. (2024) show reorganizes EEG effective connectivity within minutes. At the medium timescale (hours), the adaptation resembles VOR gain plasticity mediated by the cerebellar flocculus/ventral paraflocculus (well-established from prism adaptation and VOR gain-change studies). Across days, cortical metabolic shifts emerge (Hupfeld et al. 2022, spaceflight analogy).

The neural substrate is most plausibly the MSTd–PIC–PIVC–TPJ network acting as the reliability-weighted integrator, with the cerebellum and brainstem implementing the rapid gain changes and prefrontal–parietal circuits implementing the slower attentional gating (Bolton & Staines 2011; Staines et al. 2002).

For the EVS backfire: GVS robustly activates bilateral PIVC but also deactivates visual cortex (Bense 2001; Brandt 1998). Bilateral stochastic EVS injects noise into vestibular afferents, reducing vestibular reliability and in optimal-cue-integration terms forcing down-weighting. However, rather than substituting for missing vestibular cues, bilateral stochastic EVS likely (a) added incongruent activity to PIVC/OP, exacerbating sensory conflict; (b) disrupted attention-modulated PIVC suppression; or (c) interfered with the reweighting mechanism itself — paralleling Allred & Clark (2025) and Cevette et al. (2012). This converts Exp 3's "failure" into mechanistic evidence.`,

  'q51': `KEY CITATIONS:
- MacDougall et al. (2002) Exp Brain Research — GVS-induced tonic ocular torsion ≤5 mA, maintained during sustained stimulation
- Watson et al. (1998) Exp Brain Research — tonic torsional shifts toward anode under GVS
- Schneider, Glasauer & Dieterich (2002) J Neurophysiol — torsion gain ~0.93°/mA (τ ≈ 1.74 s); torsional nystagmus
- Jahn et al. (2003) Clinical Neurophysiology — static torsion 1–6° at 1–3 mA
- Otero-Millan, Treviño & Kheradmand (2019) Physiological Reports — OCR gain ~0.1–0.25 during lateral tilts
- Tarnutzer et al. (2009) J Neurophysiol — SVV/OCR variability share otolith noise but can change independently

ANSWER FRAMEWORK:
EVS/GVS produces well-characterized eye movements: tonic ocular torsion of 1–6° toward the anode (MacDougall et al. 2002; Watson et al. 1998), superimposed torsional nystagmus (~0.5–3°/s SPV; Jahn et al. 2003), and small horizontal components from concurrent canal+otolith activation. However, these effects are largely suppressed by visual fixation, leaving torsion as the principal residual confound.

Critically, ocular counter-roll has a low gain (0.1–0.25) relative to perceived tilt, and Otero-Millan et al. (2019) and Tarnutzer et al. (2009) demonstrate SVV/OCR can change independently. The OCHART relies on letter-shape processing (a ventral-stream perceptual judgment) rather than precise retinal alignment, making it relatively robust to small torsional offsets.

For eye movements during OCHART itself: gaze monitoring was not included in the current paradigm — a genuine limitation. VOG could be added in future studies to directly quantify residual torsion contributions and any gaze drift toward/away from the letter probe that might bias PU estimates.`,

  'q52': `KEY CITATIONS (Perception vs action):
- Goodale & Milner (1992) Trends Neurosci — separate visual pathways for perception and action (two-streams)
- Sober & Sabes (2003, 2005) J Neuroscience; Nature Neuroscience — task-dependent cue weighting at distinct stages of reach planning
- van Beers, Wolpert & Haggard (2002) Current Biology — proprioceptive recalibration drives reach adaptation
- Burns & Blohm (2010) Front Neuroscience — multi-sensory weights depend on contextual noise in reference-frame transformations
- Cressman & Henriques (2009) J Neurophysiology — cross-modal weights dynamically updated by action

KEY CITATIONS (Posture generalizability):
- Peterka (2002) J Neurophysiol — foundational sensory reweighting model in postural control
- Cenciarini & Peterka (2006) J Neurophysiol — proprioceptive weight declines with platform perturbation; vestibular weight increases
- Dyde, Jenkin & Harris (2006) Exp Brain Research — PU vector sum varies across upright, supine, RSD
- Carriot et al. (2011) Exp Brain Research — apparent zenith varies with body orientation

ANSWER FRAMEWORK:
The two-streams hypothesis (Goodale & Milner 1992) predicts perceptual reports (SVV and OCHART) and visuomotor actions can rely on distinct cue weights: the ventral stream encodes scene-relative orientation for conscious report while the dorsal stream computes egocentric metrics for action. Sober & Sabes (2003, 2005) and Burns & Blohm (2010) confirm visual, proprioceptive, and vestibular signals are weighted task-dependently.

Even if the "Rigid Perceiver" cluster shows visual over-weighting on SVV/PU, this does not necessarily predict identical over-weighting during reaching or locomotion in VR; visuomotor adaptation experiments (Cressman & Henriques 2009) are the necessary follow-up.

On posture: right-side-down provides a strong test by dissociating body-axis from gravity, but lying postures down-weight otolith contributions to balance, potentially exaggerating idiotropic biases relative to free-standing VR users. Lying SVV weights must be re-quantified in upright/standing VR conditions before clinical translation (Carriot et al. 2011; Peterka 2002).`,

  'q53': `KEY CITATIONS:
- Talsma, Senkowski, Soto-Faraco & Woldorff (2010) Trends Cogn Sci — top-down attention modulates multisensory integration across multiple processing stages
- Talsma (2015) Front Integrative Neurosci — predictive coding and multisensory integration: attentional account
- Berger, Gerstmayr-Hillen & Bülthoff (2009) Exp Brain Research — attended modalities receive higher weighting in self-motion estimates
- Rohe, Ehlis & Noppeney (2019) eNeuro — reliability-weighted integration modulated by top-down attention
- Frank et al. (2021) J Neuroscience — visual attention down-regulates glutamate in PIVC → neurochemical cross-modal suppression of vestibular processing
- Macaluso et al. (2016) Multisensory Research — the curious incident of attention in multisensory integration

ANSWER FRAMEWORK:
Yes — directing attention to the visual background in OCHART/SVV plausibly inflates visual weights. Talsma et al. (2010, 2015) and Koelewijn et al. (2010) demonstrate multisensory integration is not fully automatic: top-down attention modulates integration across multiple processing stages.

Berger et al. (2009) provided direct visual-vestibular evidence that attended modalities receive higher weighting in self-motion estimates, and Rohe et al. (2019) showed even Bayesian reliability weighting is shifted by attention. Mechanistically, Frank et al. (2021) showed visual attention down-regulates glutamate in PIVC, producing neurochemical cross-modal suppression of vestibular processing.

Importantly, the OCHART instructions required participants to judge letter orientation — this naturally focuses attention on the visual letter stimulus. A Flexible Adapter who can down-weight vestibular cues may be doing so partly through attentional allocation toward the visual frame. The Flexible/Rigid clusters could partly reflect individual differences in attentional set toward the visual frame, not (or in addition to) sensory reliability per se. A productive future direction: manipulate attentional instructions during OCHART (attend to letter vs. attend to body) and measure whether cluster membership interacts with instruction.`,

  'q54': `KEY CITATIONS (Field dependence):
- Witkin & Asch (1948) J Exp Psychology — foundational rod-and-frame: some individuals dominated by visual frame, others use body cues
- Witkin & Goodenough (1981) Cognitive Styles — field dependence/independence as stable perceptual dimension
- Isableu et al. (1997, 1998, 2010) Neurosci Letters; Human Movement Science; Neuroscience — field-independent individuals flexibly select reference frames; field-dependent show persistent visual capture
- Lopez et al. (2006) Neuroscience — field dependence predicts reweighting after vestibular insult
- Hudson, Lipsky & Banks (2006) Percept Psychophys — caution: field dependence is task-specific

KEY CITATIONS (Cognitive/personality predictors):
- Golding (2006) Personality & Individual Differences — neuroticism and anxiety as core trait predictors of VIMS
- Keshavarz, Murovec, Mohanathas & Golding (2023) Human Factors — VIMSSQ: combined model R²≤0.59
- Golding, Lukacova & Keshavarz (2023) Exp Brain Research — VIMS susceptibility correlates with neuroticism, anxiety, syncope
- Riccelli et al. (2017) Human Brain Mapping — neuroticism modulates brain visuo-vestibular and anxiety systems during virtual rollercoaster
- Pöhlmann et al. (2023) CHI 2023 — cognitive load reduces cybersickness

ANSWER FRAMEWORK:
"Flexible Adapter" / "Rigid Perceiver" maps closely onto the Witkin–Asch field-dependent/independent dimension. Isableu et al. (1997, 1998, 2010) demonstrated field-independent individuals flexibly select among reference frames, whereas field-dependent individuals show persistent visual capture even when maladaptive — exactly the "Rigid Perceiver" cluster pattern. Lopez et al. (2006) confirmed this dimension predicts reweighting after vestibular insult. Hudson et al. (2006) caution that field dependence is task-specific, so framing the clusters as a task-defined perceptual style rather than a universal trait is empirically defensible.

Beyond field dependence: sensory reweighting is one of multiple convergent predictors. Golding's MSSQ/VIMSSQ programme (2006, 2021, 2023) demonstrates personality questionnaires capture substantial variance, with neuroticism and anxiety as core trait predictors — converging with Riccelli et al.'s (2017) imaging evidence that neuroticism modulates visuo-vestibular and anxiety circuits. These personality predictors act partly independently of sensory weighting (amplifying symptom interpretation rather than sensory conflict), so a comprehensive model needs both reweighting parameters and trait/state psychological variables. The dissertation's SVV/OCHART clustering is a mechanistic operationalization of this field-dependence construct that complements (not replaces) questionnaire screening.`,
  'q55': `KEY CITATIONS:
- Ernst & Banks (2002) Nature — foundational MLE/reliability-weighted cue integration; vector sum provably optimal when cues are independent Gaussian with flat prior
- Fetsch, Turner, DeAngelis & Angelaki (2009) J Neuroscience — trial-by-trial reliability-based reweighting in heading discrimination
- Oman (1982, 1990) Acta Otolaryngol; Can J Physiol Pharmacol — Luenberger-observer/internal-model formulation; generates conflict signal predicting sickness
- Bos & Bles (1998) Brain Research Bulletin — Subjective Vertical Conflict (SVC) model
- Merfeld, Zupan & Peterka (1999) Nature — humans use internal models to estimate gravity
- Laurens & Droulez (2007); Laurens & Angelaki (2017) Biol Cybernetics; eLife — particle/Kalman-filter Bayesian models

ANSWER FRAMEWORK:
Organize the field hierarchically. Vector sum / linear weighted sum (the dissertation's choice) is the parsimonious static implementation of MLE when cue noises are independent and Gaussian and the prior is flat — provably equivalent to optimal Bayesian estimation in that special case (Ernst & Banks, 2002). MLE/Bayesian (Fetsch et al., 2009) generalizes to dynamic reliability re-weighting. The Kalman filter is the temporal extension assuming linear-Gaussian dynamics; particle filters (Laurens & Droulez, 2007) handle nonlinearity. The Observer/internal-model class (Oman 1982; Merfeld et al. 1999; Bos & Bles 1998) uses tuned feedback gains and explicitly generates a sensory-conflict signal — making it the natural framework for predicting sickness, not just perception.

Justify the vector-sum choice as appropriate at the SVV/OCHART task scale (static tilt judgments, no temporal dynamics required), while flagging that Kalman/observer extensions are needed to model dynamic cybersickness accumulation over time in VR.`,

  'q56': `KEY CITATIONS:
- Fitzpatrick & Day (2004) J Appl Physiol — foundational review; <5 mA bipolar mastoid; preferentially recruits irregular afferents
- Galvan-Garza et al. (2018) Brain Stimulation — optimal nGVS 200–500 µA peak; ~75% showed stochastic resonance (SR) curves at 0.2 Hz
- Mulavara et al. (2011) Exp Brain Research — sub-threshold (≤300 µA) zero-mean white-noise nGVS (0–30 Hz) effective for balance
- Keywan, Wuehr et al. (2018) Front Neurology — frequency-specific effects (0.5/1 Hz but not 0.2 Hz)
- Assländer et al. (2021) Scientific Reports — important null result; no SR effects on standing balance in young adults
- McLaren et al. (2023) Front Neurology — scoping review of nGVS parameters

ANSWER FRAMEWORK:
Walk through the parameter space: Waveform — DC produces tonic asymmetry/posture-tilt percepts; sinusoidal (0.05–1 Hz) produces controlled rotational percepts; stochastic (nGVS) typically 0–30 Hz bandlimited white noise exploits stochastic resonance (Galvan-Garza, 2018). Amplitude — sub-threshold (≤300–500 µA peak) avoids motion percepts while recruiting irregular afferents (Mulavara 2011; Goel 2015), with optimal amplitude individualized via threshold testing. Bilateral bipolar mastoid montage is standard; unilateral creates strong tilt asymmetries. Duration — acute effects within seconds; sustained adaptation with 30+ min protocols.

For a second study: (i) individualize amplitude to each participant's perceptual threshold rather than using a fixed group value; (ii) systematically vary frequency band (0.1–2 Hz vs 0–30 Hz); (iii) test sinusoidal motion-coupled GVS as an alternative to stochastic noise. Acknowledge SR's inconsistency (Assländer 2021) — the optimal EVS dose likely varies by participant, which ties directly to the Flexible/Rigid cluster distinction.`,

  'q57': `KEY CITATIONS:
- Golding (1998, 2006) Brain Research Bulletin; Personality & Individual Differences — MSSQ-short explains ~30% of variance
- Keshavarz, Murovec, Mohanathas & Golding (2023) Human Factors — VIMSSQ; combined model R² up to .59
- Weech, Varghese & Barnett-Cowan (2018) J Neurophysiology — multivariate sensorimotor prediction of cybersickness
- Chung & Barnett-Cowan (2023) Virtual Reality — SVV and cybersickness susceptibility linked through sensory reweighting
- Maneuvrier et al. (2023) Front VR — predicting cybersickness using head rotations and field (in)dependence
- Stanney, Fidopiastis & Foster (2020) Front Robotics & AI — IPD mismatch as primary driver of sex differences

ANSWER FRAMEWORK:
Describe a multi-tiered screening battery: (1) Self-report — MSSQ-short (Golding 1998, 2006) plus VIMSSQ-short (Keshavarz et al. 2023) together explain ~60% of variance. (2) Perceptual/cognitive — rod-and-frame or SVV/OCHART: the dissertation's metric directly indexes the visual-vestibular weighting that defines the Rigid Perceiver cluster (Weech 2018; Chung & Barnett-Cowan 2023). (3) Sensorimotor/physiological — pre-exposure postural sway, VOR gain, EVS-evoked sway response. Multimodal models reach 70–80% sensitivity/specificity.

The dissertation's SVV-based clustering is itself a novel screening proposal that outperforms single questionnaires by capturing the reweighting mechanism rather than only its symptomatic correlate. For deployment: route Flexible Adapters into immersive content first; route Rigid Perceivers through graded adaptation protocols with vignetting and reduced optic flow. Empirical sensitivity/specificity must be established with a held-out validation cohort before clinical translation.`,

  'q69': `KEY CITATIONS:
- Hoffman, Girshick, Akeley & Banks (2008) J Vision, 8(3):33 — foundational VAC demonstration; accommodation and vergence normally coupled (AC/A ratio ~4 Δ/D); HMDs fix accommodation at display distance while vergence varies with stereo depth, causing fatigue, diplopia, and discomfort
- Shibata, Kim, Hoffman & Banks (2011) J Vision, 11(7):9 — "zone of comfort": VAC discomfort is asymmetric; near disparities (<1 m) are more provocative than far; optimal viewing at ~1.3× the display distance
- Lambooij, Fortuin, Heynderickx & IJsselsteijn (2009) J Imaging Science & Technology — systematic review: VAC is a significant independent driver of visual discomfort and fatigue in stereoscopic displays
- Iskander, Würfel & Collins (2018) Clinical & Experimental Optometry — accommodation response lags and fails in HMDs, especially under dynamic gaze shifts
- Kim, Hwang, Sohn & Kim (2011) Optics Express — vergence-accommodation mismatch produces measurable changes in pupil size and accommodative response latency
- Padmanaban, Konrad, Stramer, Cooper & Wetzstein (2017) ACM SIGGRAPH — varifocal HMD prototype eliminating VAC; reduces discomfort ratings significantly
- Kramida (2016) IEEE TVCG — review of VAC solutions: varifocal displays, light-field displays, computational displays
- Stauffert et al. (2020) Front VR — latency and cybersickness; VAC compounds latency effects on oculomotor fatigue
- Draper, Viirre, Furness & Gawron (2001) Human Factors — image scale factor drives oculomotor adaptation; relevant because scale factor manipulates both VOR and vergence demand

ANSWER FRAMEWORK:
The vergence-accommodation conflict (VAC) is a fundamental oculomotor mismatch in stereoscopic HMDs: vergence (driven by binocular disparity) varies with rendered depth, but accommodation (the lens focus mechanism) remains fixed at the physical display distance — typically 1.5–2 m equivalent. Normally these are tightly coupled (AC/A ratio ~4 Δ/D), so forcing their dissociation taxes the ciliary muscle and may trigger asthenopia, diplopia, and visual fatigue (Hoffman et al. 2008; Lambooij et al. 2009).

Relationship to your paradigm: Your VR stimuli were rendered at display depth with stereo cues, so VAC was present as a constant background stressor throughout exposure. Three interactions with the visual-vestibular conflict are plausible: (1) Additive fatigue — VAC-induced oculomotor load compounds vestibular conflict, lowering the threshold for cybersickness onset, particularly in longer exposures. Shibata et al.'s (2011) zone-of-comfort work shows near-depth objects are most provocative — your optic flow may have included near-field elements that exacerbated this. (2) Vergence-VOR coupling — the VOR and vergence share brainstem circuitry (abducens interneurons drive both lateral rectus and medial rectus via the MLF). VAC-driven vergence instability could add noise to VOR gain measurements, confounding any VOR-based marker of vestibular conflict. (3) Independent driver concern — Allison's labs have published on VAC as a sickness driver. A pointed question will be whether the Flexible/Rigid group difference in FMS could partly reflect between-subject variation in VAC tolerance rather than (or in addition to) vestibular reweighting capacity.

Defensible response: within-subjects hardware was constant, so VAC cannot explain the individual-difference clustering. However, it is a legitimate uncontrolled variable; a future iteration should use a varifocal display (Padmanaban et al. 2017) or dynamic focus cues to isolate the vestibular reweighting effect from oculomotor fatigue. Also worth noting: the Quest 2's fixed IPD setting may have introduced additional vergence offset for participants whose IPD differed from the default, compounding the standard VAC with a static horizontal offset — a specific methodological point Allison is well-positioned to raise.`,

  'q58': `KEY CITATIONS:
- Garner, Hake & Eriksen (1956) Psychological Review — seminal "converging operations" paper
- Hüffmeier, Mazei & Schultze (2016) J Exp Social Psychology — reconceptualizing replication as a sequence: direct → close → constructive
- Munafò & Davey Smith (2018) Nature — robust research needs many lines of evidence
- Dida et al. (2021) PLoS ONE — idiosyncratic multisensory reweighting as common cause for motion sickness and adaptation
- Allred & Clark (2024/2025) Communications Engineering — "beneficial GVS" reduces sickness 26%; "detrimental GVS" increases it 56%

ANSWER FRAMEWORK:
Frame the three experiments as a Garner-style converging-operations program: a single theoretical claim — that cybersickness reflects individual differences in sensory-reweighting flexibility — is interrogated through methods with progressively stronger inferential commitments. Experiment 1 establishes a perceptual signature (gravity-ward SVV shift). Experiment 2 is a Hüffmeier-style "close" replication probing generalizability and revealing individual-difference moderators. Experiment 3 is a constructive/causal extension in which EVS perturbs the vestibular channel to test whether reweighting is truly the mechanism.

The null in Exp 2 and the EVS backfire in Exp 3 are not failures — they are falsification steps that constrain the theory. Dida et al. (2021) shows reweighting is idiosyncratic, explaining why group-level effects may not replicate. Allred & Clark (2025) shows EVS can increase sickness when misaligned with a participant's weight profile. Together, the three experiments argue for individual-profile-based interventions — a contribution only a programmatic design could produce.`,

  'q59': `KEY CITATIONS:
- Chung & Barnett-Cowan (2023) Virtual Reality — side-lying SVV before/after VR shows gravity-ward shift correlated with cybersickness
- Dyde, Jenkin & Harris (2006) Exp Brain Research — OCHART introduction; SVV gravity-dominant, PU body-dominant
- Mittelstaedt (1983, 1986) Naturwissenschaften; Acta Psychologica — original three-vector (gravity + body + visual) sum model
- De Vrijer, Medendorp & Van Gisbergen (2008) J Neurophysiology — Bayesian re-formalisation of idiotropic-vector model

ANSWER FRAMEWORK:
Chung & Barnett-Cowan (2023) used side-lying SVV before/after low/high-intensity VR and reported a gravity-ward shift, interpreted within the Dyde–Mittelstaedt three-vector model as up-weighting of the gravitational vector relative to the idiotropic body vector.

The dissertation goes beyond in three ways: (i) It adds OCHART as a complementary measure — because OCHART is body-dominant and SVV is gravity-dominant (Dyde et al., 2006), divergence between the two tasks dissociates which vector is being reweighted. (ii) It fits the vector-sum model explicitly to estimate individual weights, moving from descriptive shift to mechanistic parameter estimation. (iii) It adds an interventional EVS arm to test the mechanism causally — something the original correlational study could not do. This is textbook "extension" replication: preserve the theoretical claim, vary operationalization, add manipulations the original could not perform.`,

  'q60': `KEY CITATIONS:
- Fisher, Medaglia & Jeronimus (2018) PNAS — non-ergodicity: between-subject variances 2–4× within-subject variances; group effects do not generalize to individuals
- Hedge, Powell & Sumner (2018) Behavior Research Methods — the reliability paradox: constructs defined by between-subject variance show low test-retest reliability
- Kievit et al. (2013) Frontiers in Psychology — Simpson's paradox in psychological science
- Dida et al. (2021) PLoS ONE — idiosyncratic reweighting as common cause; direct domain precedent
- Allred & Clark (2024/2025) Communications Engineering — principled mechanistic reason EVS can backfire

ANSWER FRAMEWORK:
The headline theoretical take-home: a single mechanism (sensory reweighting) produces heterogeneous, even opposite, group-level signatures depending on individual prior weights and task demands — a textbook Simpson/non-ergodicity scenario (Kievit et al. 2013; Fisher et al. 2018).

Exp 2's null group effect does not falsify the theory. The Hedge et al. (2018) reliability paradox predicts exactly this: when between-subject variance dominates (as it does in reweighting), designs powered for group means will produce null or unstable effects. Dida et al. (2021) provides direct precedent that motion-sickness reweighting is idiosyncratic. Exp 3's backfire is consistent with Allred & Clark's (2025) demonstration that vestibular stimulation can either reduce or amplify conflict depending on alignment with each participant's existing weight profile.

The three experiments therefore argue for a shift from one-size-fits-all VR mitigation toward individual-profile-based interventions — a substantive theoretical contribution that pure replication could not have produced.`,

  'q61': `KEY CITATIONS:
- Witkin & Asch (1948); Witkin et al. (1962) — foundational field dependence/independence; rod-and-frame test
- Isableu et al. (1997, 2010) Exp Brain Research; Neuroscience — field-independent individuals flexibly select reference frames; field-dependent show persistent visual capture
- Keshavarz, Andrievskaia & Berti (2025) J Vestibular Research — field dependence predicts VIMS susceptibility
- Powers, Hillock & Wallace (2009) J Neuroscience — perceptual training narrows the temporal binding window (TBW)
- Lupo & Barnett-Cowan (2018) J Neurophysiology — relationship between vestibular sensitivity and multisensory temporal integration

ANSWER FRAMEWORK:
"Flexible Adapter / Rigid Perceiver" is best defended as a modern, computationally explicit re-statement of two convergent traditions. The field-dependence tradition (Witkin et al., 1962; Isableu et al., 1997, 2010): field-independent individuals flexibly select among reference frames, whereas field-dependent individuals show persistent visual capture even when maladaptive — exactly the Rigid Perceiver pattern. This tradition has 70+ years of empirical support and known links to motion sickness susceptibility (Keshavarz et al., 2025).

The temporal binding window tradition (Powers et al., 2009; Lupo & Barnett-Cowan, 2018): individuals with wider TBWs bind discrepant cues more indiscriminately — analogous to a Rigid Perceiver who fails to disengage habitual weighting when context changes. The dissertation's contribution is to operationalize this latent dimension via SVV/OCHART/EVS reweighting dynamics (change scores, not static rod-and-frame), giving a process-level construct rather than a static cognitive-style label.`,

  'q62': `KEY CITATIONS:
- Blanke (2012) Nature Reviews Neuroscience — multisensory brain mechanisms of bodily self-consciousness
- Pfeiffer, Serino & Blanke (2014) Front Integrative Neuroscience — vestibular system as spatial reference for bodily self-consciousness
- Lopez (2013) Front Integrative Neuroscience — vestibular disorders and bodily self-consciousness
- Barnett-Cowan & Harris (2009) Exp Brain Research — vestibular stimuli must precede others by ~160 ms to be perceived as simultaneous
- Ferrè, Lopez & Haggard (2014) Cognitive Neuropsychology — anchoring the self to the body: vestibular contribution to sense of self

ANSWER FRAMEWORK:
Bodily self-consciousness has spatial components — self-location, first-person perspective — that depend on vestibular signals as a world-centred reference (Pfeiffer et al., 2014; Blanke, 2012). Vestibular disorders, caloric stimulation, and GVS all alter body ownership and self-location (Lopez, 2013; Ferrè et al., 2014). VR uniquely interrogates this because it dissociates visual self-motion from vestibular signals while preserving the rest of the body schema.

The dissertation's SVV/OCHART measures index the spatial reference component (gravity-relative self-orientation), and EVS perturbs the very signal that anchors the self to gravity. Barnett-Cowan & Harris (2009) and Lupo & Barnett-Cowan (2018) show vestibular signals are perceptually delayed and bound within a temporal window — implicating timing as well as weighting in self-coherence. Cybersickness can therefore be re-framed as a transient destabilization of vestibular-anchored bodily self-consciousness, and the Flexible/Rigid distinction as individual variation in how robustly that anchor is maintained under conflict.`,

  'q63': `KEY CITATIONS:
- Staines, Black, Graham & McIlroy (2002) NeuroImage — task-relevant modulation of S1 via prefrontal gating
- Bolton & Staines (2011) Neuropsychologia — cTBS to DLPFC disrupts attention-based modulation of tactile stimuli
- Brown, Neva, Mang et al. (2015) Exp Brain Research — movement-related gating modulated by cTBS over DLPFC and S1
- Fitzpatrick & Day (2004) J Appl Physiol — vector-sum model of vestibular afferent input to balance; context-dependent reflex attenuation
- Mouchnino et al. (2023) J Neurophysiology — vestibular-hypofunction patients show enhanced SEPs to foot cutaneous stimulation (body cue up-weighting)
- Ferrè, Bottini & Haggard (2011, 2013) Brain Struct Funct; Neuropsychologia — GVS modulates N80 SEP component; brief GVS pulses gain-modulate tactile sensitivity

ANSWER FRAMEWORK:
Down-weighting of body cues in the Flexible Adapter cluster likely manifests at two levels. Spinally, GVS-evoked vestibulospinal reflex amplitudes are context-dependent: when other modalities provide reliable balance information, reflex EMG and sway responses attenuate (Fitzpatrick & Day 2004), consistent with central gain control on vestibulospinal coupling.

Cortically, body-cue down-weighting maps onto the prefrontal–S1/OP gating circuitry from Dr. Staines' own work: DLPFC–S1 top-down modulation gates somatosensory input by task relevance (Staines et al. 2002; Bolton & Staines 2011), and movement-related gating is similarly modulated (Brown et al. 2015). The parietal operculum (OP2/PIVC) is the convergence node where vestibular GVS and somatosensory N80 inputs interact (Ferrè et al. 2011, 2013). Predict that Flexible Adapters show stronger prefrontal-mediated S1 gating during VR exposure and reduced GVS-evoked SEP modulation, while vestibulopathy patients show the opposite (up-weighted S1 SEPs; Mouchnino et al. 2023).`,

  'q64': `KEY CITATIONS:
- Brandt, Dieterich & Danek (1994) Ann Neurol — unilateral supratentorial infarcts cause SVV tilts
- Baier et al. (2012, 2022) Neurology; Eur J Neurol — insular/IFG lesions → SVV tilt; insular involvement predicts chronic SVV tilt (poor compensation)
- Cousins et al. (2014) PLoS ONE — visual dependency after vestibular neuritis predicts persistent dizziness
- Medendorp et al. (2018) Front Neurology — Bayesian modelling: bilateral vestibular loss patients reweight 2–3× more than controls
- Dieterich & Brandt (2008, 2018) Brain; Curr Opin Neurol — cortical hypometabolism in PIVC, hypermetabolism in visual/somatosensory cortex after peripheral lesions
- Peterka (2002) J Neurophysiology — foundational sensory reweighting model in postural control

ANSWER FRAMEWORK:
Cortical lesions of posterior insula/parietal operculum and TPJ produce SVV tilts (Brandt et al. 1994; Baier et al. 2012, 2022); insular involvement specifically predicts chronic SVV tilt — i.e., poor cortical compensation. Peripheral lesions (vestibular neuritis, BVL) produce acute SVV deviations that typically compensate through sensory reweighting toward visual and somatosensory cues (Medendorp et al. 2018; Dieterich & Brandt 2008).

Critically, excessive visual reweighting (visual dependence) after vestibular neuritis predicts persistent dizziness (Cousins et al. 2014) — a clinical phenotype resembling a maladaptive Flexible Adapter. Conversely, Rigid Perceivers who fail to down-weight unreliable body cues parallel patients with chronic uncompensated SVV. The dissertation's SVV/OCHART/EVS paradigm therefore has translational diagnostic potential as a non-invasive psychophysical index of cortical vestibular reweighting capacity, identifying patients at risk for chronic vestibular symptoms or poor compensation.`,

  'q65': `KEY CITATIONS:
- MacDougall et al. (2002) Exp Brain Research — GVS-induced tonic ocular torsion ≤5 mA; maintained during sustained stimulation
- Schneider, Glasauer & Dieterich (2002) J Neurophysiology — torsion gain ~0.93°/mA (τ ≈ 1.74 s); torsional nystagmus
- Jahn et al. (2003) Clinical Neurophysiology — static torsion 1–6° at 1–3 mA
- Otero-Millan, Treviño & Kheradmand (2019) Physiological Reports — OCR gain ~0.1–0.25 during lateral tilts
- Pomante, Selen & Medendorp (2020) J Neurophysiology — time course of SVV during sustained OKS and GVS (~4 s)
- Volkening et al. (2014) Neuroscience Letters — SVV shifts persist as after-effects when VOR has returned to baseline

ANSWER FRAMEWORK:
GVS/EVS produces tonic ocular torsion of 1–6° toward the anode, superimposed torsional nystagmus (~0.5–3°/s SPV), and small horizontal components. However, these effects are largely suppressed by visual fixation, leaving torsion as the principal residual confound. Three lines of evidence support dissociation between EVS-evoked eye movements and PU shifts: (1) The time course of SVV change under GVS (~4 s; Pomante et al. 2020) differs from torsional nystagmus, and SVV shifts persist when fixation suppresses nystagmus. (2) OCR gain is low (0.1–0.25) relative to perceived tilt; SVV and OCR can change independently (Otero-Millan et al. 2019). (3) Perceptual upright shifts persist as after-effects after VOR returns to baseline (Volkening et al. 2014), indicating central recalibration beyond retinal contribution.

The OCHART relies on letter-shape processing (ventral-stream) rather than precise retinal alignment, making it relatively robust to small torsional offsets. Future work should add VOG to directly quantify residual torsion contributions.`,

  'q66': `KEY CITATIONS:
- Riccio & Stoffregen (1991) Ecological Psychology — postural instability precedes and accompanies motion sickness onset
- Levac, Huber & Sternad (2019) J NeuroEngineering & Rehab — learning and transfer of complex motor skills in VR
- Holden (2005) CyberPsychology & Behavior — clinical VR rehab studies report low CS incidence with seated, low-flow paradigms
- Kourtesis et al. (2024) Multimodal Technologies & Interaction — cybersickness intensity impairs verbal working memory and psychomotor RT
- Weech, Kenny & Barnett-Cowan (2019) Front Psychology — presence and cybersickness in VR are negatively related

ANSWER FRAMEWORK:
VR-based motor training relies on intact sensorimotor integration, but cybersickness is itself a manifestation of sensory conflict and directly threatens motor learning through three mechanisms: (1) Postural destabilization — CS precedes and accompanies postural instability (Riccio & Stoffregen 1991), degrading whole-body coordination. (2) Cognitive/psychomotor slowing — CS reduces error detection and reaction time during immersion (Kourtesis et al. 2024). (3) Maladaptive sensory bias — down-weighting of disturbed channels may bias what gets learned; skills acquired under conflict may fail to transfer when conflict is removed (Levac et al. 2019).

The Rigid Perceiver cluster being more CS-susceptible suggests a screening tool: clients failing to flexibly down-weight conflicting visual cues may be poor candidates for immersive VR motor rehabilitation, or may benefit from sensory-reweighting adaptation protocols prior to training. Clinical VR-rehab studies report low CS incidence likely because seated, low-flow paradigms are used (Holden 2005) — the implication being that immersive active-locomotion VR rehab needs the Flexible/Rigid screen.`,

  'q67': `KEY CITATIONS:
- Keshavarz & Hecht (2011) Human Factors — FMS validation; single-item 0–20 verbal scale designed for during-exposure repeated measurement
- Kennedy et al. (1993) Int J Aviation Psychology — SSQ: 16-item, post-hoc, factor-weighted (Nausea/Oculomotor/Disorientation)
- Bos, MacKinnon & Patterson (2005) Aviat Space Environ Med — MISC: single-item ordinal scale with explicit symptom anchors
- Reinhard et al. (2017) Transportation Research Part F — FMS max-scores correlate strongly (r often >.6–.8) with SSQ total
- Stanney, Kennedy & Drexler (1997) Proc HFES — VR has different SSQ subscale profile than simulator sickness (more disorientation)

ANSWER FRAMEWORK:
The FMS was developed to fill a gap left by the SSQ: the SSQ is a 16-item post-hoc instrument profiling symptoms across Nausea, Oculomotor, and Disorientation subscales but cannot track time course, while the FMS is a single-item 0–20 verbal scale designed for during-exposure repeated measurement. Validation studies (Keshavarz & Hecht 2011; Reinhard et al. 2017) show FMS max-scores correlate strongly (r often >.6–.8) with SSQ total. The MISC is an alternative single-item ordinal scale with explicit symptom anchors; like FMS, it trades multi-dimensional profiling for temporal resolution.

The principal trade-off is psychometric: FMS sacrifices multi-dimensional symptom profiling for temporal resolution and minimal participant burden. Stanney et al. (1997) showed VR cybersickness has a different symptom profile than simulator sickness (more disorientation, less oculomotor), so reliance on a single-dimension FMS is defensible in VR contexts and converges well with sensory-conflict mechanisms emphasizing nausea/disorientation onset dynamics. Future work could use FMS for real-time tracking plus a post-exposure SSQ to capture the full symptom profile.`,

  'q68': `KEY CITATIONS:
- Krokos & Varshney (2022) Virtual Reality — increased delta, theta, alpha power correlated with cybersickness; pupillometric variation precedes nausea 30–60 s
- Gale et al. (2016) J Neurophysiology — natural vestibular stimulation evokes alpha-band desynchronization over parieto-temporal sites
- Kammermeier, Singh & Bötzel (2017) Front Neurology — GVS evokes potentials at 25, 35, 50, 80 ms in anterior insula and posterior operculum
- Li et al. (2020/2021) — reduced frontal–left-parietal functional connectivity during cybersickness
- Frank et al. (2021) J Neuroscience — visual attention down-regulates glutamate in PIVC; alpha-band modulation
- Chang, Billinghurst & Yoo (2023) Virtual Reality — brain activity during cybersickness: scoping review

ANSWER FRAMEWORK:
EEG offers a real-time non-invasive window onto cybersickness theoretically motivated by sensory-conflict and reweighting frameworks. Kammermeier et al. (2017) establish EEG can capture vestibular-evoked cortical potentials from anterior insula/posterior operculum at 20–80 ms post-EVS — directly applicable to the EVS paradigm.

During cybersickness, the most replicated spectral markers are increased frontal delta/theta and changes in parietal/occipital alpha (Krokos & Varshney 2022; Chang et al. 2023), interpreted as sensory-conflict-driven inhibition of conflicting visual processing. Frontoparietal functional-connectivity decreases (Li et al. 2020) suggest disengagement of attentional/cognitive control. For Flexible vs Rigid clusters, predicted EEG signatures: Flexible Adapters should show stronger alpha desynchronization over parieto-temporal sites during conflict onset (Gale et al. 2016; Frank et al. 2021), reflecting more active suppression of vestibular signals. Rigid Perceivers should show sustained frontal theta — a neural signature of unresolved conflict. A future direction: combine EVS-evoked cortical responses (~25–80 ms) with ongoing oscillatory markers to dissociate sensory-conflict, attentional-disengagement, and interoceptive components.`,

};

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

// ── Dictionary ───────────────────────────────────────────────────────────────
const DEFAULT_DICTIONARY = [
  // ── Core Dissertation Concepts ───────────────────────────────────────────
  { term: 'Sensory Reweighting', category: 'Core Concept', definition: 'The CNS dynamically adjusts how much it relies on each sensory input (visual, vestibular, proprioceptive) based on the momentary reliability of each signal. Unreliable signals are down-weighted; more reliable ones are up-weighted. The core mechanism studied in the dissertation.' },
  { term: 'Cybersickness', category: 'Core Concept', definition: 'Nausea, disorientation, and discomfort induced by immersive virtual reality. Shares symptoms with motion sickness but arises from visual-vestibular conflict without physical motion. Measured here using the FMS and SSQ.' },
  { term: 'Visually Induced Motion Sickness (VIMS)', category: 'Core Concept', definition: 'Motion sickness triggered by visual motion cues in the absence of (or incongruent with) physical motion. Encompasses cybersickness, simulator sickness, and carsickness in passengers.' },
  { term: 'Flexible Adapter', category: 'Core Concept', definition: 'One of two participant clusters identified in the dissertation. Flexible Adapters successfully down-weight conflicting vestibular/body cues, show smaller SVV/PU shifts, and tolerate VR with less cybersickness.' },
  { term: 'Rigid Perceiver', category: 'Core Concept', definition: 'The second participant cluster. Rigid Perceivers maintain habitual cue weights despite VR-induced conflict, show larger SVV/PU shifts, and report greater cybersickness. Analogous to field-dependent individuals in the Witkin tradition.' },
  { term: 'Vector Sum Model', category: 'Core Concept', definition: 'The dissertation\'s analytic model: Perceptual Upright (PU) = v⃗ + b⃗ + g⃗, where v is the visual vector, b is the body/idiotropic vector, and g is the gravitational vector. Weights are estimated by fitting the model to SVV/OCHART data using Marquardt-Levenberg optimisation.' },
  { term: 'Perceptual Upright (PU)', category: 'Core Concept', definition: 'The direction an observer perceives as "up," estimated via OCHART. A weighted combination of gravitational, body-axis (idiotropic), and visual cues. Body-dominant (cf. SVV, which is gravity-dominant).' },
  { term: 'Converging Operations', category: 'Core Concept', definition: 'A research strategy (Garner, Hake & Eriksen, 1956) in which multiple methodologically independent experiments test the same theoretical claim. The dissertation\'s three-experiment design is framed this way: correlational → replication → causal intervention.' },

  // ── Measures & Tasks ─────────────────────────────────────────────────────
  { term: 'Subjective Visual Vertical (SVV)', category: 'Measure', definition: 'A psychophysical task in which participants align a luminous bar to perceived vertical while in darkness. Gravity-dominant: heavily weighted by otolith signals. Used pre/post VR to detect vestibular cue-weight change.' },
  { term: 'OCHART', category: 'Measure', definition: 'Oriented CHAracter Recognition Test. Participants identify a briefly presented letter at various orientations. Perceptual Upright is the orientation at which recognition peaks. Body-dominant (idiotropic) — complementary to SVV.' },
  { term: 'Fast Motion Sickness Scale (FMS)', category: 'Measure', definition: 'A single-item 0–20 verbal rating scale for real-time, repeated sickness measurement during VR exposure. Validated by Keshavarz & Hecht (2011). Trades symptom profiling for temporal resolution.' },
  { term: 'Simulator Sickness Questionnaire (SSQ)', category: 'Measure', definition: 'A 16-item post-exposure questionnaire yielding Nausea, Oculomotor, and Disorientation subscale scores (Kennedy et al., 1993). Gold standard for simulator/VR sickness profiling; administered post-exposure.' },
  { term: 'MSSQ (Motion Sickness Susceptibility Questionnaire)', category: 'Measure', definition: 'Self-report questionnaire assessing history of motion sickness across transport and VR contexts (Golding, 1998). Short form explains ~30% of variance in sickness susceptibility.' },
  { term: 'VIMSSQ', category: 'Measure', definition: 'Visually Induced Motion Sickness Susceptibility Questionnaire (Keshavarz et al., 2023). VR-specific trait measure; combined with MSSQ explains ~60% of susceptibility variance.' },
  { term: 'Ocular Counter-Roll (OCR)', category: 'Measure', definition: 'Torsional rotation of the eyes in response to head/body roll. Low gain (~0.1–0.25) relative to perceived tilt. Shares otolith noise with SVV but can dissociate from it — relevant to interpreting EVS-induced torsion during OCHART.' },

  // ── Vestibular & Sensory Physiology ──────────────────────────────────────
  { term: 'Vestibular System', category: 'Physiology', definition: 'Inner-ear sensory system comprising the otolith organs (utricle, saccule) and semicircular canals. Detects linear acceleration/gravity (otoliths) and angular velocity (canals). The primary signal source manipulated by EVS.' },
  { term: 'Otolith Organs', category: 'Physiology', definition: 'Utricle and saccule of the inner ear. Detect linear acceleration and static head tilt relative to gravity. Critical for SVV. EVS preferentially drives irregular otolith afferents.' },
  { term: 'Semicircular Canals', category: 'Physiology', definition: 'Three fluid-filled loops in the inner ear detecting rotational head movements in three planes. Provide angular velocity signals to the vestibulo-ocular reflex and central orientation processing.' },
  { term: 'Vestibulo-Ocular Reflex (VOR)', category: 'Physiology', definition: 'Reflex eye movement that stabilises gaze during head motion by rotating the eyes opposite to head rotation. VOR gain (eye velocity / head velocity) can shift after VR exposure, indexing internal-model updating. Measured via video head-impulse test (vHIT).' },
  { term: 'Proprioception', category: 'Physiology', definition: 'Sensory information from muscles, tendons, and joints about body position and movement. Acts as a "body cue" in the vector sum model; can be down-weighted when vestibular/visual cues are dominant.' },
  { term: 'Idiotropic Vector', category: 'Physiology', definition: 'A perceived vertical component aligned with the body\'s long axis, independent of gravity or vision (Mittelstaedt, 1983). One of the three vectors in the PU model. Dominant for OCHART; smaller for SVV.' },
  { term: 'Gravitational Vector', category: 'Physiology', definition: 'The component of perceived vertical driven by otolith-sensed gravity. Dominant for SVV in upright and side-lying postures. The weight of this vector shifts post-VR in Flexible Adapters.' },
  { term: 'Irregular Vestibular Afferents', category: 'Physiology', definition: 'A subset of vestibular nerve fibres with irregular spontaneous firing rates. More sensitive to galvanic (electrical) stimulation than regular afferents. Preferentially recruited by GVS/EVS.' },

  // ── Stimulation & Intervention ────────────────────────────────────────────
  { term: 'Electrical Vestibular Stimulation (EVS)', category: 'Stimulation', definition: 'Application of small electrical currents to the mastoid processes to stimulate vestibular afferents. In the dissertation: bilateral bipolar stochastic (noisy) waveform intended to reduce vestibular reliability and promote reweighting. Result: increased cybersickness (Exp 3).' },
  { term: 'Galvanic Vestibular Stimulation (GVS)', category: 'Stimulation', definition: 'Synonym for EVS. Drives vestibular afferents via DC or AC currents at the mastoids. DC GVS causes directional tilt/sway percepts; stochastic GVS (nGVS) is used for stochastic resonance applications.' },
  { term: 'Noisy GVS (nGVS)', category: 'Stimulation', definition: 'Sub-threshold, zero-mean, bandlimited white noise GVS (typically 0–30 Hz, ≤300–500 µA). Intended to exploit stochastic resonance to enhance vestibular sensitivity and improve balance. Effect on cybersickness is inconsistent.' },
  { term: 'Stochastic Resonance', category: 'Stimulation', definition: 'A phenomenon in which the addition of an optimal level of noise enhances detection of a weak signal. The theoretical basis for nGVS as a vestibular enhancer. Optimal amplitude is individualized; SR effects on balance are inconsistent (Assländer et al., 2021).' },
  { term: 'Transcranial Magnetic Stimulation (TMS)', category: 'Stimulation', definition: 'Non-invasive brain stimulation using rapidly changing magnetic fields to induce currents in cortical tissue. cTBS (continuous theta-burst) over right TPJ/supramarginal gyrus produces immediate SVV tilts, demonstrating causal role in verticality estimation.' },
  { term: 'tDCS', category: 'Stimulation', definition: 'Transcranial direct current stimulation. Modulates cortical excitability via weak DC currents. Anodal tDCS over right TPJ has been shown to modulate vestibular spatial encoding and VOR suppression.' },

  // ── Brain Regions ────────────────────────────────────────────────────────
  { term: 'PIVC (Parietal Insular Vestibular Cortex)', category: 'Neuroanatomy', definition: 'Core cortical vestibular region in the posterior insula/parietal operculum. In humans, its homologue is OP2 (parietal operculum area 2). Activated by GVS and caloric stimulation; deactivated by visual motion (reciprocal visuo-vestibular inhibition).' },
  { term: 'OP2 / Parietal Operculum', category: 'Neuroanatomy', definition: 'Human homologue of macaque PIVC, identified by ALE meta-analysis (zu Eulenburg et al., 2012). Located in posterior insula / retroinsular cortex. Hub of the cortical vestibular network; shows right-hemisphere dominance.' },
  { term: 'TPJ (Temporoparietal Junction)', category: 'Neuroanatomy', definition: 'Region at the junction of temporal, parietal, and occipital cortices. TMS/cTBS here disrupts SVV estimation. Involved in spatial reference frames, body ownership, and self-location. Right TPJ dominant for vestibular spatial processing.' },
  { term: 'MSTd', category: 'Neuroanatomy', definition: 'Medial Superior Temporal area, dorsal division. Encodes visual optic flow and vestibular heading signals. Site of trial-by-trial reliability-based cue reweighting (Fetsch et al., 2009, 2011). Part of the dorsal visual stream.' },
  { term: 'DLPFC (Dorsolateral Prefrontal Cortex)', category: 'Neuroanatomy', definition: 'Prefrontal region involved in top-down modulation of sensory processing. Staines\' work shows DLPFC gates somatosensory (S1) input by task relevance — relevant to how body-cue down-weighting might be implemented cortically.' },

  // ── Models & Theories ────────────────────────────────────────────────────
  { term: 'Sensory Conflict Theory', category: 'Theory', definition: 'The dominant theory of motion/cybersickness (Reason & Brand, 1975): sickness arises when sensory signals disagree with each other or with an internal prediction. The "neural store" must update its expectations, and this mismatch drives nausea.' },
  { term: 'Maximum Likelihood Estimation (MLE)', category: 'Theory', definition: 'Optimal cue combination strategy: each cue is weighted by its relative reliability (inverse variance). When cues are independent Gaussian and prior is flat, MLE is equivalent to the weighted vector sum (Ernst & Banks, 2002).' },
  { term: 'Bayesian Cue Integration', category: 'Theory', definition: 'A framework in which prior beliefs and sensory likelihoods are combined using Bayes\' rule to yield a posterior estimate. Generalizes MLE to non-Gaussian distributions and dynamic reliability. Fetsch et al. (2009) applied this to visual-vestibular heading.' },
  { term: 'Observer Model / Internal Model', category: 'Theory', definition: 'A class of sensory conflict models (Oman 1982, 1990; Merfeld et al. 1999) using a Luenberger observer or Kalman filter. The brain maintains an internal model of expected sensory input; mismatch generates a conflict signal that drives sickness.' },
  { term: 'Subjective Vertical Conflict (SVC) Model', category: 'Theory', definition: 'Bos & Bles (1998) extension of the observer model: sickness is driven by mismatch between the estimated and expected directions of gravity. Directly links the SVV measurement to sickness magnitude.' },
  { term: 'DVP (Difference between Virtual and Physical head pose)', category: 'Theory', definition: 'Palmisano, Allison & Kim (2020) framework unifying lag, jitter, and scale factor as drivers of cybersickness. DVP predicts sickness better than any single parameter alone.' },
  { term: 'Postural Instability Theory', category: 'Theory', definition: 'Riccio & Stoffregen (1991): motion sickness occurs when sensory conflict prevents the CNS from maintaining postural stability. Postural instability precedes nausea onset and is a proximal cause rather than a symptom.' },
  { term: 'Field Dependence / Independence', category: 'Theory', definition: 'Witkin & Asch (1948): individuals differ in how much they rely on the visual frame vs body cues to judge orientation. Field-dependent individuals are dominated by the visual frame (analogous to Rigid Perceivers); field-independent individuals can disengage from it.' },
  { term: 'Temporal Binding Window (TBW)', category: 'Theory', definition: 'The time window within which multisensory signals are perceived as simultaneous and integrated. Wider TBW → more indiscriminate binding of discrepant cues — analogous to a Rigid Perceiver failing to disengage habitual weighting. Lupo & Barnett-Cowan (2018) links TBW to vestibular sensitivity.' },
  { term: 'Non-ergodicity', category: 'Theory', definition: 'The property that group-level statistics do not generalize to individual-level dynamics (Fisher et al., 2018). Explains why Exp 2 of the dissertation showed a null group effect even if reweighting is a valid individual-level phenomenon.' },
  { term: 'Reliability Paradox', category: 'Theory', definition: 'Hedge, Powell & Sumner (2018): constructs defined by between-subject variance (like reweighting capacity) show low test-retest reliability in standard designs — because designs powered for group means do not have enough variance to detect stable individual differences.' },

  // ── Statistics & Methods ──────────────────────────────────────────────────
  { term: 'k-means Clustering', category: 'Statistics', definition: 'Unsupervised algorithm partitioning observations into k groups by minimising within-cluster sum of squares. Used in the dissertation to identify Flexible Adapter and Rigid Perceiver clusters from cue-weight change scores.' },
  { term: 'Marquardt-Levenberg Optimisation', category: 'Statistics', definition: 'A nonlinear least-squares algorithm combining gradient descent and Gauss-Newton methods. Used to fit the vector sum model (v⃗ + b⃗ + g⃗) to individual SVV/OCHART data and estimate cue weights.' },
  { term: 'Kruskal-Wallis Test', category: 'Statistics', definition: 'Non-parametric one-way ANOVA equivalent. Used in the dissertation (Ch. 3) to verify no significant study differences in cue weights or FMS across experiments pooled cross-study (all p > .07), justifying cross-experiment analysis.' },
  { term: 'Converging Operations (statistical)', category: 'Statistics', definition: 'Using multiple independent measurements of the same construct to triangulate its existence. In the dissertation: SVV + OCHART + FMS + EVS responses all converging on the same Flexible/Rigid typology.' },
  { term: 'Effect Size (r)', category: 'Statistics', definition: 'Standardised measure of effect magnitude. Reported as r (correlation coefficient) for non-parametric tests. EVS worsening cybersickness: p = .001, r = .67 — a large effect by conventional thresholds (r > .5).' },

  // ── Technology ───────────────────────────────────────────────────────────
  { term: 'Head-Mounted Display (HMD)', category: 'Technology', definition: 'A display device worn on the head delivering stereoscopic images to each eye for immersive VR. The dissertation used the Meta Quest 2. Key parameters: FOV, refresh rate, motion-to-photon latency, resolution, IPD.' },
  { term: 'Motion-to-Photon Latency (MTP)', category: 'Technology', definition: 'The delay between a head movement and the corresponding display update. A key engineering driver of cybersickness. Recommendation: < 20 ms (Stauffert et al., 2020). Latency variability (jitter) may be more provocative than absolute magnitude (Kinsella et al., 2016).' },
  { term: 'Optic Flow', category: 'Technology', definition: 'The pattern of apparent motion of objects in the visual field produced by the relative motion between observer and environment. High-density optic flow in VR drives vection and can induce cybersickness, especially when mismatched with vestibular signals.' },
  { term: 'Vection', category: 'Technology', definition: 'The compelling illusion of self-motion induced by visual flow, without corresponding physical motion. A key proximal trigger of visually induced motion sickness.' },
  { term: 'Biocybernetic Loop', category: 'Technology', definition: 'A closed-loop system that monitors physiological signals (EDA, HR, EEG, gaze) in real-time and adapts the VR environment to the user\'s state. The applied vision for the biomarker research cited in the Allison Q3 answer framework.' },
  { term: 'IPD (Interpupillary Distance)', category: 'Technology', definition: 'The distance between the centres of the pupils. HMDs have fixed or adjustable IPD settings. Mismatch between physical IPD and HMD setting causes binocular disparity errors and is a primary driver of sex differences in cybersickness (Stanney et al., 2020).' },
  { term: 'EEG (Electroencephalography)', category: 'Technology', definition: 'Non-invasive scalp recording of electrical brain activity. Relevant to cybersickness research as alpha desynchronization, frontal theta increases, and reduced frontoparietal connectivity are associated with sickness onset. Vestibular-evoked potentials (p38, N80) recorded at ~20–80 ms post-EVS.' },
  // ── Oculomotor ──────────────────────────────────────────────────────────
  { term: 'Vergence', category: 'Oculomotor', definition: 'Disconjugate eye movement that rotates both eyes inward (convergence) or outward (divergence) to maintain single binocular vision at different depths. Driven by retinal disparity. In HMDs, vergence demand is set by the rendered stereo depth of objects, independent of where the lens is focused.' },
  { term: 'Accommodation', category: 'Oculomotor', definition: 'The eye\'s ability to change optical power by adjusting the curvature of the crystalline lens, bringing objects at different distances into sharp focus. Controlled by the ciliary muscle. In HMDs, the display is at a fixed physical distance (~1.5–2 m equivalent), so accommodation is anchored there regardless of rendered scene depth.' },
  { term: 'Vergence-Accommodation Conflict (VAC)', category: 'Oculomotor', definition: 'The fundamental oculomotor mismatch in stereoscopic HMDs: vergence varies with rendered stereo depth while accommodation stays fixed at the display distance. Normally tightly coupled (AC/A ratio ~4 Δ/D), their forced dissociation causes ciliary fatigue, asthenopia, diplopia, and contributes to cybersickness. A key engineering concern raised by Allison (q69).' },
  { term: 'AC/A Ratio', category: 'Oculomotor', definition: 'Accommodative Convergence to Accommodation ratio (~4 prism dioptres per dioptre in normal vision). Describes how much vergence change accompanies a unit change in accommodation. The tight coupling this represents is what makes the vergence-accommodation conflict in HMDs oculomotorically taxing.' },
  { term: 'Zone of Comfort', category: 'Oculomotor', definition: 'The range of stereoscopic disparity in an HMD within which the vergence-accommodation conflict remains tolerable and viewing is comfortable. Defined empirically by Shibata, Kim, Hoffman & Banks (2011, J Vision): roughly ±0.2–0.5 D around the display focal distance. Near disparities (objects closer than the display) are more provocative than far disparities.' },
  { term: 'Binocular Disparity', category: 'Oculomotor', definition: 'The difference between the retinal images of the left and right eyes caused by their horizontal separation (~6.5 cm). The primary cue for stereoscopic depth perception. In HMDs, rendered disparity drives vergence demand but not accommodation — the source of the VAC.' },
  { term: 'Asthenopia', category: 'Oculomotor', definition: 'Eye strain or fatigue — symptoms include aching, tired eyes, blurred vision, and headache. A common outcome of prolonged vergence-accommodation conflict in HMDs and a component of cybersickness\'s oculomotor subscale on the SSQ.' },
];
