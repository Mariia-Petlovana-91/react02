import css from '../Reset/Reset.module.css'

export default function Reset({handleReset}){
    return (
        <div>
            <button className={css.reset__btn} onClick={handleReset} type='button'>Reset</button>
        </div>
    )
}