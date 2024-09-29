import css from '../Feedback/Feedback.module.css';

export default function Feedback({handleGood, handleNeutral, handleBad}) {
	return (
		<ul className={css.feedback__list}>
			<li className={css.feedback__item}>
				<button className={css.feedback__btn} onClick={handleGood} type='button'>Good</button>
			</li>
			<li className={css.feedback__item}>
				<button className={css.feedback__btn} onClick={handleNeutral} type='button'>Neutral</button>
			</li>
			<li className={css.feedback__item}>
				<button className={css.feedback__btn} onClick={handleBad} type='button'>Bad</button>
			</li>
		</ul>
	)
}