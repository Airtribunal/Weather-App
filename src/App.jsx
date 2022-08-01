// Imports
import * as React from 'react';
import MediaCard from "./components/Card"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import "./App.css";
import kelvinToCelsius from 'kelvin-to-celsius';
// ...

const App = () => {
  const [result, setResult] = useState({ main: {} })

  function push() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de9ddf67504f64bc6826beba0df4bb42`)
      .then(response => response.json())
      .then(result => setResult(result))
  }

  const [city, setCity] = useState("")
  return (
    <div className="container">
      <div className="textfield">
        <TextField id="outlined-basic" label="City" variant="outlined" color="primary"
          onChange={(e) => { setCity(e.target.value) }} />
      </div>
      <div className="button">
        <Button variant="contained" color="error" onClick={push}>Check Results</Button>
      </div>
      <div className='alerts'>
        <Alert className="alert-item" severity='info'>{kelvinToCelsius(result.main.temp || 273.15)}</Alert>
        <Alert className="alert-item" severity='info'>{result.name}</Alert>
      </div>
      <div className="card">
        <MediaCard
          className="card-item"
          title={city}
          degrees={kelvinToCelsius(result.main.temp || 273.15)}
          img={"/images/sanfr2.jpg"}
        />
      </div>
    </div>
  );
}

export default App;
