import { ButtonContainer, Button } from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
    const FeedbackOptions =
        <ButtonContainer>
            <Button type='button' onClick={onLeaveFeedback} name={options[0].toLowerCase()}>{options[0]}</Button>
            <Button type='button' onClick={onLeaveFeedback} name={options[1].toLowerCase()}>{options[1]}</Button>
            <Button type='button' onClick={onLeaveFeedback} name={options[2].toLowerCase()}>{options[2]}</Button>
        </ButtonContainer>;

    return FeedbackOptions;
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
}
