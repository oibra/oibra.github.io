"use strict";
(function(){


   function $(id) {
      return document.getElementById(id);
   }

   function qs(id) {
      return document.querySelector(id);
   }

   function qsa(id) {
      return document.querySelectorAll(id);
   }

   window.onload = () => {
      let modals = qsa(".modal");
      let cards = qsa(".project-card");
      let body = qs("body");
      cards.forEach((card) => {
         // Get the modal
         let modal = $(card.id + "-modal");
         // Get the <span> element that closes the modal
         let span = modal.getElementsByClassName("close")[0];

         // When the user clicks on the button, open the modal
         card.onclick = () => {
             modal.style.display = "block";
             body.classList.toggle('modal-open');
         }

         // When the user clicks on <span> (x), close the modal
         span.onclick = () => {
             modal.style.display = "none";
             body.classList.toggle('modal-open');
         }
      });
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
         modals.forEach((modal) => {
            if (event.target == modal) {
               modal.style.display = "none";
               body.classList.toggle('modal-open');
            }
         });
      }
   }

})();
