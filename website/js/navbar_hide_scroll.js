var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

    var currentScrollPos = window.pageYOffset;
    var screenWidth = screen.width;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    }
    else {
        if (screenWidth > 900)
        {
            document.getElementById("navbar").style.top = "-75px";
        }
        else if (screenWidth >= 500 && screenWidth <= 900)
        {
            document.getElementById("navbar").style.top = "-215px";
        }
        else
        {
            document.getElementById("navbar").style.top = "-200px";
        }
    }

    prevScrollpos = currentScrollPos;
}