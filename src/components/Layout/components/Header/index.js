import styles from './Header.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

function Header() {
    return (<header>
        <h1 className={cx('wrapper')}>Header</h1>
    </header>);
}
export default Header;