import styles from "./List.module.css";
import React from "react";
import CurrencyFlag from "react-currency-flags";

export default function List(props) {
  const { list } = props;

  return (
    <div className={styles}>
      {Object.keys(list).map((el) => (
        <li key={el}>
          <div>
            <CurrencyFlag
              className={styles.flag}
              currency={el}
              height="36"
              width="36"
            />
            {el}
          </div>
          <div className="rateValues">{Math.round(list[el] * 100) / 100}</div>
        </li>
      ))}
    </div>
  );
}
