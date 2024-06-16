import { API } from './api.js';


export async function getAllIngredientes() {
    try {
        const response = await fetch(`${API}/ingredientes/alling`);
        if (!response.ok) {
            throw new Error('Error al obtener los ingredientes');
        }
        const ingredientes = await response.json();
        return ingredientes;
    } catch (error) {
        console.error(error);
        return [];
    }
}