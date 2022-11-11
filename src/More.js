import React from 'react';
import MoreList from './MoreList';

export const More =()=>  {
  
  return(
    <div className='main-wrapper'>
      <div className='main'>
        <div className='copy-container'>
          <h1>ここにリスト</h1>
          <h2>ここにいい感じのを</h2>
        </div>
        <div className='more-container'>
          <h3 className='ebent-title'>イベント</h3>

          <MoreList
          name={moreItem.name}
          image={moreItem.image}

          />
        </div>
      </div> 
    </div>
  );
}