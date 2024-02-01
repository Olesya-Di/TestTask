export const CURRENCYS = document.querySelectorAll(".price__currency");
export const PRICES = document.querySelectorAll(".price__number");
export const PERIODS = document.querySelectorAll(".price__period");

const currency = document.querySelector(".price__currency");
const period = document.querySelector(".price__period");

export const changeСurrency = () => {
  if (currency.innerHTML === "$") {
    CURRENCYS.forEach((cur) => {
      cur.innerHTML = "₽";
    });
  } else
    CURRENCYS.forEach((cur) => {
      cur.innerHTML = "$";
    });
};

export const changePeriod = () => {
  if (period.innerHTML === "/Months") {
    PERIODS.forEach((period) => {
      period.innerHTML = "/Days";
    });
  } else
    PERIODS.forEach((period) => {
      period.innerHTML = "/Months";
    });
};

export const changePrice = () => {
  PRICES.forEach((price) => {
    if (currency.innerHTML === "$") {
      price.innerHTML = Math.round(+price.innerText / 100);
    } else if (currency.innerHTML === "₽") {
      price.innerHTML = Math.round(+price.innerText * 100);
    }
  });
};

export const changePricePeriod = () => {
  PRICES.forEach((price) => {
    if (period.innerHTML === "/Months") {
      price.innerHTML = Math.round(+price.innerText * 30);
    } else if (period.innerHTML === "/Days") {
      price.innerHTML = Math.round(+price.innerText / 30);
    }
  });
};
