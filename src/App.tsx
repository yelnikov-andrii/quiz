/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import { Start } from './Components/Start/Start';
import { DetailedQuestion } from './Components/DetailedQuestion/DetailedQuestion';
import { Question } from './Components/Question/Question';
import { questions } from './data/questionData';
import { Finish } from './Components/Finish/Finish';
import Aos from 'aos';
import { QuestionInterface } from './types/types';
import classNames from 'classnames';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [currentNum, setCurrentNum] = React.useState(1);
  const [currentQuestion, setCurrentQuestion] = React.useState<QuestionInterface>();
  const [start, setStart] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [finish, setFinish] = React.useState(false);
  const [delay, setDelay] = React.useState(false);
  const [prestart, setPrestart] = React.useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const arrOfFields = searchParams.toString().split('&').map(el => el.split('='));

  React.useEffect(() => {
    Aos.init({
    });
  }, []);
  
  React.useEffect(() => {
    const foundQuestion = questions.find((question, index) => index === currentNum - 1);
    setCurrentQuestion(foundQuestion);
  }, [currentNum]);

  const nextQuestion = React.useCallback((value: boolean) => {
    setCurrentNum(prev => prev + 1);
    if (value === true) {
      setCorrectAnswers(answers => answers + 1)
    }
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 0);
  }, [currentNum])

  const startTheQuiz = () => {
    setPrestart(true);
    setTimeout(() => {
      setStart(true);
    }, 500);
  }

  React.useEffect(() => {
    if (currentNum === questions.length + 1) {
      setFinish(true);
    }
  }, [currentNum]);

  return (
    <Routes>
      <Route path='/quiz' element={      <Container className={classNames("App", {
        "App--beforeStart": start === false
      })}>
        {delay === false && (
          <div className={classNames('App__wrapper', {
            'App__wrapper--afterStart': start === true
          })}>
          {!start && (
            <Start 
              startTheQuiz={startTheQuiz} 
              prestart={prestart}
              arrSearchParams={arrOfFields}
            />
          )}
          {start === true && (
            <>
            {currentQuestion && !currentQuestion.hasOwnProperty('variants') ? (
              <Question 
                question={currentQuestion} 
                nextQuestion={nextQuestion}
              />
            ) : (
              currentQuestion && (
                <DetailedQuestion 
                  question={currentQuestion} 
                  nextQuestion={nextQuestion} 
              />
              )
            )}
          </>
          )}
          {finish === true && (
            <Finish 
              score={correctAnswers} 
              countOfQuestions={questions.length}
              arrSearchParams={arrOfFields}
            />
          )}
          </div>
        )}
    </Container>}>
      </Route>
    </Routes>
  );
}

export default App;
