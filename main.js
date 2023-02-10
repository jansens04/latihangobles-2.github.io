const input = document.querySelector('.inputValue');
const object1 = document.querySelector('.row');
const object2 = document.querySelector('.object2');
const selection = document.getElementById('selection');

const update = () => {
  const userOption = selection.options.selectedIndex;
  // console.log('user memilih : ' + userOption);
  switch (userOption) {
    case 1:
      object1.style.backgroundColor = input.value;
      input.value = '';
      break;
    case 2:
      object2.style.color = input.value;
      input.value = '';
      break;
    case 3:
      object2.style.fontSize = `${input.value}px`;
      input.value = '';
      break;
    case 4:
      object2.style.fontFamily = input.value;
      input.value = '';
      break;
    case 5:
      object1.style.width = `${input.value}px`;
      input.value = '';
      break;
    case 6:
      object1.style.height = `${input.value}px`;
      input.value = '';
      break;
    default:
      alert('Failed!! , You Wrong , Try Again!!');
      input.value = '';
  }
};
