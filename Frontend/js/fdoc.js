define(['jquery', 'bootstrap', 'highlight'], function($) {
    hljs.initHighlightingOnLoad()

    var navHeight = $('.navbar').outerHeight(true) + 10;
    $(document.body).scrollspy({
        target: '#fdoc-navbar',
        offset: navHeight
    })

    var $sideBar = $('#fdoc-navbar')
    $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.navbar-fixed-top').height()+11

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        , bottom: function () {
            return 0;
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
    })

    var section = location.href.match(/.*\/fdoc\/(buckyball|fulleron)\/([a-z]+).*/);
    if (section) {
        $('#nav-section-' + section[2]).addClass('active')
    }
})
