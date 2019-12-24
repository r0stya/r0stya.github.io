
$(document).ready(function () {
    //Плавный скролл
    $('a.nav-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 1000,
            easing: 'swing'
        })
    });

    //Кнопка вверх
    var $btnTop = $('.btnToTop')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 20) {
            $btnTop.fadeIn();

        } else {
            $btnTop.fadeOut();
        }
    });
    $btnTop.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 900)
    });
    //Карусель
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });
    //Акордион
    $('.mainAkkord i').click(function () {
        $(this).toggleClass('material-icons-remove')
    })
    //Анимация фото
    $('.blogPhoto1').mouseenter(function () {
        $('.blogPhoto1 i').css('display', 'flex');
        $('.blogText1').css('display', 'block')
    });
    $('.blogPhoto1').mouseleave(function () {
        $('.blogPhoto1 i').css('display', 'none');
        $('.blogText1').css('display', 'none')
    });
    $('.blogPhoto2').mouseenter(function () {
        $('.blogPhoto2 i').css('display', 'flex');
        $('.blogText2').css('display', 'block')
    });
    $('.blogPhoto2').mouseleave(function () {
        $('.blogPhoto2 i').css('display', 'none');
        $('.blogText2').css('display', 'none')
    });
   //Гамбургер-меню
   $('.burgerMenu').click(function(){
     $('.burgerMenu__active').toggleClass('df');
     $('.burgerMenu').toggleClass('material-icons-close')
   })
});
 //карта
 var map;
 function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 50.449734, lng: 30.522632},
     zoom: 8,
     styles :[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
   });
   var marker = new google.maps.Marker({
    position: {lat: 50.449734, lng: 30.522632},
    map: map,
})
 }