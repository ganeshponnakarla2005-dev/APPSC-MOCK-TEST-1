alert("questions.js loaded");
const questions = [
{
id:1,
section:"History",
question:`Consider the following statements regarding the urban planning of the Indus Valley Civilization:

1. The use of burnt bricks in construction was a common feature across all Harappan sites, unlike contemporary civilizations in Mesopotamia or Egypt.
2. The citadels in Harappan cities were invariably located to the East of the lower town.
3. A sophisticated drainage system was present even in smaller houses, connecting to main street drains.

Which of the statements given above is/are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"c",
explanation:"Statement 1 and 3 are correct. Burnt bricks and advanced drainage systems were important Harappan features. Citadels were not invariably located to the east of the lower town."
},

{
id:2,
section:"History",
question:`Which of the following Harappan sites is correctly matched with its unique archaeological find?`,
options:{
a:"Kalibangan – Dockyard",
b:"Dholavira – Unique water harnessing system and storm water drainage",
c:"Lothal – Ploughed field surface",
d:"Banawali – Largest Harappan inscription"
},
answer:"b",
explanation:"Dholavira is famous for its sophisticated water conservation, reservoirs and storm-water drainage system. Lothal is known for the dockyard, while Kalibangan is known for the ploughed field."
},

{
id:3,
section:"History",
question:`Match List I (Vedic Terms) with List II (Meanings):

1. Gavishti
2. Duhitri
3. Gopa
4. Goghna

I. Daughter (one who milks cows)
II. Guest (one who is fed on beef)
III. Search for cows (term for war)
IV. King (protector of cows)

Select the correct answer.`,
options:{
a:"1-III, 2-I, 3-IV, 4-II",
b:"1-I, 2-III, 3-IV, 4-II",
c:"1-III, 2-I, 3-II, 4-IV",
d:"1-IV, 2-II, 3-I, 4-III"
},
answer:"a",
explanation:"Gavishti means search for cows (war), Duhitri means daughter, Gopa means protector of cows (king), and Goghna refers to a guest."
},

{
id:4,
section:"History",
question:`Consider the following statements regarding the Buddhist Sangha:

1. Admission was open to all individuals above 15 years, regardless of caste, excluding slaves and debtors without permission.
2. Women were admitted into the Sangha from the very beginning at the insistence of Ananda.
3. Decisions within the Sangha were taken through a democratic process of voting using Salakas.

Which of the statements given above is/are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"c",
explanation:"Women were not admitted from the beginning. They were admitted later after Mahaprajapati Gautami's request supported by Ananda. Statements 1 and 3 are correct."
},

{
id:5,
section:"History",
question:`Match List I (Buddhist Council) with List II (Presiding Monk/Ruler):

1. First Council
2. Second Council
3. Third Council
4. Fourth Council

I. Moggaliputta Tissa / Ashoka
II. Mahakassapa / Ajatashatru
III. Vasumitra / Kanishka
IV. Sabakami / Kalashoka

Select the correct answer.`,
options:{
a:"1-II, 2-IV, 3-I, 4-III",
b:"1-I, 2-III, 3-II, 4-IV",
c:"1-II, 2-I, 3-IV, 4-III",
d:"1-IV, 2-II, 3-I, 4-III"
},
answer:"a",
explanation:"First Council–Mahakassapa, Second–Sabakami, Third–Moggaliputta Tissa, Fourth–Vasumitra under Kanishka."
},

{
id:6,
section:"History",
question:`The term 'Syadvada' is associated with which religious philosophy?`,
options:{
a:"Mahayana Buddhism",
b:"Ajivika Philosophy",
c:"Jainism",
d:"Charvaka School"
},
answer:"c",
explanation:"Syadvada is a major doctrine of Jainism which explains the theory of conditioned predication and relativity of truth."
},

{
id:7,
section:"History",
question:`Which Mauryan officer was responsible for the collection of land revenue and maintaining the accounts of the state?`,
options:{
a:"Sannidhatu",
b:"Samahartu",
c:"Rajuka",
d:"Pradeshta"
},
answer:"b",
explanation:"Samaharta was the chief revenue collector. Sannidhata was the treasurer."
},

{
id:8,
section:"History",
question:`Consider the following statements regarding Ashoka's Dhamma:

1. It was a new religion designed to replace Brahmanism and Buddhism.
2. It emphasized moral conduct such as obedience to parents and kindness to slaves and servants.
3. Ashoka appointed Dhamma-Mahamatras to propagate these ideas and look after people's welfare.

Which of the statements given above are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"b",
explanation:"Ashoka's Dhamma was not a new religion. It was a code of ethical conduct. Statements 2 and 3 are correct."
},

{
id:9,
section:"History",
question:`The Mauryan officer 'Pautavadhyaksha' was in charge of:`,
options:{
a:"Tolls and Customs",
b:"Weights and Measures",
c:"Agriculture and Crown Lands",
d:"State Granaries"
},
answer:"b",
explanation:"Pautavadhyaksha supervised weights and measures to ensure standardization in trade and commerce."
},

{
id:10,
section:"History",
question:`Which of the following Ashokan inscriptions mentions the name 'Ashoka' explicitly rather than only 'Devanampiya Piyadassi'?`,
options:{
a:"Maski and Gujarra",
b:"Rummindei Pillar Inscription",
c:"Kalsi Rock Edict",
d:"Bhabru Edict"
},
answer:"a",
explanation:"The Maski and Gujarra inscriptions explicitly mention the name 'Ashoka', helping historians identify Devanampiya Piyadassi with Ashoka."
},

{
id:11,
section:"History",
question:`The 'Saptanga Theory' of state, which includes the King, Minister, Territory, Fort, Treasury, Army, and Ally, was propounded in:`,
options:{
a:"Indika",
b:"Arthashastra",
c:"Mudrarakshasa",
d:"Rajatarangini"
},
answer:"b",
explanation:"The Saptanga Theory of State was explained by Kautilya in the Arthashastra. The seven elements are Swami, Amatya, Janapada, Durga, Kosha, Danda and Mitra."
},

{
id:12,
section:"History",
question:`Consider the following statements regarding Gupta literature:

1. The period is marked by the development of the Nagara style in temple construction.
2. Kalidasa, the author of Abhijnanashakuntalam, flourished in the court of Chandragupta II.
3. The Puranas were finally compiled and given their present form during this age.

Which of the statements given above are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"d",
explanation:"All three statements are correct. Gupta Age witnessed development of Nagara architecture, Kalidasa flourished under Chandragupta II and Puranas attained their present form."
},

{
id:13,
section:"History",
question:`The Iron Pillar at Mehrauli, which has remained rust-free for centuries, is a testament to the metallurgical skill of which period?`,
options:{
a:"Mauryan",
b:"Kushan",
c:"Gupta",
d:"Satavahana"
},
answer:"c",
explanation:"The Iron Pillar is generally attributed to the Gupta period and reflects advanced metallurgical knowledge."
},

{
id:14,
section:"History",
question:`Regarding the socio-economic conditions in the Gupta Age, identify the INCORRECT statement:`,
options:{
a:"There was a decline in long-distance trade with the Roman Empire after the 3rd century AD.",
b:"The position of Shudras improved as they were now permitted to listen to the recitations of the Puranas.",
c:"Untouchability increased, and groups like the Chandalas were required to live outside the city.",
d:"The use of gold coins (Dinars) reached its peak in terms of purity and volume in the later Gupta period."
},
answer:"d",
explanation:"Gold coinage was strongest during the early Gupta rulers such as Samudragupta and Chandragupta II. Later Gupta rulers witnessed a decline."
},

{
id:15,
section:"History",
question:`The 'Allahabad Prasasti' inscription, which provides a detailed account of Samudragupta's reign, was composed by:`,
options:{
a:"Banabhatta",
b:"Harisena",
c:"Ravikirti",
d:"Fa-Hien"
},
answer:"b",
explanation:"Harisena, the court poet of Samudragupta, composed the Allahabad Prasasti."
},

{
id:16,
section:"History",
question:`Match List I (Author) with List II (Work):

1. Aryabhatta
2. Varahamihira
3. Vishakhadatta
4. Shudraka

I. Brihat Samhita
II. Aryabhattiya
III. Mudrarakshasa
IV. Mrichchhakatika

Select the correct answer.`,
options:{
a:"1-II, 2-I, 3-III, 4-IV",
b:"1-I, 2-II, 3-III, 4-IV",
c:"1-II, 2-III, 3-I, 4-IV",
d:"1-IV, 2-II, 3-I, 4-III"
},
answer:"a",
explanation:"Aryabhatta–Aryabhattiya, Varahamihira–Brihat Samhita, Vishakhadatta–Mudrarakshasa, Shudraka–Mrichchhakatika."
},

{
id:17,
section:"History",
question:`Which of the following literary works was NOT written by Harshavardhana?`,
options:{
a:"Ratnavali",
b:"Priyadarshika",
c:"Nagananda",
d:"Harshacharita"
},
answer:"d",
explanation:"Harshacharita was written by Banabhatta. Ratnavali, Priyadarshika and Nagananda were written by Harsha."
},

{
id:18,
section:"History",
question:`In the Chola administrative system, the 'Ur' was:`,
options:{
a:"A general assembly of the village",
b:"An assembly of merchants in a town",
c:"An executive committee of the Sabha",
d:"A tax-free village granted to Brahmanas"
},
answer:"a",
explanation:"Ur was the assembly of common villages. Sabha was the assembly of Brahmana villages."
},

{
id:19,
section:"History",
question:`Consider the following statements regarding the 'Sabha' or 'Mahasabha' in Chola villages:

1. It was an assembly of adult men in Brahmanical villages known as agraharams.
2. Members of its executive committees were elected through the Kudavolai system.
3. The Sabha had the power to levy taxes and manage local tanks and temples.

Which of the statements given above is/are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"d",
explanation:"All three statements are correct. Sabha enjoyed extensive powers in village administration."
},

{
id:20,
section:"History",
question:`Regarding Chola military administration, identify the correct statement:`,
options:{
a:"The Cholas relied exclusively on land-based cavalry and lacked a navy.",
b:"Most Chola kings were protected by a specialized bodyguard known as Velaikkaras, who were sworn to defend the king even at the cost of their lives.",
c:"The infantry was primarily armed with muskets and early artillery.",
d:"Military service was strictly limited to members of the royal family."
},
answer:"b",
explanation:"The Velaikkaras were elite bodyguards of the Chola kings. Cholas also maintained a powerful navy."
},

{
id:21,
section:"History",
question:`Which Chola king is credited with building the Brihadishwara Temple at Tanjore and carrying out an elaborate survey of land for revenue assessment?`,
options:{
a:"Vijayalaya",
b:"Rajaraja I",
c:"Rajendra I",
d:"Kulottunga I"
},
answer:"b",
explanation:"Rajaraja I constructed the Brihadishwara Temple at Tanjore and conducted a systematic land survey for revenue administration."
},

{
id:22,
section:"History",
question:`Match List I (Chola Administrative Unit) with List II (Corresponding Modern Term):

List I
1. Mandalam
2. Valanadu
3. Nadu
4. Grama

List II
I. District
II. Village
III. Province
IV. Group of Districts

Select the correct answer.`,
options:{
a:"1-III, 2-IV, 3-I, 4-II",
b:"1-I, 2-II, 3-III, 4-IV",
c:"1-III, 2-I, 3-IV, 4-II",
d:"1-IV, 2-III, 3-II, 4-I"
},
answer:"a",
explanation:"Mandalam = Province, Valanadu = Group of districts, Nadu = District, Grama = Village."
},

{
id:23,
section:"History",
question:`Regarding the position of women in ancient India, consider the following statements:

1. In the Mauryan period, women could be employed as royal bodyguards and spies.
2. The practice of Sati became widespread and obligatory for all widows during the Gupta period.
3. Women were generally denied the right to study the Vedas in both the Later Vedic and Gupta ages.

Which of the statements given above are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"c",
explanation:"Statement 1 and 3 are correct. Sati was not compulsory or universal during the Gupta period."
},

{
id:24,
section:"History",
question:`The inscriptions describing the detailed working of village local self-government under the Cholas are primarily found at:`,
options:{
a:"Uttaramerur",
b:"Tanjore",
c:"Gangaikondacholapuram",
d:"Kanchi"
},
answer:"a",
explanation:"The Uttaramerur inscriptions provide detailed information about Chola local self-government and the Kudavolai election system."
},

{
id:25,
section:"History",
question:`Consider the following statements regarding the transition from the Early Vedic Age to the Later Vedic Age:

1. The Vidatha, which was the oldest tribal assembly and involved women in its deliberations, completely disappeared in the Later Vedic period.
2. The transition from a pastoral society to a settled agrarian society led to the permanent ownership of land by individual families, a concept absent in the Rigvedic period.
3. In the Later Vedic period, the King's power was checked by the Sabha and Samiti, which grew more powerful as tribal identities strengthened.

Which of the statements given above is/are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"a",
explanation:"Statements 1 and 2 are correct. Sabha and Samiti actually declined in importance as royal authority increased."
},

{
id:26,
section:"History",
question:`Consider the following statements about the Mauryan spy system (Gudha-purushas), as described in the Arthashastra:

1. The spies were divided into two main groups: Sanstha (stationary spies) and Sanchari (wandering spies).
2. Spies were recruited from various sections of society, including students, orphans, and even women disguised as hermits.
3. The spies were directly responsible to the Pradeshta, the officer in charge of criminal justice and internal security.

Which of the statements given above are correct?`,
options:{
a:"1 and 2 only",
b:"2 and 3 only",
c:"1 and 3 only",
d:"1, 2 and 3"
},
answer:"a",
explanation:"Statements 1 and 2 are correct. The spy system ultimately functioned under the king and central administration, not directly under the Pradeshta."
},

{
id:27,
section:"History",
question:`Regarding the Rigvedic society, identify the INCORRECT statement:`,
options:{
a:"The society was essentially patriarchal, but women attended popular assemblies like the Sabha and Samiti.",
b:"The primary form of property was land ownership, while cattle played a secondary role in the economy.",
c:"The Pani were a group of people often described as cattle-thieves and enemies of the Vedic tribes.",
d:"Monogamy was the general rule, though polygamy was practiced by royal and noble families."
},
answer:"b",
explanation:"Rigvedic society was primarily pastoral. Cattle were the chief form of wealth, not land ownership."
},

{
id:28,
section:"History",
question:`Identify the correct statement regarding the teachings of Vardhamana Mahavira:`,
options:{
a:"He believed that only conscious beings (humans and animals) possess souls.",
b:"Jainism's strict emphasis on Ahimsa led many of its followers to avoid agriculture and instead adopt professions like trade and commerce.",
c:"Mahavira completely rejected the existence of God in his early sermons.",
d:"The ultimate goal of Jainism is the attainment of Nirvana through the Eightfold Path."
},
answer:"b",
explanation:"Strict non-violence discouraged activities like agriculture that could harm living beings, leading many Jains towards trade and commerce."
},

{
id:29,
section:"History",
question:`The Aihole Inscription, composed by Ravikirti, describes the defeat of Harshavardhana by which ruler?`,
options:{
a:"Pulakesin II",
b:"Narasimhavarman I",
c:"Shashanka of Gauda",
d:"Mahendravarman I"
},
answer:"a",
explanation:"The Aihole inscription records the victory of Chalukya ruler Pulakesin II over Harshavardhana."
},
  
{
id:30,
section:"History",
question:`Regarding Mauryan art, which feature is considered the most remarkable contribution of the period?`,
options:{
a:"The introduction of the Vimana style in temple architecture.",
b:"The high-quality polish of the monolithic sandstone pillars.",
c:"The use of marble in the construction of the palace at Pataliputra.",
d:"The creation of the first rock-cut cave temples in South India."
},
answer:"b",
explanation:"Mauryan pillars, especially Ashokan pillars, are famous for their mirror-like polish and exceptional craftsmanship."
},

{
id:31,
section:"Polity",
question:`Match List-I (Act) with List-II (Key Provision) and select the correct code:

List-I
1. Regulating Act of 1773
2. Charter Act of 1833
3. Indian Councils Act of 1861
4. Government of India Act of 1919

List-II
i. Established the final step toward centralization in British India
ii. Introduced the portfolio system for administration
iii. Laid the foundation of central administration in India
iv. Classified subjects into Central and Provincial by "Devolution Rules"`,
options:{
a:"1-iii, 2-i, 3-ii, 4-iv",
b:"1-i, 2-iii, 3-iv, 4-ii",
c:"1-iii, 2-iv, 3-i, 4-ii",
d:"1-iv, 2-ii, 3-iii, 4-i"
},
answer:"a",
explanation:"Regulating Act 1773 laid the foundation of central administration. Charter Act 1833 completed centralization. Indian Councils Act 1861 introduced the portfolio system. GOI Act 1919 introduced Devolution Rules."
},

{
id:32,
section:"Polity",
question:`Which of the following statements regarding the "Objectives Resolution" is/are correct?

I. It was moved by Jawaharlal Nehru on December 13, 1946.
II. It declared India's resolve to be an Independent Sovereign Republic.
III. It stated that all power and authority of sovereign India are derived from the British Crown.
IV. It was adopted unanimously by the Assembly on January 22, 1947.`,
options:{
a:"I, II, and IV only",
b:"I and II only",
c:"II and III only",
d:"All of the above"
},
answer:"a",
explanation:"Statements I, II and IV are correct. Statement III is incorrect because sovereignty was derived from the people of India, not the British Crown."
},

{
id:33,
section:"Polity",
question:`Arrange the following events of the making of the Constitution in chronological order:

A. First meeting of the Constituent Assembly
B. Appointment of the Drafting Committee
C. Adoption of the National Flag
D. Passing of the Objectives Resolution`,
options:{
a:"A, D, C, B",
b:"A, C, D, B",
c:"D, A, B, C",
d:"C, A, D, B"
},
answer:"a",
explanation:"First meeting (Dec 1946) → Objectives Resolution adopted (Jan 1947) → National Flag adopted (July 1947) → Draft Constitution prepared by Drafting Committee."
},

{
id:34,
section:"Polity",
question:`Identify the incorrect statement regarding the Preamble of the Indian Constitution:`,
options:{
a:"It is based on the Objectives Resolution moved by Pandit Nehru.",
b:"The 42nd Amendment Act (1976) added the words Socialist, Secular and Integrity.",
c:"In the Berubari Union case (1960), the Supreme Court ruled that the Preamble is a part of the Constitution.",
d:"It is not a source of power to the legislature nor a prohibition upon its powers."
},
answer:"c",
explanation:"In the Berubari case (1960), the Supreme Court held that the Preamble is NOT a part of the Constitution. This was later changed in the Kesavananda Bharati case."
},

{
id:35,
section:"Polity",
question:`Match List-I (Borrowed Feature) with List-II (Source):

1. Procedure Established by Law
2. Federation with a Strong Centre
3. Advisory Jurisdiction of Supreme Court
4. Prerogative Writs

List-II
i. Japanese Constitution
ii. Canadian Constitution
iii. British Constitution
iv. Government of India Act, 1935`,
options:{
a:"1-i, 2-ii, 3-iv, 4-iii",
b:"1-iii, 2-iv, 3-ii, 4-i",
c:"1-iv, 2-iii, 3-i, 4-ii",
d:"1-ii, 2-i, 3-iii, 4-iv"
},
answer:"a",
explanation:"Procedure Established by Law—Japan; Strong Centre—Canada; Advisory Jurisdiction—GOI Act 1935; Prerogative Writs—Britain."
},

{
id:36,
section:"Polity",
question:`Identify the true statements regarding the 97th Constitutional Amendment Act of 2011:

A. It gave constitutional status and protection to co-operative societies.
B. It made the right to form co-operative societies a Fundamental Right under Article 19.
C. It added a new Directive Principle (Article 43-B) on the promotion of co-operative societies.
D. It added Part IX-B titled 'The Co-operative Societies'.`,
options:{
a:"A, B, C and D",
b:"A, B and D only",
c:"B, C and D only",
d:"A and C only"
},
answer:"a",
explanation:"All four statements are features of the 97th Constitutional Amendment."
},

{
id:37,
section:"Polity",
question:`Which of the following Fundamental Rights are available only to citizens of India and not to foreigners?

A. Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth
B. Equality before law and equal protection of laws
C. Protection of language, script, and culture of minorities
D. Right to freedom of speech, assembly, association, movement, residence, and profession`,
options:{
a:"A, C, and D only",
b:"A, B, and D only",
c:"B, C, and D only",
d:"All of the above"
},
answer:"a",
explanation:"Article 14 (Equality before law) is available to all persons. The remaining rights are available only to citizens."
},

{
id:38,
section:"Polity",
question:`In which case did the Supreme Court rule that "where Article 31-C comes in, Article 14 goes out"?`,
options:{
a:"Kesavananda Bharati case",
b:"Minerva Mills case",
c:"Golak Nath case",
d:"Shankari Prasad case"
},
answer:"a",
explanation:"The observation was made in the Kesavananda Bharati case while examining Article 31-C."
},

{
id:39,
section:"Polity",
question:`Match List-I (Concept) with List-II (Related Case):

1. Right to Privacy
2. 'Rarest of rare' for death penalty
3. Validity of 27% OBC reservation
4. Preamble is an integral part of Constitution

List-II
i. Bachan Singh case
ii. Indra Sawhney case
iii. K.S. Puttaswamy case
iv. LIC of India case`,
options:{
a:"1-iii, 2-i, 3-ii, 4-iv",
b:"1-i, 2-ii, 3-iv, 4-iii",
c:"1-iv, 2-iii, 3-i, 4-ii",
d:"1-ii, 2-iv, 3-iii, 4-i"
},
answer:"a",
explanation:"Privacy—Puttaswamy, Rarest of Rare—Bachan Singh, OBC Reservation—Indra Sawhney, Preamble integral part—LIC of India case."
},

{
id:40,
section:"Polity",
question:`Assertion (A): Directive Principles of State Policy are justiciable in nature.

Reason (R): They are fundamental in the governance of the country and it is the duty of the State to apply them in making laws.`,
options:{
a:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
b:"Both (A) and (R) are true and (R) is the correct explanation of (A)",
c:"(A) is true but (R) is false",
d:"(A) is false but (R) is true"
},
answer:"d",
explanation:"DPSPs are non-justiciable. However, Article 37 states that they are fundamental in the governance of the country and it is the duty of the State to apply them."
},

{
id:41,
section:"Polity",
question:`Which Fundamental Duty requires citizens to renounce practices derogatory to the dignity of women?`,
options:{
a:"To promote harmony and the spirit of common brotherhood",
b:"To value and preserve the rich heritage of our composite culture",
c:"To protect and improve the natural environment",
d:"To abide by the Constitution and respect its ideals"
},
answer:"a",
explanation:"Article 51A(e) directs citizens to promote harmony and renounce practices derogatory to the dignity of women."
},

{
id:42,
section:"Polity",
question:`Identify the incorrect statement regarding Article 32 (Right to Constitutional Remedies):`,
options:{
a:"It was called the 'soul of the Constitution' by Dr. B.R. Ambedkar.",
b:"The Supreme Court has ruled that Article 32 is a basic feature of the Constitution.",
c:"The right to move the Supreme Court cannot be suspended under any circumstances.",
d:"An aggrieved citizen can move the Supreme Court directly for the enforcement of Fundamental Rights."
},
answer:"c",
explanation:"Article 32 can be suspended during a National Emergency in certain situations. Hence statement (c) is incorrect."
},

{
id:43,
section:"Polity",
question:`Which of the following is/are elements of the 'Basic Structure' of the Constitution?

A. Supremacy of the Constitution
B. Judicial Review
C. Parliamentary System
D. Free and Fair Elections`,
options:{
a:"A and B only",
b:"A, B and C only",
c:"B, C and D only",
d:"A, B, C and D"
},
answer:"d",
explanation:"All four have been recognized by the Supreme Court as elements of the Basic Structure."
},

{
id:44,
section:"Polity",
question:`Identify the true statements regarding the Ninth Schedule:

A. It was added by the 1st Amendment Act of 1951.
B. Laws included in it are protected from judicial review on the ground of violation of FRs.
C. The Supreme Court ruled in the I.R. Coelho case (2007) that laws added after April 24, 1973 are open to judicial review.
D. It originally contained 11 acts but now has 282.`,
options:{
a:"A, B, C and D",
b:"A, B and C only",
c:"B, C and D only",
d:"A and C only"
},
answer:"b",
explanation:"Statements A, B and C are correct. The schedule originally contained 13 Acts, but your paper's statement says 11 Acts, making D incorrect."
},

{
id:45,
section:"Polity",
question:`Assertion (A): A High Court in India has the power to review its own judgement.

Reason (R): This power is explicitly conferred on the High Courts by the Constitution just like the Supreme Court.`,
options:{
a:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
b:"(A) is true but (R) is false",
c:"Both (A) and (R) are false",
d:"(A) is false but (R) is true"
},
answer:"b",
explanation:"High Courts possess the power of review. However, unlike the Supreme Court, this power is not explicitly mentioned in the Constitution."
},

{
id:46,
section:"Polity",
question:`Identify the true statements regarding 'Judicial Activism':

A. The concept originated and developed in the USA.
B. It was first coined in 1947 by Arthur Schlesinger Jr.
C. In India, Justice V.R. Krishna Iyer and Justice P.N. Bhagwati were pioneers of this concept.
D. It is closely related to the concept of Public Interest Litigation (PIL).`,
options:{
a:"A, B, C and D",
b:"A, B and C only",
c:"B, C and D only",
d:"A and D only"
},
answer:"a",
explanation:"All four statements are correct regarding Judicial Activism."
},

{
id:47,
section:"Polity",
question:`Which DPSP directs the State to 'separate the judiciary from the executive in the public services of the State'?`,
options:{
a:"Article 44",
b:"Article 50",
c:"Article 51",
d:"Article 39A"
},
answer:"b",
explanation:"Article 50 directs the State to separate the judiciary from the executive."
},

{
id:48,
section:"Polity",
question:`Who elects the President of India as per the Electoral College?

A. Elected members of both Houses of Parliament
B. Nominated members of both Houses of Parliament
C. Elected members of the Legislative Councils of all States
D. Elected members of the Legislative Assemblies of J&K and Puducherry which are specifically mentioned under Article 54.`,
options:{
a:"A, C and D only",
b:"A and D only",
c:"A only",
d:"A, B, C and D"
},
answer:"c",
explanation:"Only elected MPs and elected MLAs of States, Delhi, J&K and Puducherry participate. Nominated members and Legislative Council members do not."
},

{
id:49,
section:"Polity",
question:`Assertion (A): The President is a nominal executive while the Prime Minister is the real executive.

Reason (R): India has adopted a Parliamentary system of government where the executive is responsible to the President.`,
options:{
a:"Both (A) and (R) are true and (R) is the correct explanation of (A)",
b:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
c:"(A) is true but (R) is false",
d:"(A) is false but (R) is true"
},
answer:"c",
explanation:"The President is the nominal executive and PM is the real executive. However, the Council of Ministers is collectively responsible to the Lok Sabha, not the President."
},

{
id:50,
section:"Polity",
question:`Identify the correct statement regarding a Bill under Article 110 (Money Bill):

1. It can be introduced only in the Lok Sabha on the recommendation of the President.
2. The Rajya Sabha cannot reject but can amend the bill. 
3. If the Rajya Sabha does not return the bill within 14 days, it is deemed passed with the recommendations of the Rajya Sabha.
4. The President can use their suspensive veto to reject the bill.`,
options:{
a:"1 only",
b:"1 and 3 only",
c:"1, 2 and 4",
d:"1, 2, 3 and 4"
},
answer:"a",
explanation:"Statement 1 ✅ Correct — Money Bill can be introduced only in Lok Sabha and only on the recommendation of the President.
Statement 2 ❌ Incorrect — Rajya Sabha cannot amend a Money Bill. It can only make recommendations.
Statement 3 ❌ Incorrect — If Rajya Sabha does not return the Bill within 14 days, it is deemed passed in the form passed by Lok Sabha, not with Rajya Sabha's recommendations.
Statement 4 ❌ Incorrect — President cannot exercise suspensive veto on a Money Bill because it cannot be returned for reconsideration.
Therefore, only Statement 1 is correct. Answer: (A) 1 only"
},

{
id:51,
section:"Polity",
question:`Which of the following is not a ground for the disqualification of a member of Parliament under the Tenth Schedule?`,
options:{
a:"If an independent member joins any political party after election",
b:"If a nominated member joins any political party before the expiry of six months",
c:"If a member voluntarily gives up membership of their political party",
d:"If a member votes contrary to directions of their party without prior permission"
},
answer:"b",
explanation:"A nominated member may join a political party within six months of taking his seat without attracting disqualification."
},

{
id:52,
section:"Polity",
question:`Match List-I (Judicial Concept) with List-II (Definition):

1. Judicial Review
2. Judicial Activism
3. Judicial Restraint
4. Public Interest Litigation

i. Pro-active role played by the judiciary in protecting rights
ii. Power of court to examine constitutionality of legislative acts
iii. Litigation for the protection of public interest
iv. Judiciary following a self-imposed limit on its powers`,
options:{
a:"1-ii, 2-i, 3-iv, 4-iii",
b:"1-ii, 2-iv, 3-i, 4-iii",
c:"1-i, 2-ii, 3-iv, 4-iii",
d:"1-i, 2-iv, 3-ii, 4-iii"
},
answer:"a",
explanation:"Judicial Review–constitutionality check; Judicial Activism–proactive role; Judicial Restraint–self-imposed limits; PIL–public interest litigation."
},

{
id:53,
section:"Polity",
question:`The maximum life of an ordinance promulgated by the President (if not approved by Parliament) is:`,
options:{
a:"Six months",
b:"Six weeks",
c:"Six months and six weeks",
d:"One year"
},
answer:"c",
explanation:"An ordinance can survive for a maximum period of six months plus six weeks depending on the timing of Parliament's reassembly."
},

{
id:54,
section:"Polity",
question:`Assertion (A): The Speaker of the Lok Sabha vacates his office when the Lok Sabha is dissolved following the fall of the Council of Ministers due to a no-confidence motion.

Reason (R): He continues in office until immediately before the first meeting of the Lok Sabha after the general dissolution.`,
options:{
a:"Both (A) and (R) are true and (R) is the correct explanation of (A)",
b:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
c:"(A) is true but (R) is false",
d:"(A) is false but (R) is true"
},
answer:"d",
explanation:"The Speaker does not vacate office immediately after dissolution. He continues until just before the first meeting of the next Lok Sabha."
},

{
id:55,
section:"Polity",
question:`Which of the following is/are 'Charged Expenditure' upon the Consolidated Fund of India as provided by the Constitution?

A. Salaries and allowances of the President
B. Salaries and allowances of the Speaker and Deputy Speaker of Lok Sabha
C. To meet the needs of the international agreements in which India is member
D. Debt charges for which the Government of India is liable`,
options:{
a:"A and B only",
b:"A, B and D",
c:"A, C and D",
d:"All of the above"
},
answer:"b",
explanation:"Salaries of the President, presiding officers and debt charges are charged expenditure. Statement C is not a constitutional charged expenditure item."
},

{
id:56,
section:"Polity",
question:`Assertion (A): The All India Services constitute a unitary feature of the Indian federal system.

Reason (R): Their members are recruited and trained by the Centre, but they serve both the Centre and the States.`,
options:{
a:"Both (A) and (R) are true and (R) is the correct explanation of (A)",
b:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
c:"(A) is true but (R) is false",
d:"(A) is false but (R) is true"
},
answer:"a",
explanation:"AIS officers are centrally recruited but serve both levels of government, making them a unitary feature in an otherwise federal system."
},

{
id:57,
section:"Polity",
question:`Which Commission recommended the establishment of a permanent Inter-State Council under Article 263?`,
options:{
a:"Sarkaria Commission",
b:"Rajamannar Committee",
c:"Punchhi Commission",
d:"Administrative Reforms Commission"
},
answer:"a",
explanation:"The Sarkaria Commission strongly recommended the establishment of a permanent Inter-State Council."
},

{
id:58,
section:"Polity",
question:`Assertion (A): The UPSC can serve the needs of a State on the request of the State Chief Minister.

Reason (R): This requires the prior approval of the President of India.`,
options:{
a:"Both (A) and (R) are true and (R) is the correct explanation of (A)",
b:"Both (A) and (R) are true but (R) is not the correct explanation of (A)",
c:"(A) is true but (R) is false",
d:"(A) is false but (R) is true"
},
answer:"d",
explanation:"UPSC may assist a State if requested by the Governor and approved by the President. The statement mentioning Chief Minister is incorrect."
},

{
id:59,
section:"Polity",
question:`Regarding Centre-State financial relations, which statement about the 'Alternative Scheme of Devolution' is true?`,
options:{
a:"It was introduced by the 101st Amendment Act of 2016.",
b:"It mandated that 29% of the total income from certain central taxes should go to the States.",
c:"It excludes Corporation Tax from the sharable pool.",
d:"It was based on the recommendations of the 14th Finance Commission."
},
answer:"b",
explanation:"Under this scheme, 29% of the net proceeds of certain central taxes were devolved to the states."
},

{
id:60,
section:"Polity",
question:`Which Constitutional Amendment made it obligatory for the President to give assent to a Constitutional Amendment Bill?`,
options:{
a:"42nd Amendment Act",
b:"44th Amendment Act",
c:"24th Amendment Act",
d:"1st Amendment Act"
},
answer:"c",
explanation:"The 24th Constitutional Amendment Act, 1971 made it mandatory for the President to give assent to Constitutional Amendment Bills."
}
];
