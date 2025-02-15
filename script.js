// تفعيل التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تحريك الصور في معرض الصور
const galleryImages = [
    'https://source.unsplash.com/800x600/?russia,university',
    'https://source.unsplash.com/800x600/?russia,education',
    'https://source.unsplash.com/800x600/?russia,students',
    'https://source.unsplash.com/800x600/?russia,campus',
    'https://source.unsplash.com/800x600/?russia,library',
    'https://source.unsplash.com/800x600/?russia,classroom'
];

function loadGallery() {
    const gallery = document.getElementById('imageGallery');
    if (gallery) {
        galleryImages.forEach(image => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="gallery-item">
                    <img src="${image}" alt="صورة من روسيا" class="img-fluid">
                </div>
            `;
            gallery.appendChild(col);
        });
    }
}

// تفعيل النماذج
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();

    // التعامل مع نموذج الاتصال
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    // تفعيل أزرار الحجز
    const bookingButtons = document.querySelectorAll('.btn-primary');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('حجز')) {
                alert('سيتم تحويلك إلى صفحة الحجز...');
            }
        });
    });

    // تأثير حركي للقائمة عند التحميل
    const navItems = document.querySelectorAll('.nav-item, .nav-contact-item');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // تغيير اللغة
    const languageItems = document.querySelectorAll('.dropdown-item[data-lang]');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // تخزين النصوص بجميع اللغات
    const translations = {
        ar: {
            site_title: 'أوتشوبا للدراسة في روسيا',
            brand_name: 'أوتشوبا',
            study_subtitle: 'للدراسة في روسيا',
            study: 'الدراسة',
            tourism: 'السياحة',
            contact: 'اتصل بنا',
            services_subtitle: "خدماتنا",
            services_title: "حلول متكاملة للدراسة في روسيا",
            most_requested: "الأكثر طلباً",
            top_universities: "أفضل الجامعات الروسية",
            hero_title: "الدراسة في روسيا",
            hero_description: "انضم إلى آلاف الطلاب في رحلة تعليمية مميزة في أفضل الجامعات الروسية",
            universities: "جامعة",
            students: "طالب",
            programs: "برنامج",
            learn_more: "اكتشف المزيد",
            contact_us: "تواصل معنا",
            translation_subtitle: "خدمات الترجمة",
            translation_title: "خدمات ترجمة احترافية",
            translation_description: "نقدم خدمات ترجمة احترافية ودقيقة بمختلف المجالات مع ضمان الجودة والسرعة في التنفيذ",
            reg_steps_subtitle: "خطوات التسجيل",
            reg_steps_title: "كيف تبدأ رحلة دراستك في روسيا",
            start_registration: "ابدأ التسجيل الآن",
            insurance_subtitle: "التأمين الطبي",
            insurance_title: "خدمات التأمين الطبي للطلاب",
            faq_subtitle: "الأسئلة الشائعة",
            faq_title: "كل ما تريد معرفته عن الدراسة في روسيا",
            faq_q4: "هل يجب أن أتعلم اللغة الروسية قبل الدراسة؟",
            registration_description: "نساعدك في اختيار الجامعة المناسبة وإكمال إجراءات القبول بكل سهولة ويسر",
            form_success_message: 'سيتم تحويلك إلى الواتساب للتواصل معنا'
        },
        en: {
            site_title: 'Uchoba Study in Russia',
            brand_name: 'Uchoba',
            study_subtitle: 'Study in Russia',
            study: 'Study',
            tourism: 'Tourism',
            contact: 'Contact Us',
            services_subtitle: "Our Services",
            services_title: "Comprehensive Solutions for Studying in Russia",
            most_requested: "Most Requested",
            top_universities: "Top Russian Universities",
            hero_title: "Study in Russia",
            hero_description: "Join thousands of students on an exceptional educational journey in Russia's finest universities",
            universities: "Universities",
            students: "Students",
            programs: "Programs",
            learn_more: "Learn More",
            contact_us: "Contact Us",
            translation_subtitle: "Translation Services",
            translation_title: "Professional Translation Services",
            translation_description: "We provide professional and accurate translation services in various fields with guaranteed quality and speed",
            reg_steps_subtitle: "Registration Steps",
            reg_steps_title: "How to Start Your Study Journey in Russia",
            start_registration: "Start Registration Now",
            insurance_subtitle: "Medical Insurance",
            insurance_title: "Student Medical Insurance Services",
            faq_subtitle: "FAQ",
            faq_title: "Everything You Need to Know About Studying in Russia",
            faq_q4: "Do I need to learn Russian before studying?",
            registration_description: "We help you choose the right university and complete admission procedures easily",
            form_success_message: 'You will be redirected to WhatsApp to contact us'
        },
        ru: {
            site_title: 'Учоба Обучение в России',
            brand_name: 'Учоба',
            study_subtitle: 'Обучение в России',
            study: 'Учеба',
            tourism: 'Туризм',
            contact: 'Свяжитесь с нами',
            services_subtitle: "Наши Услуги",
            services_title: "Комплексные решения для обучения в России",
            most_requested: "Самые востребованные",
            top_universities: "Лучшие российские университеты",
            hero_title: "Обучение в России",
            hero_description: "Присоединяйтесь к тысячам студентов в исключительном образовательном путешествии в лучших университетах России",
            universities: "Университетов",
            students: "Студентов",
            programs: "Программ",
            learn_more: "Узнать больше",
            contact_us: "Связаться с нами",
            translation_subtitle: "Услуги перевода",
            translation_title: "Профессиональные услуги перевода",
            translation_description: "Мы предоставляем профессиональные и точные услуги перевода в различных областях с гарантированным качеством и скоростью",
            reg_steps_subtitle: "Этапы регистрации",
            reg_steps_title: "Как начать учебу в России",
            start_registration: "Начать регистрацию",
            insurance_subtitle: "Медицинское страхование",
            insurance_title: "Услуги медицинского страхования студентов",
            faq_subtitle: "Часто задаваемые вопросы",
            faq_title: "Все, что нужно знать об обучении в России",
            faq_q4: "Нужно ли учить русский язык перед обучением?",
            registration_description: "Мы поможем вам выбрать подходящий университет и легко пройти процедуру поступления",
            form_success_message: 'Вы будете перенаправлены в WhatsApp для связи с нами'
        }
    };

    // وظيفة تحديث اللغة
    function updateLanguage(lang) {
        // تحديث عناصر الترجمة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // تحديث عنوان الصفحة
        document.title = translations[lang].site_title;

        // تحديث اتجاه الصفحة
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // تحديث النص الحالي للغة
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = {
                'ar': 'العربية',
                'en': 'English',
                'ru': 'Русский'
            }[lang];
        }

        // تحديث الكلاس النشط لزر اللغة
        document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            }
        });

        // حفظ اللغة المحددة
        localStorage.setItem('selectedLanguage', lang);
    }

    // وظيفة الحصول على اللغة الحالية
    function getCurrentLanguage() {
        return localStorage.getItem('selectedLanguage') || 'ar';
    }

    // تفعيل تغيير اللغة عند النقر
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // تحديث اللغة عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        updateLanguage(getCurrentLanguage());
    });

    // إغلاق قائمة الهيدر البرجر عند النقر على رابط
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav.classList.contains('show')) {
                navbarToggler.click(); // إغلاق القائمة
            }
        });
    });

    // إغلاق قائمة الهيدر البرجر عند النقر في أي مكان خارجها
    document.addEventListener('click', (event) => {
        const isClickInside = navbarNav.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarNav.classList.contains('show')) {
            navbarToggler.click(); // إغلاق القائمة
        }
    });

    // إغلاق قائمة الهيدر البرجر عند الضغط على ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navbarToggler.click(); // إغلاق القائمة
        }
    });

    // تعريف عناصر النافذة المنبثقة
    const serviceModal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close-btn');

    // وظيفة عرض النافذة المنبثقة
    function showModal(serviceType) {
        let title = '';
        let content = '';
        
        switch(serviceType) {
            case 'registration':
                title = 'التسجيل والقبول الجامعي';
                content = `
                    <div class="service-details">
                        <img src="images/registration-detail.jpg" alt="تفاصيل التسجيل والقبول">
                        <h3>خطوات التسجيل</h3>
                        <ul>
                            <li>تقديم المستندات المطلوبة</li>
                            <li>مراجعة وتصديق الوثائق</li>
                            <li>التقديم للجامعات المختارة</li>
                            <li>متابعة إجراءات القبول</li>
                        </ul>
                    </div>
                `;
                break;
                
            case 'translation':
                title = 'خدمات الترجمة المعتمدة';
                content = `
                    <div class="service-details">
                        <img src="images/translation-detail.jpg" alt="تفاصيل خدمات الترجمة">
                        <h3>خدمات الترجمة المتوفرة</h3>
                        <ul>
                            <li>ترجمة الوثائق الرسمية</li>
                            <li>ترجمة الشهادات الأكاديمية</li>
                            <li>ترجمة جوازات السفر والهويات</li>
                        </ul>
                    </div>
                `;
                break;
                
            case 'insurance':
                title = 'التأمين الطلابي';
                content = `
                    <div class="service-details">
                        <img src="images/insurance-detail.jpg" alt="تفاصيل التأمين الطلابي">
                        <h3>تغطية التأمين الطلابي</h3>
                        <ul>
                            <li>التغطية الطبية الشاملة</li>
                            <li>تغطية حالات الطوارئ</li>
                            <li>العلاج في المستشفيات</li>
                        </ul>
                    </div>
                `;
                break;
        }
        
        if (modalTitle) modalTitle.textContent = title;
        if (modalBody) modalBody.innerHTML = content;
        if (serviceModal) {
            serviceModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // وظيفة إغلاق النافذة المنبثقة
    function closeModal() {
        if (serviceModal) {
            serviceModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // إضافة مستمعات الأحداث عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        // إغلاق النافذة عند النقر على زر الإغلاق
        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }
        
        // إغلاق النافذة عند النقر خارجها
        window.onclick = function(event) {
            if (event.target == serviceModal) {
                closeModal();
            }
        }
        
        // إغلاق النافذة عند الضغط على ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        // إضافة مستمعات الأحداث لأزرار "اكتشف المزيد"
        const buttons = document.querySelectorAll('.service-btn');
        buttons.forEach(button => {
            button.onclick = function() {
                const serviceType = this.closest('.service-card').dataset.service;
                showModal(serviceType);
            }
        });
    });

    // وظائف عرض وإخفاء تفاصيل الخدمات
    function showServiceDetails(serviceType) {
        // إخفاء قائمة الخدمات
        document.getElementById('servicesList').style.display = 'none';
        
        // إظهار قسم التفاصيل
        document.getElementById('serviceDetails').style.display = 'block';
        
        // إخفاء جميع محتويات الخدمات
        document.querySelectorAll('.service-content').forEach(content => {
            content.style.display = 'none';
        });
        
        // إظهار محتوى الخدمة المحددة
        document.getElementById(serviceType + 'Details').style.display = 'block';
        
        // التمرير إلى قسم التفاصيل
        document.getElementById('serviceDetails').scrollIntoView({ behavior: 'smooth' });
    }

    // العودة إلى قائمة الخدمات
    function showServicesList() {
        // إخفاء قسم التفاصيل
        document.getElementById('serviceDetails').style.display = 'none';
        
        // إظهار قائمة الخدمات
        document.getElementById('servicesList').style.display = 'grid';
        
        // التمرير إلى قسم الخدمات
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }

    // إضافة مستمعات الأحداث لأزرار "عرض التفاصيل" و "العودة إلى الخدمات"
    document.querySelectorAll('.service-details-btn').forEach(button => {
        button.onclick = function() {
            const serviceType = this.dataset.service;
            showServiceDetails(serviceType);
        }
    });

    document.querySelectorAll('.back-to-services').forEach(button => {
        button.onclick = function() {
            showServicesList();
        }
    });

    // تأثيرات التمرير والهيدر
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// ترجمات قسم الخدمات
const translations = {
    ar: {
        services_subtitle: "خدماتنا",
        services_title: "حلول متكاملة للدراسة في روسيا",
        most_requested: "الأكثر طلباً",
        certified_translation: "ترجمة معتمدة",
        guaranteed_housing: "سكن مضمون",
        
        registration_title: "تسجيل جامعي",
        registration_description: "نرافقك في رحلة القبول الجامعي خطوة بخطوة، من اختيار الجامعة حتى تأكيد القبول",
        registration_feature1: "اختيار أفضل الجامعات",
        registration_feature2: "تجهيز وتصديق الأوراق",
        registration_feature3: "متابعة إجراءات القبول",
        
        translation_title: "خدمات الترجمة",
        translation_description: "نقدم خدمات ترجمة معتمدة ودقيقة لجميع المستندات والوثائق المطلوبة",
        translation_feature1: "ترجمة معتمدة للشهادات",
        translation_feature2: "ترجمة الوثائق الرسمية",
        translation_feature3: "خدمة سريعة ودقيقة",
        
        housing_title: "خدمة السكن",
        housing_description: "نؤمن لك السكن المناسب في السكن الجامعي أو الشقق الخاصة بأفضل الأسعار",
        housing_feature1: "سكن جامعي آمن",
        housing_feature2: "شقق مفروشة راقية",
        housing_feature3: "مواقع استراتيجية",
        
        request_service: "طلب الخدمة",
        
        close: "إغلاق"
    },
    en: {
        services_subtitle: "Our Services",
        services_title: "Comprehensive Solutions for Studying in Russia",
        most_requested: "Most Requested",
        certified_translation: "Certified Translation",
        guaranteed_housing: "Guaranteed Housing",
        
        registration_title: "University Registration",
        registration_description: "We accompany you on your university admission journey step by step, from choosing a university to confirming acceptance",
        registration_feature1: "Choose the best universities",
        registration_feature2: "Document preparation and certification",
        registration_feature3: "Admission process follow-up",
        
        translation_title: "Translation Services",
        translation_description: "We provide certified and accurate translation for all required documents",
        translation_feature1: "Certified certificate translation",
        translation_feature2: "Official document translation",
        translation_feature3: "Fast and accurate service",
        
        housing_title: "Housing Service",
        housing_description: "We secure suitable accommodation in university dorms or private apartments at the best prices",
        housing_feature1: "Safe university housing",
        housing_feature2: "Luxury furnished apartments",
        housing_feature3: "Strategic locations",
        
        request_service: "Request Service",
        
        close: "Close"
    },
    ru: {
        services_subtitle: "Наши Услуги",
        services_title: "Комплексные решения для обучения в России",
        most_requested: "Самые востребованные",
        certified_translation: "Сертифицированный перевод",
        guaranteed_housing: "Гарантированное жилье",
        
        registration_title: "Регистрация в университете",
        registration_description: "Мы сопровождаем вас в процессе поступления в университет шаг за шагом, от выбора университета до получения подтверждения о зачислении",
        registration_feature1: "Выбор лучших университетов",
        registration_feature2: "Подготовка и заверение документов",
        registration_feature3: "Подача заявления и контроль",
        
        translation_title: "Услуги перевода",
        translation_description: "Мы предоставляем сертифицированный и точный перевод всех необходимых документов",
        translation_feature1: "Заверенный перевод сертификатов",
        translation_feature2: "Перевод официальных документов",
        translation_feature3: "Быстрый и точный сервис",
        
        housing_title: "Услуги по размещению",
        housing_description: "Мы обеспечиваем подходящее жилье в университетских общежитиях или частных квартирах по лучшим ценам",
        housing_feature1: "Безопасное университетское жилье",
        housing_feature2: "Элитные меблированные квартиры",
        housing_feature3: "Стратегическое расположение",
        
        request_service: "Заказать услугу",
        
        close: "Закрыть"
    }
};

// تحديث الترجمات
const newTranslations = {
    ar: {
        form_success_message: 'سيتم تحويلك إلى الواتساب للتواصل معنا'
    },
    en: {
        form_success_message: 'You will be redirected to WhatsApp to contact us'
    },
    ru: {
        form_success_message: 'Вы будете перенаправлены в WhatsApp для связи с нами'
    }
};

// دمج الترجمات الجديدة
Object.keys(translations).forEach(lang => {
    translations[lang] = { ...translations[lang], ...newTranslations[lang] };
});

// رقم الواتساب الخاص بالشركة
const WHATSAPP_NUMBER = '79964072422';

// دالة لعرض نافذة التواصل
function showContactModal() {
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show();
}

// دالة لمعالجة نموذج التواصل
function submitContactForm(event) {
    event.preventDefault();
    
    // جمع بيانات النموذج
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        specialization: document.getElementById('specialization').value,
        message: document.getElementById('message').value
    };

    // تجهيز نص الرسالة للواتساب
    const whatsappMessage = `
*طلب تسجيل جديد*%0a
------------------------%0a
*الاسم:* ${formData.name}%0a
*البريد الإلكتروني:* ${formData.email}%0a
*رقم الهاتف:* ${formData.phone}%0a
*التخصص المطلوب:* ${formData.specialization}%0a
*الرسالة:* ${formData.message}%0a
------------------------%0a
تم إرسال الطلب من موقع أوتشوبا`.trim();

    // إنشاء رابط الواتساب
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${whatsappMessage}`;

    // إظهار رسالة نجاح
    Swal.fire({
        icon: 'success',
        title: translations[currentLanguage].form_success_title || 'تم الإرسال بنجاح',
        text: translations[currentLanguage].form_success_message || 'سيتم تحويلك إلى الواتساب للتواصل معنا',
        confirmButtonText: translations[currentLanguage].ok || 'حسناً'
    }).then((result) => {
        if (result.isConfirmed) {
            // فتح الواتساب في نافذة جديدة
            window.open(whatsappURL, '_blank');
            
            // إغلاق النافذة المنبثقة
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();

            // إعادة تعيين النموذج
            document.getElementById('contactForm').reset();
        }
    });
}

// تهيئة AOS
AOS.init({
    once: true,
    disable: 'mobile'
});

// إعداد Three.js للخلفية
const initHeroBackground = () => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // إنشاء النجوم
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });
    
    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;
        starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    camera.position.z = 5;
    
    // حركة النجوم
    const animate = () => {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0005;
        renderer.render(scene, camera);
    };
    
    animate();
    
    // تحديث حجم الشاشة
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// تأثير البطاقات العائمة
const initFloatingCards = () => {
    const cards = document.querySelectorAll('.card-3d');
    if (!cards.length) return;
    
    cards.forEach(card => {
        const depth = card.getAttribute('data-depth') || 0.2;
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateY = ((x - rect.width / 2) / rect.width) * 30;
            const rotateX = ((y - rect.height / 2) / rect.height) * -30;
            
            card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${depth * 100}px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
        });
    });
};

// تأثير الإحصائيات المتحركة
const initStats = () => {
    const stats = document.querySelectorAll('.stat-item');
    if (!stats.length) return;
    
    const animateStat = (stat) => {
        const target = parseInt(stat.getAttribute('data-value'));
        const numberElement = stat.querySelector('.stat-number');
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / (target / increment);
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                if (target > 1000) {
                    numberElement.textContent = Math.round(current / 1000) + 'K+';
                } else {
                    numberElement.textContent = Math.round(current) + '%';
                }
                setTimeout(updateNumber, stepTime);
            } else {
                if (target > 1000) {
                    numberElement.textContent = (target / 1000) + 'K+';
                } else {
                    numberElement.textContent = target + '%';
                }
            }
        };
        
        updateNumber();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStat(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
};

// تأثير الخلفية المتحركة
const initParallaxBackground = () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (!parallaxBg) return;
    
    new Parallax(parallaxBg, {
        relativeInput: true,
        hoverOnly: true,
        scalarX: 3,
        scalarY: 3
    });
};

// تهيئة جميع التأثيرات
document.addEventListener('DOMContentLoaded', () => {
    initHeroBackground();
    initFloatingCards();
    initStats();
    initParallaxBackground();
    
    // تحديث الترجمات للقسم الجديد
    translations.ar = {
        ...translations.ar,
        hero_2_badge: 'نجاح مضمون',
        hero_2_title: 'مستقبلك يبدأ من هنا',
        hero_2_feature_1_title: 'برامج معتمدة',
        hero_2_feature_1_text: 'شهادات معترف بها دولياً',
        hero_2_feature_2_title: 'مجتمع طلابي',
        hero_2_feature_2_text: 'بيئة تعليمية متنوعة',
        hero_2_feature_3_title: 'فرص عالمية',
        hero_2_feature_3_text: 'آفاق مهنية واسعة',
        hero_2_cta_1: 'ابدأ رحلتك',
        hero_2_cta_2: 'تعرف علينا',
        hero_2_card_1_title: 'الحياة الجامعية',
        hero_2_card_1_text: 'تجربة فريدة في روسيا',
        hero_2_card_2_title: 'التميز الأكاديمي',
        hero_2_card_2_text: 'مناهج عالمية المستوى',
        hero_2_card_3_title: 'أنشطة طلابية',
        hero_2_card_3_text: 'فعاليات وبرامج متنوعة',
        hero_2_stat_1: 'جامعة معتمدة',
        hero_2_stat_2: 'طالب سعيد'
    };
    
    translations.en = {
        ...translations.en,
        hero_2_badge: 'Guaranteed Success',
        hero_2_title: 'Your Future Starts Here',
        hero_2_feature_1_title: 'Accredited Programs',
        hero_2_feature_1_text: 'Internationally Recognized Certificates',
        hero_2_feature_2_title: 'Student Community',
        hero_2_feature_2_text: 'Diverse Learning Environment',
        hero_2_feature_3_title: 'Global Opportunities',
        hero_2_feature_3_text: 'Wide Career Horizons',
        hero_2_cta_1: 'Start Your Journey',
        hero_2_cta_2: 'Learn More',
        hero_2_card_1_title: 'University Life',
        hero_2_card_1_text: 'Unique Experience in Russia',
        hero_2_card_2_title: 'Academic Excellence',
        hero_2_card_2_text: 'World-Class Curriculum',
        hero_2_card_3_title: 'Student Activities',
        hero_2_card_3_text: 'Diverse Events & Programs',
        hero_2_stat_1: 'Accredited Universities',
        hero_2_stat_2: 'Happy Students'
    };
    
    translations.ru = {
        ...translations.ru,
        hero_2_badge: 'Гарантированный Успех',
        hero_2_title: 'Ваше Будущее Начинается Здесь',
        hero_2_feature_1_title: 'Аккредитованные Программы',
        hero_2_feature_1_text: 'Международно Признанные Сертификаты',
        hero_2_feature_2_title: 'Студенческое Сообщество',
        hero_2_feature_2_text: 'Разнообразная Учебная Среда',
        hero_2_feature_3_title: 'Глобальные Возможности',
        hero_2_feature_3_text: 'Широкие Карьерные Перспективы',
        hero_2_cta_1: 'Начните Свой Путь',
        hero_2_cta_2: 'Узнать Больше',
        hero_2_card_1_title: 'Университетская Жизнь',
        hero_2_card_1_text: 'Уникальный Опыт в России',
        hero_2_card_2_title: 'Академическое Превосходство',
        hero_2_card_2_text: 'Учебная Программа Мирового Уровня',
        hero_2_card_3_title: 'Студенческие Мероприятия',
        hero_2_card_3_text: 'Разнообразные События и Программы',
        hero_2_stat_1: 'Аккредитованных Университетов',
        hero_2_stat_2: 'Довольных Студентов'
    };
    
    // تحديث اللغة الحالية
    updateLanguage(currentLanguage);
});
