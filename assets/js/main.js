$(document).ready(function() {
  $('.article-like').on('click', function() {
    // Push event to Google analytics
    ga('send', 'event', $(this).attr('data-product'), 'click', 'Landing v1');
    $(this).toggleClass('liked');
  });
});
