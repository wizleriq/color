const colors = ['Green', 'Red', 'Orange', 'White', 'Tomato','Pink', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function (){
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);

}


// const colors = ['tomato', 'green', 'grey', 'pink', 'white', 'orange'];
// const btn = document.getElementById("btn");
// const color = document.querySelector('.color')

// btn.addEventListener('click', function(){
//   // console.log(document.body);

//   const manyNumbers = getAllColors();
//   console.log(manyNumbers);
//   document.body.style.backgroundColor = colors[manyNumbers];
//   color.textContent = colors[manyNumbers];
// });

// function getAllColors () {
//   return Math.floor(Math.random() * colors.length);
// }