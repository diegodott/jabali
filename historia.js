$(function() {
    $('.box').hover(function() {
      $('span#top').css('margin-bottom', '11px');
           $('span#bottom').css('margin-top', '11px');
    }, function() {
      $('span#top').css('margin-bottom', '');
          $('span#bottom').css('margin-top', '');
    });
  });
  