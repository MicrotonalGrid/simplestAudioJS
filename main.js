var AudioContext = window.AudioContext || window.webkitAudioContext; //foolproof way of initialising audio context regardless of browser
var audioCtx = new AudioContext(); // create a new audio context
var osc = audioCtx.createOscillator(); // create an oscillator
osc.frequency = 440; //this is not needed, but here as an example to show you how to change frequency
osc.start(3); //the number here is the seconds before playing the sound. set it to 0 start playing immidiately 
osc.stop(6); // this is not needed. the number here is the seconds from the start of the program to stop playing the sound 
osc.connect(audioCtx.destination); // you need to connect the oscillator/nodes to the output. further information is available elsewhere.

/*

resources used : 

https://webaudio.github.io/web-audio-api/#AudioContext
https://webaudio.github.io/web-audio-api/#AudioDestinationNode
https://webaudio.github.io/web-audio-api/#oscillatornode
https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
https://github.com/voidqk/simple-js-synth

*/

