/* I18N and Global Script Logic */

const dictionary = {
  'en': {
    'lang_lbl': 'Language:',
    'hero_sup': 'Your Wellness Companion',
    'hero_t1': 'Feel better,',
    'hero_t2': 'naturally.',
    'hero_sub': 'Home remedies · Guided recipes · Doctor finder',
    'search_ph': 'Type a symptom or condition...',
    'sec_sym_t': 'Choose your symptoms',
    'sec_sym_s': 'Select all that apply for personalised recommendations',
    'btn_plan': 'Get my personalised plan →',
    'nav_home': 'Home',
    'nav_rem': 'Remedies',
    'nav_cook': 'Cook Guide',
    'nav_help': 'Find Help',
    'back': '← Back',
    'back_rem': '← Back to remedies',
    'plan_title': 'Your plan',
    'analyzing': 'Analysing your symptoms',
    'plan_sub': '3 home remedies · 2 recipes · lifestyle plan ready',
    'tab_rem': 'Remedies',
    'tab_cook': 'Cook Guide',
    'tab_life': 'Lifestyle',
    'guide_lbl': 'Guided cooking',
    'guide_sub': 'Step-by-step voice navigation — like GPS for cooking',
    'tap_start': 'Tap to start',
    'tap_start_sub': "I'll guide you through each step",
    'steps_lbl': 'Steps',
    'btn_prev': '← Previous',
    'btn_next': 'Next step →',
    'loc_title': 'Doctors & Yoga Centers Near You',
    'loc_btn': 'Find nearby help →',
    'help_title': 'Nearby help',
    'doc_lbl': 'Doctors nearby',
    'yoga_lbl': 'Yoga centers nearby'
  },
  'hi': {
    'lang_lbl': 'भाषा:',
    'hero_sup': 'आपका स्वास्थ्य साथी',
    'hero_t1': 'बेहतर महसूस करें,',
    'hero_t2': 'प्राकृतिक रूप से।',
    'hero_sub': 'घरेलू उपचार · निर्देशित व्यंजन · डॉक्टर खोजें',
    'search_ph': 'एक लक्षण या स्थिति टाइप करें...',
    'sec_sym_t': 'अपने लक्षण चुनें',
    'sec_sym_s': 'व्यक्तिगत सिफारिशों के लिए सभी लागू विकल्पों का चयन करें',
    'btn_plan': 'मेरी व्यक्तिगत योजना प्राप्त करें →',
    'nav_home': 'होम',
    'nav_rem': 'उपचार',
    'nav_cook': 'कुक गाइड',
    'nav_help': 'मदद खोजें',
    'back': '← वापस',
    'back_rem': '← उपचार पर वापस',
    'plan_title': 'आपकी योजना',
    'analyzing': 'आपके लक्षणों का विश्लेषण',
    'plan_sub': '3 घरेलू उपचार · 2 व्यंजन · जीवनशैली योजना तैयार',
    'tab_rem': 'उपचार',
    'tab_cook': 'कुक गाइड',
    'tab_life': 'जीवनशैली',
    'guide_lbl': 'निर्देशित कुकिंग',
    'guide_sub': 'कदम-दर-कदम आवाज नेविगेशन',
    'tap_start': 'शुरू करने के लिए टैप करें',
    'tap_start_sub': "मैं हर कदम पर आपका मार्गदर्शन करूंगा",
    'steps_lbl': 'कदम',
    'btn_prev': '← पिछला',
    'btn_next': 'अगला कदम →',
    'loc_title': 'आपके आस-पास डॉक्टर और योग केंद्र',
    'loc_btn': 'आस-पास मदद खोजें →',
    'help_title': 'आस-पास मदद',
    'doc_lbl': 'आस-पास के डॉक्टर',
    'yoga_lbl': 'आस-पास योग केंद्र'
  },
  'fr': {
    'hero_sup': 'Votre compagnon bien-être',
    'hero_t1': 'Sentez-vous mieux,',
    'hero_t2': 'naturellement.',
    'sec_sym_t': 'Choisissez vos symptômes'
  },
  'es': {
    'hero_sup': 'Tu compañero de bienestar',
    'hero_t1': 'Siéntete mejor,',
    'hero_t2': 'naturalmente.',
    'sec_sym_t': 'Elige tus síntomas'
  }
};

const fontMap = { 'hi': 'font-hi', 'ta': 'font-ta', 'te': 'font-te', 'kn': 'font-kn' };

document.addEventListener('DOMContentLoaded', () => {
  // Page Transition Fade Slide apply
  document.body.classList.add('fade-in');
  window.scrollTo(0, 0);

  // Initialize Language State
  let currentLang = localStorage.getItem('wellnest_lang') || 'en';
  applyLanguage(currentLang);

  // Sync Language Pills
  const langPills = document.querySelectorAll('.lang-pill');
  langPills.forEach(pill => {
    // Map text slightly hacky based on exact string
    const pillText = pill.textContent.trim();
    let pillCode = 'en';
    if(pillText.includes('हिंदी')) pillCode = 'hi';
    if(pillText.includes('தமிழ்')) pillCode = 'ta';
    if(pillText.includes('తెలుగు')) pillCode = 'te';
    if(pillText.includes('ಕನ್ನಡ')) pillCode = 'kn';
    if(pillText.includes('Français')) pillCode = 'fr';
    if(pillText.includes('Español')) pillCode = 'es';

    if(pillCode === currentLang) {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }

    pill.addEventListener('click', () => {
      langPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyLanguage(pillCode);
      localStorage.setItem('wellnest_lang', pillCode);
    });
  });
});

function applyLanguage(langCode) {
  // Remove all font classes
  document.body.classList.remove('font-hi', 'font-ta', 'font-te', 'font-kn');
  if (fontMap[langCode]) {
    document.body.classList.add(fontMap[langCode]);
  }

  const dict = dictionary[langCode] || dictionary['en'];
  
  // Update all placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    el.placeholder = dict[key] || dictionary['en'][key] || key;
  });

  // Update all text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const trans = dict[key] || dictionary['en'][key];
    if(trans) {
      el.textContent = trans;
    }
  });
}
