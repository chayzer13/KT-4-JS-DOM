const slider1 = document.getElementById('slider1');
const sliderValue1 = document.getElementById('sliderValue1');

slider1.addEventListener('input', function() {
  sliderValue1.textContent = slider1.value;
});

const slider2 = document.getElementById('slider2');
const sliderValue2 = document.getElementById('sliderValue2');

slider2.addEventListener('input', function() {
  sliderValue2.textContent = slider2.value;
});
