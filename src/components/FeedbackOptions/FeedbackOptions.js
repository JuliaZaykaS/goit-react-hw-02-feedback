import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback }) {
  return (
    options.map((option, index) => {
       return (<button key={ index} className={s.button} type='button' onClick={()=>onLeaveFeedback(option)}>{ option}</button>)
    })
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
}
