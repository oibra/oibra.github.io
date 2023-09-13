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

   /**
   * Pre-canned code from lecture to handle responses...
   * include this code, based on:
   * https://developers.google.com/web/updates/2015/03/introduction-to-fetch
   * updated from:
   * https://stackoverflow.com/questions/29473426/fetch-reject-promise-with-json-error-object
   */
   function checkStatus(response) {
      let responseText = response.text();
      if (response.status >= 200 && response.status < 300) {
         return responseText;
      } else {
         return responseText.then(Promise.reject.bind(Promise));
      }
   }

   window.onload = function() {
      $('message-submit').onclick = function() {
         sendMessage();
         $('contact-form').reset();
      }

      qs('input[type="text"], input[type="email"]')
      // event handler
      .onkeyup = resizeInput;
      // resize on page load
      qs('input[type="text"], input[type="email"]').oneach = resizeInput;

      var textareas = qsa('.expanding'),

      resize = function(t) {
         t.style.height = 'auto';
         t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
         t.style.height = (t.scrollHeight + t.offset ) + 'px';
         t.style.overflow = '';
      },

      attachResize = function(t) {
         if ( t ) {
            console.log('t.className',t.className);
            t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

            resize(t);

            if ( t.addEventListener ) {
               t.addEventListener('input', function() { resize(t); });
               t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
            }

            t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
         }
      };

      // IE7 support
      if ( !document.querySelectorAll ) {

         function getElementsByClass(searchClass,node,tag) {
            var classElements = new Array();
            node = node || document;
            tag = tag || '*';
            var els = node.getElementsByTagName(tag);
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
            for (i = 0, j = 0; i < elsLen; i++) {
               if ( pattern.test(els[i].className) ) {
                  classElements[j] = els[i];
                  j++;
               }
            }
            return classElements;
         }

         textareas = getElementsByClass('expanding');
      }

      for (var i = 0; i < textareas.length; i++ ) {
         attachResize(textareas[i]);
      }
   }

   function resizeInput() {
      qs(this).attr('size', qs(this).val().length);
   }

   function sendMessage() {
      let name = $('name').value;
      let email = $('email').value;
      let message = $('message').value;

      let data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("body", message);

      fetch("../php/takeform.php", {method: "POST", body: data, credentials: "include"})
      .then(checkStatus)
      .then(alert)
      .catch(alert);
   }
})();
