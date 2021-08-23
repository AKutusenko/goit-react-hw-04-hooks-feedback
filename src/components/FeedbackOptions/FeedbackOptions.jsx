import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <button type="button" onClick={onLeaveFeedback} className={s.btn}>
      {options}
    </button>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
