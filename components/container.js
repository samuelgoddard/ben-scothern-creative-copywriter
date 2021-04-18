import styles from './container.module.css'
import cn from 'classnames'

export default function Container({ children, wide }) {
  return(
    <div className={
      cn(styles['container'], { 
        [styles['container--wide']]: wide
      })
    }>
      {children}
    </div>
  )
}