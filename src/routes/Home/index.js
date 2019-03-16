import React from 'react'
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        Index Page
      </div>
    )
  }
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '90vh',
    fontSize: '54px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Home