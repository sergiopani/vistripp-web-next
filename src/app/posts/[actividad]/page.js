'use client'
import 'styles/global.scss';

import { getAllActividades } from "../../lib/cms";
import { useParams } from 'next/navigation';
import style from '../../../../styles/actividad.module.scss';
import Image from 'next/image';
const page = async () => {

    //cojer el id de la url

    const { actividad } = useParams();


    const actividades = await getAllActividades(actividad);

    return (
        <div className={style.actividad_container}>

            {
                actividades.map(actividad => {
                    return (
                        <div key={actividad.id} className={style.actividad}>
                            <h1>{actividad.title}</h1>
                            <p>{actividad.descripcion}</p>
                            <Image src={actividad.imagen} alt={actividad.title}
                                width={400} height={250} />
                            {
                                actividad.puntos.map(punto => {
                                    return (
                                        <div key={punto.title}>
                                            <h2>{punto.title}</h2>
                                            <p>{punto.descripcion}</p>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                }
                )
            }
        </div>
    )
}



export default page