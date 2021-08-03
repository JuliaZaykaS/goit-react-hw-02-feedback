import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positiveFeedback }) {
    return (
        <ul className={s.statisticList}>
            <li className={s.statisticItem}>Good <span className={s.statisticNumber}>{ good}</span></li>
            <li className={s.statisticItem}>Neutral <span className={s.statisticNumber}>{ neutral }</span></li>
            <li className={s.statisticItem}>Bad <span className={s.statisticNumber}>{ bad}</span></li>
            <li className={s.statisticItem}>Total <span className={s.statisticNumber}>{ total}</span></li>
            <li className={s.statisticItem}>Positive feedback <span className={s.statisticNumber}>{ positiveFeedback}%</span></li>
        </ul>
        
    )
}