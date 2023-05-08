import { StatisticList, StatisticItem, Num } from './Statistic.styled'
import PropTypes from 'prop-types';

export default function Statistic({ good, neutral, bad, total, positivePercentage }) {
    const statistic =
        <StatisticList>
            <StatisticItem>Good: <Num>{good}</Num></StatisticItem>
            <StatisticItem>Neutral: <Num>{neutral}</Num></StatisticItem>
            <StatisticItem>Bad: <Num>{bad}</Num></StatisticItem>
            <StatisticItem>Total: <Num>{total}</Num></StatisticItem>
            <StatisticItem>Positeve feedback: <Num>{positivePercentage ? positivePercentage : 0}%</Num></StatisticItem>
        </StatisticList>;
    return statistic;
}

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}