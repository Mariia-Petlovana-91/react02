import css from '../Options/Options.module.css';

export default function Options({ good, neutral, bad, handleReset, totalFeedback }) {
	return (
		<div className={css.options__container}>
		      <ul className={css.options__list}>
		        <li className={css.options__item}>Good: {good}</li>
		        <li className={css.options__item}>Neutral: {neutral}</li>
			  <li className={css.options__item}>Bad: {bad}</li>
			  <li className={(Math.round((good / totalFeedback) * 100)) >= 50? css.options__psitive : css.options__negative}>Positive: { Math.round((good / totalFeedback) * 100)}%</li>
			</ul>
			<button className={css.options__btn} onClick={handleReset} type='button'>Reset</button>
		</div>
	)
}