import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import classNames from 'classnames';

export const MyButton: React.FC <any> = ({content, className, click = () => {}, error}) => {
  return (
    <button className={className} onClick={(e) => {
      e.preventDefault();
      click();
    }}>
      {content}
      {error && (
        <i className='myButton__error'>
          <div className='myButton__radio'>
          </div>
        </i>
      )}
    </button>
  );
};

