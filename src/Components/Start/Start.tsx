import React from 'react';
import classNames from 'classnames';
import { MyButton } from '../MyButton/MyButton';
import { Logo } from '../Logo/Logo';

interface Props {
  startTheQuiz: () => void;
  prestart: boolean;
  arrSearchParams: string[][];
}

export const Start: React.FC <Props> = ({startTheQuiz, prestart, arrSearchParams}) => {
  const searchParams = '?' + arrSearchParams.map(el => el[0] + '=' + el[1]).join('&');

  return (
    <div>
      <Logo className="logo" />
      <h2 className='start__header'>
        Make your choice!
      </h2>
      <MyButton 
        content="Give some correct answers for a chance to buy for $69.99" 
        className={classNames("myButton", {
          'myButton--prestart': prestart === true,
        })}
        click={startTheQuiz}
        error={false}
      />
      <a 
        href={`https://tarterval-hinces.icu/click/2${searchParams}`}
        className="start__link"
        target="_blank"
        rel="noreferrer"
      >
        Buy at full price of $79.99
      </a>
    </div>
  );
};

