import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocial from './HeaderSocials';
import ScrollDown from './ScrollDown';
const Home = () => {
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img alt='' src={Me} className='home__img'/>
                <h1 className='home__name'>Alok Laha</h1>
                <span className='home__education'>I'm a FullStack Developer</span>
                <HeaderSocial />
                <a href='#contact' className="btn">Hire Me</a>
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;