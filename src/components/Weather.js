import React from 'react';
import 'weather-icons/css/weather-icons.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const locationHeader = {
  letterSpacing: '3px',
  fontFamily: "'Titillium Web', sans-serif",
  paddingBottom: '1rem'
}

 const Weather = ({handleChange, handleClick, city, country, unit, toggle, temp, fahrenheit, description, icon, wind, humidity, }) => {
    return (
      <div>
      {!temp ? (
          <input id="get-weather" type="button" value="Get Weather" onClick={handleClick} onChange={handleChange} />
      ) : (
        <div id="container" style={containerStyle}>
       <div className="weather">
         <h1 className='location' style={locationHeader}>{`${city}, ${country}`}</h1>
          <button 
              onClick={unit}
              id="temp"
              style={{textAlign: 'center'}}
              >{toggle ? temp + '℃' : fahrenheit + '℉'}
          </button>
          <div id="description">{description}</div>
            <img id="icon" alt="weather-icon"
              src={icon} />
          <div className="weather-features">
              <span className="text">Humidity: </span><span id="humidity">{humidity}%</span>
              <span className="text"> Wind: </span><span id="wind-speed">{wind}m/s</span>
          </div>
       </div>
     </div>
      )}
      </div>
    )
  }

  export default Weather;