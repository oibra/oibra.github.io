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

    // const pages = ['welcome'/*, 'projects', 'experience', 'teaching'/*, 'contact'*/]
    // const blogs = ['sigcse2021']
    const welcomeMessage = "hello! nice to meet you! i'm omar."

    window.onload = () => {
        setTimeout(hideLoading, 100);
        setColorPalette();
        // hideLoading();
        
        // for (let i = 0; i < pages.length; i++) {
        //     $$(pages[i]).onclick = () => {
        //         changePage(pages[i])
        //     }
        // }

        // for (let i = 0; i < blogs.length; i++) {
        //     $$(blogs[i]).onclick = () => {
        //         showBlog(blogs[i])
        //     }
        // }

        for (const color in colorPalettes) {
            $$(color).onclick = (e) => {
                setColor(color)
            }
        }

        setIntroMessage();
        setTimeout(typeIntro, 500);
    };

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
                if (element.classList.contains("show")) {
                    c += " show"
                }

                if (paletteElements[e]["baseVal"]) {
                    element.className.baseVal = paletteElements[e].className + c
                } else {
                    element.className = paletteElements[e].className + c
                }
            }
        }

        for (const p in projectImages) {
            const modalElement = $("#" + p + "-modal img")[0]
            if (modalElement) {
                modalElement.src = "assets/img/" + projectImages[p][state.color]
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

    // function changePage(id) {
    //     if (id != 'welcome') {
    //         setActive(id);
    //     }
    //     show(id + '-content');
    //     for (let i = 0; i < pages.length; i++) {
    //         if (pages[i] !== id) {
    //             hide(pages[i] + '-content');
    //             if (pages[i] !== 'welcome') {
    //                 removeActive(pages[i])
    //             }
    //         }
    //     }

    //     for (let i = 0; i < blogs.length; i++) {
    //         hide(blogs[i] + '-content');
    //     }

    //     state.currentPage = id
    // }

    // function showBlog(id) {
    //     show(id + '-content');
    //     hide('welcome-content');
    //     state.currentPage = id
    // }

    function $$(id) {
        return document.getElementById(id);
    }

    // function show(id) {
    //     $$(id).classList.remove('hidden');
    // }

    // function hide(id) {
    //     $$(id).classList.add('hidden');
    // }

    // function setActive(id) {
    //     $$(id).classList.add('active');
    // }

    // function removeActive(id) {
    //     $$(id).classList.remove('active');
    // }

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
        
        ".project-dates": {
            className: "project-dates card-dates",
            palette: ["body", "textLink"]
        },
        ".job-title": {
            className: "job-title card-title",
            palette: ["cardTitle"]
        },
        ".job-subtitle": {
            className: "job-subtitle card-title",
            palette: ["cardTitle"]
        },
        ".job-dates": {
            className: "job-dates",
            palette: ["textLink"]
        },
        ".project-link": {
            className: "project-link btn btn-project",
            palette: ["textLink"]
        },
        ".modal-content": {
            className: "modal-content",
            palette: ["body"]
        },
        ".modal-title": {
            className: "modal-title card-title",
            palette: ["textLink"]
        },
        ".project-card": {
            className: "card project-card",
            palette: ["card"]
        },
        ".job-card": {
            className: "card job-card",
            palette: ["card"]
        },
        ".modal-card": {
            className: "modal-card",
            palette: ["card"]
        },
        ".btn-project": {
            className: "btn btn-project",
            palette: ["modal"]
        },
        ".btn-close": {
            className: "btn-close",
            palette: ["textLink"]
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
        },
        ".accentBorder.borderLeft": {
            className: "accentBorder borderLeft",
            palette: ["border"]
        },
        ".accentBorder.borderRight": {
            className: "accentBorder borderRight projects-grid",
            palette: ["border"]
        }
    }

    const projectImages = {
        "forager": {
            "mediumslateblue": "forager-light.png",
            "ghostwhite": "forager-light.png",
            "strawberry": "forager-dark.png",
            "dark": "forager-dark.png",
            "maroon": "forager-light.png",
            "sophieblue": "forager-dark.png"
        },
        "linter": {
            "mediumslateblue": "linter-mediumslateblue.png",
            "ghostwhite": "linter-ghostwhite.png",
            "strawberry": "linter-strawberry.png",
            "dark": "linter-dark.png",
            "maroon": "linter-maroon.png",
            "sophieblue": "linter-sophieblue.png"
        },
        "style-guide": {
            "mediumslateblue": "style-guide-mediumslateblue.png",
            "ghostwhite": "style-guide-ghostwhite.png",
            "strawberry": "style-guide-strawberry.png",
            "dark": "style-guide-dark.png",
            "maroon": "style-guide-maroon.png",
            "sophieblue": "style-guide-sophieblue.png"
        },
        "readycipe": {
            "mediumslateblue": "readycipe-mediumslateblue.png",
            "ghostwhite": "readycipe-ghostwhite.png",
            "strawberry": "readycipe-strawberry.png",
            "dark": "readycipe-dark.png",
            "maroon": "readycipe-maroon.png",
            "sophieblue": "readycipe-sophieblue.png"
        },
        "ictc": {
            "mediumslateblue": "ictc-light.png",
            "ghostwhite": "ictc-light.png",
            "strawberry": "ictc-dark.png",
            "dark": "ictc-dark.png",
            "maroon": "ictc-light.png",
            "sophieblue": "ictc-dark.png"
        },
        "snaptrack": {
            "mediumslateblue": "snap-mediumslateblue.png",
            "ghostwhite": "snap-ghostwhite.png",
            "strawberry": "snap-strawberry.png",
            "dark": "snap-dark.png",
            "maroon": "snap-maroon.png",
            "sophieblue": "snap-sophieblue.png"
        },
        "info201": {
            "mediumslateblue": "info201-mediumslateblue.png",
            "ghostwhite": "info201-ghostwhite.png",
            "strawberry": "info201-strawberry.png",
            "dark": "info201-dark.png",
            "maroon": "info201-maroon.png",
            "sophieblue": "info201-sophieblue.png"
        },
        "sophie": {
            "mediumslateblue": "sophie-mediumslateblue.png",
            "ghostwhite": "sophie-ghostwhite.png",
            "strawberry": "sophie-strawberry.png",
            "dark": "sophie-dark.png",
            "maroon": "sophie-maroon.png",
            "sophieblue": "sophie-sophieblue.png"
        },
        "undergrad-ta": {
            "mediumslateblue": "undergrad-ta-mediumslateblue.png",
            "ghostwhite": "undergrad-ta-ghostwhite.png",
            "strawberry": "undergrad-ta-strawberry.png",
            "dark": "undergrad-ta-dark.png",
            "maroon": "undergrad-ta-maroon.png",
            "sophieblue": "undergrad-ta-sophieblue.png"
        },
        "grad-ta": {
            "mediumslateblue": "grad-ta-mediumslateblue.png",
            "ghostwhite": "grad-ta-ghostwhite.png",
            "strawberry": "grad-ta-strawberry.png",
            "dark": "grad-ta-dark.png",
            "maroon": "grad-ta-maroon.png",
            "sophieblue": "grad-ta-sophieblue.png"
        },
        "instructor": {
            "mediumslateblue": "instructor-mediumslateblue.png",
            "ghostwhite": "instructor-ghostwhite.png",
            "strawberry": "instructor-strawberry.png",
            "dark": "instructor-dark.png",
            "maroon": "instructor-maroon.png",
            "sophieblue": "instructor-sophieblue.png"
        },
        "mentor": {
            "mediumslateblue": "mentor-mediumslateblue.png",
            "ghostwhite": "mentor-ghostwhite.png",
            "strawberry": "mentor-strawberry.png",
            "dark": "mentor-dark.png",
            "maroon": "mentor-maroon.png",
            "sophieblue": "mentor-sophieblue.png"
        },
        "amazon": {
            "mediumslateblue": "amazon-mediumslateblue.png",
            "ghostwhite": "amazon-ghostwhite.png",
            "strawberry": "amazon-strawberry.png",
            "dark": "amazon-dark.png",
            "maroon": "amazon-maroon.png",
            "sophieblue": "amazon-sophieblue.png"
        },
        "citrix": {
            "mediumslateblue": "citrix-mediumslateblue.png",
            "ghostwhite": "citrix-ghostwhite.png",
            "strawberry": "citrix-strawberry.png",
            "dark": "citrix-dark.png",
            "maroon": "citrix-maroon.png",
            "sophieblue": "citrix-sophieblue.png"
        },
        "wrps": {
            "mediumslateblue": "wrps-mediumslateblue.png",
            "ghostwhite": "wrps-ghostwhite.png",
            "strawberry": "wrps-strawberry.png",
            "dark": "wrps-dark.png",
            "maroon": "wrps-maroon.png",
            "sophieblue": "wrps-sophieblue.png"
        },
        "pnnl": {
            "mediumslateblue": "pnnl-mediumslateblue.png",
            "ghostwhite": "pnnl-ghostwhite.png",
            "strawberry": "pnnl-strawberry.png",
            "dark": "pnnl-dark.png",
            "maroon": "pnnl-maroon.png",
            "sophieblue": "pnnl-sophieblue.png"
        },
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
            textarea: 'textareaLight',
            modal: 'btnPurple',
            border: 'borderPurple',
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
            textarea: 'textareaLight',
            modal: 'btnBlack',
            border: 'borderBlack',
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
            textarea: 'textareaLight',
            modal: 'btnStrawberry',
            border: 'borderStrawberry',
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
            textarea: 'textareaDark',
            modal: 'btnGhostwhite',
            border: 'borderWhite',
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
            textarea: 'textareaLight',
            modal: 'btnMaroon',
            border: 'borderMaroon',
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
            textarea: 'textareaLight',
            modal: 'btnSophieblue',
            border: 'borderBlue',
        }
    }
})();