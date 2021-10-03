import React, { useState } from 'react';

import './mobileArea.scss';
import img from '../image/bss-bg.jpg';
import DownloadAppCard from '../downloadAppCard/downloadAppCard';

const MobileArea = () => {
  const [cardView, setCardView] = useState(false);

  const handleCancel = () => {
    console.log('Cancel function!');
    setCardView(!cardView);
  };

  return (
    <div className='mobileArea'>
      {cardView ? (
        <DownloadAppCard onCancel={handleCancel} />
      ) : (
        // <DownloadAppCard />
        <div className='mobileArea__container'>
          <div className='mobileArea__img-wrapper'>
            <img className='mobileArea__img' src={img} alt='mobile app' />
          </div>
          <div className='mobileArea__description'>
            <div className='mobileArea__description-title'>
              Мобильный банк "Центр-инвест"
            </div>
            <div className='mobileArea__description-text'>
              Установите на мобильное устройство
              <br /> и управляйте финансами в любое время,
              <br /> в любом месте.
            </div>
            <button
              onClick={() => setCardView(!cardView)}
              className='mobileArea__btn'
            >
              Скачать приложение
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileArea;
