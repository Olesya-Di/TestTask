import './index.html';
import { changeСurrency, changePeriod, changePrice, changePricePeriod, CURRENCYS, PERIODS } from './scripts/script';
import './style.scss';

  CURRENCYS.forEach((currency) => {
    currency.addEventListener("click", () => {
      changeСurrency();
      changePrice();
    });
  });

  PERIODS.forEach((period) => {
    period.addEventListener("click", () => {
      changePeriod();
      changePricePeriod();
    });
  });