// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundHeading = isDarkTheme ? 'dark-heading' : 'light-heading'
      const notFoundDescription = isDarkTheme
        ? 'dark-description'
        : 'light-description'
      const notFoundContainer = isDarkTheme
        ? 'dark-not-found-container'
        : 'light-not-found-container'

      return (
        <>
          <Navbar />
          <div className="not-found-bg">
            <div className={notFoundContainer}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
                alt="not found"
                className="not-found-image"
              />
              <h1 className={notFoundHeading}>Lost your way?</h1>
              <p className={notFoundDescription}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
