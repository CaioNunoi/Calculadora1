const NumberButtons = document.querySelectorAll('[data-number]')
const OperationButtons = document.querySelectorAll('[data-operator]')
const EqualsButton = document.querySelector('[data-equals]')
const DeleteButton = document.querySelector('[data-delete]')
const AllClearButton = document.querySelector('[data-all-clear]')
const PreviousOperandTextElement = document.querySelector('[data-previous-operand]')
const CurrentOperandTextElement = document.querySelector('[data-all-clear]')

class calculator {
    constructor(PreviousOperandTextElement, CurrentOperandTextElement) {
        this.PreviousOperandTextElement = PreviousOperandTextElement;
        this.CurrentOperandTextElement = CurrentOperandTextElement;
    }
}