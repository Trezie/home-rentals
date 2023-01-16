import './Propertyform.css';

const Propertyform = () => {
  return (
    <div className='pForm-container'>
        <h1>Add A New Property</h1>
        <form action="" method="post">
            <section>
                <div>
                    <label htmlFor="name">Name *</label>
                    <input type="text" name="name" placeholder='Enter Name' />
                </div>
                <div>
                    <label htmlFor="address">Address *</label>
                    <input type="text" name="address" placeholder='Enter Address'/>
                </div>
                <div>
                    <label htmlFor="unit">Unit Number *</label>
                    <input type="number" name="unit" placeholder='Enter Unit'/>
                </div>
            </section>
        </form>
    </div>
  )
}

export default Propertyform