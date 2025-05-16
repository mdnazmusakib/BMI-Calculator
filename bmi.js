const heightUnit = document.getElementById('heightUnit');
const cmInputDiv = document.getElementById('cmInputDiv');
const ftInputDiv = document.getElementById('ftInputDiv');
const heightCm = document.getElementById('heightCm');
const heightFt = document.getElementById('heightFt');
const heightIn = document.getElementById('heightIn');
const weightInput = document.getElementById('weightInput');
const resultDiv = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

heightUnit.addEventListener('change', () => {
  if (heightUnit.value === 'cm') {
    cmInputDiv.classList.remove('hidden');
    ftInputDiv.classList.add('hidden');
  } else {
    cmInputDiv.classList.add('hidden');
    ftInputDiv.classList.remove('hidden');
  }
});