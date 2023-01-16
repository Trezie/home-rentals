import './Landingpage.css';
import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import MyComponent from '../Components/Map/Reactmap';
import Propertycard from '../Components/Propertycard/Propertycard';
import searchicon from '../Assets/searchicon.svg';
import costImage from '../Assets/cost-image.svg';
import community from '../Assets/community.svg';
import dollar from '../Assets/dollar.svg';
import stack from '../Assets/stack.svg';
import Costcard from '../Components/Costcard/Costcard';
import plant from '../Assets/plant.svg';
import eye from '../Assets/eye.svg';
import shield from '../Assets/shield.svg';
import cardpic1 from '../Assets/cardpic1.svg';
import cardpic2 from '../Assets/cardpic2.svg';
import cardpic3 from '../Assets/cardpic3.svg';
import cardpic4 from '../Assets/cardpic4.svg';
import cardpic5 from '../Assets/cardpic5.svg';
import cardpic6 from '../Assets/cardpic6.svg';
import MyPagination from '../Components/MyPagination/MyPagination';


const Landingpage = () => {







  const [myProperty] = useState([
     { Image: cardpic1, price: '$1200'},
     { Image: cardpic2, price: '$1300'},
     { Image: cardpic3, price: '$1000'},
     { Image: cardpic4, price: '$1400'},
     { Image: cardpic5, price: '$1900'},
     { Image: cardpic6, price: '$1900'},
     { Image: cardpic1, price: '$2200'},
     { Image: cardpic2, price: '$1200'},
     { Image: cardpic3, price: '$2000'},
     { Image: cardpic4, price: '$1000'},
     { Image: cardpic5, price: '$1200'},
     { Image: cardpic6, price: '$1100'},
     { Image: cardpic1, price: '$1200'},
     { Image: cardpic2, price: '$1400'},
     { Image: cardpic3, price: '$1100'},
     { Image: cardpic4, price: '$1300'},
     { Image: cardpic5, price: '$1200'},
     { Image: cardpic6, price: '$1700'} 

  ]);


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
          <div className='pagination-div' >

            <MyPagination itemsPerPage={6}/>
      
          </div>
       </section>
    </div>
  )
}

export default Landingpage