require('/Users/webos/.nvm/versions/node/v0.12.7/lib/node_modules/coffee-script/register')
fs = require 'fs'
VoiceText = require '../node_modules/voicetext'

voice = new VoiceText('jdd58fkejgh09lyb')

voice
.speaker(voice.SPEAKER.HIKARI)
.speak 'おはようございます', (e, buf)->
  console.error e if e
  fs.writeFile './test.wav', buf, 'binary', (e)->
    console.error e if e
    # ./test.wav file generated
