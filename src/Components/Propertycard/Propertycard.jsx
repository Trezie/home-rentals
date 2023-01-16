import './Propertycard.css';
import shower from '../../Assets/shower.svg';
import size from '../../Assets/size.svg';
import bed from '../../Assets/bed.svg';

const Propertycard = ({apptImg, apptPrice}) => {
  return (
    <div className='pcard-container'>
        <div className='apptImg'>
            <img src={apptImg} alt="appt" />
        </div>
        <div className='pcard-content'>
            <div className='pcard-content1'>
                <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                <p>Private Room</p>
                <p id='pcard-price'>{apptPrice}/month</p>
            </div>
            <div className='pcard-content2'>
                <div>
                    <img src={bed} alt="bed" />
                    <p>4</p>
                </div>
                <div id='showerdiv'>
                    <img src={shower} alt="shower" />
                    <p>2</p>
                </div>
                <div>
                    <img src={size} alt="size" />
                    <p>2</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propertycard