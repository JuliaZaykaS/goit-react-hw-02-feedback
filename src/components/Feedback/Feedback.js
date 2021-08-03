import { Component } from 'react';
import Section from '../Section/Section';
import Review from '../Review/Review';
import Statistic from '../Statistic/Statistic';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   onClickBtn = (btn, value) => {
  //       console.log(value)
  //     //   value: 1
  //       this.setState(prevState => ({
  //         //   console.log(prevState);
  //           btn: prevState.value + 1,
  //     //   [value]: prevState.value + 1,
  //     }));
  //   };
  onClickGoodBtn = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onClickNeutralBtn = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onClickBadBtn = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  //   onClickBtn = () => {
  //          this.setState((prevState) => ({
  //         : prevState.value + 1,

  //     }));
  //   };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good === 0) return 0;
    const positiveFeedback = Math.round(
      (good / this.countTotalFeedback()) * 100,
    );
    return positiveFeedback;
  }

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Review
            onGoodClick={this.onClickGoodBtn}
            onNeutralClick={this.onClickNeutralBtn}
            onBadClick={this.onClickBadBtn}
            // onGoodClick={this.onClickBtn(this.state.good)}
            // onNeutralClick={this.onClickBtn(this.state.neutral)}
            // onBadClick={this.onClickBtn(this.state.bad)}
          />
        </Section>
        <Section title={'Statistics'}>
         {/* {(this.countTotalFeedback()) &&
                 <Notification />    */}
                    <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            
            {/* } */}
        </Section>
      </>
    );
  }
}

export default Feedback;
