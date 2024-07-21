import Button from '~/components/Button/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)
type MenuItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const MenuItem = ({ data }: MenuItemProps) => {
  const navigate = useNavigate()
  const classes = cx('menu-item', {
    separate: data.separate
  })
  const handleClick = (title: string) => {
    if (title === 'Log out') {
      navigate(data.to)
    }
  }
  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={() => handleClick(data.title)}>
      {data?.title}
    </Button>
  )
}

export default MenuItem
