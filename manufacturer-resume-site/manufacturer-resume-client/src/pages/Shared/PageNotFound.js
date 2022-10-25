import React from 'react';
import notFound from '../../assets/not-found.jpg'

const PageNotFound = () => {
   return (
      <div>
         <img className='px-32' src={notFound} alt="" />
      </div>
   );
};

export default PageNotFound;