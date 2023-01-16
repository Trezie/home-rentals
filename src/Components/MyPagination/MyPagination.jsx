import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import cardpic1 from '../../Assets/cardpic1.svg';
import cardpic2 from '../../Assets/cardpic2.svg';
import cardpic3 from '../../Assets/cardpic3.svg';
import cardpic4 from '../../Assets/cardpic4.svg';
import cardpic5 from '../../Assets/cardpic5.svg';
import cardpic6 from '../../Assets/cardpic6.svg';
import Propertycard from '../Propertycard/Propertycard';


    // Example items, to simulate fetching from another resources.


    const myProperty = [
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

 ];


 function Property({currentProperty}) {
    return(
        <>
            {currentProperty && currentProperty.map((item) => (
                <Propertycard apptImg={item.Image} apptPrice={item.price}/>
            ))}
        </>
    )
 };

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function MyPagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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
    <div>
        {/* <Items currentItems={currentItems} /> */}
        <Property currentProperty={currentProperty} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default MyPagination