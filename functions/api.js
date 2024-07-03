export async function fectchJSON(url, options={}){
    const headers = {Accept:'application/json', ...options.headers}
    const resp = await fetch(url, {...options, headers})
    if(resp.ok){
        return resp.json()
    }
    throw new Error ('Erreur serveur', {cause: resp})
}