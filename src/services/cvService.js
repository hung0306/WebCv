import { del, get, patch, post } from "../utils/request";

export const createCv = async (option) => {
    const result = await post(`cvs`, option);
    return result;
}
export const getListCv = async (id) => {
    const result = await get(`cvs?idCompany=${id}`);
    return result;
}
export const getDetailCv = async (id) => {
    const result = await get(`cvs/${id}`);
    return result;
}
export const deleteCv = async (id) => {
    const result = await del(`cvs/${id}`);
    return result;
}

export const changeSttCv = async (id, options) => {
    const result = await patch(`cvs/${id}`, options);
    return result;
}