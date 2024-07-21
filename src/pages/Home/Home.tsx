import classNames from 'classnames/bind'
import styles from './Home.module.scss'

import heroImg from '~/assets/images/hero.png'
import heroImgback from '~/assets/images/hero-shape-purple.png'

import { FiSearch } from 'react-icons/fi'
import { FaBookReader, FaGraduationCap, FaUsers } from 'react-icons/fa'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import About from '../About/About'
import Course from '../Courses/Course'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <>
      <section className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('content')}>
            {/* left */}
            <div className={cx('leftContent')}>
              <h1 className={cx('headingTitle')}>
                Launch your <br /> Own online learning <br /> Platform
              </h1>
              <h3 style={{ fontSize: '18px', marginTop: '12px' }}>Unlimited access to all 60+ instructors.</h3>
              <span style={{ fontSize: '14px' }}>2 passes (with access to all classes) for $240</span>

              {/* search */}
              <div className={cx('search_wrapper')}>
                <input type="search" placeholder="Search..." />
                <span className={cx('search_icon')}>
                  <button type="submit" className={cx('btn_search')}>
                    <FiSearch />
                  </button>
                </span>
              </div>
              <span style={{ fontSize: '14px' }}>You`re guaranteed to find something that`s right for you.</span>
            </div>
            {/* end left */}
            {/* right */}
            <div className={cx('rightContent')}>
              <div className={cx('thumbnail1')}>
                <img src={heroImgback} alt="images" />

                <div className={cx('thumbnail2')}>
                  <img src={heroImg} alt="images" />
                </div>
              </div>

              <div className={cx('content')}>
                <button className={cx('congrat1')}>
                  <div className={cx('congrat_icon')}>
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span style={{ fontSize: '14px' }}>Congrstulations</span>
                  </div>
                </button>
                <button className={cx('congrat2')}>
                  <div className={cx('graduationIcon')}>
                    <FaGraduationCap size={25} />
                  </div>
                  <div className={cx('text')}>
                    <span style={{ fontSize: '14px' }}>450K</span>
                    <span style={{ fontSize: '12px' }}>Assisted Student</span>
                  </div>
                </button>
                <button className={cx('btn_user')}>
                  <div className={cx('congrat_icon')}>
                    <FaUsers size={25} />
                  </div>
                  <div className={cx('text')}>
                    <span style={{ fontSize: '14px' }}>User Experience Class</span>
                    <span style={{ fontSize: '12px' }}>Tomorrow is our</span>
                  </div>
                </button>

                <button className={cx('btn_book')}>
                  <div className={cx('book_icon')}>
                    <FaBookReader size={25} />
                  </div>
                </button>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>
      {/* About */}
      <About />
      <Course />
    </>
  )
}

export default Home
