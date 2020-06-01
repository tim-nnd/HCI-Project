$(function(){
    // Nav
    $(".openNav").click(function(){
        openNav();
    });
    $(".closebtn").click(function(){
        closeNav();
    });

    // Autoplay
    if(document.location.pathname.match(/[^\/]+$/)[0] == 'operator.html'){
        var auto = false;
    }
    else{
        var auto = true;
    }
    
    // Pause duration between slides (ms)
    var pause = 6000;
    
    // Get parent element
    var $this = $('#slider');
    
    // Slides container
    var slidesCont = $this.children('.slides-container');
    // Get all slides
    var slides = slidesCont.children('.slide');
    
    // Get pager div
    var pager = $this.children('.pager');
    
    // Get Previous / Next links
    var arrowsCont = $this.children('.arrows');
    var prevSlide = arrowsCont.children('.prev');
    var nextSlide = arrowsCont.children('.next');
    
    // Total slides count
    var slidesCount = slides.length;
    
    // Set currentSlide to first child
    var currentSlide = slides.first();
    var currentSlideIndex = 1;
    
    // Holds setInterval for autoplay, so we can reset it when user navigates
    var autoPlay = null;

    // Hide all slides except first and add active class to first
    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');

    // Function responsible for fading to next slide
    function fadeNext() {
        currentSlide.removeClass('active').fadeOut(700);
    
        if(currentSlideIndex == slidesCount) {
            currentSlide = slides.first();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            currentSlideIndex = 1;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }
    
        pager.text(currentSlideIndex+' / '+slidesCount);
    }
    
    // Function responsible for fading to previous slide
    function fadePrev() {
        currentSlide.removeClass('active').fadeOut(700);
    
        if(currentSlideIndex == 1) {
            currentSlide = slides.last();
            currentSlide.delay(500).addClass('active').fadeIn();
            currentSlideIndex = slidesCount;
        } else {
            currentSlideIndex--;
            currentSlide = currentSlide.prev();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }
    
        pager.text(currentSlideIndex+' / '+slidesCount);
    }

    function fadeSelect(slideIndex) {
        currentSlide.removeClass('active').fadeOut(700);
        if(currentSlideIndex < slideIndex){
            while(currentSlideIndex!=slideIndex){
                currentSlideIndex++;
                currentSlide = currentSlide.next();
            }
        }
        else if(currentSlideIndex > slideIndex){
            while(currentSlideIndex!=slideIndex){
                currentSlideIndex--;
                currentSlide = currentSlide.prev();
            }
        }
        currentSlide.delay(500).addClass('active').fadeIn(700);
    }

    // Function that starts the autoplay and resets it
    // in case user navigated (clicked prev or next)
    function AutoPlay() {
        clearInterval(autoPlay);
    
        if(auto == true)
            autoPlay = setInterval(function() {fadeNext()}, pause);
    }

    // Detect if user clicked on arrow for next slide and fade next slide if it did
    $(nextSlide).click(function(e) {
        e.preventDefault();
        fadeNext();
        AutoPlay();
    });
    
    // Detect if user clicked on arrow for previous slide and fade previous slide if it did
    $(prevSlide).click(function(e) {
        e.preventDefault();
        fadePrev();
        AutoPlay();
    });

    $("#coboy").click(function(){
        fadeSelect(1);
    })

    $("#cyborg").click(function(){
        fadeSelect(2);
    })

    $("#desperado").click(function(){
        fadeSelect(3);
    })

    $("#destroyer").click(function(){
        fadeSelect(4);
    })

    $("#infant").click(function(){
        fadeSelect(5);
    })

    $("#robin").click(function(){
        fadeSelect(6);
    })

    $("#spacetrop").click(function(){
        fadeSelect(7);
    })

    $("#vmec").click(function(){
        fadeSelect(8);
    })
    
    // Start autoplay if auto is set to true
    AutoPlay();

    $(".preorder_button").click(function(){
        validate();
    })
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function validate()
{
    var Username = document.getElementById('inputName');
    var Email = document.getElementById('inputEmail');
    var Password = document.getElementById('inputPassword');    
    var Address = document.getElementById('inputAddress');
    var Copies = document.getElementById('inputCopies');
    var Type = document.getElementById('selectType');
    var Terms = document.getElementById('inputTerms');

    if(Username.value.length <= 4){
        alert('Username must be more than 4 characters');
    }

    if(Email.value == ""){
        alert('Please enter Email');
    }

    if(Password.value == ""){
        alert('Please enter Password');
    }

    if(Copies.value < 1){
        alert('Copies must at least be 1');
    }

    if(Address.value == ""){
        alert('Please enter a valid Address');
    }

    if(Type.value == ""){
        alert('Please choose game type');
    }

    if(Terms.checked == false){
        alert('Terms must be agreed');
    }
}