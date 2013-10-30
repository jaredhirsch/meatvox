// meatsong v0.1
//
// This is a bookmarklet to speak the entries added to chat.meatspac.es
// made by 6a68 with <3 for the internets
// Apache2 license. 
// ideas/comments welcome --> https://gist.github.com/6a68/7239724

var PATH = 'https://rawgithub.com/6a68/6a68.github.com/meatsong/src/';
var audiodiv = document.createElement('div')
audiodiv.id = 'audio';
document.body.appendChild(audiodiv);
document.body.appendChild(document.createElement('script')).src=PATH+'speakGenerator.js';
document.body.appendChild(document.createElement('script')).src=PATH+'speakClient.js';

// use MutationObserver to watch for new <li> elements
// when one appears, speak it.

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // mutations fire when <li>s are removed, so guard against that.
    // multiple speakers collide, so just speak the 0th.
    mutation.addedNodes && speak(mutation.addedNodes[0].querySelector('p').textContent, {noWorker:true});
  });
});
observer.observe(document.querySelector('div.chats ul'), {childList: true});

// TODOs:
// * hit a button to turn it on
// * hit a button to turn it off
// * randomly change the speak params for each new message
//    relevant params seem to be: amplitude, wordgap, pitch, speed
// * enable multiple speakers to overlap in glorious post-tonal cacophony
