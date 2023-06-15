'use client'
import Image from 'next/image';
import style from '../styles/actividadesHome.module.scss';
import Link from 'next/link';

const actividades = [
    {
        id: 1,
        nombre: 'OLIMPIADAS BCN',
        descripcion: 'Permíteme llevarte en un recorrido virtual por uno de los eventos deportivos más destacados de la historia',
        imagen: '/images/actividades/1.png'
    },
    {
        id: 2,
        nombre: 'BRAVAS DE MADRID',
        descripcion: 'Las patatas bravas son un plato tradicional español que consiste en papas fritas acompañadas de una salsa picante y deliciosa.',
        imagen: '/images/actividades/2.png'

    },
    {
        id: 3,
        nombre: 'SAN FERMINES',
        descripcion: 'Los Sanfermines son conocidos en todo el mundo por los encierros de toros y la animada fiesta que los rodea.',
        imagen: '/images/actividades/3.png'
    },
    {
        id: 4,
        nombre: 'FLAMENCO SEVILLA',
        descripcion: 'Durante esta visita, exploraremos los lugares más destacados donde podrás disfrutar de auténticas noches de flamenco en Triana.',
        imagen: '/images/actividades/4.png'

    },
    {
        id: 5,
        nombre: 'PLAYA VALENCIA',
        descripcion: 'Acompáñame mientras exploramos algunas de las playas más populares de la zona.',
        imagen: '/images/actividades/5.png'
    },
    {
        id: 6,
        nombre: 'BARES LOW COST',
        descripcion: 'Ibiza es conocida por su animada vida nocturna.',
        imagen: '/images/actividades/6.png'

    },
];


const Actividades = () => {

    return (
        <>
            <section className={style.actividades_container}>
                <h2 className={style.header}>Actividades</h2>
                {
                    actividades.map(actividad => {
                        return (
                            <Link href={`/posts/${actividad.id}`} key={actividad.id} className={style.actividad} >
                                <div className={style.actividad_overlay}></div>
                                <Image src={actividad.imagen} alt={actividad.nombre}
                                    className={style.demo_image}
                                    width={500}
                                    height={500} />

                                <div className={style.actividad_content}>
                                    <h3>{actividad.nombre}</h3>
                                    <p>{actividad.descripcion}</p>
                                    <button>Ver más</button>
                                </div>
                            </Link>
                        );
                    })
                }



            </section>
        </>
    );
};

export default Actividades;
