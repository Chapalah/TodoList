import React, {useState, useEffect} from 'react';

const Header = () => {

    const [theme, setTheme] = useState('ligth')
    const [changeTheme, setShangeTheme] = useState(true)
  
    useEffect(() => (
        setTheme(changeTheme ? 'light' : 'dark')
    ),[changeTheme])

    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('theme'))
            document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
    })


    function Theme() {
        setShangeTheme(!changeTheme)
        if (document.documentElement.getAttribute('data-theme') === 'light')
            document.documentElement.setAttribute('data-theme', 'dark')
        else
            document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'))
    }

    return (
        <div className="header" >
            <div className="header__wrapper container">
                <div className="header__logo">
                    Todo List
                </div>
                <button onClick={() => Theme()} className="header__lang btn">
                    <p>
                        {theme}
                    </p> 
                </button>
            </div>
        </div>
    );
}

export default Header;
