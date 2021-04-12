

class Page{
    constructor(text, document, numberOfWords){
        this.document = document
        this.words = getWords(text)
        this.numberOfWords = numberOfWords
        this.currentGroup = ["tommy"]
        this.start = 0
        this.secondsPerGroup = 0.1
        this.pause = false
        this.speed = 100

    }

    startReading(speed){
        this.speed = speed
        this.speedToTime()
        this.readWords()
    }

    getGroup(){
        return this.words.slice(this.start, this.numberOfWords + this.start)
    }

    speedToTime(){
        let secondsPerWord = 60/this.speed
        this.secondsPerGroup = this.numberOfWords * secondsPerWord
    
    }

    readWords(){
        let i = 0
        let interval =  setInterval(() => {
                let word = this.words[i]
                let div = this.document.createElement("div")
                div.innerHTML = word 
                this.document.querySelector(".text").appendChild(div)
                this.currentGroup = this.getGroup()
                this.start += this.numberOfWords
                i++

                if(!this.stillReading() || this.pause == true){
                    clearInterval(interval)
                    if(this.currentGroup.length == 0){
                        this.currentGroup = ["tommy"]
                        this.start = 0
                    }
                }
            }, 
            this.secondsPerGroup * 1000
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
    console.log(sentence.split(" ")) // it does order the sentence
    return sentence.split(" ")
}

try{
    document.addEventListener('DOMContentLoaded', () => {
        let page = new Page(
            "Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 million years ago; their dominance continued throughout the Jurassic and Cretaceous periods.",
            document,
            3
        )
        let speedInput = document.querySelector("#speed-input")
        let start = document.querySelector("#start-btn")
        start.addEventListener("click", startReading)
        let pause = document.querySelector("#pause-btn")
        pause.addEventListener("click",() => {
            page.pause = true
        })

        function startReading(){
            let speed = speedInput.value
            page.pause = false
            page.startReading(speed)
            console.log(speed)
            console.log(page.currentGroup)
        }

        fun
        
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



