import Promise, { config, resolve, reject } from 'bluebird';
import Config from '../config';
import axios from 'axios';
export class APIService{
    constructor(){  }

    public giveMeAllDishes(dishType, query) : Promise<object>{
        if(dishType == null || query == null){
            let promise  = new Promise((resolve,reject) =>{
                axios.get(Config.API_BASE_URL,{method : 'GET',headers:{'X-Mashape-Key': Config.API_KEY}})
                    .then(function(response){
                        console.log(response);
                        resolve(response);
                    })
                    .catch(function(err){
                        reject(err);
                    })
            })
        }
    }
}
