import './App.css';
import Selects from "./components/Selects";
import DatePick from './components/DatePicker';


function App() {
  return (
    <div className="app">
        <h2>Hitórico de cotizaciones</h2>
        <p>Selecciona la moneda de referencia</p>
        <Selects/>
        <p>Ingresa la fecha de cotización</p>
        <DatePick/>
        <button className="btn">Buscar cotizaciones</button>
        <button className="btn2">Ver más cotizaciones</button>
              
    </div>
  );
}

export default App;
