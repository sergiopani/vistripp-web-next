import style from '../styles/HomeBanner.module.scss';
import Image from 'next/image';
const HomeBanner = () => {
    return (
        <section className={style.home_banner}>
            <div className={style.oscuro}></div>
            <div className={style.content}>
                <h1>Vistripp</h1>
                <p>Experiencias sin ningún límite</p>
                <div className={style.buscador}>

                    <input type="text" placeholder="Busca tu destino..." />
                    <button>Search</button>
                </div>
            </div>


            <div className={style.contentBottom}>
                <div className={style.item}>
                    <Image src="/images/avion.svg" width={50} height={50} alt='Lo mejor' />
                    <p>Las mejores actividades</p>
                </div>

                <div className={style.item}>
                    <Image src="/images/avion.svg" width={50} height={50} alt='Lo mejor' />
                    <p>Atención al cliente 24/7</p>
                </div>

                <div className={style.item}>
                    <Image src="/images/avion.svg" width={50} height={50} alt='Lo mejor' />
                    <p>Miles de opiniones</p>
                </div>

                <div className={style.item}>
                    <Image src="/images/avion.svg" width={50} height={50} alt='Lo mejor' />
                    <p>Precios finales</p>
                </div>
            </div>


        </section>
    );
};

export default HomeBanner;
