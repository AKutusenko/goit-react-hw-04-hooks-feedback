import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.wrapper}>
      <span className={s.span}>Good: {good}</span>
      <span className={s.span}>Neutral: {neutral}</span>
      <span className={s.span}>Bad: {bad}</span>
      <span className={s.span}>Total: {total}</span>
      <span className={s.span}>Positive feedback: {positivePercentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
