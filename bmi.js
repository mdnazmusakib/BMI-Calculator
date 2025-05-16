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

calcBtn.addEventListener('click', () => {
  let heightMeters;
  if (heightUnit.value === 'cm') {
    const cm = parseFloat(heightCm.value);
    if (isNaN(cm) || cm <= 0) {
      showError("Please enter a valid height in cm.");
      return;
    }
    heightMeters = cm / 100;
  } 
  else {
    const feet = parseFloat(heightFt.value);
    const inches = parseFloat(heightIn.value);
    if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0) {
      showError("Please enter valid feet and inches.");
      return;
    }
    const totalInches = (feet * 12) + inches;
    heightMeters = totalInches * 0.0254;
  }
  const weight = parseFloat(weightInput.value);
  if (isNaN(weight) || weight <= 0) {
    showError("Please enter a valid weight.");
    return;
  }
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);
//   console.log(bmi);
});