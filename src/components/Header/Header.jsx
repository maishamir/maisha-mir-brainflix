import './Header.scss'
import Button from '../Button/Button'

function Header() {
  return (
    <>
      <header class="header">
        <img src="src/assets/logo/BrainFlix-logo.svg" alt="brainflix logo" className="header__logo" />
        <input type="text" name="search" id="search" placeholder='Search' className='header__search-bar' />
        <img src="src/assets/images/Mohan-muruge.jpg" alt="user avatar image" className="header__avatar"/>
        <Button buttonText='UPLOAD' icon="src/assets/icons/search.svg" className="header__upload-button"/>
      </header>
    </>
  )
}

export default Header