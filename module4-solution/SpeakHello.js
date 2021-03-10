
    // console.log("Hello")
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
const helloSpeaker = {}

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
helloSpeaker.speakWord = "Hello";

(function(window){

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function (names) {
  return helloSpeaker.speakWord + " " + names;
}

// console.log(names, "hello")


// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
window.helloSpeaker = helloSpeaker;

})(window);

// console.log("Hello")
