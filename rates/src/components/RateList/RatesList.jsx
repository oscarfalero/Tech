import React, { useState, useEffect } from "react";
import List from "../List/List";
import Btn from "../Btn/Btn";

export default function RatesList(props) {
  const { data } = props;
  const [rates, setRates] = useState();
  const [showingRates, setShowingRates] = useState();

  useEffect(() => {
    const defRates = ["EUR", "USD", "GBP", "CAD"];

    if (data) {
      // setRates(data.rates.filter(rates => !showingRates.includes(rates)));
      // setRates(data.rates);

      const filterShowing = Object.keys(data.rates)
        .filter((key) => defRates.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: data.rates[key],
          };
        }, {});

      const filterRates = Object.keys(data.rates)
        .filter((key) => !defRates.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: data.rates[key],
          };
        }, {});

      setShowingRates(filterShowing);

      setRates(filterRates);
    }
  }, [data]);

  //   console.log(rates);
  //   console.log(showingRates);

  const seeMore = () => {
    setShowingRates(Object.assign({ ...showingRates }, rates));
  };

  return (
    <div>
      {showingRates && <List list={showingRates} />}
      <Btn secondary btnText="Ver más cotizaciones" handleBtnClick={seeMore} />
    </div>
  );
}
