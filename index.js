"use strict";
(function(){
   let lastPage = [];

   function $(id) {
      return document.getElementById(id);
   }

   function qs(id) {
      return document.querySelector(id);
   }

   function qsa(id) {
      return document.querySelectorAll(id);
   }

   window.onload = function() {
      lastPage.push('start');
      $('start-button').onclick = openFilterForm;
      $('continue').onclick = openRecipes;
      let cards = qsa('.card');
      for (let i = 0; i < cards.length; i++) {
         cards[i].onclick = function() {
            loadRecipe(this);
         }
      }
      let backButtons = qsa('.back-button');
      for (let i = 0; i < backButtons.length; i++) {
         backButtons[i].onclick = openLastPage;
      }
   }

   function openFilterForm() {
      addHidden();
      removeHidden('filter-form');
   }

   function openRecipes() {
      addHidden();
      removeHidden('recipes');
      lastPage.push('filter-form');
   }

   function loadRecipe(card) {
      addHidden();
      removeHidden('recipe-card');
      lastPage.push('recipes');
      let title = card.querySelector('.card-header').innerText;
      let imgSrc = card.querySelector('img').src;
      let time = card.querySelector('.time');
   }

   function openLastPage() {
      let l = lastPage.pop();
      addHidden();
      removeHidden(l);
   }

   function addHidden() {
      let sections = qsa('main');
      let page;
      for (let i = 0; i < sections.length; i++) {
         let section = sections[i];
         if (!section.classList.contains('hidden')) {
            section.classList.toggle('hidden');
            //page = section.id;
            //lastPage.push(section.id);
         }
      }
      //return page;
   }

   function removeHidden(query) {
      $(query).classList.toggle('hidden');
   }
})();
