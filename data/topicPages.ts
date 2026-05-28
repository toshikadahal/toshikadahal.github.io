export type TopicPage = {
  slug: string;
  category: string;
  title: string;
  short: string;
  overview: string;
  symptoms: string[];
  evaluation: string[];
  treatment: string[];
  homeCare: string[];
  questions: string[];
  urgent: string;
};

export const topicPages: TopicPage[] = [
  {
    slug: "ear-discharge-chronic-ear-disease",
    category: "Ear",
    title: "Ear discharge and chronic ear disease",
    short: "Persistent ear discharge, smell, blockage, pain, or hearing loss needs ENT evaluation.",
    overview: "Ear discharge may come from the ear canal, middle ear, tympanic membrane perforation, cholesteatoma, mastoid disease, fungal infection, or problems related to previous surgery. The aim is to identify whether the ear is safe, dry, hearing-preserving, and suitable for medicine or surgery.",
    symptoms: ["Ear discharge that keeps returning", "Bad smell from the ear", "Reduced hearing or blocked feeling", "Ear pain, itching, or fullness", "Dizziness or facial weakness in serious cases"],
    evaluation: ["Microscopic ear examination", "Suction cleaning if needed", "Hearing test when hearing is affected", "Culture if infection is persistent", "CT scan of the temporal bone when unsafe ear disease is suspected"],
    treatment: ["Ear toilet and targeted drops", "Treatment of fungal or bacterial infection", "Keeping the ear dry", "Tympanoplasty discussion for persistent perforation", "Mastoid surgery discussion for cholesteatoma or unsafe ear disease"],
    homeCare: ["Do not put oil into the ear", "Avoid cotton buds deep inside the canal", "Keep water out until reviewed", "Bring previous hearing tests and CT reports"],
    questions: ["Is my ear disease safe or unsafe?", "Do I need a hearing test?", "Is surgery needed to make the ear dry?", "How do I prevent recurrence?"],
    urgent: "Seek urgent care for severe pain, swelling behind the ear, dizziness, facial weakness, bleeding, or sudden hearing loss."
  },
  {
    slug: "tympanic-membrane-perforation",
    category: "Ear",
    title: "Tympanic membrane perforation",
    short: "A hole in the eardrum may cause discharge, hearing loss, infection, or water sensitivity.",
    overview: "A tympanic membrane perforation can occur after infection, trauma, barotrauma, or chronic ear disease. Some heal on their own, while persistent perforations may need monitoring, hearing testing, or repair.",
    symptoms: ["Hearing reduction", "Ear discharge after water entry", "History of trauma or infection", "Whistling sound while blowing the nose", "Recurrent ear infection"],
    evaluation: ["Otoscopy or microscopy", "Assessment of perforation size and site", "Hearing test", "Middle ear and mastoid assessment", "Imaging if chronic disease is suspected"],
    treatment: ["Observation for fresh traumatic perforation", "Dry ear precautions", "Treatment of infection", "Tympanoplasty for selected persistent perforations", "Ossicular assessment when hearing loss is more than expected"],
    homeCare: ["Avoid forceful nose blowing after trauma", "Keep the ear dry", "Do not self medicate with ear drops", "Protect the ear during bathing"],
    questions: ["Will this perforation heal?", "Can I swim?", "What is my hearing level?", "What is the success chance of repair?"],
    urgent: "Urgent review is needed for severe vertigo, facial weakness, bleeding, or sudden major hearing loss after trauma."
  },
  {
    slug: "cholesteatoma",
    category: "Ear",
    title: "Cholesteatoma and unsafe ear disease",
    short: "Cholesteatoma can damage ear structures and often needs surgical planning.",
    overview: "Cholesteatoma is abnormal skin trapped in the middle ear or mastoid. It can slowly expand, cause discharge, erode bone, reduce hearing, and lead to complications if untreated.",
    symptoms: ["Persistent foul smelling discharge", "Progressive hearing loss", "Ear fullness or blockage", "Recurrent infection", "Dizziness or facial weakness in advanced disease"],
    evaluation: ["Microscopic ear examination", "Hearing test", "CT scan of the temporal bone", "Facial nerve and balance symptom review", "Surgical risk counselling"],
    treatment: ["Ear cleaning and infection control", "Dry ear precautions", "Mastoid surgery planning", "Tympanoplasty or hearing reconstruction when appropriate", "Long term follow up for recurrence"],
    homeCare: ["Do not ignore foul smelling discharge", "Avoid water entry", "Keep reports and surgery notes safely", "Attend follow up even after symptoms improve"],
    questions: ["Is cholesteatoma present?", "What type of mastoid surgery is needed?", "Can hearing be improved?", "How often do I need follow up?"],
    urgent: "Urgent care is needed for vertigo, facial weakness, severe headache, fever, swelling behind the ear, or neurological symptoms."
  },
  {
    slug: "hearing-loss",
    category: "Ear",
    title: "Hearing loss",
    short: "Hearing loss may be sudden or gradual, conductive or sensorineural, temporary or permanent.",
    overview: "Hearing loss can arise from wax, infection, eardrum perforation, ossicle problems, otosclerosis, inner ear damage, noise exposure, aging, trauma, or nerve related causes. The correct plan depends on clinical examination and hearing tests.",
    symptoms: ["Difficulty hearing conversation", "Needing louder TV or phone volume", "One sided hearing reduction", "Ear fullness or pressure", "Tinnitus or dizziness"],
    evaluation: ["Ear examination", "Pure tone audiometry", "Tympanometry when middle ear disease is suspected", "Speech discrimination in selected cases", "Imaging when one-sided or nerve related causes are suspected"],
    treatment: ["Wax or infection treatment", "Middle ear surgery in selected conductive loss", "Hearing aid guidance", "Cochlear implant referral pathway when appropriate", "Hearing protection advice"],
    homeCare: ["Avoid loud noise exposure", "Use hearing protection", "Do not delay sudden hearing loss", "Bring previous audiograms"],
    questions: ["What type of hearing loss do I have?", "Is it reversible?", "Do I need a hearing aid or surgery?", "Should the other ear be monitored?"],
    urgent: "Sudden hearing loss is urgent, especially with vertigo, tinnitus, neurological symptoms, or one-sided onset."
  },
  {
    slug: "tinnitus",
    category: "Ear",
    title: "Tinnitus and ear noise",
    short: "Ringing, buzzing, humming, clicking, or whooshing sounds may need ear and hearing assessment.",
    overview: "Tinnitus is a symptom, not a single disease. It may occur with wax, hearing loss, noise exposure, middle ear disease, medication effects, jaw problems, vascular causes, or inner ear conditions.",
    symptoms: ["Ringing or buzzing", "Pulsatile sound", "One sided tinnitus", "Tinnitus with hearing loss", "Sleep disturbance or anxiety"],
    evaluation: ["Ear examination", "Hearing test", "Review of medicines and noise exposure", "Jaw and neck symptom screening", "Imaging for selected one-sided or pulsatile tinnitus"],
    treatment: ["Treating wax or ear disease", "Hearing rehabilitation", "Sound therapy discussion", "Counselling and reassurance", "Referral if pulsatile or one-sided warning signs exist"],
    homeCare: ["Reduce noise exposure", "Avoid silence at bedtime if tinnitus is disturbing", "Limit headphone volume", "Track triggers such as stress or caffeine"],
    questions: ["Is my tinnitus linked to hearing loss?", "Do I need imaging?", "Will a hearing aid help?", "What warning signs should I watch for?"],
    urgent: "Prompt evaluation is needed for pulsatile tinnitus, sudden hearing loss, severe dizziness, facial weakness, or neurological symptoms."
  },
  {
    slug: "vertigo-dizziness-balance",
    category: "Balance",
    title: "Vertigo, dizziness, and balance",
    short: "Spinning, imbalance, nausea, ear fullness, hearing loss, or tinnitus need structured assessment.",
    overview: "Dizziness may be caused by inner ear disorders, BPPV, vestibular neuritis, Meniere type symptoms, migraine, blood pressure changes, medicine effects, anxiety, or neurological disease.",
    symptoms: ["Room spinning", "Nausea or vomiting", "Imbalance while walking", "Hearing loss or tinnitus", "Headache or neurological symptoms"],
    evaluation: ["Detailed timing and trigger history", "Ear and neurological screening", "Positional tests when BPPV is suspected", "Hearing test when ear symptoms are present", "Referral for vestibular testing or imaging when needed"],
    treatment: ["Canalith repositioning for BPPV", "Medicines for acute severe symptoms", "Vestibular exercises", "Treatment of inner ear or migraine related causes", "Referral if central features are suspected"],
    homeCare: ["Avoid driving during severe vertigo", "Hydrate well", "Rise slowly from bed", "Record attack duration and triggers"],
    questions: ["Is this ear related or neurological?", "Do I have BPPV?", "Do I need hearing or vestibular testing?", "What exercises are safe?"],
    urgent: "Emergency care is needed for dizziness with weakness, double vision, slurred speech, severe headache, chest pain, fainting, or inability to walk."
  },
  {
    slug: "nasal-blockage",
    category: "Nose",
    title: "Nasal blockage",
    short: "Blocked nose may be from allergy, septal deviation, turbinate swelling, sinusitis, polyps, or mass.",
    overview: "Nasal blockage is evaluated by whether it is one-sided or both sided, constant or seasonal, and associated with sneezing, discharge, smell loss, bleeding, snoring, or facial pressure.",
    symptoms: ["Blocked nose", "Mouth breathing", "Snoring", "Reduced smell", "One sided obstruction"],
    evaluation: ["Anterior nasal examination", "Nasal endoscopy", "Allergy and rhinitis review", "Septum and turbinate assessment", "CT sinus when chronic sinus disease is suspected"],
    treatment: ["Saline irrigation", "Allergy medicines and nasal steroid sprays", "Septoplasty for selected septal deviation", "Turbinate reduction in selected cases", "Endoscopic sinus surgery for selected chronic sinus disease"],
    homeCare: ["Avoid overuse of decongestant drops", "Use nasal sprays correctly", "Reduce dust and smoke exposure", "Track seasonal triggers"],
    questions: ["Is my blockage from allergy or anatomy?", "Do I need nasal endoscopy?", "Can medicine help?", "When is surgery useful?"],
    urgent: "One sided blockage with bleeding, facial swelling, eye symptoms, weight loss, or severe pain needs prompt evaluation."
  },
  {
    slug: "sinusitis",
    category: "Nose",
    title: "Sinusitis and facial pressure",
    short: "Sinusitis can cause nasal blockage, discharge, facial pressure, smell loss, cough, and fatigue.",
    overview: "Sinusitis may be acute, recurrent, or chronic. Chronic symptoms need careful review because allergy, polyps, dental disease, reflux, migraine, and anatomical blockage can mimic or worsen sinus complaints.",
    symptoms: ["Facial pressure", "Thick nasal discharge", "Post nasal drip", "Smell reduction", "Cough or throat clearing"],
    evaluation: ["History of duration and recurrence", "Nasal endoscopy", "Allergy and polyp assessment", "CT sinus for selected chronic cases", "Dental review if dental source is suspected"],
    treatment: ["Saline irrigation", "Nasal steroid spray", "Antibiotics only when indicated", "Allergy management", "Functional endoscopic sinus surgery when medical treatment fails in selected cases"],
    homeCare: ["Use saline irrigation safely", "Avoid smoke exposure", "Complete prescribed medicine correctly", "Bring CT reports if already done"],
    questions: ["Is this sinusitis or migraine?", "Do I have polyps?", "Do I need CT?", "What is the aim of sinus surgery?"],
    urgent: "Severe headache, eye swelling, double vision, confusion, neck stiffness, or high fever needs urgent care."
  },
  {
    slug: "allergic-rhinitis",
    category: "Nose",
    title: "Allergic rhinitis",
    short: "Sneezing, itching, watery discharge, and blocked nose often suggest allergy.",
    overview: "Allergic rhinitis can affect sleep, concentration, school, work, asthma control, sinus symptoms, and ear pressure. Long term control depends on trigger reduction and correct use of medicines.",
    symptoms: ["Sneezing", "Itchy nose or eyes", "Watery nasal discharge", "Blocked nose", "Seasonal or dust related symptoms"],
    evaluation: ["Trigger history", "Nasal examination", "Endoscopy if symptoms are persistent or one-sided", "Asthma and sinus symptom review", "Allergy testing discussion when appropriate"],
    treatment: ["Allergen avoidance", "Nasal steroid spray", "Antihistamines", "Saline irrigation", "Immunotherapy referral discussion in selected cases"],
    homeCare: ["Wash bedding regularly", "Reduce dust exposure", "Avoid smoke and strong smells", "Do not overuse decongestant drops"],
    questions: ["What triggers my allergy?", "How should I use nasal spray?", "How long should I continue treatment?", "Do I need allergy testing?"],
    urgent: "Bleeding, one-sided obstruction, facial swelling, or severe pain should not be assumed to be simple allergy."
  },
  {
    slug: "nosebleed-epistaxis",
    category: "Nose",
    title: "Nosebleed",
    short: "Nosebleed may be due to dryness, trauma, nose picking, allergy, blood pressure, medicines, or local disease.",
    overview: "Most nosebleeds stop with correct first aid. Recurrent bleeding needs nasal examination to identify dryness, vessels, infection, septal problems, polyps, masses, or medicine related bleeding risk.",
    symptoms: ["Bleeding from one or both nostrils", "Clots", "Recurrent episodes", "Bleeding after trauma", "Bleeding with nasal blockage"],
    evaluation: ["Blood pressure review", "Medicine review including blood thinners", "Nasal examination", "Endoscopy when recurrent or one-sided", "Blood tests in selected cases"],
    treatment: ["First aid advice", "Moisturizing and saline care", "Cautery for visible bleeding point", "Nasal packing when needed", "Treatment of allergy or infection"],
    homeCare: ["Sit forward and pinch the soft part of the nose", "Do not lie flat", "Avoid nose picking", "Avoid forceful nose blowing after bleeding"],
    questions: ["Where is the bleeding coming from?", "Do my medicines increase bleeding?", "Do I need cautery?", "How do I prevent recurrence?"],
    urgent: "Emergency care is needed for heavy bleeding, bleeding that does not stop, dizziness, fainting, trauma, or breathing difficulty."
  },
  {
    slug: "smell-loss",
    category: "Nose",
    title: "Smell loss",
    short: "Loss of smell may follow viral infection, allergy, sinusitis, nasal polyps, trauma, or neurological causes.",
    overview: "Smell loss is assessed by timing, nasal blockage, sinus symptoms, viral illness, head injury, medicine use, and whether taste is also affected.",
    symptoms: ["Reduced smell", "Distorted smell", "Loss of taste perception", "Nasal blockage", "Post viral onset"],
    evaluation: ["Nasal examination", "Endoscopy for obstruction or polyps", "Sinus assessment", "CT or MRI in selected cases", "Medication and neurological history"],
    treatment: ["Treating rhinitis or sinusitis", "Steroid spray when indicated", "Smell training discussion", "Polyp treatment if present", "Referral if neurological features exist"],
    homeCare: ["Use smoke and gas safety alarms", "Check food expiry carefully", "Avoid unnecessary strong irritants", "Track gradual recovery"],
    questions: ["Is my smell loss blocked nose related?", "Do I have polyps?", "Is imaging needed?", "Can smell training help?"],
    urgent: "Smell loss with neurological symptoms, severe headache, trauma, or one-sided nasal bleeding needs prompt evaluation."
  },
  {
    slug: "post-nasal-drip",
    category: "Throat",
    title: "Post nasal drip and throat clearing",
    short: "Mucus sensation in the throat can come from rhinitis, sinusitis, reflux, dryness, or throat sensitivity.",
    overview: "Post nasal drip is a common reason for throat clearing, cough, irritation, and a lump sensation. Treatment depends on the cause rather than the symptom alone.",
    symptoms: ["Throat clearing", "Mucus sensation", "Cough", "Blocked nose or discharge", "Lump sensation in throat"],
    evaluation: ["Nose and throat examination", "Nasal endoscopy when needed", "Allergy and sinus review", "Reflux symptom review", "Medication and hydration review"],
    treatment: ["Saline irrigation", "Allergy treatment", "Sinus treatment when indicated", "Reflux lifestyle advice", "Voice and throat hygiene advice"],
    homeCare: ["Hydrate well", "Avoid smoke", "Reduce throat clearing habit", "Use saline when advised"],
    questions: ["Is this allergy, sinus, or reflux?", "Do I need nasal endoscopy?", "Should I use nasal spray?", "What habits worsen it?"],
    urgent: "Persistent throat symptoms with weight loss, blood, swallowing difficulty, voice change, or neck lump need prompt evaluation."
  },
  {
    slug: "hoarseness-voice-change",
    category: "Voice",
    title: "Hoarseness and voice change",
    short: "Persistent voice change needs laryngeal assessment, especially in smokers or voice professionals.",
    overview: "Hoarseness can result from infection, voice misuse, reflux, vocal fold nodules, polyps, cysts, paralysis, nerve issues related to thyroid surgery, or cancer. Examination of the larynx is important when symptoms persist.",
    symptoms: ["Rough voice", "Breathy voice", "Voice fatigue", "Pain while speaking", "Loss of voice range"],
    evaluation: ["Throat history", "Flexible laryngoscopy", "Voice use assessment", "Reflux and allergy review", "Imaging or biopsy discussion for suspicious lesions"],
    treatment: ["Voice rest for acute strain", "Hydration and voice hygiene", "Reflux management when appropriate", "Voice therapy referral", "Microlaryngeal surgery for selected lesions"],
    homeCare: ["Avoid shouting", "Avoid whispering when voice is strained", "Hydrate well", "Rest the voice after heavy use"],
    questions: ["Are my vocal folds moving normally?", "Do I need voice therapy?", "Is reflux contributing?", "Is there any lesion?"],
    urgent: "Hoarseness with breathing difficulty, blood, swallowing difficulty, neck lump, weight loss, or persistence beyond a few weeks needs evaluation."
  },
  {
    slug: "tonsil-adenoid-snoring",
    category: "Throat",
    title: "Tonsils, adenoids, snoring, and sleep",
    short: "Recurrent tonsil infection, mouth breathing, snoring, and sleep pauses may need ENT care.",
    overview: "Tonsil and adenoid problems can affect infection frequency, sleep quality, breathing, school performance, growth, and ear health. Surgery is considered only after assessing severity and benefit.",
    symptoms: ["Recurrent sore throat", "Snoring", "Mouth breathing", "Pauses in breathing during sleep", "Recurrent ear problems in children"],
    evaluation: ["Throat examination", "Nasal and adenoid symptom review", "Sleep symptom screening", "Ear and hearing review in children", "Assessment of infection frequency"],
    treatment: ["Medical treatment for acute infection", "Allergy or nasal blockage treatment", "Tonsillectomy discussion in selected recurrent or obstructive cases", "Adenoidectomy discussion in selected children", "Sleep evaluation when needed"],
    homeCare: ["Record number of infections", "Observe sleep pauses", "Track mouth breathing", "Bring previous prescriptions"],
    questions: ["Does my child need adenoid assessment?", "Is surgery necessary?", "What are the risks and benefits?", "Could allergy be worsening symptoms?"],
    urgent: "Breathing difficulty, dehydration, severe one-sided throat pain, neck swelling, or suspected abscess needs urgent care."
  },
  {
    slug: "throat-reflux-lpr",
    category: "Throat",
    title: "Throat reflux and LPR symptoms",
    short: "Throat irritation, cough, lump sensation, and voice symptoms may be related to reflux or other causes.",
    overview: "Laryngopharyngeal reflux can mimic sinus drip, allergy, voice strain, and throat sensitivity. Diagnosis is clinical and should avoid assuming all throat symptoms are reflux.",
    symptoms: ["Throat clearing", "Chronic cough", "Lump sensation", "Voice change", "Burning or sour taste in some patients"],
    evaluation: ["Throat and voice history", "Laryngeal examination", "Nasal symptom review", "Diet and lifestyle review", "Referral for gastro evaluation in selected cases"],
    treatment: ["Diet and meal timing advice", "Weight and lifestyle measures", "Voice hygiene", "Medication trial when appropriate", "Evaluation for other causes if symptoms persist"],
    homeCare: ["Avoid late heavy meals", "Reduce smoking and alcohol exposure", "Hydrate well", "Avoid excessive throat clearing"],
    questions: ["Is this reflux or post nasal drip?", "Do I need laryngoscopy?", "How long should treatment continue?", "What diet changes matter most?"],
    urgent: "Difficulty swallowing, weight loss, blood, persistent hoarseness, or neck lump needs prompt evaluation."
  },
  {
    slug: "swallowing-difficulty",
    category: "Throat",
    title: "Swallowing difficulty",
    short: "Difficulty swallowing can come from throat, esophagus, neurological, reflux, infection, or tumour related causes.",
    overview: "Dysphagia needs careful assessment because it affects nutrition, safety, aspiration risk, and quality of life. ENT evaluation focuses on throat, voice box, neck, and airway related causes.",
    symptoms: ["Food sticking", "Coughing while swallowing", "Painful swallowing", "Weight loss", "Voice change or choking"],
    evaluation: ["Throat and neck examination", "Flexible laryngoscopy", "Swallowing history", "Imaging or swallow study referral", "Gastro or neuro referral when needed"],
    treatment: ["Treating infection or inflammation", "Reflux management when appropriate", "Swallow therapy referral", "Investigation of structural narrowing", "Biopsy or imaging if suspicious features exist"],
    homeCare: ["Do not ignore progressive symptoms", "Eat slowly and safely", "Stay hydrated", "Report aspiration or choking episodes"],
    questions: ["Where is the blockage felt?", "Is my voice box normal?", "Do I need a swallow test?", "Could this be reflux or a structural problem?"],
    urgent: "Sudden inability to swallow, drooling, breathing difficulty, severe pain, or progressive weight loss needs urgent care."
  },
  {
    slug: "neck-lump",
    category: "Head and neck",
    title: "Neck lump",
    short: "A neck lump may arise from lymph nodes, infection, thyroid, salivary gland, congenital lesions, or cancer.",
    overview: "A neck lump is assessed by duration, age, pain, growth, infection symptoms, smoking history, voice change, swallowing problems, and examination of the mouth, throat, thyroid, and salivary glands.",
    symptoms: ["Visible or felt neck swelling", "Painful or painless lump", "Rapid growth", "Fever or infection symptoms", "Voice or swallowing symptoms"],
    evaluation: ["Head and neck examination", "Flexible endoscopy when needed", "Ultrasound", "FNAC or biopsy pathway", "CT or MRI when indicated"],
    treatment: ["Antibiotics only if infection is likely", "Observation for selected reactive nodes", "Needle test for persistent lumps", "Surgery or referral if suspicious", "Cancer pathway referral when needed"],
    homeCare: ["Do not repeatedly press the lump", "Track size and duration", "Bring ultrasound reports", "Mention tobacco or alcohol exposure"],
    questions: ["Is this lymph node, thyroid, or salivary gland?", "Do I need FNAC?", "Is imaging needed?", "What features are concerning?"],
    urgent: "Hard, fixed, painless, rapidly growing, or persistent neck lumps need specialist evaluation."
  },
  {
    slug: "thyroid-nodules-goiter",
    category: "Head and neck",
    title: "Thyroid nodules and goiter",
    short: "Thyroid swelling needs examination, ultrasound review, thyroid blood tests, and risk assessment.",
    overview: "Most thyroid nodules are benign, but selected nodules require ultrasound scoring, FNAC, thyroid function testing, monitoring, or surgery. ENT assessment also checks voice and swallowing symptoms.",
    symptoms: ["Front neck swelling", "Pressure sensation", "Swallowing discomfort", "Voice change", "Rapid growth in concerning cases"],
    evaluation: ["Neck examination", "Thyroid function test review", "Ultrasound review", "FNAC when indicated", "Vocal fold assessment before selected surgery"],
    treatment: ["Observation for low risk nodules", "FNAC based planning", "Thyroid medicine when indicated by endocrine status", "Surgery for selected nodules, pressure symptoms, or suspicious findings", "Follow up ultrasound"],
    homeCare: ["Bring ultrasound and blood reports", "Note voice change", "Record growth timeline", "Tell doctor about family history or radiation exposure"],
    questions: ["Is the nodule suspicious?", "Do I need FNAC?", "Should I see endocrinology too?", "What are the surgery risks?"],
    urgent: "Rapid growth, breathing difficulty, voice change, hard fixed swelling, or severe pressure symptoms need prompt evaluation."
  },
  {
    slug: "salivary-gland-swelling",
    category: "Head and neck",
    title: "Salivary gland swelling",
    short: "Parotid or submandibular swelling may be due to infection, stones, blockage, autoimmune disease, or tumours.",
    overview: "Salivary gland swelling is evaluated by relation to meals, pain, fever, dry mouth, pus, facial weakness, and imaging. Meal related swelling may suggest duct stone or obstruction.",
    symptoms: ["Swelling near jaw or below jaw", "Pain during meals", "Dry mouth", "Pus or bad taste", "Facial weakness in serious cases"],
    evaluation: ["Gland and duct examination", "Oral cavity examination", "Ultrasound", "CT scan for stones or deep lesions", "FNAC for persistent gland lumps"],
    treatment: ["Hydration and massage for selected obstruction", "Antibiotics when bacterial infection is likely", "Stone management pathway", "Surgery for selected tumours or recurrent disease", "Referral for autoimmune causes when suspected"],
    homeCare: ["Hydrate well", "Warm compress if advised", "Gently massage toward the mouth", "Note meal related swelling"],
    questions: ["Is this stone, infection, or tumour?", "Do I need ultrasound or FNAC?", "Can this recur?", "When is surgery needed?"],
    urgent: "Facial weakness, rapidly growing swelling, high fever, severe pain, or breathing difficulty needs urgent care."
  },
  {
    slug: "head-neck-cancer-warning-signs",
    category: "Head and neck",
    title: "Head and neck cancer warning signs",
    short: "Persistent mouth, throat, voice, neck, swallowing, or bleeding symptoms should be checked.",
    overview: "Not all persistent symptoms are cancer, but early evaluation matters. ENT assessment can examine the mouth, throat, larynx, nose, neck, thyroid, and salivary glands.",
    symptoms: ["Neck lump", "Persistent hoarseness", "Mouth ulcer that does not heal", "Difficulty swallowing", "Blood in saliva or nose"],
    evaluation: ["Complete head and neck examination", "Flexible naso laryngoscopy", "Imaging when needed", "FNAC of neck lump", "Biopsy of suspicious lesions"],
    treatment: ["Fast referral for suspicious findings", "Biopsy based diagnosis", "Multidisciplinary planning", "Surgery, radiotherapy, or chemotherapy discussion when cancer is confirmed", "Supportive care for speech and swallowing"],
    homeCare: ["Do not ignore persistent symptoms", "Avoid tobacco and betel nut exposure", "Bring old biopsy or imaging reports", "Seek early review"],
    questions: ["Is this symptom suspicious?", "Do I need endoscopy?", "Do I need biopsy?", "What is the next step if cancer is suspected?"],
    urgent: "Breathing difficulty, bleeding, rapidly enlarging neck swelling, severe swallowing difficulty, or airway symptoms need urgent care."
  },
  {
    slug: "pediatric-ent",
    category: "Children",
    title: "Paediatric ENT",
    short: "Children commonly need ENT care for ear infections, hearing concerns, mouth breathing, snoring, tonsils, and adenoids.",
    overview: "Paediatric ENT care focuses on hearing, speech, breathing, sleep, recurrent infection, safe evaluation, and family-centred decision-making.",
    symptoms: ["Recurrent ear infections", "Delayed speech or hearing concern", "Mouth breathing", "Snoring or sleep pauses", "Recurrent tonsillitis"],
    evaluation: ["Ear examination", "Hearing test when needed", "Tonsil and adenoid symptom review", "Sleep symptom screening", "Nasal allergy assessment"],
    treatment: ["Infection treatment", "Hearing follow up", "Ventilation tube discussion in selected cases", "Adenoid or tonsil surgery discussion when indicated", "Allergy or nasal treatment"],
    homeCare: ["Observe hearing and speech", "Record infection frequency", "Video sleep symptoms if possible", "Bring school or speech concerns"],
    questions: ["Does my child hear well?", "Are adenoids causing symptoms?", "Does snoring need surgery?", "Could allergy be contributing?"],
    urgent: "Breathing difficulty, bluish spells, dehydration, severe sleep pauses, or sudden airway symptoms need urgent care."
  },
  {
    slug: "snoring-sleep-apnea",
    category: "Sleep",
    title: "Snoring and sleep apnea",
    short: "Snoring with pauses, choking, daytime sleepiness, or poor sleep may need sleep evaluation.",
    overview: "Snoring can be simple or part of obstructive sleep apnea. ENT assessment reviews nose, tonsils, palate, tongue base, weight factors, sleep symptoms, and comorbidities.",
    symptoms: ["Loud snoring", "Witnessed pauses", "Choking during sleep", "Morning headache", "Daytime sleepiness"],
    evaluation: ["Sleep symptom questionnaire", "Nose and throat examination", "Tonsil and palate assessment", "Sleep study referral", "Nasal obstruction evaluation"],
    treatment: ["Weight and lifestyle advice", "Nasal obstruction management", "CPAP referral pathway", "Oral appliance discussion", "Surgery in selected anatomical obstruction"],
    homeCare: ["Avoid alcohol before sleep", "Sleep on side if helpful", "Treat nasal blockage", "Seek sleep study if symptoms are significant"],
    questions: ["Do I need a sleep study?", "Is my nose or throat contributing?", "Is CPAP needed?", "Can surgery help in my case?"],
    urgent: "Severe daytime sleepiness while driving, heart strain symptoms, or major breathing pauses need prompt medical evaluation."
  },
  {
    slug: "earwax-ear-blockage",
    category: "Ear",
    title: "Earwax and ear blockage",
    short: "Earwax can cause blockage, reduced hearing, tinnitus, discomfort, or hearing aid problems.",
    overview: "Wax is common, but unsafe removal can injure the canal or eardrum. ENT cleaning is useful when wax is hard, recurrent, painful, or when the eardrum status is unknown.",
    symptoms: ["Blocked ear", "Reduced hearing", "Ear discomfort", "Tinnitus", "Hearing aid feedback"],
    evaluation: ["Otoscopy", "Microscopic assessment when needed", "Eardrum status check", "Infection exclusion", "Hearing test if symptoms persist after cleaning"],
    treatment: ["Wax softening drops when safe", "Microsuction or careful removal", "Avoiding deep cotton buds", "Treatment of otitis externa if present", "Hearing test if blockage is not wax related"],
    homeCare: ["Do not push cotton buds inside", "Do not candle the ear", "Avoid self removal tools", "Ask before using drops if perforation is possible"],
    questions: ["Is my eardrum normal?", "How can I prevent recurrence?", "Are wax drops safe for me?", "Why is hearing still reduced after wax removal?"],
    urgent: "Pain, discharge, bleeding, dizziness, sudden hearing loss, or suspected foreign body needs medical review."
  },
  {
    slug: "swimmers-ear-otomycosis",
    category: "Ear",
    title: "Swimmer's ear and otomycosis",
    short: "Outer ear canal infection can cause pain, itching, discharge, blockage, and tenderness.",
    overview: "Otitis externa and fungal otitis are infections or inflammation of the ear canal. Moisture, scratching, wax removal attempts, diabetes, and ear devices may increase risk.",
    symptoms: ["Ear pain", "Itching", "Discharge", "Blocked ear", "Pain when touching the ear"],
    evaluation: ["Ear canal examination", "Microscopic cleaning", "Assessment of eardrum", "Fungal debris identification", "Culture in recurrent cases"],
    treatment: ["Aural toilet", "Topical drops", "Keeping ear dry", "Avoiding trauma to canal", "Diabetes or immunity review in recurrent severe cases"],
    homeCare: ["Keep the ear dry", "Avoid scratching", "Avoid ear buds", "Do not share earphones during infection"],
    questions: ["Is this fungal or bacterial?", "Can I use drops safely?", "How long should I keep the ear dry?", "Why does it recur?"],
    urgent: "Severe pain, swelling, fever, diabetes with worsening ear infection, facial weakness, or spreading redness needs urgent care."
  },
  {
    slug: "otosclerosis-conductive-hearing-loss",
    category: "Ear",
    title: "Otosclerosis and conductive hearing loss",
    short: "Conductive hearing loss can come from wax, fluid, perforation, ossicle problems, or stapes fixation.",
    overview: "Conductive hearing loss means sound is not reaching the inner ear efficiently. Otosclerosis is one possible cause where stapes movement is reduced.",
    symptoms: ["Gradual hearing loss", "Better hearing in noisy environments in some cases", "Tinnitus", "Family history", "Normal looking eardrum in some patients"],
    evaluation: ["Ear examination", "Pure tone audiometry", "Tympanometry", "Acoustic reflex testing when available", "CT in selected surgical planning"],
    treatment: ["Observation", "Hearing aid", "Stapes surgery discussion in selected cases", "Treatment of other middle ear causes", "Long term hearing follow up"],
    homeCare: ["Protect hearing from noise", "Bring audiograms", "Discuss both hearing aid and surgery options", "Track hearing changes"],
    questions: ["Is this otosclerosis?", "Am I suitable for stapes surgery?", "Would a hearing aid help?", "What are the risks of surgery?"],
    urgent: "Sudden change in hearing, vertigo, or neurological symptoms needs urgent evaluation."
  },
  {
    slug: "facial-nerve-weakness",
    category: "Advanced ENT",
    title: "Facial nerve weakness",
    short: "Facial weakness may be Bell's palsy, ear infection related, trauma related, tumour related, or neurological.",
    overview: "ENT evaluation matters when facial weakness is associated with ear pain, discharge, rash, hearing loss, dizziness, trauma, parotid swelling, or chronic ear disease.",
    symptoms: ["One sided facial droop", "Inability to close eye", "Ear pain", "Taste change", "Rash around ear"],
    evaluation: ["Facial nerve grading", "Ear examination", "Parotid and neck examination", "Hearing and balance review", "Imaging when indicated"],
    treatment: ["Eye protection", "Medical treatment when appropriate", "Treatment of ear infection or cholesteatoma if present", "Facial physiotherapy referral", "Specialist referral for persistent or recurrent weakness"],
    homeCare: ["Protect the eye from dryness", "Seek early care", "Do not ignore ear symptoms", "Bring imaging reports if already done"],
    questions: ["Is this Bell's palsy or ear related?", "Do I need imaging?", "How do I protect my eye?", "When should recovery start?"],
    urgent: "Facial weakness with stroke symptoms, severe headache, confusion, limb weakness, or speech difficulty needs emergency care."
  },
  {
    slug: "csf-leak-skull-base-awareness",
    category: "Advanced ENT",
    title: "CSF leak and skull base awareness",
    short: "Clear one-sided watery nasal discharge after trauma or surgery needs careful evaluation.",
    overview: "Selected skull base problems may involve the nose, sinuses, ear, facial nerve, hearing, balance, and brain covering. ENT evaluation often requires imaging and multidisciplinary planning.",
    symptoms: ["Clear watery one-sided nasal discharge", "Salty taste", "Symptoms after head injury or surgery", "Recurrent meningitis history", "Severe headache or fever in concerning cases"],
    evaluation: ["Detailed history", "Nasal endoscopy", "Beta 2 transferrin testing where available", "CT or MRI review", "Neurosurgical or skull base referral when needed"],
    treatment: ["Avoiding strain until evaluated", "Imaging guided planning", "Endoscopic repair in selected confirmed leaks", "Infection prevention planning", "Team based follow up"],
    homeCare: ["Do not ignore persistent clear watery discharge", "Avoid heavy straining until reviewed", "Bring CT or MRI reports", "Report fever or neck stiffness"],
    questions: ["Could this be CSF?", "What test confirms it?", "Do I need CT or MRI?", "Who should be involved in care?"],
    urgent: "Clear watery discharge with fever, severe headache, neck stiffness, confusion, or meningitis symptoms needs urgent care."
  },
  {
    slug: "ent-surgery-preparation",
    category: "Surgery",
    title: "Preparing for ENT surgery",
    short: "Good preparation improves safety, expectations, consent, recovery, and follow up.",
    overview: "ENT surgery planning includes diagnosis, benefit, alternatives, risks, anaesthesia assessment, imaging review, medication review, and post operative care instructions.",
    symptoms: ["Operation planned", "Repeated symptoms despite medicines", "Need for imaging review", "Medication or bleeding risk concerns", "Anxiety about recovery"],
    evaluation: ["Confirmation of diagnosis", "Review of scans and reports", "Pre anaesthesia check", "Blood thinner and allergy review", "Discussion of realistic outcomes"],
    treatment: ["Written preoperative instructions", "Consent discussion", "Postoperative care plan", "Follow up schedule", "Emergency contact advice"],
    homeCare: ["Bring all reports", "Tell doctor about medicines and allergies", "Ask about fasting and blood thinners", "Arrange transport and support"],
    questions: ["Why is surgery needed?", "What are alternatives?", "What are the risks?", "What should I expect after surgery?"],
    urgent: "Before surgery, report fever, chest infection, uncontrolled medical illness, new bleeding tendency, or new severe symptoms."
  }
];

export function getTopicBySlug(slug: string) {
  return topicPages.find(topic => topic.slug === slug);
}