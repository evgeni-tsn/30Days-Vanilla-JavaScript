const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello')

// Interpolated
console.log(`Hello I am a ${'poop'} string!`)

// Styled
console.log('%c I am some great text', 'font-size:50px; background: red')

// warning!
console.warn('OH NOO')

// Error :|
console.error('There is an error')

// Info
console.info('Info')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong')

// clearing
// console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('TSN')
console.count('TSN')

// timing

console.time('fetching data')
fetch('https://api.github.com/users/evgeni-tsn')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

console.table(dogs)
