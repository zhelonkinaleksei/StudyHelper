'use strict'
const profilePopup = document.querySelector(".lkprofile__popup");
if (profilePopup) {
   const profileModal = document.querySelector(".profile__modal");
   profilePopup.addEventListener("click", function () {
      profileModal.classList.toggle("activemodal");   
   });
}