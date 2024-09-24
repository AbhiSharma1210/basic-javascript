const form = document.querySelector('#calculate'); // Since I am not using a form tag, hence using # for id.

form.addEventListener('click', (event) => { // `click` instead of `submit` since I am not using form tag.
    event.preventDefault();

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const messageArea = document.querySelector('#bmi');

    if (weight <= 0 || isNaN(weight) || weight === '') {
        messageArea.value = `${weight} is Invalid weight. Please enter valid weight.`; // .value since the element is an input tag.
    }
    else if (height <= 0 || isNaN(height) || height === '') {
        messageArea.value = `${height} is Invalid height. Please enter valid height.`;
    }
    else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            messageArea.value = `${bmi}, You are Underweight`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            messageArea.value = `${bmi}, You are Normal`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            messageArea.value = `${bmi}, You are Overweight`;
        } else {
            messageArea.value = `${bmi}, You are Obese`;
        }

    }

});