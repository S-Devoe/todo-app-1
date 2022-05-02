

import MoonIcon from '../images/icon-moon.svg'
import SunIcon from '../images/icon-sun.svg'

function TodoHeader({theme, setTheme}) {

    const changeThemeicon = theme ? MoonIcon : SunIcon;

    const changeTheme = () => { 
        setTheme((prev) => !prev)
    }

  return (
    <header className="header">
        <div className="logo-text">
            <h1>TODO</h1>
        </div>
        <div className="toggle-theme">
        <button className="theme-btn" onClick={changeTheme}>
            <img src={changeThemeicon} alt="theme icon" />
        </button>
        </div>
    </header>
  )
}
export default TodoHeader