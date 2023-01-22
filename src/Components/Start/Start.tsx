import React from 'react';
import classNames from 'classnames';
import { MyButton } from '../MyButton/MyButton';

export const Start: React.FC <any> = ({startTheQuiz, prestart}) => {

  return (
    <div>
      <img 
        src="https://involve-me.imgix.net/uploads/assets/93744c2c-4e46-439c-bf51-17ac52607418.png?q=55&dpr=1.25&w=600&fit=max" alt=''
        className='App__logo'
      />
      <h2 className='App__header'>
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
      <MyButton 
        content="Buy at full price of $79.99" 
        className="myButton myButton--scale"
        error={false}
        click={() => {}}
      />
    </div>
  );
};

