class Layout {
    constructor(){
        this.menuIsOpen = false
    }
    removeToggleHoverMobile(){
        let screenSize = window.innerWidth
        let breakPoint = 1280
        let el = $('header ul > li')
        if(screenSize <= breakPoint){
            el.removeClass('group')
        }else{
            el.addClass('group')
        }
    }
    toggleDrop(_this){
        let thisEl = $(_this)
        let findUl = thisEl.find('ul')
        let screenSize = window.innerWidth
        let breakPoint = 1280
        if(screenSize <= breakPoint){
            findUl.slideToggle()
            if(findUl.is(":visible")){
                thisEl.find('.toggle-drop .fa-plus').attr('class','fa-solid fa-minus')
            }else{
                thisEl.find('.toggle-drop .fa-minus').attr('class','fa-solid fa-plus')
            }
        }
    }
    toggleMenu(){
        this.menuIsOpen = !this.menuIsOpen
        $('header .main-menu').slideToggle()
        if(this.menuIsOpen){
            $('.toggle-menu').html(`<i class="fa-solid fa-xmark"></i>`)
        }else{
            $('.toggle-menu').html(`<i class="fa-solid fa-bars"></i>`)
        }
    }
}
$(document).ready(function(){
    let layout = new Layout()
    layout.removeToggleHoverMobile()
    $('header ul > li').click(function(){
        layout.toggleDrop(this)
    })
    $(window).resize(function(){
        layout.removeToggleHoverMobile()
    })
    $('.toggle-menu').click(function(){
        layout.toggleMenu()
    })
    $('.like').click(function(){
        $(this).toggleClass('text-pink-500')
    })
    $('.drops a').click(function(){
        let el = $(this).data('val')
        $(`#${el}`).slideToggle()
    })
})