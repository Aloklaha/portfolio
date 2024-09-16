import './services.css';
import Me1 from '../../assets/service-1.svg';
import Me2 from '../../assets/service-2.svg';
import Me3 from '../../assets/service-3.svg';

const Services = () => {
    const data = [
        {
            id: 1,
            image: Me1,
            title: "Backend dev",
            description: "Hi"
        },
        {
            id: 2,
            image: Me2,
            title: "Frontend dev",
            description: "Hello"
        },
        {
            id: 3,
            image: Me3,
            title: "Cloud dev",
            description: "Hii"
        }
    ]
    return (
        <section className='services__container container section' id='services'>
            <h2 className='section__title'>Services</h2>
            <div className='services__container grid'>
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className='service__card' key={id}>
                            <img src={image} alt='' className='services__img'/>
                            <h3 className='services__title'>{title}</h3>
                            <p className='services__description'>{description}</p>
                        </div>
                    )
                })}
            </div>
        
        </section>
    )
}

export default Services;