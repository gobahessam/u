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
            // القائمة الرئيسية
            site_title: 'أوتشوبا للدراسة في روسيا',
            brand_name: 'أوتشوبا',
            study_subtitle: 'للدراسة في روسيا',
            study: 'الدراسة',
            tourism: 'السياحة',
            contact: 'اتصل بنا',
            language: 'اللغة',

            // قسم الهيرو
            hero_badge: 'شريك موثوق في التعليم العالي',
            hero_title: 'ابدأ رحلتك الدراسية في روسيا',
            hero_description: 'نفتح لك أبواب المستقبل مع أفضل الجامعات الروسية. خدمات شاملة ودعم متكامل لتحقيق حلمك في التعليم العالي.',
            free_consultation: 'احصل على استشارة مجانية',
            
            // الميزات
            feature_programs: 'برامج معتمدة',
            feature_programs_desc: 'شهادات معترف بها دولياً',
            feature_support: 'دعم شامل',
            feature_support_desc: 'مرافقة من البداية للنهاية',
            feature_experience: 'خبرة دولية',
            feature_experience_desc: 'فريق متخصص في التعليم الدولي',
            
            // الخدمات
            services_title: 'خدماتنا',
            services_subtitle: 'خدماتنا المتميزة',
            most_requested: "الخدمة الأكثر طلباً",
            certified_translation: "ترجمة معتمدة رسمياً",
            guaranteed_housing: "سكن طلابي مضمون",
            
            registration_title: "التسجيل الجامعي",
            registration_description: "نقدم خدمة شاملة للتسجيل في أفضل الجامعات الروسية، من اختيار التخصص المناسب حتى إتمام القبول",
            registration_feature1: "اختيار الجامعة والتخصص المناسب",
            registration_feature2: "تجهيز وتصديق جميع المستندات",
            registration_feature3: "متابعة كاملة لإجراءات القبول",
            
            translation_title: "خدمات الترجمة المعتمدة",
            translation_description: "نوفر خدمات ترجمة معتمدة ودقيقة لكافة المستندات الدراسية والرسمية مع التصديق",
            translation_feature1: "ترجمة معتمدة للشهادات والوثائق",
            translation_feature2: "تصديق رسمي للترجمات",
            translation_feature3: "خدمة سريعة وجودة عالية",
            
            housing_title: "خدمات السكن الطلابي",
            housing_description: "نضمن لك سكناً مريحاً وآمناً سواء في السكن الجامعي أو الشقق الخاصة بأسعار تنافسية",
            housing_feature1: "سكن جامعي آمن ومجهز",
            housing_feature2: "شقق مفروشة حديثة",
            housing_feature3: "مواقع قريبة من الجامعات",
            
            request_service: "احجز الخدمة الآن",
            
            close: "إغلاق",
            
            // قسم خدمات الترجمة
            translation_section_title: "خدمات الترجمة المعتمدة",
            translation_section_subtitle: "ترجمة احترافية ودقيقة",
            translation_section_description: "نقدم خدمات ترجمة معتمدة ودقيقة لجميع أنواع الوثائق مع ضمان الجودة والسرعة في التنفيذ",
            
            translation_legal: "الترجمة القانونية",
            translation_legal_desc: "ترجمة معتمدة للوثائق القانونية والرسمية مع ختم وتصديق",
            translation_legal_1: "ترجمة عقود وإتفاقيات",
            translation_legal_2: "وثائق رسمية وشهادات",
            translation_legal_3: "تصديق قانوني معتمد",
            
            translation_academic: "الترجمة الأكاديمية",
            translation_academic_desc: "ترجمة دقيقة للوثائق الأكاديمية والبحوث العلمية",
            translation_academic_1: "شهادات دراسية",
            translation_academic_2: "أبحاث علمية",
            translation_academic_3: "سجلات أكاديمية",
            
            translation_general: "الترجمة العامة",
            translation_general_desc: "ترجمة احترافية لجميع أنواع النصوص والوثائق العامة",
            translation_general_1: "مستندات شخصية",
            translation_general_2: "محتوى تسويقي",
            translation_general_3: "مواقع إلكترونية",
            
            request_translation: "طلب خدمة الترجمة",
            
            // قسم خطوات التسجيل
            registration_steps_subtitle: "خطوات بسيطة وواضحة",
            registration_steps_title: "خطوات التسجيل في الجامعة",
            registration_steps_description: "نقدم لك دليلاً تفصيلياً لخطوات التسجيل في الجامعات الروسية",
            
            step1_title: "تجهيز المستندات",
            step1_description: "تجهيز وترجمة جميع المستندات المطلوبة",
            step1_detail1: "جواز السفر",
            step1_detail2: "الشهادات الأكاديمية",
            step1_detail3: "الشهادة الصحية",
            
            step2_title: "اختيار الجامعة",
            step2_description: "اختيار الجامعة والتخصص المناسب",
            step2_detail1: "اختيار التخصص",
            step2_detail2: "تحديد الجامعة",
            step2_detail3: "دراسة التكاليف",
            
            step3_title: "تقديم الطلب",
            step3_description: "تقديم طلب القبول للجامعة",
            step3_detail1: "ملء نموذج التقديم",
            step3_detail2: "إرسال المستندات",
            step3_detail3: "دفع رسوم التقديم",
            
            step4_title: "القبول والتأشيرة",
            step4_description: "استلام القبول وإجراءات التأشيرة",
            step4_detail1: "استلام خطاب القبول",
            step4_detail2: "تقديم طلب التأشيرة",
            step4_detail3: "حجز السكن",
            
            start_application: "ابدأ رحلة دراستك الآن",
            
            // قسم التأمين الطبي
            insurance_subtitle: "حماية صحية شاملة",
            insurance_title: "التأمين الطبي للطلاب",
            insurance_description: "نوفر تغطية تأمينية شاملة لضمان رعايتك الصحية خلال فترة دراستك",
            
            insurance_coverage_title: "تغطية شاملة",
            insurance_coverage_1: "تغطية العلاج في المستشفيات",
            insurance_coverage_2: "خدمات الطوارئ على مدار 24 ساعة",
            insurance_coverage_3: "الفحوصات الطبية الدورية",
            
            insurance_features_title: "مميزات التأمين",
            insurance_feature_1: "شبكة واسعة من المستشفيات",
            insurance_feature_2: "خدمة العملاء بلغات متعددة",
            insurance_feature_3: "تغطية الأدوية الموصوفة",
            
            insurance_services_title: "خدمات إضافية",
            insurance_service_1: "استشارات طبية عن بعد",
            insurance_service_2: "خدمات الإسعاف المجانية",
            insurance_service_3: "تغطية العلاج النفسي",
            
            insurance_cta_text: "احصل على تغطية تأمينية شاملة لرحلتك الدراسية",
            insurance_cta_button: "تواصل معنا للحصول على التأمين",
        },
        en: {
            // Main Menu
            site_title: 'Uchoba Study in Russia',
            brand_name: 'Uchoba',
            study_subtitle: 'Study in Russia',
            study: 'Study',
            tourism: 'Tourism',
            contact: 'Contact Us',
            language: 'Language',

            // Hero Section
            hero_badge: 'Trusted Education Partner',
            hero_title: 'Start Your Academic Journey in Russia',
            hero_description: 'We open doors to your future with the best Russian universities. Comprehensive services and complete support to achieve your higher education dream.',
            free_consultation: 'Get Free Consultation',
            
            // Features
            feature_programs: 'Accredited Programs',
            feature_programs_desc: 'Internationally recognized certificates',
            feature_support: 'Complete Support',
            feature_support_desc: 'Guidance from start to finish',
            feature_experience: 'International Experience',
            feature_experience_desc: 'Specialized team in international education',
            
            // Services
            services_title: 'Our Services',
            services_subtitle: 'Our Premium Services',
            most_requested: "Most Popular Service",
            certified_translation: "Officially Certified Translation",
            guaranteed_housing: "Guaranteed Student Housing",
            
            registration_title: "University Enrollment",
            registration_description: "We provide comprehensive support for enrollment in top Russian universities, from choosing the right program to completing admission",
            registration_feature1: "University and program selection",
            registration_feature2: "Document preparation and certification",
            registration_feature3: "Complete admission support",
            
            translation_title: "Certified Translation Services",
            translation_description: "We offer certified and accurate translation for all academic and official documents with authentication",
            translation_feature1: "Certified document translation",
            translation_feature2: "Official translation authentication",
            translation_feature3: "Fast service with high quality",
            
            housing_title: "Student Housing Services",
            housing_description: "We guarantee comfortable and safe accommodation in either university dorms or private apartments at competitive prices",
            housing_feature1: "Safe and equipped university housing",
            housing_feature2: "Modern furnished apartments",
            housing_feature3: "Locations near universities",
            
            request_service: "Book Service Now",
            
            close: "Close",
            
            // Translation Services Section
            translation_section_title: "Certified Translation Services",
            translation_section_subtitle: "Professional and Accurate Translation",
            translation_section_description: "We provide certified and accurate translation services for all types of documents with quality and speed guarantee",
            
            translation_legal: "Legal Translation",
            translation_legal_desc: "Certified translation for legal and official documents with stamp and authentication",
            translation_legal_1: "Contracts and Agreements",
            translation_legal_2: "Official Documents and Certificates",
            translation_legal_3: "Legal Authentication",
            
            translation_academic: "Academic Translation",
            translation_academic_desc: "Accurate translation for academic documents and research papers",
            translation_academic_1: "Academic Certificates",
            translation_academic_2: "Research Papers",
            translation_academic_3: "Academic Records",
            
            translation_general: "General Translation",
            translation_general_desc: "Professional translation for all types of texts and general documents",
            translation_general_1: "Personal Documents",
            translation_general_2: "Marketing Content",
            translation_general_3: "Websites",
            
            request_translation: "Request Translation Service",
            
            // Registration Steps Section
            registration_steps_subtitle: "Simple and Clear Steps",
            registration_steps_title: "University Registration Steps",
            registration_steps_description: "We provide a detailed guide for registration in Russian universities",
            
            step1_title: "Document Preparation",
            step1_description: "Prepare and translate all required documents",
            step1_detail1: "Passport",
            step1_detail2: "Academic Certificates",
            step1_detail3: "Health Certificate",
            
            step2_title: "University Selection",
            step2_description: "Choose the right university and specialization",
            step2_detail1: "Choose Specialization",
            step2_detail2: "Select University",
            step2_detail3: "Study Costs",
            
            step3_title: "Application Submission",
            step3_description: "Submit university admission application",
            step3_detail1: "Fill Application Form",
            step3_detail2: "Submit Documents",
            step3_detail3: "Pay Application Fees",
            
            step4_title: "Admission and Visa",
            step4_description: "Receive admission and visa procedures",
            step4_detail1: "Receive Acceptance Letter",
            step4_detail2: "Apply for Visa",
            step4_detail3: "Book Accommodation",
            
            start_application: "Start Your Study Journey Now",
            
            // Insurance Section
            insurance_subtitle: "Comprehensive Health Protection",
            insurance_title: "Student Medical Insurance",
            insurance_description: "We provide comprehensive insurance coverage to ensure your healthcare during your studies",
            
            insurance_coverage_title: "Full Coverage",
            insurance_coverage_1: "Hospital Treatment Coverage",
            insurance_coverage_2: "24/7 Emergency Services",
            insurance_coverage_3: "Regular Medical Check-ups",
            
            insurance_features_title: "Insurance Features",
            insurance_feature_1: "Wide Network of Hospitals",
            insurance_feature_2: "Multilingual Customer Service",
            insurance_feature_3: "Prescription Medicine Coverage",
            
            insurance_services_title: "Additional Services",
            insurance_service_1: "Telemedicine Consultations",
            insurance_service_2: "Free Ambulance Services",
            insurance_service_3: "Mental Health Coverage",
            
            insurance_cta_text: "Get comprehensive insurance coverage for your academic journey",
            insurance_cta_button: "Contact us for insurance",
        },
        ru: {
            // Главное меню
            site_title: 'Учоба - Обучение в России',
            brand_name: 'Учоба',
            study_subtitle: 'Обучение в России',
            study: 'Обучение',
            tourism: 'Туризм',
            contact: 'Связаться',
            language: 'Язык',

            // Герой секция
            hero_badge: 'Надежный Образовательный Партнер',
            hero_title: 'Начните Свой Путь в Образовании в России',
            hero_description: 'Мы открываем двери в ваше будущее с лучшими российскими университетами. Комплексные услуги и полная поддержка для достижения вашей мечты о высшем образовании.',
            free_consultation: 'Получить Бесплатную Консультацию',
            
            // Преимущества
            feature_programs: 'Аккредитованные Программы',
            feature_programs_desc: 'Международно признанные сертификаты',
            feature_support: 'Полная Поддержка',
            feature_support_desc: 'Сопровождение от начала до конца',
            feature_experience: 'Международный Опыт',
            feature_experience_desc: 'Специализированная команда в международном образовании',
            
            // Услуги
            services_title: 'Наши Услуги',
            services_subtitle: 'Наши Премиум Услуги',
            most_requested: "Самая Популярная Услуга",
            certified_translation: "Официально Заверенный Перевод",
            guaranteed_housing: "Гарантированное Студенческое Жилье",
            
            registration_title: "Поступление в Университет",
            registration_description: "Мы предоставляем комплексную поддержку при поступлении в ведущие российские университеты, от выбора программы до завершения приема",
            registration_feature1: "Подбор университета и программы",
            registration_feature2: "Подготовка и заверение документов",
            registration_feature3: "Полная поддержка поступления",
            
            translation_title: "Услуги Заверенного Перевода",
            translation_description: "Мы предлагаем сертифицированный и точный перевод всех академических и официальных документов с заверением",
            translation_feature1: "Заверенный перевод документов",
            translation_feature2: "Официальное заверение переводов",
            translation_feature3: "Быстрый сервис высокого качества",
            
            housing_title: "Услуги Студенческого Жилья",
            housing_description: "Мы гарантируем комфортное и безопасное проживание в общежитиях университета или частных квартирах по конкурентным ценам",
            housing_feature1: "Безопасное университетское жилье",
            housing_feature2: "Современные меблированные квартиры",
            housing_feature3: "Расположение рядом с университетами",
            
            request_service: "Забронировать Сейчас",
            
            close: "Закрыть",
            
            // Раздел Услуг Перевода
            translation_section_title: "Услуги Сертифицированного Перевода",
            translation_section_subtitle: "Профессиональный и Точный Перевод",
            translation_section_description: "Мы предоставляем сертифицированные и точные услуги перевода для всех типов документов с гарантией качества и скорости",
            
            translation_legal: "Юридический Перевод",
            translation_legal_desc: "Сертифицированный перевод юридических и официальных документов с печатью и заверением",
            translation_legal_1: "Контракты и Соглашения",
            translation_legal_2: "Официальные Документы и Сертификаты",
            translation_legal_3: "Юридическое Заверение",
            
            translation_academic: "Академический Перевод",
            translation_academic_desc: "Точный перевод академических документов и научных работ",
            translation_academic_1: "Академические Сертификаты",
            translation_academic_2: "Научные Работы",
            translation_academic_3: "Академические Записи",
            
            translation_general: "Общий Перевод",
            translation_general_desc: "Профессиональный перевод всех видов текстов и общих документов",
            translation_general_1: "Личные Документы",
            translation_general_2: "Маркетинговые Материалы",
            translation_general_3: "Веб-сайты",
            
            request_translation: "Заказать Услугу Перевода",
            
            // Раздел Шаги Регистрации
            registration_steps_subtitle: "Простые и Понятные Шаги",
            registration_steps_title: "Этапы Поступления в Университет",
            registration_steps_description: "Мы предоставляем подробное руководство по этапам регистрации в российских университетах",
            
            step1_title: "Подготовка Документов",
            step1_description: "Подготовка и перевод всех необходимых документов",
            step1_detail1: "Паспорт",
            step1_detail2: "Академические Сертификаты",
            step1_detail3: "Медицинская Справка",
            
            step2_title: "Выбор Университета",
            step2_description: "Выбор подходящего университета и специальности",
            step2_detail1: "Выбор Специальности",
            step2_detail2: "Выбор Университета",
            step2_detail3: "Изучение Стоимости",
            
            step3_title: "Подача Заявления",
            step3_description: "Подача заявления на поступление",
            step3_detail1: "Заполнение Анкеты",
            step3_detail2: "Отправка Документов",
            step3_detail3: "Оплата Сбора",
            
            step4_title: "Зачисление и Виза",
            step4_description: "Получение зачисления и оформление визы",
            step4_detail1: "Получение Письма о Зачислении",
            step4_detail2: "Подача на Визу",
            step4_detail3: "Бронирование Жилья",
            
            start_application: "Начните Свое Обучение Сейчас",
            
            // Insurance Section
            insurance_subtitle: "Комплексная Защита Здоровья",
            insurance_title: "Медицинское Страхование Студентов",
            insurance_description: "Мы предоставляем комплексное страховое покрытие для обеспечения вашего здоровья во время учебы",
            
            insurance_coverage_title: "Полное Покрытие",
            insurance_coverage_1: "Покрытие Лечения в Больницах",
            insurance_coverage_2: "Круглосуточные Экстренные Службы",
            insurance_coverage_3: "Регулярные Медицинские Осмотры",
            
            insurance_features_title: "Особенности Страхования",
            insurance_feature_1: "Широкая Сеть Больниц",
            insurance_feature_2: "Многоязычная Служба Поддержки",
            insurance_feature_3: "Покрытие Рецептурных Лекарств",
            
            insurance_services_title: "Дополнительные Услуги",
            insurance_service_1: "Телемедицинские Консультации",
            insurance_service_2: "Бесплатные Услуги Скорой Помощи",
            insurance_service_3: "Покрытие Психологической Помощи",
            
            insurance_cta_text: "Получите комплексное страховое покрытие для вашего обучения",
            insurance_cta_button: "Свяжитесь с нами для страхования",
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
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تحديث classes Bootstrap
        const body = document.body;
        if (lang === 'ar') {
            body.classList.remove('ltr');
            body.classList.add('rtl');
            // تحديث classes Bootstrap
            document.querySelectorAll('.ml-auto').forEach(el => {
                el.classList.remove('ml-auto');
                el.classList.add('mr-auto');
            });
            document.querySelectorAll('.mr-auto').forEach(el => {
                el.classList.remove('mr-auto');
                el.classList.add('ml-auto');
            });
            // تحديث classes الشبكة
            document.querySelectorAll('[class*="offset-"]').forEach(el => {
                const classes = el.className.split(' ');
                classes.forEach(cls => {
                    if (cls.startsWith('offset-')) {
                        el.classList.remove(cls);
                    }
                });
            });
        } else {
            body.classList.remove('rtl');
            body.classList.add('ltr');
            // تحديث classes Bootstrap
            document.querySelectorAll('.mr-auto').forEach(el => {
                el.classList.remove('mr-auto');
                el.classList.add('ml-auto');
            });
            document.querySelectorAll('.ml-auto').forEach(el => {
                el.classList.remove('ml-auto');
                el.classList.add('mr-auto');
            });
        }

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

        // تحديث اتجاه العناصر المخصصة
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
        });

        // تحديث اتجاه قوائم المميزات
        const featureLists = document.querySelectorAll('.service-features');
        featureLists.forEach(list => {
            list.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
        });

        // حفظ اللغة المحددة
        localStorage.setItem('selectedLanguage', lang);

        // إعادة تهيئة AOS للتأكد من عمل التأثيرات بشكل صحيح
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
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
        services_subtitle: "خدماتنا المتميزة",
        services_title: "خدمات شاملة للدراسة في روسيا",
        most_requested: "الخدمة الأكثر طلباً",
        certified_translation: "ترجمة معتمدة رسمياً",
        guaranteed_housing: "سكن طلابي مضمون",
        
        registration_title: "التسجيل الجامعي",
        registration_description: "نقدم خدمة شاملة للتسجيل في أفضل الجامعات الروسية، من اختيار التخصص المناسب حتى إتمام القبول",
        registration_feature1: "اختيار الجامعة والتخصص المناسب",
        registration_feature2: "تجهيز وتصديق جميع المستندات",
        registration_feature3: "متابعة كاملة لإجراءات القبول",
        
        translation_title: "خدمات الترجمة المعتمدة",
        translation_description: "نوفر خدمات ترجمة معتمدة ودقيقة لكافة المستندات الدراسية والرسمية مع التصديق",
        translation_feature1: "ترجمة معتمدة للشهادات والوثائق",
        translation_feature2: "تصديق رسمي للترجمات",
        translation_feature3: "خدمة سريعة وجودة عالية",
        
        housing_title: "خدمات السكن الطلابي",
        housing_description: "نضمن لك سكناً مريحاً وآمناً سواء في السكن الجامعي أو الشقق الخاصة بأسعار تنافسية",
        housing_feature1: "سكن جامعي آمن ومجهز",
        housing_feature2: "شقق مفروشة حديثة",
        housing_feature3: "مواقع قريبة من الجامعات",
        
        request_service: "احجز الخدمة الآن",
        
        close: "إغلاق",
        
        // قسم خدمات الترجمة
        translation_section_title: "خدمات الترجمة المعتمدة",
        translation_section_subtitle: "ترجمة احترافية ودقيقة",
        translation_section_description: "نقدم خدمات ترجمة معتمدة ودقيقة لجميع أنواع الوثائق مع ضمان الجودة والسرعة في التنفيذ",
        
        translation_legal: "الترجمة القانونية",
        translation_legal_desc: "ترجمة معتمدة للوثائق القانونية والرسمية مع ختم وتصديق",
        translation_legal_1: "ترجمة عقود وإتفاقيات",
        translation_legal_2: "وثائق رسمية وشهادات",
        translation_legal_3: "تصديق قانوني معتمد",
        
        translation_academic: "الترجمة الأكاديمية",
        translation_academic_desc: "ترجمة دقيقة للوثائق الأكاديمية والبحوث العلمية",
        translation_academic_1: "شهادات دراسية",
        translation_academic_2: "أبحاث علمية",
        translation_academic_3: "سجلات أكاديمية",
        
        translation_general: "الترجمة العامة",
        translation_general_desc: "ترجمة احترافية لجميع أنواع النصوص والوثائق العامة",
        translation_general_1: "مستندات شخصية",
        translation_general_2: "محتوى تسويقي",
        translation_general_3: "مواقع إلكترونية",
        
        request_translation: "طلب خدمة الترجمة",
        
        // قسم خطوات التسجيل
        registration_steps_subtitle: "خطوات بسيطة وواضحة",
        registration_steps_title: "خطوات التسجيل في الجامعة",
        registration_steps_description: "نقدم لك دليلاً تفصيلياً لخطوات التسجيل في الجامعات الروسية",
        
        step1_title: "تجهيز المستندات",
        step1_description: "تجهيز وترجمة جميع المستندات المطلوبة",
        step1_detail1: "جواز السفر",
        step1_detail2: "الشهادات الأكاديمية",
        step1_detail3: "الشهادة الصحية",
        
        step2_title: "اختيار الجامعة",
        step2_description: "اختيار الجامعة والتخصص المناسب",
        step2_detail1: "اختيار التخصص",
        step2_detail2: "تحديد الجامعة",
        step2_detail3: "دراسة التكاليف",
        
        step3_title: "تقديم الطلب",
        step3_description: "تقديم طلب القبول للجامعة",
        step3_detail1: "ملء نموذج التقديم",
        step3_detail2: "إرسال المستندات",
        step3_detail3: "دفع رسوم التقديم",
        
        step4_title: "القبول والتأشيرة",
        step4_description: "استلام القبول وإجراءات التأشيرة",
        step4_detail1: "استلام خطاب القبول",
        step4_detail2: "تقديم طلب التأشيرة",
        step4_detail3: "حجز السكن",
        
        start_application: "ابدأ رحلة دراستك الآن",
        
        // قسم التأمين الطبي
        insurance_subtitle: "حماية صحية شاملة",
        insurance_title: "التأمين الطبي للطلاب",
        insurance_description: "نوفر تغطية تأمينية شاملة لضمان رعايتك الصحية خلال فترة دراستك",
        
        insurance_coverage_title: "تغطية شاملة",
        insurance_coverage_1: "تغطية العلاج في المستشفيات",
        insurance_coverage_2: "خدمات الطوارئ على مدار 24 ساعة",
        insurance_coverage_3: "الفحوصات الطبية الدورية",
        
        insurance_features_title: "مميزات التأمين",
        insurance_feature_1: "شبكة واسعة من المستشفيات",
        insurance_feature_2: "خدمة العملاء بلغات متعددة",
        insurance_feature_3: "تغطية الأدوية الموصوفة",
        
        insurance_services_title: "خدمات إضافية",
        insurance_service_1: "استشارات طبية عن بعد",
        insurance_service_2: "خدمات الإسعاف المجانية",
        insurance_service_3: "تغطية العلاج النفسي",
        
        insurance_cta_text: "احصل على تغطية تأمينية شاملة لرحلتك الدراسية",
        insurance_cta_button: "تواصل معنا للحصول على التأمين",
    },
    en: {
        services_subtitle: "Our Premium Services",
        services_title: "Comprehensive Study Solutions in Russia",
        most_requested: "Most Popular Service",
        certified_translation: "Officially Certified Translation",
        guaranteed_housing: "Guaranteed Student Housing",
        
        registration_title: "University Enrollment",
        registration_description: "We provide comprehensive support for enrollment in top Russian universities, from choosing the right program to completing admission",
        registration_feature1: "University and program selection",
        registration_feature2: "Document preparation and certification",
        registration_feature3: "Complete admission support",
        
        translation_title: "Certified Translation Services",
        translation_description: "We offer certified and accurate translation for all academic and official documents with authentication",
        translation_feature1: "Certified document translation",
        translation_feature2: "Official translation authentication",
        translation_feature3: "Fast service with high quality",
        
        housing_title: "Student Housing Services",
        housing_description: "We guarantee comfortable and safe accommodation in either university dorms or private apartments at competitive prices",
        housing_feature1: "Safe and equipped university housing",
        housing_feature2: "Modern furnished apartments",
        housing_feature3: "Locations near universities",
        
        request_service: "Book Service Now",
        
        close: "Close",
        
        // Translation Services Section
        translation_section_title: "Certified Translation Services",
        translation_section_subtitle: "Professional and Accurate Translation",
        translation_section_description: "We provide certified and accurate translation services for all types of documents with quality and speed guarantee",
        
        translation_legal: "Legal Translation",
        translation_legal_desc: "Certified translation for legal and official documents with stamp and authentication",
        translation_legal_1: "Contracts and Agreements",
        translation_legal_2: "Official Documents and Certificates",
        translation_legal_3: "Legal Authentication",
        
        translation_academic: "Academic Translation",
        translation_academic_desc: "Accurate translation for academic documents and research papers",
        translation_academic_1: "Academic Certificates",
        translation_academic_2: "Research Papers",
        translation_academic_3: "Academic Records",
        
        translation_general: "General Translation",
        translation_general_desc: "Professional translation for all types of texts and general documents",
        translation_general_1: "Personal Documents",
        translation_general_2: "Marketing Content",
        translation_general_3: "Websites",
        
        request_translation: "Request Translation Service",
        
        // Registration Steps Section
        registration_steps_subtitle: "Simple and Clear Steps",
        registration_steps_title: "University Registration Steps",
        registration_steps_description: "We provide a detailed guide for registration in Russian universities",
        
        step1_title: "Document Preparation",
        step1_description: "Prepare and translate all required documents",
        step1_detail1: "Passport",
        step1_detail2: "Academic Certificates",
        step1_detail3: "Health Certificate",
        
        step2_title: "University Selection",
        step2_description: "Choose the right university and specialization",
        step2_detail1: "Choose Specialization",
        step2_detail2: "Select University",
        step2_detail3: "Study Costs",
        
        step3_title: "Application Submission",
        step3_description: "Submit university admission application",
        step3_detail1: "Fill Application Form",
        step3_detail2: "Submit Documents",
        step3_detail3: "Pay Application Fees",
        
        step4_title: "Admission and Visa",
        step4_description: "Receive admission and visa procedures",
        step4_detail1: "Receive Acceptance Letter",
        step4_detail2: "Apply for Visa",
        step4_detail3: "Book Accommodation",
        
        start_application: "Start Your Study Journey Now",
        
        // Insurance Section
        insurance_subtitle: "Comprehensive Health Protection",
        insurance_title: "Student Medical Insurance",
        insurance_description: "We provide comprehensive insurance coverage to ensure your healthcare during your studies",
        
        insurance_coverage_title: "Full Coverage",
        insurance_coverage_1: "Hospital Treatment Coverage",
        insurance_coverage_2: "24/7 Emergency Services",
        insurance_coverage_3: "Regular Medical Check-ups",
        
        insurance_features_title: "Insurance Features",
        insurance_feature_1: "Wide Network of Hospitals",
        insurance_feature_2: "Multilingual Customer Service",
        insurance_feature_3: "Prescription Medicine Coverage",
        
        insurance_services_title: "Additional Services",
        insurance_service_1: "Telemedicine Consultations",
        insurance_service_2: "Free Ambulance Services",
        insurance_service_3: "Mental Health Coverage",
        
        insurance_cta_text: "Get comprehensive insurance coverage for your academic journey",
        insurance_cta_button: "Contact us for insurance",
    },
    ru: {
        services_subtitle: "Наши Премиум Услуги",
        services_title: "Комплексные Решения для Обучения в России",
        most_requested: "Самая Популярная Услуга",
        certified_translation: "Официально Заверенный Перевод",
        guaranteed_housing: "Гарантированное Студенческое Жилье",
        
        registration_title: "Поступление в Университет",
        registration_description: "Мы предоставляем комплексную поддержку при поступлении в ведущие российские университеты, от выбора программы до завершения приема",
        registration_feature1: "Подбор университета и программы",
        registration_feature2: "Подготовка и заверение документов",
        registration_feature3: "Полная поддержка поступления",
        
        translation_title: "Услуги Заверенного Перевода",
        translation_description: "Мы предлагаем сертифицированный и точный перевод всех академических и официальных документов с заверением",
        translation_feature1: "Заверенный перевод документов",
        translation_feature2: "Официальное заверение переводов",
        translation_feature3: "Быстрый сервис высокого качества",
        
        housing_title: "Услуги Студенческого Жилья",
        housing_description: "Мы гарантируем комфортное и безопасное проживание в общежитиях университета или частных квартирах по конкурентным ценам",
        housing_feature1: "Безопасное университетское жилье",
        housing_feature2: "Современные меблированные квартиры",
        housing_feature3: "Расположение рядом с университетами",
        
        request_service: "Забронировать Сейчас",
        
        close: "Закрыть",
        
        // Раздел Услуг Перевода
        translation_section_title: "Услуги Сертифицированного Перевода",
        translation_section_subtitle: "Профессиональный и Точный Перевод",
        translation_section_description: "Мы предоставляем сертифицированные и точные услуги перевода для всех типов документов с гарантией качества и скорости",
        
        translation_legal: "Юридический Перевод",
        translation_legal_desc: "Сертифицированный перевод юридических и официальных документов с печатью и заверением",
        translation_legal_1: "Контракты и Соглашения",
        translation_legal_2: "Официальные Документы и Сертификаты",
        translation_legal_3: "Юридическое Заверение",
        
        translation_academic: "Академический Перевод",
        translation_academic_desc: "Точный перевод академических документов и научных работ",
        translation_academic_1: "Академические Сертификаты",
        translation_academic_2: "Научные Работы",
        translation_academic_3: "Академические Записи",
        
        translation_general: "Общий Перевод",
        translation_general_desc: "Профессиональный перевод всех видов текстов и общих документов",
        translation_general_1: "Личные Документы",
        translation_general_2: "Маркетинговые Материалы",
        translation_general_3: "Веб-сайты",
        
        request_translation: "Заказать Услугу Перевода",
        
        // Раздел Шаги Регистрации
        registration_steps_subtitle: "Простые и Понятные Шаги",
        registration_steps_title: "Этапы Поступления в Университет",
        registration_steps_description: "Мы предоставляем подробное руководство по этапам регистрации в российских университетах",
        
        step1_title: "Подготовка Документов",
        step1_description: "Подготовка и перевод всех необходимых документов",
        step1_detail1: "Паспорт",
        step1_detail2: "Академические Сертификаты",
        step1_detail3: "Медицинская Справка",
        
        step2_title: "Выбор Университета",
        step2_description: "Выбор подходящего университета и специальности",
        step2_detail1: "Выбор Специальности",
        step2_detail2: "Выбор Университета",
        step2_detail3: "Изучение Стоимости",
        
        step3_title: "Подача Заявления",
        step3_description: "Подача заявления на поступление",
        step3_detail1: "Заполнение Анкеты",
        step3_detail2: "Отправка Документов",
        step3_detail3: "Оплата Сбора",
        
        step4_title: "Зачисление и Виза",
        step4_description: "Получение зачисления и оформление визы",
        step4_detail1: "Получение Письма о Зачислении",
        step4_detail2: "Подача на Визу",
        step4_detail3: "Бронирование Жилья",
        
        start_application: "Начните Свое Обучение Сейчас",
        
        // Insurance Section
        insurance_subtitle: "Комплексная Защита Здоровья",
        insurance_title: "Медицинское Страхование Студентов",
        insurance_description: "Мы предоставляем комплексное страховое покрытие для обеспечения вашего здоровья во время учебы",
        
        insurance_coverage_title: "Полное Покрытие",
        insurance_coverage_1: "Покрытие Лечения в Больницах",
        insurance_coverage_2: "Круглосуточные Экстренные Службы",
        insurance_coverage_3: "Регулярные Медицинские Осмотры",
        
        insurance_features_title: "Особенности Страхования",
        insurance_feature_1: "Широкая Сеть Больниц",
        insurance_feature_2: "Многоязычная Служба Поддержки",
        insurance_feature_3: "Покрытие Рецептурных Лекарств",
        
        insurance_services_title: "Дополнительные Услуги",
        insurance_service_1: "Телемедицинские Консультации",
        insurance_service_2: "Бесплатные Услуги Скорой Помощи",
        insurance_service_3: "Покрытие Психологической Помощи",
        
        insurance_cta_text: "Получите комплексное страховое покрытие для вашего обучения",
        insurance_cta_button: "Свяжитесь с нами для страхования",
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

// تحديث الترجمات لقسم خطوات التسجيل
translations.ar = {
    ...translations.ar,
    registration_steps_subtitle: "خطوات بسيطة وواضحة",
    registration_steps_title: "خطوات التسجيل في الجامعة",
    registration_steps_description: "نقدم لك دليلاً تفصيلياً لخطوات التسجيل في الجامعات الروسية",
    
    step1_title: "تجهيز المستندات",
    step1_description: "تجهيز وترجمة جميع المستندات المطلوبة",
    step1_detail1: "جواز السفر",
    step1_detail2: "الشهادات الأكاديمية",
    step1_detail3: "الشهادة الصحية",
    
    step2_title: "اختيار الجامعة",
    step2_description: "اختيار الجامعة والتخصص المناسب",
    step2_detail1: "اختيار التخصص",
    step2_detail2: "تحديد الجامعة",
    step2_detail3: "دراسة التكاليف",
    
    step3_title: "تقديم الطلب",
    step3_description: "تقديم طلب القبول للجامعة",
    step3_detail1: "ملء نموذج التقديم",
    step3_detail2: "إرسال المستندات",
    step3_detail3: "دفع رسوم التقديم",
    
    step4_title: "القبول والتأشيرة",
    step4_description: "استلام القبول وإجراءات التأشيرة",
    step4_detail1: "استلام خطاب القبول",
    step4_detail2: "تقديم طلب التأشيرة",
    step4_detail3: "حجز السكن",
    
    start_application: "ابدأ رحلة دراستك الآن",
};

translations.en = {
    ...translations.en,
    registration_steps_subtitle: "Simple and Clear Steps",
    registration_steps_title: "University Registration Steps",
    registration_steps_description: "We provide a detailed guide for registration in Russian universities",
    
    step1_title: "Document Preparation",
    step1_description: "Prepare and translate all required documents",
    step1_detail1: "Passport",
    step1_detail2: "Academic Certificates",
    step1_detail3: "Health Certificate",
    
    step2_title: "University Selection",
    step2_description: "Choose the right university and specialization",
    step2_detail1: "Choose Specialization",
    step2_detail2: "Select University",
    step2_detail3: "Study Costs",
    
    step3_title: "Application Submission",
    step3_description: "Submit university admission application",
    step3_detail1: "Fill Application Form",
    step3_detail2: "Submit Documents",
    step3_detail3: "Pay Application Fees",
    
    step4_title: "Admission and Visa",
    step4_description: "Receive admission and visa procedures",
    step4_detail1: "Receive Acceptance Letter",
    step4_detail2: "Apply for Visa",
    step4_detail3: "Book Accommodation",
    
    start_application: "Start Your Study Journey Now",
};

translations.ru = {
    ...translations.ru,
    registration_steps_subtitle: "Простые и Понятные Шаги",
    registration_steps_title: "Этапы Поступления в Университет",
    registration_steps_description: "Мы предоставляем подробное руководство по этапам регистрации в российских университетах",
    
    step1_title: "Подготовка Документов",
    step1_description: "Подготовка и перевод всех необходимых документов",
    step1_detail1: "Паспорт",
    step1_detail2: "Академические Сертификаты",
    step1_detail3: "Медицинская Справка",
    
    step2_title: "Выбор Университета",
    step2_description: "Выбор подходящего университета и специальности",
    step2_detail1: "Выбор Специальности",
    step2_detail2: "Выбор Университета",
    step2_detail3: "Изучение Стоимости",
    
    step3_title: "Подача Заявления",
    step3_description: "Подача заявления на поступление",
    step3_detail1: "Заполнение Анкеты",
    step3_detail2: "Отправка Документов",
    step3_detail3: "Оплата Сбора",
    
    step4_title: "Зачисление и Виза",
    step4_description: "Получение зачисления и оформление визы",
    step4_detail1: "Получение Письма о Зачислении",
    step4_detail2: "Подача на Визу",
    step4_detail3: "Бронирование Жилья",
    
    start_application: "Начните Свое Обучение Сейчас",
};

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
