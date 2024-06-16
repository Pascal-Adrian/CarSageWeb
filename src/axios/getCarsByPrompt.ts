import axiosService from "./axios";

export const getCarsByPrompt = async (prompt: string) => {
    console.log(prompt);
    try {
        const response = await axiosService.post(`/car/ai?prompt=${prompt}`);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}