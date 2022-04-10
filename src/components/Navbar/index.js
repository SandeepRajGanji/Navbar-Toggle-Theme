// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggle = () => {
        toggleTheme()
      }
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeToggleUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navLink = isDarkTheme ? 'nav-link-dark' : 'nav-link-light'
      const navItemContainer = isDarkTheme
        ? 'nav-item-dark-container'
        : 'nav-item-light-container'
      return (
        <nav className="nav-container">
          <div className={navItemContainer}>
            <div className="nav-menu-container">
              <img src={logoUrl} alt="website logo" className="nav-logo" />
              <ul className="nav-menu">
                <Link to="/" className={navLink}>
                  <li>Home</li>
                </Link>
                <Link to="/about" className={navLink}>
                  <li>About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="toggle-button"
                onClick={onClickToggle}
              >
                <img
                  src={themeToggleUrl}
                  alt="theme"
                  testid="theme"
                  className="nav-theme-image"
                />
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
