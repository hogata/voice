T = require '../node_modules/timbre'

(T "audio").load "../misc/audio/amen.wav", ->
    do @play
