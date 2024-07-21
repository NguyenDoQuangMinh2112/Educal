import classNames from 'classnames/bind'
import styles from './Card.module.scss'

import { FaBookDead } from 'react-icons/fa'

const cx = classNames.bind(styles)
interface CardProps {
  color: string
}
const Card = ({ color }: CardProps) => {
  return (
    <div className={cx('wrapper', `${color}`)}>
      <div className={cx('icon')}>
        <FaBookDead size={50} />
      </div>
      <div className={cx('text')}>
        <h4 className={cx('title')}>4,000 Online courses</h4>
        <p className={cx('desc')}>You don't have to struggle alone, you've </p>
      </div>
    </div>
  )
}

export default Card
