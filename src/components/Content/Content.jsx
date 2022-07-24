import { useState } from "react";

import CurrencyInput from "../CurrencyInput/CurrencyInput";

import styles from "./Content.module.css";

const Content = ({ rates }) => {

  const [primaryAmount, setPrimaryAmount] = useState("");
  const [primaryCurrency, setPrimaryCurrency] = useState("UAH");
  const [secondaryAmount, setSecondaryAmount] = useState("");
  const [secondaryCurrency, setSecondaryCurrency] = useState("UAH");

  const currenciesList = Object.keys(rates);

  const handlePrimaryAmountChange = primaryAmount => {
    setSecondaryAmount((primaryAmount * rates[secondaryCurrency] / rates[primaryCurrency]).toFixed(2));
    setPrimaryAmount(primaryAmount);
  };

  const handleSecondaryAmountChange = secondaryAmount => {
    setPrimaryAmount((secondaryAmount * rates[primaryCurrency] / rates[secondaryCurrency]).toFixed(2));
    setSecondaryAmount(secondaryAmount);
  };

  const handlePrimaryCurrencyChange = primaryCurrency => {
    setSecondaryAmount((primaryAmount * rates[secondaryCurrency] / rates[primaryCurrency]).toFixed(2));
    setPrimaryCurrency(primaryCurrency);
  }

  const handleSecondaryCurrencyChange = secondaryCurrency => {
    setPrimaryAmount((secondaryAmount * rates[primaryCurrency] / rates[secondaryCurrency]).toFixed(2));
    setSecondaryCurrency(secondaryCurrency);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CURRENCY CONVERTER</h1>
      <div className={styles.inputsWrapper}>
        <CurrencyInput
          currenciesList={currenciesList}
          amount={primaryAmount}
          currency={primaryCurrency}
          onAmountChange={handlePrimaryAmountChange}
          onCurrencyChange={handlePrimaryCurrencyChange}
        />
        <CurrencyInput
          currenciesList={currenciesList}
          amount={secondaryAmount}
          currency={secondaryCurrency}
          onAmountChange={handleSecondaryAmountChange}
          onCurrencyChange={handleSecondaryCurrencyChange}
        />
      </div>
    </div>
  );
}

export default Content;
