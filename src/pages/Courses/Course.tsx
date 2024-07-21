import classNames from 'classnames/bind'
import styles from './Course.module.scss'
import { courses } from '~/data/mockData'
import CourseItem from './CourseItem/CourseItem'
const cx = classNames.bind(styles)

const Course = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('heading')}>
          <h1>
            Find The Right <br />
            Online Course For You
          </h1>
          <span className="text-sm mt-2 block">
            you don't have to struggle alone, you've got our assistance and help.
          </span>
        </div>

        {/* render course */}
        <div className={cx('listCourse')}>
          {courses?.map((item) => (
            <CourseItem item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Course
