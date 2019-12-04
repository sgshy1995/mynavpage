!function () {

    moveTo('#ulMenu', '#ulMenu','block')
    moveTo('#menu', '#ulMenu', 'block')

    clickTo('#cx', '.wrapper', 'block')
    clickTo('#closeWrapper', '.wrapper', 'none')
    
    goToHref('#mainPage', 'http://106.14.255.91/')
    goToHref('#gitHubPage', 'https://github.com/sgshy1995')
    goToHref('#gitHubIcon', 'https://github.com/sgshy1995')
    
    $(document).keydown((e) => {
        if (e.keyCode === 27) {
            $('.wrapper').css('display', 'none')
        }
    })

    $('#submit').on('click', () => {
        alert('这个功能好像还没实现啊？看看别的吧。')
    })

    function moveTo(selectorFrom,selectorTo,method) {
        let $element = $(selectorFrom)
        $element.on('mousemove', () => {
            $(selectorTo).css('display', method)
        }).on('mouseleave', () => {
            $(selectorTo).css('display', 'none')
        })
    }

    function clickTo(selectorFrom,selectorTo,method) {
        let $element = $(selectorFrom)
        $element.on('click', () => {
            $(selectorTo).css('display', method)
        })
    }

    function goToHref(selector,url) {
        let $element = $(selector)
        $element.on('click', () => {
            $(window).attr('location',url)
        })
    }

}.call()