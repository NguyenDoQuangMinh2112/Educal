import Accordion from '~/components/layouts/components/Accordion/Accordion'
import styles from './CourseDescription.module.scss'
import classNames from 'classnames/bind'

import { FaCheck } from 'react-icons/fa6'
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
            <div className={cx('topic_list')}>
              <h2 className={cx('topic_heading')}>Bạn sẽ học được gì?</h2>
              <ul className={cx('list')}>
                <li>
                  <FaCheck />
                  Hiểu chi tiết về các khái niệm cơ bản trong JS
                </li>
                <li>
                  <FaCheck />
                  Tự tin khi phỏng vấn với kiến thức vững chắc
                </li>
                <li>
                  <FaCheck />
                  Nắm chắc các tính năng trong phiên bản ES6
                </li>
                <li>
                  <FaCheck />
                  Ghi nhớ các khái niệm nhờ bài tập trắc nghiệm
                </li>
                <li>
                  <FaCheck />
                  Các bài thực hành như Tabs, Music Player
                </li>
                <li>
                  <FaCheck />
                  Xây dựng được website đầu tiên kết hợp với JS
                </li>
                <li>
                  <FaCheck />
                  Có nền tảng để học các thư viện và framework JS
                </li>
                <li>
                  <FaCheck />
                  Thành thạo DOM APIs để tương tác với trang web
                </li>
                <li>
                  <FaCheck />
                  Nâng cao tư duy với các bài kiểm tra với testcases
                </li>
                <li>
                  <FaCheck />
                  Nhận chứng chỉ khóa học do F8 cấp
                </li>
              </ul>
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

          <div className={cx('topic_list', 'm-top-40')}>
            <h2 className={cx('topic_heading')}>Yêu cầu</h2>
            <ul className={cx('list', 'f-colunm')}>
              <li>
                <FaCheck />
                Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)
              </li>
              <li>
                <FaCheck />Ý thức tự học cao, trách nhiệm cao, kiên trì bền bỉ không ngại cái khó
              </li>
              <li>
                <FaCheck />
                Không được nóng vội, bình tĩnh học, làm bài tập sau mỗi bài học
              </li>
              <li>
                <FaCheck />
                Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì bạn cần phải biết
              </li>
            </ul>
          </div>
        </article>

        <div className={cx('col', 'col-3')}>Right</div>
      </div>
    </div>
  )
}

export default CourseDescription
