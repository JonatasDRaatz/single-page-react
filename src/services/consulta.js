import { URL_API } from "./base";
 
export function listarConsultas(){
    return fetch(`${URL_API}/consulta`)
    	.then(resultado => resultado.json());
}