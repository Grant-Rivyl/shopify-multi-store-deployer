$(document).ready(function(){
    setTimeout(function() {
        console.log("test");
        $('template video').prop('your-attribute', 'your-value');
    }, 1000);

    $( ".product__info-container .price" ).append( $( "[id^=shopify-block-judge_me_reviews_preview_badge_]" ) );

    $( "<div class='varaint-quantity--wrapper'></div>" ).insertAfter( ".product__description" );

    setTimeout(function() {
      $( ".varaint-quantity--wrapper" ).append( $( "[id^=variant-selects-template--]" ) );
      $( ".varaint-quantity--wrapper" ).append( $( "[id^=Quantity-Form-template--]" ) );
     }, 1000);

     $('<div class="mobile-content--wrapper"></div>').insertBefore('product-info .page-width .product');
     
          
              console.log("test");
              $( ".mobile-content--wrapper" ).append( $( ".breadcrumbs" ).clone() );
              $( ".mobile-content--wrapper" ).append( $( ".product-tags" ).clone() );
              $( ".mobile-content--wrapper" ).append( $( ".product__info-container  .product-title--relocate" ).clone() );
              $( ".mobile-content--wrapper" ).append( $( ".product__info-container  .mobile-relocate" ).clone() );
              // $( "product-info .page-width .product " ).after( $( ".video-mobile--relocate" ).clone() );
            
          
      
    
     setTimeout(function() {
      $( ".varaint-quantity--wrapper" ).append( $( "[id^=variant-selects-template--]" ) );
      $( ".varaint-quantity--wrapper" ).append( $( "[id^=Quantity-Form-template--]" ) );
     }, 1000);
    
});

$(document).ready(function(){
    function tabSlider(){
          $('.tabs .product-grid.slick-initialized ').slick('unslick');
          $('.tabs .product-grid ').slick({
            dots: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            responsive: [
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            
            ]
          });
    }
    $( "#tabs" ).tabs({
      create: function( event, ui ) {
       tabSlider()
      },
      activate: function( event, ui ) {
       tabSlider()
      }
    });

    function tabSliderMetaobject(){
      $('.tabs .product-grid.metaobject.slick-initialized ').slick('unslick');
      $('.tabs .product-grid.metaobject ').slick({
        dots: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
      });
}
$( "#tabsMetaobject" ).tabs({
  create: function( event, ui ) {
    tabSliderMetaobject()
  },
  activate: function( event, ui ) {
    tabSliderMetaobject()
  }
});


    $('.slick-js').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: false,
      cssEase: 'linear',
      dots: false,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });
  $('.slick-carousel-image').slick({
    dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:true,
    fade: true,
    speed: 2000,
    cssEase: 'linear'
  });

  $('.tags').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
 
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.product-media-modal__content').slick({
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
  } );

  $(document).ready(function() {
    $('details.mega-menu').on('click', function() {
      if ($(event.target).closest('.mega-menu__content').length > 0) {
        return; 
      }
      console.log(":tetetest");
      if ($(this).attr('open')) {
        $('.search__input').animate({
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'white'
        }, 300); 
        $('.field__label').css('color', 'white');
        
      } else {
        $('.search__input').animate({
          backgroundColor: 'white',
          color: '#505050'
        }, 300); 
        $('.field__label').css('color', '#505050');
      }
    });
  
    $('[id*="shopify-section-template-"]').on('click', function() {
      $('.search__input').animate({
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'white'
      }, 300); 
      $('.field__label').css('color', 'white');
    });
  });
  $(document).ready(function() {
  // $('.testimonial-slider').slick({
  //   prevArrow:"<button type='button' class='slick-prev pull-left'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
  //   nextArrow:"<button type='button' class='slick-next pull-right'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
  //   arrows: true,
  //     dots: true,
  //     nav: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     centerMode: true,
  //     centerPadding: 0,

  //     responsive: [
  //       {
  //           breakpoint: 9999,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1
  //           }
  //       },
  //       {
  //         breakpoint: 999,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           centerMode:true,
  //           arrows: false
  //         }
  //       }
       
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  //   });


    $('.blog-slick-slider').slick({
      dots: false,
      infinite: false,
      
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 989,
          settings: {
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><img class='empty-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            centerPadding: 0
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  $(document).ready(function() {
    $('.testimonial-slider').slick({
      prevArrow:"<button type='button' class='slick-prev pull-left'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/prev_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-prev.svg?v=1726071725'></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><img src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/next_2.svg?v=1723359509'><img class='fill-image' src='https://cdn.shopify.com/s/files/1/0598/1231/5223/files/arrow-yellow-next.svg?v=1726071725'></button>",
      arrows: true,
        dots: true,
        nav: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
  
        responsive: [
          {
              breakpoint: 9999,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
              arrows: false
            }
          }
         
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
            });