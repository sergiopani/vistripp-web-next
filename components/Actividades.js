
import Image from 'next/image';
import style from '../styles/actividadesHome.module.scss';
const actividades = [
    {
        id: 1,
        nombre: 'Actividad 1',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad1.jpg'
    },
    {
        id: 2,
        nombre: 'Actividad 2',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad2.jpg'

    },
    {
        id: 3,
        nombre: 'Actividad 3',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad1.jpg'
    },
    {
        id: 4,
        nombre: 'Actividad 4',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad2.jpg'

    },
    {
        id: 5,
        nombre: 'Actividad 5',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad1.jpg'
    },
    {
        id: 6,
        nombre: 'Actividad 6',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/actividades/actividad2.jpg'

    },
];
const Actividades = () => {
    return (
        <section>
            <h2>Actividades</h2>
            <div className={style.actividades_container}>
                {
                    actividades.map(actividad => {
                        return (
                            <div key={actividad.id} className={style.actividad}>

                                <div className={style.actividad_content}>
                                    <h3>{actividad.nombre}</h3>
                                    <p>{actividad.descripcion}</p>
                                    <button>Ver más</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </section>
    );
};

export default Actividades;
