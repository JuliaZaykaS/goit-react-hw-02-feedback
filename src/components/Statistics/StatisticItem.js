import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticItem({ label, value }){
    return (
        <li className={s.statisticItem}>{label} <span className={s.statisticNumber}>{ value}</span></li>

    )
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    
}
