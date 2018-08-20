var windowObj = $(window);
var aboutMe = $("#about-me-header")
var hasRender = false

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function scrollNotTop($window) {
  return $window.height();
}

$(document).ready(function() {

  if (window.scrollY > 40 && $('.navbar').hasClass('transparent')) {
    $('.navbar').removeClass('transparent')
    $('.navbar').addClass('shadow')
  }

  var instance2 = new TypeIt('#my-occupation', {
    strings: ["a <span class='str-coding-font'>software engineer</span> & <span class='tag-coding-font'>student</span>"],
    startDelay: 500,
    lifelike: true,
  });

  var aboutMeHeader = new TypeIt('#about-me-header', {
    strings: ["about me"],
    startDelay: 600,
    nextStringDelay: 100,
    cursor: false,
    lifelike: true,
  }, false);

  var skillHeader = new TypeIt('#skills-header', {
    strings: ["skills"],
    startDelay: 0,
    nextStringDelay: 0,
    cursor: false,
    lifelike: true,
  });

  $("#skills-tab").on('click', function() {
    $('#profile-tab').removeClass('selected-tab')
    $('#skills-tab').addClass('selected-tab')
    $('#skills-info').removeClass('hidden')
    $('#profile-info').addClass('hidden')
    $('#skills-header').removeClass('hidden')
    $('#about-me-header').addClass('hidden')
    $('#skills-body').removeClass('hidden')
    $('#about-me-body').addClass('hidden')

    skillHeader.destroy()

    skillHeader = new TypeIt('#skills-header', {
      strings: ["skills"],
      startDelay: 0,
      nextStringDelay: 0,
      cursor: false,
      lifelike: true,
    });

  })

  $("#profile-tab").on('click', function() {
    $('#skills-tab').removeClass('selected-tab')
    $('#profile-tab').addClass('selected-tab')
    $('#skills-info').addClass('hidden')
    $('#profile-info').removeClass('hidden')
    $('#skills-header').addClass('hidden')
    $('#about-me-header').removeClass('hidden')
    $('#skills-body').addClass('hidden')
    $('#about-me-body').removeClass('hidden')

    aboutMeHeader.destroy()

    aboutMeHeader = new TypeIt('#about-me-header', {
      strings: ["about me"],
      startDelay: 0,
      nextStringDelay: 0,
      cursor: false,
      lifelike: true,
    });
  })

  $(document).on("scroll", function () {
    if (isScrolledIntoView(aboutMe, windowObj)) {
        // $elem.addClass("animate")
        if(!hasRender) {
          aboutMeHeader.init()
          hasRender = true
        }
    }

    if (window.scrollY > 40 && $('.navbar').hasClass('transparent')) {
      $('.navbar').removeClass('transparent')
      $('.navbar').addClass('shadow')
    }

    if (window.scrollY <= 40 && !$('.navbar').hasClass('transparent')) {
      $('.navbar').addClass('transparent')
      $('.navbar').removeClass('shadow')
    }
    console.log(window.scrollY < 40);
  });

})
