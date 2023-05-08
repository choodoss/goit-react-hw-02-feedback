import PropTypes from 'prop-types';

export default function Notification({ message }) {
    const notification =
        <p>{message}</p>;
    return notification;
};
Notification.propTypes = {
    message: PropTypes.string,
}
