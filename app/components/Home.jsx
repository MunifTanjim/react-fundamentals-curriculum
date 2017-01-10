import React from 'react'
import GetPlaceContainer from '../containers/GetPlaceContainer'

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('../app/images/pattern.svg')",
    width: '100%',
    height: '92%'
  }
}

const Home = () => (
  <main style={styles.container}>
    <GetPlaceContainer />
  </main>
)

export default Home
