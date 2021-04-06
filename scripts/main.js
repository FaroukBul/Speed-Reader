

class Page{
    constructor(text, prevText, currentText, nextText, numberOfWords){
        this.prevText = prevText
        this.currentText = currentText
        this.nextText = nextText
        this.words = getWords(text)
        this.numberOfWords = numberOfWords
        this.currentGroup = ["tommy"]
        this.start = 0

    }

    getGroup(){
        return this.words.slice(this.start, this.numberOfWords + this.start)
    }

    readWords(seconds){
       let interval =  setInterval(() => {
                this.currentGroup = this.getGroup()
                this.prevText.innerHTML = this.getPreviousWords()    
                this.currentText.innerHTML = this.getCurrentWords()
                this.nextText.innerHTML = this.getNextWords()
                this.start += this.numberOfWords

                if(!this.stillReading()){
                    clearInterval(interval)
                }
            }, 
            seconds * 1000
        )

    }

    stillReading(){
        return this.currentGroup.length != 0
    }

    getPreviousWords(){
        let prevWordsList = this.words.slice(0, this.start)
        let prevWords = prevWordsList.join(" ")
        return prevWords
    }
    
    getCurrentWords(){
        return this.currentGroup.join(" ")
    }

    getNextWords(){
        let nextWordsList  = this.words.slice(this.numberOfWords + this.start, this.words.length)
        let nextWords = nextWordsList.join(" ")
        return nextWords
    }

}

function getWords(sentence){
    return sentence.split(" ")
}


try{
    document.addEventListener('DOMContentLoaded', () => {
        
        let prevText = document.querySelector("#start")
        let currentText = document.querySelector("#current-text")
        let nextText = document.querySelector("#ending")
        

        let page = new Page(
            "this is a longer sentence for testing the still reading function",
            prevText, 
            currentText, 
            nextText,
            3
        )
        page.readWords(.5)

    })
}
catch(ReferenceError){
    null
}

try{
    module.exports = {Page, getWords}
}
catch(ReferenceError){
    null
}



