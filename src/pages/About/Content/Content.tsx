import { AiOutlineCheck } from 'react-icons/ai'
import aboutImg from '~/assets/images/about.jpg'
import aboutImgBanner from '~/assets/images/about-banner.jpg'
import imgs from '~/assets/images/join1.png'

import classNames from 'classnames/bind'
import styles from './Content.module.scss'
const cx = classNames.bind(styles)

const Content = () => {
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <img src={aboutImg} alt="aboutImg" className={cx('aboutImg')} />
          <img src={aboutImgBanner} alt="aboutImg" className={cx('aboutImgBanner')} />
          <div className={cx('imgGroup')}>
            <img src={imgs} alt="" />
            <span style={{ fontSize: '14px' }}>
              Join over <label style={{ color: 'black', fontSize: '14px' }}>4,000+</label> students
            </span>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('heading')}>
            <h1>Achieve Your Goals With Educal</h1>
            <span>
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officia, reiciendis sapiente adipisci
              nulla non consequuntur eos repellendus laborum veritatis obcaecati neque est id porro voluptatum. Fuga
              iure nulla cum. Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger
              all mate chinwag super pukka william barney, horse play buggered.
            </span>
            <ul className={cx('listSkills')}>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Upskill your organization.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Access more then 100K online courses
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" />
                Learn the latest skills
              </li>
            </ul>
            <button className={cx('btn_apply')}>Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
