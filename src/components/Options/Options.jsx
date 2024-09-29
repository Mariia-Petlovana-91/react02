import css from '../Options/Options.module.css';

export default function Options({ good, neutral, bad, handlereset }) {
	return (
		<div className={css.options__container}>
		      <ul className={css.options__list}>
		        <li className={css.options__item}>Good: {good}</li>
		        <li className={css.options__item}>Neutral: {neutral}</li>
		        <li className={css.options__item}>Bad: {bad}</li>
			</ul>
			<button className={css.options__btn} onClick={handlereset} type='button'>Reset</button>
		</div>
	)
}