import {setupWorker} from 'msw';
import {handlers} from './mocks/handlers';

class MSWSwitcher {

}

console.log('fuck');

export const worker = setupWorker(...handlers);
worker.start();

window.msw = {
    worker,
}

fetch('/user').then(res => res.json()).then(res => console.log(res));


console.log(window.msw);

setTimeout(()=>{
    console.log(window.msw);
},1000)



