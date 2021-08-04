import { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    onClickBtn = (option) => {
    //  return options.map((option) => {
    //     console.log(option);
        return this.setState(prevState => ({
              [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
        }));
      // })
    };
    // onClickBtn = (options) => {
    //  return options.map((option) => {
    //     console.log(option);
    //     return this.setState(prevState => ({
    //           [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
    //     }));
    //   })
    // };
  // onClickGoodBtn = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // onClickNeutralBtn = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // onClickBadBtn = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  // onClickBtn = (value) => {
  //   value.filter((el) => {
  //     if (el === 'good') {
  //     this.setState(prevState => ({
  //     // [value]: prevState.[value] + 1,
  //   good: prevState.good + 1,
  //   }));
  //   } else if (el === 'neutral') {
  //     this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  //   } else {
  //     this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  //   }
  //   })
    // if (value === 'good') {
    //   this.setState(prevState => ({
    //   // [value]: prevState.[value] + 1,
    // good: prevState.good + 1,
    // }));
    // } else if (value === 'neutral') {
    //   this.setState(prevState => ({
    //   neutral: prevState.neutral + 1,
    // }));
    // } else {
    //   this.setState(prevState => ({
    //   bad: prevState.bad + 1,
    // }));
    // }
  // };
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
};
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good === 0) return 0;
    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100,
    );
    return positiveFeedback;
  }

  render() {
    const total = this.countTotalFeedback();
    // const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    // console.log(this.state);
    return (
      <div className={s.app}>
        
        <Section title={'Please leave feedback'}>
          {/* <FeedbackOptions options={options} onLeaveFeedback={(option)=>this.onClickBtn(option)} />  */}
          <FeedbackOptions options={options} onLeaveFeedback={this.onClickBtn} /> 
          {/* <FeedbackOptions options={'Good'} onLeaveFeedback={this.onClickGoodBtn} /> 
          <FeedbackOptions options={'Neutral'} onLeaveFeedback={this.onClickNeutralBtn} /> 
          <FeedbackOptions options={'Bad'} onLeaveFeedback={this.onClickBadBtn} />  */}
          {/* <FeedbackOptions
            // onLeaveFeedback={this.onClickBtn(good)}
            // onLeaveFeedback={this.onClickBtn(neutral)}
            // onLeaveFeedback={this.onClickBtn(bad)}
            // options={'Good'} onLeaveFeedback={this.onClickBtn(good)}
            // options={ 'Neutral'} onLeaveFeedback={this.onClickBtn(neutral)}
            // options={'Bad'} onLeaveFeedback={this.onClickBtn(bad)}
            // onLeaveFeedback={this.onClickGoodBtn}
            // onLeaveFeedback={this.onClickNeutralBtn}
            // onLeaveFeedback={this.onClickBadBtn}
            // options={'Good'} onLeaveFeedback={this.onClickGoodBtn}
            // options={ 'Neutral'} onLeaveFeedback={this.onClickNeutralBtn}
            // options={'Bad'} onLeaveFeedback={this.onClickBadBtn}
            // onGoodClick={this.onClickBtn(this.state.good)}
            // onNeutralClick={this.onClickBtn(this.state.neutral)}
            // onBadClick={this.onClickBtn(this.state.bad)}
          /> */}
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
