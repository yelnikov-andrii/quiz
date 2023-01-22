import React from 'react';
import classNames from 'classnames';
import { MyButton } from '../MyButton/MyButton';

export const DetailedQuestion: React.FC <any> = ({question, nextQuestion}) => {
  const [answer, setAnswer] = React.useState<string>();
  const [answered, setAnswered] = React.useState(false);

  const clearInfo = () => {
    setAnswer('');
    setAnswered(false);
  }

  const answerTheQuestion = (value: string) => {
    if (answered === false) {
      setAnswer(value);
      setAnswered(true);
    }
  }

  const goForward = () => {
    if (answered === true) {
      nextQuestion();
      clearInfo();
      }
  }

  return (
    <React.Fragment>
      <>
        <img 
          src="https://involve-me.imgix.net/uploads/assets/93744c2c-4e46-439c-bf51-17ac52607418.png?q=55&dpr=1.25&w=600&fit=max" alt=''
          className='App__logo'
        />
      <main 
        className="question"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
      {question.img && (
        <img 
          src={question.img}
          className="question__img"
          alt=''
        />
      )}
      <div className='question__body'>
        {question.question && (
          <h2 className='question__txt'>
            {question.question}
          </h2>
        )}
        <div className='detailedQuestion__buttons'>
        {question.variants.map((variant: string) => (
          <MyButton
            content={variant}
            className={classNames("myButton myButton--answer myButton--detailedQuestion", {
              'myButton--correctAnswer': answered === true && variant === question.answer,
              'myButton--falseAnswer': answered === true && variant !== question.answer && variant === answer,
              'myButton--correctAnswerWasDone': answered === true && variant !== question.answer
            })}
            key={variant}
            click={() => {
              answerTheQuestion(variant);
            }}

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
        <MyButton
          content="Next"
          className="myButton myButton--scale myButton--next"
          click={goForward}
         />
      </div>
    </main>
      </>
    </React.Fragment>
  )
};

