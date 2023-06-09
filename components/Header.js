'use client'
import style from '../styles/header.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const movileMenu = useRef(null)


    const handleClick = () => {
        setMenuVisible(!menuVisible);

    }
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link href="/" style={{ color: 'white', fontSize: '1.8rem' }}>Vistripp</Link>
            </div>
            <div className={style.nav_movile} onClick={handleClick}>

                <Image src="/images/icons/menu_movile.svg"
                    width={30}
                    height={40} alt="flag" onClick={handleClick} />

            </div>

            <nav className={`${style.nav_movile_menu} ${menuVisible ? '' : style.hidden
                }`} ref={movileMenu}>
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
                        <Link href="/cuenta" className={style.idiomas}>
                            Moneda
                        </Link>
                    </li>
                    <li>
                        <Link href="/cuenta" className={style.idiomas}>
                            Ayuda
                        </Link>
                    </li>
                    <li>
                        <Link href="/cuenta" className={style.idiomas}>
                            Carrito
                        </Link>
                    </li>
                </ul>
            </nav>


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
