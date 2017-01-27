import React from 'react'
import GetPlaceContainer from './GetPlaceContainer'

const Home = () => (
  <main style={styles.container}>
    <section style={styles.section}>
      <h1 style={styles.h1}>Enter a City or State</h1>
      <GetPlaceContainer />
    </section>
  </main>
)

export default Home

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('../app/images/pattern.svg')",
    width: '100%',
    height: '92%'
  },
  section: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '100%'
  },
  h1: {
    textAlign: 'center',
    color: '#fff'
  }
}
