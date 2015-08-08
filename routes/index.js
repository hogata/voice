var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


(function() {
  var VoiceText, fs, voice;

//  require('../node_modules/coffee-script/register.js');

  require('coffee-script');

  fs = require('fs');

  VoiceText = require('../node_modules/voicetext');

  voice = new VoiceText('jdd58fkejgh09lyb');

  voice.speaker(voice.SPEAKER.HIKARI).speak('おはようございます', function(e, buf) {
    if (e) {
      console.error(e);
    }
    return fs.writeFile('test.wav', buf, 'binary', function(e) {
      if (e) {
        return console.error(e);
      }
    });
  });

  res.render('index', { title: 'Express' });

}).call(this);


(function() {
  var T;

//  T = require('../node_modules/timbre');

  T = require('timbre');
  (T("audio")).load("test.wav", function() {
    return this.play();
  });

}).call(this);


  });

module.exports = router;
