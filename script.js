let  youtubesection = document.querySelectorAll('.youtubesection');



youtubesection.forEach(function(val){
    val.addEventListener('mouseenter',function(){
        val.firstElementChild.lastElementChild.style.opacity = 1
    })
    val.addEventListener('mouseleave',function(){
        val.firstElementChild.lastElementChild.style.opacity = 0
      })
})
