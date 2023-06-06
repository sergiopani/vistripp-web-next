'use client'

import style from '../styles/footer.module.scss'
import Link from 'next/link'

import { useState } from 'react'

const Footer = () => {

    const [randomLinks, setRandomLinks] = useState([
        { href: '/about', label: 'Acerca de nosotros' },
        { href: '/contact', label: 'Contacto' },
        { href: '/services', label: 'Servicios' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'Preguntas frecuentes' },
    ])

    const getRandomLink = () => {
        const randomIndex = Math.floor(Math.random() * randomLinks.length)
        const randomLink = randomLinks[randomIndex]
        setRandomLinks(randomLinks.filter((link) => link !== randomLink))
        return randomLink
    }

    return (
        <footer className={style.footer_container}>
            <div className={style.link_box}>
                <h3>Contacta</h3>
                <ul>
                    <li>
                        <Link href="/terms" className={style.footer_link}>
                            Términos y condiciones
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className={style.footer_link}>
                            Política de privacidad
                        </Link>
                    </li>
                    <li>
                        <Link href="/sitemap" className={style.footer_link}>
                            Mapa del sitio
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.link_box}>
                <h3>Enlaces útiles</h3>
                <ul>
                    <li>
                        <Link href="/terms" className={style.footer_link}>
                            Términos y condiciones
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className={style.footer_link}>
                            Política de privacidad
                        </Link>
                    </li>
                    <li>
                        <Link href="/sitemap" className={style.footer_link}>
                            Mapa del sitio
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.link_box}>
                <h3>Mas información</h3>
                <ul>
                    <li>
                        <Link href="/terms" className={style.footer_link}>
                            Términos y condiciones
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy" className={style.footer_link}>
                            Política de privacidad
                        </Link>
                    </li>
                    <li>
                        <Link href="/sitemap" className={style.footer_link}>
                            Mapa del sitio
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer