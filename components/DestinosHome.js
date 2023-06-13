import style from '../styles/destinosHome.module.scss';
import Image from 'next/image';

const destinos = [
    {
        id: 1,
        nombre: 'Destino 1',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/1.jpeg'
    },
    {
        id: 2,
        nombre: 'Destino 2',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/2.jpeg'

    },
    {
        id: 3,
        nombre: 'Destino 3',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/3.jpeg'
    },
    {
        id: 4,
        nombre: 'Destino 4',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/4.jpeg'

    },
    {
        id: 5,
        nombre: 'Destino 5',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/5.jpeg'
    },
    {
        id: 6,
        nombre: 'Destino 6',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        imagen: '/images/destinos/6.jpeg'

    },


];
const DestinosHome = () => {

    return (
        <>

            <section className={style.destinos_container}>
                <h2 className={style.header}>Principales Destinos</h2>
                {
                    destinos.map(destino => {
                        return (
                            <div key={destino.id} className={style.destino}>
                                <div className={style.destino_overlay}></div>

                                <Image src={destino.imagen} alt={destino.nombre}
                                    className={style.demo_image}
                                    width={500}
                                    height={500} />
                                <div className={style.destino_content}>
                                    <h3>{destino.nombre}</h3>
                                    <p>{destino.descripcion}</p>
                                    <button>Ver más</button>
                                </div>
                            </div>

                        );
                    }
                    )
                }

            </section>

        </>
    );
};

export default DestinosHome;
