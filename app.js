import { fectchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try{
    const todos = await fectchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    console.log(todos)
}catch(e){
    const alertElement = createElement('div',{
        class:'alert alert-danger m-2',
        role: 'alert'
    })

    alertElement.innerText='Impossible de charger les éléments'
    document.body.prepend(alertElement)
}
