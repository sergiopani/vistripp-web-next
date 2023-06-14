import { actividades } from "./actividades";




const delay = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(1)
        }
        ), time;
    })
}


const getAllActividades = async (id) => {

    await delay(1000)


    return actividades.filter(actividad => actividad.id == id);
}
export {
    getAllActividades
};