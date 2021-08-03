// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function Review({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <ul className={s.reviewList}>
      <li className={s.reviewItem} onClick={onGoodClick}>Good </li>
      <li className={s.reviewItem} onClick={onNeutralClick}>Neutral </li>
      <li className={s.reviewItem} onClick={onBadClick}>Bad </li>
    </ul>
  );
}
