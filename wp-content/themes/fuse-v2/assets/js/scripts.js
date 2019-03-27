  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
        
  }



jQuery(window).load(function() {

  new WOW().init();

});



jQuery(document).ready(function($){
  // $(".wallet__icon").addClass("wallet__icon--image");

  $('.smooth-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top + 20
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });



  /* =================================
     NAVBAR COLLAPSE ON SCROLL
  =================================== */
  $(window).on('scroll', function(){
      var b = $(window).scrollTop();
      if( b > 60 ){
          $("header").addClass("header-scroll");
          // $(".wallet__icon").css({ backgroundImage: "assets/images/wallet_white.svg" })
          $(".wallet__icon").removeClass("wallet__icon--image");
          $(".wallet__icon").addClass("wallet__icon--image_scroll");
      } else {
          $("header").removeClass("header-scroll");
          $(".wallet__icon").removeClass("wallet__icon--image_scroll");
          $(".wallet__icon").addClass("wallet__icon--image");
          // $(".wallet__icon").css({ backgroundImage: "assets/images/wallet_dark_blue.svg" })
      }
  });


  $('.content-partners__desktop').paroller({
    factor: 0.8,
    factorXs: 0,
    type: 'background'
  });



  $('.content-software').paroller({
    factor: 0.8,
    factorXs: 0,
    type: 'background'
  });




  var $container = $('div.content-partners__desktop');
  var $rollover = $('div.content-partners__rol');

  $rollover.on( 'hover', function() {
      var $el = $(this);
      var $img = $el.find( 'img.partners--img' );
      
      $container.css( 'background-image', 'url("' + $img.attr( 'src' ) + '")' );
       // $container.css( 'background-color', 'green' );

  });


  document.getElementById("defaultOpen").click();


  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('.nav').toggleClass('open');
  });


});

jQuery(document).ready(function($){




  $('.dropdown-toggle').click(function() {
    $(this).parent().siblings().find('.nav__dropdown-menu').removeClass('drop');
    $(this).parent().children('.nav__dropdown-menu').toggleClass('drop');
  });

$(".sendgrid_mc_input_email").attr("placeholder", "Email");


});


(function($){
    "use strict";
    $(document).ready(function(){


  
    $('#partners-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        directionNav: false,
        controlNav: true,
    });


    $('#community-slider').flexslider({
        animation: "slide",
        animationLoop: true,
        manualControls: ".community-control-nav li",
        useCSS: false, /* Chrome fix*/
        controlNav: true,
    });

    });


// var i = 0;
// $( 'div.tab' )
//   .mouseover(function() {
//     i += 1;
//     $( this ).find( '#shake-tab' ).addClass( 'shake');
//   })
//   .mouseout(function() {
//     $( this ).find( '#shake-tab').removeClass(  'shake' );
//   });



/*
* Sendgrid MC Email Form Submit Handler
*/
$(".mc_email_form").on( 'submit', function( e ) {
    e.preventDefault();
    var $form = $(this);
    
    var data = new FormData[ $form[0] ];
    data.append( 'action', 'newslettersubmit' );
    
    $.ajax({
        url: fnData.ajax_url,
        data: data,
        processData: false,
        contentType: 'json',
        success: function( response, textStatus, jqXHR ) {
            var status = response.success;
            
            if( status == true ) {
                $form.html( '<p class="newslettersuccess">Thank you for joining our Newsletter</p>' );
            } else {
                var $errors = $form.find( '.newslettererror' );
                if( $errors.length ) {
                    $errors.text( 'Sorry, something went wrong' );
                } else {
                    $form.prepend( '<p class="newslettererror">Sorry, something went wrong</p>' );
                }
                
                $form.prepend( '<p class="newslettersuccess">Thank you for joining our Newsletter</p>' );
                console.log( response );
            }
        },
        error: function( jqXHR, textStatus, errorThrown ) {
            console.log( errorThrown );
        }
    });
});





})(this.jQuery);

   






