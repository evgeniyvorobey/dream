window.addEventListener('load', function () {
    // this.querySelectorAll('[data-src-img]')
    document.querySelectorAll('[data-src-bg]').forEach(item => {
        var url = item.getAttribute('data-src-bg');
        item.style.background = `url(${url}) no-repeat`;
    })

    document.querySelectorAll('[data-src-img]').forEach(item => {
        var src = item.getAttribute('data-src-img');
        item.setAttribute('src', src);
    })
})