import './Landingpage.css';
import Navbar from '../Components/Navbar/Navbar';
import MyComponent from '../Components/Map/Reactmap';
import searchicon from '../Assets/searchicon.svg';
import costImage from '../Assets/cost-image.svg';
import community from '../Assets/community.svg';
import dollar from '../Assets/dollar.svg';
import stack from '../Assets/stack.svg';
import Costcard from '../Components/Costcard/Costcard';
import plant from '../Assets/plant.svg';
import eye from '../Assets/eye.svg';
import shield from '../Assets/shield.svg';
import Propertycard from '../Components/Propertycard/Propertycard';


const Landingpage = () => {
  return (
    <div className='landing-page'>
       <section className='hero-section'>
            <div className='navbar-div'>
                <Navbar />
            </div>
            <div className='hero-content'>
              <h1>
                The Most Affortable Place To Stay In The San Franciso Bay Area
              </h1>
              <div className='mapcontainer'>
                <MyComponent />
                <div className='select-div'>
                  <select name="alltypes" id='alltypes'>
                    <option defaultValue="alltypes">All Types</option>
                  </select>
                  <select name="neighborhoods">
                    <option defaultValue="neighborhood">Neighborhood</option>
                  </select>
                  <button><img src={searchicon} alt="searchicon" /></button>
                </div>
              </div>

            </div>
       </section>
       <section className='section2'>
        <h2><span>Minimum Living Cost</span> Takes Care Of Everything</h2>
        <div className='costcard-subcont' >
          <img src={costImage} alt="cost" className='costimg' />
          <div className='costcard-div'  >
            <div>
              <Costcard imgsrc={dollar} content={"Pay as Little as possible!"} imgalt={"dollar-icon"}/>
              <Costcard imgsrc={community} content={"Enjoy wisdom of community!"} imgalt={"community-icon"}/>
              <Costcard imgsrc={stack} content={"Let's somebody else take care of Landlord!"} imgalt={"stack-icon"}/>
            </div>
            <div>
              <Costcard imgsrc={plant} content={"Enjoy peaceful Environment!"} imgalt={"plant-icon"}/>
              <Costcard imgsrc={shield} content={"Stay Safe! Save Money!"} imgalt={"shield-icon"}/>
              <Costcard imgsrc={eye} content={"Pay for what you use!"} imgalt={"eye-icon"}/>
            </div>
          </div>
        </div>
       </section>
       <section className='section3'>
          <div className='sect3-heading'>
            <h3><span>List</span> Of Properties</h3>
            <button>View All Property</button>
          </div>
          <Propertycard />
       </section>
    </div>
  )
}

export default Landingpage