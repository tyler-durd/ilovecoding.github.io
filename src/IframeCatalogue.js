import React from 'react';
import './iframe.css';

const IframeCatalogue = () => {
  return (

    <div className='bubble'>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
        <iframe className='bubble-child'  
          key={n}
          src={`https://t.me/yahooboohoo/${16 + n}?embed=1`}
        />
      ))}
    </div>
  );
};

export default IframeCatalogue;