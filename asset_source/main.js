import 'bootstrap';
import './scss/style.scss';

const $ = require('jquery');

function scrollToAnchor(hash)
{
  let target = $(hash),
      headerHeight = $('#nav-main').height() + 5; // Get fixed header height

  target = target.length ? target : $('[name=' + hash.slice(1) + ']');

  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top - headerHeight,
    }, 300);
    return false;
  }
}

if (window.location.hash) {
  scrollToAnchor(window.location.hash);
}

$('a[href*=\\#]:not([href=\\#])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      || location.hostname === this.hostname) {

    scrollToAnchor(this.hash);
  }
});
