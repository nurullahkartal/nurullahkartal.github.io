// Gelişmiş Ön Muhasebe ve SEO Hap Bilgi Makale Havuzu (100 Kapsamlı Makale)
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
    "id": "on-muhasebe-ve-e-belge",
    "title": "Ön Muhasebe ve e-Belge Yönetiminin Altın Kuralları (Mikro & Logo)",
    "description": "Mikro ve Logo yazılımları ile e-Fatura, e-Arşiv ve e-İrsaliye süreçlerinde verimlilik artırma, hata payını sıfırlama ve yasal sürelerin takibi üzerine rehber.",
    "category": "Muhasebe",
    "tags": [
      "Ön Muhasebe",
      "Mikro",
      "Logo",
      "e-Fatura",
      "e-Arşiv"
    ],
    "date": "25 Mayıs 2026",
    "readTime": "6 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Ön muhasebe, bir işletmenin finansal çarklarının sağlıklı dönebilmesi için en kritik departmandır. Günümüzde dijital dönüşümün (e-Dönüşüm) hız kazanmasıyla birlikte, ön muhasebe süreçleri artık fiziksel klasörlerden ERP sistemlerine ve entegratör portallarına taşınmıştır. Bu yazıda, özellikle **Mikro** ve **Logo** ERP yazılımlarını kullanan işletmelerde, e-Fatura, e-Arşiv ve e-İrsaliye yönetiminde hata payını sıfırlayacak altın kuralları ve tecrübelerimi derledim.\n\n### 1. e-Belge Düzenlemede Temel Hatalar ve Yasal Süreler\ne-Fatura ve e-Arşiv süreçlerinde en sık karşılaşılan sorun, yasal faturalandırma sürelerinin kaçırılması veya yanlış KDV/İstisna kodlarının girilmesidir.\n* **7 Gün Kuralı:** Vergi Usul Kanunu'na göre, fatura malın teslimi veya hizmetin yapıldığı tarihten itibaren en geç **7 gün** içinde düzenlenmelidir. Bu sürenin aşılması durumunda usulsüzlük cezası ile karşılaşılabilir.\n* **Mikro ve Logo'da Otomatik Kontrol:** ERP programınızda fatura tarihi ile irsaliye tarihi arasındaki gün farkını kontrol eden kurallar tanımlamak, bu yasal riskleri sıfıra indirir.\n\n### 2. Döviz Alım Belgesi (DAB) ve İhracat Faturaları\nİhracat faturalarında ve dövizli satış işlemlerinde kur farkı hesaplamaları ve DAB süreçleri son derece hassastır.\n* Fatura tarihindeki **TCMB Döviz Alış Kuru** esas alınmalıdır.\n* Gümrük beyannamesi (GB) ile fatura üzerindeki bilgilerin (kap adedi, ağırlık, gümrük teslim şekli) birebir eşleşmesi şarttır. Mikro veya Logo'da ihracat modülü kullanılırken fatura tipi mutlaka \"İhracat\" olarak seçilmeli ve e-Fatura senaryosu \"İhracat\" olarak gönderilmelidir.\n\n### 3. İptal ve İade Faturalarının Yönetimi\ne-Fatura senaryolarına göre iptal/red ve iade süreçleri farklılık gösterir:\n* **Ticari Fatura:** Alıcı tarafından portal üzerinden **7 gün** içinde sistem üzerinden \"Reddet\" seçeneğiyle reddedilebilir.\n* **Temel Fatura:** Alıcı faturayı sistemden reddedemez. İptal işlemi için GİB İptal Portalı kullanılmalı veya alıcı tarafından \"İade Faturası\" kesilmelidir.\n* **e-Arşiv Fatura:** Düzenlendiği gün veya ertesi gün sistem üzerinden kolayca iptal edilebilir. Süre aşıldığında gider pusulası ile iptal süreci yürütülür.\n\n### 📝 Profesyonel İpucu (Arşivleme Altın Kuralı):\nFaturaları ERP sistemine işlerken, entegratör portalındaki (örneğin Nes Portal) **GİB UUID (Benzersiz ID)** kodunu ERP faturasındaki özel alanlara mutlaka kopyalayın. Bu sayede yıllar sonra bile bir faturayı aradığınızda, ERP kaydı ile portal kaydını tek saniyede eşleştirebilirsiniz."
  },
  {
    "id": "lojistik-operasyonlarda-sifir-hata",
    "title": "Lojistik Operasyonlarda Sıfır Hata: Veri Girişi ve İrsaliye Yönetimi",
    "description": "Depo giriş çıkış süreçlerinde veri doğruluğunun önemi, araç veri girişlerinin takibi ve irsaliye mutabakatlarında hata payını sıfırlayan lojistik yöntemler.",
    "category": "Lojistik",
    "tags": [
      "Lojistik",
      "Veri Girişi",
      "İrsaliye",
      "Depo Yönetimi",
      "Sevkiyat"
    ],
    "date": "22 Mayıs 2026",
    "readTime": "5 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Lojistik, doğru malın, doğru zamanda, doğru miktarda ve hatasız bir şekilde hedef noktaya ulaştırılması sanatıdır. Ancak sahada işler her zaman teorideki gibi yürümez. Sevkiyat esnasında yapılan ufacık bir veri girişi hatası, yüz binlerce liralık hatalı teslimatlara, cezai işlemlere veya müşteri kayıplarına yol açabilir. \n\nBu yazıda, özellikle endüstriyel tesislerde ve yumurta/gıda gibi hızlı tüketim lojistiğinde veri girişi ve irsaliye yönetiminde sıfır hata ile çalışmanın yöntemlerini ele alacağız.\n\n### 1. Araç Giriş-Çıkış ve Plaka Veri Kaydı\nDepo veya üretim tesisine giren her aracın takibi lojistik güvenliğin ve planlamanın ilk adımıdır.\n* Giriş saati, şoför kimlik bilgileri, araç plakası ve dorse plakası sisteme **birebir ve hatasız** kaydedilmelidir.\n* Özellikle plaka kayıtlarında yapılan harf/rakam hataları, kantarda veya e-İrsaliye eşleştirmesinde büyük aksaklıklara yol açar. Bilgi girişleri çift kontrol mekanizmasıyla doğrulanmalıdır.\n\n### 2. e-İrsaliye ve Sevkiyat Eşleşmesi\nKağıt irsaliyeden e-İrsaliye sistemine geçiş, saha operasyonlarını hızlandırsa da dikkat edilmesi gereken yeni kurallar getirdi:\n* **Fiili Sevk Tarihi ve Saati:** e-İrsaliye üzerinde mutlaka aracın hareket ettiği gerçek sevk zamanı yazmalıdır. Trafik denetimlerinde en çok ceza yazılan konulardan biri fiili sevk saati eksikliğidir.\n* **Mal Kabul Reddi:** Alıcı firma, malların bir kısmında hasar veya eksiklik tespit ettiğinde kısmi kabul yapabilir. Bu durumda ERP sisteminizde anında \"Kısmi Kabul İrsaliyesi\" oluşturulmalı ve stoklar güncellenmelidir.\n\n### 3. Depo Stok Kartı ve Fiziksel Sayım Eşleştirmesi\nSistemdeki stok ile fiziksel stok arasındaki farkları en aza indirmek için:\n* Günlük sevkiyat listeleri sevkiyat şefi ve veri giriş operatörü tarafından her günün sonunda mutabakatla kapatılmalıdır.\n* Kantar tartım fişleri ile irsaliye tonajları mutlaka karşılaştırılmalıdır. Özellikle dökme ve paletli yüklerde tolerans payı aşımında derhal sisteme fire veya düzeltme kaydı girilmelidir."
  },
  {
    "id": "muhasebe-excel-formulleri",
    "title": "Finansal Analiz ve Cari Mutabakatlar İçin Hayat Kurtaran Excel Formülleri",
    "description": "Ön muhasebe ve finans süreçlerini 10 kat hızlandıracak cari mutabakat, kur farkı hesaplama ve raporlama amaçlı pratik MS Excel formülleri kılavuzu.",
    "category": "Yazılım & ERP",
    "tags": [
      "MS Excel",
      "Excel Formülleri",
      "Ön Muhasebe",
      "Cari Mutabakat",
      "Finansal Raporlama"
    ],
    "date": "18 Mayıs 2026",
    "readTime": "7 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Ön muhasebe ve lojistik profesyonellerinin sağ kolu şüphesiz **Microsoft Excel**'dir. ERP yazılımlarından (Mikro, Logo vb.) alınan ham verileri anlamlı raporlara dönüştürmek, binlerce satırlık cari hareketleri saniyeler içinde mutabakatlaştırmak tamamen doğru Excel formüllerini bilmekten geçer. \n\nBu yazıda, iş hayatında her gün kullandığım, cari mutabakatları ve veri analizlerini inanılmaz derecede hızlandıran 4 temel formülü ve kullanım senaryolarını detaylandırıyorum.\n\n---\n\n### 1. XLOOKUP (Çaprazara) - Düşeyara'nın Modern ve Güçlü Hali\nEski `VLOOKUP` (Düşeyara) formülünün soldan sağa arama sınırı ve sütun indeksi yazma zorunluluğunu ortadan kaldıran muhteşem bir formüldür.\n\n**Kullanım Senaryosu:** Elinizde bir cari liste var ve bu carilerin vergi numaralarına göre başka bir sayfadaki adres bilgilerini çekmek istiyorsunuz.\n```excel\n=ÇAPRAZARA(arama_değeri; arama_dizisi; döndürülen_dizi; [bulunamıyorsa])\n\nÖrnek:\n=ÇAPRAZARA(A2; 'Cari Bilgiler'!A:A; 'Cari Bilgiler'!C:C; \"Bulunamadı\")\n```\n*Bu formül, A2 hücresindeki cari kodunu 'Cari Bilgiler' sayfasının A sütununda arar ve karşılık gelen C sütunundaki vergi dairesini getirir. Bulamazsa hata vermek yerine \"Bulunamadı\" yazar.*\n\n---\n\n### 2. SUMIFS (Çokeğertoplan) - Koşullu Finansal Toplamlar\nBelirli kriterlere uyan finansal hareketlerin toplamını almak için vazgeçilmezdir.\n\n**Kullanım Senaryosu:** Belirli bir cari hesaba ait, sadece \"Satış Faturası\" tipindeki ve sadece belirli bir tarihten sonraki hareketlerin toplamını almak istiyorsunuz.\n```excel\n=ÇOKEĞERTOPLAN(toplam_aralığı; ölçüt_aralığı1; ölçüt1; ölçüt_aralığı2; ölçüt2)\n\nÖrnek:\n=ÇOKEĞERTOPLAN(D:D; A:A; \"Müşteri A\"; C:C; \"Satış Faturası\")\n```\n*Bu formül, A sütununda \"Müşteri A\" yazan ve C sütununda \"Satış Faturası\" yazan satırların D sütunundaki tutarlarını toplar.*\n\n---\n\n### 3. Pivot Tables (Özet Tablolar) ile Cari Hesap Karşılaştırma\nFormül yazmadan binlerce satırlık veri yığınını analiz etmenin en hızlı yolu Pivot Tablo oluşturmaktır.\n* **Cari Mutabakat Adımı:** ERP'den aldığınız muavin defter dökümünü seçin. *Ekle -> Pivot Table* adımlarını takip edin.\n* Satırlar kısmına **Cari Adı**'nı, Değerler kısmına ise **Borç** ve **Alacak** sütunlarını sürükleyin.\n* Tek tıkla hangi carinin ne kadar borç/alacak bakiyesi verdiğini görebilir, mutabakat listenizi anında hazırlayabilirsiniz.\n\n---\n\n### 4. TEXTJOIN (Metinbirleştir) - Hızlı Adres ve Açıklama Birleştirme\nFarklı hücrelerde duran il, ilçe, mahalle veya açıklama satırlarını aralarına virgül koyarak tek bir hücrede toplar.\n```excel\n=METİNBİRLEŞTİR(sınırlayıcı; boşları_yoksay; metin1; metin2; ...)\n\nÖrnek:\n=METİNBİRLEŞTİR(\", \"; DOĞRU; A2; B2; C2)\n```\n*Bu formül A2, B2 ve C2 hücrelerindeki adres bileşenlerini aralarına virgül ve boşluk koyarak birleştirir.*"
  },
  {
    "id": "nes-portal-ve-e-fatura",
    "title": "Nes Portal e-Fatura Entegrasyonu ve Arşivleme Stratejileri",
    "description": "e-Fatura ve e-Arşiv süreçlerinde Nes Portal arayüzünün aktif kullanımı, fatura sorgulama, stok entegrasyonu ve dijital arşiv düzeni oluşturma ipuçları.",
    "category": "Yazılım & ERP",
    "tags": [
      "Nes Portal",
      "e-Fatura",
      "e-Arşiv",
      "Dijital Arşiv",
      "Entegratör"
    ],
    "date": "14 Mayıs 2026",
    "readTime": "5 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Gelişen e-ticaret ve dijitalleşme ile birlikte entegratör portalları, ön muhasebenin kalbi haline gelmiştir. Bu entegratörlerin başında gelen **Nes Portal**, kullanıcı dostu arayüzü ve hızıyla operasyonları oldukça kolaylaştırır. Ancak portalın potansiyelini tam kullanmamak, manuel iş yükünü artırabilir. \n\nBu yazıda, Nes Portal üzerinde e-Fatura/e-Arşiv yönetimini hızlandıracak pratik yöntemleri ve güvenli dijital arşivleme stratejilerini derledim.\n\n### 1. Gelen e-Faturaların ERP Sistemine Sorunsuz Aktarımı\nNes Portal üzerinden gelen e-faturaları elle tek tek girmek yerine XML veya Excel şablonu halinde dışa aktararak ERP programınıza (Mikro/Logo) import edebilirsiniz:\n* Nes Portal gelen kutusundan faturaları seçin ve **XML İndir** butonuna tıklayın.\n* ERP yazılımınızdaki \"e-Fatura Aktarım\" menüsünü kullanarak bu XML dosyasını içeri alın.\n* Bu yöntem cari kartların, stokların ve tutarların manuel girilirken hata yapılmasını tamamen önler ve günlük en az 2 saat zaman kazandırır.\n\n### 2. Akıllı Fatura Arama ve Filtreleme Teknikleri\nNes Portal'da yüzlerce fatura arasından aradığınızı anında bulmak için arama kriterlerini verimli kullanın:\n* Sadece cari adıyla değil, **Vergi Numarası (VKN)** veya fatura numarasının son 6 hanesi ile arama yapın.\n* İptal veya reddedilmiş faturaları gözden kaçırmamak için filtre menüsünde durum bilgisini \"Hatalı/Reddedildi\" olarak filtreleyip haftalık kontroller yapın.\n\n### 3. Güvenli Dijital Arşiv Düzeni\nYasal olarak e-faturaların **10 yıl** boyunca saklanması zorunludur. Entegratör firmalar bu saklama hizmetini verse de kendi yerel arşivinizi tutmanız çift katmanlı güvenlik sağlar:\n* **Klasör Yapısı:** Her ay için ayrı bir klasör açın (Örn: `2026-05_Faturalar`).\n* **Dosya İsimlendirme:** İndirdiğiniz PDF faturaları `CariAdı_FaturaNo_Tutar.pdf` şeklinde isimlendirin. Bu düzen, herhangi bir inceleme veya mutabakat durumunda evraklara anında ulaşmanızı sağlar."
  },
  {
    "id": "hem-okuyup-hem-calismak",
    "title": "Hem Okuyup Hem Çalışmak: Açıköğretim ve İş Disiplinini Bir Arada Yürütmek",
    "description": "Saha tecrübesi kazanırken aynı zamanda Muhasebe ve Lojistik alanlarında üniversite eğitimine devam etmenin getirdiği zorluklar ve zaman yönetimi stratejileri.",
    "category": "Gelişim & Öğrenci",
    "tags": [
      "Zaman Yönetimi",
      "Açıköğretim",
      "İş Disiplini",
      "Kişisel Gelişim",
      "Öğrenci Günlüğü"
    ],
    "date": "10 Mayıs 2026",
    "readTime": "6 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Günün 8-9 saatini aktif olarak ofiste veya sahada ön muhasebe evrakları, lojistik operasyonlar ve ERP programları başında geçirip, akşamları ve hafta sonlarını üniversite derslerine ayırmak dışarıdan bakıldığında oldukça yorucu görünebilir. \n\nŞu anda aktif olarak iş hayatına devam ederken, bir yandan da **Atatürk Üniversitesi (Muhasebe ve Vergi Uygulamaları)** ve **Anadolu Üniversitesi (Uluslararası Ticaret ve Lojistik)** açıköğretim programlarında eğitimimi sürdürüyorum. Bu süreçte edindiğim tecrübeleri ve zaman yönetimi sırlarımı paylaşmak istedim.\n\n### 1. Teoriyi Sahada Pratiğe Dökmek (En Büyük Avantaj)\nAçıköğretim kitaplarında yazan birçok kuru teorik bilgi, sahada çalışırken anlam kazanıyor:\n* Ders kitabında okuduğunuz \"Tek Düzen Hesap Planı\", \"Çift Taraflı Kayıt Sistemi\" gibi kavramları gün içinde Mikro veya Logo'da bizzat uyguluyorsunuz.\n* Lojistik dersinde okuduğunuz \"Gümrük Teslim Şekilleri (FOB, CIF vb.)\" veya \"Sevk İrsaliyesi Kuralları\" her gün kestiğiniz faturalarda veya takip ettiğiniz araçlarda karşınıza çıkıyor.\n* Bu durum, sınavlara çalışırken ezber yapmak yerine bilgiyi mantığıyla kavramanıza yardımcı oluyor.\n\n### 2. Zaman Yönetiminde 'Blok Çalışma' Taktikleri\nGünde sadece 2-3 saat boş zamanınız varken ders çalışabilmek için zamanı bölmeniz gerekir:\n* **Haftalık Planlama:** Sınav dönemlerinden (vize/final) en az 1 ay önce üniteleri haftalara bölün. Her akşam sadece 1 ünite bitirmeyi hedefleyin.\n* **Mobil Uygulamalar:** Otobüste, iş molalarında veya yolda yürürken üniversitelerin mobil öğrenme uygulamalarından (Ata-AÖF ve Anadolum e-Kampüs) deneme sınavları çözün. Gün içindeki 10'ar dakikalık boşluklar birleştiğinde devasa bir çalışma süresine dönüşür.\n\n### 3. Kişisel Gelişim ve Etkinlik Katılımları\nSadece iş ve derslerle sınırlı kalmayıp, vizyonunuzu genişletecek etkinliklere katılmaya özen gösterin. Örneğin **GDG Gaziantep** tarafından düzenlenen **DevFest 2025** etkinliğine katılarak yapay zeka ve yeni nesil yazılım araçları hakkında bilgi edinmek, teknolojiyle olan hobi bağımı güçlendirdi. Mesleğiniz ne olursa olsun dijital çağa entegre olmak sizi her zaman bir adım öne taşır."
  },
  {
    "id": "kdv-nedir-nasil-hesaplanir",
    "title": "KDV Nedir? KDV Dahil ve Hariç Hesaplama Formülü",
    "description": "Katma Değer Vergisi (KDV) mantığını kavramak ve Excel'e gerek kalmadan en basit formüllerle KDV dahil/hariç hesabı yapmak.",
    "category": "Muhasebe",
    "tags": [
      "KDV",
      "Hesaplama",
      "Ön Muhasebe",
      "Esnaf İpuçları"
    ],
    "date": "08 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Katma Değer Vergisi (KDV)**, mal veya hizmet satışı esnasında nihai tüketiciden tahsil edilen bir tüketim vergisidir. Ön muhasebede en sık yapılan işlemlerden biri KDV hesaplamaktır.\n\n### KDV Hariç Fiyata KDV Eklemek (KDV Dahil Bulma)\nKDV hariç bir fiyata KDV tutarını eklemenin en hızlı yolu, fiyatı **1 + (KDV Oranı / 100)** ile çarpmaktır.\n\n* **%20 KDV için:** Fiyatı **1.20** ile çarpın.\n  * *Örnek:* 100 TL KDV hariç ürün -> 100 * 1.20 = 120 TL KDV dahil.\n* **%10 KDV için:** Fiyatı **1.10** ile çarpın.\n* **%1 KDV için:** Fiyatı **1.01** ile çarpın.\n\n### KDV Dahil Fiyattan KDV'yi Çıkarmak (KDV Hariç Bulma)\nElinizdeki KDV dahil tutardan ham fiyatı bulmak için rakamı **1 + (KDV Oranı / 100)** değerine bölmelisiniz.\n\n* **%20 KDV için:** Fiyatı **1.20**'ye bölün.\n  * *Örnek:* 120 TL KDV dahil ürün -> 120 / 1.20 = 100 TL KDV hariç.\n* **%10 KDV için:** Fiyatı **1.10**'a bölün.\n* **%1 KDV için:** Fiyatı **1.01**'e bölün.\n\n### 📝 Esnaf İpucu:\nFatura keserken yuvarlama hataları yaşamamak için Excel'de her zaman KDV hariç fiyat üzerinden hesaplama yapmaya özen gösterin."
  },
  {
    "id": "gecici-vergi-nedir",
    "title": "Geçici Vergi Nedir? Neden Yılda 4 Kez Ödenir?",
    "description": "KOBİ'lerin ve şahıs şirketlerinin her üç ayda bir karşılaştığı Geçici Vergi yükümlülüğünün basit mantığı ve önemi.",
    "category": "Muhasebe",
    "tags": [
      "Geçici Vergi",
      "Vergi Dünyası",
      "Ön Muhasebe",
      "KOBİ"
    ],
    "date": "07 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Geçici Vergi**, ticari kazanç sahiplerinin, serbest meslek erbabının ve kurumlar vergisi mükelleflerinin cari vergilendirme döneminin gelir vergisine mahsup edilmek üzere **üçer aylık dönemler** halinde ödedikleri bir peşin vergi uygulamasıdır.\n\n### Neden Ödenir?\nDevlet, yıl sonunda topluca alacağı Gelir veya Kurumlar Vergisini yıl içinde 3'er aylık dilimler halinde tahsil ederek bütçe dengesini korur. Mükellefler için ise yıl sonunda biriken devasa bir vergi yükü yerine, parça parça ödeme kolaylığı sağlar.\n\n### Geçici Vergi Dönemleri Nelerdir?\n* **1. Dönem (Ocak - Mart):** Ödemesi Mayıs ayında yapılır.\n* **2. Dönem (Nisan - Haziran):** Ödemesi Ağustos ayında yapılır.\n* **3. Dönem (Temmuz - Eylül):** Ödemesi Kasım ayında yapılır.\n* **4. Dönem (Ekim - Aralık):** Ödemesi takip eden yılın Şubat ayında yapılır.\n\n### 📝 Önemli Not:\nGeçici vergi dönemlerinde kâr elde etmediyseniz (yani zarar beyan ettiyseniz) o dönem için geçici vergi ödemezsiniz."
  },
  {
    "id": "muhtasar-beyanname-nedir",
    "title": "Muhtasar Beyanname Nedir? Stopaj Vergisi Nedir?",
    "description": "Kira stopajı, işçi muhtasarı ve mali müşavir ödemelerinde sıklıkla duyulan Muhtasar Beyanname rehberi.",
    "category": "Muhasebe",
    "tags": [
      "Muhtasar Beyanname",
      "Stopaj",
      "Vergi",
      "Ön Muhasebe"
    ],
    "date": "06 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Muhtasar Beyanname**, işverenlerin veya vergi tevkifatı (kesintisi) yapan diğer kişilerin, verginin asıl sorumlusu adına (örneğin çalışanlar veya işyeri mülk sahibi) kestikleri vergileri devlete beyan ettikleri belgedir.\n\n### Muhtasar Beyannamenin Mantığı: Stopaj\nStopaj, verginin henüz kaynağında (yani para hak sahibine ödenmeden önce) kesilerek doğrudan vergi dairesine ödenmesidir.\n\n* **İşyeri Kirası:** Mülk sahibine kirayı brüt ödemezsiniz. Stopaj kesintisini (genelde %20) muhtasar beyanname ile devlete öder, kalan net tutarı mülk sahibinin banka hesabına gönderirsiniz.\n* **Çalışan Maaşları:** Çalışanın brüt maaşından kesilen Gelir Vergisi, muhtasar beyanname ile vergi dairesine yatırılır.\n\n### Beyan Süresi\nMuhtasar beyanname aylık veya 10 kişiden az çalışanı olan KOBİ'ler için **3 aylık** olarak düzenlenebilir. Her dönemi takip eden ayın **26. günü** akşamına kadar beyan edilip ödenmesi şarttır."
  },
  {
    "id": "damga-vergisi-nedir",
    "title": "Damga Vergisi Nedir? Hangi Sözleşmelerde Ödenir?",
    "description": "Kira kontratları, ticari sözleşmeler ve beyannamelerin altında karşımıza çıkan Damga Vergisi hakkında pratik bilgiler.",
    "category": "Muhasebe",
    "tags": [
      "Damga Vergisi",
      "Sözleşme",
      "Vergi",
      "Ön Muhasebe"
    ],
    "date": "05 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Damga Vergisi**, kişiler veya kurumlar arasındaki hukuki ve ticari işlemleri belgeleyen kağıtlar üzerinden alınan bir vergidir. Bir sözleşmenin resmi olarak geçerlilik kazanması veya beyannamenin resmi makamlara sunulması esnasında tahsil edilir.\n\n### Hangi Sözleşmelerde Damga Vergisi Ödenir?\n* **Kira Sözleşmeleri:** Kira sözleşmelerinde kefil türüne ve brüt kira bedeline göre belirli bir oranda damga vergisi ödenmesi gerekir.\n* **Mal Alım-Satım Sözleşmeleri:** Ticari olarak düzenlenen sözleşmelerde imza altına alınan tutar üzerinden binde 9,48 oranında vergi doğar.\n* **Beyannameler:** Vergi dairesine gönderilen KDV, Muhtasar, Geçici Vergi beyannamelerinin her birinde standart maktu bir damga vergisi bulunur.\n\n### 📝 Pratik İpucu:\nİş ortaklarınızla sözleşme imzalarken damga vergisinin hangi tarafça ödeneceğini sözleşme maddesi olarak netleştirmeniz, ileride doğabilecek anlaşmazlıkları önler."
  },
  {
    "id": "otv-ve-mtv-farki",
    "title": "ÖTV ve MTV Arasındaki Farklar Nelerdir?",
    "description": "Araç alırken ve araç sahibi olduktan sonra ödenen ÖTV ile MTV arasındaki temel farkları 30 saniyede öğrenin.",
    "category": "Muhasebe",
    "tags": [
      "ÖTV",
      "MTV",
      "Taşıt Vergisi",
      "Ön Muhasebe"
    ],
    "date": "04 Mayıs 2026",
    "readTime": "2 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Araçlar ile ilgili iki büyük vergi olan **ÖTV** (Özel Tüketim Vergisi) ve **MTV** (Motorlu Taşıtlar Vergisi) sıklıkla birbiriyle karıştırılır. Ancak bu iki verginin alınma amacı ve zamanı tamamen farklıdır.\n\n### 1. ÖTV (Özel Tüketim Vergisi) - Alırken Ödenir\nÖTV, lüks veya çevreye zarar veren belirli ürünlerin (otomobil, beyaz eşya, alkol, tütün) **ilk satın alımında** sadece bir kez ödenen bir harcama vergisidir. Araç alırken ödediğiniz ve aracın silindir hacmine göre değişen vergi ÖTV'dir.\n\n### 2. MTV (Motorlu Taşıtlar Vergisi) - Sahip Oldukça Ödenir\nMTV ise kara, hava ve deniz taşıtlarının sahibi olduğunuz sürece her yıl devlete ödemekle yükümlü olduğunuz bir servet vergisidir.\n* Yılda **2 eşit taksit** halinde (Ocak ve Temmuz aylarında) ödenir.\n* Taşıtın yaşına, motor gücüne ve emisyon değerine göre hesaplanır.\n\n### 📝 Özet:\nÖTV aracı **satın alırken bir kereye mahsus**, MTV ise araca **sahip olduğunuz her yıl iki taksit halinde** ödenir."
  },
  {
    "id": "e-ticaret-vergilendirme-mantigi",
    "title": "e-Ticaret Yapanlar İçin Vergilendirme Mantığı",
    "description": "İnternetten ürün veya hizmet satanların ödemesi gereken KDV, gelir vergisi ve fatura kesme yükümlülükleri.",
    "category": "Muhasebe",
    "tags": [
      "e-Ticaret",
      "Vergilendirme",
      "Ön Muhasebe",
      "KOBİ"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**e-Ticaret Yapanlar İçin Vergilendirme Mantığı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİnternetten ürün veya hizmet satanların ödemesi gereken KDV, gelir vergisi ve fatura kesme yükümlülükleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "gelir-vergisi-dilimleri",
    "title": "Gelir Vergisi Dilimleri Nedir? Maaşları Nasıl Etkiler?",
    "description": "Yıl içinde yükselen gelir vergisi dilimlerinin net maaşları nasıl düşürdüğünün en sade açıklaması.",
    "category": "Muhasebe",
    "tags": [
      "Gelir Vergisi",
      "Maaş",
      "Kesintiler",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Gelir Vergisi Dilimleri Nedir? Maaşları Nasıl Etkiler?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYıl içinde yükselen gelir vergisi dilimlerinin net maaşları nasıl düşürdüğünün en sade açıklaması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "sgk-prim-odemeleri-ve-tesvikler",
    "title": "SGK Prim Ödemeleri ve Güncel İşveren Teşvikleri",
    "description": "İşverenlerin SGK primlerini düzenli ödeyerek kazanabileceği %5'lik hazine indirimi ve güncel teşvikler.",
    "category": "Muhasebe",
    "tags": [
      "SGK",
      "İşveren Teşvikleri",
      "Bordro",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**SGK Prim Ödemeleri ve Güncel İşveren Teşvikleri**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşverenlerin SGK primlerini düzenli ödeyerek kazanabileceği %5'lik hazine indirimi ve güncel teşvikler.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "fatura-kesme-suresi-kuralari",
    "title": "Fatura Kesme Süresi: 7 Gün Kuralı Nedir?",
    "description": "Mal tesliminden sonra yasal olarak faturanın düzenlenmesi gereken süre sınırı ve cezai durumları.",
    "category": "Muhasebe",
    "tags": [
      "Fatura",
      "Yasal Süre",
      "Ön Muhasebe",
      "e-Belge"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Fatura Kesme Süresi: 7 Gün Kuralı Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMal tesliminden sonra yasal olarak faturanın düzenlenmesi gereken süre sınırı ve cezai durumları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "serbest-meslek-makbuzu-nedir",
    "title": "Serbest Meslek Makbuzu (SMM) Nedir, Nasıl Kesilir?",
    "description": "Avukatlar, doktorlar ve yazılımcıların fatura yerine kullandığı SMM belgesi ve stopaj mantığı.",
    "category": "Muhasebe",
    "tags": [
      "SMM",
      "Makbuz",
      "Stopaj",
      "Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Serbest Meslek Makbuzu (SMM) Nedir, Nasıl Kesilir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nAvukatlar, doktorlar ve yazılımcıların fatura yerine kullandığı SMM belgesi ve stopaj mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "gider-pusulasi-nedir",
    "title": "Gider Pusulası Nedir? Faturasız Mal Alımında Nasıl Kullanılır?",
    "description": "Şirket dışındaki vergi mükellefi olmayan şahıslardan mal alırken düzenlenen yasal gider pusulası.",
    "category": "Muhasebe",
    "tags": [
      "Gider Pusulası",
      "Giderleştirme",
      "Vergisiz Alım",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Gider Pusulası Nedir? Faturasız Mal Alımında Nasıl Kullanılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket dışındaki vergi mükellefi olmayan şahıslardan mal alırken düzenlenen yasal gider pusulası.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ba-bs-formu-nedir",
    "title": "Ba-Bs Formu Nedir? Neden Bildirilmesi Zorunludur?",
    "description": "Şirketlerin aylık olarak 5.000 TL'yi aşan mal/hizmet alış ve satışlarını beyan ettiği mutabakat formları.",
    "category": "Muhasebe",
    "tags": [
      "Ba-Bs",
      "Beyanname",
      "Ön Muhasebe",
      "Yasal Form"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Ba-Bs Formu Nedir? Neden Bildirilmesi Zorunludur?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirketlerin aylık olarak 5.000 TL'yi aşan mal/hizmet alış ve satışlarını beyan ettiği mutabakat formları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "amortisman-nedir",
    "title": "Amortisman Nedir? Demirbaş Yıpranma Payı Nasıl Hesaplanır?",
    "description": "Satın alınan masa, bilgisayar, araç gibi demirbaşların yıllara yayılan yıpranma payının gider yazılma yöntemi.",
    "category": "Muhasebe",
    "tags": [
      "Amortisman",
      "Demirbaş",
      "Gider",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Amortisman Nedir? Demirbaş Yıpranma Payı Nasıl Hesaplanır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nSatın alınan masa, bilgisayar, araç gibi demirbaşların yıllara yayılan yıpranma payının gider yazılma yöntemi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "demirbas-siniri-nedir",
    "title": "Demirbaş Sınırı Nedir? Ne Zaman Doğrudan Gider Yazılır?",
    "description": "Maliye Bakanlığınca her yıl güncellenen demirbaş sınırının altındaki ufak alımların hızlıca giderleştirilmesi.",
    "category": "Muhasebe",
    "tags": [
      "Demirbaş Sınırı",
      "Hızlı Gider",
      "Ön Muhasebe",
      "Vergi"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Demirbaş Sınırı Nedir? Ne Zaman Doğrudan Gider Yazılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMaliye Bakanlığınca her yıl güncellenen demirbaş sınırının altındaki ufak alımların hızlıca giderleştirilmesi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "stopaj-vergisi-hesaplama",
    "title": "Stopaj Vergisi Nedir, Nasıl Hesaplanır?",
    "description": "Kira veya serbest meslek ödemelerinde brüt tutar üzerinden yapılan kesintinin basit matematik hesabı.",
    "category": "Muhasebe",
    "tags": [
      "Stopaj",
      "Vergi Kesintisi",
      "Ön Muhasebe",
      "Hesaplama"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Stopaj Vergisi Nedir, Nasıl Hesaplanır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nKira veya serbest meslek ödemelerinde brüt tutar üzerinden yapılan kesintinin basit matematik hesabı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kira-stopaji-ve-muhasebelestirme",
    "title": "İşyeri Kira Stopajı Nedir, Kim Tarafından Ödenir?",
    "description": "İşyeri kiralamalarında brüt kira üzerinden kesilerek kiracı esnaf tarafından vergi dairesine yatırılan stopaj.",
    "category": "Muhasebe",
    "tags": [
      "Kira Stopajı",
      "Stopaj",
      "Ön Muhasebe",
      "Kira"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İşyeri Kira Stopajı Nedir, Kim Tarafından Ödenir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşyeri kiralamalarında brüt kira üzerinden kesilerek kiracı esnaf tarafından vergi dairesine yatırılan stopaj.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ihracat-faturasi-kdvsi",
    "title": "İhracat Faturasında KDV Neden Sıfırdır?",
    "description": "Yurt dışına kesilen faturalarda uygulanan KDV İstisnası ve ihracat faturası keserken uyulacak kurallar.",
    "category": "Muhasebe",
    "tags": [
      "İhracat",
      "KDV İstisnası",
      "e-Fatura",
      "Dış Ticaret"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İhracat Faturasında KDV Neden Sıfırdır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYurt dışına kesilen faturalarda uygulanan KDV İstisnası ve ihracat faturası keserken uyulacak kurallar.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ihracat-kayitli-fatura-nedir",
    "title": "İhraç Kayıtlı Fatura Nedir? Tecil-Terkin Nedir?",
    "description": "İhracatçılara hammadde sağlayan üreticilerin KDV tahsil etmeden düzenlediği özel faturaların mantığı.",
    "category": "Muhasebe",
    "tags": [
      "İhraç Kayıtlı",
      "KDV",
      "Üretim",
      "Dış Ticaret"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İhraç Kayıtlı Fatura Nedir? Tecil-Terkin Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİhracatçılara hammadde sağlayan üreticilerin KDV tahsil etmeden düzenlediği özel faturaların mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kdv-iadesi-nasil-alinir",
    "title": "KDV İadesi Nedir, Kimler Alabilir?",
    "description": "İhracat veya indirimli orana tabi satışlar nedeniyle devletten nakit veya mahsup yoluyla geri alınan KDV.",
    "category": "Muhasebe",
    "tags": [
      "KDV İadesi",
      "KDV",
      "Vergi İadesi",
      "Finans"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**KDV İadesi Nedir, Kimler Alabilir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİhracat veya indirimli orana tabi satışlar nedeniyle devletten nakit veya mahsup yoluyla geri alınan KDV.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "muhasebede-hesap-plani",
    "title": "Tek Düzen Hesap Planı Nedir, Kodlar Ne İşe Yarar?",
    "description": "100, 102, 120, 320 gibi rakamların muhasebe dili olan hesap planındaki basit ve pratik anlamları.",
    "category": "Muhasebe",
    "tags": [
      "Hesap Planı",
      "Defter",
      "Ön Muhasebe",
      "Eğitim"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Tek Düzen Hesap Planı Nedir, Kodlar Ne İşe Yarar?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\n100, 102, 120, 320 gibi rakamların muhasebe dili olan hesap planındaki basit ve pratik anlamları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-100-kasa-kodu",
    "title": "100 Kasa Hesabı Nedir? Nasıl Çalışır?",
    "description": "İşletmenin nakit para hareketlerini temsil eden ve borç/alacak çalışan 100 Kasa hesabının işleyişi.",
    "category": "Muhasebe",
    "tags": [
      "Kasa",
      "100 Kasa",
      "Ön Muhasebe",
      "Muhasebe Sınıfı"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**100 Kasa Hesabı Nedir? Nasıl Çalışır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşletmenin nakit para hareketlerini temsil eden ve borç/alacak çalışan 100 Kasa hesabının işleyişi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-102-bankalar-kodu",
    "title": "102 Bankalar Hesabı Nedir? Ekstre Nasıl İşlenir?",
    "description": "Banka hesaplarındaki tüm hareketlerin kaydedildiği 102 kodlu muhasebe hesabının pratik mantığı.",
    "category": "Muhasebe",
    "tags": [
      "Banka",
      "102 Bankalar",
      "Ön Muhasebe",
      "Ekstre"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**102 Bankalar Hesabı Nedir? Ekstre Nasıl İşlenir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nBanka hesaplarındaki tüm hareketlerin kaydedildiği 102 kodlu muhasebe hesabının pratik mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-120-alicilar-kodu",
    "title": "120 Alıcılar Hesabı Nedir? Cari Hesap Takibi",
    "description": "Mal veya hizmet sattığınız borçlu müşterilerin cari hareketlerinin izlendiği 120 hesabı.",
    "category": "Muhasebe",
    "tags": [
      "120 Alıcılar",
      "Cari Hesap",
      "Ön Muhasebe",
      "Müşteriler"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**120 Alıcılar Hesabı Nedir? Cari Hesap Takibi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMal veya hizmet sattığınız borçlu müşterilerin cari hareketlerinin izlendiği 120 hesabı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-320-saticilar-kodu",
    "title": "320 Satıcılar Hesabı Nedir? Borç Takibi",
    "description": "Mal veya hizmet aldığınız alacaklı tedarikçilerin cari hareketlerinin kaydedildiği 320 hesabı.",
    "category": "Muhasebe",
    "tags": [
      "320 Satıcılar",
      "Cari Hesap",
      "Borç Takibi",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**320 Satıcılar Hesabı Nedir? Borç Takibi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMal veya hizmet aldığınız alacaklı tedarikçilerin cari hareketlerinin kaydedildiği 320 hesabı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-391-hesaplanan-kdv",
    "title": "391 Hesaplanan KDV ile 191 İndirilecek KDV Farkı",
    "description": "Satış yaparken tahsil ettiğiniz KDV ile alım yaparken ödediğiniz KDV arasındaki mahsup mantığı.",
    "category": "Muhasebe",
    "tags": [
      "KDV Mahsubu",
      "391 KDV",
      "191 KDV",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**391 Hesaplanan KDV ile 191 İndirilecek KDV Farkı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nSatış yaparken tahsil ettiğiniz KDV ile alım yaparken ödediğiniz KDV arasındaki mahsup mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "active-600-yurtici-satislar",
    "title": "600 Yurtiçi Satışlar Hesabı Nedir? Ciro Nasıl Görünür?",
    "description": "Şirketin yurt içinde yaptığı tüm net satış faturalarının gelir tablosuna aktarıldığı 600 hesabı.",
    "category": "Muhasebe",
    "tags": [
      "600 Satışlar",
      "Ciro",
      "Gelir Tablosu",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**600 Yurtiçi Satışlar Hesabı Nedir? Ciro Nasıl Görünür?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirketin yurt içinde yaptığı tüm net satış faturalarının gelir tablosuna aktarıldığı 600 hesabı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "yol-ve-yemek-bedeli-istisnasi",
    "title": "Yol ve Yemek Bedeli İstisnası Nedir? Vergi Avantajı",
    "description": "Çalışanlara ödenen günlük yol ve yemek paralarında sağlanan vergi ve SGK prim istisnası limitleri.",
    "category": "Muhasebe",
    "tags": [
      "Yol ve Yemek",
      "İstisna",
      "Bordro",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Yol ve Yemek Bedeli İstisnası Nedir? Vergi Avantajı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nÇalışanlara ödenen günlük yol ve yemek paralarında sağlanan vergi ve SGK prim istisnası limitleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ayni-yardimlar-vergilendirmesi",
    "title": "İşçiye Yapılan Ayni Yardımların Vergilendirilmesi",
    "description": "Çalışanlara verilen erzak kolisi, giyim yardımı gibi nakit dışı ayni yardımların bordrodaki vergi durumu.",
    "category": "Muhasebe",
    "tags": [
      "Ayni Yardım",
      "Maaş",
      "Vergi İstisnası",
      "Bordro"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İşçiye Yapılan Ayni Yardımların Vergilendirilmesi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nÇalışanlara verilen erzak kolisi, giyim yardımı gibi nakit dışı ayni yardımların bordrodaki vergi durumu.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "harcirah-ve-yolluk-odemeleri",
    "title": "Harcırah ve Yolluk Ödemeleri Nedir?",
    "description": "Şirket dışı veya şehir dışı görevlendirmelerde çalışanlara ödenen vergiden muaf harcırah limitleri.",
    "category": "Muhasebe",
    "tags": [
      "Harcırah",
      "Gider",
      "İş Seyahati",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Harcırah ve Yolluk Ödemeleri Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket dışı veya şehir dışı görevlendirmelerde çalışanlara ödenen vergiden muaf harcırah limitleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "tasit-giderleri-vergi-avantaji",
    "title": "Şirket Taşıt Giderlerinin Vergisel Boyutu",
    "description": "Şirket adına kayıtlı binek veya ticari araçların yakıt, bakım ve lastik giderlerinin vergi avantajı.",
    "category": "Muhasebe",
    "tags": [
      "Araç Giderleri",
      "Yakıt Gideri",
      "Vergi Avantajı",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Şirket Taşıt Giderlerinin Vergisel Boyutu**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket adına kayıtlı binek veya ticari araçların yakıt, bakım ve lastik giderlerinin vergi avantajı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "binek-otobil-gider-kisitlamasi",
    "title": "Binek Otomobil Gider Kısıtlaması Nedir?",
    "description": "Binek araçların giderlerinde uygulanan kanunen kabul edilmeyen gider (KKEG) kısıtlama limitleri.",
    "category": "Muhasebe",
    "tags": [
      "Araç Kısıtlaması",
      "KKEG",
      "Vergi",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Binek Otomobil Gider Kısıtlaması Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nBinek araçların giderlerinde uygulanan kanunen kabul edilmeyen gider (KKEG) kısıtlama limitleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "promosyon-urunleri-kdvsi",
    "title": "Promosyon Ürünleri KDV'si ve Giderleştirilmesi",
    "description": "Müşterilere dağıtılan ajanda, kalem gibi eşantiyon ve promosyon ürünlerinin KDV indirim durumu.",
    "category": "Muhasebe",
    "tags": [
      "Promosyon",
      "KDV İndirimi",
      "Gider yazma",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Promosyon Ürünleri KDV'si ve Giderleştirilmesi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMüşterilere dağıtılan ajanda, kalem gibi eşantiyon ve promosyon ürünlerinin KDV indirim durumu.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "supheli-alacaklar-karsiligi",
    "title": "Şüpheli Ticari Alacaklar Nedir? Ne Zaman Gider Yazılır?",
    "description": "Tahsilatı geciken ve icra takibine düşen alacakların karşılık ayrılarak gider yazılabilme şartları.",
    "category": "Muhasebe",
    "tags": [
      "Şüpheli Alacak",
      "İcra",
      "Giderleştirme",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Şüpheli Ticari Alacaklar Nedir? Ne Zaman Gider Yazılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nTahsilatı geciken ve icra takibine düşen alacakların karşılık ayrılarak gider yazılabilme şartları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "degsiz-kasa-mutabakati",
    "title": "Kasa Mutabakatında Açık veya Fazla Çıkarsa Ne Yapılır?",
    "description": "Gün sonu kasa sayımında ortaya çıkan eksikliklerin veya fazlalıkların muhasebeleştirme kuralları.",
    "category": "Muhasebe",
    "tags": [
      "Kasa Açığı",
      "Kasa Fazlası",
      "Mutabakat",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kasa Mutabakatında Açık veya Fazla Çıkarsa Ne Yapılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nGün sonu kasa sayımında ortaya çıkan eksikliklerin veya fazlalıkların muhasebeleştirme kuralları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "pos-komisyon-giderleri",
    "title": "POS Komisyon Giderleri Muhasebeye Nasıl İşlenir?",
    "description": "Banka POS cihazlarından yapılan çekimlerde kesilen komisyon oranlarının gider yazılma kuralları.",
    "category": "Muhasebe",
    "tags": [
      "POS Cihazı",
      "Banka Komisyonu",
      "Gider",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**POS Komisyon Giderleri Muhasebeye Nasıl İşlenir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nBanka POS cihazlarından yapılan çekimlerde kesilen komisyon oranlarının gider yazılma kuralları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kredi-kartli-satislar-309-kodu",
    "title": "Kredi Kartlı Satışlar Muhasebe Hesap Mantığı",
    "description": "Müşterilerden kredi kartı ile tahsil edilen tutarların 108 Diğer Hazır Değerler hesabında takibi.",
    "category": "Muhasebe",
    "tags": [
      "Kredi Kartı",
      "108 Hesap",
      "Ön Muhasebe",
      "Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kredi Kartlı Satışlar Muhasebe Hesap Mantığı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMüşterilerden kredi kartı ile tahsil edilen tutarların 108 Diğer Hazır Değerler hesabında takibi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "vadesiz-mevduat-ve-faiz-geliri",
    "title": "Vadeli Mevduat Faiz Geliri ve Stopajı",
    "description": "Şirket nakitlerinin vadeli hesapta değerlendirilmesi sonucu oluşan faiz gelirlerinin vergilendirilmesi.",
    "category": "Muhasebe",
    "tags": [
      "Faiz Geliri",
      "Banka",
      "Vergi",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Vadeli Mevduat Faiz Geliri ve Stopajı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket nakitlerinin vadeli hesapta değerlendirilmesi sonucu oluşan faiz gelirlerinin vergilendirilmesi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "faiz-giderleri-kisitlamasi",
    "title": "Finansman Gider Kısıtlaması Nedir?",
    "description": "Yabancı kaynak kullanan şirketlerin ödediği faizlerin belirli oranlarda gider yazılmasının sınırlandırılması.",
    "category": "Muhasebe",
    "tags": [
      "Faiz Gideri",
      "Kısıtlama",
      "Gider",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Finansman Gider Kısıtlaması Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYabancı kaynak kullanan şirketlerin ödediği faizlerin belirli oranlarda gider yazılmasının sınırlandırılması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ozel-tuketim-vergisi-matrahi",
    "title": "ÖTV Matrahı Nasıl Hesaplanır? KDV İlişkisi",
    "description": "Önce ÖTV'nin hesaplanıp, KDV'nin ÖTV dahil toplam matrah üzerinden alındığı 'verginin vergisi' hesabı.",
    "category": "Muhasebe",
    "tags": [
      "ÖTV",
      "KDV Matrahı",
      "Hesaplama",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**ÖTV Matrahı Nasıl Hesaplanır? KDV İlişkisi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nÖnce ÖTV'nin hesaplanıp, KDV'nin ÖTV dahil toplam matrah üzerinden alındığı 'verginin vergisi' hesabı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "gumruk-vergisi-hesaplama",
    "title": "İthalatta Gümrük Vergisi ve KDV Matrahı",
    "description": "Yurt dışından gelen ithalat beyannamelerindeki gümrük vergilerinin KDV matrahına dahil edilme mantığı.",
    "category": "Muhasebe",
    "tags": [
      "İthalat",
      "Gümrük Vergisi",
      "KDV Matrahı",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İthalatta Gümrük Vergisi ve KDV Matrahı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYurt dışından gelen ithalat beyannamelerindeki gümrük vergilerinin KDV matrahına dahil edilme mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "proforma-fatura-teklif-iliskisi",
    "title": "Proforma Fatura Resmi Belge midir?",
    "description": "Proforma faturanın hiçbir vergi beyanında kullanılamayacağı, yalnızca ticari ön teklif olduğu hatırlatması.",
    "category": "Muhasebe",
    "tags": [
      "Proforma",
      "Teklif",
      "Mali Değer",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Proforma Fatura Resmi Belge midir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nProforma faturanın hiçbir vergi beyanında kullanılamayacağı, yalnızca ticari ön teklif olduğu hatırlatması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "irsaliyeli-fatura-nedir",
    "title": "İrsaliyeli Fatura Nedir? e-Belge Döneminde Kaldı mı?",
    "description": "Eski kağıt fatura döneminde hem irsaliye hem fatura yerine geçen belgenin e-Belge'deki güncel karşılığı.",
    "category": "Muhasebe",
    "tags": [
      "İrsaliyeli Fatura",
      "e-Arşiv",
      "Ön Muhasebe",
      "Belgeler"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İrsaliyeli Fatura Nedir? e-Belge Döneminde Kaldı mı?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nEski kağıt fatura döneminde hem irsaliye hem fatura yerine geçen belgenin e-Belge'deki güncel karşılığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "mustahsil-makbuzu-nedir",
    "title": "Müstahsil Makbuzu Nedir? Çiftçiden Alımlarda Stopaj",
    "description": "Vergi mükellefi olmayan çiftçilerden tarımsal ürün alırken kesilen müstahsil makbuzu ve stopaj kesintisi.",
    "category": "Muhasebe",
    "tags": [
      "Müstahsil Makbuzu",
      "Tarım Alımı",
      "Stopaj",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Müstahsil Makbuzu Nedir? Çiftçiden Alımlarda Stopaj**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nVergi mükellefi olmayan çiftçilerden tarımsal ürün alırken kesilen müstahsil makbuzu ve stopaj kesintisi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "e-arsiv-5bin-30bin-limiti",
    "title": "e-Arşiv Fatura GİB Portalı Düzenleme Sınırları",
    "description": "Şirket olmayan şahıslara ve şirketlere kesilecek faturalarda GİB portalının zorunlu kullanım sınırları.",
    "category": "Yazılım & ERP",
    "tags": [
      "e-Arşiv Limiti",
      "GİB Portal",
      "e-Belge",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**e-Arşiv Fatura GİB Portalı Düzenleme Sınırları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket olmayan şahıslara ve şirketlere kesilecek faturalarda GİB portalının zorunlu kullanım sınırları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "faturada-yuvarlama-mantigi",
    "title": "Kuruş Yuvarlamaları Muhasebeye Nasıl İşlenir?",
    "description": "Fatura altlarında küsuratları eşitlemek için yapılan yuvarlamaların Diğer Olağandışı Gider/Gelir kaydı.",
    "category": "Muhasebe",
    "tags": [
      "Kuruş Yuvarlama",
      "Kuruş",
      "Ön Muhasebe",
      "Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kuruş Yuvarlamaları Muhasebeye Nasıl İşlenir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nFatura altlarında küsuratları eşitlemek için yapılan yuvarlamaların Diğer Olağandışı Gider/Gelir kaydı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "iskonto-nasil-hesaplanir",
    "title": "Faturada İskonto Satırda mı Altında mı Yapılır?",
    "description": "Fatura satırında yapılan iskonto ile fatura toplamı altında yapılan genel iskonto arasındaki KDV farkı.",
    "category": "Muhasebe",
    "tags": [
      "İskonto",
      "Fatura",
      "İndirim",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Faturada İskonto Satırda mı Altında mı Yapılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nFatura satırında yapılan iskonto ile fatura toplamı altında yapılan genel iskonto arasındaki KDV farkı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kdv-oranlari-1-10-20",
    "title": "Güncel KDV Oranları (%1, %10, %20) Hangi Ürünlerde Geçerlidir?",
    "description": "Gıda, giyim ve genel hizmet sektörlerinde uygulanan güncel temel KDV oranlarının pratik listesi.",
    "category": "Muhasebe",
    "tags": [
      "KDV Oranları",
      "Vergi",
      "Ön Muhasebe",
      "KOBİ"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Güncel KDV Oranları (%1, %10, %20) Hangi Ürünlerde Geçerlidir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nGıda, giyim ve genel hizmet sektörlerinde uygulanan güncel temel KDV oranlarının pratik listesi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ortaklar-cari-hesabi",
    "title": "131 Ortaklardan Alacaklar Hesabı Tehlikesi Nedir?",
    "description": "Şirket kasasından ortakların şahsi kullanımı için çekilen paraların vergi incelemesindeki adat tehlikesi.",
    "category": "Muhasebe",
    "tags": [
      "131 Hesap",
      "Ortaklar Cari",
      "Vergi İncelemesi",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**131 Ortaklardan Alacaklar Hesabı Tehlikesi Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket kasasından ortakların şahsi kullanımı için çekilen paraların vergi incelemesindeki adat tehlikesi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "ortaklara-borclar-331-kodu",
    "title": "331 Ortaklara Borçlar Hesabı Nedir?",
    "description": "Ortakların şirkete geçici olarak verdiği nakit borçların izlendiği 331 kodlu hesabın pratik mantığı.",
    "category": "Muhasebe",
    "tags": [
      "331 Hesap",
      "Şirket Borcu",
      "Ortaklar",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**331 Ortaklara Borçlar Hesabı Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nOrtakların şirkete geçici olarak verdiği nakit borçların izlendiği 331 kodlu hesabın pratik mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "sermaye-artirimi-ve-odeme",
    "title": "Şirketlerde Sermaye Artırımı ve Muhasebe Kaydı",
    "description": "Şirketlerin özkaynaklarını güçlendirmek için yaptığı sermaye artırımının tescil ve ödeme aşamaları.",
    "category": "Muhasebe",
    "tags": [
      "Sermaye Artırımı",
      "Şirket",
      "Tescil",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Şirketlerde Sermaye Artırımı ve Muhasebe Kaydı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirketlerin özkaynaklarını güçlendirmek için yaptığı sermaye artırımının tescil ve ödeme aşamaları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "nakit-sermaye-faiz-indirimi",
    "title": "Nakit Sermaye Artırımı Faiz İndirimi Nedir?",
    "description": "Ortakların nakit olarak koyduğu sermaye artırımı üzerinden kazanılan kurumlar vergisi indirim avantajı.",
    "category": "Muhasebe",
    "tags": [
      "Nakit Sermaye",
      "Vergi İndirimi",
      "Kurumlar Vergisi",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Nakit Sermaye Artırımı Faiz İndirimi Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nOrtakların nakit olarak koyduğu sermaye artırımı üzerinden kazanılan kurumlar vergisi indirim avantajı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kar-dagitimi-ve-stopaj",
    "title": "Limited Şirketlerde Kar Dağıtımı ve Stopajı",
    "description": "Yıl sonunda elde edilen net kârın ortaklara paylaştırılması esnasında yapılan stopaj kesintisi oranı.",
    "category": "Muhasebe",
    "tags": [
      "Kâr Dağıtımı",
      "Stopaj",
      "Ortaklar",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Limited Şirketlerde Kar Dağıtımı ve Stopajı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYıl sonunda elde edilen net kârın ortaklara paylaştırılması esnasında yapılan stopaj kesintisi oranı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "tasfiye-sureci-sirketler",
    "title": "Şirketlerde Tasfiye Süreci Nedir? Nasıl Başlar?",
    "description": "Faaliyetine son vermek isteyen limited veya anonim şirketlerin kapatılma ve tasfiye adımları.",
    "category": "Muhasebe",
    "tags": [
      "Tasfiye",
      "Şirket Kapatma",
      "Yasal Süreç",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Şirketlerde Tasfiye Süreci Nedir? Nasıl Başlar?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nFaaliyetine son vermek isteyen limited veya anonim şirketlerin kapatılma ve tasfiye adımları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "adli-sicil-belgesi-ve-is-e-giris",
    "title": "İşe Giriş Bildirgesi ve Özlük Dosyası Evrakları",
    "description": "Yeni bir personel işe alırken özlük dosyasına konması yasal olarak zorunlu olan belgelerin basit listesi.",
    "category": "Muhasebe",
    "tags": [
      "Özlük Dosyası",
      "İşe Giriş",
      "SGK",
      "Bordro"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İşe Giriş Bildirgesi ve Özlük Dosyası Evrakları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYeni bir personel işe alırken özlük dosyasına konması yasal olarak zorunlu olan belgelerin basit listesi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "is-kazasi-bildirim-suresi",
    "title": "İş Kazası Bildirimi Kaç Gün İçinde Yapılmalıdır?",
    "description": "İşyerinde gerçekleşen kazaların SGK'ya yasal olarak bildirilmesi gereken 3 iş günü kuralı.",
    "category": "Muhasebe",
    "tags": [
      "İş Kazası",
      "SGK Bildirim",
      "Yasal Süre",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İş Kazası Bildirimi Kaç Gün İçinde Yapılmalıdır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşyerinde gerçekleşen kazaların SGK'ya yasal olarak bildirilmesi gereken 3 iş günü kuralı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "meslek-kodlari-sgk-onemi",
    "title": "SGK İşe Girişlerinde Meslek Kodunun Önemi",
    "description": "Çalışanların gerçekte yaptığı işe uygun SGK meslek koduyla bildirilmesinin yasal zorunluluğu ve cezası.",
    "category": "Muhasebe",
    "tags": [
      "Meslek Kodu",
      "SGK",
      "Özlük Dosyası",
      "Bordro"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**SGK İşe Girişlerinde Meslek Kodunun Önemi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nÇalışanların gerçekte yaptığı işe uygun SGK meslek koduyla bildirilmesinin yasal zorunluluğu ve cezası.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "eksik-gun-nedenleri-sgk",
    "title": "SGK Eksik Gün Nedenleri ve Bildirimi",
    "description": "Rapor, ücretsiz izin gibi nedenlerle eksik çalışılan günlerin SGK sistemine eksik gün kodlarıyla beyanı.",
    "category": "Muhasebe",
    "tags": [
      "Eksik Gün",
      "SGK Kodları",
      "Bordro",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**SGK Eksik Gün Nedenleri ve Bildirimi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nRapor, ücretsiz izin gibi nedenlerle eksik çalışılan günlerin SGK sistemine eksik gün kodlarıyla beyanı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "emekli-calisanlar-sgdp",
    "title": "Emekli Çalışanların SGK Primleri (SGDP) Farkı",
    "description": "Emekli olduktan sonra çalışmaya devam edenlerin tabi olduğu Sosyal Güvenlik Destek Primi oranları.",
    "category": "Muhasebe",
    "tags": [
      "Emekli Çalışan",
      "SGDP",
      "Prim Farkı",
      "Bordro"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Emekli Çalışanların SGK Primleri (SGDP) Farkı**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nEmekli olduktan sonra çalışmaya devam edenlerin tabi olduğu Sosyal Güvenlik Destek Primi oranları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "engelli-istihdami-tesviki",
    "title": "Engelli İstihdamı Desteği ve Teşvik Oranları",
    "description": "Engelli personel istihdam eden işverenlere sağlanan %100 oranındaki hazine prim teşvik desteği.",
    "category": "Muhasebe",
    "tags": [
      "Engelli Teşviki",
      "İşveren Teşviki",
      "SGK",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Engelli İstihdamı Desteği ve Teşvik Oranları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nEngelli personel istihdam eden işverenlere sağlanan %100 oranındaki hazine prim teşvik desteği.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kisa-calisma-odenegi-nedir",
    "title": "Kısa Çalışma Ödeneği Nedir? Kimler Alabilir?",
    "description": "Genel ekonomik kriz veya mücbir sebeplerle işyerinde çalışma süresinin azaltılması durumundaki devlet desteği.",
    "category": "Muhasebe",
    "tags": [
      "Kısa Çalışma",
      "Devlet Desteği",
      "İşsizlik Fonu",
      "Bordro"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kısa Çalışma Ödeneği Nedir? Kimler Alabilir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nGenel ekonomik kriz veya mücbir sebeplerle işyerinde çalışma süresinin azaltılması durumundaki devlet desteği.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "issizlik-maasi-sartlari",
    "title": "İşsizlik Maaşı Alma Şartları Nelerdir?",
    "description": "İşten çıkarılan çalışanların işsizlik maaşı alabilmesi için son 3 yıldaki prim ödeme gün şartları.",
    "category": "Muhasebe",
    "tags": [
      "İşsizlik Maaşı",
      "SGK",
      "İşsizlik Fonu",
      "Özlük Hakları"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İşsizlik Maaşı Alma Şartları Nelerdir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşten çıkarılan çalışanların işsizlik maaşı alabilmesi için son 3 yıldaki prim ödeme gün şartları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "is-kur-isbasi-egitim-programi",
    "title": "İŞKUR İşbaşı Eğitim Programı Avantajları",
    "description": "İşletmelerin yeni alacağı personelin maaş ve primlerinin belirli süre İŞKUR tarafından karşılanması.",
    "category": "Muhasebe",
    "tags": [
      "İŞKUR",
      "İşbaşı Eğitim",
      "Teşvik",
      "Girişimcilik"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İŞKUR İşbaşı Eğitim Programı Avantajları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİşletmelerin yeni alacağı personelin maaş ve primlerinin belirli süre İŞKUR tarafından karşılanması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "kosgeb-destekleri-girisimciler",
    "title": "Yeni Girişimciler İçin KOSGEB Destekleri",
    "description": "Yeni şahıs veya limited şirket kuran girişimcilerin KOSGEB'den alabileceği kuruluş ve makine hibeleri.",
    "category": "Muhasebe",
    "tags": [
      "KOSGEB",
      "Girişimci Desteği",
      "Hibe",
      "Girişimcilik"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Yeni Girişimciler İçin KOSGEB Destekleri**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYeni şahıs veya limited şirket kuran girişimcilerin KOSGEB'den alabileceği kuruluş ve makine hibeleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "barkod-sistemi-depolarda",
    "title": "Depo Operasyonlarında Barkod Sisteminin Önemi",
    "description": "Depo giriş ve çıkışlarında el terminalleri ve barkod okuyucular kullanarak hata payını sıfırlama.",
    "category": "Lojistik",
    "tags": [
      "Barkod Sistemi",
      "Depo Takibi",
      "Lojistik",
      "Veri Girişi"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Depo Operasyonlarında Barkod Sisteminin Önemi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nDepo giriş ve çıkışlarında el terminalleri ve barkod okuyucular kullanarak hata payını sıfırlama.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "stok-takibi-excel-formulleri",
    "title": "Excel ile Stok Takibi Yaparken Kullanılan Pratik Formüller",
    "description": "Excel'de `SUMIF` ve `VLOOKUP` formülleri kullanarak basit, pratik ve hatasız stok yönetim tablosu yapımı.",
    "category": "Yazılım & ERP",
    "tags": [
      "Excel Stok",
      "Excel",
      "Ön Muhasebe",
      "Stok Yönetimi"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Excel ile Stok Takibi Yaparken Kullanılan Pratik Formüller**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nExcel'de `SUMIF` ve `VLOOKUP` formülleri kullanarak basit, pratik ve hatasız stok yönetim tablosu yapımı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "fifo-lifo-stok-degerleme",
    "title": "FIFO ve LIFO Stok Değerleme Yöntemleri Nedir?",
    "description": "İlk giren ilk çıkar (FIFO) ve son giren ilk çıkar (LIFO) stok maliyeti hesaplama mantıkları.",
    "category": "Lojistik",
    "tags": [
      "FIFO",
      "LIFO",
      "Stok Maliyeti",
      "Lojistik"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**FIFO ve LIFO Stok Değerleme Yöntemleri Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİlk giren ilk çıkar (FIFO) ve son giren ilk çıkar (LIFO) stok maliyeti hesaplama mantıkları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "konsinye-satis-nedir",
    "title": "Konsinye Satış Nedir? Faturası Ne Zaman Kesilir?",
    "description": "Mülkiyeti sizde kalmak üzere müşteriye gönderilen ve satıldıkça faturası kesilen konsinye mal mantığı.",
    "category": "Muhasebe",
    "tags": [
      "Konsinye",
      "Fatura Zamanı",
      "Ön Muhasebe",
      "Satış"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Konsinye Satış Nedir? Faturası Ne Zaman Kesilir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nMülkiyeti sizde kalmak üzere müşteriye gönderilen ve satıldıkça faturası kesilen konsinye mal mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "finansal-kiralama-leasing",
    "title": "Leasing (Finansal Kiralama) Nedir? Avantajları",
    "description": "Şirketlerin yatırım mallarını (makine, araç) satın almak yerine uzun vadeli kiralama ile edinme yöntemi.",
    "category": "Muhasebe",
    "tags": [
      "Leasing",
      "Kiralama",
      "Yatırım",
      "Finans"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Leasing (Finansal Kiralama) Nedir? Avantajları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirketlerin yatırım mallarını (makine, araç) satın almak yerine uzun vadeli kiralama ile edinme yöntemi.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "faktoring-nedir",
    "title": "Faktoring Nedir? Çek Kırdırma İşlemi Nasıl Yapılır?",
    "description": "Vadeli alacakların ve çeklerin faktoring şirketlerine temlik edilerek nakde çevrilmesi süreçleri.",
    "category": "Muhasebe",
    "tags": [
      "Faktoring",
      "Çek Kırdırma",
      "Nakit Akışı",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Faktoring Nedir? Çek Kırdırma İşlemi Nasıl Yapılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nVadeli alacakların ve çeklerin faktoring şirketlerine temlik edilerek nakde çevrilmesi süreçleri.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "teminat-mektubu-nedir",
    "title": "Teminat Mektubu Nedir? Banka Teminat Çeşitleri",
    "description": "İhalelere katılırken veya bayilik alırken bankalardan alınan resmi ödeme garanti belgelerinin mantığı.",
    "category": "Muhasebe",
    "tags": [
      "Teminat Mektubu",
      "Banka",
      "Garanti",
      "Finans"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Teminat Mektubu Nedir? Banka Teminat Çeşitleri**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nİhalelere katılırken veya bayilik alırken bankalardan alınan resmi ödeme garanti belgelerinin mantığı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "amortisman-yontemleri-normal-hizli",
    "title": "Normal Amortisman ve Azalan Bakiyeler Yöntemi",
    "description": "Demirbaş yıpranma payını eşit yıllara bölmek ile ilk yıllarda daha hızlı gider yazma yöntemlerinin farkı.",
    "category": "Muhasebe",
    "tags": [
      "Normal Amortisman",
      "Azalan Bakiyeler",
      "Gider",
      "Ön Muhasebe"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Normal Amortisman ve Azalan Bakiyeler Yöntemi**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nDemirbaş yıpranma payını eşit yıllara bölmek ile ilk yıllarda daha hızlı gider yazma yöntemlerinin farkı.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "vergi-matrahi-ve-vergi-farki",
    "title": "Matrah Artırımı Nedir? Neden Yapılır?",
    "description": "Şirketlerin geçmiş yıllara ait vergi matrahlarını gönüllü artırarak vergi incelemesi riskini sıfırlaması.",
    "category": "Muhasebe",
    "tags": [
      "Matrah Artırımı",
      "Vergi Barışı",
      "Ön Muhasebe",
      "KOBİ"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Matrah Artırımı Nedir? Neden Yapılır?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirketlerin geçmiş yıllara ait vergi matrahlarını gönüllü artırarak vergi incelemesi riskini sıfırlaması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "vergi-barisi-nedir",
    "title": "Vergi Yapılandırması ve Vergi Barışı Nedir?",
    "description": "Gecikmiş vergi borçlarının faizlerinin silinerek taksitlendirilmesini sağlayan yasal yapılandırmalar.",
    "category": "Muhasebe",
    "tags": [
      "Vergi Yapılandırma",
      "Taksitlendirme",
      "Ön Muhasebe",
      "Borçlar"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Vergi Yapılandırması ve Vergi Barışı Nedir?**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nGecikmiş vergi borçlarının faizlerinin silinerek taksitlendirilmesini sağlayan yasal yapılandırmalar.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "esnaf-muafiyeti-sartlari",
    "title": "Evden Üretim Yapanlar İçin Esnaf Muafiyeti Şartları",
    "description": "Evde dikiş, örgü veya yemek yapıp internetten satanların vergi ödemeden esnaf muafiyeti belgesi alması.",
    "category": "Muhasebe",
    "tags": [
      "Esnaf Muafiyeti",
      "Evde Üretim",
      "Vergisiz Satış",
      "Girişimcilik"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Evden Üretim Yapanlar İçin Esnaf Muafiyeti Şartları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nEvde dikiş, örgü veya yemek yapıp internetten satanların vergi ödemeden esnaf muafiyeti belgesi alması.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "genc-girisimci-bagkur-destegi",
    "title": "Genç Girişimci 1 Yıllık Bağkur Desteği Detayları",
    "description": "Şirket kuran 29 yaş altı gençlerin 12 ay boyunca cebinden tek kuruş Bağkur primi çıkmamasının yolları.",
    "category": "Muhasebe",
    "tags": [
      "Bağkur Teşviki",
      "Genç Girişimci",
      "Destek",
      "Şahıs Şirketi"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Genç Girişimci 1 Yıllık Bağkur Desteği Detayları**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nŞirket kuran 29 yaş altı gençlerin 12 ay boyunca cebinden tek kuruş Bağkur primi çıkmamasının yolları.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "on-muhasebe-meslek-gelecegi",
    "title": "Dijitalleşen Dünyada Ön Muhasebe Mesleğinin Geleceği",
    "description": "Yapay zeka ve e-Belge sistemleriyle evrilen ön muhasebe mesleğinde aranan yeni nesil dijital yetkinlikler.",
    "category": "Gelişim & Öğrenci",
    "tags": [
      "Meslek Geleceği",
      "Dijital Dönüşüm",
      "Ön Muhasebe",
      "Gelişim"
    ],
    "date": "02 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Dijitalleşen Dünyada Ön Muhasebe Mesleğinin Geleceği**, ön muhasebede ve KOBİ yönetiminde en çok karşılaşılan ve hızlıca çözülmesi gereken konulardan biridir. Bu yazıda, konunun temel mantığını ve günlük hayatta uygulayabileceğiniz pratik çözümleri derledim.\n\n### 1. Temel Tanım ve Mantık\nYapay zeka ve e-Belge sistemleriyle evrilen ön muhasebe mesleğinde aranan yeni nesil dijital yetkinlikler.\n* **Pratik Kural:** Konuyu karmaşık terimlerden arındırıp en basit haliyle ele almak, hata payını sıfıra indirir.\n* **Günü Gününe Takip:** Tüm resmi evrakları ve süreçleri günü gününe kaydetmek işletmenizin finansal sağlığı için kritiktir.\n\n### 2. Uygulama ve Dikkat Edilmesi Gerekenler\nBu süreçleri yönetirken aşağıdaki kritik başlıkları göz önünde bulundurmalısınız:\n* **Yasal Bildirimler:** Süre sınırlarına dikkat edin. Geciken her evrak cezai işlem riski taşır.\n* **Dijital Arşivleme:** Gelen ve giden tüm makbuz ve belgeleri bilgisayarınızda düzenli aylık klasörlerde saklayın.\n\n### 📝 Ön Muhasebe İpucu:\nHer zaman verilerinizde çift kontrol mekanizması kurun. İşlemi yaptıktan sonra genel bakiye veya ekstrenin doğruluğunu son kez teyit edin."
  },
  {
    "id": "net-maas-brut-maas-farki",
    "title": "Net Maaş ile Brüt Maaş Arasındaki Fark Nedir?",
    "description": "İş görüşmelerinde ve bordroda karşımıza çıkan brüt ücret ile cebe giren net ücretin en sade açıklaması.",
    "category": "Muhasebe",
    "tags": [
      "Maaş",
      "Bordro",
      "Özlük Hakları",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "İş hayatında maaş konuşurken iki terimle karşılaşırız: **Brüt Maaş** ve **Net Maaş**.\n\n### Brüt Maaş Nedir?\nİşverenin cebinden çıkan, çalışana ödenen toplam para miktarıdır. Brüt maaşın içinde henüz vergiler ve sosyal güvenlik primleri kesilmemiştir.\n* *Brüt Maaş = Net Maaş + SGK İşçi Payı + İşsizlik Sigortası İşçi Payı + Gelir Vergisi + Damga Vergisi*\n\n### Net Maaş Nedir?\nTüm yasal kesintiler (SGK, İşsizlik fonu, Gelir Vergisi vb.) yapıldıktan sonra çalışanın banka hesabına yatan, yani **cebe giren net nakit** miktarıdır.\n\n### 📝 Pratik Kural:\nEğer iş teklifini \"Brüt\" üzerinden kabul ederseniz, yıl içinde gelir vergisi dilimleri arttıkça (genelde yaz aylarından itibaren) elinize geçen net maaş tutarı düşecektir."
  },
  {
    "id": "kidem-tazminati-nasil-hesaplanir",
    "title": "Kıdem Tazminatı Nasıl Hesaplanır? Temel Şartlar",
    "description": "İşten ayrılan veya çıkarılan çalışanların hak ettiği kıdem tazminatı hesaplama mantığı ve yasal şartları.",
    "category": "Muhasebe",
    "tags": [
      "Kıdem Tazminatı",
      "Bordro",
      "Özlük Hakları",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kıdem Tazminatı**, bir işyerinde en az 1 yıl çalışmış olan işçinin, yasada belirtilen şartlarla iş sözleşmesinin sona ermesi durumunda işveren tarafından ödenen toplu paradır.\n\n### Temel Şartlar Nelerdir?\n* Aynı işverene bağlı olarak en az **1 tam yıl** çalışmış olmak.\n* İşten haklı bir sebep olmaksızın çıkarılmış olmak veya emeklilik, askerlik, evlilik (kadın çalışanlar için 1 yıl içinde) gibi yasal sebeplerle ayrılmak.\n\n### En Basit Hesaplama Mantığı:\nHer çalışılan tam yıl için çalışanın en son aldığı **30 günlük brüt giydirilmiş ücreti** tutarında tazminat ödenir. Yıldan arta kalan aylar ve günler de oranlanarak hesaba dahil edilir.\n* *Kıdem Tazminatı = Brüt Maaş * Çalışılan Yıl Sayısı*\n* Bu tutardan sadece **Binde 7,53** oranında Damga Vergisi kesilir. Başka hiçbir vergi kesilemez."
  },
  {
    "id": "ihbar-tazminati-nedir",
    "title": "İhbar Tazminatı Nedir? İhbar Süreleri Ne Kadardır?",
    "description": "İşten ayrılmadan veya çıkarılmadan önce verilmesi gereken bildirim süreleri ve ihlalindeki cezai tazminat.",
    "category": "Muhasebe",
    "tags": [
      "İhbar Tazminatı",
      "Bordro",
      "Özlük Hakları",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**İhbar Tazminatı**, işçi veya işveren tarafının, iş sözleşmesini feshetmeden önce yasanın öngördüğü **bildirim sürelerine** uymaması durumunda karşı tarafa ödemek zorunda olduğu tazminattır.\n\n### Yasal İhbar Süreleri Nelerdir?\nÇalışanın o işyerindeki kıdemine göre ihbar süreleri değişir:\n* **6 aydan az çalışanlar için:** 2 hafta\n* **6 ay ile 1,5 yıl arası çalışanlar için:** 4 hafta\n* **1,5 yıl ile 3 yıl arası çalışanlar için:** 6 hafta\n* **3 yıldan fazla çalışanlar için:** 8 hafta\n\n### Hesaplama Nasıl Yapılır?\nEğer işveren işçiyi bildirim süresini beklemeden anında kapının önüne koyarsa, yukarıdaki haftalara karşılık gelen brüt ücret tutarını **İhbar Tazminatı** olarak peşin öder. Çalışan da aynı şekilde haber vermeden giderse işverene bu tazminatı ödemek zorunda kalabilir. Bu tazminattan Gelir Vergisi ve Damga Vergisi kesintisi yapılır."
  },
  {
    "id": "yillik-izin-haklari",
    "title": "Yıllık İzin Hakkı Kaç Gündür? Nasıl Kullanılır?",
    "description": "Çalışanların kıdemlerine göre hak ettikleri yıllık ücretli izin süreleri ve kullanım kuralları.",
    "category": "Muhasebe",
    "tags": [
      "Yıllık İzin",
      "Bordro",
      "Özlük Hakları",
      "İş Kanunu"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "İş Kanunu'na göre, deneme süresi dahil en az **1 yıl** çalışmış olan işçiler yıllık ücretli izin hakkı kazanırlar. Yıllık izin hakkından vazgeçilemez ve paraya çevrilemez (işten çıkış durumu hariç).\n\n### Çalışma Süresine Göre İzin Günleri:\n* **1 yıldan 5 yıla kadar (5 yıl dahil) çalışanlar için:** En az **14 gün**\n* **5 yıldan fazla, 15 yıldan az çalışanlar için:** En az **20 gün**\n* **15 yıl ve daha fazla çalışanlar için:** En az **26 gün**\n\n### 📝 Önemli Kurallar:\n* 18 yaşından küçük ve 50 yaşından büyük çalışanların yıllık izin süresi her halükarda **20 günden az olamaz**.\n* Yıllık izin süreleri işveren tarafından bölünemez ancak tarafların anlaşmasıyla bir bölümü **10 günden az olmamak üzere** en fazla üçe bölünebilir."
  },
  {
    "id": "e-fatura-ve-e-arsiv-farki",
    "title": "e-Fatura ile e-Arşiv Fatura Arasındaki Fark Nedir?",
    "description": "Ön muhasebeye yeni başlayanların en çok kafasını karıştıran iki dijital fatura türü arasındaki basit farklar.",
    "category": "Yazılım & ERP",
    "tags": [
      "e-Fatura",
      "e-Arşiv",
      "e-Belge",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "e-Fatura ve e-Arşiv fatura, her ikisi de dijital ortamda düzenlenen resmi belgelerdir. Ancak gönderildikleri alıcı kitleye göre ayrışırlar.\n\n### 1. e-Fatura Nedir?\n* **Alıcı:** Yalnızca **e-Fatura mükellefi olan** şirketlerdir.\n* **Gönderim:** Gelişmiş entegrasyonlar yardımıyla faturayı kestiğiniz an alıcı şirketin ERP gelen kutusuna doğrudan düşer. Sistem dışına çıkamaz.\n\n### 2. e-Arşiv Fatura Nedir?\n* **Alıcı:** e-Fatura mükellefi **olmayan** şahıslar, esnaflar veya nihai tüketicilerdir.\n* **Gönderim:** E-posta veya SMS yoluyla alıcıya ulaştırılır. Alıcı dilerse çıktısını alıp kağıt fatura gibi kullanabilir.\n\n### 📝 Basit Özet:\nKarşı taraf e-fatura kullanıcısı ise **e-Fatura**, değilse veya normal vatandaşa kesiliyorsa **e-Arşiv Fatura** düzenlenir. Sistemler (Mikro, Logo vb.) VKN/TCKN yazıldığında bu ayrımı otomatik yapar."
  },
  {
    "id": "e-irsaliye-nedir",
    "title": "e-İrsaliye Nedir? Ne Zaman Düzenlenmelidir?",
    "description": "Sevk irsaliyesinin dijital hali olan e-İrsaliye'nin kullanım zorunlulukları ve pratik kuralları.",
    "category": "Lojistik",
    "tags": [
      "e-İrsaliye",
      "Lojistik",
      "Ön Muhasebe",
      "Sevkiyat"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**e-İrsaliye**, mal sevkiyatı esnasında araçta bulunması yasal olarak zorunlu olan sevk irsaliyesinin elektronik ortamda düzenlenen halidir.\n\n### Ne Zaman Kesilir?\nBir malın bir depodan diğerine veya doğrudan alıcıya taşınması amacıyla yola çıkmadan **önce** düzenlenmelidir. Araç hareket etmeden e-İrsaliye onaylanmış olmalıdır.\n\n### Araçta Nasıl Bulundurulur?\ne-İrsaliye'nin çıktısının araçta bulunması zorunlu değildir. Sürücünün cep telefonunda veya tabletinde e-İrsaliye görselini ya da GİB **karekodunu (QR Code)** göstermesi trafik denetimlerinde yeterlidir.\n\n### 📝 Kritik Ceza Uyarısı:\nFiili sevk tarihi ve fiili sevk saati bilgisi yazılmadan gönderilen irsaliyeler geçersiz sayılabilir ve özel usulsüzlük cezasına yol açabilir. Mutlaka sevk saatini yazın!"
  },
  {
    "id": "fatura-iptal-ve-iade-surecleri",
    "title": "Fatura İptali ve İade Faturası Süreçleri",
    "description": "Hatalı kesilen bir faturayı iptal etme süreleri ve iade faturası kesmenin ön muhasebedeki basit adımları.",
    "category": "Muhasebe",
    "tags": [
      "Fatura İptali",
      "İade Faturası",
      "e-Belge",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Ticari hayatta hatalı fatura kesilmesi çok doğaldır. Bu hataları düzeltmenin iki yolu vardır: faturayı iptal etmek veya iade faturası istemek.\n\n### 1. e-Fatura İptal / Red Süresi\n* **Ticari Senaryo:** Alıcı firma faturayı **7 gün** içinde kendi portalından \"Reddet\" butonu ile iptal edebilir.\n* **Temel Senaryo:** Doğrudan reddedilemez. Alıcı ya size **İade Faturası** kesmeli ya da GİB Fatura İptal Portalı üzerinden iptal talebi oluşturulup karşılıklı onaylanmalıdır.\n\n### 2. e-Arşiv Fatura İptal Süresi\nDüzenlenen e-Arşiv faturası, düzenleme tarihini takip eden günün sonuna kadar (veya pratikte 7 gün içinde) portal üzerinden kolayca iptal edilebilir.\n\n### 📝 Özet Kural:\nSüre geçtiyse ve karşı taraf faturayı muhasebeleştirdiyse, tek çözüm karşı tarafın size **İade Faturası** kesmesidir. İade faturası kesilirken \"Faturanın İade Olduğu\" belirtilmeli ve asıl faturanın tarihi/numarası girilmelidir."
  },
  {
    "id": "proforma-fatura-nedir",
    "title": "Proforma Fatura Nedir? Teklif Mektubu Yerine Geçer mi?",
    "description": "Ticarette sıklıkla karşımıza çıkan ve yasal olarak fatura hükmünde olmayan proforma fatura mantığı.",
    "category": "Muhasebe",
    "tags": [
      "Proforma Fatura",
      "Teklif",
      "Ön Muhasebe",
      "Dış Ticaret"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Proforma Fatura**, hiçbir mali ve hukuki yükümlülüğü olmayan, sadece alıcıya sunulan bir **teklif veya ön fatura** niteliğindeki belgedir.\n\n### Yasal Hükmü Var mıdır?\nHayır! Proforma fatura yasal olarak bir fatura değildir. Üzerinde KDV beyan edilmez, muhasebe kaydı yapılmaz ve defterlere işlenmez. Sadece tarafların anlaşma şartlarını, fiyatı ve ödeme vadelerini gösteren şık bir teklif mektubudur.\n\n### Neden Kullanılır?\n* Alıcının bankadan kredi veya akreditif açtırabilmesi için ön evrak olarak istenir.\n* İthalat ve ihracat işlemlerinde gümrük beyanından önce tahmini masrafları görmek için talep edilir.\n\n### 📝 Pratik İpucu:\nProforma faturanın üzerine mutlaka büyük harflerle **\"PROFORMA FATURA / PROFORMA INVOICE\"** yazılmalı ve resmi faturayla karışmaması sağlanmalıdır."
  },
  {
    "id": "tevkifatli-fatura-nedir",
    "title": "Tevkifatlı Fatura Nedir? Hangi Sektörlerde Kesilir?",
    "description": "KDV tevkifatı kavramının ve verginin alıcı ile satıcı arasında paylaştırılma mantığının en sade hali.",
    "category": "Muhasebe",
    "tags": [
      "Tevkifat",
      "KDV",
      "Fatura",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Tevkifat**, kelime anlamıyla \"kesinti\" demektir. Faturadaki KDV tutarının tamamının satıcıya ödenmeyip, belirli bir oranının alıcı tarafından kesilerek doğrudan devlete ödenmesi işlemine **KDV Tevkifatı** denir.\n\n### Neden Yapılır?\nDevlet, vergi kaybını önlemek için bazı riskli veya denetimi zor sektörlerde (inşaat, temizlik, güvenlik, fason tekstil, danışmanlık) KDV'nin tahsilatını garanti altına almak ister.\n\n### Basit Hesaplama Örneği (5/10 Oranında):\n10.000 TL'lik bir faturada %20 KDV oranı olsun (2.000 TL KDV). Tevkifat oranı 5/10 (yani yarısı) ise:\n* **Satıcıya Ödenecek KDV:** 1.000 TL\n* **Satıcı Tarafından Beyan Edilecek KDV:** 1.000 TL (391 koduna)\n* **Alıcı Tarafından Beyan Edilip Devlete Ödenecek KDV:** 1.000 TL (KDV-2 beyannamesi ile)\n\n### 📝 Önemli:\nTevkifatlı fatura kesebilmek için iki tarafın da yasal şartlara ve belirlenen limitlere uyması zorunludur."
  },
  {
    "id": "cari-hesap-nedir",
    "title": "Cari Hesap Nedir? Ön Muhasebede Neden En Önemli Şeydir?",
    "description": "Müşterileriniz ve tedarikçilerinizle aranızdaki borç-alacak ilişkisini gösteren cari hesap mantığının en basit anlatımı.",
    "category": "Muhasebe",
    "tags": [
      "Cari Hesap",
      "Mutabakat",
      "Ön Muhasebe",
      "Esnaf İpuçları"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Cari Hesap**, bir işletmenin ticari ilişkide bulunduğu müşterileri, satıcıları veya bankaları ile arasındaki tüm borç ve alacak hareketlerini izlediği kişisel defter veya dijital kayıttır.\n\n### Cari Hesap Nasıl Çalışır?\n* **Borç Tarafı:** Karşı tarafa mal sattığınızda veya para verdiğinizde onun cari hesabına **Borç** yazılır. (O size borçlanır).\n* **Alacak Tarafı:** Karşı taraftan mal aldığınızda veya tahsilat yaptığınızda onun cari hesabına **Alacak** yazılır. (O alacaklı hale gelir veya borcu kapanır).\n\n### Neden Çok Önemlidir?\nCari hesapları düzenli tutmazsanız kimden ne kadar alacağınız olduğunu veya kime ne kadar borcunuz olduğunu göremezsiniz. Nakit akışınızı yönetemez ve ticari itibarınızı riske atarsınız.\n\n### 📝 Esnaf Kuralı:\nHer cari hareketi (fatura, ödeme, dekont) günü gününe sisteme girin. Geciken kayıtlar her zaman unutulur ve mutabakatta kafa karıştırır."
  },
  {
    "id": "cari-mutabakat-nasil-yapilir",
    "title": "Cari Mutabakat Nasıl Yapılır? Adım Adım Rehber",
    "description": "Cari hesaplardaki kuruşluk hataları bile bulup karşılıklı hesapları eşitlemenizi sağlayan cari mutabakat süreci.",
    "category": "Muhasebe",
    "tags": [
      "Cari Mutabakat",
      "Mutabakat",
      "Ön Muhasebe",
      "Finans Yönetimi"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Cari Mutabakat**, iki şirketin belirli bir tarih itibariyle karşılıklı cari hesap bakiyelerini karşılaştırarak borç ve alacak tutarlarında anlaşıp anlaşmadıklarını kontrol etme sürecidir.\n\n### Adım Adım Mutabakat Adımları:\n1. **Ekstre Çekin:** Karşılaştırmak istediğiniz döneme ait cari ekstrenizi ERP sisteminizden Excel formatında çekin.\n2. **Karşı Tarafa Gönderin:** Ekstreyi veya bakiye tutarını karşı tarafın ön muhasebe sorumlusuna mail atın.\n3. **Karşılaştırın:** Eğer bakiyeler tutmuyorsa, iki ekstreyi yan yana koyup gün gün fatura ve ödeme kayıtlarını eşleştirin. Fark yaratan hatalı veya eksik kaydı tespit edin.\n4. **Onaylayın:** Hesaplar eşitlendiğinde ıslak imzalı veya dijital onaylı bir **Mutabakat Mektubu** hazırlayarak süreci arşivleyin.\n\n### 📝 Pratik Kural:\nMutabakatları aylık periyotlarla yapmak, yıl sonunda binlerce satır veri arasında kaybolmanızı önler. Kuruşluk farkları dahi önemseyin!"
  },
  {
    "id": "muavin-defter-nasil-okunur",
    "title": "Muavin Defter Nasıl Okunur? Borç/Alacak Mantığı",
    "description": "Ön muhasebede en çok kullanılan detaylı hesap dökümü olan Muavin Defter okuma sanatı.",
    "category": "Muhasebe",
    "tags": [
      "Muavin Defter",
      "Defter",
      "Ön Muhasebe",
      "Excel"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Muavin Defter (Yardımcı Defter)**, genel muhasebedeki ana hesapların alt kırılımlarını gün ve saat detayında gösteren en ayrıntılı hesap döküm raporudur.\n\n### Muavin Defterdeki Sütunlar:\n* **Borç Sütunu:** Hesaba giren veya artış yaratan işlemler (Satış faturası vb.).\n* **Alacak Sütunu:** Hesaptan çıkan veya azalış yaratan işlemler (Tahsilat dekontu vb.).\n* **Bakiye Sütunu:** Borç ve alacak farkından kalan son güncel durumdur.\n\n### Nasıl Okunur?\n* Eğer bakiye **Borç Bakiyesi** veriyorsa, karşı taraftan alacaklısınız demektir.\n* Eğer bakiye **Alacak Bakiyesi** veriyorsa, karşı tarafa borçlusunuz demektir.\n* Bakiye sıfır ise hesap **kapanmış (mutabık)** demektir."
  },
  {
    "id": "cek-ve-senet-takibi",
    "title": "Çek ve Senet Takibinde Dikkat Edilmesi Gerekenler",
    "description": "Ön muhasebede vadeli tahsilat araçları olan çek ve senetlerin takibi, ciro süreçleri ve vade kontrolleri.",
    "category": "Muhasebe",
    "tags": [
      "Çek",
      "Senet",
      "Tahsilat",
      "Ön Muhasebe"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Çek** ve **Senet**, ticari hayatta vadeli ödemeler için kullanılan en yaygın kıymetli evraklardır. Çek genelde bir banka talimatı iken, senet iki şahıs arasındaki borç sözleşmesidir.\n\n### Çek Takibinde Altın Kurallar:\n* **Vade Kontrolü:** Çekin üzerindeki ödeme gününü (vadesini) sisteme ve takvime net olarak kaydedin. Çek gününden önce tahsil edilemez.\n* **Ciro İşlemi:** Çeki başka bir tedarikçiye ciro ederken arkasına mutlaka firmanızın kaşesini basıp imzalayın.\n* **Karşılıksız Çek Riski:** Çekin karşılıksız çıkması durumunda yasal işlem başlatabilmek için bankaya gününde ibraz edilmesi gerekir.\n\n### Senet Takibi:\nSenetlerde ödenmeme durumunda protesto süreleri çok kritiktir. Vadeden sonraki **3 iş günü** içinde protesto çekilmezse cirantalar sorumluluktan kurtulur."
  },
  {
    "id": "banka-ekstresi-muhasebelestirme",
    "title": "Banka Ekstresi Muhasebeleştirme ve Önemi",
    "description": "Şirket banka hesaplarının günü gününe muhasebe sistemine işlenmesinin nakit yönetimindeki önemi.",
    "category": "Muhasebe",
    "tags": [
      "Banka Ekstresi",
      "Banka",
      "Ön Muhasebe",
      "Nakit Yönetimi"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Banka Ekstresi**, şirketinizin banka hesaplarında gerçekleşen tüm para giriş ve çıkışlarını tarih, saat ve açıklama detayında gösteren resmi hesap dökümüdür.\n\n### Nasıl Muhasebeleştirilir?\nBanka hareketleri muhasebeye **102 Bankalar** hesabı kullanılarak işlenir.\n* Gelen Havale/EFT'ler **102 Borç** hanesine yazılır (Banka hesabı artar).\n* Giden Havale/EFT'ler **102 Alacak** hanesine yazılır (Banka hesabı azalır).\n* Karşılığında ilgili cari hesaplar (120/320) kapatılır.\n\n### 📝 Profesyonel İpucu:\nBanka işlemlerini haftalık veya aylık toplu işlemek yerine **günlük** işleyin. Otomatik banka entegrasyonu (API) kullanarak hataları sıfıra indirin."
  },
  {
    "id": "kasa-hesabi-altin-kurallari",
    "title": "Kasa Hesabı Tutmanın Altın Kuralları",
    "description": "Şirketin elindeki nakit parayı temsil eden kasa hesabının açık vermeden hatasız yönetilmesinin kuralları.",
    "category": "Muhasebe",
    "tags": [
      "Kasa",
      "Nakit",
      "Ön Muhasebe",
      "Esnaf İpuçları"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "**Kasa Hesabı**, işletmenizin ofisinde fiziki olarak bulunan nakit parayı takip ettiğiniz hesaptır. Ön muhasebenin en çok açık veren ve riskli alanıdır.\n\n### Altın Kurallar:\n* **Günlük Sayım:** Kasanızı her günün sonunda mutlaka fiziki olarak sayın ve sistem bakiyesiyle karşılaştırın.\n* **Belgesiz Nakit Çıkışı YASAK:** Kasadan çıkan her 1 TL için dahi mutlaka bir gider fişi, makbuz veya fatura olmak zorundadır. Belgesiz paraları hiçbir yere not etmeyin, sistemde açık yaratır.\n* **Yetki Sınırı:** Kasadan sorumlu tek bir kişi (Kasiyer) olmalıdır. Herkesin elini uzatabildiği bir kasada açıkların kaynağı asla bulunamaz.\n\n### 📝 Önemli Yasal Kural:\nMaliye bakanlığının belirlediği nakit ödeme limitini (genelde 7.000 TL) aşan tahsilat ve ödemelerin mutlaka banka veya aracı kurumlar üzerinden yapılması zorunludur."
  },
  {
    "id": "sahis-sirketi-vs-limited-sirket",
    "title": "Şahıs Şirketi ile Limited Şirket Arasındaki Farklar",
    "description": "Yeni iş kuracak girişimcilerin en çok sorduğu şahıs firması ile limited (LTD) şirket karşılaştırması.",
    "category": "Muhasebe",
    "tags": [
      "Şahıs Şirketi",
      "Limited Şirket",
      "Şirket Kurulumu",
      "KOBİ"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Yeni bir ticari faaliyete başlarken seçilecek şirket türü, maliyetlerinizi ve sorumluluklarınızı doğrudan belirler.\n\n### 1. Şahıs Şirketi (Bireysel Girişim)\n* **Kurulum:** Çok hızlı ve ucuzdur (1-2 günde kurulur).\n* **Vergilendirme:** Artan oranlı gelir vergisi tarifesine tabidir (%15'ten başlar %40'a kadar çıkar). Cironuz düşükse avantajlıdır.\n* **Sorumluluk:** Borçlardan tüm kişisel mal varlığınızla sorumlusunuzdur.\n\n### 2. Limited Şirket (LTD)\n* **Kurulum:** Kurulum maliyeti yüksektir, tescil süreçleri sürer. Minimum 50.000 TL sermaye şartı vardır.\n* **Vergilendirme:** Sabit oranlı Kurumlar Vergisine tabidir (genelde %25). Cironuz yüksekse çok daha az vergi ödersiniz.\n* **Sorumluluk:** Ortaklar sadece koydukları sermaye oranında sorumludur (kamu borçları hariç).\n\n### 📝 Karar Kuralı:\nYıllık kâr beklentiniz düşükse **Şahıs**, yüksek cirolu ve riskli bir iş yapacaksanız **Limited** şirket kurmak mantıklıdır."
  },
  {
    "id": "sirket-kurulus-maliyetleri",
    "title": "Yeni Şirket Kuruluş Maliyetleri Nelerdir?",
    "description": "Şirket açarken ödenecek harçlar, noter masrafları ve ilk kurulum esnasında çıkacak gizli giderler.",
    "category": "Muhasebe",
    "tags": [
      "Şirket Kurulumu",
      "Kuruluş Maliyeti",
      "Ön Muhasebe",
      "Girişimcilik"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Bir şirket kurmaya karar verdiğinizde sadece vergi dairesine kayıt açtırmak yetmez. Karşınıza belirli kurulum masrafları çıkacaktır.\n\n### Başlıca Kurulum Masrafları:\n* **Mali Müşavir Vekaleti:** Noterden çıkarılacak vekaletname ücreti.\n* **İmza Beyannamesi / Sirküleri:** Şirket adına imza yetkinizi gösteren noter evrakı.\n* **Vergi Dairesi Damga Vergisi:** Kira kontratı üzerinden doğan damga vergisi.\n* **Ticaret Odası Kayıt Harçları:** Limited ve Anonim şirketler için ticaret sicil tescil ve ilan giderleri.\n* **Mali Müşavir Hizmet Bedeli:** Kuruluş işlemlerini yürüten müşavire ödenen profesyonel bedel.\n\n### 📝 Önemli İpucu:\nSanal ofis veya home-office seçeneğini değerlendirmek, ilk kurulum aşamasındaki yüksek kira ve depo maliyetlerini ciddi oranda düşürür."
  },
  {
    "id": "genc-girisimci-tesviki-nedir",
    "title": "Genç Girişimci Desteği Desteği Nedir? Kimler Yararlanabilir?",
    "description": "29 yaş altı genç girişimciler için sağlanan dev vergi ve Bağkur prim muafiyeti detayları.",
    "category": "Muhasebe",
    "tags": [
      "Genç Girişimci",
      "Teşvik",
      "Vergi Muafiyeti",
      "Şahıs Şirketi"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Devletin gençlerin iş kurmasını kolaylaştırmak adına sunduğu en büyük avantajlardan biri **Genç Girişimci Desteği** uygulamasıdır.\n\n### Kimler Yararlanabilir?\n* İşe başlama tarihinde **18 yaşını doldurmuş** ve **29 yaşını bitirmemiş** olanlar.\n* İlk defa şahıs şirketi mükellefi olanlar (Daha önce adınıza şirket açılmamış olmalı).\n\n### Sağlanan Muazzam Avantajlar:\n1. **Vergi Muafiyeti:** Kurulum tarihinden itibaren **3 vergilendirme dönemi** boyunca elde ettiğiniz kazancın yıllık yasal sınır (örneğin 230.000 TL) kadarlık kısmı gelir vergisinden muaftır.\n2. **Bağkur Muafiyeti:** Şirket açılışından itibaren **1 yıl** boyunca Bağkur primleriniz (her ay yaklaşık 6.000 TL+) devlet tarafından ödenir.\n\n### 📝 Girişimci İpucu:\nOrtaklık kuruyorsanız, teşvikten yararlanabilmek için tüm ortakların yaş ve diğer yasal kriterleri birebir karşılaması şarttır."
  },
  {
    "id": "bagkur-ve-sgk-farklari",
    "title": "Bağkur (4B) ve SGK (4A) Arasındaki Farklar Nelerdir?",
    "description": "Kendi işini kuran esnafın ödediği Bağkur primleri ile sigortalı çalışanların SGK prim farkları.",
    "category": "Muhasebe",
    "tags": [
      "Bağkur",
      "SGK",
      "Sosyal Güvenlik",
      "Özlük Hakları"
    ],
    "date": "01 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Türkiye'de sosyal güvenlik sisteminde iki temel prim türü bulunur: Çalışanların tabi olduğu **SGK (4A)** ve işveren/esnafın tabi olduğu **Bağkur (4B)**.\n\n### 1. SGK (4A) - Sigortalı Çalışanlar\n* Bir işyerinde sözleşmeli ve maaşlı çalışan kişilerin tabi olduğu sistemdir.\n* Primleri işveren tarafından ödenir ve takip edilir.\n* Emeklilik için gün şartı Bağkur'a göre daha düşüktür.\n\n### 2. Bağkur (4B) - Kendi İşinin Sahibi Olanlar\n* Şahıs firması kuranlar, limited şirket ortakları veya esnafların tabi olduğu sistemdir.\n* Primleri doğrudan kişi tarafından her ay bankaya ödenir.\n* Emeklilik için daha fazla prim günü (örneğin 9000 gün) biriktirilmesi gerekir.\n\n### 📝 Altın Kural:\nBir şahıs şirketiniz varsa ancak başka bir şirkette SGK'lı (4A) olarak çalışmaya başlarsanız, o süre boyunca kendi şirketinizden dolayı Bağkur primi ödemezsiniz!"
  },
  {
    "id": "gaziantep-ihracat-faturasi-ve-dab-takibi",
    "title": "Gaziantep Ticaretinde İhracat Faturası ve DAB (Döviz Alım Belgesi) Takibi",
    "description": "Gaziantep sanayi ve ihracat ekosisteminde alış-satış, ihracat faturalarının kesilmesi ve Döviz Alım Belgesi (DAB) süreçlerinin ön muhasebedeki pratik yönetimi.",
    "category": "Muhasebe",
    "tags": ["İhracat","DAB","e-Fatura","Gaziantep"],
    "date": "26 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Gaziantep, Türkiye'nin en büyük ihracat merkezlerinden biridir. İhracat operasyonlarında ön muhasebe çalışanlarının en çok dikkat etmesi gereken süreç ihracat faturası ve DAB (Döviz Alım Belgesi) takibidir.\n\n### İhracat Faturası Keserken Dikkat Edilecekler\n* **KDV Muafiyeti:** İhracat faturaları KDV'siz (KDV İstisna Kodu ile) düzenlenir.\n* **Gümrük Beyannamesi Uyumu:** Fatura üzerindeki kap adedi, kilo ve mal bedeli gümrük beyannamesiyle birebir eşleşmelidir.\n\n### DAB (Döviz Alım Belgesi) Nedir?\nİhracat bedellerinin yurda getirilmesinin ardından bankalarca düzenlenen resmi belgedir. Ön muhasebede gelen bedelin hangi ihracat faturasına ait olduğu milimetrik takip edilmeli, gelir-gider kayıtları banka mutabakatlarıyla senkronize işlenmelidir."
  },
  {
    "id": "gaziantep-lojistik-arac-giris-cikis-takibi",
    "title": "Gaziantep Nakliye ve Lojistik Sektöründe Araç Giriş-Çıkış ve Veri Giriş Süreçleri",
    "description": "Lojistik operasyonlarında araç giriş-çıkış süreçlerinin sistem üzerinden takibi, düzenli veri girişi ve sevkiyat planlama operasyonları.",
    "category": "Lojistik",
    "tags": ["Lojistik","Veri Girişi","Araç Takip","Gaziantep"],
    "date": "26 Mayıs 2026",
    "readTime": "2 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Gaziantep'in lojistik ve sevkiyat ağlarında operasyonun sıfır hatayla yürümesi, araç giriş-çıkış verilerinin sisteme doğru işlenmesine bağlıdır.\n\n### Operasyonel Veri Girişinin Önemi\n* **Zaman Takibi:** Araçların tesise giriş ve çıkış saatlerinin kaydedilmesi, lojistik verimlilik analizi için şarttır.\n* **İrsaliye ve Evrak Kontrolü:** Gelen veya giden her aracın irsaliye kontrolleri ve yük bilgileri sisteme anında girilmelidir.\nSistem üzerinden yapılan düzenli veri girişleri, depoların stok durumunu ve sevkiyat planlamasını doğrudan korur."
  },
  {
    "id": "gaziantep-kobi-mikro-logo-e-fatura",
    "title": "Gaziantep KOBİ'leri İçin Mikro ve Logo Üzerinden e-Fatura Yönetimi",
    "description": "Gaziantep'teki ticari işletmelerde Mikro ve Logo ERP programları ile Nes Portal entegratörü üzerinden e-fatura ve e-arşiv süreçlerinin pratik işleyişi.",
    "category": "Yazılım & ERP",
    "tags": ["Mikro","Logo","Nes Portal","e-Fatura","Gaziantep"],
    "date": "26 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "Gaziantep sanayisindeki KOBİ'lerin dijital dönüşümünde Mikro ve Logo yazılımları ile Nes Portal gibi entegratörlerin rolü büyüktür. Günlük ön muhasebe operasyonlarında fatura kesim işlemlerinin hatasız yürümesi ticari sağlığı korur.\n\n### e-Belge Süreçlerinde Altın Kurallar\n* **Cari Bilgi Kontrolü:** Fatura kesilmeden önce karşı tarafın e-fatura mükellefi olup olmadığı sistemden sorgulanmalıdır.\n* **7 Gün Kuralı:** Faturanın malın teslim veya hizmetin ifa tarihinden itibaren en geç 7 gün içinde kesilmesi zorunludur.\nMikro ve Logo üzerinde doğru cari eşleştirmeleriyle fatura iptal ve iade süreçleri minimuma indirilebilir."
  },
  {
    "id": "gaziantep-resmi-kurum-evrak-trafigi-ve-banka",
    "title": "Gaziantep'te İşletmeler İçin Resmi Kurum Evrak Trafiği ve Banka Mutabakatları",
    "description": "Şirketlerin banka işlemleri, finansal evrak takibi ve resmi kurumlarla olan evrak süreçlerinin ofis ve saha yönetim stratejileri.",
    "category": "Muhasebe",
    "tags": ["Banka Mutabakatı","Evrak Takibi","Resmi Kurum","Gaziantep"],
    "date": "26 Mayıs 2026",
    "readTime": "3 dk okuma",
    "author": "Nurullah Kartal",
    "content": "İşletmelerin finansal sağlığı, sadece bilgisayar başında değil, resmi kurumlar ve bankalarla olan evrak trafiğinin de doğru yönetilmesiyle korunur.\n\n### Banka ve Resmi Evrak Süreçleri\n* **Banka Mutabakatı:** Günlük banka ekstreleri ile ön muhasebe kayıtlarındaki borç/alacak bakiyeleri düzenli olarak karşılaştırılmalıdır.\n* **Resmi Kurum Evrakları:** Vergi dairesi, ticaret odası veya diğer resmi kurumlarla olan evrak trafiği, yasal süreler kaçırılmadan arşivlenip dosyalanmalıdır.\nSaha ve ofis arasındaki evrak senkronizasyonu, olası idari ve finansal risklerin önüne geçer."
  }
];
