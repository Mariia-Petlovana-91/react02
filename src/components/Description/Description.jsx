import css from '../Description/Description.module.css';
import { FaGrinBeam } from "react-icons/fa";

export default function Description({positiveTotal}) {
	return (
		<div className={css.descript__container}>
			<div className={css.descript__titleContainer}>
				<h1 className={css.descript__title}>Sip Happens Café</h1>
				{positiveTotal >= 50&& <FaGrinBeam  size="48px" fill='rgb(48, 206, 48)' />}
			</div>
			
			<p className={css.descript__text}>Please leave your feedback about our service by selecting one of the options below.</p>
		</div>
	)
}