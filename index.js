import dictionary from "./src/modules/dic.js"

const $buttonProcess = document.querySelector(".button-process")
const $invertButton = document.querySelector('.invert-button')

$buttonProcess.addEventListener("click", () => {
  const $input = document.querySelector(".input")
  const $values = document.querySelector(".values")
  const $startValue = document.querySelector(".start-index")
  const $jump = document.querySelector(".jump")
  const $column = document.querySelector(".column")
  const $output = document.querySelector(".output")

  const value = $values.value
  const startIndex = parseInt($startValue.value)
  const jump = parseInt($jump.value)
  const column = $column.value
  const input = $input.value
  const output = $output.value
  const arrayValues = value.split('\n')

  let count = 0

  const array = input?.split('\n')


  for (let i = startIndex; i < array.length; i += jump) {
    const mob = array[i]
    const indexOfAtribute = dictionary.indexOf(column.toLowerCase())
    const atribute = mob.split(',')

    atribute[indexOfAtribute] = arrayValues[count]
    
    if (!mob) continue
    
    array[i] = atribute.join(',')
    count++
  }

  $output.value = array.join('\n')
});


$invertButton.addEventListener('click', () => {
  const $input = document.querySelector(".input")
  const $values = document.querySelector(".values")

  if (!$values.value) return;

  $input.value = $values.value;
  $values.value = '';
})