$(document).ready(function() {
  $('.article-like').on('click', function() {
    // Push event to Google analytics
    ga('send', 'event', $(this).attr('data-product'), 'click', 'Landing v1');
    FB.AppEvents.LogEvent('RATED', 5, {
      'CONTENT_ID': $(this).attr('data-product'),
      'MAX_RATING_VALUE': 5
    });
    $(this).toggleClass('liked');
  });
});
