import style from '../styles/destinosHome.module.scss';
import Image from 'next/image';

const destinos = [
    {
        id: 1,
        nombre: 'Madrid',
        descripcion: '',
        imagen: '/images/destinos/1.jpeg'
    },
    {
        id: 2,
        nombre: 'Barcelona',
        descripcion: '',
        imagen: '/images/destinos/2.jpeg'

    },
    {
        id: 3,
        nombre: 'Bilbao',
        descripcion: '',
        imagen: '/images/destinos/3.jpeg'
    },
    {
        id: 4,
        nombre: 'Ibiza',
        descripcion: '',
        imagen: '/images/destinos/4.jpeg'

    },
    {
        id: 5,
        nombre: 'Valencia',
        descripcion: '',
        imagen: '/images/destinos/7.jpeg'
    },
    {
        id: 6,
        nombre: 'Sevilla',
        descripcion: '',
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
