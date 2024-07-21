import Accordion from '~/components/layouts/components/Accordion/Accordion'
import styles from './CourseDescription.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const CourseDescription = () => {
  return (
    <div className={cx('wrapper', 'container')}>
      <div className={cx('row')}>
        <article className={cx('col', 'col-9')}>
          <div className={cx('content')}>
            <div>
              {' '}
              <h1>Basic and advanced C++ programming</h1>
              <div className={cx('text-content')}>
                C++ programming course from basic to advanced for beginners. The objectives of this course are: Helps
                you grasp the basic concepts of programming, giving you a solid foundation to master pursue your path to
                becoming a programmer.
              </div>
            </div>
            <div className={cx('curriculumOfCourse')}>
              <div className={cx('headingTitle')}>
                <h2>Course content</h2>
              </div>

              <div className={cx('subHead')}>
                <ul>
                  <li>
                    <strong>11</strong> chương
                  </li>
                  <li className={cx('dot')}>•</li>
                  <li>
                    <strong>138</strong> bài học
                  </li>
                  <li className={cx('dot')}>•</li>
                  <li>
                    Thời lượng <strong>10 giờ 29 phút</strong>
                  </li>
                </ul>
                <div className={cx('openMore')}>Open all</div> {/* (su dung redux de hanlde) */}
              </div>
            </div>
          </div>

          {/* accordion */}
          <Accordion />
          <Accordion />
          <Accordion />
        </article>

        <div className={cx('col', 'col-3')}>Right</div>
      </div>
    </div>
  )
}

export default CourseDescription
