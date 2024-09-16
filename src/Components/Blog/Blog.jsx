import './blog.css';
import image1 from '../../assets/blog-1.svg';
import image2 from '../../assets/blog-2.svg';
import image3 from '../../assets/blog-3.svg';


const Blog = () => {
    return (
        <section className='blog container section ' id='blog'>
            <h2 className='section__title'>Latest Posts</h2>

            <div className='blog__container grid'>
                <div className='blog__card'>
                    <div className='blog__thumb'>
                        <a href='#'><span className='blog__category'>Tutorial</span></a>
                        <a href='#'><img src={image1} alt='' className='blog__img'/></a>
                    </div>
                    <div className='blog__details'>
                    <h3 className='blog__title'>Common misconeption about payment</h3>
                    <div className='blog__meta'>
                        <span>16th September, 2024</span>
                        <span className='blog__dot'>.</span>
                        <span>Alok</span>
                    </div>
                    </div>
                </div>
                <div className='blog__card'>
                    <div className='blog__thumb'>
                        <a href='#'><span className='blog__category'>Tutorial</span></a>
                        <a href='#'><img src={image2} alt='' className='blog__img'/></a>
                    </div>
                    <div className='blog__details'>
                    <h3 className='blog__title'>Common misconeption about payment</h3>
                    <div className='blog__meta'>
                        <span>16th September, 2024</span>
                        <span className='blog__dot'>.</span>
                        <span>Alok</span>
                    </div>
                    </div>
                </div>
                <div className='blog__card'>
                    <div className='blog__thumb'>
                        <a href='#'><span className='blog__category'>Tutorial</span></a>
                        <a href='#'><img src={image3} alt='' className='blog__img'/></a>
                    </div>
                    <div className='blog__details'>
                    <h3 className='blog__title'>Common misconeption about payment</h3>
                    <div className='blog__meta'>
                        <span>16th September, 2024</span>
                        <span className='blog__dot'>.</span>
                        <span>Alok</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;