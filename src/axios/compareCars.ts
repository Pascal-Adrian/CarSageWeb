import axiosService from "./axios";

export const compareCars = async (car1: string, car2: string) => {
    try {
        const response = await axiosService.get(`/cars/compare?car1=${car1}&car2=${car2}`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};