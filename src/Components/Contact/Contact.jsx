import './contact.css';
const Contact = () => {
    return (
        <section className='container section' id='contact'>
            <h3 className='section__title'>Contact</h3>

            <div className='contact__container'>
                <p className='email'><i className='icon-envelope-letter'></i>aloklaha98@gmail.com</p>
                <p className='call'><i className='icon-phone'></i>+91 7980143133</p>
            </div>
        </section>
    )
}

export default Contact;