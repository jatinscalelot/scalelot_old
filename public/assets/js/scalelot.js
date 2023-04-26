$('.toggle-mode').toggleClass(localStorage.toggled);
if(localStorage.theme && localStorage.theme == "dark") {
  document.querySelector('html').classList.add("dark");
}
else {
  localStorage.theme="light";
  document.querySelector('html').classList.remove("dark");
}
function changeTheme() {
  if (localStorage.theme && localStorage.theme == "dark") {
    localStorage.theme = "light";
  }
  else {
    localStorage.theme = "dark";
  }
}

// Active Class JS
function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
function addActiveD(Id1, db1, title, category, description, imageId, webFrameworks, programmingLanguages, miscellaneous, libraries, uiFrameworks, designingLanguage, designingTools, rating, pageLink) {
  var element = document.querySelector(Id1);
  document.getElementById("popupImage").setAttribute("src", "/assets/images/dynamic-images/" + imageId);
  document.getElementById("portfolioTitle").innerHTML = title;
  document.getElementById("portfolioCategory").innerHTML = category;


  if(!pageLink || pageLink.length == 0) {
    document.getElementById("pageLinkParent") && document.getElementById("pageLinkParent").classList.add('showhidden');
  }
  else {
    document.getElementById("pageLinkParent") && document.getElementById("pageLinkParent").classList.remove('showhidden');
    document.getElementById("pageLink").setAttribute("href", pageLink);
  }

  if(!description || description.length == 0) {
    document.getElementById("descriptionParent") && document.getElementById("descriptionParent").classList.add('showhidden');
  }
  else {
    document.getElementById("descriptionParent") && document.getElementById("descriptionParent").classList.remove('showhidden');
    document.getElementById("description").innerHTML = description;
  }

  if(!description || description.length == 0) {
    document.getElementById("descriptionMobileParent") && document.getElementById("descriptionMobileParent").classList.add('showhidden');
  }
  else {
    document.getElementById("descriptionMobileParent") && document.getElementById("descriptionMobileParent").classList.remove('showhidden');
    document.getElementById("descriptionMobile").innerHTML = description;
  }

  if(!webFrameworks || webFrameworks.length == 0) {
    document.getElementById("webFrameworksParent") && document.getElementById("webFrameworksParent").classList.add('showhidden');
  }
  else {
    document.getElementById("webFrameworksParent") && document.getElementById("webFrameworksParent").classList.remove('showhidden');
    document.getElementById("webFrameworks").innerHTML = webFrameworks;
  }

  if(!programmingLanguages || programmingLanguages.length == 0) {
    document.getElementById("programmingLanguagesParent") && document.getElementById("programmingLanguagesParent").classList.add('showhidden');
  }
  else {
    document.getElementById("programmingLanguagesParent") && document.getElementById("programmingLanguagesParent").classList.remove('showhidden');
    document.getElementById("programmingLanguages").innerHTML = programmingLanguages;
  }

  if(!miscellaneous || miscellaneous.length == 0) {
    document.getElementById("miscellaneousParent") && document.getElementById("miscellaneousParent").classList.add('showhidden');
  }
  else {
    document.getElementById("miscellaneousParent") && document.getElementById("miscellaneousParent").classList.remove('showhidden');
    document.getElementById("miscellaneous").innerHTML = miscellaneous;
  }

  if(!libraries || libraries.length == 0) {
    document.getElementById("librariesParent") && document.getElementById("librariesParent").classList.add('showhidden');
  }
  else {
    document.getElementById("librariesParent") && document.getElementById("librariesParent").classList.remove('showhidden');
    document.getElementById("libraries").innerHTML = libraries;
  }

  if(!uiFrameworks || uiFrameworks.length == 0) {
    document.getElementById("uiFrameworksParent") && document.getElementById("uiFrameworksParent").classList.add('showhidden');
  }
  else {
    document.getElementById("uiFrameworksParent") && document.getElementById("uiFrameworksParent").classList.remove('showhidden');
    document.getElementById("uiFrameworks").innerHTML = uiFrameworks;
  }

  if(!designingTools || designingTools.length == 0) {
    document.getElementById("designingToolsParent") && document.getElementById("designingToolsParent").classList.add('showhidden');
  }
  else {
    document.getElementById("designingToolsParent") && document.getElementById("designingToolsParent").classList.remove('showhidden');
    document.getElementById("designingTools").innerHTML = designingTools;
  }

  if(!designingLanguage || designingLanguage.length == 0) {
    document.getElementById("designingLanguageParent") && document.getElementById("designingLanguageParent").classList.add('showhidden');
  }
  else {
    document.getElementById("designingLanguageParent") && document.getElementById("designingLanguageParent").classList.remove('showhidden');
    document.getElementById("designingLanguage").innerHTML = designingLanguage;
  }

  if(!rating || rating.length == 0) {
    document.getElementById("ratingDynamic") && document.getElementById("ratingDynamic").classList.add('showhidden');
  }
  else {
    document.getElementById("ratingDynamic") && document.getElementById("ratingDynamic").classList.remove('showhidden');
    document.getElementById("ratingDynamic").innerHTML = rating;
  }

  element.classList.add(db1);
}
function removeActiveD(Id2, db2) {
  var element = document.querySelector(Id2);
  element.classList.remove(db2);
}
function addActive() {
  var element = document.querySelector('html');
  element.classList.add('dark');
}
function removeActive() {
  var element = document.querySelector('html');
  element.classList.remove('dark');
}
// dark Mode localStorage
// $(document).ready(function() {
//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
//   localStorage.theme = 'light'
//   localStorage.theme = 'dark'
//   localStorage.removeItem('theme');
// });

// Slider Swiper
$(document).ready(function() {
  // Swiper Slider JS
  new Swiper(".recentWork", {
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    spaceBetween: 30,
    pagination: {
      el: ".recentWork-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNext",
      prevEl: ".navArrowPrev",
    },
  });
  new Swiper(".autoPlay", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
      },
    },
    pagination: {
      el: ".autoPlay-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNextAP",
      prevEl: ".navArrowPrevAP",
    },
  });
  new Swiper(".clientsSay", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoHeight: false,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".clientsSay-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".navArrowNextCS",
      prevEl: ".navArrowPrevCS",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
  new Swiper(".verticalSL", {
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 8000,
    },
  });
});

// Accordion + Tab
$(document).ready(function() {
  function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      var $titleTab = $('.title_tab-rep');
      $titleTab.on('click', function(e) {
      e.preventDefault();
        if ( $(this).hasClass('active') ) {
          $(this).removeClass('active');
          $(this).next().stop().slideUp(500);
          $(this).next().find('p').removeClass('show');
        } else {
          $(this).addClass('active');
          $(this).next().stop().slideDown(500);
          $(this).parent().siblings().children('.title_tab-rep').removeClass('active');
          $(this).parent().siblings().children('.inner_content-rep').slideUp(500);
          $(this).parent().siblings().children('.inner_content-rep').find('p').removeClass('show');
          $(this).next().find('p').addClass('show');
        }
      });      
      new Swiper(".ourServices_slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".recentWork-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".navArrowNextOS",
          prevEl: ".navArrowPrevOS",
        },
      });
    }
  }
  var $titleTab = $('.title_tab');
  $titleTab.on('click', function(e) {
  e.preventDefault();
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(500);
      $(this).next().find('p').removeClass('show');
    } else {
      $(this).addClass('active');
      $(this).next().stop().slideDown(500);
      $(this).parent().siblings().children('.title_tab').removeClass('active');
      $(this).parent().siblings().children('.inner_content').slideUp(500);
      $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
      $(this).next().find('p').addClass('show');
    }
  });
  checkPosition();
});

// Tabs
$(document).on("click", ".tabsBox .tabsHead a", function() {
	var numberIndex = $(this).index();
	if (!$(this).is("active")) {
		$(".tabsBox .tabsHead a").removeClass("active");
		$(".tabsBox .tabsCompBox .tabsCompIn").removeClass("active");
    // 
		$(this).addClass("active");
		$(".tabsBox .tabsCompBox").find(".tabsCompIn:eq(" + numberIndex + ")").addClass("active");
    // 
		var listItemHeight = $(".tabsBox .tabsCompBox").find("tabsCompIn:eq(" + numberIndex + ")").innerHeight();
		$(".tabsBox .tabsCompBox").height(listItemHeight + "px");
	}
});

// Progress bar width Sem Height
$(document).ready(function() {
  let imgBoxResize = $('.getBoxWidth').outerWidth();
  $('.printBoxWidth').css('width', imgBoxResize);
});
$(window).resize(function() {
  let imgBoxResize = $('.getBoxWidth').outerWidth();
  $('.printBoxWidth').css('width', imgBoxResize);
});

// New MMenu
document.addEventListener(
  "DOMContentLoaded", () => {
    new Mmenu( "#menu", {
      "offCanvas": {
        "position": "right-front"
      },
      "theme": "light",
      "counters": {
        "add": true
      },
      "iconbar": {
        "use": true,
        "top": [
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/inr-dark.gif" alt="indian flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/inr-light.gif" alt="indian flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/us-dark.gif" alt="usa flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/us-light.gif" alt="usa flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/ca-dark.gif" alt="canada flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/ca-light.gif" alt="canada flag" /></a>',
          '<a href="#" class="pb-0 pt-4 hover:opacity-75 anim"><img class="w-8 mx-auto h-auto hidden dark:block" src="/assets/images/flag/fr-dark.gif" alt="united kingdom flag" /><img class="w-8 mx-auto h-auto block dark:hidden" src="/assets/images/flag/fr-light.gif" alt="united kingdom flag" /></a>',
        ],
        "bottom": [
          "<a target='_blank' href='https://www.facebook.com/scalelottech' class='icon-facebook text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a target='_blank' href='https://www.instagram.com/scalelot_technologies/' class='icon-instagram text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a target='_blank' href='https://www.linkedin.com/company/scalelot-technologies' class='icon-linkedin text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a target='_blank' href='https://twitter.com/ScalelotT' class='icon-twitter text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a target='_blank' href='https://join.skype.com/invite/y01KBTjj8kTx' class='icon-skype1 text-lg pb-4 pt-0 hover:text-scalelot-secondary'></a>",
          "<a target='_blank' href='https://dribbble.com/scalelot' class='text-lg pb-4 pt-0 hover:text-scalelot-secondary' title='Dribbble'><svg class='mx-auto fill-current hover:fill-scalelot-secondary anim w-[18px] py-1 h-auto' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z'/></svg></a>",
          "<a target='_blank' href='https://www.behance.net/scalelotechnol' class='text-lg pb-4 pt-0 hover:text-scalelot-secondary' title='Behance'><svg class='mx-auto fill-current hover:fill-scalelot-secondary anim w-[18px] py-1 h-auto' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z'/></svg></a>",
          "<a target='_blank' href='https://pin.it/36sY46l' class='text-lg pb-4 pt-0 hover:text-scalelot-secondary' title='Pinterest'><svg class='mx-auto fill-current hover:fill-scalelot-secondary anim w-[18px] py-1 h-auto' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' fill-rule='evenodd' clip-rule='evenodd'/></svg></a>",
        ]
      },
      navbars: [
        {
          content: ["prev", "breadcrumbs", "close"],
        },
        {
          position: "bottom",
          content: [               
            '<div class="block px-5 py-3.5"><label class="toSwitch bg-white dark:bg-scalelot-darkPlus border border-scalelot-grayLight dark:border-scalelot-primary text-scalelot-darkPlus dark:text-white relative block h-11 md:h-14 w-full rounded-full mx-auto"><span class="block w-1/2 h-full absolute top-0 left-0 rounded-full bg-scalelot-grayLight bg-opacity-30 dark:bg-scalelot-primary anim dark:translate-x-full"></span><div class="flex items-center text-center h-full relative cursor-pointer"><span class="w-1/2 flex items-center justify-center text-scalelot-darkPlus dark:text-white text-sm md:text-base" onclick="removeActive();"><span class="icon-light text-base md:text-xl block md:w-8 mr-2 text-yellow-400"></span> Light</span><span class="w-1/2 flex items-center justify-center text-scalelot-darkPlus dark:text-white text-sm md:text-base" onclick="addActive();"><span class="icon-dark text-base md:text-xl block md:w-8 mr-2"></span> Dark</span></div></label></div>'
          ],
        },
      ],
    });
  }
);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('.scrollJS').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();  
  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
    return;  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
    $('#toTop').removeClass('arrow-down').addClass('arrow-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
      $('#toTop').removeClass('arrow-up').addClass('arrow-down');
    }
  }  
  lastScrollTop = st;
}

// Scroll to top
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});

$("#toTop").click(function () {
 //1 second of animation time
 //html works for FFX but not Chrome
 //body works for Chrome but not FFX
 //This strange selector seems to work universally
 $("html, body").animate({scrollTop: 0});
});

// Pulse mins
$(document).ready(function(){  
  // Increment value in quantity input  
  $('.qty-plus').each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var current = $(this).siblings("input.quantity").val();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal)) {
        $(this).siblings("input.quantity").val(currentVal + 1);
      } else {
        $(this).siblings("input.quantity").val(0);
      }
    });
  });
  // Decrement value in quantity input  
  $(".qty-minus").each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $(this).siblings("input.quantity").val(currentVal - 1);
      } else {
        $(this).siblings("input.quantity").val(0);
      }
    });
  });
});

// jQuery(function() {
  var output = document.querySelectorAll('output')[0];
  jQuery(document).on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });
  // jQuery('input[type=range]').rangeslider({
  //   polyfill: false
  // });
// });

// Select2
$("select.tags").select2({
  multiple: true,
  tags: true,
  width: 'resolve' // need to override the changed default
});

// Drag And Drop
// File Upload
const INPUT_FILE = document.querySelector('#upload-files');
const INPUT_CONTAINER = document.querySelector('#upload-container');
const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
const FILE_LIST = [];
let UPLOADED_FILES = [];
const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');
  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};
const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
        <div class="form__image-container js-remove-image" data-index="${index}">
          <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
        </div>
      `;
      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    INPUT_FILE.value = "";
  }
};
const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });
    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });
    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match("image/")) {
          alert(file.name + " is not an image");
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL };
          FILE_LIST.push(uploadedFiles);
        }
      });
      previewImages();
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      removeFile();
    });
  }
};

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach(image => {
      image.addEventListener('click', function () {
        const fileIndex = this.getAttribute('data-index');
        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

fileUpload();
removeFile();

// Portfolio
jQuery(document).ready(function () {
  //Pagination JS
  //how much items per page to show
  var show_per_page = 9;
  //getting the amount of elements inside pagingBox div
  var number_of_items = $("#pagingBox").children().size();
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items / show_per_page);
  //set the value of our hidden input fields
  $("#current_page").val(0);
  $("#show_per_page").val(show_per_page);
  //now when we got all we need for the navigation let's make it '
  /* 
		what are we going to have in the navigation?
			- link to previous page
			- links to specific pages
			- link to next page
		*/
  var navigation_html =
    '<a class="previous_link" href="javascript:previous();">Prev</a>';
  var current_link = 0;
  while (number_of_pages > current_link) {
    navigation_html +=
      '<a class="page_link" href="javascript:go_to_page(' +
      current_link +
      ')" longdesc="' +
      current_link +
      '">' +
      (current_link + 1) +
      "</a>";
    current_link++;
  }
  navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
  $("#page_navigation").html(navigation_html);
  //add active_page class to the first page link
  $("#page_navigation .page_link:first").addClass("active_page");
  //hide all the elements inside pagingBox div
  $("#pagingBox").children().addClass("show");
  //and show the first n (show_per_page) elements
  $("#pagingBox").children().slice(0, show_per_page).removeClass("show");
});

//Pagination JS
function previous() {
  new_page = parseInt($("#current_page").val()) - 1;
  //if there is an item before the current active link run the function
  if ($(".active_page").prev(".page_link").length == true) {
    go_to_page(new_page);
  }
}
function next() {
  new_page = parseInt($("#current_page").val()) + 1;
  //if there is an item after the current active link run the function
  if ($(".active_page").next(".page_link").length == true) {
    go_to_page(new_page);
  }
}
function go_to_page(page_num) {
  //get the number of items shown per page
  var show_per_page = parseInt($("#show_per_page").val());
  //get the element number where to start the slice from
  start_from = page_num * show_per_page;
  //get the element number where to end the slice
  end_on = start_from + show_per_page;
  //hide all children elements of pagingBox div, get specific items and show them
  $("#pagingBox")
    .children()
    .addClass("show")
    .slice(start_from, end_on)
    .removeClass("show");
  /*get the page link that has longdesc attribute of the current page and add active_page class to it
	and remove that class from previously active page link*/
  $(".page_link[longdesc=" + page_num + "]")
    .addClass("active_page")
    .siblings(".active_page")
    .removeClass("active_page");
  //update the current page input field
  $("#current_page").val(page_num);
}

$("document").ready(function() {
  setTimeout(function() {
    $("#allPortfolio").trigger('click');
  },10);
});