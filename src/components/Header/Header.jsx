import styles from "./Header.module.css";

const Header = ({rates}) => {

    const rate = currency => (rates["UAH"] / rates[currency]).toFixed(2);

    return (
        <header className={styles.container}>
            <div> USD: {rate("USD")}</div>
            <div> EUR: {rate("EUR")}</div>
        </header>
    )
}

export default Header;