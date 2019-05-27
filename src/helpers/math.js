const randomNumber = maxNumber => Math.floor(Math.random() * maxNumber);

export const randomColor = () =>
  `rgb(${randomNumber(266)}, ${randomNumber(266)}, ${randomNumber(266)})`;
