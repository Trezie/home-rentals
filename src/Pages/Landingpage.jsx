import './Landingpage.css';
import Navbar from '../Components/Navbar/Navbar';


const Landingpage = () => {
  return (
    <div>
       <section className='hero-section'>
            <div className='navbar-div'>
                <Navbar />
            </div>
            <h1>
              The most affortable place to stay in the san franciso bay area
            </h1>
       </section>
    </div>
  )
}

export default Landingpage