
const btnOpenVideo = document.querySelectorAll('.islands_video_content')
const islandsPopup = document.getElementById('popup')

function poPup(){
    islandsPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('islands_popup_close')

btnCloseVideo.addEventListener('click', ()=> {
    islandsPopup.classList.remove('show-popup')
})





//**********swiper********//
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
})

let swiper2 = new Swiper(".mySwiper2", {
        effect:'fade',
        //loop : true ,
    thumbs: {
        swiper: swiper,
    },
})

















 