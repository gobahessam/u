// قاموس الترجمات للسياحة
const tourismTranslations = {
    ar: {
        brand_name: 'أوتشوبا',
        tourism_site_title: 'أوتشوبا للسياحة في روسيا',
        tourism_subtitle: 'للسياحة في روسيا',
        tourism: 'السياحة',
        study: 'الدراسة',
        contact: 'اتصل بنا',
        discover_russia: 'اكتشف روسيا',
        tourism_hero_title: 'اكتشف روسيا',
        tourism_hero_subtitle: 'رحلات سياحية مميزة في أجمل المدن الروسية',
        tourism_services: 'خدماتنا السياحية',
        tourism_footer_description: 'خدمات سياحية متكاملة في روسيا',
        tourism_title: "رحلة لا تُنسى في روسيا",
        tourism_description: "استكشف جمال روسيا الساحر، من القصور التاريخية إلى المناظر الطبيعية الخلابة",
        popular_destinations: 'الوجهات السياحية الشهيرة',
        discover_places: 'اكتشف أجمل الأماكن في روسيا',
        destinations_description: 'تعرف على المعالم الشهيرة والأماكن الساحرة في روسيا',
        moscow: 'موسكو',
        moscow_description: 'العاصمة النابضة بالحياة والتاريخ',
        saint_petersburg: 'سانت بطرسبرغ',
        saint_petersburg_description: 'مدينة القصور والفنون الجميلة',
        sochi: 'سوتشي',
        sochi_description: 'منتجع البحر الأسود الرائع ووجهة السياحة الشتوية',
        explore_destination: 'استكشف الوجهة',
        view_all_destinations: 'عرض جميع الوجهات',
        destinations: 'وجهة سياحية',
        tourists: 'سائح سنوياً',
        tours: 'رحلة منظمة',
        explore_now: 'استكشف الآن',
        book_trip: 'احجز رحلتك',
        landmarks: 'معلم سياحي',
        restaurants: 'مطعم',
        hotels: 'فندق',
        sochi_offers: 'عروض سوتشي المميزة',
        sochi_offers_subtitle: 'اكتشف أفضل العروض السياحية في سوتشي'
    },
    en: {
        brand_name: 'Uchoba',
        tourism_site_title: 'Uchoba Tourism in Russia',
        tourism_subtitle: 'Tourism in Russia',
        tourism: 'Tourism',
        study: 'Study',
        contact: 'Contact Us',
        discover_russia: 'Discover Russia',
        tourism_hero_title: 'Discover Russia',
        tourism_hero_subtitle: 'Exceptional tours in the most beautiful Russian cities',
        tourism_services: 'Our Tourism Services',
        tourism_footer_description: 'Comprehensive tourism services in Russia',
        tourism_title: "Unforgettable Journey in Russia",
        tourism_description: "Explore Russia's enchanting beauty, from historic palaces to breathtaking landscapes",
        popular_destinations: 'Popular Destinations',
        discover_places: 'Discover Beautiful Places in Russia',
        destinations_description: 'Explore famous landmarks and enchanting places in Russia',
        moscow: 'Moscow',
        moscow_description: 'The vibrant and historic capital',
        saint_petersburg: 'Saint Petersburg',
        saint_petersburg_description: 'City of palaces and fine arts',
        sochi: 'Sochi',
        sochi_description: 'Beautiful Black Sea resort and winter tourism destination',
        explore_destination: 'Explore Destination',
        view_all_destinations: 'View All Destinations',
        destinations: 'Destinations',
        tourists: 'Annual Tourists',
        tours: 'Organized Tours',
        explore_now: 'Explore Now',
        book_trip: 'Book Your Trip',
        landmarks: 'Landmarks',
        restaurants: 'Restaurants',
        hotels: 'Hotels',
        sochi_offers: 'Special Sochi Offers',
        sochi_offers_subtitle: 'Discover the best tourism offers in Sochi'
    },
    ru: {
        brand_name: 'Учоба',
        tourism_site_title: 'Туризм в России Учоба',
        tourism_subtitle: 'Туризм в России',
        tourism: 'Туризм',
        study: 'Учеба',
        contact: 'Свяжитесь с нами',
        discover_russia: 'Откройте для себя Россию',
        tourism_hero_title: 'Откройте для себя Россию',
        tourism_hero_subtitle: 'Исключительные туры по красивейшим городам России',
        tourism_services: 'Наши туристические услуги',
        tourism_footer_description: 'Комплексные туристические услуги в России',
        tourism_title: "Незабываемое путешествие по России",
        tourism_description: "Исследуйте очаровательную красоту России, от исторических дворцов до захватывающих пейзажей",
        popular_destinations: 'Популярные направления',
        discover_places: 'Откройте для себя красивые места России',
        destinations_description: 'Исследуйте известные достопримечательности и очаровательные места России',
        moscow: 'Москва',
        moscow_description: 'Яркая и историческая столица',
        saint_petersburg: 'Санкт-Петербург',
        saint_petersburg_description: 'Город дворцов и изящных искусств',
        sochi: 'Сочи',
        sochi_description: 'Прекрасный черноморский курорт и направление зимнего туризма',
        explore_destination: 'Исследовать направление',
        view_all_destinations: 'Посмотреть все направления',
        destinations: 'Направления',
        tourists: 'Туристов в год',
        tours: 'Организованных туров',
        explore_now: 'Исследовать сейчас',
        book_trip: 'Забронировать поездку',
        landmarks: 'Достопримечательности',
        restaurants: 'Рестораны',
        hotels: 'Отели',
        sochi_offers: 'Специальные предложения Сочи',
        sochi_offers_subtitle: 'Откройте для себя лучшие туристические предложения в Сочи'
    }
};

// تحديث لغة الصفحة السياحية
function updateTourismLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (tourismTranslations[lang] && tourismTranslations[lang][key]) {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = tourismTranslations[lang][key];
            } else {
                element.textContent = tourismTranslations[lang][key];
            }
        }
    });

    // تحديث عنوان الصفحة
    document.title = tourismTranslations[lang]['tourism_site_title'];

    // تحديث اتجاه الصفحة
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث الكلاسات النشطة لأزرار اللغة
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('active');
        }
    });
}

// تحميل معرض الصور السياحية
function loadTourismGallery() {
    const tourismImages = [
        'https://source.unsplash.com/800x600/?russia,moscow',
        'https://source.unsplash.com/800x600/?russia,saint-petersburg',
        'https://source.unsplash.com/800x600/?russia,sochi',
        'https://source.unsplash.com/800x600/?russia,kremlin',
        'https://source.unsplash.com/800x600/?russia,winter-palace',
        'https://source.unsplash.com/800x600/?russia,black-sea'
    ];

    const gallery = document.getElementById('tourismGallery');
    if (gallery) {
        tourismImages.forEach(image => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="destination-card">
                    <div class="destination-image">
                        <img src="${image}" alt="السياحة في روسيا" class="img-fluid">
                    </div>
                </div>
            `;
            gallery.appendChild(col);
        });
    }
}

// تفعيل النماذج السياحية
document.addEventListener('DOMContentLoaded', function() {
    loadTourismGallery();
    
    // تفعيل تغيير اللغة
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            updateTourismLanguage(this.value);
        });
    }
    
    // تفعيل نموذج حجز الرحلات
    const bookingForm = document.getElementById('tourismBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // إضافة منطق معالجة نموذج الحجز هنا
        });
    }
});

// تفعيل التأثيرات الحركية للصفحة السياحية
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.tourism-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});
