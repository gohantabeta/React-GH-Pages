import React from 'react';
import MoreList from './MoreList';
import './More.css'
import SECCON from './SECCON.JPG';
import Hackz from './Hackz.JPG';
import JPHACKS from './JPHACKS.JPG';

function More (){
  const moreItem =[ {
    date:'2022/6/18',
    name: 'ハックツハッカソン',
    image: Hackz,
    about:'株式会社ハックツ主催のハッカソンです'
  },{
    date:'2022/10/10',
    name: 'SECCON Beginners',
    image: SECCON,
    about:'SECCON Beginnersです'
  },{
    date:'2022/10/15',
    name: 'JPHACKS',
    image: JPHACKS,
    about:'JPHACKSです'
  },
  ];
  return(
    <div className='wrapper'>
      <div className='content_wrapper'>
          <h1>参加したイベントなど</h1>
          <div className='thumb_container'>
          {moreItem.map((moreItem,index)=>{
          return(
          <MoreList
          date={moreItem.date}
          name={moreItem.name}
          image={moreItem.image}
          about={moreItem.about}
          key={index}
          />
          );
          }
          )}
          </div>
      </div>
    </div>
  );
}

export default More;