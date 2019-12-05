!function () {

    moveTo('#ulMenu', '#ulMenu', 'display', 'block','none')
    moveTo('#menu', '#ulMenu', 'display', 'block','none')
    moveTo('#olTwo', '#olTwo', 'transform', 'translateX(0)', 'translateX(400%)')
    moveTo('#olTwo', '#olTwo li', 'transform', 'translateX(0)', 'translateX(200%)')
    moveTo('.viewButton', '#olTwo', 'transform', 'translateX(0)', 'translateX(400%)')
    moveTo('.viewButton', '#olTwo li', 'transform', 'translateX(0)', 'translateX(200%)')
    moveTo('#olTwo', '#xiangmuIcon', 'opacity', 0.1, 1)
    moveTo('.viewButton','#xiangmuIcon','opacity',0.1,1)
    moveTo('.viewButton', '#myDemo', 'transform', 'translateX(-20%)', 'translateX(0)')
    moveTo('#olTwo', '#myDemo', 'transform', 'translateX(-20%)', 'translateX(0)')
    moveTo('.viewButton', '#viewAllIcon', 'transform', 'translateX(200%)', 'translateX(500%)')
    moveTo('#olTwo', '#viewAllIcon', 'transform', 'translateX(200%)', 'translateX(500%)')



        


    clickTo('#cx', '.wrapper', 'display', 'block')
    clickTo('#closeWrapper', '.wrapper', 'display', 'none')

    goToHref('#mainPage', 'http://106.14.255.91/')
    goToHref('#zhuye','http://106.14.255.91/')
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

    function moveTo(selectorFrom, selectorTo, style, methodFrom,methodTo) {
        let $element = $(selectorFrom)
        $element.on('mousemove', () => {
            $(selectorTo).css(style, methodFrom)
        }).on('mouseleave', () => {
            $(selectorTo).css(style, methodTo )
        })
    }

    function clickTo(selectorFrom, selectorTo, style,method) {
        let $element = $(selectorFrom)
        $element.on('click', () => {
            $(selectorTo).css(style, method)
        })
    }

    function goToHref(selector, url) {
        let $element = $(selector)
        $element.on('click', () => {
            $(window).attr('location', url)
        })
    }

}.call()