import axiosService from "./axios";

interface filters {
    make?: string;
    bodytype?: string;
    state?: string;
    model?: string;
    fuel?: string;
    min_price?: number;
    max_price?: number;
    min_power?: number;
    max_power?: number;
    gearbox?: string;
    color?: string;
    upholstery?: string;    
    traction?: string;
    min_grade?: number;
    max_grade?: number;
    skip?: number;
    limit?: number;
}

export const getCarsByFilters = async (filters: filters) => {
    try {
        const response = await axiosService.get(`/cars`, { params: filters });
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};