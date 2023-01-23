import './MyPagination.css';
import { useState} from 'react';
import ReactPaginate from 'react-paginate';
import Propertycard from '../Propertycard/Propertycard';
import cardpic1 from '../../Assets/cardpic1.svg';
import cardpic2 from '../../Assets/cardpic2.svg';
import cardpic3 from '../../Assets/cardpic3.svg';
import cardpic4 from '../../Assets/cardpic4.svg';
import cardpic5 from '../../Assets/cardpic5.svg';
import cardpic6 from '../../Assets/cardpic6.svg';


    // Example items, to simulate fetching from another resources.


    const myProperty = [
    { Image: cardpic1, price: '$1200', id: 1},
    { Image: cardpic3, price: '$1100', id: 2},
    { Image: cardpic5, price: '$1900', id: 3},
    { Image: cardpic6, price: '$1900', id: 4},
    { Image: cardpic2, price: '$1200', id: 5},
    { Image: cardpic1, price: '$2200', id: 6},
    { Image: cardpic3, price: '$1000', id: 7},
    { Image: cardpic4, price: '$1000', id: 8},
    { Image: cardpic3, price: '$2000', id: 9},
    { Image: cardpic5, price: '$1200', id: 10},
    { Image: cardpic1, price: '$1200', id: 11},
    { Image: cardpic4, price: '$1400', id: 12},
    { Image: cardpic6, price: '$1100', id: 13},
    { Image: cardpic2, price: '$1400', id: 14},
    { Image: cardpic5, price: '$1200', id: 15},
    { Image: cardpic4, price: '$1300', id: 16},
    { Image: cardpic2, price: '$1300', id: 17},
    { Image: cardpic6, price: '$1700', id: 18} 

 ];

 function Property({currentProperty}) {
    return(
        <div className='pCard-div'>
            {currentProperty && currentProperty.map((item) => (
                <Propertycard key={item.id} apptImg={item.Image} apptPrice={item.price}/>
            ))}
        </div>
    )
 };


function MyPagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentProperty = myProperty.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(myProperty.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % myProperty.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };





  return (
    <div className='paginateContainer'>
      <Property currentProperty={currentProperty} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default MyPagination