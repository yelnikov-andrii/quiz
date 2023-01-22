import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import classNames from 'classnames';

interface Props {
  content: string;
  className: string;
  click: () => void;
  error: boolean;
}

export const MyButton: React.FC <Props> = ({content, className, click = () => {}, error}) => {
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

