import './Costcard.css';

const Costcard = ({imgsrc, content, imgalt}) => {
  return (
    <div className='card-div'>
        <div>
            <img src={imgsrc} alt={imgalt} />
        </div>
        <p>{content}</p>
    </div>
  )
}

export default Costcard