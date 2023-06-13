'use client'


import style from '../styles/header.module.scss';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const handleClick = () => {
        console.log('hola a toos');
    }
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <h1 style={{ color: 'white' }}>Vistripp</h1>
            </div>
            <div className={`${style.nav_movile} hidden`}>

                <Image src="/images/icons/menu_movile.svg"
                    width={30}
                    height={40} alt="flag" onClick={handleClick} />

            </div>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <Link href="/idiomas" className={style.idiomas}>
                            Idioma
                        </Link>
                    </li>
                    <li>

                        <Link href="/cuenta" className={style.idiomas}>
                            Cuenta
                        </Link>
                    </li>
                    <li>

                        <Image src="/images/icons/moneda.svg"
                            width={30}
                            height={40} alt="flag" />
                    </li>
                    <li>

                        <Image src="/images/icons/question.svg"
                            width={30}
                            height={40} alt="flag" />
                    </li>
                    <li>
                        <Image src="/images/icons/cart.svg"
                            width={30}
                            height={40} alt="flag" />
                    </li>
                </ul>
            </nav>




        </header>
    );
};

export default Header;
