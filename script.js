let count = 0;
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');


increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
resetBtn.addEventListener('click', function() {
  count = 0;
  counter.textContent = count;
});
