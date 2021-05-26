import React from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  const { date, handleDateChange } = props;
  return (
    <DatePicker
      selected={date}
      onChange={(date) => handleDateChange(date)}
      dateFormat="dd/MM/yyyy"
      maxDate={addDays(new Date(), 0)}
    />
  );
};

export default DatePick;
