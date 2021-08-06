import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

export default function Statistics({ good, neutral, bad, total, positiveFeedback }) {
    return (
        <ul className={s.statisticList}>
            <StatisticItem label={'Good'} value={good}/>
            <StatisticItem label={'Neutral'}value={neutral}/>
            <StatisticItem label={'Bad'} value={bad}/>
            <StatisticItem label={'Total'}value={total}/>
            <StatisticItem label={'Positive feedback'} value={positiveFeedback}/>
        </ul>
        
    )
}
// export default function Statistics({ good, neutral, bad, total, positiveFeedback }) {
//     return (
//         <ul className={s.statisticList}>
//             <li className={s.statisticItem}>Good <span className={s.statisticNumber}>{ good}</span></li>
//             <li className={s.statisticItem}>Neutral <span className={s.statisticNumber}>{ neutral }</span></li>
//             <li className={s.statisticItem}>Bad <span className={s.statisticNumber}>{ bad}</span></li>
//             <li className={s.statisticItem}>Total <span className={s.statisticNumber}>{ total}</span></li>
//             <li className={s.statisticItem}>Positive feedback <span className={s.statisticNumber}>{ positiveFeedback}%</span></li>
//         </ul>
        
//     )
// }

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
}