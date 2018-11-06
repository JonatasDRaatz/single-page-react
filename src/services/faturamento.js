import { URL_API } from "./base";
 
export function consultarFaturamentos(){
    return fetch(`${URL_API}/faturamento`)
    	.then(resultado => resultado.json());
}