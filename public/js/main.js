/*Script inicializador del Carousel*/

    $(document).ready(function() {

      var owl = $("#owl-demo");

      owl.owlCarousel({

      items : 10, //10 items above 1000px browser width
      autoPlay: true,
      navigation: true,
      pagination: false,
      lazyLoad : true,
      navigationText: [
      "<img src='images/izq-a.png'>",
      "<img src='images/der-a.png'>"
      ],
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
      });

      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });

