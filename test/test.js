
var assert = require('assert'); 
var speedReader = require("../scripts/main.js")


let testSentence = "this is a longer sentence for testing the still reading function"
let testPage = new speedReader.Page(
    testSentence,
    {},
    {},
    {}, 
    3
)


function testGetWords(){
    sentence = "just a sentence"
    words = speedReader.getWords(sentence)
    assert.strictEqual("just", words[0])
    assert.strictEqual("sentence", words[words.length - 1])
}
it("test-get-words", testGetWords)


function testGetGroup(){
    wordGroup = testPage.getGroup()
    assert.strictEqual("this", wordGroup[0])
    assert.strictEqual("a", wordGroup[wordGroup.length - 1]) 
}
it("Should return array of selected words", testGetGroup)


function  testStillReading(){
    assert.strictEqual(true, testPage.stillReading())
    testPage.currentGroup = []
    assert.strictEqual(false, testPage.stillReading())
}
it("test-still-reading", testStillReading)

function testGetPreviousWords(){
    testPage.start = 3
    let previousWords = testPage.getPreviousWords()
    assert.strictEqual(previousWords, "this is a")
}
it("get-previous-words-test", testGetPreviousWords)

function testGetNextWords(){
    testPage.start = 3
    let nextWords = testPage.getNextWords()
    assert.strictEqual(nextWords, "testing the still reading function")
}
it("get-next-words-test", testGetNextWords)

function testGetCurrentWords(){
    testPage.start = 3
    testPage.currentGroup = testPage.getGroup()
    let currentWords = testPage.getCurrentWords()
    assert.strictEqual(currentWords, "longer sentence for")
}
it("get-current-words-test", testGetCurrentWords)

function testReadWords(){
    testPage.readWords(0.1)
}
it("test-read-words-1", testReadWords)

