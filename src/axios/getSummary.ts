import axiosService from "./axios";

export const getSummary = async () => {
    try
     {
        const response = await axiosService.get(`/cars/summary`);
        console.log(response.data);
        return response.data;
     }
    catch (error) {
        console.error(error);
    }
};