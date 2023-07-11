const questions = [
    {
      id: 1,
      question: 'How was your experience with this course?',
      options: ['Good', 'Bad', 'I survived']
    },
    
    {
        id: 2,
        question: 'Is the Javascript scripting?',
        options: ['Totally scriping ', 'What is JavaScript again?']
      },
    {
        id: 3,
        question: 'Are you glad it is over?',
        options: ['Hell yeah', 'No ', 'I will miss it']
      },
     
      
      {
        id: 4,
        question: 'What is next for you?',
        options: ['Vacation time', 'Become a developer', 'No idea, but I will figure it out']
      },
  ];
  
  class Questionnaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answers: {}
      };
    }
  
    handleOptionChange = (questionId, option) => {
      this.setState(prevState => ({
        answers: {
          ...prevState.answers,
          [questionId]: option
        }
      }));
    }
  
    handleSubmit = event => {
      event.preventDefault();
      
      console.log(this.state.answers);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {questions.map(question => (
            <fieldset key={question.id}>
              <legend>{question.question}</legend>
              {question.options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question${question.id}`}
                    value={option}
                    checked={this.state.answers[question.id] === option}
                    onChange={() => this.handleOptionChange(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </fieldset>
          ))}
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  ReactDOM.render(<Questionnaire />, document.getElementById('root'));
  