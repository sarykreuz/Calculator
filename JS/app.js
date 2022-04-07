//Basic features what a calculator is supposed to do
// accept user inputs
// store inputs
// recognize inputs and perform calculation
// return the result
// should accept decimals

// optional features
// should accept longer arithmetic operations
//  display all input as it's being entered
// store previous total as start of next operation
// clear button should clear all entries 
// should prevent invalid inputs(operators next to each other, 2 decimal points)

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')){
        return;
    }else{
        calculator.parseInput(value)
        // pass value to parse method
        // console.log(value)
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){
        // have any of the 'special buttons' been clicked
        switch(value){
            case '=' :
                this.calcAnswer(this.displayText)
                // calculate the answer
                break;
                case 'AC':
                    this.clearAll()
                    // clear screen and store value
                    break;
                    case '.':
                        if(this.displayText == 0){
                            this.addText('0.')
                            // pass '0' into add text method

                        }else {
                            this.addText(value)
                            // add value to text string
                        }
                        break;
                        default:
                            this.addText(value)
                            // add value to text string
                            break;
        }

        },

        addText(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        /*check whether the last char in the displax and the entered*/
        if(isNaN(+(value)) && isNaN(this.displayText)){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
        // output display text to screen
    },
  outputText(text){
      document.querySelector('.calculator-screen').value = text
  }, 
  calcAnswer(equation) {
    let result = Function("return " + equation)()
    this.outputText(result)
  },
  clearAll(){
      this.displayText = '0',
      this.prevTotal = null,
      this.outputText(this.displayText)
  }
}