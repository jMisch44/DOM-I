const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//line break
const lineBreak = document.createElement("br");

//nav bar
let navBarFirst = document.querySelector('nav a:nth-child(1)');
navBarFirst.textContent = siteContent['nav']["nav-item-1"];

let navBarSecond = document.querySelector('nav a:nth-child(2)');
navBarSecond.textContent = siteContent['nav']['nav-item-2'];

let navBarThird = document.querySelector('nav a:nth-child(3)');
navBarThird.textContent = siteContent['nav']['nav-item-3'];

let navBarFourth = document.querySelector('nav a:nth-child(4)');
navBarFourth.textContent = siteContent['nav']['nav-item-4'];

let navBarFifth = document.querySelector('nav a:nth-child(5)');
navBarFifth.textContent = siteContent['nav']['nav-item-5'];

let navBarSixth = document.querySelector('nav a:nth-child(6)');
navBarSixth.textContent = siteContent['nav']['nav-item-6'];

//cta section
const ctaHeading = document.querySelector('.cta-text h1').textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button').textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src']);

//arrays for breaks
const ctaHeadingArray = Array.from(ctaHeading);
console.log(ctaHeadingArray);


//main-content section

//features
let mainTextFeaturesHeading = document.querySelector('.text-content:nth-child(1) h4');
mainTextFeaturesHeading.textContent = siteContent['main-content']['features-h4'];

let mainTextFeaturesPara = document.querySelector('.text-content:nth-child(1) p');
mainTextFeaturesPara.textContent = siteContent['main-content']['features-content'];

//about
let mainTextAboutHeading = document.querySelector('.text-content:nth-child(2) h4');
mainTextAboutHeading.textContent = siteContent['main-content']['about-h4'];

let mainTextAboutPara = document.querySelector('.text-content:nth-child(2) p');
mainTextAboutPara.textContent = siteContent['main-content']['about-content'];

// middle image
let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
//Service
let bottomContentServiceHeading = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
bottomContentServiceHeading.textContent = siteContent['main-content']['services-h4'];

let bottomContentServicePara = document.querySelector('.bottom-content  .text-content:nth-child(1) p');
bottomContentServicePara.textContent = siteContent['main-content']['services-content'];

//Product
let bottomContentProductHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bottomContentProductHeading.textContent = siteContent['main-content']['product-h4'];

let bottomContentProductPara = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bottomContentProductPara.textContent = siteContent['main-content']['product-content'];

//Vision

let bottomContentVisionHeading = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
bottomContentVisionHeading.textContent = siteContent['main-content']['vision-h4'];

let bottomContentVisionPara = document.querySelector('.bottom-content .text-content:nth-child(3) p');
bottomContentVisionPara.textContent = siteContent['main-content']['vision-content'];

//contacts 

let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactParas = document.querySelectorAll('.contact p');

let contactAddress = contactParas[0];
contactAddress.textContent = siteContent['contact']['address'];

let contactPhoneNumber = contactParas[1];
contactPhoneNumber.textContent = siteContent['contact']['phone'];

let contactEmail = contactParas[2];
contactEmail.textContent = siteContent['contact']['email'];

//footer
let copyRight = document.querySelector('footer p');
copyRight.textContent = siteContent['footer']['copyright'];