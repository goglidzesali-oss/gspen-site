/* GSPEN i18n — Georgian (default) ↔ English toggle.
   Mechanism: exact text-node dictionary + regex fallbacks. No HTML markup needed. */
(function(){
"use strict";

var M = {
/* ===== shared chrome ===== */
"საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია":"Georgian Association for Parenteral, Enteral Nutrition and Metabolism",
"GSPEN — საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია":"GSPEN — Georgian Association for Parenteral, Enteral Nutrition and Metabolism",
"© 2026 GSPEN — საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია":"© 2026 GSPEN — Georgian Association for Parenteral, Enteral Nutrition and Metabolism",
"საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია — კლინიკური კვების ეროვნული წარმომადგენლობითი ორგანო საქართველოში.":"The Georgian Association for Parenteral, Enteral Nutrition and Metabolism — the national representative body for clinical nutrition in Georgia.",
"მთავარი":"Home",
"ჩვენ შესახებ ▾":"About us ▾",
"ჩვენ შესახებ":"About us",
"ვინ ვართ ჩვენ":"Who we are",
"მისია, პრინციპები და მმართველობითი ორგანო":"Mission, principles and governing body",
"წესდება":"Charter",
"ასოციაციის მმართველი დოკუმენტი":"The association's governing document",
"პროექტები ▾":"Projects ▾",
"პროექტები":"Projects",
"მიმდინარე":"Current",
"პროექტები, რომლებზეც ახლა ვმუშაობთ":"Projects we are working on now",
"დასრულებული":"Completed",
"განხორციელებული პროექტები და შედეგები":"Completed projects and results",
"დაგეგმილი":"Planned",
"რას ვგეგმავთ უახლოეს მომავალში":"What we are planning next",
"რესურსები ▾":"Resources ▾",
"რესურსები":"Resources",
"ვებინარები":"Webinars",
"ჩაწერილი და მომავალი ვებინარები":"Recorded and upcoming webinars",
"სტატიები":"Articles",
"ბლოგი და პუბლიკაციები":"Blog and publications",
"ხელსაწყოები":"Tools",
"ინტერაქტიული ინსტრუმენტები":"Interactive instruments",
"კალკულატორები":"Calculators",
"გახდი წევრი":"Become a member",
"მენიუ":"Menu",
"ასოციაცია":"Association",
"გუნდი":"Team",
"კონტაქტი":"Contact",
"თბილისი, საქართველო":"Tbilisi, Georgia",
"ვინ ვართ":"Who we are",
"გაწევრიანება":"Membership",
"დახურვა ✕":"Close ✕",

/* ===== home ===== */
"GSPEN · პროფესიული ასოციაცია":"GSPEN · Professional association",
"ვმუშაობთ იმისთვის, რომ ყველამ მიიღოს":"We work to ensure that everyone receives",
"დროული, უსაფრთხო და შესაბამისი":"timely, safe and appropriate",
"ნუტრიციული დახმარება.":"nutritional care.",
"რესურსების ნახვა":"Browse resources",
"სიახლეები":"News",
"მიმდინარე პროექტი":"Current project",
"პირველი ჰოსპიტალური მალნუტრიციის აუდიტი საქართველოში":"The first hospital malnutrition audit in Georgia",
"შემოუერთდი მონაწილე კლინიკებს და გახდი კვლევის თანაავტორი":"Join the participating clinics and become a co-author of the study",
"გაიგე მეტი →":"Learn more →",
"ვებინარი · 26 აგვისტო, 20:00":"Webinar · 26 August, 20:00",
"ნაწლავის ანთებითი დაავადებები და კვება":"Inflammatory bowel disease and nutrition",
"სალომე გოგლიძე, კლინიკური ნუტრიციოლოგი — მონაწილეობა უფასოა, საჭიროა რეგისტრაცია":"Salome Goglidze, clinical nutritionist — participation is free, registration required",
"რეგისტრაცია →":"Register →",
"რეგისტრაცია":"Register",
"რა არის GSPEN":"What is GSPEN",
"— პროფესიული საზოგადოება, რომელიც მუშაობს იმისთვის, რომ ყველა ინდივიდმა მიიღოს":"— a professional society working to ensure that every individual receives",
"დროული, უსაფრთხო და შესაბამისი ნუტრიციული დახმარება":"timely, safe and appropriate nutritional care",
"განყოფილებები":"Sections",
"რესურსები და ინსტრუმენტები":"Resources and tools",
"ყველა":"All",
"ჩაწერილი და მომავალი ვებინარები კლინიკურ კვებაზე — ვიდეოს ბიბლიოთეკა.":"Recorded and upcoming webinars on clinical nutrition — a video library.",
"ნახვა →":"View →",
"ბლოგი და პუბლიკაციები კლინიკურ კვებაზე — GSPEN-ის გუნდისგან.":"Blog and publications on clinical nutrition — from the GSPEN team.",
"კითხვა →":"Read →",
"ნუტრიციული ხელსაწყოები":"Nutrition tools",
"ესკალაცია/დეესკალაცია, კალკულატორები, სკრინინგი (MUST/GLIM).":"Escalation/de-escalation, calculators, screening (MUST/GLIM).",
"გახსნა →":"Open →",
"გახდი GSPEN-ის წევრი":"Become a GSPEN member",
"შემოგვიერთდი პროფესიულ საზოგადოებაში და მიიღე წვდომა ვებინარებზე, რესურსებზე და ღონისძიებებზე.":"Join our professional society and get access to webinars, resources and events.",
"რა ხდება GSPEN-ში":"What's happening at GSPEN",
"ყველა პროექტი →":"All projects →",
"უკან":"Back",
"წინ":"Forward",
"GSPEN იწყებს ეროვნულ კვლევას მალნუტრიციის გავრცელების შესაფასებლად. გაიგე, როგორ მიიღო მონაწილეობა და გახდე ავტორი →":"GSPEN is launching a national study to assess the prevalence of malnutrition. Find out how to take part and become an author →",
"ვებინარი":"Webinar",
"26 აგვისტო · 20:00":"26 August · 20:00",
"ვებინარი: ნაწლავის ანთებითი დაავადებები და კვება":"Webinar: Inflammatory bowel disease and nutrition",
"სალომე გოგლიძე, კლინიკური ნუტრიციოლოგი — დარეგისტრირდი და მიიღე შეხვედრის ბმული →":"Salome Goglidze, clinical nutritionist — register to receive the meeting link →",
"კლინიკური კვების ეროვნული ასოციაცია — მისია, პრინციპები და მმართველობითი ორგანო →":"The national clinical nutrition association — mission, principles and governing body →",
"ონლაინ ვებინარი":"Online webinar",

/* ===== who we are ===== */
"ვინ ვართ — GSPEN":"Who we are — GSPEN",
"GSPEN — კლინიკური კვების ეროვნული წარმომადგენლობითი ორგანო საქართველოში.":"GSPEN — the national representative body for clinical nutrition in Georgia.",
"არის პროფესიული ასოციაცია, რომელიც ზრდის ცნობიერებას მალნუტრიციის შესახებ და მუშაობს პაციენტთა ნუტრიციული ზრუნვის გასაუმჯობესებლად — როგორც საავადმყოფოებში, ისე ბინაზე მოვლის პირობებში.":"is a professional association that raises awareness of malnutrition and works to improve the nutritional care of patients — both in hospitals and in home-care settings.",
"ჩვენ ვაერთიანებთ":"We bring together",
"ექიმებს, დიეტოლოგებს, ექთნებს, ფარმაცევტებსა და მკვლევრებს":"physicians, dietitians, nurses, pharmacists and researchers",
"ერთიან, მულტიდისციპლინურ გუნდში და ვთანამშრომლობთ პაციენტებთან და პროფესიონალებთან, ჯანდაცვის დაწესებულებებთან და ინდუსტრიასთან — ადგილობრივ და ეროვნულ დონეზე.":"into a single multidisciplinary team, and collaborate with patients and professionals, healthcare institutions and industry — locally and nationally.",
"რას ვაკეთებთ":"What we do",
"კარგი ნუტრიციული ზრუნვის ოთხი პრინციპი":"Four principles of good nutritional care",
"იდენტიფიკაცია":"Identification",
"მალნუტრიციის სკრინინგი და შეფასება ვალიდირებული ინსტრუმენტებით (MUST, NRS-2002, GLIM) — ყველა პაციენტში, მიღებისთანავე.":"Screening and assessment of malnutrition using validated tools (MUST, NRS-2002, GLIM) — in every patient, on admission.",
"GSPEN-ის პროექტი: მალნუტრიციის აუდიტი საქართველოში →":"GSPEN project: the malnutrition audit in Georgia →",
"მკურნალობა":"Treatment",
"ინდივიდუალური ნუტრიციული გეგმა თითოეული პაციენტისთვის — დიეტური კონსულტაციიდან ენტერალურ და პარენტერალურ კვებამდე.":"An individual nutrition plan for every patient — from dietary counselling to enteral and parenteral nutrition.",
"სწავლება":"Education",
"ჯანდაცვის პერსონალის განათლება კლინიკურ კვებაში — ვებინარები, სახელმძღვანელოები და ინტერაქტიული ინსტრუმენტები.":"Educating healthcare professionals in clinical nutrition — webinars, guidelines and interactive tools.",
"მულტიდისციპლინური მართვა":"Multidisciplinary management",
"ნუტრიციული ზრუნვის მონიტორინგის სტრუქტურების ჩამოყალიბება — ექიმის, დიეტოლოგისა და ექთნის ერთიანი გუნდით.":"Building structures for monitoring nutritional care — with a joint team of physician, dietitian and nurse.",
"ჩვენი ასოციაცია":"Our association",
"როდის დაარსდა":"When it was founded",
"GSPEN ოფიციალურად დაფუძნდა":"GSPEN was officially founded on",
"2025 წლის 9 დეკემბერს, თბილისში":"9 December 2025, in Tbilisi",
", როგორც არასამეწარმეო (არაკომერციული) იურიდიული პირი.":", as a non-entrepreneurial (non-commercial) legal entity.",
"რა იყო მიზანი":"Why it was created",
"ასოციაციის შექმნის მიზანი იყო ქართულ ჯანდაცვის პრაქტიკასა და საერთაშორისო კლინიკურ სტანდარტებს შორის არსებული ნაპრალის შევსება. დამფუძნებელმა გუნდმა გააცნობიერა საქართველოში არსებული „ორმაგი გამოწვევის\" მოგვარების გადაუდებელი საჭიროება: სიმსუქნის მეტაბოლური კრიზისისა და კლინიკური მალნუტრიციის დაფარული საფრთხის.":"The association was created to close the gap between Georgian healthcare practice and international clinical standards. The founding team recognised the urgent need to address Georgia's “double challenge”: the metabolic crisis of obesity and the hidden threat of clinical malnutrition.",
"GSPEN წარმოადგენს კლინიკური კვების ეროვნულ წარმომადგენლობით ორგანოს საქართველოში — მულტიდისციპლინურ, არაკომერციულ ორგანიზაციას, რომლის მიზანია პაციენტების მკურნალობის შედეგების გაუმჯობესება კლინიკური კვების მეცნიერებისა და პრაქტიკის დანერგვის გზით.":"GSPEN is the national representative body for clinical nutrition in Georgia — a multidisciplinary, non-commercial organisation whose aim is to improve patient outcomes through the science and practice of clinical nutrition.",
"მმართველობითი ორგანო":"Governing body",
"სალომე გოგლიძე":"Salome Goglidze",
"სგ":"SG",
"პრეზიდენტი":"President",
"კლინიკური ნუტრიციოლოგი":"Clinical nutritionist",
"ანა მიქაბერიძე":"Ana Mikaberidze",
"ამ":"AM",
"მდივანი":"Secretary",
"ექიმი ენდოკრინოლოგი":"Physician endocrinologist",
"თორნიკე ენუქიძე":"Tornike Enukidze",
"თე":"TE",
"ხაზინადარი":"Treasurer",
"ექიმი, ნუტრიციოლოგიის მაგისტრი":"Physician, MSc in Nutrition",

/* ===== charter ===== */
"წესდება — GSPEN":"Charter — GSPEN",
"GSPEN-ის წესდება":"GSPEN Charter",
"საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია დაფუძნებულია როგორც არასამეწარმეო (არაკომერციული) იურიდიული პირი. მიღებულია დამფუძნებელი კრების მიერ — 2025 წლის 9 დეკემბერი, თბილისი.":"The Georgian Association for Parenteral, Enteral Nutrition and Metabolism is established as a non-entrepreneurial (non-commercial) legal entity. Adopted by the Founding Assembly — 9 December 2025, Tbilisi.",
"ზოგადი დებულებები":"General provisions",
"1.1. სახელწოდება":"1.1. Name",
"საზოგადოების სახელწოდებაა „Georgian Association for Parenteral, Enteral Nutrition and Metabolism\", შემდგომში მოხსენიებული როგორც „GSPEN\" (ან ასოციაცია). ქართულ ენაზე იგი მოიხსენიება როგორც „საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია\".":"The name of the society is “Georgian Association for Parenteral, Enteral Nutrition and Metabolism”, hereinafter referred to as “GSPEN” (or the Association). In Georgian it is referred to as “sakartvelos parenteraluri, enteraluri kvebisa da metabolizmis asotsiatsia”.",
"1.2. სამართლებრივი სტატუსი":"1.2. Legal status",
"საზოგადოება დაფუძნებულია როგორც არასამეწარმეო (არაკომერციული) იურიდიული პირი (ა(ა)იპ) საქართველოს სამოქალაქო კოდექსის შესაბამისად. იგი წარმოადგენს არაკომერციულ ორგანიზაციას.":"The society is established as a non-entrepreneurial (non-commercial) legal entity under the Civil Code of Georgia. It is a non-profit organisation.",
"1.3. ადგილმდებარეობა":"1.3. Location",
"საზოგადოების მთავარი ოფისი მდებარეობს თბილისში, საქართველო. საბჭოს შეუძლია შეცვალოს კონკრეტული მისამართი მარტივი რეზოლუციის საფუძველზე, რაც ექვემდებარება რეგისტრაციას საჯარო რეესტრის ეროვნულ სააგენტოში.":"The society's principal office is located in Tbilisi, Georgia. The Board may change the specific address by simple resolution, subject to registration with the National Agency of Public Registry.",
"1.4. აფილირება":"1.4. Affiliation",
"საზოგადოება მოქმედებს როგორც კლინიკური კვების (ნუტრიციის) ეროვნული წარმომადგენლობითი ორგანო საქართველოში. GSPEN-ის უმთავრესი სტრატეგიული მიზანია ოფიციალური განაცხადის გაკეთება და ბლოკ-წევრობის (Block Membership) სტატუსის შენარჩუნება ESPEN-ში, რათა ხელი შეუწყოს საერთაშორისო თანამშრომლობას, კვლევებსა და განათლებას ქართველი პროფესიონალებისთვის.":"The society acts as the national representative body for clinical nutrition in Georgia. GSPEN's principal strategic goal is to formally apply for and maintain Block Membership status in ESPEN, in order to foster international collaboration, research and education for Georgian professionals.",
"მისია და მიზნები":"Mission and objectives",
"2.1. მისია":"2.1. Mission",
"GSPEN-ის მისიაა კლინიკური კვების მეცნიერებისა და პრაქტიკის განვითარება საქართველოში პაციენტთა მკურნალობის შედეგების გასაუმჯობესებლად.":"GSPEN's mission is to advance the science and practice of clinical nutrition in Georgia in order to improve patient outcomes.",
"2.2. მიზნები":"2.2. Objectives",
"განათლება:":"Education:",
"ექიმების, ექთნების, დიეტოლოგებისა და ფარმაცევტების დიპლომამდელი და დიპლომისშემდგომი განათლების ხელშეწყობა კლინიკური კვების თეორიასა და პრაქტიკაში.":"To promote undergraduate and postgraduate education of physicians, nurses, dietitians and pharmacists in the theory and practice of clinical nutrition.",
"პრაქტიკა:":"Practice:",
"პარენტერალური და ენტერალური კვების ეროვნული სტანდარტებისა და გაიდლაინების შემუშავება და დანერგვა საქართველოს საავადმყოფოებსა და ბინაზე მოვლის პირობებში.":"To develop and implement national standards and guidelines for parenteral and enteral nutrition in Georgian hospitals and home-care settings.",
"კვლევა:":"Research:",
"მეტაბოლური და ნუტრიციული დარღვევების კვლევის წახალისება საქართველოს მოსახლეობაში.":"To encourage research into metabolic and nutritional disorders in the Georgian population.",
"მულტიდისციპლინური მიდგომა:":"Multidisciplinary approach:",
"დიეტოლოგების, ექიმების, ექთნებისა და ფარმაცევტების ჩართულობის ინტეგრირება ნუტრიციული ზრუნვის ერთიან გუნდში.":"To integrate the involvement of dietitians, physicians, nurses and pharmacists into a unified nutritional care team.",
"ადვოკატირება:":"Advocacy:",
"საქართველოს ოკუპირებული ტერიტორიებიდან დევნილთა, შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტროსთვის რეკომენდაციების მიწოდება ოპტიმალური ნუტრიციული ზრუნვის პოლიტიკის შესახებ.":"To provide recommendations on optimal nutritional care policy to the Ministry of Internally Displaced Persons from the Occupied Territories, Labour, Health and Social Affairs of Georgia.",
"წევრობა":"Membership",
"3.1. წევრობის კატეგორიები":"3.1. Membership categories",
"წევრობა ღიაა იმ პირთათვის, რომლებიც დაინტერესებულნი არიან საზოგადოების მიზნების განხორციელებით.":"Membership is open to persons interested in furthering the objectives of the society.",
"(ა) აქტიური წევრები:":"(a) Active members:",
"პროფესიული კვალიფიკაციის მქონე პირები (MD, RN, RD, PharmD, PhD), რომლებიც აქტიურად ეწევიან პრაქტიკულ ან კვლევით საქმიანობას საქართველოში. აქტიურ წევრებს აქვთ ხმის უფლება საერთო კრებაზე.":"Professionally qualified persons (MD, RN, RD, PharmD, PhD) actively engaged in practice or research in Georgia. Active members have voting rights at the General Assembly.",
"(ბ) სტუდენტი/რეზიდენტი წევრები:":"(b) Student/resident members:",
"პირები, რომლებიც ირიცხებიან სრულ განაკვეთზე სამედიცინო, საექთნო ან დიეტოლოგიის სასწავლო პროგრამებზე საქართველოში. ისინი იხდიან შემცირებულ საწევრო გადასახადს და აქვთ ხმის უფლება.":"Persons enrolled full-time in medical, nursing or dietetics training programmes in Georgia. They pay a reduced membership fee and have voting rights.",
"(გ) საპატიო წევრები:":"(c) Honorary members:",
"გამორჩეული პირები, რომლებსაც განსაკუთრებული წვლილი მიუძღვით საქართველოში კლინიკური კვების განვითარებაში. მათ წარადგენს საბჭო და ამტკიცებს საერთო კრება. ისინი გათავისუფლებულნი არიან გადასახადებისგან.":"Distinguished persons who have made an outstanding contribution to the development of clinical nutrition in Georgia. They are nominated by the Board and approved by the General Assembly. They are exempt from fees.",
"(დ) კორპორატიული წევრები:":"(d) Corporate members:",
"კომპანიები (ფარმაცევტული/კვების ინდუსტრია), რომლებიც მხარს უჭერენ GSPEN-ს. მათ არ აქვთ ხმის უფლება საზოგადოების მმართველობასა ან სამეცნიერო პოლიტიკასთან დაკავშირებულ საკითხებზე.":"Companies (pharmaceutical/nutrition industry) supporting GSPEN. They have no voting rights on matters of governance or scientific policy.",
"3.2. მიღება":"3.2. Admission",
"წევრობის მსურველებმა განაცხადი უნდა წარუდგინონ მდივანს. წევრობა ძალაში შედის ყოველწლიური საწევრო გადასახადის გადახდის შემდეგ.":"Applicants shall submit an application to the Secretary. Membership takes effect upon payment of the annual membership fee.",
"3.3. წევრობის შეწყვეტა":"3.3. Termination of membership",
"წევრი ტოვებს საზოგადოებას წერილობითი შეტყობინების საფუძველზე.":"A member may resign by written notice.",
"წევრი ვერ გადაიხდის ყოველწლიურ საწევროს გადახდის თარიღიდან 3 თვის განმავლობაში.":"A member fails to pay the annual fee within 3 months of the due date.",
"წევრი გარიცხულ იქნება საბჭოს მიერ საზოგადოებისთვის საზიანო ქმედების გამო (მაგ., სერიოზული პროფესიული გადაცდომა), საერთო კრებაზე გასაჩივრების უფლებით.":"A member may be expelled by the Board for conduct detrimental to the society (e.g. serious professional misconduct), with a right of appeal to the General Assembly.",
"მმართველობის სტრუქტურა":"Governance structure",
"4.1. საერთო კრება":"4.1. General Assembly",
"საერთო კრება არის საზოგადოების უმაღლესი მმართველი ორგანო.":"The General Assembly is the supreme governing body of the society.",
"შეხვედრები:":"Meetings:",
"ყოველწლიური საერთო კრება (AGM) ტარდება კალენდარულ წელიწადში მინიმუმ ერთხელ.":"The Annual General Meeting (AGM) is held at least once per calendar year.",
"შეტყობინება:":"Notice:",
"წევრებმა უნდა მიიღონ შეტყობინება კრების შესახებ, დღის წესრიგთან ერთად, კრებამდე მინიმუმ 14 დღით ადრე.":"Members shall receive notice of the meeting, together with the agenda, at least 14 days in advance.",
"უფლებამოსილება:":"Powers:",
"კრება ირჩევს საბჭოს, ამტკიცებს წლიურ ბიუჯეტს, შეაქვს ცვლილებები წესდებაში და განსაზღვრავს GSPEN-ის სტრატეგიულ მიმართულებას.":"The Assembly elects the Board, approves the annual budget, amends the charter and sets GSPEN's strategic direction.",
"ქვორუმი:":"Quorum:",
"ქვორუმი შედგება პირადად ან მინდობილობით წარმოდგენილი აქტიური წევრების 25%-ისგან. თუ ქვორუმი არ შედგა, 14 დღის ვადაში შეიძლება მოწვეულ იქნას ახალი კრება, სადაც გადაწყვეტილებების მიღება შესაძლებელი იქნება დამსწრეთა რაოდენობის მიუხედავად.":"A quorum consists of 25% of active members present in person or by proxy. If a quorum is not reached, a new meeting may be convened within 14 days, at which decisions may be taken regardless of the number of attendees.",
"4.2. აღმასრულებელი საბჭო":"4.2. Executive Board",
"საზოგადოებას მართავს აღმასრულებელი საბჭო, რომელიც შედგება მინიმუმ 5 წევრისგან: პრეზიდენტი; ვიცე-პრეზიდენტი / არჩეული პრეზიდენტი (President-Elect); მდივანი; ხაზინადარი; სამეცნიერო კომიტეტის თავმჯდომარე.":"The society is managed by an Executive Board of at least 5 members: President; Vice-President / President-Elect; Secretary; Treasurer; Chair of the Scientific Committee.",
"მულტიდისციპლინური მოთხოვნა:":"Multidisciplinary requirement:",
"საბჭო უნდა ეცადოს, რომ მასში შედიოდნენ სხვადასხვა დისციპლინის წარმომადგენლები (მაგ., მინიმუმ ერთი ექიმი და ჯანდაცვის სხვა სფეროს ერთი პროფესიონალი).":"The Board shall strive to include representatives of different disciplines (e.g. at least one physician and one professional from another healthcare field).",
"არჩევა:":"Election:",
"საბჭოს წევრებს ირჩევს საერთო კრება 4 წლის ვადით (ESPEN-ის ციკლებთან შესაბამისობაში). მათი ხელახლა არჩევა შესაძლებელია კიდევ ერთი ვადით.":"Board members are elected by the General Assembly for a term of 4 years (aligned with ESPEN cycles). They may be re-elected for one further term.",
"საბჭო იკრიბება წელიწადში მინიმუმ ორჯერ.":"The Board meets at least twice a year.",
"4.3. საბჭოს უფლებამოსილებები":"4.3. Powers of the Board",
"მართოს GSPEN-ის ყოველდღიური საქმიანობა და ფინანსები.":"To manage GSPEN's day-to-day activities and finances.",
"დანიშნოს ქვეკომიტეტები (მაგ., განათლების კომიტეტი, გაიდლაინების კომიტეტი).":"To appoint subcommittees (e.g. an Education Committee, a Guidelines Committee).",
"განსაზღვროს საწევრო გადასახადები (ექვემდებარება კრების მიერ რატიფიცირებას).":"To set membership fees (subject to ratification by the Assembly).",
"აირჩიოს GSPEN-ის წარმომადგენელი ESPEN-ის საბჭოში.":"To elect GSPEN's representative to the ESPEN Council.",
"ფინანსები და აქტივები":"Finances and assets",
"5.1. შემოსავალი":"5.1. Income",
"საწევრო გადასახადები.":"Membership fees.",
"გრანტები და შემოწირულობები.":"Grants and donations.",
"კონგრესებიდან და საგანმანათლებლო კურსებიდან მიღებული შემოსავალი.":"Income from congresses and educational courses.",
"კორპორატიული სპონსორობა (მკაცრად რეგულირებული სამეცნიერო დამოუკიდებლობის უზრუნველსაყოფად).":"Corporate sponsorship (strictly regulated to safeguard scientific independence).",
"5.2. არაკომერციული გამოყენება":"5.2. Non-profit use",
"GSPEN-ის შემოსავალი და ქონება უნდა მოხმარდეს მხოლოდ მიზნების განხორციელებას. დაუშვებელია მისი რაიმე ნაწილის გადახდა ან გადაცემა პირდაპირ ან ირიბად, დივიდენდის ან მოგების სახით წევრებზე.":"GSPEN's income and property shall be applied solely towards its objectives. No part of it may be paid or transferred, directly or indirectly, as a dividend or profit to members.",
"5.3. ფინანსური წელი":"5.3. Financial year",
"ფინანსური წელი ემთხვევა კალენდარულ წელს (1 იანვარი – 31 დეკემბერი).":"The financial year coincides with the calendar year (1 January – 31 December).",
"5.4. ანგარიშგება":"5.4. Reporting",
"ხაზინადარმა დასამტკიცებლად უნდა წარუდგინოს ყოველწლიური ფინანსური ანგარიში საერთო კრებას.":"The Treasurer shall present an annual financial report to the General Assembly for approval.",
"ინტერესთა კონფლიქტი და ეთიკა":"Conflict of interest and ethics",
"6.1. დეკლარირება":"6.1. Declaration",
"საბჭოს ნებისმიერმა წევრმა უნდა განაცხადოს ნებისმიერი პირდაპირი თუ ირიბი ინტერესის ბუნებისა და მოცულობის შესახებ, რომელიც მას გააჩნია საზოგადოებასთან დაკავშირებულ შემოთავაზებულ ტრანზაქციასა ან შეთანხმებაში (განსაკუთრებით ფარმაცევტულ ან სამედიცინო მოწყობილობების კომპანიებთან მიმართებაში).":"Any Board member shall declare the nature and extent of any direct or indirect interest they have in a proposed transaction or arrangement involving the society (particularly with respect to pharmaceutical or medical device companies).",
"6.2. აცილება":"6.2. Recusal",
"ინტერესთა კონფლიქტის მქონე საბჭოს წევრმა თავი უნდა შეიკავოს კონკრეტულ ტრანზაქციასთან დაკავშირებული ნებისმიერი დისკუსიისგან ან კენჭისყრისგან.":"A Board member with a conflict of interest shall abstain from any discussion or vote relating to the transaction concerned.",
"6.3. დამოუკიდებლობა":"6.3. Independence",
"GSPEN-მა უნდა შეინარჩუნოს სამეცნიერო დამოუკიდებლობა კომერციული გავლენისგან. კორპორატიულ წევრებს ან სპონსორებს არ აქვთ გავლენა GSPEN-ის გაიდლაინების ან საგანმანათლებლო ღონისძიებების სამეცნიერო შინაარსზე.":"GSPEN shall preserve its scientific independence from commercial influence. Corporate members or sponsors have no influence over the scientific content of GSPEN's guidelines or educational events.",
"ცვლილებები და ლიკვიდაცია":"Amendments and dissolution",
"7.1. ცვლილებები":"7.1. Amendments",
"წინამდებარე წესდებაში ცვლილებების შეტანა შესაძლებელია საერთო კრებაზე ხმების ორი მესამედის (2/3) უმრავლესობით მიღებული გადაწყვეტილებით.":"This charter may be amended by a two-thirds (2/3) majority vote at the General Assembly.",
"7.2. ლიკვიდაცია (დაშლა)":"7.2. Liquidation (dissolution)",
"საზოგადოების ლიკვიდაცია შესაძლებელია სპეციალურად ამ მიზნით მოწვეულ საერთო კრებაზე 75%-იანი უმრავლესობით მიღებული გადაწყვეტილებით.":"The society may be dissolved by a 75% majority vote at a General Assembly convened specifically for that purpose.",
"7.3. აქტივების განაწილება":"7.3. Distribution of assets",
"ლიკვიდაციის შემთხვევაში, ყველა ვალისა და ვალდებულების დაფარვის შემდეგ, დარჩენილი აქტივები არ განაწილდება წევრებს შორის. ნაცვლად ამისა, ისინი გადაეცემა საქართველოში არსებულ სხვა არაკომერციულ ორგანიზაციას მსგავსი საქველმოქმედო მიზნებით.":"In the event of dissolution, after settlement of all debts and liabilities, the remaining assets shall not be distributed among members. Instead, they shall be transferred to another non-profit organisation in Georgia with similar charitable purposes.",
"გარდამავალი დებულებები":"Transitional provisions",
"8.1. ენა":"8.1. Language",
"წინამდებარე წესდება შედგენილია ქართულ და ინგლისურ ენებზე. საქართველოს იურისდიქციის ფარგლებში სამართლებრივი დავის შემთხვევაში, უპირატესობა ენიჭება ქართულ ტექსტს.":"This charter is drawn up in Georgian and English. In the event of a legal dispute within the jurisdiction of Georgia, the Georgian text shall prevail.",
"8.2. მიღება":"8.2. Adoption",
"წინამდებარე წესდება მიღებულ იქნა GSPEN-ის დამფუძნებელი კრების მიერ 2025 წლის 9 დეკემბერს, თბილისში, საქართველო.":"This charter was adopted by the Founding Assembly of GSPEN on 9 December 2025 in Tbilisi, Georgia.",

/* ===== projects ===== */
"პროექტები — GSPEN":"Projects — GSPEN",
"GSPEN · კვლევა და ინიციატივები":"GSPEN · Research and initiatives",
"რაზე ვმუშაობთ ახლა, რა დავასრულეთ და რას ვგეგმავთ.":"What we are working on now, what we have completed and what we are planning.",
"მიმდინარე პროექტები":"Current projects",
"დასრულებული პროექტები":"Completed projects",
"დაგეგმილი პროექტები":"Planned projects",
"← ყველა პროექტი":"← All projects",
"ამჟამად მიმდინარე პროექტი არ არის.":"There are no current projects at the moment.",
"დასრულებული პროექტები აქ გამოჩნდება.":"Completed projects will appear here.",
"დაგეგმილი პროექტები მალე გამოცხადდება.":"Planned projects will be announced soon.",
"დასრულებული პროექტი":"Completed project",
"დაგეგმილი პროექტი":"Planned project",
"მეტი ინფორმაციისთვის დაგვიკავშირდით":"Contact us for more information",
"თუ ხართ კლინიკის წარმომადგენელი ან დაინტერესებული პირი და გსურთ ამ პროექტში მონაწილეობა — მოგვწერეთ. კლინიკის პასუხისმგებელი პირი გახდება კვლევის ერთ-ერთი ავტორი.":"If you represent a clinic or are otherwise interested in taking part in this project — write to us. The clinic's responsible contact will become one of the authors of the study.",

/* ===== resources hub ===== */
"რესურსები — GSPEN":"Resources — GSPEN",
"GSPEN · ბიბლიოთეკა":"GSPEN · Library",
"ვებინარები, სტატიები, ნუტრიციული ხელსაწყოები და კალკულატორები — კლინიკური კვების სპეციალისტებისთვის.":"Webinars, articles, nutrition tools and calculators — for clinical nutrition professionals.",
"ჩაწერილი და მომავალი ვებინარები კლინიკურ კვებაზე — უყურე პირდაპირ საიტზე.":"Recorded and upcoming webinars on clinical nutrition — watch directly on the site.",
"ბლოგი და პუბლიკაციები — კლინიკური კვების თემები GSPEN-ის გუნდისგან.":"Blog and publications — clinical nutrition topics from the GSPEN team.",
"ინტერაქტიული კლინიკური ინსტრუმენტები კვებითი მხარდაჭერის დაგეგმვისა და მართვისთვის.":"Interactive clinical instruments for planning and managing nutritional support.",
"მალნუტრიციის სკრინინგისა და შეფასების კალკულატორები — MUST, NRS-2002, GLIM.":"Malnutrition screening and assessment calculators — MUST, NRS-2002, GLIM.",
"მალე":"Soon",

/* ===== webinars ===== */
"ვებინარები — GSPEN":"Webinars — GSPEN",
"/ ვებინარები":"/ Webinars",
"ვიდეოს ბიბლიოთეკა":"Video library",
"ჩაწერილი და მომავალი ვებინარები კლინიკურ კვებაზე. ვიდეოზე დაჭერით ის პირდაპირ ამ გვერდზე გაიხსნება.":"Recorded and upcoming webinars on clinical nutrition. Click a video to open it right on this page.",
"დაგეგმილი ვებინარები":"Upcoming webinars",
"ჩატარებული ვებინარები":"Past webinars",
"ჩანაწერები":"Recordings",
"← ყველა ვებინარი":"← All webinars",
"დაგეგმილი ვებინარი ამჟამად არ არის — მალე გამოცხადდება.":"No upcoming webinar at the moment — one will be announced soon.",
"ჩატარებული ვებინარების ჩანაწერები აქ განთავსდება.":"Recordings of past webinars will be published here.",
"დაგეგმილი ვებინარი · ონლაინ":"Upcoming webinar · online",
"ჩატარებული ვებინარი":"Past webinar",
"ჩანაწერი":"Recording",
"რეგისტრაციისას მიუთითებ ელფოსტას, სახელსა და გვარს, პროფესიას და, სურვილისამებრ, წინასწარ შეკითხვას მომხსენებლისთვის. შეხვედრის ბმული რეგისტრირებულ მონაწილეებს ელფოსტაზე გაეგზავნებათ.":"During registration you will be asked for your email, name and surname, profession and, optionally, a question for the speaker. The meeting link will be emailed to registered participants.",
"ჩანაწერის სანახავად გაიარე მოკლე რეგისტრაცია — ბმული რეგისტრაციის დასრულებისთანავე გამოჩნდება.":"To watch the recording, complete a short registration — the link appears as soon as you finish.",
"ჩანაწერის ნახვა რეგისტრაციით →":"Watch the recording (registration) →",
"ჩანაწერის ყურება ▶":"Watch the recording ▶",

/* webinar content (JSON) */
"ონლაინ ვებინარი კვების მართვაზე ნაწლავის ანთებითი დაავადებების (IBD) დროს ზრდასრულ პაციენტებში.":"An online webinar on nutritional management of inflammatory bowel disease (IBD) in adult patients.",
"სალომე გოგლიძე — კლინიკური ნუტრიციოლოგი, GSPEN-ის პრეზიდენტი":"Salome Goglidze — clinical nutritionist, President of GSPEN",
"GSPEN-ის (საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია) ორგანიზებით გაიმართება ვებინარი, რომელიც ეძღვნება ნაწლავის ანთებითი დაავადებების (IBD) დროს კვების მართვას ზრდასრულ პაციენტებში.":"GSPEN (the Georgian Association for Parenteral, Enteral Nutrition and Metabolism) is hosting a webinar dedicated to the nutritional management of inflammatory bowel disease (IBD) in adult patients.",
"ვებინარზე დეტალურად განვიხილავთ:":"In this webinar we will discuss in detail:",
"• დიეტა დაავადების რემისიის პერიოდში — სტაბილურობის შენარჩუნება და კლინიკური რეკომენდაციები;":"• Diet during disease remission — maintaining stability, and clinical recommendations;",
"დიეტა დაავადების რემისიის პერიოდში — სტაბილურობის შენარჩუნება და კლინიკური რეკომენდაციები;":"Diet during disease remission — maintaining stability, and clinical recommendations;",
"სიმპტომების მართვა კვებით — პრაქტიკული გზები ყოველდღიური მდგომარეობის გაუმჯობესებისთვის;":"Managing symptoms through nutrition — practical ways to improve day-to-day wellbeing;",
"დიეტური მიდგომები აქტიური დაავადების დროს;":"Dietary approaches during active disease;",
"კვებითი მხარდაჭერა და კვების შესაძლო გზები ქირურგიული ოპერაციის გარშემო პერიოდში.":"Nutritional support and feeding routes in the perioperative period.",
"შეხვედრაზე ხაზი გაესმება დაავადების ნებისმიერ ეტაპზე საკვებიდან ენერგიისა და ნუტრიენტების ადეკვატური მიღების კრიტიკულ მნიშვნელობას. ასევე დეტალურად შევეხებით ზედმეტად ამკრძალავი (შეზღუდული) დიეტების უარყოფით გავლენასა და თანმდევ რისკებს ნაწლავის ანთებითი დაავადებების მქონე ზრდასრული ადამიანებისთვის.":"The session will highlight the critical importance of adequate energy and nutrient intake from food at every stage of the disease. We will also look in detail at the negative impact and risks of overly restrictive diets for adults living with inflammatory bowel disease.",
"რეგისტრაციის შემდეგ მითითებულ ელფოსტაზე მიიღებთ შეხვედრის ბმულს. შეხვედრამდე — 26 აგვისტოს, 20:00 საათზე!":"After registering you will receive the meeting link by email. See you on 26 August at 20:00!",

/* ===== articles ===== */
"სტატიები — GSPEN":"Articles — GSPEN",
"/ სტატიები":"/ Articles",
"ბლოგი":"Blog",
"კლინიკური კვების თემები, სიახლეები და პრაქტიკული რჩევები — GSPEN-ის გუნდისგან.":"Clinical nutrition topics, news and practical advice — from the GSPEN team.",
"სტატია მალე დაემატება.":"Articles are coming soon.",
"← ყველა სტატია":"← All articles",
"სტატია":"Article",

/* ===== tools / calculators hubs ===== */
"ნუტრიციული ხელსაწყოები — GSPEN":"Nutrition tools — GSPEN",
"/ ნუტრიციული ხელსაწყოები":"/ Nutrition tools",
"კლინიკური გადაწყვეტილების მხარდამჭერი ინტერაქტიული ინსტრუმენტები — ESPEN / ASPEN / ESPGHAN გაიდლაინებზე დაფუძნებული.":"Interactive clinical decision-support instruments — based on ESPEN / ASPEN / ESPGHAN guidelines.",
"ხელსაწყოები მალე დაემატება.":"Tools are coming soon.",
"კალკულატორები — GSPEN":"Calculators — GSPEN",
"/ კალკულატორები":"/ Calculators",
"მალნუტრიციის სკრინინგი და შეფასება":"Malnutrition screening and assessment",
"ვალიდირებული სასკრინინგო და დიაგნოსტიკური ინსტრუმენტები — MUST, NRS-2002 და GLIM — ინტერაქტიულ, ქართულენოვან ფორმატში.":"Validated screening and diagnostic instruments — MUST, NRS-2002 and GLIM — in an interactive format.",
"კალკულატორები მალე დაემატება.":"Calculators are coming soon.",
"MUST — მალნუტრიციის სკრინინგი":"MUST — malnutrition screening",
"სწრაფი სასკრინინგო კალკულატორი: BMI + უნებლიე წონის კლება + მწვავე დაავადების ეფექტი → რისკის კატეგორია და ქმედება.":"A quick screening calculator: BMI + unintentional weight loss + acute disease effect → risk category and action.",
"NRS-2002 — ნუტრიციული რისკის სკრინინგი":"NRS-2002 — nutritional risk screening",
"ESPEN-ის ინსტრუმენტი ჰოსპიტალიზებული პაციენტებისთვის: კვებითი სტატუსი + დაავადების სიმძიმე + ასაკი. ჯამი ≥3 → ნუტრიციული გეგმა.":"ESPEN's instrument for hospitalised patients: nutritional status + disease severity + age. Score ≥3 → nutrition care plan.",
"GLIM — მალნუტრიციის დიაგნოზი":"GLIM — diagnosing malnutrition",
"დიაგნოზის საერთაშორისო კრიტერიუმები: ფენოტიპური + ეტიოლოგიური კრიტერიუმები და სიმძიმის განსაზღვრა (Stage 1/2).":"International diagnostic criteria: phenotypic + etiologic criteria and severity grading (Stage 1/2).",

/* ===== MUST page ===== */
"MUST — მალნუტრიციის სკრინინგი — GSPEN":"MUST — malnutrition screening — GSPEN",
"სასკრინინგო ინსტრუმენტი":"Screening tool",
"რისთვის გამოიყენება:":"What it is for:",
"MUST (Malnutrition Universal Screening Tool) მალნუტრიციის სწრაფი სასკრინინგო ინსტრუმენტია მოზრდილებში. სამი კომპონენტით —":"MUST (Malnutrition Universal Screening Tool) is a rapid screening instrument for malnutrition in adults. Using three components —",
"უნებლიე წონის კლება":"unintentional weight loss",
"და":"and",
"მწვავე დაავადების ეფექტი":"acute disease effect",
"— რამდენიმე წამში განსაზღვრავს, არის თუ არა პაციენტი მალნუტრიციის რისკის ქვეშ და სჭირდება თუ არა დიეტოლოგის ჩართვა. გამოიყენება სტაციონარში, ამბულატორიასა და საზოგადოებრივ ჯანდაცვაში.":"— it determines within seconds whether a patient is at risk of malnutrition and whether a dietitian should be involved. Used in hospitals, outpatient clinics and community care.",
"მონაცემები":"Patient data",
"ახლანდელი წონა (კგ)":"Current weight (kg)",
"სიმაღლე (სმ)":"Height (cm)",
"ჩვეული / წინა წონა (კგ) — 3–6 თვის წინ (თუ ცნობილია)":"Usual / previous weight (kg) — 3–6 months ago (if known)",
"მაგ. 65":"e.g. 65",
"პაციენტი მწვავედ ავად არის":"The patient is acutely ill",
"≥5 დღე არ მიუღია / ვერ მიიღებს საკვებს":"has had / will have no nutritional intake for ≥5 days",
"დაბალი რისკი (0)":"Low risk (0)",
"რუტინული მოვლა; გაიმეორე სკრინინგი.":"Routine care; repeat screening.",
"რუტინული მოვლა; გაიმეორე სკრინინგი — სტაციონარში ყოველკვირეულად, საზოგადოებაში პერიოდულად.":"Routine care; repeat screening — weekly in hospital, periodically in the community.",
"საშუალო რისკი (1)":"Medium risk (1)",
"დააკვირდი: აწარმოე 3-დღიანი მიღების დღიური; თუ მიღება არ უმჯობესდება — ჩართე დიეტოლოგი.":"Observe: keep a 3-day intake diary; if intake does not improve — involve a dietitian.",
"მაღალი რისკი (≥2)":"High risk (≥2)",
"ჩართე დიეტოლოგი / ნუტრიციული გუნდი, დაუდგინე დიაგნოზი GLIM-ის კრიტერიუმებით და დაიწყე ნუტრიციული ჩარევა.":"Involve a dietitian / nutrition team, confirm the diagnosis using the GLIM criteria and start nutritional intervention.",
"· წონის კლება:":"· Weight loss:",
"· ჯამური ქულა:":"· Total score:",
"(BMI-ქულა + წონის კლების ქულა + მწვავე ეფექტი)":"(BMI score + weight-loss score + acute disease effect)",
"წყარო:":"Source:",
"MUST — BAPEN; Stratton et al., 2004. ქულები: BMI >20 = 0, 18.5–20 = 1, <18.5 = 2 · წონის კლება <5% = 0, 5–10% = 1, >10% = 2 · მწვავე დაავადების ეფექტი = 2.":"MUST — BAPEN; Stratton et al., 2004. Scoring: BMI >20 = 0, 18.5–20 = 1, <18.5 = 2 · weight loss <5% = 0, 5–10% = 1, >10% = 2 · acute disease effect = 2.",
"ეს ინსტრუმენტი კლინიკური გადაწყვეტილების მხარდასაჭერია და არ ცვლის ინდივიდუალურ სამედიცინო შეფასებას.":"This tool supports clinical decision-making and does not replace individual medical assessment.",

/* ===== NRS page ===== */
"NRS-2002 — ნუტრიციული რისკის სკრინინგი — GSPEN":"NRS-2002 — nutritional risk screening — GSPEN",
"NRS-2002 (Nutritional Risk Screening) ESPEN-ის რეკომენდებული ინსტრუმენტია":"NRS-2002 (Nutritional Risk Screening) is ESPEN's recommended instrument for assessing nutritional risk in",
"ჰოსპიტალიზებული":"hospitalised",
"პაციენტების ნუტრიციული რისკის შესაფასებლად. ის აერთიანებს კვებითი სტატუსის დარღვევას, დაავადების სიმძიმეს (გაზრდილ მოთხოვნას) და ასაკს — ჯამი ≥3 ნიშნავს, რომ პაციენტს ნუტრიციული ზრუნვის გეგმა სჭირდება.":"patients. It combines impaired nutritional status, disease severity (increased requirements) and age — a total of ≥3 means the patient needs a nutrition care plan.",
"ნაბიჯი 1 — წინასწარი სკრინინგი":"Step 1 — initial screening",
"პაციენტს ბოლო 3 თვეში წონა დაუკლია":"The patient has lost weight in the last 3 months",
"ბოლო კვირაში საკვების მიღება შემცირებული აქვს":"Food intake has been reduced in the last week",
"პაციენტი მძიმედ არის (მაგ. ინტენსიური თერაპია)":"The patient is severely ill (e.g. intensive care)",
"თუ ერთი პასუხი მაინც „კი\"-ა — გადადი სრულ სკრინინგზე (ნაბიჯი 2). თუ ყველა „არა\"-ა, გაიმეორე სკრინინგი ყოველკვირეულად.":"If at least one answer is “yes” — proceed to the full screening (Step 2). If all answers are “no”, repeat the screening weekly.",
"მინიმუმ ერთი „კი\" — გააგრძელე სრული სკრინინგი (ნაბიჯი 2).":"At least one “yes” — continue with the full screening (Step 2).",
"ნაბიჯი 2 — სრული სკრინინგი":"Step 2 — full screening",
"ა) კვებითი სტატუსის დარღვევა":"a) Impaired nutritional status",
"არ არის (0) — ნორმალური კვებითი სტატუსი":"Absent (0) — normal nutritional status",
"მსუბუქი (1) — წონის კლება >5% 3 თვეში, ან მიღება მოთხოვნის 50–75%":"Mild (1) — weight loss >5% in 3 months, or intake 50–75% of requirements",
"ზომიერი (2) — წონის კლება >5% 2 თვეში, ან BMI 18.5–20.5 + გაუარესებული ზოგადი მდგომარეობა, ან მიღება 25–50%":"Moderate (2) — weight loss >5% in 2 months, or BMI 18.5–20.5 + impaired general condition, or intake 25–50%",
"მძიმე (3) — წონის კლება >5% 1 თვეში (>15% 3 თვეში), ან BMI <18.5 + გაუარესებული მდგომარეობა, ან მიღება 0–25%":"Severe (3) — weight loss >5% in 1 month (>15% in 3 months), or BMI <18.5 + impaired condition, or intake 0–25%",
"ბ) დაავადების სიმძიმე (მოთხოვნის ზრდა)":"b) Disease severity (increased requirements)",
"არ არის (0) — ნორმალური კვებითი მოთხოვნა":"Absent (0) — normal nutritional requirements",
"მსუბუქი (1) — მაგ. მენჯ-ბარძაყის მოტეხილობა, ქრონიკული დაავადება გამწვავებით (ციროზი, COPD), ჰემოდიალიზი, დიაბეტი, ონკოლოგია":"Mild (1) — e.g. hip fracture, chronic disease with acute complications (cirrhosis, COPD), haemodialysis, diabetes, oncology",
"ზომიერი (2) — მაგ. დიდი აბდომინური ქირურგია, ინსულტი, მძიმე პნევმონია, ჰემატოლოგიური ავთვისებიანი დაავადება":"Moderate (2) — e.g. major abdominal surgery, stroke, severe pneumonia, haematological malignancy",
"მძიმე (3) — მაგ. თავის ტრავმა, ძვლის ტვინის ტრანსპლანტაცია, კრიტიკული პაციენტი (APACHE II >10)":"Severe (3) — e.g. head injury, bone-marrow transplantation, critically ill patient (APACHE II >10)",
"ასაკი ≥ 70 წელი (+1 ქულა)":"Age ≥ 70 years (+1 point)",
"ჯამი: 0 — რისკი არ არის":"Total: 0 — no risk",
"გაიმეორე სკრინინგი ყოველკვირეულად.":"Repeat the screening weekly.",

/* ===== GLIM page ===== */
"GLIM — მალნუტრიციის დიაგნოზი — GSPEN":"GLIM — diagnosing malnutrition — GSPEN",
"დიაგნოსტიკური კრიტერიუმები":"Diagnostic criteria",
"GLIM (Global Leadership Initiative on Malnutrition) მალნუტრიციის":"GLIM (Global Leadership Initiative on Malnutrition) is the international consensus for the",
"დიაგნოზის":"diagnosis",
"საერთაშორისო კონსენსუს-კრიტერიუმებია. გამოიყენება ორ ეტაპად: ჯერ სკრინინგი (MUST ან NRS-2002), დადებითი შედეგის შემთხვევაში კი — დიაგნოზის დადასტურება: საჭიროა":"of malnutrition. It is applied in two steps: first screening (MUST or NRS-2002), then — if positive — confirmation of the diagnosis, which requires",
"მინიმუმ 1 ფენოტიპური + 1 ეტიოლოგიური":"at least 1 phenotypic + 1 etiologic",
"კრიტერიუმი. ფენოტიპური კრიტერიუმები სიმძიმესაც განსაზღვრავს (Stage 1 ზომიერი / Stage 2 მძიმე).":"criterion. The phenotypic criteria also determine severity (Stage 1 moderate / Stage 2 severe).",
"ფენოტიპური კრიტერიუმები (მინიმუმ 1 საჭიროა)":"Phenotypic criteria (at least 1 required)",
"წონის უნებლიე კლება":"Unintentional weight loss",
"არა":"No",
"ზომიერი — 5–10% ბოლო 6 თვეში, ან 10–20% მეტ ხანში":"Moderate — 5–10% within the last 6 months, or 10–20% beyond 6 months",
"მძიმე — >10% ბოლო 6 თვეში, ან >20% მეტ ხანში":"Severe — >10% within the last 6 months, or >20% beyond 6 months",
"დაბალი BMI":"Low BMI",
"ზომიერი — <20 (<70 წ.) ან <22 (≥70 წ.)":"Moderate — <20 (age <70) or <22 (age ≥70)",
"მძიმე — <18.5 (<70 წ.) ან <20 (≥70 წ.)":"Severe — <18.5 (age <70) or <20 (age ≥70)",
"კუნთოვანი მასის კლება (DXA/BIA/CT/ულტრაბგერა/ანთროპომეტრია)":"Reduced muscle mass (DXA/BIA/CT/ultrasound/anthropometry)",
"მსუბუქ-ზომიერი დეფიციტი":"Mild-to-moderate deficit",
"მძიმე დეფიციტი":"Severe deficit",
"ეტიოლოგიური კრიტერიუმები (მინიმუმ 1 საჭიროა)":"Etiologic criteria (at least 1 required)",
"მიღების/შეწოვის კლება — ≤50% მოთხოვნის >1 კვირა, ან ნებისმიერი კლება >2 კვირა, ან ქრონიკული GI მდგომარეობა":"Reduced intake/assimilation — ≤50% of requirements for >1 week, or any reduction for >2 weeks, or a chronic GI condition",
"ანთება / დაავადების ტვირთი (მწვავე ან ქრონიკული)":"Inflammation / disease burden (acute or chronic)",
"მალნუტრიცია არ დასტურდება":"Malnutrition not confirmed",
"საჭიროა მინიმუმ 1 ფენოტიპური + 1 ეტიოლოგიური კრიტერიუმი.":"At least 1 phenotypic + 1 etiologic criterion is required.",
"GLIM — Cederholm T et al. Clinical Nutrition, 2019; ESPEN Polymorbid — Practical 2024 (R1–R2: სკრინინგი → GLIM → ზრუნვის გეგმა).":"GLIM — Cederholm T et al. Clinical Nutrition, 2019; ESPEN Polymorbid — Practical 2024 (R1–R2: screening → GLIM → care plan).",
"მალნუტრიცია დადასტურდა — მძიმე (Stage 2)":"Malnutrition confirmed — severe (Stage 2)",
"მალნუტრიცია დადასტურდა — ზომიერი (Stage 1)":"Malnutrition confirmed — moderate (Stage 1)",
"სრულდება ≥1 ფენოტიპური + ≥1 ეტიოლოგიური კრიტერიუმი; სიმძიმე განისაზღვრება ფენოტიპური კრიტერიუმებით. დაიწყე ნუტრიციული ჩარევა — კვებითი მხარდაჭერის ესკალაციის კიბით.":"≥1 phenotypic + ≥1 etiologic criterion is met; severity is determined by the phenotypic criteria. Start nutritional intervention — following the nutrition-support escalation ladder.",
"მალნუტრიცია არ დასტურდება (GLIM-ით)":"Malnutrition not confirmed (by GLIM)",
"აკლია: ფენოტიპური კრიტერიუმი. განაგრძე მონიტორინგი და გაიმეორე სკრინინგი.":"Missing: a phenotypic criterion. Continue monitoring and repeat the screening.",
"აკლია: ეტიოლოგიური კრიტერიუმი. განაგრძე მონიტორინგი და გაიმეორე სკრინინგი.":"Missing: an etiologic criterion. Continue monitoring and repeat the screening.",
"აკლია: ფენოტიპური და ეტიოლოგიური კრიტერიუმი. განაგრძე მონიტორინგი და გაიმეორე სკრინინგი.":"Missing: a phenotypic and an etiologic criterion. Continue monitoring and repeat the screening.",

/* ===== membership ===== */
"გახდი წევრი — GSPEN":"Become a member — GSPEN",
"შემოუერთდი კლინიკური კვების პროფესიულ საზოგადოებას — მიიღე წვდომა ვებინარებზე, რესურსებზე, ღონისძიებებზე და ხმის უფლება საერთო კრებაზე.":"Join the professional society for clinical nutrition — get access to webinars, resources and events, and a vote at the General Assembly.",
"კატეგორიები":"Categories",
"წევრობის კატეგორიები":"Membership categories",
"ძირითადი":"Main",
"აქტიური წევრი":"Active member",
"/ წელი":"/ year",
"MD, RN, RD, PharmD, PhD კვალიფიკაცია":"MD, RN, RD, PharmD or PhD qualification",
"ხმის უფლება საერთო კრებაზე":"Voting rights at the General Assembly",
"წვდომა ვებინარებსა და რესურსებზე":"Access to webinars and resources",
"ESPEN-თან თანამშრომლობის შესაძლებლობები":"Opportunities for collaboration with ESPEN",
"შეღავათიანი":"Reduced",
"სტუდენტი / რეზიდენტი":"Student / resident",
"სტუდენტი":"Student",
"სამედიცინო, საექთნო ან დიეტოლოგიის პროგრამის სტუდენტები":"Students of medical, nursing or dietetics programmes",
"საჭიროა სტუდენტობის დამადასტურებელი საბუთი (ცნობა ან სტუდბილეთი)":"Proof of student status required (certificate or student card)",
"საპატიო":"Honorary",
"საპატიო წევრი":"Honorary member",
"უფასო":"Free",
"განსაკუთრებული წვლილი კლინიკური კვების განვითარებაში":"Outstanding contribution to the development of clinical nutrition",
"წარადგენს საბჭო, ამტკიცებს საერთო კრება":"Nominated by the Board, approved by the General Assembly",
"გათავისუფლებული საწევროსგან":"Exempt from membership fees",
"ინდუსტრია":"Industry",
"კორპორატიული წევრი":"Corporate member",
"შეთანხმებით":"By agreement",
"ფარმაცევტული / კვების ინდუსტრიის კომპანიები":"Pharmaceutical / nutrition industry companies",
"GSPEN-ის მისიის მხარდაჭერა":"Support for GSPEN's mission",
"სამეცნიერო პოლიტიკაზე გავლენის გარეშე":"No influence over scientific policy",
"დაგვიკავშირდი":"Contact us",
"* საწევრო გადასახადების ოდენობა დგინდება საბჭოს მიერ და ექვემდებარება საერთო კრების რატიფიცირებას (წესდება, მუხლი 4.3).":"* Membership fees are set by the Board and are subject to ratification by the General Assembly (Charter, Article 4.3).",
"როგორ გავწევრიანდე":"How to join",
"სამი მარტივი ნაბიჯი":"Three simple steps",
"ნაბიჯი 1":"Step 1",
"შეავსე განაცხადი":"Complete the application",
"შეავსე ქვემოთ მოცემული ფორმა — „გაგზავნაზე\" დაჭერისას გაიხსნება შენი ელფოსტა მზა ტექსტით. სტუდენტმა/რეზიდენტმა წერილს მიაბი სტუდენტობის დამადასტურებელი საბუთი.":"Fill in the form below — clicking “Send” opens your email app with a ready-made message. Students/residents should attach proof of student status to the email.",
"ნაბიჯი 2":"Step 2",
"გადაიხადე საწევრო":"Pay the membership fee",
"გადმორიცხე წლიური საწევრო ქვემოთ მითითებულ ანგარიშზე. დანიშნულებაში ჩაწერე: „საწევრო — სახელი გვარი\".":"Transfer the annual fee to the account below. In the payment description write: “Membership fee — name surname”.",
"ნაბიჯი 3":"Step 3",
"მიიღე დადასტურება":"Receive confirmation",
"მდივანი განიხილავს განაცხადს და ელფოსტაზე მიიღებ წევრობის დადასტურებას. წევრობა ძალაში შედის გადახდისთანავე.":"The Secretary reviews the application and you receive membership confirmation by email. Membership takes effect upon payment.",
"განაცხადის ფორმა":"Application form",
"შეავსე ველები — „გაგზავნა\" ღილაკი ავტომატურად შეადგენს წერილს GSPEN-ის მდივნისთვის.":"Fill in the fields — the “Send” button automatically composes an email to the GSPEN Secretary.",
"წევრობის კატეგორია":"Membership category",
"აქტიური წევრი (50 ₾/წელი)":"Active member (50 GEL/year)",
"აქტიური წევრი — 50 ₾/წელი":"Active member — 50 GEL/year",
"სტუდენტი/რეზიდენტი (20 ₾/წელი)":"Student/resident (20 GEL/year)",
"სტუდენტი / რეზიდენტი — 20 ₾/წელი":"Student / resident — 20 GEL/year",
"სახელი და გვარი *":"Name and surname *",
"მაგ. ნინო ბერიძე":"e.g. Nino Beridze",
"ელფოსტა *":"Email *",
"მაგ. nino@example.com":"e.g. nino@example.com",
"პროფესია / კვალიფიკაცია *":"Profession / qualification *",
"მაგ. ექიმი, დიეტოლოგი, სტუდენტი…":"e.g. physician, dietitian, student…",
"სამუშაო ადგილი / სასწავლებელი":"Workplace / institution",
"მაგ. კლინიკა, უნივერსიტეტი…":"e.g. clinic, university…",
"სტუდენტებისთვის:":"For students:",
"გახსნილ წერილს აუცილებლად მიაბი სტუდენტობის დამადასტურებელი საბუთი — ცნობა სასწავლებლიდან ან სტუდბილეთის ფოტო. საბუთის გარეშე შეღავათიანი საწევრო ვერ დადასტურდება.":"Be sure to attach proof of student status to the email — a certificate from your institution or a photo of your student card. Without it, the reduced fee cannot be confirmed.",
"კომენტარი (არასავალდებულო)":"Comment (optional)",
"დამატებითი ინფორმაცია…":"Additional information…",
"გთხოვ, შეავსე სავალდებულო ველები (სახელი, ელფოსტა, პროფესია).":"Please fill in the required fields (name, email, profession).",
"გაგზავნა ✉":"Send ✉",
"ღილაკი გახსნის შენს საფოსტო აპლიკაციას მზა წერილით — უბრალოდ დააჭირე გაგზავნას (სტუდენტებმა — საბუთის მიბმის შემდეგ).":"The button opens your email app with a ready-made message — just press send (students: after attaching the document).",
"საბანკო რეკვიზიტები":"Bank details",
"მიმღები":"Beneficiary",
"ა(ა)იპ საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია":"NNLE Georgian Association for Parenteral, Enteral Nutrition and Metabolism",
"ბანკი":"Bank",
"[ბანკის დასახელება — დასაზუსტებელია]":"[Bank name — to be confirmed]",
"ანგარიშის ნომერი (IBAN)":"Account number (IBAN)",
"[GE00XX0000000000000000 — დასაზუსტებელია]":"[GE00XX0000000000000000 — to be confirmed]",
"დანიშნულება":"Payment description",
"საწევრო გადასახადი — სახელი, გვარი":"Membership fee — name, surname",
"⚠ რეკვიზიტები შეივსება ასოციაციის საბანკო ანგარიშის გახსნის შემდეგ.":"⚠ Details will be added once the association's bank account is opened.",

/* ===== project content (JSON) ===== */
"მალნუტრიციის აუდიტი საქართველოში":"The malnutrition audit in Georgia",
"პროექტში მონაწილეობა —":"Taking part in the project —",
"მოგვწერეთ:":"Write to us:",
"მოგვწერეთ: pensocietygspen@gmail.com":"Write to us: pensocietygspen@gmail.com",
"მულტიცენტრული კვლევა, რომელიც პირველად შეაფასებს მალნუტრიციის გავრცელებასა და ნუტრიციული ზრუნვის პრაქტიკას საქართველოს საავადმყოფოებში.":"A multicentre study that will, for the first time, assess the prevalence of malnutrition and nutritional care practice in Georgian hospitals.",
"რატომ არის ეს კვლევა საჭირო":"Why this study is needed",
"დაავადებასთან დაკავშირებული მალნუტრიცია საავადმყოფოებში ერთ-ერთი ყველაზე გავრცელებული და კლინიკურად მნიშვნელოვანი, თუმცა სისტემატურად შეუმჩნეველი მდგომარეობაა: ევროპული კვლევებით, ჰოსპიტალიზებული პაციენტების":"Disease-related malnutrition is one of the most common and clinically significant, yet systematically overlooked, conditions in hospitals: European studies show that",
"უკვე მალნუტრიციას განიცდის ან მისი რისკის ქვეშაა. მისი დროულად ამოცნობისა და მკურნალობის გარეშე იზრდება გართულებები, ჰოსპიტალიზაციის ხანგრძლივობა, რეადმისია და სიკვდილობა.":"of hospitalised patients are already malnourished or at risk. Without timely recognition and treatment, complications, length of stay, readmissions and mortality all increase.",
"საქართველოში დღემდე":"To date, Georgia has",
"არ არსებობს გამოქვეყნებული მონაცემები":"no published data",
"მალნუტრიციის გავრცელების, სკრინინგისა და მკურნალობის პრაქტიკის შესახებ. სწორედ ამ სიცარიელის შესავსებად GSPEN იწყებს ეროვნულ აუდიტს — პირველს საქართველოს ისტორიაში.":"on the prevalence of malnutrition or on screening and treatment practice. To fill this gap, GSPEN is launching a national audit — the first in Georgia's history.",
"როგორ ტარდება":"How it is conducted",
"დიზაინი:":"Design:",
"მულტიცენტრული, ჯვარედინ-სექციური პრევალენტობის კვლევა (არაინტერვენციული აუდიტი) — თითო საავადმყოფოში მონაცემები გროვდება ერთი კვირის განმავლობაში.":"A multicentre, cross-sectional prevalence study (non-interventional audit) — data are collected in each hospital over one week.",
"ინსტრუმენტი:":"Instrument:",
"GSPEN-ის ჰოსპიტალური კვების კითხვარი — საერთაშორისო nutritionDay-კითხვარის ადაპტირებული ვერსია, საქართველოსთვის სპეციფიკური კითხვებით.":"The GSPEN hospital nutrition questionnaire — an adapted version of the international nutritionDay questionnaire, with Georgia-specific questions.",
"მოცვა:":"Coverage:",
"მინიმუმ 3, სამიზნე 6–10 საავადმყოფო; ქირურგიის, თერაპია/გასტროენტეროლოგიის და ონკოლოგიის განყოფილებები; მოსალოდნელია 150–500 პაციენტი.":"At least 3, target 6–10 hospitals; surgery, internal medicine/gastroenterology and oncology wards; 150–500 patients expected.",
"შედეგები:":"Outcomes:",
"პაციენტის 30-დღიანი გამოსავალი (გაწერა, რეადმისია, ჰოსპიტალიზაციის ხანგრძლივობა).":"Patient outcomes at 30 days (discharge, readmission, length of stay).",
"ეთიკა:":"Ethics:",
"არაინტერვენციული კვლევა — პაციენტის მკურნალობა არ იცვლება; მონაცემები ანონიმურია.":"A non-interventional study — patient treatment is not altered; data are anonymised.",
"რას მიიღებს მონაწილე კლინიკა":"What a participating clinic receives",
"საკუთარი კლინიკის შედეგების":"An",
"ინდივიდუალურ ანგარიშს":"individual report",
"ეროვნულ საშუალო მაჩვენებლებთან შედარებით.":"of its own results benchmarked against the national averages.",
"რას მიიღებს კლინიკის პასუხისმგებელი პირი":"What the clinic's responsible contact receives",
"თანაავტორობას":"Co-authorship",
"ეროვნულ სამეცნიერო პუბლიკაციაში (სამიზნე ჟურნალი: Clinical Nutrition / ESPEN, 2027).":"of the national scientific publication (target journal: Clinical Nutrition / ESPEN, 2027).",
"რა მოჰყვება კვლევას":"What follows the study",
"შედეგები საფუძვლად დაედება GSPEN-ის პირველ მულტიცენტრულ კლინიკური კვების პროტოკოლებს, ეროვნულ ანგარიშს ჯანდაცვის სამინისტროსთვის და საქართველოს წარდგენას ESPEN-ის კვლევით საზოგადოებაში.":"The results will form the basis of GSPEN's first multicentre clinical nutrition protocols, a national report for the Ministry of Health and Georgia's introduction to the ESPEN research community.",
"თუ ხართ":"If you are a",
"კლინიკის წარმომადგენელი ან დაინტერესებული პირი":"clinic representative or an interested party",
"და გსურთ ამ პროექტში მონაწილეობა, დაგვიკავშირდით ელფოსტაზე":"and would like to take part in this project, contact us at",
". კლინიკის წარმომადგენელი ასევე გახდება":". The clinic's representative will also become",
"კვლევის ერთ-ერთი ავტორი":"one of the authors of the study",
"— მეტი დეტალისთვის მოგვწერეთ.":"— write to us for more details.",
"შეხვედრაზე ხაზი გაესვება დაავადების ნებისმიერ ეტაპზე საკვებიდან ენერგიისა და ნუტრიენტების ადეკვატური მიღების კრიტიკულ მნიშვნელობას. ასევე დეტალურად შევეხებით ზედმეტად ამკრძალავი (შეზღუდული) დიეტების უარყოფით გავლენასა და თანმდევ რისკებს ნაწლავის ანთებითი დაავადებების მქონე ზრდასრული ადამიანებისთვის.":"The session will highlight the critical importance of adequate energy and nutrient intake from food at every stage of the disease. We will also look in detail at the negative impact and risks of overly restrictive diets for adults living with inflammatory bowel disease.",

/* ===== energy calculator ===== */
"სკრინინგი · ენერგია · წონა":"Screening · Energy · Weight",
"სკრინინგი და დიაგნოზი (MUST, NRS-2002, GLIM), ენერგიის მოთხოვნილება და წონის გათვლები — ინტერაქტიულ ფორმატში.":"Screening and diagnosis (MUST, NRS-2002, GLIM), energy requirements and body-weight calculations — in an interactive format.",
"სკრინინგი, დიაგნოზი, ენერგია და წონა — MUST, NRS-2002, GLIM, REE, IBW/AdjBW.":"Screening, diagnosis, energy and weight — MUST, NRS-2002, GLIM, REE, IBW/AdjBW.",
"ენერგიის მოთხოვნილება — კალორიების კალკულატორი":"Energy requirements — calorie calculator",
"REE ოთხი მეთოდით: მიფლინ-სენ ჟეორი, ჰარის-ბენედიქტი, შოფილდი, ESPEN (25–30 კკალ/კგ) — GSPEN-ის კლასიფიკაცია თვითონ გირჩევს შესაფერისს.":"REE by four methods: Mifflin-St Jeor, Harris-Benedict, Schofield and ESPEN (25–30 kcal/kg) — the GSPEN classification recommends the right one for you.",
"იდეალური და კორეგირებული წონა":"Ideal and adjusted body weight",
"IBW (Devine) და AdjBW — წონაზე დაფუძნებული დოზირებისა და გათვლებისთვის; %IBW ავტომატურად.":"IBW (Devine) and AdjBW — for weight-based dosing and calculations; %IBW automatically.",
"ენერგიის მოთხოვნილება — კალორიების კალკულატორი — GSPEN":"Energy requirements — calorie calculator — GSPEN",
"/ ენერგია":"/ Energy",
"ენერგია":"Energy",
"კალორიების კალკულატორი":"Calorie calculator",
"ენერგიის მოთხოვნილება":"Energy requirements",
"კალკულატორი ითვლის მოსვენებული ენერგოცვლის (REE) მოთხოვნილებას ოთხი ვალიდირებული მეთოდით და თვითონ გირჩევს შესაფერისს —":"The calculator estimates resting energy expenditure (REE) using four validated methods and recommends the appropriate one —",
"GSPEN-ის კლასიფიკაციით":"the GSPEN classification",
": ბავშვებში (<18 წ.) გამოიყენება მხოლოდ":": in children (<18 y) only the",
"შოფილდის":"Schofield",
"ფორმულა; ჰოსპიტალიზებულ პაციენტებში —":"formula is used; in hospitalised patients —",
"ESPEN-ის":"ESPEN's",
"წონაზე დაფუძნებული გათვლა (25–30 კკალ/კგ/დღეში); BMI ≥30-ის დროს უმჯობესია":"weight-based estimate (25–30 kcal/kg/day) applies; for BMI ≥30,",
"მიფლინ-სენ ჟეორი":"Mifflin-St Jeor",
"; BMI <30-ის დროს გამოსადეგია სამივე ფორმულა (მიფლინ-სენ ჟეორი, ჰარის-ბენედიქტი, შოფილდი).":"is preferred; for BMI <30 all three formulas are suitable (Mifflin-St Jeor, Harris-Benedict, Schofield).",
"ასაკი (წელი)":"Age (years)",
"სქესი":"Sex",
"მამრობითი":"Male",
"მდედრობითი":"Female",
"წონა (კგ)":"Weight (kg)",
"პაციენტი ჰოსპიტალიზებულია":"The patient is hospitalised",
"— გამოყენებული იქნება ESPEN-ის გათვლა (25–30 კკალ/კგ/დღეში)":"— the ESPEN estimate (25–30 kcal/kg/day) will be used",
"შეავსე ასაკი, სქესი, წონა და სიმაღლე.":"Fill in age, sex, weight and height.",
"ბავშვი / მოზარდი — გამოიყენება მხოლოდ შოფილდის ფორმულა":"Child / adolescent — only the Schofield formula is used",
"შოფილდი:":"Schofield:",
"კკალ/დღეში":"kcal/day",
"ბავშვებში REE ითვლება მხოლოდ შოფილდის ფორმულით (GSPEN-ის რეკომენდაცია).":"In children, REE is calculated only with the Schofield formula (GSPEN recommendation).",
"ჰოსპიტალიზებული პაციენტი — ESPEN-ის გათვლა":"Hospitalised patient — ESPEN estimate",
"ESPEN (25–30 კკალ/კგ/დღეში):":"ESPEN (25–30 kcal/kg/day):",
"საორიენტაციოდ, REE მიფლინ-სენ ჟეორით:":"For reference, REE by Mifflin-St Jeor:",
"მიფლინ-სენ ჟეორი:":"Mifflin-St Jeor:",
"BMI ≥30 — გათვლისთვის განიხილე კორეგირებული წონის გამოყენება (":"For BMI ≥30, consider using adjusted body weight for calculations (",
"წონის კალკულატორი":"weight calculator",
"BMI ≥30 — უმჯობესია მიფლინ-სენ ჟეორი (GSPEN-ის რეკომენდაცია)":"BMI ≥30 — Mifflin-St Jeor is preferred (GSPEN recommendation)",
"რეკომენდებული":"Recommended",
"ჰარის-ბენედიქტი:":"Harris-Benedict:",
"BMI <30 — გამოსადეგია სამივე ფორმულა":"BMI <30 — all three formulas are suitable",
"Mifflin MD, St Jeor ST et al., Am J Clin Nutr 1990 · Harris JA, Benedict FG, 1919 · Schofield WN, Hum Nutr Clin Nutr 1985 (WHO) · ESPEN — Gomes F et al., Clin Nutr 2018: ჰოსპიტალიზებული პაციენტები — 25–30 კკალ/კგ/დღეში.":"Mifflin MD, St Jeor ST et al., Am J Clin Nutr 1990 · Harris JA, Benedict FG, 1919 · Schofield WN, Hum Nutr Clin Nutr 1985 (WHO) · ESPEN — Gomes F et al., Clin Nutr 2018: hospitalised patients — 25–30 kcal/kg/day.",
"შედეგი მოსვენებული ენერგოცვლაა (REE) — ჯამური დღიური მოთხოვნილება დგინდება აქტივობისა და სტრესის ფაქტორების გათვალისწინებით, კლინიკური შეფასების მიხედვით. ეს ინსტრუმენტი კლინიკური გადაწყვეტილების მხარდასაჭერია და არ ცვლის ინდივიდუალურ სამედიცინო შეფასებას.":"The result is resting energy expenditure (REE) — total daily requirements are determined by applying activity and stress factors according to clinical judgement. This tool supports clinical decision-making and does not replace individual medical assessment.",

/* ===== body weight calculator ===== */
"იდეალური და კორეგირებული წონა — GSPEN":"Ideal and adjusted body weight — GSPEN",
"/ წონა":"/ Weight",
"წონა":"Weight",
"წონის კალკულატორი":"Weight calculator",
"იდეალური სხეულის წონა (IBW)":"Ideal body weight (IBW)",
"კორეგირებული წონა (AdjBW)":"adjusted body weight (AdjBW)",
"გამოიყენება ზოგიერთი მედიკამენტის წონაზე დაფუძნებული დოზირებისთვის და თირკმლის ფუნქციის ზოგიერთ შეფასებაში. ფორმულები გამოსადეგია ≥152.4 სმ (5 ფუტი) სიმაღლის პაციენტებში. AdjBW ითვალისწინებს ზოგიერთი წამლის არასრულ განაწილებას ცხიმოვან ქსოვილში სიმსუქნის დროს.":"are used for weight-based dosing of certain medications and in some estimates of kidney function. The formulas apply to patients ≥152.4 cm (5 feet) tall. AdjBW accounts for the incomplete distribution of certain drugs into adipose tissue in obesity.",
"რეალური წონა (კგ)":"Actual weight (kg)",
"· რეალური წონა IBW-ის:":"· Actual weight as % of IBW:",
"შეავსე სქესი, სიმაღლე და წონა.":"Fill in sex, height and weight.",
"სიმაღლე <152.4 სმ":"Height <152.4 cm",
"ეს ფორმულები გამოსადეგია მხოლოდ ≥152.4 სმ (5 ფუტი) სიმაღლის პაციენტებში.":"These formulas apply only to patients ≥152.4 cm (5 feet) tall.",
"იდეალური წონა (IBW):":"Ideal body weight (IBW):",
"კორეგირებული წონა (AdjBW):":"Adjusted body weight (AdjBW):",
"კგ":"kg",
"რეალური წონა IBW-ზე ნაკლებია — დოზირებისთვის ზოგადად გამოიყენება რეალური წონა.":"Actual weight is below IBW — actual weight is generally used for dosing.",
"რეალური წონა IBW-ზე მეტია, მაგრამ 120%-ზე ნაკლები — ამ დიაპაზონში კორექციის ფაქტორი გაურკვეველია.":"Actual weight is above IBW but below 120% of IBW — the adjustment factor is unclear in this range.",
"AdjBW = IBW + 0.4 × (რეალური წონა − IBW)":"AdjBW = IBW + 0.4 × (actual weight − IBW)",
"ფორმულები:":"Formulas:",
"IBW (Devine, 1974) — მამრობითი: 50 კგ + 2.3 კგ ყოველ ინჩზე 5 ფუტს ზემოთ; მდედრობითი: 45.5 კგ + 2.3 კგ ყოველ ინჩზე 5 ფუტს ზემოთ · AdjBW = IBW + 0.4 × (რეალური წონა − IBW), გამოიყენება, როცა რეალური წონა ≥120% IBW-ისა.":"IBW (Devine, 1974) — males: 50 kg + 2.3 kg per inch over 5 feet; females: 45.5 kg + 2.3 kg per inch over 5 feet · AdjBW = IBW + 0.4 × (actual weight − IBW), used when actual weight is ≥120% of IBW.",
"შენიშვნა:":"Note:",
"თუ რეალური წონა IBW-ზე ნაკლებია, დოზირებისთვის ზოგადად რეალური წონა გამოიყენება. IBW-სა და 120% IBW-ს შორის დიაპაზონში კორექციის ფაქტორი გაურკვეველია — AdjBW ამ შემთხვევაში არ ითვლება. გამოყენებამდე გადაამოწმე კლინიკური წამლის ცნობარი და დაწესებულების პროტოკოლები — რეკომენდაციები განსხვავდება.":"If actual weight is below IBW, actual weight is generally used for dosing. In the range between IBW and 120% of IBW the adjustment factor is unclear — AdjBW is not calculated in that case. Before use, consult clinical drug references and institutional protocols — recommendations vary.",
"Devine BJ, Drug Intell Clin Pharm 1974 · Erstad BL, Intensive Care Med 2004 · Hanley MJ et al., Clin Pharmacokinet 2010. ეს ინსტრუმენტი კლინიკური გადაწყვეტილების მხარდასაჭერია და არ ცვლის ინდივიდუალურ სამედიცინო შეფასებას.":"Devine BJ, Drug Intell Clin Pharm 1974 · Erstad BL, Intensive Care Med 2004 · Hanley MJ et al., Clin Pharmacokinet 2010. This tool supports clinical decision-making and does not replace individual medical assessment.",

/* ===== recording gate, Q&A, ask box ===== */
"ჩატარებული ვებინარი · ჩანაწერი":"Past webinar · recording",
"სალომე გოგლიძე, კლინიკური ნუტრიციოლოგი — უყურე ჩანაწერს პირდაპირ საიტზე":"Salome Goglidze, clinical nutritionist — watch the recording right on the site",
"ნახე ჩანაწერი →":"Watch the recording →",
"ჩანაწერი ხელმისაწვდომია":"Recording available",
"სალომე გოგლიძე, კლინიკური ნუტრიციოლოგი — უყურე ჩანაწერს და ნახე კითხვა–პასუხი →":"Salome Goglidze, clinical nutritionist — watch the recording and browse the Q&A →",
"GSPEN-ის (საქართველოს პარენტერალური, ენტერალური კვებისა და მეტაბოლიზმის ასოციაცია) ორგანიზებით გაიმართა ვებინარი, რომელიც ეძღვნება ნაწლავის ანთებითი დაავადებების (IBD) დროს კვების მართვას ზრდასრულ პაციენტებში.":"GSPEN (the Georgian Association for Parenteral, Enteral Nutrition and Metabolism) hosted a webinar dedicated to the nutritional management of inflammatory bowel disease (IBD) in adult patients.",
"ვებინარზე დეტალურად განვიხილეთ:":"In this webinar we discussed in detail:",
"ჩანაწერის ნახვა უფასოა":"Watching the recording is free",
"გასახსნელად მხოლოდ მოკლე ინფორმაცია გვჭირდება — ეს ასოციაციას ეხმარება, უკეთ დაგეგმოს მომავალი ვებინარები.":"We just need a little information to unlock it — this helps the association plan future webinars better.",
"პროფესია / სპეციალობა *":"Profession / speciality *",
"ვინ ხართ *":"Who are you *",
"აირჩიე…":"Choose…",
"პაციენტი":"Patient",
"ექიმი":"Physician",
"პაციენტის მშობელი":"Parent of a patient",
"სხვა":"Other",
"გთხოვ, შეავსე სამივე ველი (ელფოსტა სწორი ფორმატით).":"Please fill in all three fields (with a valid email).",
"ჩანაწერის გახსნა ▶":"Open the recording ▶",
"კითხვა–პასუხი":"Questions & answers",
"ვებინარის რეგისტრაციისას შემოსული კითხვები და მომხსენებლის პასუხები.":"Questions submitted during webinar registration, with the speaker's answers.",
"პასუხი მალე დაემატება.":"The answer will be added soon.",
"გაქვს შეკითხვა?":"Have a question?",
"დასვი შეკითხვა ამ თემაზე — გადავამოწმებთ და პასუხი ზემოთ, კითხვა–პასუხის სექციაში დაემატება.":"Ask a question on this topic — we will review it and add the answer to the Q&A section above.",
"შენი შეკითხვა…":"Your question…",
"ელფოსტა (არასავალდებულო — თუ გინდა პასუხი პირადადაც მიიღო)":"Email (optional — if you'd also like a personal reply)",
"გაგზავნა":"Send",
"მადლობა! შეკითხვა მიღებულია — პასუხს მალე დავამატებთ.":"Thank you! Your question has been received — the answer will be added soon.",
"კრონის დაავადება, ილეოსტომა და კვება — რა უნდა გავითვალისწინოთ?":"Crohn's disease, an ileostomy and nutrition — what should be considered?",
"რამდენად შედეგიანია სიმბიოტიკების/პრობიოტიკების მიღება რემისიის პერიოდში?":"How effective are synbiotics/probiotics during remission?",
"როგორ დავგეგმოთ ორსულობა წყლულოვანი კოლიტის დროს — რა რისკები არსებობს და რა უნდა გავითვალისწინოთ?":"How to plan a pregnancy with ulcerative colitis — what are the risks and what should be considered?",
"GLP-1 პრეპარატები (სემაგლუტიდი, ტირზეპატიდი) წყლულოვანი კოლიტის რემისიის დროს — როცა წონის კონტროლი გართულებულია?":"GLP-1 medications (semaglutide, tirzepatide) during ulcerative colitis remission — when weight control is difficult?",
"უგლუტენო და ულაქტოზო დიეტა — რამდენად მართებულია, თუ ორივეს აუტანლობა დადასტურებულია?":"A gluten-free and lactose-free diet — is it appropriate when both intolerances are confirmed?",
"აუცილებელია თუ არა შემანარჩუნებელი მედიკამენტის უწყვეტად მიღება? დასაშვებია თუ არა გარკვეული დროით შეწყვეტა?":"Is it necessary to take maintenance medication continuously? Is a temporary break acceptable?",
"მუდმივი შებერილობა და მუცლის ტკივილი, რომელსაც წამლები და დიეტა არ შველის — რისი ნიშანი შეიძლება იყოს?":"Persistent bloating and abdominal pain that medication and diet do not relieve — what could it indicate?",
"როგორ განვასხვავოთ ნაწლავის ანთებითი დაავადების სიმპტომები ფუნქციური დარღვევებისგან და როდის არის საჭირო დამატებითი კვლევა?":"How to distinguish IBD symptoms from functional disorders, and when is further investigation needed?",
"კვების თავისებურებები დივერტიკულიტის დროს?":"Nutritional considerations in diverticulitis?",
"რეფლუქსის დროს რა ვადით უნდა ამოვიღოთ სავარაუდო ტრიგერები და როგორ დავაბრუნოთ ისინი რაციონში ზედმეტი შეზღუდვის გარეშე?":"In reflux, how long should suspected triggers be removed, and how can they be reintroduced without over-restricting the diet?"
};

/* regex fallbacks for composed strings */
var RX = [
  [/ჯამი:\s*(\d+)\s*— ნუტრიციული რისკი დადასტურებულია \(≥3\)/g, "Total: $1 — nutritional risk confirmed (≥3)"],
  [/ჯამი:\s*(\d+)\s*— რისკი ჯერ არ დასტურდება \(<3\)/g, "Total: $1 — risk not yet confirmed (<3)"],
  [/დაიწყე ნუტრიციული ზრუნვის გეგმა: გამოთვალე მოთხოვნა, შეაფასე მიღება და საჭიროებისას გადადი კვებითი მხარდაჭერის ესკალაციაზე\. ჩართე დიეტოლოგი\./g, "Start a nutrition care plan: calculate requirements, assess intake and, if needed, escalate nutritional support. Involve a dietitian."],
  [/გაიმეორე სკრინინგი ყოველკვირეულად\. თუ პაციენტს დიდი ოპერაცია ელოდება, განიხილე პრევენციული ნუტრიციული გეგმა\./g, "Repeat the screening weekly. If the patient is scheduled for major surgery, consider a preventive nutrition plan."],
  [/^(\d+)\s*ჩანაწერი$/, function(m,n){return n+" recording"+(n==="1"?"":"s");}],
  [/^(\d+)\s*სტატია$/, function(m,n){return n+" article"+(n==="1"?"":"s");}],
  [/^(\d+)\s*ხელსაწყო$/, function(m,n){return n+" tool"+(n==="1"?"":"s");}],
  [/^(\d+)\s*კალკულატორი$/, function(m,n){return n+" calculator"+(n==="1"?"":"s");}],
  [/^(\d+(?:\.\d+)?)\s*კგ$/, "$1 kg"],
  [/იანვარი/g,"January"],[/თებერვალი/g,"February"],[/მარტი/g,"March"],[/აპრილი/g,"April"],
  [/მაისი/g,"May"],[/ივნისი/g,"June"],[/ივლისი/g,"July"],[/აგვისტო/g,"August"],
  [/სექტემბერი/g,"September"],[/ოქტომბერი/g,"October"],[/ნოემბერი/g,"November"],[/დეკემბერი/g,"December"],
  [/სალომე გოგლიძე/g,"Salome Goglidze"],[/ანა მიქაბერიძე/g,"Ana Mikaberidze"],[/თორნიკე ენუქიძე/g,"Tornike Enukidze"],
  [/კლინიკური ნუტრიციოლოგი/g,"clinical nutritionist"],
  [/GSPEN-ის პრეზიდენტი/g,"President of GSPEN"],
  [/დაგეგმილი ვებინარი · ონლაინ/g,"Upcoming webinar · online"],
  [/მიმდინარე პროექტი/g,"Current project"]
];

var KA_RE = /[Ⴀ-ჿ]/;
var attrStore = [];   /* [el, attr, original] */
var nodeStore = [];   /* [textNode, original] */
var observer = null;
var active = false;

function translate(s){
  if(s==null) return null;
  var key = s.replace(/\s+/g," ").trim();
  if(!key || !KA_RE.test(key)) return null;
  if(Object.prototype.hasOwnProperty.call(M, key)){
    var lead = s.match(/^\s*/)[0], tail = s.match(/\s*$/)[0];
    return lead + M[key] + tail;
  }
  var out = s, hit = false;
  for(var i=0;i<RX.length;i++){
    var r = RX[i][0]; r.lastIndex = 0;
    if(r.test(out)){ r.lastIndex = 0; out = out.replace(r, RX[i][1]); hit = true; }
  }
  return hit ? out : null;
}

var ATTRS = ["placeholder","title","aria-label","alt"];
function walk(root){
  if(!root) return;
  if(root.nodeType===3){
    var t = translate(root.nodeValue);
    if(t!==null){ nodeStore.push([root, root.nodeValue]); root.nodeValue = t; }
    return;
  }
  if(root.nodeType!==1) return;
  var tag = root.nodeName;
  if(tag==="SCRIPT"||tag==="STYLE") return;
  for(var a=0;a<ATTRS.length;a++){
    var v = root.getAttribute && root.getAttribute(ATTRS[a]);
    if(v){ var tv = translate(v); if(tv!==null){ attrStore.push([root, ATTRS[a], v]); root.setAttribute(ATTRS[a], tv); } }
  }
  var c = root.firstChild;
  while(c){ var nx = c.nextSibling; walk(c); c = nx; }
}

function applyEn(){
  if(active) return;
  active = true;
  document.documentElement.setAttribute("lang","en");
  var t = translate(document.title); if(t!==null){ document._i18nTitle = document.title; document.title = t; }
  walk(document.body);
  observer = new MutationObserver(function(muts){
    for(var i=0;i<muts.length;i++){
      var m = muts[i];
      if(m.type==="characterData"){
        var tr = translate(m.target.nodeValue);
        if(tr!==null){ nodeStore.push([m.target, m.target.nodeValue]); m.target.nodeValue = tr; }
      } else if(m.addedNodes){
        for(var j=0;j<m.addedNodes.length;j++) walk(m.addedNodes[j]);
      }
    }
  });
  observer.observe(document.body, {childList:true, subtree:true, characterData:true});
  updateBtns();
}

function revertKa(){
  if(!active) return;
  active = false;
  if(observer){ observer.disconnect(); observer = null; }
  document.documentElement.setAttribute("lang","ka");
  if(document._i18nTitle){ document.title = document._i18nTitle; document._i18nTitle = null; }
  for(var i=nodeStore.length-1;i>=0;i--){
    var n = nodeStore[i];
    try{ n[0].nodeValue = n[1]; }catch(e){}
  }
  nodeStore = [];
  for(var k=attrStore.length-1;k>=0;k--){
    var a = attrStore[k];
    try{ a[0].setAttribute(a[1], a[2]); }catch(e){}
  }
  attrStore = [];
  updateBtns();
}

function currentLang(){ try{ return localStorage.getItem("gspen_lang")||"ka"; }catch(e){ return "ka"; } }
function setLang(l){
  try{ localStorage.setItem("gspen_lang", l); }catch(e){}
  if(l==="en") applyEn(); else revertKa();
}
function toggleLang(){ setLang(currentLang()==="en"?"ka":"en"); }

function updateBtns(){
  var en = currentLang()==="en";
  var els = document.querySelectorAll(".lang-sw");
  for(var i=0;i<els.length;i++){ els[i].textContent = en ? "ქარ" : "EN"; els[i].setAttribute("title", en ? "ქართულად" : "Switch to English"); }
}

function injectBtns(){
  var acts = document.querySelectorAll("header.site .actions");
  for(var i=0;i<acts.length;i++){
    if(acts[i].querySelector(".lang-sw")) continue;
    var b = document.createElement("button");
    b.type = "button"; b.className = "lang-sw"; b.textContent = "EN";
    b.addEventListener("click", toggleLang);
    acts[i].insertBefore(b, acts[i].firstChild);
  }
  var mob = document.getElementById("mobileNav");
  if(mob && !mob.querySelector(".lang-sw-m")){
    var a = document.createElement("a");
    a.href = "javascript:void(0)"; a.className = "lang-sw-m";
    a.textContent = "English / ქართული";
    a.addEventListener("click", toggleLang);
    mob.appendChild(a);
  }
  updateBtns();
}

function init(){
  injectBtns();
  if(currentLang()==="en") applyEn();
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
else init();

window.gspenSetLang = setLang;
})();
