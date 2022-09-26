new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    navigation: true,
    navigationPosition:'right',
    scrollingSpeed: 500
});


var typed = new Typed('.type', {
    strings: ['Front End Developer', 'Remote Developer', 'UI/UX Designer'],
    loop: true,
    backSpeed: 100,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    typeSpeed: 100,
    smartBackspace: true // Default value
    });
    

    $(document).ready(function(){
        $('.projectslide').slick({
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        fade:true,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        });
    });


    const progressbar = document.querySelectorAll('.progress');
    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    function checkBoxes(){
        const triggerBottom = window.innerHeight / 4 ;
        progressbar.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom){
                box.classList.add('testclass')
            }
            console.log(triggerBottom);
        })
    }