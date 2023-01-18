import './Propertyform.css';
import Dropzone from 'react-dropzone';


const Propertyform = () => {

  return (
    <div className='pForm-container'>
        <h1>Add A New Property</h1>
        <form action="" method="post">
            <section className='form-flex'>
                <div>
                    <label htmlFor="name">Name<span>*</span></label>
                    <input type="text" name="name" placeholder='Enter Name' />
                </div>
                <div>
                    <label htmlFor="address">Address<span>*</span></label>
                    <input type="text" name="address" placeholder='Enter Address'/>
                </div>
                <div>
                    <label htmlFor="unit">Unit Number<span>*</span></label>
                    <input type="number" name="unit" placeholder='Enter Unit'/>
                </div>
                <div>
                    <label htmlFor="city">City<span>*</span></label>
                    <select name="city" placeholder='Enter City'>
                        <option defaultValue="city"></option>
                        <option value="ikeja">Ikeja</option>
                        <option value="abuja">Abuja</option>
                        <option value="ph">Port Harcourt</option>
                        <option value="ibadan">Ibadan</option>
                        <option value="onisha">Onitsha</option>
                        <option value="akure">Akure</option>
                        <option value="owerri">Owerri</option>
                        <option value="onitsha">Onitsha</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="state">State<span>*</span></label>
                    <select name="state" placeholder='Enter State'>
                        <option defaultValue="state"></option>
                        <option value="lagos">Lagos State</option>
                        <option value="Rivers">Rivers State</option>
                        <option value="ogun">Ogun State</option>
                        <option value="oyo">Oyo</option>
                        <option value="imo">Imo</option>
                        <option value="enugu">Enugu</option>
                        <option value="kaduna">Kaduna</option>
                        <option value="onitsha">Onitsha</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Price<span>*</span></label>
                    <input type="text" name="price" placeholder='Enter Price'/>
                </div>
                <div>
                    <label htmlFor="room">Room Type<span>*</span></label>
                    <select name="room" placeholder='Room Type'>
                    <option defaultValue="roomtype"></option>
                        <option value="l2bedroomflat">2 Bedroom Flat</option>
                        <option value="3bedroomflat">3 Bedroom Flat</option>
                        <option value="duplex">Duplex</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
            </section>
            <div className='descrpt-div'>
                <label htmlFor="description">Description<span>*</span></label>
                <textarea name="description" cols="30" rows="10" placeholder='Enter Description'></textarea>
            </div>
            <div className='img-uploader-div'>
                <label htmlFor="upload">Upload Photos<span>*</span></label>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section className='img-uploader'>
                            <div {...getRootProps()} >
                                <input {...getInputProps()} />
                                <p>Drag your images here, or <span>Browse</span></p>
                                <p className='mini'>Supported:  JPG, JPEG, PNG</p>
                            </div> 
                        </section>
                    )}
                </Dropzone>
            </div>
            <div className='btn-holder'>
                <button>Add New Property</button>
            </div>
        </form>
    </div>
  )
}

export default Propertyform