import React, { Component } from 'react';
import { FeadbackSection } from './Feedback.styled'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    hendleStat = ({ currentTarget: { name } }) => {
        this.setState(PS => { return { [name]: PS[name] + 1 } });
    };

    countTotalFeedback = () => Object.values(this.state).reduce((acc, val) => acc + val, 0)
        ;

    countPositiveFeedbackPercentage = () => Math.floor((this.state.good / this.countTotalFeedback()) * 100);

    render() {
        const countTotal = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        const onLeaveFeedback = this.hendleStat;
        const { good, neutral, bad } = this.state;

        const Feedback =
            <FeadbackSection>
                <Section title="Please leave feedback" />
                <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={onLeaveFeedback} />
                <Section />
                < Section title="Statistics" />
                {countTotal ?
                    (<>
                        <Statistic good={good} neutral={neutral} bad={bad} total={countTotal} positivePercentage={positiveFeedback} />
                    </>) :
                    (<Notification message="There is no feedback" />)
                }
                <Section />
            </FeadbackSection>
        return Feedback;
    };
};

export default Feedback;