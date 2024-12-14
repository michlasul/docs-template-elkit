// get element with .main classname
const main = document.querySelector('.main');

// create a container
function wrapper(wrapName) {
  // create div element and add class called 'wrapper'
  const div = document.createElement('div');
  div.classList.add(`${wrapName}`);
  main.appendChild(div);
}

