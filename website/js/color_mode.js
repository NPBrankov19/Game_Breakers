let colorModeDark = document.querySelector('.colorModeDark');
let colorModeLight = document.querySelector('.colorModeLight');

const check = () => {
    lightMode = localStorage.getItem("lightMode");

    if(lightMode === 'enable'){
        document.body.classList.add('light');

        $('.colorModeLight').show();
        $('.colorModeDark').hide();
    } else {
        document.body.classList.remove('light');

        $('.colorModeLight').hide();
        $('.colorModeDark').show();
    }
}

colorModeLight.onclick = function() {

    localStorage.setItem("lightMode", 'disable');
    check();
}

colorModeDark.onclick = function() {

    localStorage.setItem("lightMode", 'enable');
    check();
}

check();