'use client'
import Image from 'next/image';
import style from '../styles/actividadesHome.module.scss';
import Link from 'next/link';


const actividades = [
    {
        id: 1,
        nombre: 'Actividad 1',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/1.jpeg'
    },
    {
        id: 2,
        nombre: 'Actividad 2',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/2.jpeg'

    },
    {
        id: 3,
        nombre: 'Actividad 3',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/3.jpeg'
    },
    {
        id: 4,
        nombre: 'Actividad 4',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/4.jpeg'

    },
    {
        id: 5,
        nombre: 'Actividad 5',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/5.jpeg'
    },
    {
        id: 6,
        nombre: 'Actividad 6',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/6.jpeg'

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
                            <Link href={`/actividades/${actividad.id}`} key={actividad.id} className={style.actividad} >
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
