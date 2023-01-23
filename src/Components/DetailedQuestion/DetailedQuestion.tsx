import React from 'react';
import classNames from 'classnames';
import { MyButton } from '../MyButton/MyButton';
import { Error } from '../Error/Error';
import { QuestionInterface } from '../../types/types';
import { Logo } from '../Logo/Logo';

interface Props {
  question: QuestionInterface;
  nextQuestion: (value: boolean) => void;
}

export const DetailedQuestion: React.FC <Props> = ({question, nextQuestion}) => {
  const [answer, setAnswer] = React.useState<string>();
  const [answered, setAnswered] = React.useState(false);
  const [error, setError] = React.useState(false);

  const clearInfo = () => {
    setAnswer('');
    setAnswered(false);
  }

  const answerTheQuestion = (value: string) => {
    if (answered === false) {
      setAnswer(value);
      setAnswered(true);
      setError(false);
    }
  }

  const goForward = () => {
    if (answered === true) {
      if (answer === question.answer) {
        nextQuestion(true);
      } else {
        nextQuestion(false);
      }
      clearInfo();
    } else {
      setError(true);
    }
  }

  return (
    <React.Fragment>
      <>
      <Logo className='logo logo__question'/>
      <main 
        className="question"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-delay="400"
      >
      {question.img && (
        <img 
          src={question.img}
          className="question__img"
          alt=''
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="400"
        />
      )}
      <div className='question__body'>
        {question.question && (
          <h2 className='question__txt'>
            {question.question}
          </h2>
        )}
        <div 
          className='detailedQuestion__buttons'
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="400"
        >
        {question.variants &&  question.variants.map((variant: string) => (
          <MyButton
            content={variant}
            className={classNames("myButton myButton--answer myButton--detailedQuestion", {
              'myButton--correctAnswer': answered === true && variant === question.answer,
              'myButton--falseAnswer': answered === true && variant !== question.answer && variant === answer,
              'myButton--correctAnswerWasDone': answered === true && answer !== variant && variant !== question.answer
            })}
            key={variant}
            click={() => {
              answerTheQuestion(variant);
            }}
            error={error}
          />
        ))}
        </div>
        {question.info && answered && (
          <div className={classNames('question__wrapper', {
            'question__wrapper--opened': answered === true,
          })}>
            <div className={classNames('question__info', {
              'question__info--opened': answered === true
            })}>
            <p className='question__infoTxt'>
              {question.info}
            </p>
            <span className={classNames('question__infoLabel', {
              'question__infoLabel--correct': answer === question.answer,
              'question__infoLabel--false': answer !== question.answer,
            })}>
              {answer === question.answer ? '\u2713' : '\u2715'}
            </span>
          </div>
          </div>
        )}
        {error && (
          <Error />
         )}
        <MyButton
          content="Next"
          className="myButton myButton--scale myButton--next"
          click={goForward}
          error={false}
         />
      </div>
    </main>
      </>
    </React.Fragment>
  )
};

