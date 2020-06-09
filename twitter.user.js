// ==UserScript==
// @name         Twitter User Note
// @namespace    http://github.com/mirogta/
// @version      0.0.1
// @description  Add notes to Twitter users
// @author       mirogta
// @license      MIT
// @homepageURL  https://github.com/mirogta/tampermonkey-twitter-usernote
// @match        https://twitter.com/*
// @inject-into  content
// @grant        GM_getValue
// @grant        GM_setValue
// @compatible   firefox >=14
// @compatible   chrome >=18
// ==/UserScript==
// ==OpenUserJS==
// @author mirogta
// ==/OpenUserJS==

(function() {
    'use strict';

    console.log(`Initialising Twitter User Note`);

    const data = {
        noteId: '_note',
    };

    let ob = new window.MutationObserver(function() {

        console.debug(`- content changed`);
        checkAndAddInputField();

    });

    function checkAndAddInputField() {
        // find user section and add input field
        const mainElement = document.getElementsByTagName('main');
        if(mainElement && mainElement[0]) {
            const container = mainElement[0].querySelector('a[role="link"]');
            const noteEl = document.getElementById(data.noteId);
            if(container && container.nextElementSibling && null == noteEl) {

                console.log(`- adding user note input field`);
                const newNoteEl = document.createElement('textarea');
                newNoteEl.id = data.noteId;
                newNoteEl.placeholder = 'Add custom note...';
                newNoteEl.style = 'margin-top:10px; position: absolute; top: 2px; left: 160px;';
                newNoteEl.addEventListener('change', saveNote, false);
                container.nextElementSibling.append(newNoteEl);
            }
            loadNote();
        }
    }

    function getUserUrl() {
        const openGraphUrl = document.head.querySelector('meta[property="og:url"]');
        if(openGraphUrl) {
            return openGraphUrl.content;
        }
        return null;
    }

    function loadNote() {
        const userUrl = getUserUrl();
        const noteEl = document.getElementById(data.noteId);
        if(noteEl && userUrl) {
            const content = GM_getValue(userUrl);
            if(content) {
                console.log(`- found user note for ${userUrl}`);
                noteEl.value = content;
            } else {
                noteEl.value = '';
            }
        }
    }

    function saveNote(event) {
        const userUrl = getUserUrl();
        if(userUrl) {
            const content = event.target.value;
            GM_setValue(userUrl, content);
            console.log(`- saved user note for ${userUrl}`);
        }
    }

    ob.observe(document, {
        childList: true,
        subtree: true,
    });
})();