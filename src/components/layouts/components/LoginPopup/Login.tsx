import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Button from '~/components/Button/Button'
const cx = classNames.bind(styles)
interface LoginProps {
  setShowLogin: (show: boolean) => void
}
const Login = ({ setShowLogin }: LoginProps) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('login-popup-container')}>
        <Button className={cx('close-popup')} onClick={() => setShowLogin(false)}>
          x
        </Button>
        <header>
          <img src="	https://accounts.fullstack.edu.vn/assets/logo-lV2rGpF0.png" alt="" />
          <h1>Login to Educal</h1>
          <p>Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.</p>
        </header>

        <main>
          <div></div>
          <p></p>
          <a href=""></a>
          <p></p>
        </main>
      </div>
    </div>
  )
}

export default Login
