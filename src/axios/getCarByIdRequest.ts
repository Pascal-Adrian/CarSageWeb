import axiosService from "./axios";

export const getCarByIdRequest = async (id: string) => {
    try {
        const response = await axiosService.get(`/car/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};