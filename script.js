document.addEventListener('DOMContentLoaded', () => {
  
  // =========================================
  // ORTAK İŞLEMLER (Menü, Reveal Animasyonu)
  // =========================================
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);
    revealElements.forEach(el => revealOnScroll.observe(el));
  }

  // =========================================
  // TÜM ÜRÜN VERİLERİ (21-37 Güncellendi)
  // =========================================
  const urunler = [
    { id: 1, title: "Geleneksel Dövme Bakır Cezve", desc: "Ustalıkla dövülmüş bakır gövdesi ve şık ahşap sapıyla, kahvenizi en otantik haliyle pişirmenizi sağlar.", cat: "cezve" },
    { id: 2, title: "Gümüş Rengi İşlemeli Bakır Cezve", desc: "Klasik bakır cezvelerden farklı olarak gümüş rengi kaplaması ve ince dövme desenleriyle mutfağınıza modern bir dokunuş katar.", cat: "cezve" },
    { id: 3, title: "Mini Bakır Cezve Koleksiyonu", desc: "Farklı ebat ve desenlerdeki el yapımı mini bakır cezvelerimiz, hem koleksiyonluk hem de tek kişilik kahve keyifleri için idealdir.", cat: "cezve" },
    { id: 4, title: "Antik Görünümlü İşlemeli Bakır İbrik", desc: "Vintage tarzı kabartma desenleriyle göz alıcı bir tasarıma sahiptir.", cat: "cezve" },
    { id: 5, title: "Renkli Osmanlı Motifli Çaydanlık", desc: "Geleneksel Osmanlı ve Türk motiflerinin canlı renklerle buluştuğu bu çaydanlık, çay saatlerinize sanatsal bir hava katacak.", cat: "caydanlik" },
    { id: 6, title: "Altın Yaldızlı Beyaz Çaydanlık Takımı", desc: "Zarif altın yaldız detayları ve klasik beyaz rengiyle sofralarınıza asalet katan bir takım.", cat: "caydanlik" },
    { id: 7, title: "Kapaklı İşlemeli Bakır Şekerlik", desc: "İnce el işçiliğiyle oyulmuş kapak desenleri ve parlak bakır dokusuyla dikkat çeker.", cat: "tabak" },
    { id: 8, title: "Bakır Cezve ve Fincan ile Kahve Sunumu", desc: "Geleneksel bakır cezvenin sıcaklığını, özel tasarımlı fincana aktararak unutulmaz bir kahve sunumu hazırlayın.", cat: "cezve" },
    { id: 9, title: "Parlak Yüzeyli Dövme Bakır Cezve", desc: "Pürüzsüz ve parlak dış yüzeyi, sağlam ahşap sapı ile hem estetik hem de kullanışlı bir üründür.", cat: "cezve" },
    { id: 10, title: "Otantik Bakır Çaydanlık Modelleri", desc: "Kapalı çarşı havasını mutfağınıza taşıyan, farklı desen ve formlardaki bakır çaydanlıklarımız.", cat: "caydanlik" },
    { id: 11, title: "Osmanlı Desenli Kapaklı Bardak Seti", desc: "Koyu zemin üzerine işlenmiş rengarenk Osmanlı motifleriyle büyüleyici bir görünüm sunar.", cat: "bardak" },
    { id: 12, title: "Pirinç Kaplama Çaydanlık Takımı", desc: "Işıltılı pirinç rengi ve işlemeli detaylarıyla göz kamaştıran bu takım, zengin bir çay sunumu arayanlar için mükemmeldir.", cat: "caydanlik" },
    { id: 13, title: "Dövme Bakır İşlemeli Bardak Seti", desc: "Sıcak veya soğuk içecekleriniz için el dövmesi bakırdan üretilmiş, desenli bardaklar.", cat: "bardak" },
    { id: 14, title: "İşlemeli Kapaklı Bakır Kaseler", desc: "Geleneksel tezgah görünümündeki bu kapaklı kaseler, hem sunum hem de saklama kabı olarak idealdir.", cat: "tabak" },
    { id: 15, title: "Bakır Fincan ve Tabak Takımı", desc: "Kahvenizi geleneksel bir sunumla içmek isteyenler için özel tasarım fincan ve tabak ikilisi.", cat: "bardak" },
    { id: 16, title: "Bakır Sunum Tepsisi ve Kahve Seti", desc: "Tepsisi, fincanı ve şekerliği ile komple bir kahve sunum seti.", cat: "tabak" },
    { id: 17, title: "Bakır Sürahi / Maşrapa", desc: "Su, ayran veya soğuk içeceklerinizi servis etmek için kullanabileceğiniz, parlak bakır sürahi.", cat: "tabak" },
    { id: 18, title: "Kapaklı İşlemeli Bakır Buhurdan", desc: "Delikli ve desenli kapağı sayesinde ister buhurdan, ister şekerlik olarak kullanın.", cat: "tabak" },
    { id: 19, title: "Bakır Çay Süzgeci Seti", desc: "Uzun saplı, delikli bakır gövdeleriyle çay demlerken pratiklik sağlar.", cat: "tabak" },
    { id: 20, title: "Kabartma Desenli Bakır Kupa", desc: "Rahat tutuşlu kulpu ve gövdesindeki figürlü kabartma işçiliğiyle öne çıkan bakır kupa.", cat: "bardak" },
    
    // YENİ EKLENEN 21-37 ARASI ÜRÜNLER
    { id: 21, title: "İşlemeli Gövdeli Klasik Bakır Semaver", desc: "El dövmesi zarif desenleri, ahşap sapları ve klasik formuyla göz alıcı bir parça. Hem dekoratif bir obje hem de çay demlemek için kullanışlı bir semaverdir.", cat: "caydanlik" },
    { id: 22, title: "Osmanlı Motifli Çift Katlı Bakır Çaydanlık", desc: "Üst demlik ve alt su ısıtıcısından oluşan, zengin kabartma desenli özel tasarım set. Çay keyfinize otantik ve asil bir hava katar.", cat: "caydanlik" },
    { id: 23, title: "Ahşap Tepsili Bakır Çay ve Bardak Seti", desc: "Özel işlemeli bakır çaydanlık ve geleneksel desenli bardaklarıyla komple sunum seti. Misafirlerinize unutulmaz bir çay ikramı sunmak için idealdir.", cat: "caydanlik" },
    { id: 24, title: "Kırmızı Mineli Altın Yaldızlı Çaydanlık", desc: "Canlı kırmızı rengi ve göz alıcı altın yaldız detaylarıyla mutfağınıza renk katacak özel tasarım bir çaydanlık. Vintage sevenler için harika bir seçim.", cat: "caydanlik" },
    { id: 25, title: "Ahşap Standlı Dekoratif Bakır Tabak Seti", desc: "İnce işçilikle süslenmiş farklı boyutlardaki tabaklar, şık ahşap standıyla duvar veya tezgah dekorasyonunuzu tamamlar. Hediyelik olarak da mükemmeldir.", cat: "tabak" },
    { id: 26, title: "Hat Sanatlı Dev Bakır Sunum Tepsisi", desc: "Merkezindeki özel hat işlemesi ve geleneksel motifleriyle dikkat çeken büyük boy bakır tepsi. Sofralarınızda sunum veya dekorasyon için muhteşem bir parça.", cat: "tabak" },
    { id: 27, title: "Otantik Bakır Mutfak Eşyaları Koleksiyonu", desc: "Farklı form ve desenlerdeki cezveler, sürahiler ve bardaklardan oluşan zengin koleksiyon. Mutfağınıza sıcak, el yapımı bir dokunuş katın.", cat: "cezve" },
    { id: 28, title: "Bakır Ürünler ve Hediyelik Paket Koleksiyonu", desc: "Özenle paketlenmiş hediyelik ürünlerimiz ve el yapımı bakır aksesuarlarımızla sevdiklerinize unutulmaz, otantik armağanlar sunun.", cat: "tabak" },
    { id: 29, title: "Renkli Mineli Bakır Hediyelik Eşya Serisi", desc: "Küçük boyutlu, rengarenk minelerle ve el işçiliğiyle süslenmiş bakır objeler. Koleksiyonluk veya özel günler için hediyelik olarak idealdir.", cat: "tabak" },
    { id: 30, title: "Geleneksel Bakır Kahve Ekipmanları Vitrini", desc: "Cezveler, fincanlar ve şekerliklerden oluşan bu zengin koleksiyon, kahve tutkunları ve otantik sunumlar arayanlar için harika bir seçenektir.", cat: "cezve" },
    { id: 31, title: "Parlak İşlemeli Bakır Sürahi ve Kase Takımları", desc: "El işçiliğiyle şekillendirilmiş parlak bakır sürahiler ve kaseler ile sofralarınıza şıklık katın. Su, ayran veya çeşitli içeceklerin sunumu için kullanışlıdır.", cat: "tabak" },
    { id: 32, title: "Osmanlı Desenli Mineli Bakır Saklama Kutuları", desc: "Canlı renkleri ve zengin motifleriyle takı, baharat veya küçük eşyalarınızı saklayabileceğiniz dekoratif bakır kutular. Evinize nostaljik bir hava katar.", cat: "tabak" },
    { id: 33, title: "Mavi ve Altın İşlemeli Bakır Hediye Setleri", desc: "Özel kutularında sunulan, zarif mavi ve altın renk detaylarına sahip bakır fincan veya tabak setleri. Şık bir hediye alternatifi arayanlar için birebir.", cat: "bardak" },
    { id: 34, title: "Gümüş İşlemeli Kutu ve Fincan Modelleri", desc: "Modern çizgilere sahip gümüş rengi işlemeleriyle dikkat çeken, şık ve kullanışlı bakır ürünler. Hem çeyizlik hem de kişisel kullanım için uygundur.", cat: "bardak" },
    { id: 35, title: "Çini Desenli Bakır Bardak Koleksiyonu", desc: "Geleneksel çini motifleriyle süslenmiş, rengarenk bakır bardaklar. Çay ve kahve servislerinize sanatsal bir boyut kazandıracak eşsiz parçalar.", cat: "bardak" },
    { id: 36, title: "Geniş Bakır Ürün Yelpazesi ve Mağaza Konsepti", desc: "Geleneksel yöntemlerle üretilmiş, her biri birbirinden özel bakır mutfak ve dekorasyon ürünlerimizi keşfedin. Atölyemizden özenle seçilmiş parçalar.", cat: "tabak" },
    { id: 37, title: "El Sanatları Bakır Atölyesi ve Ürün Teşhiri", desc: "Yüzlerce el yapımı bakır ürünün, hediyelik eşyanın ve mutfak gereçlerinin bir arada sergilendiği özel koleksiyonumuz. İhtiyacınıza en uygun, kaliteli bakır parçaları bizden temin edebilirsiniz.", cat: "tabak" }
  ];

  // =========================================
  // 3D KAHVE KAYDIRMA EFEKTİ (BÜYÜYEREK KAYBOLMA)
  // =========================================
  const categorySection = document.getElementById('categories-section');
  const floatingItems = document.querySelectorAll('.floating-item');
  
  if (categorySection && floatingItems.length > 0) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth > 768) {
            const rect = categorySection.getBoundingClientRect();
            let progress = 0;
            if (rect.top < 0) progress = Math.abs(rect.top) / (window.innerHeight * 0.6); 
            progress = Math.min(1, Math.max(0, progress));

            floatingItems.forEach((item, index) => {
              const direction = index - 2; 
              
              const translateX = direction * 100 * progress; 
              const translateY = progress * 200; 
              const scale = 1 + (progress * 0.8); 
              const opacity = 1 - (progress * 1.2); 

              if (progress > 0.05) item.style.animation = 'none';
              else item.style.animation = ''; 

              item.style.transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
              item.style.opacity = Math.max(0, opacity);
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // =========================================
  // ANA SAYFA - ÖNE ÇIKAN ÜRÜNLER SLIDER
  // =========================================
  const featuredSlider = document.getElementById('featured-slider');
  
  if (featuredSlider) {
    const featuredProducts = urunler.slice(0, 6);

    featuredSlider.innerHTML = featuredProducts.map(p => `
      <div class="product-card">
        <div class="p-img"><img src="images/urunler/${p.id}.jpg" alt="${p.title}" loading="lazy" decoding="async"></div>
        <div class="p-details">
          <h3>${p.title}</h3>
          <div class="p-bottom">
            <span class="price" style="font-size: 0.85rem; color: #aaa;">Detayları Gör</span>
            <a href="urunler.html" class="add-btn" aria-label="Ürüne Git">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', () => {
        featuredSlider.scrollBy({ left: 260, behavior: 'smooth' });
      });
      prevBtn.addEventListener('click', () => {
        featuredSlider.scrollBy({ left: -260, behavior: 'smooth' });
      });
    }
  }

  // =========================================
  // ÜRÜNLER SAYFASI (KASMAYAN FİLTRELEME VE LIGHTBOX)
  // =========================================
  const productsGrid = document.getElementById('products-grid');
  
  if (productsGrid) {
    productsGrid.innerHTML = urunler.map(p => `
      <div class="product-card" data-category="${p.cat}" data-title="${p.title}">
        <div class="p-img"><img src="images/urunler/${p.id}.jpg" alt="${p.title}" loading="lazy" decoding="async"></div>
        <div class="p-details">
          <h3>${p.title}</h3>
          <p style="font-size:0.85rem; color:#7A7F8D; margin-top:5px;">${p.desc}</p>
        </div>
      </div>
    `).join('');

    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        productCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const closeBtn = document.querySelector('.lightbox-close');

    productCards.forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const title = card.getAttribute('data-title');
        lightboxImg.src = imgSrc;
        lightboxTitle.textContent = title;
        lightbox.classList.add('active');
      });
    });

    // Kapatınca resmi hafızadan sil (Performans için çok önemli)
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      setTimeout(() => { lightboxImg.src = ""; }, 300);
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => { lightboxImg.src = ""; }, 300);
      }
    });
  }
});