import './Button.scss'

function Button({buttonText, icon}) {
  return (
      <button className='button'><img src={icon} alt="" className='button__icon'/> {buttonText}</button>
  )
}

export default Button