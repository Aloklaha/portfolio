import './portfolio.css';
import Menu from './Menu';
import { useState } from 'react';


const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const toggleHander = (type) => {
        setItems(prevstate=> {
            if(type === "all") return Menu;
            else return Menu.filter(el=> el.category === type)
        })
    }

    return (
        <section id='portfolio' className='work container section'>
            <h2 className='section__title'>Recent works</h2>

            <div className='work__filters'>
                <span className='work__items' onClick={()=>toggleHander('all')}>Everything</span>
                <span className='work__items' onClick={()=>toggleHander('Creative')}>Creative</span>
                <span className='work__items' onClick={()=>toggleHander('Art')}>Art</span>
                <span className='work__items' onClick={()=>toggleHander('Desing')}>Desing</span>
                <span className='work__items' onClick={()=>toggleHander('Branding')}>Branding</span>
            </div>

            <div className='work__container grid'>
                {
                   items.map((el)=>{
                        const {id, image, title, category} = el;
                        return (
                            <div className='work__card' key={id}>
                                <div className='work__thumbnail'>
                                    <img src={image} alt='' className='work__img'/>
                                    <div className='work__mask'></div>
                                </div>

                                <span className='work__category'>{category}</span>
                                <h3 className='work__title'>{title}</h3>
                                <a href='#' className='work__button'>
                                    <i className='icon-link work__button-icon'></i>
                                </a>
                            </div>
                        )
                   })
                }
            </div>
        </section>
    )
}

export default Portfolio;