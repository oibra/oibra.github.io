"use strict";
(function() {
    let state = {
        introTimer: null,
        introIndex: 0,
        introMessage: new Array(),
        bio: "i'm a 20 year old undergraduate student based in seattle, washington. i'm currently in my final year studying computer science with minors in informatics and music at the university of washington, planning on pursuing a graduate degree studying computer science education. during the school year, i work as a teaching assistant in the paul g. allen school of computer science, and am currently the head teaching assistant for intro to computer programming 1 at the university of washington",
        color: 'mediumslateblue'
    }

    let colorPalettes = {
        mediumslateblue: {
            header: 'mediumslateblueBackground',
            body: 'ghostwhiteBackground',
            text: 'textBlack',
            textLink: 'textPurple',
            textAccent: 'textWhite',
            card: 'mediumslateblueBackground',
            cardTitle: 'textWhite',
            color: 'mediumslateblue',
            button: 'ghostwhiteButton',
            input: 'inputLight',
            textarea: 'textareaLight'
        },
        ghostwhite: {
            header: 'ghostwhiteBackground',
            body: 'ghostwhiteBackground',
            text: 'textBlack',
            textLink: 'textBlack',
            textAccent: 'textBlack',
            card: 'blackBackground',
            cardTitle: 'textWhite',
            color: 'ghostwhite',
            button: 'blackButton',
            input: 'inputLight',
            textarea: 'textareaLight'
        },
        strawberry: {
            header: 'strawberryBackground',
            body: 'ghostwhiteBackground',
            text: 'textBlack',
            textLink: 'textDarkStrawberry',
            textAccent: 'textBlack',
            card: 'strawberryBackground',
            cardTitle: 'textBlack',
            color: 'strawberry',
            button: 'blackButton',
            input: 'inputLight',
            textarea: 'textareaLight'
        },
        dark: {
            header: 'darkBackground',
            body: 'darkBackground',
            text: 'textWhite',
            textLink: 'textWhite',
            textAccent: 'textWhite',
            card: 'ghostwhiteBackground',
            cardTitle: 'textDark',
            color: 'dark',
            button: 'ghostwhiteButton',
            input: 'inputDark',
            textarea: 'textareaDark'
        },
        maroon: {
            header: 'maroonBackground',
            body: 'ghostwhiteBackground',
            text: 'textBlack',
            textLink: 'textMaroonAccent',
            textAccent: 'textWhite',
            card: 'maroonBackground',
            cardTitle: 'textWhite',
            color: 'maroon',
            button: 'ghostwhiteButton',
            input: 'inputLight',
            textarea: 'textareaLight'
        },
        sophieblue: {
            header: 'sophieblueBackground',
            body: 'ghostwhiteBackground',
            text: 'textBlack',
            textLink: 'textSophieblueAccent',
            textAccent: 'textBlack',
            card: 'sophieblueBackground',
            cardTitle: 'textBlack',
            color: 'sophieblue',
            button: 'blackButton',
            input: 'inputLight',
            textarea: 'textareaLight'
        }
    }

    window.onload = function() {
        setTimeout(hideLoading, 3000);
        setColorPalette();
        showWelcome();
        
        
        $$('welcome').onclick = showWelcome;
        $$('projects').onclick = showProjects;
        $$('experience').onclick = showExperience;
        $$('teaching').onclick = showTeaching;
        $$('contact').onclick = showContact;
        
        $$('mediumslateblue').onclick = setColorMediumslateblue;
        $$('ghostwhite').onclick = setColorGhostwhite;
        $$('strawberry').onclick = setColorStrawberry;
        $$('dark').onclick = setColorDark;
        $$('maroon').onclick = setColorMaroon;
        $$('sophieblue').onclick = setColorSophieblue;
        // setupForm();

        setIntroMessage();
        setTimeout(typeIntro, 3500);
    };

    function hideLoading() {
        $(".loading-icon").fadeOut();
    }

    function setColorMediumslateblue() {
        state.color = 'mediumslateblue';
        setColorPalette();
    }

    function setColorGhostwhite() {
        state.color = 'ghostwhite';
        setColorPalette();
    }

    function setColorStrawberry() {
        state.color = 'strawberry';
        setColorPalette();
    }

    function setColorDark() {
        state.color = 'dark';
        setColorPalette();
    }

    function setColorMaroon() {
        state.color = 'maroon';
        setColorPalette();
    }

    function setColorSophieblue() {
        state.color = 'sophieblue';
        setColorPalette();
    }

    function setColorPalette() {
        let palette = colorPalettes[state.color];
        let body = $('body')[0];
        body.className = palette.body + " " + palette.text;
        let header = $('header')[0];
        header.className = palette.header + " " + palette.textAccent;
        let footer = $('footer')[0];
        footer.className = palette.header + " " + palette.textAccent;
        ($('#hello')[0]).className = palette.textLink;
        
        let blogTitles = $('.blog-title');
        for (let i = 0; i < blogTitles.length; i++) {
            blogTitles[i].className = "blog-title " + palette.textLink;
        }
        let cardTitles = $('.project-title');
        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles[i].className = "project-title card-title " + palette.cardTitle;
        }
        cardTitles = $('.job-title');
        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles[i].className = "job-title card-title " + palette.cardTitle;
        }
        let projectLinks = $('.project-link');
        for (let i = 0; i < projectLinks.length; i++) {
            projectLinks[i].className = "project-link " + palette.textLink;
        }
        let cardBodies = $('.card-body');
        for (let i = 0; i < cardBodies.length; i++) {
            cardBodies[i].className = "card-body " + palette.card;
        }
        let links = $('.link');
        for (let i = 0; i < links.length; i++) {
            links[i].className = "link " + palette.textLink;
        }
        let inputs = $('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].className = palette.input;
        }
        let accents = $('.accent');
        for (let i = 0; i < accents.length; i++) {
            accents[i].className = "accent " + palette.textLink;
        }
        
        // ($('textarea')[0]).className = "expanding " + palette.textarea;
        // ($('#contact-content button small')[0]).className = palette.textLink;
        // ($('#contact-content button .send-icn')[0]).className.baseVal = 'send-icn ' + palette.textLink;

        $$('currentColor').className = "fas fa-square fa-lg " + palette.color;
        $$('colorSelectorButton').className = 'btn dropdown-toggle ' + palette.button + " " + palette.color
    }

    function setIntroMessage() {
        let message = "hello! nice to meet you! i'm omar.";
        for (let i = 0; i < message.length; i++) {
            state.introMessage[i] = message.charAt(i);
        }
    }

    function type(charArray, element) {
        if (state.introIndex == 0) {
            element.innerHTML = charArray[state.introIndex];
            state.introIndex++;
        } else if (state.introIndex < charArray.length) {
            element.innerHTML += charArray[state.introIndex];
            state.introIndex++;
        } else {
            clearInterval(state.introTimer);
            state.introIndex = 0;
        }
    }

    function typeIntro() {
        state.introTimer = setInterval(type, 50, state.introMessage, $$('hello'));
    }

    function showWelcome() {
        show('welcome-content');
        hide('project-content');
        hide('experience-content');
        hide('teaching-content');
        hide('contact-content');
        removeActive('projects');
        removeActive('experience');
        removeActive('teaching');
        removeActive('contact');
    }

    function showProjects() {
        setActive('projects');
        show('project-content');
        hide('welcome-content');
        hide('experience-content');
        hide('teaching-content');
        hide('contact-content');
        removeActive('experience');
        removeActive('teaching');
        removeActive('contact');
    }

    function showExperience() {
        setActive('experience');
        show('experience-content');
        hide('welcome-content');
        hide('project-content');
        hide('teaching-content');
        hide('contact-content');
        removeActive('projects');
        removeActive('teaching');
        removeActive('contact');
    }

    function showTeaching() {
        setActive('teaching');
        show('teaching-content');
        hide('welcome-content');
        hide('project-content');
        hide('experience-content');
        hide('contact-content');
        removeActive('projects');
        removeActive('experience');
        removeActive('contact');
    }

    function showContact() {
        setActive('contact');
        show('contact-content');
        hide('welcome-content');
        hide('project-content');
        hide('experience-content');
        hide('teaching-content');
        removeActive('projects');
        removeActive('experience');
        removeActive('teaching');
    }

    function $$(id) {
        return document.getElementById(id);
    }

    function show(id) {
        $$(id).classList.remove('hidden');
    }

    function hide(id) {
        $$(id).classList.add('hidden');
    }

    function setActive(id) {
        $$(id).classList.add('active');
    }

    function removeActive(id) {
        $$(id).classList.remove('active');
    }

    function checkStatus(response) {
        let responseText = response.text();
        if (response.status >= 200 && response.status < 300) {
           return responseText;
        } else {
           return responseText.then(Promise.reject.bind(Promise));
        }
     }

     function setupForm() {
        $$('message-submit').onclick = function() {
            sendMessage();
            $$('contact-form').reset();
        }

        // qs('input[type="text"], input[type="email"]')
        // // event handler
        // .onkeyup = resizeInput;
        // // resize on page load
        // qs('input[type="text"], input[type="email"]').oneach = resizeInput;

        var textareas = $('.expanding'),

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

    function qs(id) {
        return document.querySelector(id);
    }

    function resizeInput() {
        qs(this).attr('size', qs(this).val().length);
    }

    function sendMessage() {
        let name = $$('name').value;
        let email = $$('email').value;
        let message = $$('message').value;

        let data = new FormData();
        data.append("name", name);
        data.append("email", email);
        data.append("body", message);

        fetch("php/takeform.php", {method: "POST", body: data, credentials: "include"})
            .then(checkStatus)
            .then(alert)
            .catch(alert);
    }
})();