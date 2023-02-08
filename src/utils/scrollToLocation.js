export default scrollToLocation = (toHeight) => {
    const scrollToTop =document.documentElement.scrollTop  //滚动条距离顶部的距离
    $('html,body').animate({
        scrollToTop: scrollToTop + toHeight
    },500)
}