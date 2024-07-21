import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import logoImg from '~/assets/images/logo-black.png'
import { LinkData } from '~/utils/menu'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'

import Menu from '../Popper/Menu/Menu'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

const userMenu = [
  {
    icon: <FaUser />,
    title: 'View profile',
    to: ''
  },
  {
    icon: <IoMdSettings />,
    title: 'Settings',
    to: '/settings'
  },
  {
    icon: <MdLogout />,
    title: 'Log out',
    to: '/login',
    separate: true
  }
]
interface HeaderProps {
  setShowLogin: (show: boolean) => void
}
const Header = ({ setShowLogin }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const user = false
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('container')}>
          <NavLink to="/" className={cx('logo_wrapper')}>
            <img src={logoImg} alt="logo" className={cx('logo')} />
          </NavLink>

          <nav className={cx(open ? 'mobile-view' : 'desktop-view')}>
            <ul className={cx('list_menu')}>
              {LinkData.map((link, index) => (
                <li key={index} onClick={() => setOpen(false)}>
                  <NavLink to={link.url}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={cx('actions')}>
            {user && (
              <>
                {' '}
                <Button className={cx('myCourse')}>My course</Button>
                <div className={cx('notification_button')}>
                  <IoNotifications className={cx('notification')} />
                </div>
              </>
            )}
            {user ? (
              <Menu items={userMenu}>
                <div className={cx('fallbackAvatar')}>
                  <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                    alt="avatar"
                  />
                </div>
              </Menu>
            ) : (
              <>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
                <Button className={cx('open-menu')} onClick={() => setOpen(!open)}>
                  <HiOutlineMenuAlt1 size={25} />
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
