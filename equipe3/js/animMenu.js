var dernierScrollTop = 0;

navbar = document.getElementById("site-navigation");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > dernierScrollTop){
        navbar.style.top = "-400px";
    }
    else{
        navbar.style.top = "0";
    }
    dernierScrollTop = scrollTop;
})