function switchNav() {
    var side = document.querySelector('.side-bar')
    var main = document.getElementById('main')
    side.classList.toggle('closed')
    if (side.classList.contains('closed')) {
        side.style.width = '85px';
        main.style.marginLeft = '85px';
        document.querySelector('.logo-name').style.opacity = '0';
        option = document.querySelectorAll('.option-name');
        optionLink = document.querySelectorAll('.option-link');
        option.forEach(element => {
            element.style.opacity = '0'
            element.style.width = '0'
        });
        optionLink.forEach(element => {
            element.style.gap = '0'
        });
    }
    else {
        side.style.width = '250px';
        main.style.marginLeft = '250px';
        option = document.querySelectorAll('.option-name');
        optionLink = document.querySelectorAll('.option-link');
        setTimeout(() => {
            document.querySelector('.logo-name').style.opacity = '100';
            optionLink.forEach(element => {
                element.style.gap = '15px'
            });
            option.forEach(element => {
                element.style.opacity = '100'
        })
        }, 200)
}
}