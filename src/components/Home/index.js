// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeHeading = isDarkTheme ? 'dark-heading' : 'light-heading'
      const homeContainer = isDarkTheme
        ? 'dark-home-container'
        : 'light-home-container'
      return (
        <>
          <Navbar />
          <div className="home-container-bg">
            <div className={homeContainer}>
              <img src={homeImageUrl} alt="home" className="home-image" />
              <h1 className={homeHeading}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
