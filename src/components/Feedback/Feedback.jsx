import css from '../Feedback/Feedback.module.css';

export default function Feedback({ good, neutral, bad, totalFeedback }) {
	return (
		<div className={css.feedback__container}>
			<ul className={css.feedback__list}>
		        <li className={css.feedback__item}>Good: {good}</li>
		        <li className={css.feedback__item}>Neutral: {neutral}</li>
			  <li className={css.feedback__item}>Bad: {bad}</li>
			  <li className={(Math.round((good / totalFeedback) * 100)) >= 50? css.feedback__psitive : css.feedback__negative}>Positive: { Math.round((good / totalFeedback) * 100)}%</li>
			</ul>
			
		</div>
	)
}