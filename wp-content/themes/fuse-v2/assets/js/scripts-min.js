function openCity(e,t){
// Declare all variables
var n,o,r;
// Get all elements with class="tabcontent" and hide them
for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";
// Get all elements with class="tablinks" and remove the class "active"
for(r=document.getElementsByClassName("tablinks"),n=0;n<r.length;n++)r[n].className=r[n].className.replace(" active","");
// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}jQuery(window).load(function(){(new WOW).init()}),jQuery(document).ready(function(n){n(".smooth-scroll a").on("click",function(e){var t=n(this);n("html, body").stop().animate({scrollTop:n(t.attr("href")).offset().top+20},1500,"easeInOutExpo"),e.preventDefault()}),
/* =================================
     NAVBAR COLLAPSE ON SCROLL
  =================================== */
n(window).on("scroll",function(){var e;60<n(window).scrollTop()?n("header").addClass("header-scroll"):n("header").removeClass("header-scroll")}),n(".content-partners__desktop").paroller({factor:.8,factorXs:0,type:"background"}),n(".content-software").paroller({factor:.8,factorXs:0,type:"background"});var o=n("div.content-partners__desktop"),e;n("div.content-partners__rol").on("hover",function(){var e,t=n(this).find("img.partners--img");o.css("background-image",'url("'+t.attr("src")+'")')}),document.getElementById("defaultOpen").click(),n("#toggle").click(function(){n(this).toggleClass("active"),n(".nav").toggleClass("open")})}),jQuery(document).ready(function(e){e(".dropdown-toggle").click(function(){e(this).parent().siblings().find(".nav__dropdown-menu").removeClass("drop"),e(this).parent().children(".nav__dropdown-menu").toggleClass("drop")}),e(".sendgrid_mc_input_email").attr("placeholder","Email address")}),function(n){"use strict";n(document).ready(function(){n("#partners-slider").flexslider({animation:"slide",animationLoop:!0,directionNav:!1,controlNav:!0}),n("#community-slider").flexslider({animation:"slide",animationLoop:!0,manualControls:".community-control-nav li",useCSS:!1,/* Chrome fix*/
controlNav:!0})}),
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
n(".mc_email_form").on("submit",function(e){e.preventDefault();var a=n(this),t=new FormData[a[0]];t.append("action","newslettersubmit"),n.ajax({url:fnData.ajax_url,data:t,processData:!1,contentType:"json",success:function(e,t,n){var o;if(1==e.success)a.html('<p class="newslettersuccess">Thank you for joining our Newsletter</p>');else{var r=a.find(".newslettererror");r.length?r.text("Sorry, something went wrong"):a.prepend('<p class="newslettererror">Sorry, something went wrong</p>'),a.prepend('<p class="newslettersuccess">Thank you for joining our Newsletter</p>'),console.log(e)}},error:function(e,t,n){console.log(n)}})})}(this.jQuery);