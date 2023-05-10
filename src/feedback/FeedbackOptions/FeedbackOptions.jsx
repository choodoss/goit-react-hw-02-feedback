import { ButtonContainer, Button } from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
    const FeedbackOptions =
        <ButtonContainer>
            {Object.keys(options).map((item, i) => <Button key={i + 1} type='button' onClick={onLeaveFeedback} name={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Button>)}
        </ButtonContainer >;

    return FeedbackOptions;
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
}
