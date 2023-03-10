import React, { FC } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { ModalComponent } from '../Modal/Modal';

export const Counter: React.FC = () => {
  const renderer: FC <any> = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <ModalComponent />;
    } else {
      return <span>{minutes}:{zeroPad(seconds)}</span>;
    }
  };
  return (
    <div className='counter'>
      <Countdown 
        date={Date.now() + 1800000} 
        renderer={renderer}
      />
    </div>
  );
};

