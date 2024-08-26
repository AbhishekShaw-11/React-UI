import React from 'react'

const Header = ({text,bgColor,textColor}) => {

  const headerStyles = {
    backgroundColor:bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyles}>
    <div className='container'>
      <h2>{text}</h2>
    </div>
    </header>
  )
}
Header.defaultProps = {
  text:'Feedback UI',
  bgColor:'rgba(84, 3, 106, 0.4)',
  textColor:'rgba(14, 243, 222, 0.71)'
}
export default Header
