// this will fix the nav bar to the top of screen and offest the change in height value of the elements below the nav once it becomes fixed
function fixNavigation () {
  if (window.scrollY >= topOfNavigation) {
    document.body.style.paddingTop = navigation.offsetHeight + 'px'
    document.body.classList.add('scrolling-nav')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('scrolling-nav')
  }
}
// element selectors and event listeners for fixing nav bar to screen once it reaches the top of the window
const navigation = document.querySelector('.navigation')
const topOfNavigation = navigation.offsetTop

window.addEventListener('scroll', fixNavigation)
