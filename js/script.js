const slider = document.querySelector("#slider");

const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

noUiSlider.create(slider, {
  start: [200, 800],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
  format: formatForSlider,
});

const formatValues = [
  document.getElementById("min_num"),
  document.getElementById("max_num"),
];

slider.noUiSlider.on("update", function (values, handle, unencoded) {
  formatValues[handle].value = values[handle];
});
