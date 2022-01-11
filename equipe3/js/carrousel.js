(function(){
    let bout1 = document.getElementById('boutonCarre1');
    console.log(bout1.id);
    let bout2 = document.getElementById('boutonCarre2');
    console.log(bout2.id);
    let bout3 = document.getElementById('boutonCarre3');
    console.log(bout3.id);
    let carrousel = document.querySelector('.carouselAccueil');
    bout1.addEventListener('mousedown', function(){
        carrousel.style.transform = "translateY(0)";
        carrousel.style.zIndex ="-2";
    })
    bout2.addEventListener('mousedown', function(){
       /*  carrousel.style.transform = "translateY(-23em)"; */
        /* carrousel.style.transform = "translateY(-33em)"; */
        carrousel.style.transform = "translateY(-43vh)"; 
        carrousel.style.zIndex ="-2";
        console.log('wow');
    })
    bout3.addEventListener('mousedown', function(){
       /*  carrousel.style.transform = "translateY(-43em)"; */
       /*  carrousel.style.transform = "translateY(-66em)"; */
        carrousel.style.transform = "translateY(-80vh)"; 
        carrousel.style.zIndex ="-2";
    })
}())