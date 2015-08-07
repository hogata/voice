var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


(function() {
  var VoiceText, fs, voice;

  require('./node_modules/coffee-script/register');

  fs = require('fs');

  VoiceText = require('../node_modules/voicetext');

  voice = new VoiceText('jdd58fkejgh09lyb');

  voice.speaker(voice.SPEAKER.HIKARI).speak('おはようございます', function(e, buf) {
    if (e) {
      console.error(e);
    }
    return fs.writeFile('/tmp/test.wav', buf, 'binary', function(e) {
      if (e) {
        return console.error(e);
      }
    });
  });

  res.render('index', { title: 'Express' });

}).call(this);



  });

module.exports = router;
