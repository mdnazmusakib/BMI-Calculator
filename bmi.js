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
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
//   console.log(bmi);
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obesity';
//   console.log(category);

  resultDiv.innerHTML = `Your BMI is <span class="text-indigo-600">${bmi}</span> (${category})`;
  resultDiv.classList.remove('hidden', 'text-red-600');
  resultDiv.classList.add('text-gray-800');
});