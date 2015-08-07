var express = require('express');
var router = express.Router();
var VoiceText = require 'voicetext'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  voice = new VoiceText('<your api key>')
voice
.speaker(voice.SPEAKER.HIKARI)
.speak 'おはようございます', (e, buf)->
  console.error e if e
  fs.writeFile './test.wav', buf, 'binary', (e)->
    console.error e if e
    # ./test.wav file generated

});

module.exports = router;
