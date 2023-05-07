import React, { Component } from 'react';
import { FeadbackSection, MainTitle, ButtonContainer, Button, SecondTitle, StatisticList, StatisticItem, Num } from './Feedback.styled'


class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }


    hendleStat = ({ currentTarget: { name } }) => {
        this.setState(PS => { return { [name]: PS[name] + 1 } });
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, val) => acc + val, 0)
    };

    countPositiveFeedbackPercentage = () => { return Math.floor((this.state.good / this.countTotalFeedback()) * 100) };

    render() {
        const countTotal = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        const Feedback =
            <FeadbackSection>
                <MainTitle>Please leave feedback</MainTitle>
                <ButtonContainer>
                    <Button type='button' onClick={this.hendleStat} name='good'>Good</Button>
                    <Button type='button' onClick={this.hendleStat} name='neutral'>Neutral</Button>
                    <Button type='button' onClick={this.hendleStat} name='bad'>Bad</Button>
                </ButtonContainer>
                <SecondTitle>Statistics</SecondTitle>
                <StatisticList>
                    <StatisticItem>Good: <Num>{this.state.good}</Num></StatisticItem>
                    <StatisticItem>Neutral: <Num>{this.state.neutral}</Num></StatisticItem>
                    <StatisticItem>Bad: <Num>{this.state.bad}</Num></StatisticItem>
                    <StatisticItem>Total: <Num>{countTotal}</Num></StatisticItem>
                    <StatisticItem>Positeve feedback: <Num>{positiveFeedback ? positiveFeedback : 0}%</Num></StatisticItem>
                </StatisticList>
            </FeadbackSection>
        return Feedback;
    }

}

export default Feedback;