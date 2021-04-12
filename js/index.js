"use strict";
(function() {
    let state = {
        introTimer: null,
        introIndex: 0,
        introMessage: new Array(),
        bio: "i'm a 20 year old undergraduate student based in seattle, washington. i'm currently in my final year studying computer science with minors in informatics and music at the university of washington, planning on pursuing a graduate degree studying computer science education. during the school year, i work as a teaching assistant in the paul g. allen school of computer science, and am currently the head teaching assistant for intro to computer programming 1 at the university of washington",
        color: 'mediumslateblue',
        currentPage: null
    }

    const pages = ['welcome', 'projects', 'experience', 'teaching', 'contact']
    const blogs = ['sigcse2021']
    const welcomeMessage = "hello! nice to meet you! i'm omar."

    window.onload = () => {
        setTimeout(hideLoading, 1000);
        setColorPalette();
        changePage('welcome')
        
        for (let i = 0; i < pages.length; i++) {
            $$(pages[i]).onclick = () => {
                changePage(pages[i])
            }
        }

        for (let i = 0; i < blogs.length; i++) {
            $$(blogs[i]).onclick = () => {
                showBlog(blogs[i])
            }
        }

        for (const color in colorPalettes) {
            $$(color).onclick = () => {
                setColor(color)
            }
        }

        setIntroMessage();
        setTimeout(typeIntro, 1500);
    };

    // window.onpopstate = (e) => {
    //     console.log(e.state.page)
    //     if (e.state.page) {
    //         // history.replaceState({page: state.currentPage}, "")

    //         if (blogs.includes(e.state.page)) {
    //             showBlog(e.state.page)
    //         } else {
    //             changePage(e.state.page)
    //         }
    //     }
    // }

    function hideLoading() {
        $(".loading-icon").fadeOut();
    }

    function setColor(color) {
        state.color = color
        setColorPalette()
    }

    function setColorPalette() {
        let palette = colorPalettes[state.color]

        for (const e in paletteElements) {
            const elements = $(e)
            for(let i = 0; i < elements.length; i++) {
                const element = elements[i]
                let c = ""
                for (let j = 0; j < paletteElements[e].palette.length; j++) {
                    c += " " + palette[paletteElements[e].palette[j]]
                }
                if (paletteElements[e]["baseVal"]) {
                    element.className.baseVal = paletteElements[e].className + c
                } else {
                    element.className = paletteElements[e].className + c
                }
            }
        }
    }

    function setIntroMessage() {
        for (let i = 0; i < welcomeMessage.length; i++) {
            state.introMessage[i] = welcomeMessage.charAt(i);
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

    function changePage(id) {
        if (id != 'welcome') {
            setActive(id);
        }
        show(id + '-content');
        for (let i = 0; i < pages.length; i++) {
            if (pages[i] !== id) {
                hide(pages[i] + '-content');
                if (pages[i] !== 'welcome') {
                    removeActive(pages[i])
                }
            }
        }

        for (let i = 0; i < blogs.length; i++) {
            hide(blogs[i] + '-content');
        }

        // console.log(window.history)
        // if (state.currentPage != null) {
        //     history.replaceState({page: state.currentPage}, "")
        // } else {
        //     history.replaceState({page: "welcome"}, "")
        // }
        state.currentPage = id
    }

    function showBlog(id) {
        show(id + '-content');
        hide('welcome-content');
        // console.log(window.history)
        // history.replaceState({page: state.currentPage}, "")
        state.currentPage = id
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

    /**
     * palette affected elements dictionary
     */
    const paletteElements = {
        "body": {
            className: "",
            palette: ["body", "text"]
        },
        "header": {
            className: "",
            palette: ["header", "textAccent"]
        },
        "footer": {
            className: "",
            palette: ["header", "textAccent"]
        },
        "#hello": {
            className: "",
            palette: ["textLink"]
        },
        ".blog-title": {
            className: "blog-title",
            palette: ["textLink"]
        },
        ".project-title": {
            className: "project-title card-title",
            palette: ["cardTitle"]
        },
        ".job-dates": {
            className: "job-dates",
            palette: ["textLink"]
        },
        ".project-link": {
            className: "project-link",
            palette: ["textLink"]
        },
        ".card-body": {
            className: "card-body",
            palette: ["card"]
        },
        ".link": {
            className: "link",
            palette: ["textLink"]
        },
        ".blog-link": {
            className: "blog-link",
            palette: ["textLink"]
        },
        "input": {
            className: "",
            palette: ["input"]
        },
        ".accent": {
            className: "accent",
            palette: ["textLink"]
        },
        "textarea": {
            className: "expanding",
            palette: ["textarea"]
        },
        "#contact-content button small": {
            className: "",
            palette: ["textLink"]
        },
        "#contact-content button .send-icn": {
            className: "send-icn",
            palette: ["textLink"],
            baseVal: true
        },
        "#currentColor": {
            className: "fas fa-square fa-lg",
            palette: ["color"]
        },
        "#colorSelectorButton": {
            className: "btn dropdown-toggle",
            palette: ["button", "color"]
        }
    }

    /**
     * color palette dictionary
     */
    const colorPalettes = {
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
})();