import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Landingpage.css';
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../Components/Navbar/Navbar';
import MyComponent from '../Components/Map/Reactmap';
import Costcard from '../Components/Costcard/Costcard';
import MyPagination from '../Components/MyPagination/MyPagination';
import Propertyform from '../Components/Propertyform/Propertyform';
import searchicon from '../Assets/searchicon.svg';
import costImage from '../Assets/cost-image.svg';
import community from '../Assets/community.svg';
import dollar from '../Assets/dollar.svg';
import stack from '../Assets/stack.svg';
import plant from '../Assets/plant.svg';
import eye from '../Assets/eye.svg';
import shield from '../Assets/shield.svg';
import caropic from '../Assets/carousel-pic.svg';
import caroavatar from '../Assets/caro-avatar.svg';
import Footer from "../Components/Footer/Footer";



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
          <div className='costimg'>
            <img src={costImage} alt="cost"  />
          </div>
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
       {/*<section className='section3'>
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
       <section className='section6'>
          <Carousel className='carousel' autoPlay='true' infiniteLoop='true' interval='3000' showThumbs={false}>
            <div className='caro-div'>
              <img id='caro-pic' src={caropic} alt="caropic" />
              <p className="caro-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                Nunc vel pellentesque est. Curabitur at odio sit amet libero 
                vulputate efficitur ac nec justo. Nulla vitae mauris quam. 
                Nulla quam massa, faucibus id pretium ac, mattis eu velit. 
                Donec sed risus a lacus fringilla finibus. Nulla quam massa, 
                faucibus id pretium ac, mattis eu velit. Donec sed risus a 
                lacus fringilla finibus. mattis eu velit. Donec sed risus 
                a lacus fringilla finibus
              </p>
              <div className="caro-footer">
                  <img src={caroavatar} alt="avatar" id="caro-avatar" />
                  <div>
                    <p className="caro-name">Harry Wilson</p>
                    <p>Property Owner</p>
                  </div>
              </div>
            </div>
            <div className='caro-div'>
                <img id='caro-pic' src={caropic} alt="caropic" />
                <p className="caro-content">
                  Orci varius natoque penatibus et magnis dis parturient montes, 
                  nascetur ridiculus mus. Vestibulum imperdiet tortor eu odio 
                  rutrum venenatis. Curabitur sodales ac felis sollicitudin egestas. 
                  Ut lacinia efficitur dolor, at consectetur urna viverra at. 
                  Sed nisi eros, auctor at volutpat sit amet, volutpat et nulla. 
                  Pellentesque volutpat odio non mi iaculis, id malesuada mauris aliquam. 
                  Donec id vulputate velit, nec tincidunt sapien. Integer auctor 
                  vitae urna sit amet rhoncus.
                </p>
                <div className="caro-footer">
                  <img src={caroavatar} alt="avatar" id="caro-avatar" />
                  <div>
                    <p className="caro-name">Harry Wilson</p>
                    <p>Property Owner</p>
                  </div>
              </div>
            </div>
            <div className='caro-div'>
              <img id='caro-pic' src={caropic} alt="caropic" />
              <p className="caro-content">
                Etiam sit amet lacus nisl. Integer fermentum neque urna, 
                non ornare urna condimentum sed. Aliquam justo ligula, 
                efficitur nec est rutrum, tincidunt malesuada nibh. Nunc 
                est tellus, facilisis at dui vel, tristique placerat neque. 
                Duis tempor velit ante, et porttitor arcu viverra nec. 
                Mauris vel metus augue. Cras dictum sem vitae pretium feugiat. 
                Nunc eleifend faucibus mi, et pellentesque urna scelerisque 
                vitae. Vivamus finibus pharetra gravida. Praesent interdum 
                justo erat, ac cursus mi facilisis id. 
              </p>
              <div className="caro-footer">
                  <img src={caroavatar} alt="avatar" id="caro-avatar" />
                  <div>
                    <p className="caro-name">Harry Wilson</p>
                    <p>Property Owner</p>
                  </div>
              </div>
            </div>
          </Carousel>
          <div className="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5Peo-ivmupE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
       </section>
       <section>
          <Footer />
       </section> */}
    </div>
  )
}

export default Landingpage