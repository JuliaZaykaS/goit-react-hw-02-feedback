// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback }) {
  return (
    // <ul className={s.reviewList}>
    //   <li className={s.reviewItem} onClick={onLeaveFeedback}>Good </li>
    //   <li className={s.reviewItem} onClick={onLeaveFeedback}>Neutral </li>
    //   <li className={s.reviewItem} onClick={onLeaveFeedback}>Bad </li>
    // </ul>
    <button className={s.button} onClick={onLeaveFeedback}>{ options}</button>
  );
}
// export default function FeedbackOptions({ onLeaveFeedback }) {
//   return (
//     <ul className={s.reviewList}>
//       <li className={s.reviewItem} onClick={onLeaveFeedback}>Good </li>
//       <li className={s.reviewItem} onClick={onLeaveFeedback}>Neutral </li>
//       <li className={s.reviewItem} onClick={onLeaveFeedback}>Bad </li>
//     </ul>
//   );
// }
// export default function Review({ onGoodClick, onNeutralClick, onBadClick }) {
//   return (
//     <ul className={s.reviewList}>
//       <li className={s.reviewItem} onClick={onGoodClick}>Good </li>
//       <li className={s.reviewItem} onClick={onNeutralClick}>Neutral </li>
//       <li className={s.reviewItem} onClick={onBadClick}>Bad </li>
//     </ul>
//   );
// }
// export default function FeedbackOptions({ options, onLeaveFeedback }) {
//   // const options = ['Good', 'Neutral', 'Bad'];
//   return (
//     <ul className={s.reviewList}>
//       {options.map((el,index) => {
//         return (
          
//           <li key={ index } className={s.reviewItem} onClick={onLeaveFeedback(el.toLowerCase())}>{el} </li>
//         )
//       })}
     
//     </ul>
//     // <ul className={s.reviewList}>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     // </ul>
//   );
// }
// export default function FeedbackOptions({ options, onLeaveFeedback }) {
//   // const options = ['Good', 'Neutral', 'Bad'];
//   return (
//     <ul className={s.reviewList}>  
          
//           <li className={s.reviewItem} onClick={onLeaveFeedback(options)}>Good </li>
//           <li className={s.reviewItem} onClick={onLeaveFeedback(options)}>Neutral </li>
//           <li className={s.reviewItem} onClick={onLeaveFeedback(options)}>Bad </li>
        
//     </ul>
//       )
     
//     // <ul className={s.reviewList}>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     //   <li className={s.reviewItem} onClick={onLeaveFeedback}>{options} </li>
//     // </ul>

// }
