import { useState } from 'react';
import './App.css';
import DatePick from './components/DatePicker/DatePicker';
import RatesList from './components/RateList/RatesList';
import SelectList from './components/SelectList/SelectList';
import { format } from 'date-fns';
import { useFetch } from "./hooks/useFetch";
import Btn from './components/Btn/Btn';


function App() {
  
  const [baseSelected, setBaseSelected] = useState("EUR");
  const [dateSelected, setDateSelected] = useState(new Date());
  const [date, setDate] = useState(format(dateSelected, 'yyyy-MM-dd'));
  // const date = format(dateSelected, 'yyyy-MM-dd');
  const {data} = useFetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=c24d7d37337c132cbf80093380586e7c`);
  

  const handleSelectorChange = (value) => {
    setBaseSelected(value);
  };
  console.log("Se actualizó la base del padre a: " + baseSelected);
  
  function handleDateChange(value) {
    setDateSelected(value);
  };

  console.log(format(dateSelected, 'yyyy-MM-dd'));
  
  const handleBtnClick = () => {
    setDate(format(dateSelected, 'yyyy-MM-dd'));
  }

  return (
    <div className="app">
        <h2>Hitórico de cotizaciones</h2>
        
        <p>Selecciona la moneda de referencia</p>
        <SelectList handleSelectorChange={handleSelectorChange} baseSelected={baseSelected}/>
        
        <p>Ingresa la fecha de cotización</p>
        <DatePick date={dateSelected} handleDateChange={handleDateChange}/>
        
        <Btn primary btnText="Buscar cotizaciones" handleBtnClick={handleBtnClick} />
        
        <RatesList date={dateSelected} data={data} handleBtnClick={handleBtnClick}/>
        
        <Btn secondary btnText="Ver más cotizaciones"/>
              
    </div>
  );
}

export default App;
