console.log('this is still working!')
"use strict";
(function() {
    let state = {
        color: 'mediumslateblue',
        cookiesAccepted: false,
        page: 'home'
    }
    const domain = 'omaryibrahim.me'
    const pages = ['home', 'about', 'teaching', 'works', 'tf-app-materials']

    window.onload = () => {
        const cookies = document.cookie
            .split(';');
        const cookiesAccepted = cookies
            .find(row => row.trim().startsWith('cookiesAccepted'));
        if (cookiesAccepted) {
            $$('cookieAlert').remove();
            state.cookiesAccepted = cookiesAccepted.split('=')[1];
        } else {
            $$('allowCookies').onclick = (e) => {
                state.cookiesAccepted = true;
                document.cookie = 'cookiesAccepted=true; samesite=Lax; path=/';
            }

            $$('disallowCookies').onclick = (e) => {
                state.cookiesAccepted = false;
                document.cookie = 'cookiesAccepted=false; samesite=Lax; path=/';
            }
        }

        history.replaceState({page: state.page}, "", "/")

        
        if (state.cookiesAccepted) {
            const cookieTheme = cookies
                .find(row => row.trim().startsWith('colorTheme'));
        
            if (cookieTheme) {
                const color = cookieTheme.split('=')[1]
                if (color && colorPalettes[color]) {
                    setColor(color);
                }
            }

            // const lastPage = cookies.find(row => row.trim().startsWith('lastPage'));

            // if (lastPage && lastPage != 'home') {
            //     const page = lastPage.split('=')[1]
            //     if (page && pages.includes(page)) {
            //         history.replaceState({page: page}, "", "/" + page)
            //         loadNewPage(page)
            //     }
            // }
        }

        
        

        for (const color in colorPalettes) {
            $$(color).onclick = (e) => {
                setColor(color)
            }
        }

        for (const i in pages) {
            const page = pages[i]
            // console.log(pages)
            try {
                $$(page + "-btn").onclick = (e) => {
                    e.preventDefault()
                    if (page != 'home') {
                        history.pushState({page: page}, "", "/" + page)
                    } else {
                        history.pushState({page: page}, "", "/")
                    }

                    
                    
                    loadNewPage(page)
                }

                const links = document.getElementsByClassName(page + '-btn')
                links.forEach((link) => {
                    link.onclick = (e) => {
                        console.log(link)
                        e.preventDefault()
                        if (page != 'home') {
                            history.pushState({page: page}, "", "/" + page)
                        } else {
                            history.pushState({page: page}, "", "/")
                        }
                        loadNewPage(page)
                    }
                })
            } catch (err) {
                console.log(page)
            }
            
        }

        // $$('/about-btn').onclick = (e) => {
        //     e.preventDefault()
        //     history.pushState({page: 'about'}, "", "/about")
        //     loadNewPage('about')
        // }

    };

    window.addEventListener("popstate", (event) => {
        // console.log('popstate event logged')
        // console.log(event)
        if (event.state) {
            // console.log(event.state)
            loadNewPage(event.state.page)
            $$(event.state.page + "-btn").classList.add('active')
        }
    });

    // window.onbeforeunload = (e) => {
    //     console.log(e.originalTarget)
    //     console.log(e.originalTarget.URL == window.location.href)
    //     if (e.originalTarget.URL == window.location.href) {
    //         window.setTimeout(() => {
    //     //     // alert('hello!')
    //             window.location.href = '/'
                
    //         }, 0);
    //         window.onbeforeunload = null
    //     }    
    //     return true;
    // };


    function loadNewPage(pagename) {
        $$(state.page).hidden = true
        $$(state.page + "-btn").classList.remove('active')
        $$(pagename).hidden = false
        state.page = pagename

        // if (state.cookiesAccepted) {
        //     document.cookie = "lastPage=" + pagename  + '; samesite=Lax; path=/'; 
        // }
    }

    function setColor(color) {
        state.color = color
        document.querySelectorAll('.color-button')
            .forEach(button => {
                button.classList.remove('active');
            })
        $$(color).classList.add('active')
        setColorPalette()
        if (state.cookiesAccepted) {
            document.cookie = "colorTheme=" + color  + '; samesite=Lax; path=/'; 
        }
    }

    function setColorPalette() {
        const palette = colorPalettes[state.color]
        const root = document.querySelector(':root');

        for (const prop in paletteVariables) {
            root.style.setProperty(prop, palette[paletteVariables[prop]]);
        }
    }

    function $$(id) {
        return document.getElementById(id);
    }

    const paletteVariables = {
        '--bg-color': 'bgval',
        '--text-color': 'textcolor',
        '--accent-bg': 'accentbg',
        '--accent-color': 'accentcolor',
        '--link-color': 'linkcolor',
        '--card-bg': 'cardbg',
        '--card-color': 'cardcolor',
        '--btn-color': 'btncolor'
    }

    /**
     * color palette dictionary
     */
    const colorPalettes = {
        mediumslateblue: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: 'mediumslateblue',
            accentcolor: 'ghostwhite',
            linkcolor: '#3f23e6',
            cardbg: 'mediumslateblue',
            cardcolor: 'ghostwhite',
            btncolor: 'white'
        },
        ghostwhite: {
            bgval: 'ghostwhite',
            textcolor: 'black',
            accentbg: 'ghostwhite',
            accentcolor: 'black',
            linkcolor: 'black',
            cardbg: 'black',
            cardcolor: 'ghostwhite',
            btncolor: 'white'
        },
        strawberry: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: '#ec8094',
            accentcolor: 'black',
            linkcolor: '#b75166',
            cardbg: '#ec8094',
            cardcolor: 'black',
            btncolor: 'white'
        },
        dark: {
            bgval: '#121212',
            textcolor: 'ghostwhite',
            accentbg: '#121212',
            accentcolor: 'ghostwhite',
            linkcolor: 'ghostwhite',
            cardbg: 'ghostwhite',
            cardcolor: '#121212',
            btncolor: 'black'
        },
        maroon: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: '#8b0023',
            accentcolor: 'ghostwhite',
            linkcolor: '#570000',
            cardbg: '#8b0023',
            cardcolor: 'ghostwhite',
            btncolor: 'white'
        },
        sophieblue: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: '#00e1c6',
            accentcolor: 'black',
            linkcolor: '#009583',
            cardbg: '#00e1c6',
            cardcolor: 'black',
            btncolor: 'white'
        },
        udub: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: '#4b2e83',
            accentcolor: 'ghostwhite',
            linkcolor: '#85754d',
            cardbg: '',
            cardcolor: '',
            btncolor: 'white'
        },
        uic: {
            bgval: 'white',
            textcolor: 'black',
            accentbg: '#d50032',
            accentcolor: '#f2f7eb',
            linkcolor: '#001e62',
            cardbg: '',
            cardcolor: '',
            btncolor: ''
        }
    }
})();
