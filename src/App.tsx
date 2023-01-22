import React from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import { Start } from './Components/Start/Start';
import { DetailedQuestion } from './Components/DetailedQuestion/DetailedQuestion';
import { Question } from './Components/Question/Question';
import { questions } from './questionData';
import { Finish } from './Components/Finish/Finish';
import Aos from 'aos';

function App() {
  const [currentNum, setCurrentNum] = React.useState(1);
  const [currentQuestion, setCurrentQuestion] = React.useState<any>();
  const [start, setStart] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const [finish, setFinish] = React.useState(false);
  const [delay, setDelay] = React.useState(false);

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
    setStart(true);
  }

  React.useEffect(() => {
    if (currentNum === questions.length + 1) {
      setFinish(true);
    }
  }, [currentNum]);

  return (
    <Container>
      <div className="App">
        {delay === false && (
          <div className='App__wrapper'>
          {!start && (
            <Start startTheQuiz={startTheQuiz} />
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
            <Finish score={correctAnswers} countOfQuestions={questions.length} />
          )}
      </div>
        )}
      </div>
    </Container>
  );
}

export default App;
