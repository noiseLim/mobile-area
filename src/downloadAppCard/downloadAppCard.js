import React, { useState } from 'react';

import './downloadAppCard.scss';
import vector from '../image/vector.png';

const DownloadAppCard = ({ onCancel }) => {
  const [qrCodeView, setQrCodeView] = useState(true);

  return (
    <div className='downloadAppCard'>
      <div onClick={onCancel} className='downloadAppCard__close'>
        <img src={vector} alt='close button' />
      </div>
      <div className='downloadAppCard__buttonSection'>
        <button
          onClick={() => setQrCodeView(true)}
          className='downloadAppCard__buttonSection-ios'
        >
          Скачать на Android
        </button>
        <button
          onClick={() => setQrCodeView(false)}
          className='downloadAppCard__buttonSection-ios'
        >
          Скачать на IOS
        </button>
      </div>
      {qrCodeView ? <div>Android</div> : <div>iOS</div>}
    </div>
  );
};

export default DownloadAppCard;
