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
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
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
            tourism_site_title: 'أوتشوبا للسياحة في روسيا',
            brand_name: 'أوتشوبا',
            study_subtitle: 'للدراسة في روسيا',
            tourism_subtitle: 'للسياحة في روسيا',
            study: 'الدراسة',
            tourism: 'السياحة',
            contact: 'اتصل بنا',
            hero_title: 'الدراسة في روسيا',
            hero_subtitle: 'نحن هنا لمساعدتك في تحقيق حلمك بالدراسة في روسيا',
            free_consultation: 'احصل على استشارة مجانية',
            our_services: 'خدماتنا',
            registration_admission: 'التسجيل والقبول',
            registration_text: 'نساعدك في إجراءات التسجيل والقبول في الجامعات الروسية',
            translation_services: 'خدمات الترجمة',
            translation_text: 'ترجمة معتمدة لجميع الوثائق المطلوبة',
            student_insurance: 'التأمين الطلابي',
            insurance_text: 'خدمات التأمين الصحي للطلاب',
            faq: 'الأسئلة الشائعة',
            faq_requirements: 'ما هي متطلبات الدراسة في روسيا؟',
            faq_requirements_answer: 'تتضمن المتطلبات الأساسية: شهادة الثانوية العامة، جواز سفر ساري المفعول، وشهادة صحية.',
            quick_links: 'روابط سريعة',
            footer_description: 'خدمات تعليمية وسياحية في روسيا',
            follow_us: 'تواصل معنا',
            tourism_hero_title: 'اكتشف روسيا',
            tourism_hero_subtitle: 'رحلات سياحية مميزة في أجمل المدن الروسية',
            book_tour: 'احجز رحلتك الآن',
            popular_destinations: 'وجهات سياحية شهيرة',
            discover_places: 'اكتشف أجمل الأماكن في روسيا',
            destinations_description: 'تعرف على أشهر المعالم السياحية والوجهات الساحرة في روسيا',
            moscow: 'موسكو',
            moscow_description: 'عاصمة روسيا النابضة بالحياة والتاريخ',
            saint_petersburg: 'سانت بطرسبرغ',
            petersburg_description: 'مدينة القصور والفن والثقافة',
            kazan: 'كازان',
            kazan_description: 'عاصمة تتارستان التاريخية',
            explore_destination: 'استكشف الوجهة',
            view_all_destinations: 'عرض جميع الوجهات',
            tourism_services: 'خدماتنا السياحية',
            accommodation: 'الإقامة',
            accommodation_text: 'حجوزات فندقية في أفضل الفنادق الروسية',
            guided_tours: 'جولات سياحية',
            guided_tours_text: 'جولات مع مرشدين سياحيين محترفين',
            activities: 'الأنشطة والفعاليات',
            activities_text: 'تذاكر للمتاحف والمسارح والفعاليات',
            tourism_footer_description: 'خدمات سياحية متكاملة في روسيا',
            more: 'المزيد',
            flight_tickets: 'تذاكر الطيران',
            flight_tickets_text: 'حجز تذاكر الطيران مع أفضل شركات الطيران',
            transportation: 'المواصلات',
            transportation_text: 'خدمات النقل والمواصلات داخل روسيا',
            special_offers: 'عروضنا المميزة',
            family_offer: 'عرض العائلة',
            family_offer_text: 'رحلة لمدة 7 أيام تشمل الإقامة والمواصلات',
            honeymoon_offer: 'عرض شهر العسل',
            honeymoon_offer_text: 'باقة رومانسية خاصة لمدة 5 أيام',
            price_starting_from: 'ابتداءً من $999',
            book_now: 'احجز الآن',
            discover_russia: "اكتشف روسيا",
            tourism_title: "رحلة لا تُنسى في روسيا",
            tourism_description: "استكشف جمال روسيا الساحر، من القصور التاريخية إلى المناظر الطبيعية الخلابة",
            destinations: "وجهة سياحية",
            tourists: "سائح سنوياً",
            tours: "رحلة منظمة",
            explore_now: "استكشف الآن",
            book_trip: "احجز رحلتك",
            study_page_title: 'صفحة الدراسة',
            study_page_description: 'استكشف المعلومات والدروس المتاحة للدراسة في روسيا',
            study_hero_title: 'مرحباً بكم في صفحة الدراسة',
            study_hero_subtitle: 'استكشف المعلومات والدروس المتاحة للدراسة في روسيا',
            hero_description: 'احصل على معلومات شاملة حول البرامج الدراسية في روسيا.',
            new_translation_key: 'نص جديد',
            top_universities: 'أفضل الجامعات',
            universities: 'الجامعات',
            students: 'الطلاب',
            programs: 'البرامج',
            learn_more: 'تعلم المزيد',
            contact_us: 'اتصل بنا',
        },
        en: {
            site_title: 'Uchoba Study in Russia',
            tourism_site_title: 'Uchoba Tourism in Russia',
            brand_name: 'Uchoba',
            study_subtitle: 'Study in Russia',
            tourism_subtitle: 'Tourism in Russia',
            study: 'Study',
            tourism: 'Tourism',
            contact: 'Contact Us',
            hero_title: 'Study in Russia',
            hero_subtitle: 'We are here to help you achieve your dream of studying in Russia',
            free_consultation: 'Get Free Consultation',
            our_services: 'Our Services',
            registration_admission: 'Registration & Admission',
            registration_text: 'We help you with registration and admission procedures in Russian universities',
            translation_services: 'Translation Services',
            translation_text: 'Certified translation for all required documents',
            student_insurance: 'Student Insurance',
            insurance_text: 'Health insurance services for students',
            faq: 'Frequently Asked Questions',
            faq_requirements: 'What are the requirements to study in Russia?',
            faq_requirements_answer: 'Basic requirements include: High school certificate, valid passport, and health certificate.',
            quick_links: 'Quick Links',
            footer_description: 'Educational and tourism services in Russia',
            follow_us: 'Follow Us',
            tourism_hero_title: 'Discover Russia',
            tourism_hero_subtitle: 'Exceptional tours in the most beautiful Russian cities',
            book_tour: 'Book Your Tour Now',
            popular_destinations: 'Popular Destinations',
            discover_places: 'Discover Beautiful Places in Russia',
            destinations_description: 'Explore famous landmarks and enchanting destinations in Russia',
            moscow: 'Moscow',
            moscow_description: 'Russia\'s vibrant and historic capital',
            saint_petersburg: 'Saint Petersburg',
            petersburg_description: 'City of palaces, art, and culture',
            kazan: 'Kazan',
            kazan_description: 'Historic capital of Tatarstan',
            explore_destination: 'Explore Destination',
            view_all_destinations: 'View All Destinations',
            tourism_services: 'Our Tourism Services',
            accommodation: 'Accommodation',
            accommodation_text: 'Hotel bookings in the best Russian hotels',
            guided_tours: 'Guided Tours',
            guided_tours_text: 'Tours with professional tour guides',
            activities: 'Activities & Events',
            activities_text: 'Tickets for museums, theaters, and events',
            tourism_footer_description: 'Comprehensive tourism services in Russia',
            more: 'More',
            flight_tickets: 'Flight Tickets',
            flight_tickets_text: 'Book flights with the best airlines',
            transportation: 'Transportation',
            transportation_text: 'Transportation services within Russia',
            special_offers: 'Special Offers',
            family_offer: 'Family Package',
            family_offer_text: '7-day trip including accommodation and transportation',
            honeymoon_offer: 'Honeymoon Package',
            honeymoon_offer_text: 'Special 5-day romantic package',
            price_starting_from: 'Starting from $999',
            book_now: 'Book Now',
            discover_russia: "Discover Russia",
            tourism_title: "Unforgettable Journey in Russia",
            tourism_description: "Explore Russia's enchanting beauty, from historic palaces to breathtaking landscapes",
            destinations: "Destinations",
            tourists: "Annual Tourists",
            tours: "Organized Tours",
            explore_now: "Explore Now",
            book_trip: "Book Your Trip",
            study_page_title: 'Study Page',
            study_page_description: 'Explore the available information and lessons for studying in Russia',
            study_hero_title: 'Welcome to the Study Page',
            study_hero_subtitle: 'Explore the available information and lessons for studying in Russia',
            hero_description: 'Get comprehensive information about study programs in Russia.',
            new_translation_key: 'New Text',
            top_universities: 'Top Universities',
            universities: 'Universities',
            students: 'Students',
            programs: 'Programs',
            learn_more: 'Learn More',
            contact_us: 'Contact Us',
        },
        ru: {
            site_title: 'Учеба в России Отчоба',
            tourism_site_title: 'Туризм в России Отчоба',
            brand_name: 'Учеба',
            study_subtitle: 'Учеба в России',
            tourism_subtitle: 'Туризм в России',
            study: 'Учеба',
            tourism: 'Туризм',
            contact: 'Связаться с нами',
            hero_title: 'Учеба в России',
            hero_subtitle: 'Мы здесь, чтобы помочь вам осуществить мечту об учебе в России',
            free_consultation: 'Получить бесплатную консультацию',
            our_services: 'Наши услуги',
            registration_admission: 'Регистрация и поступление',
            registration_text: 'Мы помогаем с процедурами регистрации и поступления в российские университеты',
            translation_services: 'Услуги перевода',
            translation_text: 'Сертифицированный перевод всех необходимых документов',
            student_insurance: 'Страхование студентов',
            insurance_text: 'Услуги медицинского страхования для студентов',
            faq: 'Часто задаваемые вопросы',
            faq_requirements: 'Какие требования для учебы в России?',
            faq_requirements_answer: 'Основные требования включают: аттестат о среднем образовании, действующий паспорт и медицинскую справку.',
            quick_links: 'Быстрые ссылки',
            footer_description: 'Образовательные и туристические услуги в России',
            follow_us: 'Подписывайтесь на нас',
            tourism_hero_title: 'Откройте для себя Россию',
            tourism_hero_subtitle: 'Исключительные туры по красивейшим городам России',
            book_tour: 'Забронировать тур',
            popular_destinations: 'Популярные направления',
            discover_places: 'Откройте для себя красивые места России',
            destinations_description: 'Исследуйте известные достопримечательности и очаровательные места России',
            moscow: 'Москва',
            moscow_description: 'Яркая и историческая столица России',
            saint_petersburg: 'Санкт-Петербург',
            petersburg_description: 'Город дворцов, искусства и культуры',
            kazan: 'Казань',
            kazan_description: 'Историческая столица Татарстана',
            explore_destination: 'Исследовать направление',
            view_all_destinations: 'Посмотреть все направления',
            tourism_services: 'Наши туристические услуги',
            accommodation: 'Проживание',
            accommodation_text: 'Бронирование в лучших отелях России',
            guided_tours: 'Экскурсии',
            guided_tours_text: 'Туры с профессиональными гидами',
            activities: 'Мероприятия',
            activities_text: 'Билеты в музеи, театры и на мероприятия',
            tourism_footer_description: 'Комплексные туристические услуги в России',
            more: 'Подробнее',
            flight_tickets: 'Авиабилеты',
            flight_tickets_text: 'Бронирование авиабилетов у лучших авиакомпаний',
            transportation: 'Транспорт',
            transportation_text: 'Транспортные услуги по России',
            special_offers: 'Специальные предложения',
            family_offer: 'Семейный пакет',
            family_offer_text: '7-дневная поездка с проживанием и транспортом',
            honeymoon_offer: 'Медовый месяц',
            honeymoon_offer_text: 'Специальный 5-дневный романтический пакет',
            price_starting_from: 'От $999',
            book_now: 'Забронировать',
            discover_russia: "Откройте для себя Россию",
            tourism_title: "Незабываемое путешествие по России",
            tourism_description: "Исследуйте очаровательную красоту России, от исторических дворцов до захватывающих пейзажей",
            destinations: "Направления",
            tourists: "Туристов в год",
            tours: "Организованных туров",
            explore_now: "Исследовать",
            book_trip: "Забронировать",
            study_page_title: 'Страница учебы',
            study_page_description: 'Изучите доступную информацию и уроки для учебы в России',
            study_hero_title: 'Добро пожаловать на страницу учебы',
            study_hero_subtitle: 'Изучите доступную информацию и уроки для учебы в России',
            hero_description: 'Получите полную информацию о учебных программах в России.',
            new_translation_key: 'Новый текст',
            top_universities: 'Топ университеты',
            universities: 'Университеты',
            students: 'Студенты',
            programs: 'Программы',
            learn_more: 'Узнать больше',
            contact_us: 'Связаться с нами',
        }
    };

    // تحديث اللغة المحددة
    function updateLanguage(lang) {
        // تحديث الزر النشط
        languageItems.forEach(item => {
            if(item.dataset.lang === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // تحديث اللغة المعروضة
        const langNames = {
            ar: 'العربية',
            en: 'English',
            ru: 'Русский'
        };
        currentLangSpan.textContent = langNames[lang];

        // تحديث النصوص في الصفحة
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
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

        // تحديث الـ CSS للاتجاه
        const body = document.body;
        if (lang === 'ar') {
            body.classList.remove('ltr');
            body.classList.add('rtl');
        } else {
            body.classList.remove('rtl');
            body.classList.add('ltr');
        }

        // حفظ اللغة المحددة
        localStorage.setItem('selectedLanguage', lang);
    }

    // تفعيل تغيير اللغة عند النقر
    languageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // تحميل اللغة المحفوظة
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    updateLanguage(savedLanguage);

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
