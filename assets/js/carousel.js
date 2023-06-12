$('.hero-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText:[
        `<svg xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
        <path id="arrowleft2" d="M19.375,25.73l-8.422-8.422a2.565,2.565,0,0,1,0-3.617L19.375,5.27" transform="translate(-8.988 -3.856)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </svg>
      ` ,
        `<svg class='transform rotate-180' xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
        <path id="arrowleft2" d="M9.168,20.46.746,12.038a2.565,2.565,0,0,1,0-3.617L9.168,0" transform="translate(1.219 1.414)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </svg>
      ` 
    ]
})
$('.bags-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items:4,
    margin:22,
    navText:[
        `<svg xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
        <path id="arrowleft2" d="M19.375,25.73l-8.422-8.422a2.565,2.565,0,0,1,0-3.617L19.375,5.27" transform="translate(-8.988 -3.856)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </svg>
      ` ,
        `<svg class='transform rotate-180' xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
        <path id="arrowleft2" d="M9.168,20.46.746,12.038a2.565,2.565,0,0,1,0-3.617L9.168,0" transform="translate(1.219 1.414)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </svg>
      ` 
    ],
    responsive:{
      0:{
        items:1.5,
      },
      500:{
        items:2,
      },
      650:{
        items:2.5,
      },
      800:{
        items:3,
      },
      900:{
        items:3.5
      },
      1000:{

        items:4,
      }
    }
})
$('.ofix-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  items:4,
  margin:22,
  navText:[
      `<svg xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
      <path id="arrowleft2" d="M19.375,25.73l-8.422-8.422a2.565,2.565,0,0,1,0-3.617L19.375,5.27" transform="translate(-8.988 -3.856)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </svg>
    ` ,
      `<svg class='transform rotate-180' xmlns="http://www.w3.org/2000/svg" width="11.801" height="23.288" viewBox="0 0 11.801 23.288">
      <path id="arrowleft2" d="M9.168,20.46.746,12.038a2.565,2.565,0,0,1,0-3.617L9.168,0" transform="translate(1.219 1.414)" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    </svg>
    ` 
  ],
  responsive:{
    0:{
      items:1.5,
    },
    500:{
      items:2,
    },
    650:{
      items:2.5,
    },
    800:{
      items:3,
    },
    900:{
      items:3.5
    },
    1000:{

      items:4,
    }
  }
})