const slider = document.querySelector("#slider");

const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue); // Преобразуем форматированное значение в число
  },
  to: function (numericValue) {
    return Math.round(numericValue); // Округляем число до ближайшего целого
  },
};

noUiSlider.create(slider, {
  start: [200, 800], // Начальные значения ползунка
  connect: true, // Соединяет два значения цветом
  range: {
    min: 0, // Минимальное значение
    max: 1000, // Максимальное значение
  },
  format: formatForSlider, // Форматируем значения при вводе/выводе
});

const formatValues = [
  document.getElementById("min_num"), // Поле для минимального значения
  document.getElementById("max_num"), // Поле для максимального значения
];

slider.noUiSlider.on("update", function (values, handle) {
  formatValues[handle].value = values[handle]; // Обновляем поля при движении ползунка
});
