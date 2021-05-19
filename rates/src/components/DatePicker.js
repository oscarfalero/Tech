import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate}
      
      onChange={date => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      maxDate={addDays(new Date(), 0)}
    />
  );
};

export default DatePick;