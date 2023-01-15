import './Propertycard.css';
import shower from '../../Assets/shower.svg';
import size from '../../Assets/size.svg';
import bed from '../../Assets/bed.svg';

const Propertycard = ({apptImg}) => {
  return (
    <div>
        <div>
            <img src={apptImg} alt="appt" />
        </div>
        <div>
            <h5>2578 Folsom street, san francisco, CA, 94110</h5>
            <p>Private Room</p>
            <p>$1200/month</p>
        </div>
        <div>
            <div>
                <img src={bed} alt="bed" />
                <p>4</p>
            </div>
            <div>
                <img src={shower} alt="shower" />
                <p>2</p>
            </div>

            <div>
                <img src={size} alt="size" />
                <p>2</p>
            </div>
        </div>
    </div>
  )
}

export default Propertycard