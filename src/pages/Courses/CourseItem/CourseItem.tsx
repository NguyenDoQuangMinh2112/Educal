import { FaBook } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { Course } from '~/data/mockData'

import classNames from 'classnames/bind'
import styles from './CourseItem.module.scss'

const cx = classNames.bind(styles)

interface CourseItemProps {
  item: Course
}

const CourseItem = ({ item }: CourseItemProps) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('images')}>
        <img src={item.cover} alt="" className={cx('thumbCourse')} />
        <div className={cx('categories')}>
          <span className={cx('text')}>Finance</span>
          <span className={cx('text')}>Lifestyle</span>
        </div>
      </div>
      <div style={{ padding: '12px' }}>
        <div className={cx('wrapper_info')}>
          <div className={cx('lessonInfo')}>
            <FaBook />
            <span className={cx('lesson')}> 10 lessons</span>
          </div>
          <div className={cx('lessonInfo')}>
            <AiFillStar color="#f97316" />
            <span className={cx('lesson')}> 4.50(2)</span>
          </div>
        </div>
        <NavLink to="/course/c" className={cx('lessonTitle')}>
          {item.title}
        </NavLink>
        <div className={cx('users')}>
          <img src="https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g" alt="" />
          <span> sunil</span>
        </div>
      </div>
      <div className={cx('detailsLesson')}>
        <span>Free</span>
        <NavLink to="/">
          Know Details <HiOutlineArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  )
}

export default CourseItem
