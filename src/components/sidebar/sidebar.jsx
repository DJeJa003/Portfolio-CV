import "./sidebar.css";
import Logo from "../../assets/Logo.png";

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className='nav_logo'>
                <img src={Logo} alt="Logo"/>
            </a>

            <nav className='nav'>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href="#home" className='nav_link'>
                                <i className='icon-home'></i>
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>
                                <i className='icon-user-following'></i>
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#Skills" className='nav_link'>
                                <i className='icon-briefcase'></i>
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#portfolio" className='nav_link'>
                                <i className='icon-note'></i>
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#resume" className='nav_link'>
                                <i className='icon-graduation'></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#contact" className='nav_link'>
                                <i className='icon-bubble'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='nav_footer'>
                <span className='copyright'>&copy;2024</span>
            </div>
        </aside>
    )
}

export default Sidebar