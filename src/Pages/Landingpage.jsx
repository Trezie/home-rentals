import './Landingpage.css';
import Navbar from '../Components/Navbar/Navbar';
import MyComponent from '../Components/Map/Reactmap';
import MyPagination from '../Components/MyPagination/MyPagination';
import searchicon from '../Assets/searchicon.svg';
import costImage from '../Assets/cost-image.svg';
import community from '../Assets/community.svg';
import dollar from '../Assets/dollar.svg';
import stack from '../Assets/stack.svg';
import Costcard from '../Components/Costcard/Costcard';
import plant from '../Assets/plant.svg';
import eye from '../Assets/eye.svg';
import shield from '../Assets/shield.svg';
import Propertyform from '../Components/Propertyform/Propertyform';


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
          <div>
            <MyPagination itemsPerPage={6}/>
          </div>
       </section>
       <section className='section4'>
          <div>
            <div className='flex-minidiv'>
              <div className='flex-subdiv1'>
                <p>Flexible Leases</p>
              </div>
              <div className='flex-subdiv2'>
                <p>7-Day Happiness Guaranteed</p>
              </div>
            </div>
            <div className='flex-minidiv'>
              <div className='flex-subdiv3'>
                <p>Monthly House Cleaning</p>
              </div>
              <div className='flex-subdiv4'>
                <p>Choose Your Own Roommate</p>
              </div>
            </div>
          </div>
          <div className='flex-div2'>
            <h4>Flexibility and options to suit your lifestyle.</h4>
            <p>
              You need it? We got it. We make finding your next home 
              easy, comfortable, and simple. From our happiness guarantee 
              to our selective roommate finder option. We provide you the 
              flexibility that you most desire.
            </p>
            <button>Search Rooms</button>
          </div>
       </section>
       <section className='section5'>
          <h5>Your property with us and be Confident that Your Room will be Filled Out!</h5>
          <div>
            <Propertyform />
          </div>
       </section>
    </div>
  )
}

export default Landingpage