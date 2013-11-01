## MEATVOX: Text-to-speech for https://chat.meatspac.es

Note: due to laziness I'm serving the bookmarklet off an S3 bucket: **meatvox.s3.amazonaws.com**.

### Instructions:

1. create a bookmarklet with the following contents:
```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://meatvox.s3.amazonaws.com/meatvox.js';})();
```
2. load chat.meatspac.es
3. when the page settles, click your button and behold roboty delight.

### Etc.

Wat: This is a straightforward application of @kripken's [speak.js](https://github.com/kripken/speak.js), which is an emscripten port of a C++ TTS library to JS. The underlying TTS library is [eSpeak](http://espeak.sourceforge.net/).

About hosting: the code is just a few static JS files, so S3 seemed like the simplest possible solution. I made use of [this blog post](http://shlomoswidler.com/2009/08/amazon-s3-gotcha-using-virtual-host.html) to get going.

PRs welcome. My code is Apache 2. eVoice portions are GPL'd.
