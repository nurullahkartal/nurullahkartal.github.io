export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'Muhasebe' | 'Lojistik' | 'Yazılım & ERP' | 'Gelişim & Öğrenci';
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "on-muhasebe-ve-e-belge",
    title: "Ön Muhasebe ve e-Belge Yönetiminin Altın Kuralları (Mikro & Logo)",
    description: "Mikro ve Logo yazılımları ile e-Fatura, e-Arşiv ve e-İrsaliye süreçlerinde verimlilik artırma, hata payını sıfırlama ve yasal sürelerin takibi üzerine rehber.",
    category: "Muhasebe",
    tags: ["Ön Muhasebe", "Mikro", "Logo", "e-Fatura", "e-Arşiv"],
    date: "25 Mayıs 2026",
    readTime: "6 dk okuma",
    author: "Nurullah Kartal",
    content: `Ön muhasebe, bir işletmenin finansal çarklarının sağlıklı dönebilmesi için en kritik departmandır. Günümüzde dijital dönüşümün (e-Dönüşüm) hız kazanmasıyla birlikte, ön muhasebe süreçleri artık fiziksel klasörlerden ERP sistemlerine ve entegratör portallarına taşınmıştır. Bu yazıda, özellikle **Mikro** ve **Logo** ERP yazılımlarını kullanan işletmelerde, e-Fatura, e-Arşiv ve e-İrsaliye yönetiminde hata payını sıfırlayacak altın kuralları ve tecrübelerimi derledim.

### 1. e-Belge Düzenlemede Temel Hatalar ve Yasal Süreler
e-Fatura ve e-Arşiv süreçlerinde en sık karşılaşılan sorun, yasal faturalandırma sürelerinin kaçırılması veya yanlış KDV/İstisna kodlarının girilmesidir.
* **7 Gün Kuralı:** Vergi Usul Kanunu'na göre, fatura malın teslimi veya hizmetin yapıldığı tarihten itibaren en geç **7 gün** içinde düzenlenmelidir. Bu sürenin aşılması durumunda usulsüzlük cezası ile karşılaşılabilir.
* **Mikro ve Logo'da Otomatik Kontrol:** ERP programınızda fatura tarihi ile irsaliye tarihi arasındaki gün farkını kontrol eden kurallar tanımlamak, bu yasal riskleri sıfıra indirir.

### 2. Döviz Alım Belgesi (DAB) ve İhracat Faturaları
İhracat faturalarında ve dövizli satış işlemlerinde kur farkı hesaplamaları ve DAB süreçleri son derece hassastır.
* Fatura tarihindeki **TCMB Döviz Alış Kuru** esas alınmalıdır.
* Gümrük beyannamesi (GB) ile fatura üzerindeki bilgilerin (kap adedi, ağırlık, gümrük teslim şekli) birebir eşleşmesi şarttır. Mikro veya Logo'da ihracat modülü kullanılırken fatura tipi mutlaka "İhracat" olarak seçilmeli ve e-Fatura senaryosu "İhracat" olarak gönderilmelidir.

### 3. İptal ve İade Faturalarının Yönetimi
e-Fatura senaryolarına göre iptal/red ve iade süreçleri farklılık gösterir:
* **Ticari Fatura:** Alıcı tarafından portal üzerinden **7 gün** içinde sistem üzerinden "Reddet" seçeneğiyle reddedilebilir.
* **Temel Fatura:** Alıcı faturayı sistemden reddedemez. İptal işlemi için GİB İptal Portalı kullanılmalı veya alıcı tarafından "İade Faturası" kesilmelidir.
* **e-Arşiv Fatura:** Düzenlendiği gün veya ertesi gün sistem üzerinden kolayca iptal edilebilir. Süre aşıldığında gider pusulası ile iptal süreci yürütülür.

### 📝 Profesyonel İpucu (Arşivleme Altın Kuralı):
Faturaları ERP sistemine işlerken, entegratör portalındaki (örneğin Nes Portal) **GİB UUID (Benzersiz ID)** kodunu ERP faturasındaki özel alanlara mutlaka kopyalayın. Bu sayede yıllar sonra bile bir faturayı aradığınızda, ERP kaydı ile portal kaydını tek saniyede eşleştirebilirsiniz.`
  },
  {
    id: "lojistik-operasyonlarda-sifir-hata",
    title: "Lojistik Operasyonlarda Sıfır Hata: Veri Girişi ve İrsaliye Yönetimi",
    description: "Depo giriş çıkış süreçlerinde veri doğruluğunun önemi, araç veri girişlerinin takibi ve irsaliye mutabakatlarında hata payını sıfırlayan lojistik yöntemler.",
    category: "Lojistik",
    tags: ["Lojistik", "Veri Girişi", "İrsaliye", "Depo Yönetimi", "Sevkiyat"],
    date: "22 Mayıs 2026",
    readTime: "5 dk okuma",
    author: "Nurullah Kartal",
    content: `Lojistik, doğru malın, doğru zamanda, doğru miktarda ve hatasız bir şekilde hedef noktaya ulaştırılması sanatıdır. Ancak sahada işler her zaman teorideki gibi yürümez. Sevkiyat esnasında yapılan ufacık bir veri girişi hatası, yüz binlerce liralık hatalı teslimatlara, cezai işlemlere veya müşteri kayıplarına yol açabilir. 

Bu yazıda, özellikle endüstriyel tesislerde ve yumurta/gıda gibi hızlı tüketim lojistiğinde veri girişi ve irsaliye yönetiminde sıfır hata ile çalışmanın yöntemlerini ele alacağız.

### 1. Araç Giriş-Çıkış ve Plaka Veri Kaydı
Depo veya üretim tesisine giren her aracın takibi lojistik güvenliğin ve planlamanın ilk adımıdır.
* Giriş saati, şoför kimlik bilgileri, araç plakası ve dorse plakası sisteme **birebir ve hatasız** kaydedilmelidir.
* Özellikle plaka kayıtlarında yapılan harf/rakam hataları, kantarda veya e-İrsaliye eşleştirmesinde büyük aksaklıklara yol açar. Bilgi girişleri çift kontrol mekanizmasıyla doğrulanmalıdır.

### 2. e-İrsaliye ve Sevkiyat Eşleşmesi
Kağıt irsaliyeden e-İrsaliye sistemine geçiş, saha operasyonlarını hızlandırsa da dikkat edilmesi gereken yeni kurallar getirdi:
* **Fiili Sevk Tarihi ve Saati:** e-İrsaliye üzerinde mutlaka aracın hareket ettiği gerçek sevk zamanı yazmalıdır. Trafik denetimlerinde en çok ceza yazılan konulardan biri fiili sevk saati eksikliğidir.
* **Mal Kabul Reddi:** Alıcı firma, malların bir kısmında hasar veya eksiklik tespit ettiğinde kısmi kabul yapabilir. Bu durumda ERP sisteminizde anında "Kısmi Kabul İrsaliyesi" oluşturulmalı ve stoklar güncellenmelidir.

### 3. Depo Stok Kartı ve Fiziksel Sayım Eşleştirmesi
Sistemdeki stok ile fiziksel stok arasındaki farkları en aza indirmek için:
* Günlük sevkiyat listeleri sevkiyat şefi ve veri giriş operatörü tarafından her günün sonunda mutabakatla kapatılmalıdır.
* Kantar tartım fişleri ile irsaliye tonajları mutlaka karşılaştırılmalıdır. Özellikle dökme ve paletli yüklerde tolerans payı aşımında derhal sisteme fire veya düzeltme kaydı girilmelidir.`
  },
  {
    id: "muhasebe-excel-formulleri",
    title: "Finansal Analiz ve Cari Mutabakatlar İçin Hayat Kurtaran Excel Formülleri",
    description: "Ön muhasebe ve finans süreçlerini 10 kat hızlandıracak cari mutabakat, kur farkı hesaplama ve raporlama amaçlı pratik MS Excel formülleri kılavuzu.",
    category: "Yazılım & ERP",
    tags: ["MS Excel", "Excel Formülleri", "Ön Muhasebe", "Cari Mutabakat", "Finansal Raporlama"],
    date: "18 Mayıs 2026",
    readTime: "7 dk okuma",
    author: "Nurullah Kartal",
    content: `Ön muhasebe ve lojistik profesyonellerinin sağ kolu şüphesiz **Microsoft Excel**'dir. ERP yazılımlarından (Mikro, Logo vb.) alınan ham verileri anlamlı raporlara dönüştürmek, binlerce satırlık cari hareketleri saniyeler içinde mutabakatlaştırmak tamamen doğru Excel formüllerini bilmekten geçer. 

Bu yazıda, iş hayatında her gün kullandığım, cari mutabakatları ve veri analizlerini inanılmaz derecede hızlandıran 4 temel formülü ve kullanım senaryolarını detaylandırıyorum.

---

### 1. XLOOKUP (Çaprazara) - Düşeyara'nın Modern ve Güçlü Hali
Eski \`VLOOKUP\` (Düşeyara) formülünün soldan sağa arama sınırı ve sütun indeksi yazma zorunluluğunu ortadan kaldıran muhteşem bir formüldür.

**Kullanım Senaryosu:** Elinizde bir cari liste var ve bu carilerin vergi numaralarına göre başka bir sayfadaki adres bilgilerini çekmek istiyorsunuz.
\`\`\`excel
=ÇAPRAZARA(arama_değeri; arama_dizisi; döndürülen_dizi; [bulunamıyorsa])

Örnek:
=ÇAPRAZARA(A2; 'Cari Bilgiler'!A:A; 'Cari Bilgiler':C:C; "Bulunamadı")
\`\`\`
*Bu formül, A2 hücresindeki cari kodunu 'Cari Bilgiler' sayfasının A sütununda arar ve karşılık gelen C sütunundaki vergi dairesini getirir. Bulamazsa hata vermek yerine "Bulunamadı" yazar.*

---

### 2. SUMIFS (Çokeğertoplan) - Koşullu Finansal Toplamlar
Belirli kriterlere uyan finansal hareketlerin toplamını almak için vazgeçilmezdir.

**Kullanım Senaryosu:** Belirli bir cari hesaba ait, sadece "Satış Faturası" tipindeki ve sadece belirli bir tarihten sonraki hareketlerin toplamını almak istiyorsunuz.
\`\`\`excel
=ÇOKEĞERTOPLAN(toplam_aralığı; ölçüt_aralığı1; ölçüt1; ölçüt_aralığı2; ölçüt2)

Örnek:
=ÇOKEĞERTOPLAN(D:D; A:A; "Müşteri A"; C:C; "Satış Faturası")
\`\`\`
*Bu formül, A sütununda "Müşteri A" yazan ve C sütununda "Satış Faturası" yazan satırların D sütunundaki tutarlarını toplar.*

---

### 3. Pivot Tables (Özet Tablolar) ile Cari Hesap Karşılaştırma
Formül yazmadan binlerce satırlık veri yığınını analiz etmenin en hızlı yolu Pivot Tablo oluşturmaktır.
* **Cari Mutabakat Adımı:** ERP'den aldığınız muavin defter dökümünü seçin. *Ekle -> Pivot Table* adımlarını takip edin.
* Satırlar kısmına **Cari Adı**'nı, Değerler kısmına ise **Borç** ve **Alacak** sütunlarını sürükleyin.
* Tek tıkla hangi carinin ne kadar borç/alacak bakiyesi verdiğini görebilir, mutabakat listenizi anında hazırlayabilirsiniz.

---

### 4. TEXTJOIN (Metinbirleştir) - Hızlı Adres ve Açıklama Birleştirme
Farklı hücrelerde duran il, ilçe, mahalle veya açıklama satırlarını aralarına virgül koyarak tek bir hücrede toplar.
\`\`\`excel
=METİNBİRLEŞTİR(sınırlayıcı; boşları_yoksay; metin1; metin2; ...)

Örnek:
=METİNBİRLEŞTİR(", "; DOĞRU; A2; B2; C2)
\`\`\`
*Bu formül A2, B2 ve C2 hücrelerindeki adres bileşenlerini aralarına virgül ve boşluk koyarak birleştirir.*`
  },
  {
    id: "nes-portal-ve-e-fatura",
    title: "Nes Portal e-Fatura Entegrasyonu ve Arşivleme Stratejileri",
    description: "e-Fatura ve e-Arşiv süreçlerinde Nes Portal arayüzünün aktif kullanımı, fatura sorgulama, stok entegrasyonu ve dijital arşiv düzeni oluşturma ipuçları.",
    category: "Yazılım & ERP",
    tags: ["Nes Portal", "e-Fatura", "e-Arşiv", "Dijital Arşiv", "Entegratör"],
    date: "14 Mayıs 2026",
    readTime: "5 dk okuma",
    author: "Nurullah Kartal",
    content: `Gelişen e-ticaret ve dijitalleşme ile birlikte entegratör portalları, ön muhasebenin kalbi haline gelmiştir. Bu entegratörlerin başında gelen **Nes Portal**, kullanıcı dostu arayüzü ve hızıyla operasyonları oldukça kolaylaştırır. Ancak portalın potansiyelini tam kullanmamak, manuel iş yükünü artırabilir. 

Bu yazıda, Nes Portal üzerinde e-Fatura/e-Arşiv yönetimini hızlandıracak pratik yöntemleri ve güvenli dijital arşivleme stratejilerini derledim.

### 1. Gelen e-Faturaların ERP Sistemine Sorunsuz Aktarımı
Nes Portal üzerinden gelen e-faturaları elle tek tek girmek yerine XML veya Excel şablonu halinde dışa aktararak ERP programınıza (Mikro/Logo) import edebilirsiniz:
* Nes Portal gelen kutusundan faturaları seçin ve **XML İndir** butonuna tıklayın.
* ERP yazılımınızdaki "e-Fatura Aktarım" menüsünü kullanarak bu XML dosyasını içeri alın.
* Bu yöntem cari kartların, stokların ve tutarların manuel girilirken hata yapılmasını tamamen önler ve günlük en az 2 saat zaman kazandırır.

### 2. Akıllı Fatura Arama ve Filtreleme Teknikleri
Nes Portal'da yüzlerce fatura arasından aradığınızı anında bulmak için arama kriterlerini verimli kullanın:
* Sadece cari adıyla değil, **Vergi Numarası (VKN)** veya fatura numarasının son 6 hanesi ile arama yapın.
* İptal veya reddedilmiş faturaları gözden kaçırmamak için filtre menüsünde durum bilgisini "Hatalı/Reddedildi" olarak filtreleyip haftalık kontroller yapın.

### 3. Güvenli Dijital Arşiv Düzeni
Yasal olarak e-faturaların **10 yıl** boyunca saklanması zorunludur. Entegratör firmalar bu saklama hizmetini verse de kendi yerel arşivinizi tutmanız çift katmanlı güvenlik sağlar:
* **Klasör Yapısı:** Her ay için ayrı bir klasör açın (Örn: \`2026-05_Faturalar\`).
* **Dosya İsimlendirme:** İndirdiğiniz PDF faturaları \`CariAdı_FaturaNo_Tutar.pdf\` şeklinde isimlendirin. Bu düzen, herhangi bir inceleme veya mutabakat durumunda evraklara anında ulaşmanızı sağlar.`
  },
  {
    id: "hem-okuyup-hem-calismak",
    title: "Hem Okuyup Hem Çalışmak: Açıköğretim ve İş Disiplinini Bir Arada Yürütmek",
    description: "Saha tecrübesi kazanırken aynı zamanda Muhasebe ve Lojistik alanlarında üniversite eğitimine devam etmenin getirdiği zorluklar ve zaman yönetimi stratejileri.",
    category: "Gelişim & Öğrenci",
    tags: ["Zaman Yönetimi", "Açıköğretim", "İş Disiplini", "Kişisel Gelişim", "Öğrenci Günlüğü"],
    date: "10 Mayıs 2026",
    readTime: "6 dk okuma",
    author: "Nurullah Kartal",
    content: `Günün 8-9 saatini aktif olarak ofiste veya sahada ön muhasebe evrakları, lojistik operasyonlar ve ERP programları başında geçirip, akşamları ve hafta sonlarını üniversite derslerine ayırmak dışarıdan bakıldığında oldukça yorucu görünebilir. 

Şu anda aktif olarak iş hayatına devam ederken, bir yandan da **Atatürk Üniversitesi (Muhasebe ve Vergi Uygulamaları)** ve **Anadolu Üniversitesi (Uluslararası Ticaret ve Lojistik)** açıköğretim programlarında eğitimimi sürdürüyorum. Bu süreçte edindiğim tecrübeleri ve zaman yönetimi sırlarımı paylaşmak istedim.

### 1. Teoriyi Sahada Pratiğe Dökmek (En Büyük Avantaj)
Açıköğretim kitaplarında yazan birçok kuru teorik bilgi, sahada çalışırken anlam kazanıyor:
* Ders kitabında okuduğunuz "Tek Düzen Hesap Planı", "Çift Taraflı Kayıt Sistemi" gibi kavramları gün içinde Mikro veya Logo'da bizzat uyguluyorsunuz.
* Lojistik dersinde okuduğunuz "Gümrük Teslim Şekilleri (FOB, CIF vb.)" veya "Sevk İrsaliyesi Kuralları" her gün kestiğiniz faturalarda veya takip ettiğiniz araçlarda karşınıza çıkıyor.
* Bu durum, sınavlara çalışırken ezber yapmak yerine bilgiyi mantığıyla kavramanıza yardımcı oluyor.

### 2. Zaman Yönetiminde 'Blok Çalışma' Taktikleri
Günde sadece 2-3 saat boş zamanınız varken ders çalışabilmek için zamanı bölmeniz gerekir:
* **Haftalık Planlama:** Sınav dönemlerinden (vize/final) en az 1 ay önce üniteleri haftalara bölün. Her akşam sadece 1 ünite bitirmeyi hedefleyin.
* **Mobil Uygulamalar:** Otobüste, iş molalarında veya yolda yürürken üniversitelerin mobil öğrenme uygulamalarından (Ata-AÖF ve Anadolum e-Kampüs) deneme sınavları çözün. Gün içindeki 10'ar dakikalık boşluklar birleştiğinde devasa bir çalışma süresine dönüşür.

### 3. Kişisel Gelişim ve Etkinlik Katılımları
Sadece iş ve derslerle sınırlı kalmayıp, vizyonunuzu genişletecek etkinliklere katılmaya özen gösterin. Örneğin **GDG Gaziantep** tarafından düzenlenen **DevFest 2025** etkinliğine katılarak yapay zeka ve yeni nesil yazılım araçları hakkında bilgi edinmek, teknolojiyle olan hobi bağımı güçlendirdi. Mesleğiniz ne olursa olsun dijital çağa entegre olmak sizi her zaman bir adım öne taşır.`
  }
];
