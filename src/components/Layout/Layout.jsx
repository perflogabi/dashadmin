import moment from "moment/moment"
import css from './Layout.module.css'



export const Layout = () => {
  return (
    <div className={css.container}>
        <div>Sidebar</div>

        <div className={css.dashboard}>
            <div className={css.topBaseGradients}>
                <div className='gradient-red'></div>
                <div className='gradient-orange'></div>
                <div className='gradient-blue'></div>
            </div>

            <div className={css.header}>
            <span>{moment().format("dddd, Do MMM YYYY")}</span>
            </div>
        </div>
    </div>
  )
}
