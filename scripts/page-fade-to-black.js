// The original code was designed by Christopher Aue.
// https://christopheraue.net/design/fading-pages-on-load-and-unload

// YOU MUST USE:   <svg id="fader"></svg>    IN THE BODY OF THE HTML.
// IT MUST IMMEDIATELY BE FOLLOWED BY THE SCRIPT:  fadeInPage();  OR IT WILL NOT WORK!
// THEY MUST BE THE FIRST LINES OF CODE IN THE BODY OR THE EFFECT WILL NOT WORK!
// YOU MUST IMPORT THIS SCRIPT: < script src = "page-fade-to-black.js" >< /script> INTO THE HEAD BEFORE ANY OTHER JS PAGE!
// DO NOT FORGET TO IMPORT THE ACCOMPANYING CSS FILE: <link rel="stylesheet" href="page-fade-to-black.css"> IN THE HEAD!

// This JS was finalized on April 12th 2025 by Trista Fedoruk



function fadeInPage() {

    if (!window.AnimationEvent) {
        return;
    }

    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function () {
    if (!window.AnimationEvent) {
        return;
    }

    var anchors = document.getElementsByTagName('a');

    for (var idx = 0; idx < anchors.length; idx += 1) {

        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }

        anchors[idx].addEventListener('click', function (event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;

            var listener = function () {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);

            event.preventDefault();

            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
        return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
});

