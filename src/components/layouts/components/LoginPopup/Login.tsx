import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import Button from '~/components/Button/Button'
import { IoMdClose } from 'react-icons/io'
import { IoChevronBackSharp } from 'react-icons/io5'
import userIcon from '~/assets/images/user.svg'
import googleIcon from '~/assets/images/google.svg'
import facebookIcon from '~/assets/images/facebook.svg'
import githubIcon from '~/assets/images/github.svg'
import { useState } from 'react'

const cx = classNames.bind(styles)
interface LoginProps {
  setShowLogin: (show: boolean) => void
}
const Login = ({ setShowLogin }: LoginProps) => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(false)
  return (
    <div className={cx('wrapper')}>
      <div className={cx('login-popup-container')}>
        <Button className={cx('close-popup')} onClick={() => setShowLogin(false)}>
          <IoMdClose />
        </Button>
        <header className={cx('heading-top')}>
          <a href="">
            {' '}
            <img src="	https://accounts.fullstack.edu.vn/assets/logo-lV2rGpF0.png" alt="" />
          </a>
          <h1 className={cx('heading-title')}>Đăng nhập với Educal</h1>
          <p className={cx('warning')}>
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
          </p>
          {isEmailLogin && (
            <Button leftIcon={<IoChevronBackSharp />} className={cx('back')} onClick={() => setIsEmailLogin(false)}>
              Quay lại
            </Button>
          )}
        </header>

        <main className={cx('main')}>
          {isEmailLogin ? (
            <div className={cx('content')}>
              <div className={cx('form-group')}>
                <label htmlFor="username">Tên đăng nhập</label>
                <div className={cx('inputWrap')}>
                  <input type="text" id="username" placeholder="Tài khoản email của bạn" />
                </div>
              </div>
              <div className={cx('form-group')}>
                <label htmlFor="password">Mật khẩu</label>
                <div className={cx('inputWrap')}>
                  <input type="password" id="password" placeholder="Mật khẩu" />
                </div>
              </div>
              <div className={cx('remember')}>
                <input type="checkbox" id="remember" checked />
                <label htmlFor="remember">Ghi nhớ đăng nhập</label>
              </div>
              <Button className={cx('login-btn')}>Đăng nhập</Button>
            </div>
          ) : (
            <div className={cx('content')}>
              <Button
                to="/"
                className={cx('btnPopupLogin')}
                classNameTitle={cx('text')}
                svgIcon={userIcon}
                onClick={() => setIsEmailLogin(true)}
              >
                Use email / phone number
              </Button>
              <Button to="/" className={cx('btnPopupLogin')} classNameTitle={cx('text')} svgIcon={googleIcon}>
                Login with Google
              </Button>
              <Button to="/" className={cx('btnPopupLogin')} classNameTitle={cx('text')} svgIcon={facebookIcon}>
                Login with Facebook
              </Button>
              <Button to="/" className={cx('btnPopupLogin')} classNameTitle={cx('text')} svgIcon={githubIcon}>
                Login with Github
              </Button>
            </div>
          )}
          <p className={cx('registerOrLogin')}>
            Bạn chưa có tài khoản?
            <a href=""> Đăng ký</a>
          </p>
          <a className={cx('forgotPassword')} href="">
            Quên mật khẩu?
          </a>
          <p className={cx('rules')}>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
            <a href=""> điều khoản sử dụng</a> của chúng tôi.
          </p>
        </main>
      </div>
    </div>
  )
}

export default Login
