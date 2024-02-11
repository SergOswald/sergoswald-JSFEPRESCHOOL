const i18Obj = {
    'en': {
        'en': 'en',
        'ru': 'ru',
        'price-option-1': 'Standard',
        'price-option-2': 'Premium',
        'price-option-3': 'Gold',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'email': 'E-mail',
      'phon': 'Phone',
      'messag': 'Message'
    },
    'ru': {
        'en': 'aнг',
        'ru': 'ру',
        'price-option-1': 'Стандарт',
        'price-option-2': 'Премиум',
        'price-option-3': 'Голд',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'email': 'Почта',
      'phon': 'Телефон',
      'messag': 'Сообщение'
    }
  }
 // export default i18Obj;

  

 /* const portfolioBtns1 = document.querySelector('.portfolio-btns');
  const portfolioBtns2 = document.querySelectorAll('.portfolio-btn');
  function changeClassActive() {
      portfolioBtns1.addEventListener( "click" , function(event) {
          portfolioBtns2.forEach( ( e ) => { e.classList.remove('active') } ) ;
      if(event.target.classList.contains("portfolio-btn")) {
          event.target.classList.add('active');
      }
  }
      )
  }
*/

/*const ruButton = document.querySelector(".ru") ;
const engButton = document.querySelector(".en") ;

function translate(language) {
let data = document.querySelectorAll('[data-i18]')
for( let currentElement of data ) {
    if (currentElement.placeholder) {
currentElement.placeholder = i18Obj[language][currentElement.getAttribute("data-i18")]
currentElement.textContent = '' ;
    }
currentElement.textContent = i18Obj[language][currentElement.getAttribute("data-i18")]
}
}

ruButton.addEventListener("click" , translate("ru"))
engButton.addEventListener("click" , translate("en")) */


  //getTranslate()

 
  /*const portfolioRuBut = document.querySelector('.ru');
  const portfolioRu = document.querySelectorAll('[data-i18]');
  
    function changeLan() {
        portfolioRu.addEventListener( "click" , function(event) {
    if(event.target.classList.contains('[data-i18]')) {
      
        portfolioRu.forEach(( img , index ) => {
        img.src = i18Obj[language][currentElement.getAttribute("data-i18")]   
    })
    }
    })
    }
  
  changeLan() ; */

/*const portfoliolang = document.querySelector(".ru") ;
portfoliolang.addEventListener( "click" , getActive ) ;

const toRu = document.querySelectorAll( "[data-i18]")

function getActive(event) {
    const languages = event.target.dataset.leng
    return getTranslate( languages)


    function getTranslate(languages){
        toRu.forEach((element) => {
            element.textContent = i18Obj[languages][element.dataset.i18]  
        })
    }
} */

//getActive()




const portfolioLangRu = document.querySelector(".ru") ;
portfolioLangRu.addEventListener( "click" , getTranslateRu ) ;

const toRu = document.querySelectorAll( "[data-i18]")

   function getTranslateRu(){
        toRu.forEach((element) => {
            element.textContent = i18Obj["ru"][element.dataset.i18]  
        })
    }

const portfolioLangEn = document.querySelector(".en") ;
portfolioLangEn.addEventListener( "click" , getTranslateEn ) ;

const toEn = document.querySelectorAll( "[data-i18]")

   function getTranslateEn(){
        toEn.forEach((element) => {
            element.textContent = i18Obj["en"][element.dataset.i18]  
        })
    }

    const RuEnBut1 = document.querySelector('.switch-lng');
    const EnBut = document.querySelectorAll('.en');
    
    function ActiveEn() {
        RuEnBut1.addEventListener( "click" , function(event) {
            EnBut.forEach( ( e ) => { e.classList.remove('active') } ) ;
        if(event.target.classList.contains('en')) {
            event.target.classList.add('active');
        }
    }
        )
    }

    const RuEnBut2 = document.querySelector('.switch-lng');
    const RuBut = document.querySelectorAll('.ru');
    
    function ActiveRu() {
        RuEnBut2.addEventListener( "click" , function(event) {
            RuBut.forEach( ( e ) => { e.classList.remove('active') } ) ;
        if(event.target.classList.contains('ru')) {
            event.target.classList.add('active');
        }
    }
        )
    }
    
    ActiveEn() ; 
    ActiveRu() ; 

 /*   const findDataset = document.querySelectorAll("[switch-lng]")

    function getTranslate(lang1) {
findDataset.forEach( ( el ) => {
    el.textContent = i18Obj[ lang1 ][el.dataset.changeLng]
})

getTranslate() ; */

/*
const portfolioBtns1 = document.querySelector('.portfolio-btns');
const portfolioBtns2 = document.querySelectorAll('.portfolio-btn');
function changeClassActive() {
    portfolioBtns1.addEventListener( "click" , function(event) {
        portfolioBtns2.forEach( ( e ) => { e.classList.remove('active') } ) ;
    if(event.target.classList.contains("portfolio-btn")) {
        event.target.classList.add('active');
    }
}
    )
}

changeClassActive() ; */