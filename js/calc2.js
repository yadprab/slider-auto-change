const currentInput = document.querySelector("#current__input");
const currentSlider = document.querySelector("#current__slider");
const daysOneInput = document.querySelector("#days__one__input");
const daysOneSlider = document.querySelector("#days__one__slider");
const daysTwoInput = document.querySelector("#days__two__input");
const daysTwoSlider = document.querySelector("#days__two__slider");
const daysThreeInput = document.querySelector("#days__three__input");
const daysThreeSlider = document.querySelector("#days__three__slider");

const megaTotal = () => {
  return (
    parseInt(currentInput.value) +
    parseInt(daysOneInput.value) +
    parseInt(daysTwoInput.value) +
    parseInt(daysThreeInput.value)
  );
};

currentSlider.addEventListener("change", (e) => {
  currentInput.value = e.target.value;
  const totalValue =
    parseInt(daysThreeInput.value) + parseInt(daysTwoInput.value);

  const updatedValue = 100 - (totalValue + parseInt(e.target.value));

  daysOneSlider.value = updatedValue <= 0 ? 0 : updatedValue;
  daysOneInput.value = updatedValue <= 0 ? 0 : updatedValue;
  const t = megaTotal();
  t > 100 ? (currentInput.className = "error") : (currentInput.className = "");
});

daysOneSlider.addEventListener("change", (e) => {
  console.log(megaTotal());
  daysOneInput.value = e.target.value;
  const totalValue =
    parseInt(daysThreeInput.value) + parseInt(daysTwoInput.value);

  const updatedValue = 100 - (totalValue + parseInt(e.target.value));

  currentInput.value = updatedValue <= 0 ? 0 : updatedValue;
  currentSlider.value = updatedValue <= 0 ? 0 : updatedValue;
  const t = megaTotal();
  t > 100 ? (daysOneInput.className = "error") : (daysOneInput.className = "");
});

daysTwoSlider.addEventListener("change", (e) => {
  console.log(megaTotal());
  daysTwoInput.value = e.target.value;
  const totalValue =
    parseInt(daysOneInput.value) + parseInt(currentInput.value);

  const updatedValue = 100 - (totalValue + parseInt(e.target.value));

  daysThreeInput.value = updatedValue <= 0 ? 0 : updatedValue;
  daysThreeSlider.value = updatedValue <= 0 ? 0 : updatedValue;
  const t = megaTotal();
  t > 100 ? (daysTwoInput.className = "error") : (daysTwoInput.className = "");
});

daysThreeSlider.addEventListener("change", (e) => {
  daysThreeInput.value = e.target.value;
  daysTwoInput.value = e.target.value;
  const totalValue =
    parseInt(daysOneInput.value) + parseInt(currentInput.value);

  const updatedValue = 100 - (totalValue + parseInt(e.target.value));

  daysTwoInput.value = updatedValue <= 0 ? 0 : updatedValue;
  daysTwoSlider.value = updatedValue <= 0 ? 0 : updatedValue;

  const t = megaTotal();

  t > 100
    ? (daysThreeInput.className = "error")
    : (daysThreeInput.className = "");
});
