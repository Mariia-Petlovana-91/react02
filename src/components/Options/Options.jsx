import css from '../Options/Options.module.css';
import Reset from '../Reset/Reset';

export default function Options({handleGood, handleNeutral, handleBad, handleReset, totalFeedback}) {
	return (
		<div className={css.options__container}>
			<ul className={css.options__list}>
			   <li className={css.options__item}>
			    	<button className={css.options__btn} onClick={handleGood} type='button'>Good</button>
			   </li>
			   <li className={css.options__item}>
				   <button className={css.options__btn} onClick={handleNeutral} type='button'>Neutral</button>
			   </li>
			   <li className={css.options__item}>
				  <button className={css.options__btn} onClick={handleBad} type='button'>Bad</button>
			   </li>
		   </ul>
		   {totalFeedback > 0 && <Reset handleReset={handleReset}/>}
		</div>
	)
}