window.addEventListener('load', function () {

    lazyLoadBg();

    document.querySelectorAll('[data-src-img]').forEach(item => {
        var src = item.getAttribute('data-src-img');
        item.setAttribute('src', src);
    })
})


function lazyLoadBg() {
    document.querySelectorAll('[data-src-bg]').forEach(item => {
        if (item.getBoundingClientRect().top < window.innerHeight ){
            setBg(item);
        } else {
            document.addEventListener('scroll', function () {
                if (item.getBoundingClientRect().top < window.innerHeight ){
                    setBg(item);
                }
            })
        }
    })
}

function setBg(item) {
    var url = item.getAttribute('data-src-bg');
    item.style.background = `url(${url}) no-repeat`;
}