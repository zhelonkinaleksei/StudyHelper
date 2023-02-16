const popupButton = document.querySelector(".support__button");
const body = document.querySelector("body");


if (popupButton){
    const popup = document.querySelector('.popup');
    popupButton.addEventListener("click", function (){
        popup.classList.toggle("_open");

        document.body.classList.toggle("_lock");
     });
  }

const popupCancel = document.querySelector('.form__cancel');
  
if(popupCancel){
    popupCancel.addEventListener("click", function(){
        popup.classList.remove("_open");
    });
}

popup.addEventListener("click", function(e){
    if(!e.target.closest(".popup__form")) {
        popup.classList.remove("_open");
        document.body.classList.remove("_lock");
    };
})


const headMenu = document.querySelector(".header__nav ");  
headMenu.classList.remove("_actived");