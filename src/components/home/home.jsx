import "./home.css";
import Me from "../../assets/55.jpg";
import HeaderSocials from './headerSocials';
import ScrollDown from './scrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt="This is me" className="home_img" />
                <h1 className='home_name'>Jere Janhunen</h1>
                <span className='home_education'>Software Engineering student</span>
                <HeaderSocials/>

                <a href="#contact" className='btn'>Contact Me</a>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home