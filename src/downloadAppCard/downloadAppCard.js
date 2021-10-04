import React, { useState } from 'react';

import './downloadAppCard.scss';
import close from '../image/vector.png';
import androidQr from '../image/qr-code-andr.png';
import iosQr from '../image/qr-code-ios.png';

const DownloadAppCard = ({ onCancel }) => {
  const [qrCodeView, setQrCodeView] = useState(true);

  return (
    <div className='downloadAppCard'>
      <img
        onClick={onCancel}
        src={close}
        alt='close button'
        className='downloadAppCard__close'
      />
      <div className='downloadAppCard__buttonSection'>
        <button
          onClick={() => setQrCodeView(true)}
          className={`downloadAppCard__buttonSection-btn ${
            qrCodeView ? 'btn-success' : null
          }`}
        >
          Скачать на Android
        </button>
        <button
          onClick={() => setQrCodeView(false)}
          className={`downloadAppCard__buttonSection-btn ${
            qrCodeView ? null : 'btn-success'
          }`}
        >
          Скачать на IOS
        </button>
      </div>
      {qrCodeView ? (
        <div className='downloadAppCard__qrCode'>
          <img src={androidQr} alt='QR Code for Android' />
        </div>
      ) : (
        <div className='downloadAppCard__qrCode'>
          <img src={iosQr} alt='QR Code for iOS' />
        </div>
      )}
      <h>{`Мобильный банк ${qrCodeView ? 'на Google Play' : 'в App Store'}`}</h>
      <p>
        {`Отсканируйте QR-код, чтобы скачать приложение на устройство ${
          qrCodeView ? 'Android' : 'iOS'
        }.`}
      </p>
    </div>
  );
};

export default DownloadAppCard;
