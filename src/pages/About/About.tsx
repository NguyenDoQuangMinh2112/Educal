import classNames from 'classnames/bind'
import styles from './About.module.scss'
import Card from './Card/Card'
import Content from './Content/Content'

const cx = classNames.bind(styles)

const About = () => {
  return (
    <>
      <section className={cx('wrapper')}>
        <div className={cx('container')}>
          <div className={cx('heading')}>
            <h1>Why An Scholercity Out Of The Ordinary</h1>
            <span>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className={cx('listCard')}>
            <Card color="bg-blue" />
            <Card color="bg-red" />
            <Card color="bg-purple" />
            <Card color="bg-green" />
          </div>
        </div>
      </section>
      <Content />
    </>
  )
}

export default About
