import './resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
    return (
        <section className='resume container section' id='resume'>
            <h2 className='section__title'>Experience</h2>

            <div className='resume__container grid'>
                <div className='timeline grid'>
                    {
                        Data.map((el, id)=>{
                            if(el.category === 'education'){
                                return (
                                    <Card key={id} icon={el.icon} title={el.title}
                                    year={el.year} desc={el.desc}/>
                                )
                            }
                        })
                    }
                </div>

                <div className='timeline grid'>
                    {
                        Data.map((el, id)=>{
                            if(el.category === 'experience'){
                                return (
                                    <Card key={id} icon={el.icon} title={el.title}
                                    year={el.year} desc={el.desc}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Resume;