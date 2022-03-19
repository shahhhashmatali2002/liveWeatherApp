import React from 'react'

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  lineHeight: '40px',
  padding: '0 1rem',
  background: 'rgba(0,0,0,0.5)'
}

const Header = (props) => {
  
    return (
     
        <div id="header" style={headerStyle}>
            <div id="logo">
                <span>Local Weather App </span>
                <span role="img" aria-label="Sun Behind Small Cloud">🌤️</span>
            </div>
             <div id="date">{props.currentDate}</div>
        </div>
    )
}

export default Header;