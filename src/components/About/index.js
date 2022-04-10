// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutHeading = isDarkTheme ? 'dark-heading' : 'light-heading'
      const aboutContainer = isDarkTheme
        ? 'dark-about-container'
        : 'light-about-container'
      return (
        <>
          <Navbar />
          <div className="about-container-bg">
            <div className={aboutContainer}>
              <img src={aboutImageUrl} alt="about" className="about-image" />
              <h1 className={aboutHeading}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
