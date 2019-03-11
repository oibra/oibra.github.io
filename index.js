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
      let meal = $('meal').value;
      let budget = $('budget').value;
      let time = $('time').value;
      if (!time) {
         time = 0;
      }
      let difficulty = parseInt($('difficulty').value);
      let restrictions = getChecked('restriction');
      let allergens = getChecked('allergen');
      if (!budget) {
         alert("You must fill out the budget field.")
      } else {
         getRecipes(meal, budget, time, difficulty, restrictions, allergens);
         addHidden();
         removeHidden('recipes');
         lastPage.push('filter-form');
      }
   }

   function loadRecipe(card) {
      let title = card.querySelector('.card-header').innerText;
      let imgSrc = card.querySelector('img').src;
      let time = card.querySelector('.time').innerText;
      let diff = card.querySelector('.diff').innerText;
      let price = card.querySelector('.price').innerText;
      setRecipeCard(title, imgSrc, time, diff, price);
      addHidden();
      removeHidden('recipe-card');
      lastPage.push('recipes');
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

   function getChecked(type) {
      let selections = [];
      let checkboxes = qsa('.' + type);
      for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            selections.push(checkboxes[i].value);
         }
      }
      return selections;
   }

   function getRecipes(meal, budget, time, difficulty, restrictions, allergens) {
      let message = meal + "\n" + budget + "\n" + time + "\n" + difficulty + "\n" + restrictions + "\n" + allergens
      alert(message);
   }

   function setRecipeCard(title, imgSrc, time, diff, price) {
      $('recipe-card').querySelector('.title').innerText = title;
      $('recipe-card').querySelector('img').src = imgSrc;
      $('recipe-card').querySelector('.time').innerText = time;
      $('recipe-card').querySelector('.diff').innerText = diff;
      $('recipe-card').querySelector('.price').innerText = price;
   }
})();
