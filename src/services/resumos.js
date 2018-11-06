import { URL_API } from "./base";
 
export function consultarResumos(){
    return fetch(`${URL_API}/resumo`)
    	.then(resultado => resultado.json());
}