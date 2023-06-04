

import style from '../styles/header.module.scss';

import Image from 'next/image';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                {/* <Image src='/images/logo.jpeg'
                    width={52}
                    alt='logo'
                    height={180} /> */}
            </div>

            <nav className={style.nav}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>


        </header>
    );
};

export default Header;
