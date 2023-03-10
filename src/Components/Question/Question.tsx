import classNames from 'classnames';
import React from 'react';
import { MyButton } from '../MyButton/MyButton';
import { Error } from '../Error/Error';
import { Logo } from '../Logo/Logo';

export const Question: React.FC <any> = ({question, nextQuestion}) => {
  const [answer, setAnswer] = React.useState<boolean | null>();
  const [answered, setAnswered] = React.useState(false);
  const [error, setError] = React.useState(false);

  const clearInfo = () => {
    setAnswer(null);
    setAnswered(false);
  }

  const answerTheQuestion = (value: boolean) => {
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
        <div className='question__blockImg'>
          <img 
            src={question.img}
            className="question__img"
            alt=''
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="400"
          />
        </div>
      )}
      <div className='question__body'>
        {question.question && (
          <h2 className='question__txt'>
            {question.question}
          </h2>
        )}
        <div 
          className='question__buttons'
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="400"
        >
        <MyButton 
          content="true" 
          className={classNames("myButton myButton--answer", {
            'myButton--correctAnswer': answer === true && answer === question.answer,
            'myButton--correctAnswerWasDone': answer === false && answer === question.answer,
            'myButton--falseAnswer': answer === true && answer !== question.answer,
            'myButton--falseAnswerWasDone': answer === false && answer !== question.answer,
          })}
          click={() => {
            answerTheQuestion(true);
          }}
          error={error}
        />
        <MyButton
          content="false"
          className={classNames("myButton myButton--answer", {
            'myButton--correctAnswer': answer === false && answer === question.answer,
            'myButton--correctAnswerWasDone': answer === true && answer === question.answer,
            'myButton--falseAnswer': answer === false && answer !== question.answer,
            'myButton--falseAnswerWasDone': answer === true && answer !== question.answer,
          })}
          click={() => {
            answerTheQuestion(false);
          }}
          error={error}
        />
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