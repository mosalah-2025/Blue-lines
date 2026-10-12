// 02-header-and-functions: formatting-preserved compiled reference

document.addEventListener("DOMContentLoaded", function() {
  const currentUrl = window.location.pathname;
  const links = document.querySelectorAll(".nav-link");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // إنشاء الخلفية لما القائمة تفتح
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  // تحديد الزر النشط
  links.forEach(link => {
    if (link.getAttribute("href") === currentUrl || (currentUrl === "/" && link.getAttribute("href") === "/")) {
      link.classList.add("active");
    }
  });

  // فتح / غلق القائمة
  menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // إغلاق القائمة لما تضغط على الخلفية
  overlay.addEventListener("click", function() {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // إخفاء الهيدر الأصلي بتاع EasyOrders
  const easyHeader = document.querySelector("header.header, .header, #header");
  if (easyHeader) easyHeader.style.display = "none";
});



  function toggleBlockById(blockId) {
    const block = document.querySelector(`#${blockId}`);
    if (!block) return;
    const isHome = location.pathname === "/" || location.pathname === "/index.html";
    
    // التعديل الأساسي لضمان عدم خروج الصور تحت الكلام
    if (isHome) {
      if (blockId === "main-theme-section") {
        block.style.setProperty('display', 'flex', 'important');
      } else {
        block.style.display = "block";
      }
    } else {
      block.style.display = "none";
    }
  }

  function initHideBlocks(blockIds = []) {
    let tryCount = 0;
    const tryInterval = setInterval(() => {
      const allExist = blockIds.every(id => document.querySelector(`#${id}`));
      if (allExist || tryCount > 100) {
        clearInterval(tryInterval);
        blockIds.forEach(toggleBlockById);
      }
      tryCount++;
    }, 50);

    const toggleAll = () => blockIds.forEach(toggleBlockById);
    const observer = new MutationObserver(toggleAll);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('popstate', toggleAll);
    window.addEventListener('pushstate', toggleAll);
    window.addEventListener('replacestate', toggleAll);

    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        toggleAll();
      }
    }, 200);
  }

  // الاستدعاء
  initHideBlocks(["MainScrollSection", "clients", "CustomersSection", "main-theme-section", "videoBannerBlock", "partnersMarqueeSection", "professional-bio-section", "faqSection-v2", "bl-reviews", "bl-projects-container", "Themes", "pricing-section", "ts-theme-store-section", "Themes"]);




document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("scrollToTopBtn");
  const progressCircle = document.querySelector(".ring-progress");

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  function updateProgress() {

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    const offset = circumference - progress * circumference;

    progressCircle.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }

  }

  window.addEventListener("scroll", updateProgress);

});




document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
  });
});



// تأجيل تحميل السكريبتات التقيلة لحد ما الصفحة تحمل
document.addEventListener("DOMContentLoaded", function () {
    const scripts = [
        ...document.querySelectorAll('script[src*="facebook"], script[src*="fb"], script[src*="clarity"], script[src*="gtag"], script[src*="pixel"], script[src*="tiktok"], script[src*="analytics"]')
    ];

    scripts.forEach(script => {
        script.setAttribute("defer", "");
        script.setAttribute("loading", "lazy");
    });
});

// تحميل كل السكريبتات الخارجية بعد 3 ثواني فقط
setTimeout(() => {
    const lazyScripts = [
        "https://connect.facebook.net/en_US/fbevents.js",
        "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX",
        "https://www.clarity.ms/tag/XXXXXXXX"
    ];

    lazyScripts.forEach(src => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
    });
}, 3000);

// منع أي CSS مش مستخدم من أنه يعطّل اللود
document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.setAttribute("media", "print");
    setTimeout(() => link.setAttribute("media", "all"), 1);
});

// تحسين الخطوط (يرفع الأداء 10–20 نقطة)
let pre1 = document.createElement("link");
pre1.rel = "preconnect";
pre1.href = "https://fonts.gstatic.com";
pre1.crossOrigin = "anonymous";

let pre2 = document.createElement("link");
pre2.rel = "preconnect";
pre2.href = "https://fonts.googleapis.com";

document.head.appendChild(pre1);
document.head.appendChild(pre2);



// تفعيل خاصية تحميل الصور عند الظهور فقط
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    img.setAttribute("loading", "lazy");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const scripts = document.querySelectorAll("script[src]");
  scripts.forEach(s => s.setAttribute("defer","true"));
});



document.addEventListener("DOMContentLoaded", function () {
  var splash = document.getElementById("splash-screen");

  if (splash) {
    setTimeout(function () {
      splash.style.opacity = "0";
      setTimeout(function () {
        splash.style.display = "none";
      }, 500); // وقت التلاشي الناعم
    }, 800); // مدة بقاء الشاشة قبل بدء التلاشي
  }
});



let currentLang = 'en';

function toggleLanguage() {
    const btn = document.getElementById('translateBtn');

    const navLinks = document.querySelectorAll('.nav-link');
    const mainTitle = document.querySelector('.hero-main-title');
    const heroBtn = document.querySelector('.hero-btn-explore');
    const customersTitle = document.getElementById('CustomersTitle');
    const themeTitle = document.querySelector('#content-column h2');
    const themeDesc = document.querySelector('#content-column p');
    const marqueeTitle = document.querySelector('.marquee-title');
    const clientsHeading = document.querySelector('#clients h2');
    const portfolioGridTitle = document.querySelector('#portfolio-grid h2');
    const portfolioGridDesc = document.querySelector('#portfolio-grid p');
    const cardBtns = document.querySelectorAll('#portfolio-grid .btn');
    const faqLeftTitle = document.querySelector('#faqSection-v2 .faq-left h2');
    const faqLeftDesc = document.querySelector('#faqSection-v2 .faq-left p');
    const faqQuestions = document.querySelectorAll('#faqSection-v2 summary span');
    const faqAnswers = document.querySelectorAll('#faqSection-v2 .faq-answer');
    const footerAboutTitle = document.querySelector('.cf-about h4');
    const footerAboutText = document.querySelector('.cf-about p');
    const footerMenuTitle = document.querySelector('.cf-categories h4');
    const footerMenuLinks = document.querySelectorAll('.cf-categories ul li a');
    const footerCareTitle = document.querySelector('.cf-policies h4');
    const footerCareLinks = document.querySelectorAll('.cf-policies ul li a');
    const footerSignupTitle = document.querySelector('.cf-signup h4');
    const footerCopyright = document.querySelector('.cf-copyright');
    const themesTitle = document.querySelector('#Themes .blog-header h2');
    const themesSubtext = document.querySelector('#Themes .blog-subtext');
    const themesViewAll = document.querySelector('#Themes .blog-view-all');
    const themesExploreBtn = document.querySelector('#Themes .blog-explore-btn');
    const themesCards = document.querySelectorAll('#Themes .blog-card h3');

    const pricingTitle = document.getElementById('pricing-title');
    const planNames = document.querySelectorAll('.card-plan-name');
    const cardOnce = document.querySelectorAll('.card-once');
    const pricingBtns = document.querySelectorAll('#pricing-cards .card-btn');
    const featuredBadge = document.querySelector('.featured-badge');
    const basicFeatures = document.querySelectorAll('#pricing-card-basic .card-features li');
    const standardFeatures = document.querySelectorAll('#pricing-card-standard .card-features li');
    const proFeatures = document.querySelectorAll('#pricing-card-pro .card-features li');

    function setLiText(li, text, noteText) {
        const note = li.querySelector('.feature-note');
        const textNode = [...li.childNodes].find(n => n.nodeType === 3);
        if(textNode) textNode.textContent = text + ' ';
        if(note && noteText !== undefined) note.innerText = noteText;
    }

    if (currentLang === 'en') {
        // ===== عربي =====
        if(navLinks.length > 0) { navLinks[0].innerText = "الرئيسية"; navLinks[1].innerText = "سابقة الأعمال";; navLinks[2].innerText = "الثيمات"; navLinks[3].innerText = "تصميم التطبيقات"; navLinks[4].innerText = "خدماتنا"; }
        if(mainTitle) mainTitle.innerHTML = "أطلق موقعك الإلكتروني <br>معنا الآن";
        if(heroBtn) heroBtn.innerText = "استكشف أعمالنا";
        if(customersTitle) customersTitle.innerText = "عملاؤنا";
        if(themeTitle) themeTitle.innerText = "أي تصميم يناسب علامتك التجارية؟";
        if(themeDesc) themeDesc.innerText = "كلا التصميمين يتميزان بالاحترافية وبنفس الخصائص الأساسية، الفرق يكمن فقط في النمط البصري لمتجرك.";
        if(marqueeTitle) marqueeTitle.innerText = "شركاء النجاح";
        if(clientsHeading) clientsHeading.innerHTML = `انضم لأكثر من <span style="color:#ffd700;">400 عميل</span> وثقوا في خدماتنا خلال العام الماضي`;
        if(portfolioGridTitle) portfolioGridTitle.innerText = "سابقة أعمالنا";
        if(portfolioGridDesc) portfolioGridDesc.innerText = "استكشف نماذجنا ومشاريعنا الأكثر تميزاً في قسم سابقة الأعمال.";
        cardBtns.forEach(b => b.innerText = "شاهد المشروع");

        if(faqLeftTitle) faqLeftTitle.innerText = "الأسئلة الشائعة";
        if(faqLeftDesc) faqLeftDesc.innerHTML = "فريق الدعم متاح يومياً.<br>متوسط وقت الرد: ساعتان";
        const qAr = ["هل تقومون بتصميم مواقع متوافقة مع الهواتف المحمولة؟","ما الذي يميز BlueLines في مجال تصميم المواقع؟","هل تقدمون خدمات إدارة الموقع بعد التسليم؟","كم من الوقت يستغرق تسليم الموقع الإلكتروني؟","كيف يمكنني البدء معكم؟","هل تقومون بتطوير تطبيقات أندرويد و iOS؟"];
        const aAr = ["كل موقع نصممه متوافق بنسبة 100% مع جميع الأجهزة (أجهزة الكمبيوتر، الأجهزة اللوحية، والهواتف المحمولة)، مما يضمن لزوارك الحصول على أفضل تجربة في أي وقت ومن أي مكان.","في BlueLines، نقدم حلولاً احترافية متكاملة مع التركيز على التجربة البصرية، الأداء العالي، وسهولة الاستخدام. هدفنا هو تجسيد هوية علامتك التجارية وتحقيق نتائج ملموسة.","نعم، نقدم باقات دعم وصيانة شهرية تشمل التحديثات المستمرة، النسخ الاحتياطي الدوري، والدعم الفني الفوري لأي مشكلة قد تواجهك.","تختلف الجداول الزمنية حسب المشروع: المواقع الصغيرة أو الشخصية تستغرق 1-3 أيام عمل، بينما تستغرق المواقع التجارية أو المتاجر 2-5 أيام. نحن نلتزم دائماً بالمواعيد النهائية.","ببساطة، أرسل فكرة موقعك أو مجال عملك عبر واتساب أو البريد الإلكتروني. وسيقوم فريقنا بإعداد عرض سعر مفصل وخطة تنفيذ واضحة لك في أقل من 24 ساعة.","نعم، نحن نصمم ونطور تطبيقات Android و iOS باستخدام أحدث التقنيات لضمان الأداء السريع وتجربة مستخدم ممتازة."];
        faqQuestions.forEach((q, i) => { if(qAr[i]) q.innerText = qAr[i]; });
        faqAnswers.forEach((a, i) => { if(aAr[i]) a.innerText = aAr[i]; });

        if(footerAboutTitle) footerAboutTitle.innerText = "من نحن";
        if(footerAboutText) footerAboutText.innerHTML = 'في <strong>BLUE LINES</strong>، نصنع تجارب رقمية قوية للشركات التي تهدف إلى النمو والتميز. نجمع بين التصميم العصري والتطوير الذكي لتحويل أفكارك إلى واقع رقمي مؤثر. 💙🚀';
        if(footerMenuTitle) footerMenuTitle.innerText = "القائمة";
        if(footerMenuLinks.length > 0) { footerMenuLinks[0].innerText = "الرئيسية"; footerMenuLinks[1].innerText = "سابقة الأعمال"; footerMenuLinks[2].innerText = "الثيمات";footerMenuLinks[3].innerText = "تصميم التطبيقات"; }
        if(footerCareTitle) footerCareTitle.innerText = "خدمة العملاء";
        if(footerCareLinks.length > 0) { footerCareLinks[0].innerText = "سياسة الخصوصية"; footerCareLinks[1].innerText = "الشروط والأحكام"; footerCareLinks[2].innerText = "من نحن"; }
        if(footerSignupTitle) footerSignupTitle.innerText = "اشترك للحصول على أحدث العروض";
        if(footerCopyright) footerCopyright.innerHTML = 'BLUE LINES – جميع الحقوق محفوظة © 2026';

        if(themesTitle) themesTitle.innerText = "الثيمات";
        if(themesSubtext) themesSubtext.innerText = "نصمم ثيمات احترافية في مختلف المجالات — من الأزياء والعطور إلى مستحضرات التجميل والساعات وغيرها.";
        if(themesViewAll) themesViewAll.innerText = "عرض الكل ›";
        if(themesExploreBtn) themesExploreBtn.innerText = "استكشف الثيمات الجديدة";
        const themesAr = ["ثيمات الأزياء","ثيمات العطور","ثيمات مستحضرات التجميل","الساعات والإكسسوارات","أخرى"];
        themesCards.forEach((card, i) => { if(themesAr[i]) card.innerText = themesAr[i]; });

        // Pricing عربي
        if(pricingTitle) pricingTitle.innerText = "الباقات";
        if(featuredBadge) featuredBadge.innerText = "الأكثر طلباً";
        planNames.forEach((el, i) => { const ar = ["الباقة الأساسية","الباقة الاحترافية","الباقة المتقدمة"]; if(ar[i]) el.innerText = ar[i]; });
        cardOnce.forEach(el => el.innerText = "دفع مرة واحدة");
        pricingBtns.forEach(el => el.innerText = "ابدأ الآن");

        const basicAr = [["$5 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .store / .online / .shop"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["دعم لمدة 1 شهر"]];
        basicFeatures.forEach((li, i) => { if(basicAr[i]) setLiText(li, basicAr[i][0], basicAr[i][1]); });

        const standardAr = [["$5 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .com / .store / .online / .shop"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["إضافة الموقع على Google Search Console"],["دعم لمدة 1 شهر"]];
        standardFeatures.forEach((li, i) => { if(standardAr[i]) setLiText(li, standardAr[i][0], standardAr[i][1]); });

        const proAr = [["$10 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .com / .net"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["إضافة الموقع على Google Search Console"],["دعم لمدة 1 شهر"],["رفع وإدارة المنتجات — حتى 50 منتج"],["تطوير تطبيق أندرويد APK"]];
        proFeatures.forEach((li, i) => { if(proAr[i]) setLiText(li, proAr[i][0], proAr[i][1]); });

        btn.innerText = "English";
        currentLang = 'ar';

    } else {
        // ===== إنجليزي =====
        if(navLinks.length > 0) { navLinks[0].innerText = "HOME"; navLinks[1].innerText = "Portfolio"; ; navLinks[2].innerText = "Portfolio";; navLinks[2].innerText = "Themes"; navLinks[3].innerText = "Applications Design"; navLinks[4].innerText = "Services"; }
        if(mainTitle) mainTitle.innerHTML = "LAUNCH YOUR WEBSITE <br>WITH US";
        if(heroBtn) heroBtn.innerText = "EXPLORE OUR PORTFOLIO";
        if(customersTitle) customersTitle.innerText = "OUR CUSTOMERS";
        if(themeTitle) themeTitle.innerText = "WHICH THEME IS RIGHT FOR YOUR BRAND?";
        if(themeDesc) themeDesc.innerText = "Both themes look clean and use the same core features, the difference is only in the visual style.";
        if(marqueeTitle) marqueeTitle.innerText = "SUCCESS PARTNERS";
        if(clientsHeading) clientsHeading.innerHTML = `JOIN MORE THAN <span style="color:#ffd700;">400 CUSTOMERS</span> WHO TRUSTED OUR SERVICES OVER THE PAST YEAR`;
        if(portfolioGridTitle) portfolioGridTitle.innerText = "Portfolio";
        if(portfolioGridDesc) portfolioGridDesc.innerText = "Explore our most outstanding templates and projects in the Portfolio section.";
        cardBtns.forEach(b => b.innerText = "View Project");

        if(faqLeftTitle) faqLeftTitle.innerText = "FAQs";
        if(faqLeftDesc) faqLeftDesc.innerHTML = "Our customer support is available daily.<br>Average answer time: 2h";
        const qEn = ["Do you design mobile-responsive websites?","What makes BlueLines unique in web design?","Do you provide post-delivery management services?","How long does it take to deliver a website?","How do I get started with you?","Do you develop Android and iOS applications?"];
        const aEn = ["Every website we design is 100% responsive across all devices—desktops, tablets, and mobile phones—ensuring your visitors get the best experience anytime, anywhere.","At BlueLines, we provide integrated professional solutions with a focus on visual experience, high performance, and ease of use. Our goal is to embody your brand identity and achieve tangible results.","Yes, we offer monthly support and maintenance packages that include continuous updates, regular backups, and immediate technical support for any problem you may face.","Timelines vary by project: Small or personal sites take 1–3 business days, while e-commerce or business sites take 2–5 days. We always stick to deadlines.","Simply send your website idea or business field via WhatsApp or email. Our team will prepare a detailed quote and a clear implementation plan for you in less than 24 hours.","Yes, we design and develop Android and iOS apps using the latest technologies to ensure fast performance and an excellent user experience."];
        faqQuestions.forEach((q, i) => { if(qEn[i]) q.innerText = qEn[i]; });
        faqAnswers.forEach((a, i) => { if(aEn[i]) a.innerText = aEn[i]; });

        if(footerAboutTitle) footerAboutTitle.innerText = "About Us";
        if(footerAboutText) footerAboutText.innerHTML = 'At <strong>BLUE LINES</strong>, we craft powerful digital experiences for businesses that aim to grow and stand out. Turning Ideas Into Digital Reality. 💙🚀';
        if(footerMenuTitle) footerMenuTitle.innerText = "MENU";
        if(footerMenuLinks.length > 0) { footerMenuLinks[0].innerText = "HOME"; footerMenuLinks[1].innerText = "Portfolio"; footerMenuLinks[2].innerText = "Themes"; footerMenuLinks[3].innerText = "Applications Design"; }
        if(footerCareTitle) footerCareTitle.innerText = "Customer Care";
        if(footerCareLinks.length > 0) { footerCareLinks[0].innerText = "Privacy Policy"; footerCareLinks[1].innerText = "Terms & Conditions"; footerCareLinks[2].innerText = "About Us"; }
        if(footerSignupTitle) footerSignupTitle.innerText = "Sign up for new stories and personal offers";
        if(footerCopyright) footerCopyright.innerHTML = 'BLUE LINES – All Rights Reserved © 2026';

        if(themesTitle) themesTitle.innerText = "Themes";
        if(themesSubtext) themesSubtext.innerText = "We craft professional themes across various industries — from fashion and perfumes to cosmetics, watches, and more.";
        if(themesViewAll) themesViewAll.innerText = "View all ›";
        if(themesExploreBtn) themesExploreBtn.innerText = "Explore New Themes";
        const themesEn = ["Fashion Themes","Perfumes Themes","Cosmetics Themes","Watches & Accessories","Other"];
        themesCards.forEach((card, i) => { if(themesEn[i]) card.innerText = themesEn[i]; });

        // Pricing إنجليزي
        if(pricingTitle) pricingTitle.innerText = "Pricing";
        if(featuredBadge) featuredBadge.innerText = "Most Popular";
        planNames.forEach((el, i) => { const en = ["Basic Plan","Standard Plan","Pro Plan"]; if(en[i]) el.innerText = en[i]; });
        cardOnce.forEach(el => el.innerText = "One-time payment");
        pricingBtns.forEach(el => el.innerText = "Get Started");

        const basicEn = [["$5 Cashback on your wallet","~1.70 EGP off every order"],[".store / .online / .shop domain"],["Theme customization & setup"],["Sections & page design"],["1 month support"]];
        basicFeatures.forEach((li, i) => { if(basicEn[i]) setLiText(li, basicEn[i][0], basicEn[i][1]); });

        const standardEn = [["$5 Cashback on your wallet","~1.70 EGP off every order"],[".com / .store / .online / .shop domain"],["Theme customization & setup"],["Sections & page design"],["Google Search Console setup"],["1 month support"]];
        standardFeatures.forEach((li, i) => { if(standardEn[i]) setLiText(li, standardEn[i][0], standardEn[i][1]); });

        const proEn = [["$10 Cashback on your wallet","~1.70 EGP off every order"],[".com / .net domain"],["Theme customization & setup"],["Sections & page design"],["Google Search Console setup"],["1 month support"],["Products upload & management — up to 50 products"],["Android APK app development"]];
        proFeatures.forEach((li, i) => { if(proEn[i]) setLiText(li, proEn[i][0], proEn[i][1]); });

        btn.innerText = "Arabic";
        currentLang = 'en';
    }
}



/**
 * 🚀 BLUE LINES - ULTRA LIGHTSPEED VERSION (Unified)
 * وظيفة الكود: حماية المحتوى، تسريع الصور، وفتح القفل بكلمة سر
 */
(function() {
    const _d = document;
    let isAdmin = false;
    let buf = "";

    // الإعدادات
    const PASS = "الله";
    const COMBO = "5-5*5";

    // 1️⃣ حماية الكليك يمين (تعتمد على حالة isAdmin)
    // بمجرد أن تصبح isAdmin = true، سيعود الكليك يمين للعمل تلقائياً
    _d.addEventListener('contextmenu', e => {
        if (!isAdmin) {
            e.preventDefault();
        }
    }, true);

    // 2️⃣ المعالج الذكي للأزرار (الفتح والحظر)
    _d.addEventListener('keydown', function(e) {
        // تسجيل آخر 10 ضغطات فقط لتوفير الذاكرة
        buf = (buf + e.key).slice(-10);

        // التحقق من كلمة السر أو الكومبو لفك الحظر
        if (buf.includes(PASS) || buf.includes(COMBO)) {
            isAdmin = true;
            console.log("🔓 تم فك حماية الصفحة بنجاح");
            return; 
        }

        // إذا لم يكن "آدمن"، يتم تنفيذ القيود التالية:
        if (!isAdmin) {
            // منع F12
            if (e.keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // منع Shift و Control وأي اختصارات مرتبطة بهما
            if (e.ctrlKey || e.shiftKey || e.key === "Control" || e.key === "Shift") {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
        }
    }, true);

    // 3️⃣ تقنية الفلاش لتحسين أداء الصور (LCP)
    _d.addEventListener('DOMContentLoaded', () => {
        const imgs = _d.querySelectorAll('img');
        imgs.forEach(img => {
            if(!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async'); // تسريع رندر الصور
        });
    });

    // 4️⃣ تحسين بسيط للتمرير (Smooth Scroll)
    _d.documentElement.style.scrollBehavior = 'smooth';

})();



const slider = document.querySelector('.testi-slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const step = 405;

leftArrow.addEventListener('click', () => {
  slider.scrollLeft -= step;
});

rightArrow.addEventListener('click', () => {
  slider.scrollLeft += step;
});



  // منع الترجمة عن الصفحة كلها
  document.documentElement.setAttribute("translate", "no");
  document.documentElement.setAttribute("lang", "ar");
  document.documentElement.setAttribute("dir", "rtl");



      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-Y1F28T2SY8");
    


      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      );
      fbq("init", "1527228694442831");
      fbq("track", "PageView");
    


      // @ts-ignore
      !(function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = (w[t] = w[t] || []);
        (ttq.methods = [
          "page",
          "track",
          "identify",
          "instances",
          "debug",
          "on",
          "off",
          "once",
          "ready",
          "alias",
          "group",
          "enableCookie",
          "disableCookie",
          "holdConsent",
          "revokeConsent",
          "grantConsent",
        ]),
          (ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          });
        for (var i = 0; i < ttq.methods.length; i++)
          ttq.setAndDefer(ttq, ttq.methods[i]);
        (ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
            ttq.setAndDefer(e, ttq.methods[n]);
          return e;
        }),
          (ttq.load = function (e, n) {
            var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
              o = n && n.partner;
            (ttq._i = ttq._i || {}),
              (ttq._i[e] = []),
              (ttq._i[e]._u = r),
              (ttq._t = ttq._t || {}),
              (ttq._t[e] = +new Date()),
              (ttq._o = ttq._o || {}),
              (ttq._o[e] = n || {});
            n = document.createElement("script");
            (n.type = "text/javascript"),
              (n.async = !0),
              (n.src = r + "?sdkid=" + e + "&lib=" + t);
            e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(n, e);
          });

        ttq.load("D1V1TLRC77U6OAPOQFB0");
        ttq.page();
      })(window, document, "ttq");
    


      const global = globalThis;
    


(function() {
  var videos = document.querySelectorAll('#Themes video');
  if (!videos.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var vid = entry.target;
      if (entry.isIntersecting) {
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.2 });

  videos.forEach(function(vid) {
    observer.observe(vid);
  });
})();



(function() {
  var videos = document.querySelectorAll('#Themes video');
  if (!videos.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var vid = entry.target;
      if (entry.isIntersecting) {
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.2 });

  videos.forEach(function(vid) {
    observer.observe(vid);
  }); 
})(); 


// 03-clients-and-partners


// 04-sections-and-pricing

