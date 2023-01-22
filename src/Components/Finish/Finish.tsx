import React from 'react';
import { Container } from 'react-bootstrap';
import { Counter } from '../Counter/Counter';

export const Finish: React.FC <any> = ({score, countOfQuestions}) => {
  return (
    <Container>
      <div className='finish'>
      <img
        src='https://involve-me.imgix.net/uploads/assets/940d50f9-a81c-4636-b0f8-67942ef3b922.jpeg?q=75&dpr=1&w=600&fit=max'
        alt=''
        className='finish__img'
      />
      <h2 className='finish__h2'>
        Thanks for taking the quiz
      </h2>
      <div className='finish__results'>
        Your score {score} / {countOfQuestions}
      </div>
      <h1 className='finish__h2'>
        Here is your link to the discounted product:
      </h1>
      <a className='finish__link' href='/'>
        Proceed to checkout
      </a>
      <h3 className='finish__h3'>
        Discount will be available within the next 30 minutes
      </h3>
      <Counter />
    </div>
    </Container>
  );
};

