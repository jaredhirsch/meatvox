importScripts('https://meatvox.s3.amazonaws.com/speakGenerator.js');

onmessage = function(event) {
  postMessage(generateSpeech(event.data.text, event.data.args));
};

