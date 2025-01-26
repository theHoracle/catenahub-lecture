let count = 0;
const countElement = document.getElementById('count');

document.getElementById('increment').addEventListener('mouseout', () => {
  count++;
  console.log('incremented');
  countElement.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  countElement.textContent = count;
});