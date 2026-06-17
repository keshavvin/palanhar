// Full product catalogue. Each row: name|quantity|mrp|manufacturer (3rd party).
// Category lines start with `#Name|emoji`. Margin column is empty in source → shown as "—".
const RAW = `
#टूथपेस्ट / मंजन (Tooth Paste / Powder)|🪥
Dant Raksha||95|Prakriti
Herbal Manjan||125|Gau Gavya
Dant Manjan|50 gm|80|Gir Gau Jatan
Dant Manjan Powder|100gm|90|Shri Rewa
Herbal Toothpaste|100gm|150|Ashpveda
Toothpaste|100gm|100|Gavya Ratan
Toothpaste|||Ayubal
Advance Manjan Powder|40 gm|70|Shree Onkar
Panchgavya Manjan|60 gm|50|Gokanti
Gomay Bhasm Dant Manjan|60gm|45|Dewalapar kamdhenu
Dent O guard||85|Gotirath
Wonder Tooth Powder|125gm|300|5sfarms
#हैंडवॉश (Hand Wash)|🧴
herbal handwash|500ml|120|Shri Rewa
handwash|||Onkar
#हर्बल पंचगव्य साबुन (Herbal Panchgavya Soap)|🧼
Panchgavya soap|75 gm|30|Gau Gavya Ayurved
Gau chandan haldi||165|Gavya Ratan
Manorma||105|Gavya Ratan
nanda neem||96|Gavya Ratan
kesar aloevera||105|Gavya Ratan
kesar Goti||120|Gavya Ratan
Gomay Soap|||Gavya Ratan
Herbal Soap D-tan organic||125|Sherrin's
panchgavya soap|||Gir Gau Jatan
Aloevera|80gm|55|Gir Gau Jatan
haldi chandan|80gm|55|Gir Gau Jatan
Neem|80gm|50|Gir Gau Jatan
Charcoal|80gm|70|Gir Gau Jatan
Palash|80gm|55|Gir Gau Jatan
Multani Mitti|80gm|60|Gir Gau Jatan
malham soap||250/100|Gir Gau Jatan
organic soap|40gm|30|Gir Gau Jatan
Goat milk jojoba oil|100gm|149|Ashpveda
Sandalwood and saffron|100gm|229|Ashpveda
haldi chandan|75gm|249|Ashpveda
Hydrating Rose|75gm|249|Ashpveda
jasmine and Mogra|75gm|249|Ashpveda
Khas Soap|100gm|379|Ashpveda
kesuda|100gm|75/99|Shree Rewa
neem aloevera|100gm|75/99|Shree Rewa
Charcoal|100gm|75/99|Shree Rewa
rose milk|100gm|75/99|Shree Rewa
kesar|100gm|75/99|Shree Rewa
Palash Ekixir|110gm|100|Gau Mandir
Kachcha|110gm|100|Gau Mandir
Pakka no colour added|110gm|100|Gau Mandir
milk aura|110gm|100|Gau Mandir
oxyrich charcoal|110gm|100|Gau Mandir
kesra silken|110gm|100|Gau Mandir
neem aloevera|110gm|100|Gau Mandir
haldi chandan|||Ayubal wellness
Charcoal|||Ayubal wellness
neem tulsi|||Ayubal wellness
rose lep|||Ayubal wellness
panchgavya charcoal|125gm|60|Gokanti
panchgavya soap|80 gm|50|Gokanti
exima soap|80gm|80|Gokanti
neem aloevera|125gm|60|Gokanti
Gomay lep tikiya|75gm|40|Dewalapar kamdhenu
haldi chandan|75gm||Dewalapar kamdhenu
milk honey|75gm||Dewalapar kamdhenu
ubtan soap|75gm||Dewalapar kamdhenu
isab lep tikiya|75gm|60|Dewalapar kamdhenu
panchgavya soap||70|Rajaldesar
#पंचगव्य उबटन / फेस पैक (Ubtan / Face Pack)|🧖
ubtan face pack|100gm|100|gokanti
face pack|100gm|200|sherrins
ubtan||150|sherrins
scrub||400|sherrins
saffron/neem face cleaner|100ml|675|gir gau jatan
fruit wallnut scrub|30gm|300|gir gau jatan
face pack d tan|30gm|375|gir gau jatan
ultra hydrate face pack|30gm|325|gir gau jatan
v-c d tan|50ml|350|hold on
anti acne tan face pack|||Ayubal
herbal face scrub|||Ayubal
ubtan||25|govigyan
facial soap||120|gavya ratan
nagkesar ubtan|25gm|249|ashpveda
chandrakanti ubtan|150gm|300|5sfarms
anti acne anti tan face pack|||Ayubal
face pack based aloevera|||Ayubal
#फेस वॉश / जेल / सीरम (Face Wash / Gel / Serum)|🧴
face wash|50 ml|100|gir gau jatan
v-c face wash|300ml|750|hold on
face wash|||onkar
v-c face serum||200|sherins
face serum|30 ml|2800|ashpveda
v-c glow serum|30ml|900|hold on
v-c eaf serum|||hold on
aloe vera gel||250|sherrins
saffron gel||250|sherrins
aloevera/vetiver gel|100ml|450|ashpveda
aloevera gel cucumber|||ayubal
aloevera gel green lavander|||ayubal
aloevera gel haldi|||ayubal
rose cream gel|||onkar
papaya gel|||onkar
#फेस क्रीम / केयर (Face Cream / Care)|🧴
fairness cream||1050|sherrins
ultra hydration radiance cream|30gm|650|ashpveda
nourishing and restoring night cream|30 gm|425|ashpveda
moisturising cream|30gm|549|ashpveda
moisturising cream||400|sherrins
ghee face cream|||onkar
ghee night cream|||onkar
haldi antiseptic and glow cream|||onkar
skin collegen|||onkar
aloevera sunscreen pa++++|100ml|800|ashpveda
coconut milk sunscreen SPF 50 P++++|100ml|800|ashpveda
vizo anti ageing cream|||ayubal
night cream|||ayubal
rose water mist|100 ml|349|ashpveda
rose water|||onkar
anti acne pimple|100 ml|600|hold on
anti ageing facial kit|||hold on
glass look facial kit|||hold on
anti wrinkle facial kit|||hold on
anti pigmentation facial kit|||hold on
anti acne facial kit|||hold on
kukumadi ghrit|||gir gau jatan
kumkum oil|||sherrins
#बॉडी लोशन / तेल / केयर (Body Lotion / Oil)|🧴
jasmine and mullberry lotion|100ml|500|ashpveda
pure skin rich tube rose lotion|30 ml|255|ashpveda
nayab body lotion|100ml|1848|ashpveda
v-c glow lotion|300ml|550|hold on
jasmine body lotion|1ltr|550|hold on
carribeon lotion|1ltr|900|hold on
hawaiian plummeria lotion|1ltr|900|hold on
lavander lotion|1ltr|900|hold on
wild orchid lotion|1ltr|900|hold on
cv-c cleansing lotion|1ltr|900|hold on
body wash radiant saffron and neem|30 ml|225|ashpveda
body lotion|||ayubal
skin care lotion||103|gotirath
kannauj rose and oudh body oil|30 ml|200|ashpveda
deep relax body oil|30 ml|225|ashpveda
lemongrass and eucalyptus oil|||ashpveda
virgin coconut oil|120ml|475|ashpveda
nayab body oil|100ml|1549|ashpveda
almond virgin body oil|120ml|500|ashpveda
malish tailam|50ml|120|govigyan
narayan tel|50ml|200|govigyan
lakshadi tel|25ml|270|govigyan
malish tel|||samadhan
dermotreat|||ayubal
moisturising|||ayubal
hair removal cream rose blossom|120ml|250|hold on
hair removal cream cucumber|120 ml|250|hold on
#लिप केयर (Lip Care)|💄
lip care||150|sherrins
lip balm||150|sherrins
lip tint watery and creamy||150/300|sherrins
lip gloss||300|sherrins
lip scrub||150|sherrins
lip lighter||300|sherrins
#हेयर केयर (Hair Care)|💇
herbal shampoo|||onkar
herbal shampoo|200ml|300|sherrins
herbal shampoo|200ml|200|shree reva
natural shampoo|200ml|200|gokanti
kesh amrit shampoo||80|gokripa
bhringraj shikakai hair wash|100ml|475|ashpveda
japapatti bhrahmi hair wash|100ml|475|ashpveda
green tea gotukola hair wash|||ashpveda
green tea and gotukola hair conditioner|100ml|600|ashpveda
bhringhraj shikakai conditioner|100 ml|449|ashpveda
hair fall treatment conditioner|||hold on
herbal conditioner|||ayubal
hair growth pack|||onkar
hair pack|100gm|200|sherrins
hair growth pack|||onkar
anti hair fall sulphate free|300ml|750|hold on
anti hair rescue hair oil|250ml|1000|hold on
anti hair fall kit||850|sherrins
anti dandruf lotion|||govigyan
hair oil|||onkar
hair oil advance|||onkar
hair oil|||sherrins
bhringraj oil advance hair therapy|120 ml|750|ashpveda
hair repair oil|100ml|630|ashpveda
japapatti bhrahmi head massage oil|30ml|225|ashpveda
virgin coconut|120ml|500|ashpveda
virgin almond|120ml|475|ashpveda
virgin neem|120ml|110|ashpveda
hair oil|100ml|200|shree reva
adivasi hair oil|||ayubal
herbal hair oil|||ayubal
premium herbal hair oil|||ayubal
red onion hair oil|||ayubal
kesh tel|100ml|240|gokanti
kesh tel / powder||240|gokripa
kesh tel 12 herbs|100ml|600|gokanti
neel bhringadi tel|200ml|600|gokanti
hair revitalizing oil 41 herbs|100ml|690|5sfarms
amla gomay hair oil|100ml|540|purnedhenu
#गोमय घरेलू उत्पाद (Gomay Household)|🏠
gonyle floor cleaner|1ltr|50|gokripa
gonyle floor cleaner|1 ltr|75|shree reva
gonyle floor cleaner|1ltr|60|prakriti
gonyle floor cleaner|1ltr|100|shree reva
herbal detergent liquid|1ltr|200|shree reva
dish wash gomay powder|1kg|100|shree reva
natural dish wash|750gm|90|gir gau jatan
gomay murti / sculpture|||
gomay aasan / seating and standing feet|||
gomay household articles|||
accupressure slippers / khadau|||
dhupan kande / cowdung cake|||
samrani cup|||
dhupbatti|||
mosquito repellents|||
interior decoration articles|||
anti radiation chips|||
#गोमय सामान्य औषधि (General Medicine)|💊
amritdhara|||
advance amritdhara|||onkar
panchgavya ghrit nasyam / nasya|15 ml|35/125|gau gavya
adrak nasya|10 ml|140|gir gau jatan
nasyam panchgavya ghrit|30ml|330|gir gau jatan
bhrahmi nasya||500|gokanti
vedik nasyam|15 ml|400|gotirath
gopal nasyam|15gm|500|gotirath
nasya memory booster|15ml|60|gavya ratan
netra jyoti|15 ml|60|gau gavya
netra jyoti|||shree reva
karna aushadhi|15 ml|100|gokanti
ear infection octovin||55|gotirath
panchgavya ghrit nabhisya|30ml|330|gir gau jatan
mix oil nabhishya|||ayubal
mix oil nabhishya|||onkar
nasya panchgavya ghrit|||onkar
eye drop panchgavya|||gotirath
#गोमूत्र अर्क (Gomutra Ark with Herbs)|🧪
makoy ark|500ml|324|purndhenu
kasni ark|500ml|450|purndhenu
punarnava ark|500ml|450|purndhenu
kachnar ark|500ml|450|purndhenu
haldi neem ark|500ml|300|purndhenu
medohar ark|500ml|400|purndhenu
calcium ark|500ml|500|purndhenu
harshrongar ark|500ml|315|purndhenu
kalmegh ark|500ml|342|purndhenu
dugdh ark|500ml|450|purndhenu
brahmi ark|500ml|400|purndhenu
trifala ark|500ml|370|purndhenu
gokhuru ark|500ml|425|purndhenu
arjun ark|500ml|450|purndhenu
rakt doshantak ark|500ml|369|purndhenu
pashanbhed ark|500ml|450|purndhenu
makoy beej ark|500ml|400|purndhenu
punarnavadi ark|500ml|425|purndhenu
kantkari ark|500ml|500|purndhenu
tulsi gomutra ark|500ml|540|purndhenu
arandi ark|500ml|425|purndhenu
gudmar ark|500ml|540|purndhenu
adusa ark|500ml|500|purndhenu
chhachh ark|500ml|425|purndhenu
sarpgandha ark|500ml|180|purndhenu
nari sanjivani ark|500ml|468|purndhenu
insulin gomutra ark|500ml|450|purndhenu
dashmul ark|500ml|450|purndhenu
saptrangi ark|500ml|425|purndhenu
sahjan moringa ark|500ml|425|purndhenu
ajwain ark|500ml|450|purndhenu
kachnar panchang ark|500ml|600|purndhenu
mulethi ark|500ml|370|purndhenu
chitrak ark|500ml|425|purndhenu
giloy ark|500ml|342|purndhenu
moringa nandi ark|500ml|700|purndhenu
pudina ark|500ml|300|purndhenu
hriday rog nashak ark|500ml|500|purndhenu
manjishtha ark|500ml|425|purndhenu
bilva patra ark|500ml|425|purndhenu
gomay ark|500ml|450|purndhenu
immune ark|500ml|370|purndhenu
aloevera ark|500ml|425|purndhenu
arusinka nashak ark|500ml|630|purndhenu
renol ark|500ml|460|purndhenu
karela ark|500ml|350|purndhenu
chhoti pippali ark|500ml|370|purndhenu
chopchini ark|500ml|1000|purndhenu
dudhi grass ark|500ml|450|purndhenu
daruhaldi ark|500ml|370|purndhenu
sanjivani ras|250ml|500|onkar
sanjivani ras|500ml|125|gau gavya
parijaat gau ark|200ml|180|gir gau jatan
kachnar ark|450ml|200|prakriti
medohar ark|450ml|150|prakriti
gau cholestrol||800|gokanti
gau ark|500ml|75|gavyaratan
gau mutra ark plain|500ml|90|shree reva
gaumutra ark immune booster||250|shree reva
punarnava gokhuru||250|shree reva
gomutra aasav|500ml|500|gokanti
shodhhar ark|500ml|500|gokanti
anti cancer ark|500ml|300|gokanti
medohar ark|100ml|145|dewlapar
gomutra ark|200ml|85|dewlapar
harshringar ark|500ml||gokanti
punarnavadi ark|500ml|300|gokanti
arjunadi ark|500ml|300|gokanti
gudmaradi ark|500ml|300|gokanti
sargandhadi ark|500ml|300|gokanti
thyroid ark|500ml|300|gokanti
medohar ark|500ml|500|gokanti
health gold ark|500ml|300|gokanti
saptrangi ark|500ml|300|gokanti
tulsi ark|500ml|120|gokanti
kidney protector|20ml|300|gokanti
stone remover|20ml|300|gokanti
kachnaradi ark|20ml|300|gokanti
anti cancer ark|||gokanti
shothhar|500ml|300|gokanti
gomutra ark|500ml|210|gokanti
#घनवटी (Ghanvati)|💊
gomutra ghanvati|60 tab||purndhenu
pashanbhed ghanvati|||purndhenu
kachnar guggul|||purndhenu
punarnavadi|||purndhenu
tharparkar|||
gir|||
kantkari|||purndhenu
arandi|||purndhenu
haldi neem|||purndhenu
gokhuru|||purndhenu
saptrangi|||purndhenu
madhumeh|||purndhenu
amritbhog|||purndhenu
sarpgandha|||purndhenu
punarnava|||purndhenu
ajwain|||purndhenu
trifala|||purndhenu
mulethi|||purndhenu
arjun chhal|||purndhenu
varun chhal|||purndhenu
papaya leaves dried|||purndhenu
giloy|||purndhenu
nandi|||purndhenu
jawar nashak|||purndhenu
kayakalp|||purndhenu
kaans|||purndhenu
vaatnashak|||purndhenu
tulsi|||purndhenu
shatawari|||purndhenu
raktshodhak|||purndhenu
kalmegh|||purndhenu
manjishtha|||purndhenu
dashmul|||purndhenu
adusa|||purndhenu
anti cancer vati|120 tab|200|gokanti
punarnavadi vati|90 tab|400|prakriti
gudmar|120 tab|200|gokanti
nirgundi harshringar|120 tab|200|gokanti
amrit vati|120 tab|200|gokanti
punarnavadi|120 tab|200|gokanti
harshringar|120 tab|200|gokanti
arjunadi|120 tab|200|gokanti
sarpgandhadi|120 tab|200|gokanti
trifala|120 tab|300|gokanti
thyroid|120 tab|200|gokanti
medohar|120 tab|300|gokanti
shwetnashak|120 tab|200|gokanti
heart gold|120 tab|120|gokanti
saptrangi|120 tab|60|gokanti
tulsi|120 tab||gokanti
haldi ghanvati|120 tab||gokanti
#आसव / रस (Asav / Ras)|🧪
takrarisht|500ml|530|purndhenu
gomutra asav|500ml|432|purndhenu
balpal ras panchgavya|500ml|500|purndhenu
arjun arisht|500ml|500|purndhenu
jeerak gomutra asav|500ml|500|purndhenu
gulab ark|100ml|80|prakriti
takrarishtam|500ml|400|gokanti
swarn amrit|500ml|900|gokanti
femina for irregular periods|400ml|300|gotirath
o flamine for inflamation|400ml|300|gotirath
aloevera ras|||akayu
trifala ras|||akayu
amla ras|||akayu
neem karela ras|||akayu
sugar cut ras|||akayu
giloy tulsi ras|||akayu
balpal ras panchgavya|200ml|150|dewlapar
takrarishtam|100ml|85|dewlapar
vaat syrup|||dewlapar
takrarishtam|500ml|400|gokanti
swarn kiri ark for skin||300|gokanti
balpal ras panchgavya||150|gokanti
gomutra asav||500|gokanti
takrarisht|450ml|250|prakriti
#आयुर्वेदिक औषधियाँ (Ayurvedic Medicines)|💊
livon for liver|400ml|346|gotirath
renol for uti|400ml|327|gotirath
immunity booster|400ml|150|gotirath
arthorid for arthritis|400ml|318|gotirath
gastro liquid|400ml|318|gotirath
diabevi for diabetes|400ml|308|gotirath
breathon for cold and sneezing|400ml|346|gotirath
cardipro for heart|400ml|308|gotirath
oberi for weight loss|400ml|355|gotirath
carcinex for cancer|400ml|626|gotirath
piles cure|400ml|546|gotirath
dermol for skin|400ml|336|gotirath
feverex for fever|400ml|150|gotirath
antiseptic decowell|400ml|55|gotirath
#दर्द निवारक तेल (Pain Oil)|🛢️
peedahari tailam|100ml|185|prakriti
dard niwarak tel|100ml|120|gokripa
pidantak tel||200|shree reva
mahavatnashak tel|100ml/300ml|400|gokanti
meda malham|||gokanti
malham kamdhenu|||gokanti
malish tel|||gokanti
lakshadi tel|||gokanti
narayan tel|||gokanti
arshohar malham|||gokanti
shatdhout malham|20gm|130|samadhan
herbal balm|||ayubal
pain kill gel|||ayubal
vitamin comfort roll on|||ayubal
period cramp comfort|||ayubal
tailam|||gotirath
baladi tel|50ml|220|dewlapar
gomayadi tel|10ml|45|dewlapar
chandanadi yamak|25ml|135|dewlapar
#आयुर्वेदिक चूर्ण (Ayurvedic Churna)|🌿
trifala|100gm|100|samadhan
balwardhak|100gm|180|samadhan
haran churna||100|gavyaratan
swadisht churn|100gm|374|gokripa
wheat grass powder||120|gotirath
haritaki||900|gotirath
vaathar rasayan||150|gokanti
gavya trifala||115|gokanti
hingashtak churn|60gm|115|sbld
sitopaladi|10gm|25|sbld
sarvjwarhar|||sbld
trifala|||sbld
brahmi kalp cap||1400|sbld
dhatri rasayan cap||1400|sbld
vajradeh churn||1875|sbld
pramehar sarva aushadhi||915|sbld
madhurika||135|sbld
sarwa aushadhi||915|sbld
amalki rasayan||459|prndhenu
vaanari gutika|150gm|1800|prndhenu
kshar bhasm|100gm|300|prndhenu
sapt dhatu rasayan||705/5865|prndhenu
gavya trifala shodhit 1:2:3|100gm|100|gokanti
medoha kshar churn|100gm|500/400|gokanti
charm raksha churn|100gm|150|gir gau jatan
#हर्बल फूड सप्लीमेंट (Herbal Food Supplement)|🌿
babul beej powder|200gm|150|gir gau jatan
loki powder|200gm|250|gir gau jatan
moringa leaves powder|200gm|180|gir gau jatan
moringa fruit powder|200gm|250|gir gau jatan
giloy|200gm|250|gir gau jatan
meethi tulsi, stevia|200gm|150|gir gau jatan
jamun beej powder|200gm|150|gir gau jatan
ashwagandha|200gm|250|gir gau jatan
neem patti|200gm|120|gir gau jatan
chukandar|200gm|350|gir gau jatan
chiya|200gm|280|gir gau jatan
sabja / tukamariya|200gm|180|gir gau jatan
wheat jawar|200gm|250|gir gau jatan
shatawari|200gm|250|gir gau jatan
amla|200gm|150|gir gau jatan
trifala|200gm|100|gir gau jatan
panir flower|200gm|250|gir gau jatan
#च्यवनप्राश (Chyawanprash)|🍯
chywanprash|450gm|680|prakriti
chywanprash|500gm|515|gir gau jatan
honey free chyawanprash|500gm|515|gir gau jatan
amrit prash|250gm|900|akayu
chyawanprash avleh|500gm|500|akayu
sugar free prash|500gm|800|akayu
chyawanprash|1kg|935|sbld
chyawanprash|500gm|515|sbld
honey free chyawanprash|500gm|515|gir gau jatan
#घृत / घी (Ghrit)|🫙
bilona ghrit|500ml|1400|prakriti
bhadwe ka ghee|500ml|1500|prakriti
deshi ghee cream|1ltr|1000|gavyaratan
bilona|1ltr|2100|gavyaratan
jain maryadit|1ltr|1800|gavyaratan
bilona|1ltr|2000|gokripa
gir gau ghrit|1ltr|3280|gir gau jatan
himalayan badri gau ghrit|350gm|1200|hymgrace
bilona|1ltr|1800|gokanti
ghrit|1ltr|2000|govigyan
shudh ghrit|1ltr|1300|annapurna organic
desi ghrit|1ltr|1700|sbld
#औषधीय घृत (Aushadhiya Ghrit)|🫙
kasisadi ghrit|100ml|1400|gir gau jatan
panchtikt|100ml|1130|gir gau jatan
mahatikt|100ml|1310|gir gau jatan
amrit|100ml|1030|gir gau jatan
sada jivanti|250ml|1970|gir gau jatan
panchgavya|100ml|940|gir gau jatan
fal|100ml|1125|gir gau jatan
malkangni / jyotishmati|100ml|1125|gir gau jatan
trifala|100ml|1220|gir gau jatan
ashtmangal|100ml|1400|gir gau jatan
kumar kalyan|100ml|1400|gir gau jatan
somghrit|100ml|1400|gir gau jatan
brahmi|100ml|4780|gir gau jatan
suwarn siddh|1ltr|6560|gir gau jatan
brahm rasayan|500ml|1050|gir gau jatan
arjun|100ml|1130|gir gau jatan
vach|100ml|1690|gir gau jatan
ashwagandha|100ml|1500|gir gau jatan
jatyadh|100ml|1130|gir gau jatan
nim panchang|100ml|1130|gir gau jatan
mushikadya|100ml||gir gau jatan
kumkum|100ml|1690|gir gau jatan
ballabh|100ml|1690|gir gau jatan
changeri|100ml|1690|gir gau jatan
shatawari|100ml|2250|gir gau jatan
vasa|100ml|1120|gir gau jatan
narayan|100ml|1690|gir gau jatan
punarnavadyam|100ml|1690|gir gau jatan
ashthishrinkhala|100ml|1130|gir gau jatan
yashtimadhu|100ml|1130|gir gau jatan
kumkumadi|100ml|9370|gir gau jatan
dadhimadya|100ml|1130|gir gau jatan
shwethar|100ml|1130|gir gau jatan
pippaladya|100ml|1130|gir gau jatan
shirish panchang|100ml|1130|gir gau jatan
hingvadya|100ml|1130|gir gau jatan
ardrak|100ml|1130|gir gau jatan
mahakushmand|100ml|1130|gir gau jatan
kidney sahayak|100ml|1130|gir gau jatan
drakshadi|100ml|1030|gir gau jatan
durvadya|100ml|1130|gir gau jatan
kantkari|100ml|940|gir gau jatan
chitrakadi|100ml|1030|gir gau jatan
sukumar|100ml|840|gir gau jatan
ajmod|100ml|840|gir gau jatan
suwarn prashan|25gm|940|gir gau jatan
guggul tiktadi|100ml|1310|gir gau jatan
kshir kalyankarak|100ml|1220|gir gau jatan
yauvan|100ml|660|gir gau jatan
ashtang|100ml|1130|gir gau jatan
samvardhan|100ml|1220|gir gau jatan
ashok|100ml|1130|gir gau jatan
apatyakar|100ml|1220|gir gau jatan
panchgavya nasya|10ml/30ml|120/330|gir gau jatan
trifala|10ml/30ml|140|gir gau jatan
brahmi|10ml/30ml|140|gir gau jatan
kumkumadi|5ml|750|gir gau jatan
gir|10ml|85|gir gau jatan
yashtimadhu|10ml|140|gir gau jatan
ardrak nasya|10ml|140|gir gau jatan
gir gau ghrit|500ml/1ltr|1690/3280|gir gau jatan
carrot and beetroot fed gir gau ghrit|500ml|2340|gir gau jatan
shatawari fed gir gau ghrit|500ml/100ml|2340/560|gir gau jatan
jiwanti panchang|500ml/100ml|2340/560|gir gau jatan
charm raksha ghrit|100ml|1200|gir gau jatan
arjun ghrit|100ml|700|prakriti
mahatrifaladi|100ml|700|prakriti
panchgavya|30ml|230|prakriti
shatawari|100gm|750|prakriti
shatdhaut|20gm|300|prakriti
brahmi|100gm|750|prakriti
gau amrit||100|gokripa
trifala ghrit||1000|shree reva
shatdhaut ghrit|30gm|3000|5sfarms
shatdhaut ghrit|||gokanti
panchgavya|||gokanti
ghatbindu|||gokanti
heart gold|||gokanti
ashwagandha|||gokanti
somraji|||gokanti
arjun|||gokanti
panchtikt|||gokanti
sarwamangal|||gokanti
somraj|||gokanti
pipli|||gokanti
ashwagandha|||gokanti
brahmi ghrit rasayan|||gokanti
dashmuladi|||gokanti
arjun|||gokanti
nirgundi|||gokanti
shunthi dhanya|||gokanti
fal kalyan|||gokanti
cancer ghrit|||gokanti
maha trifaladi|||gokanti
moringa|||gokanti
narayani|||gokanti
panchtikt||325|dewlapar
hingvadya|100ml|500|dewlapar
panchgavya|25ml|145|dewlapar
jatyadi|25ml|145|dewlapar
shatdhaut||150|dewlapar
fal ghrit|100ml|280|dewlapar
panchtikt|||dewlapar
ashtmangal|25ml|145|dewlapar
arjun|100ml|480|dewlapar
tharparkar desi ghrit|300gm|1000|prndhenu
panchgavya ghrit|300gm|1800|prndhenu
brahmi|300gm|2430|prndhenu
vach|300gm|2250|prndhenu
panchtikt|300gm|1980|prndhenu
arjun|300gm|2340|prndhenu
ashwagandha||1200|shree reva
arjun||1200|shree reva
shatawari||1200|shree reva
vajrangi||1200|shree reva
trifala||1000|shree reva
#शहद (Honey)|🍯
natural honey|500gm|350|gir gau jatan
himalayan raw honey|500gm|650|hymgrace
junglee himalayan raw honey|1kg|575|gotirath
babul honey|||annapurna organic
multi flora honey|||annapurna organic
jamun honey|||annapurna organic
leechi honey|||annapurna organic
kesar honey|||annapurna organic
forest honey|500gm|559|5sfarm
immunity booster honey|1kg|1400|5sfarms
#स्वस्थ आहार (Healthy Food)|🍯
palm jaggery|500gm|500|7dinam
coconut sugar|500gm|300|7dinam
dry ginger palm jaggery|14gm|300|7dinam
palm jaggery|1kg|300|purndhenu
pahadi madua|1kg|100|purndhenu
alsee beej|250gm|360|purndhenu
ungeriya / tukamariya / sabja beej|10gm|200|gir gau jatan
himalayan kutki|10gm|30|hymgrace
#हर्बल चाय (Herbal Tea)|🍵
arjun tea|250gm|243|purndhenu
vedik kadha|||purndhenu
guggul trifala green tea|500ml|280|Akayu
green tea tab|60 tab|300|Akayu
vaat tea|100gm|345|5sfarms
herb tea|100gm|225|5sfarms
sea buckthorn|100gm|375|5sfarms
cough tea|100gm|345|5sfarms
damask rose hip tea|20gm|110|hymgrace
nettle tea|20gm|100|hymgrace
rhododendron burans tea|10gm|30|hymgrace
chamomile tea|40gm|100|hymgrace
lemon tea|||Ayubal
herbal tea|||annapurna organic
#मंकी ऑर्गेनिक हनी (Monkey Organic Honey)|🍯
nomadic wild flower honey|1kg|480|monkey organic honey
himachal wild flower honey|1kg|470|monkey organic honey
jammu wild flower honey|1kg|480|monkey organic honey
kashmir wild flower honey|1kg|480|monkey organic honey
kerala wild flower honey|1kg|500|monkey organic honey
pigeon pen honey|1kg|480|monkey organic honey
shami honey|1kg|480|monkey organic honey
egyptian clover honey|1kg|480|monkey organic honey
sunflower honey|1kg|480|monkey organic honey
attari border forest honey|1kg|480|monkey organic honey
creamy rasp flower honey|1kg|480|monkey organic honey
florence fennel honey|1kg|480|monkey organic honey
lemon infused honey|1kg|490|monkey organic honey
indian rosewood honey|1kg|480|monkey organic honey
eucalyptus honey|1kg|480|monkey organic honey
bishop's wood honey|1kg|480|monkey organic honey
lychee honey|1kg|480|monkey organic honey
cotton honey|1kg|480|monkey organic honey
indian beech honey|1kg|490|monkey organic honey
coriander honey|1kg|480|monkey organic honey
java plum honey|1kg|480|monkey organic honey
rama tulsi honey|1kg|480|monkey organic honey
acacia honey|1kg|480|monkey organic honey
kalesar forest honey|1kg|480|monkey organic honey
rubber honey|1kg|1000|monkey organic honey
nutmeg flower honey|1kg|480|monkey organic honey
modern rose honey|1kg|480|monkey organic honey
christ's thorn honey|1kg|500|monkey organic honey
arabica coffee honey|1kg|480|monkey organic honey
lavander honey|1kg|500|monkey organic honey
moringa honey|1kg|490|monkey organic honey
neem honey|1kg|510|monkey organic honey
kashmiri apple honey|1kg|520|monkey organic honey
wild african basil honey|1kg|490|monkey organic honey
kashmir forest / dew honey|1kg|510|monkey organic honey
wild margosa honey|1kg|510|monkey organic honey
wild dwarf bee honey|1kg|500|monkey organic honey
wild red buckwheat honey|1kg|490|monkey organic honey
wild spider valley honey|1kg|640|monkey organic honey
wild hibiscus honey|1kg|1028|monkey organic honey
wild orange honey|1kg|1124|monkey organic honey
alphonso mango honey|1kg|670|monkey organic honey
wild tamarind honey|1kg|670|monkey organic honey
wild kashmir white honey|1kg|590|monkey organic honey
starflower honey|250gm|600|monkey organic honey
krishna tulsi honey|1kg|600|monkey organic honey
kodaikanal forest honey|1kg|570|monkey organic honey
wild white pine honey|1kg|1124|monkey organic honey
balloon vine honey|1kg|1124|monkey organic honey
wild peacock chaste honey|1kg|1124|monkey organic honey
bee tree honey|1kg|520|monkey organic honey
wild uganda grass honey|1kg|1268|monkey organic honey
small bee honey|1kg|670|monkey organic honey
wild creeper honey|1kg|1268|monkey organic honey
tiru forest honey|1kg|610|monkey organic honey
tiru forest neem honey|1kg|610|monkey organic honey
wild indian blackberry honey|1kg|1364|monkey organic honey
wild cashew honey|600gm|1090|monkey organic honey
wild coconut flower honey|600gm|1480|monkey organic honey
wild avocado honey|1kg|1240|monkey organic honey
saffron honey|1kg|1380|monkey organic honey
kannarkarinji honey|1kg|1380|monkey organic honey
wild stingless bee honey|1kg|2170|monkey organic honey
stingless bee honey|1kg|2170|monkey organic honey
neelkurinji honey|1kg|2170|monkey organic honey
wild devil's tree honey|1kg|2170|monkey organic honey
#हेल्दी फूड (Healthy Food)|🍫
date bites|250gm|500|ekswaad
farm made gulkand||500|ekswaad
adadiya pak|500gm|700|gir gau jatan
jaggery peanut butter|250gm|200|gir gau jatan
honey peanut butter|250gm|200|gir gau jatan
shahi gulkand|250gm|200|gir gau jatan
#शरबत (Sharbat)|🥤
yanval jawar drink of gods|700ml|525|5s farms
kesar mishree amla|700ml|650|5s farms
foxtail / priyangu|700ml|525|5s farms
aanav, barnyard|700ml|525|5s farms
lavander|700ml|700|5s farms
kokum|700ml|700|5s farms
buransh|700ml|525|5s farms
aprajita|700ml|525|5s farms
phalsa|700ml|700|5s farms
kesar ilayachi|700ml|850|5s farms
mogra|700ml|850|5s farms
lemonia|700ml|525|5s farms
sea buckthorn juice|700ml|975|5s farms
kala khatta badam|700ml|525|5s farms
jamun|700ml|700|5s farms
chaitri|700ml|525|5s farms
#लड्डू / सत्तू / कुकीज़ (Laddu / Sattu / Cookies)|🍪
munakka badam laddu|550gm|970|5s farms
swarn bhasm laddu|330gm|2650|5s farms
moringa sattu|500gm|400|5s farms
dry fruits laddu|450gm|810|5s farms
energy bar|700gm|1100|5s farms
dry fruits and seed cookies|330gm|620|5s farms
god badam laddu|700gm|1200|5s farms
khas khas laddu|550gm|970|5s farms
besan badam laddu|700gm|980|5s farms
thandai health drink|250gm|550|5s farms
amla murabba mishree|1kg|800|5s farms
moringa blue berry cookies|330gm|600|5s farms
navjivan milk mix (7 nuts, 7 seeds)|400gm|880|5s farms
wheat grass sattu|500gm|375|5s farms
ganna imli chatni|400gm|560|5s farms
#मुखवास (Mouth Freshner)|🌿
mukhwash|||
kaf prakriti|||gir gau jatan
vaat prakriti|||gir gau jatan
pitta prakriti|||gir gau jatan
sada mukhwash|||gir gau jatan
ajwain|||gir gau jatan
meethi souf|||gir gau jatan
#हर्बल कॉस्मेटिक्स / हर्ब्स (Hymgrace Herbal Cosmetics)|🌿
damask rose water|50ml|110|hymgrace
damask rose petals|20gm|45|hymgrace
black stone flowers|10gm|30|hymgrace
damask rose dry leaves|50gm|100|hymgrace
rosemary powder|50gm|60|hymgrace
curry patta leaves / powder|20gm/50gm|30/55|hymgrace
hina leaves|15gm|20|hymgrace
himalayan badi ilayachi|250gm|450|hymgrace
himalayan gandrayani|10gm|30|hymgrace
pahadi khada masala|20gm|30|hymgrace
himalayan kutki|10gm|30|hymgrace
himalayan yak milk paneer (chhurpi)|10gm|30|hymgrace
curry patta hydrosol|50ml|80|hymgrace
rosemary hydrosol|50ml|100|hymgrace
nettle hydrosol|500ml|750|hymgrace
rhododendron hydrosol|50ml|80|hymgrace
basil tulsi hydrosol|50ml|80|hymgrace
neem hydrosol|50ml|80|hymgrace
lemongrass hydrosol|50ml|80|hymgrace
`;

export const catalog = (() => {
  const out = [];
  let cur = null;
  for (const raw of RAW.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line[0] === '#') {
      const [category, emoji] = line.slice(1).split('|');
      cur = { category, emoji: emoji || '🛍️', items: [] };
      out.push(cur);
    } else if (cur) {
      const [name, qty, mrp, party] = line.split('|');
      cur.items.push({
        name: (name || '').trim(),
        qty: (qty || '').trim(),
        mrp: (mrp || '').trim(),
        party: (party || '').trim(),
      });
    }
  }
  return out;
})();

export const catalogCount = catalog.reduce((n, c) => n + c.items.length, 0);
