import styles from "./CurrencyInput.module.css"

const CurrencyInput = ({ currenciesList, amount, currency, onAmountChange, onCurrencyChange }) => {

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.amountInput}
        type="number"
        value={amount}
        onChange={event => onAmountChange(event.target.value)}
        placeholder="Your amount"
      />
      <select
        className={styles.currencySelect}
        value={currency}
        onChange={event => onCurrencyChange(event.target.value)}
      >
        {currenciesList.map(currency => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyInput;