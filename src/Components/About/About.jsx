import './about.css';
import Me from '../../assets/avatar-2.svg'
const About = () => {
    return (
        <section className='about container section' id='about'>
            <h2 className='section__title'>
                About Me
            </h2>
            <div className='about__container grid'>
                <img src={Me} alt='' className='about__img'/>
                <div className='about__data grid'>
                    <div className='about__info'>
                        <p className='about__description'>
                            I am Alok Laha, web developer from West Bengal, India.
                        </p>
                        <a href='#about' className='btn'>Donwload CV</a>
                    </div>
                
                    <div className='about__skills grid'>
                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>
                                    Development
                                </h3>
                                <span className='skills__number'>
                                        90%
                                </span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage development'>

                                </span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <div className='skills__titles'>
                                <h3 className='skills__name'>
                                    AWS
                                </h3>
                                <span className='skills__number'>
                                        60%
                                </span>
                            </div>

                            <div className='skills__bar'>
                                <span className='skills__percentage ui__design'>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;