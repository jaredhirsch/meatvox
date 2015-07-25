## MEATVOX: Text-to-speech for https://chat.meatspac.es

_This project has been deactivated: it's no longer served off of S3._


Note: due to laziness I'm serving the bookmarklet off an S3 bucket: **meatvox.s3.amazonaws.com**.

### Instructions:

1. create a bookmarklet with the following contents:
```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://meatvox.s3.amazonaws.com/meatvox.js';})();
```
2. load chat.meatspac.es
3. when the page settles, click your button and behold roboty delight.

### Etc.

#### Wat:

This is a straightforward application of @kripken's [speak.js](https://github.com/kripken/speak.js), which is an emscripten port of a C++ TTS library to JS. The underlying TTS library is [eSpeak](http://espeak.sourceforge.net/).

#### About hosting:

The code is just a few static JS files, so S3 seemed like the simplest possible solution. I could setup a server with a proper SSL cert and all that, but laziness is next to godliness--it's the cardinal virtue of a good programmer (IMO).

#### License?

My code is Apache 2. eVoice portions are GPL'd.

#### Release process

* JS files updated? Manually upload to S3 + re-enable permissions so that 'Everybody' can view the file.

* README updated? Manually regenerate the gh-pages to pick up changes.
