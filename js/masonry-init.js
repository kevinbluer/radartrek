/*
 * Made by WebDesignCrowd
 * http://webdesigncrowd.com
 *
 */
 
(function($){
	$(function(){
	  
    
    // Blog Masonry
    var $container = $('.masonry-grid');
    
    $container.imagesLoaded(function(){
      $container.masonry({
        itemSelector : '.item',
        gutter : 0
      });
      $(".item").css("opacity", "1");
    });


	}); // end of document ready
})(jQuery); // end of jQuery name space