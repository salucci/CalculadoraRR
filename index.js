import dictionary from "./src/modules/dic.js"

const $buttonProcess = document.querySelector(".button-process")
const $invertButton = document.querySelector('.invert-button')
const $fieldList = document.querySelectorAll('textarea')
const $values = document.querySelector(".values")


const autoSelecTextArea = () => {
  $fieldList.forEach($field => {
    $field.addEventListener('click', () => {
      $field.select();
    })
  })
}

const getInputArray = (string) => {
  return string?.split('\n')
}

const testQuantityValues = () => {
  $values.addEventListener('keyup', () => {
    const $values = document.querySelector(".values")
    const values = $values.value
    const inputValye = document.querySelector('.input').value
  
    if (!values) return;
  
    const valueArray = getArrayLength(getInputArray(values), false)
    const inputArray = getArrayLength(getInputArray(inputValye), true) 
  
    if (valueArray !== inputArray) {
      $values.classList.add('ERROR')
      $values.classList.remove('OK')
    } else{
      $values.classList.add('OK')
      $values.classList.remove('ERROR')
    }
  })
}

const getArrayLength = (array, seeJumps) => {
  const startIndex = parseInt(document.querySelector('.start-index').value)
  const jump = parseInt(document.querySelector('.jump').value)

  let length = 0

  for(let i = startIndex; i < array.length; seeJumps ? i = i + jump : i++) {
    length++
  }
  return length
}

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
  
  
  
  let count = 0
  
  const array = getInputArray(input)
  const arrayValues = new Array(getArrayLength(getInputArray(input), true)).fill(value.split('\n')[value.split('\n').length - 1])

  
  value.split('\n').forEach((item, index) => arrayValues[index] = item);
  
  console.log(arrayValues)
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
  const $values = document.querySelector(".output")

  if (!$values.value) return;

  $input.value = $values.value;
  $values.value = '';
})



autoSelecTextArea();
testQuantityValues();