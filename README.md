# GSPEN საიტი — gspen.ge

საქართველოს ენტერალური, პარენტერალური კვებისა და მეტაბოლიზმის ასოციაციის საიტი.
სტატიკური საიტი GitHub Pages-ისთვის + Decap CMS ადმინ-პანელი.

## სტრუქტურა

| ფაილი | დანიშნულება |
|---|---|
| `index.html` | მთავარი გვერდი |
| `vin-vart.html` | ვინ ვართ ჩვენ (მისია, პრინციპები, გუნდი) |
| `wesdeba.html` | წესდება |
| `proeqtebi.html` | პროექტები (მიმდინარე / დასრულებული / დაგეგმილი) |
| `resursebi.html` | რესურსების ჰაბი |
| `webinarebi.html` | ვებინარები (ვიდეოები YouTube-იდან) |
| `statiebi.html` | სტატიები / ბლოგი |
| `instrumentebi.html` | ნუტრიციული ხელსაწყოები (დროებით ცარიელი) |
| `kalkulatorebi.html` | კალკულატორები — MUST, NRS-2002, GLIM |
| `must.html`, `nrs.html`, `glim.html` | თავად კალკულატორები |
| `tool.html` | ესკალაცია/დეესკალაციის ინსტრუმენტი (ჯერ არ არის მიბმული მენიუში) |
| `wevroba.html` | გაწევრიანება (კატეგორიები, საწევრო, რეკვიზიტები) |
| `content/*.json` | კონტენტი — ამას ცვლის ადმინ-პანელი |
| `admin/` | Decap CMS ადმინ-პანელი (`gspen.ge/admin`) |
| `assets/` | სტილები და JS |
| `firebase.json` | Firebase Hosting-ის კონფიგურაცია (თუ ჰოსტინგად Firebase აირჩევა) |

კონტენტის დამატება ხდება `/admin` გვერდიდან (Decap CMS) ან პირდაპირ
`content/*.json` ფაილების რედაქტირებით GitHub-ზე.

## გაშვება (ეტაპები)

### 1. GitHub-ზე ატვირთვა
1. შედი github.com-ზე → New repository → სახელი: `gspen-site` → Public → Create.
2. „uploading an existing file" ბმულით ატვირთე ამ საქაღალდის ყველა ფაილი (საქაღალდეების სტრუქტურის შენარჩუნებით) → Commit.

### 2. GitHub Pages-ის ჩართვა
1. რეპოზიტორიაში: Settings → Pages.
2. Source: „Deploy from a branch" → Branch: `main`, Folder: `/ (root)` → Save.
3. 1–2 წუთში საიტი გაიხსნება მისამართზე `https://USERNAME.github.io/gspen-site/`.

### 3. დომეინის მიბმა (gspen.ge)
1. Settings → Pages → Custom domain → ჩაწერე `gspen.ge` → Save.
2. DNS-ში (სადაც დომეინი იმართება) დაამატე:
   - `A` ჩანაწერები `gspen.ge`-სთვის: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` ჩანაწერი `www` → `USERNAME.github.io`
   - ⚠ MX ჩანაწერებს (ელფოსტა) ხელი არ ახლო.
3. Pages-ის გვერდზე ჩართე „Enforce HTTPS" (გამოჩნდება DNS-ის გავრცელების შემდეგ).

### 3ბ. ალტერნატივა: ჰოსტინგი Firebase-ზე (GitHub Pages-ის ნაცვლად)

კოდი ამ შემთხვევაშიც GitHub-ზე რჩება (ადმინ-პანელი GitHub-ში წერს ცვლილებებს) —
Firebase მხოლოდ საიტის „გამშვები" ხდება. `firebase.json` უკვე რეპოშია.

1. console.firebase.google.com → Add project → სახელი: `gspen` (Analytics არ არის საჭირო).
2. კომპიუტერზე (Node.js უნდა იდგეს): `npm i -g firebase-tools` → `firebase login`.
3. რეპოზიტორიის კლონში გაუშვი: `firebase init hosting:github` — აირჩიე პროექტი და
   რეპო `USERNAME/gspen-site`. ეს ავტომატურად ქმნის GitHub Action-ს, რომელიც
   ყოველი ცვლილების (მათ შორის ადმინიდან შენახვის) შემდეგ საიტს თავად ანახლებს.
   (პირველი ატვირთვისთვის: `firebase deploy --only hosting`.)
4. Console → Hosting → Add custom domain → `gspen.ge` — Firebase თვითონ გაჩვენებს
   ზუსტ DNS ჩანაწერებს (A/TXT), ისინი ჩაიწერება დომეინის DNS-ში.
   ⚠ MX ჩანაწერებს (ელფოსტა) ხელი არ ახლო. HTTPS-ს Firebase ავტომატურად რთავს.

GitHub Pages-ის მე-2–3 ნაბიჯები ამ შემთხვევაში აღარ არის საჭირო.

### 4. ადმინ-პანელის (Decap CMS) ლოგინი
Decap-ს ლოგინისთვის სჭირდება პატარა OAuth-შუამავალი (უფასო, ერთჯერადი აწყობა):
1. აწყვე OAuth-პროვაიდერი Cloudflare Workers-ზე (უფასო) — მაგ. `sveltia-cms-auth` ან `decap-proxy` პროექტით.
2. GitHub-ზე: Settings → Developer settings → OAuth Apps → New OAuth App
   (Homepage: `https://gspen.ge`, Callback: შენი Worker-ის მისამართი + `/callback`).
3. `admin/config.yml`-ში შეავსე `repo:` და `base_url:`.
4. ამის შემდეგ `gspen.ge/admin` → „Login with GitHub" → მხოლოდ ის მოხმარებლები შევლენ, ვისაც რეპოზიტორიაზე write-წვდომა აქვს.

### ლოკალური ნახვა
უბრალოდ გახსენი `index.html` ბრაუზერში — ყველა გვერდი მუშაობს ფაილიდანაც
(კონტენტს ჩაშენებული სათადარიგო ასლიდან კითხულობს).

## შესავსები ადგილები (TODO)
- [ ] `admin/config.yml` → `repo:` და `base_url:`
- [ ] `wevroba.html` → საბანკო რეკვიზიტები (ბანკი, IBAN) და საწევროს საბოლოო ოდენობები
- [ ] `tool.html` → CFG ბმულები (კალორიების აპი, კვების დღიურების .docx ფაილები) და სარეცენზიო ზოლის მოხსნა გამოქვეყნებამდე
