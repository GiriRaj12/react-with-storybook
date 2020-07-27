
const payload  = {
    method:'POST',
    mode: 'cors',
    headers:{'Content-Type':'application/json'}
}

const url = "http://localhost:8080";

export function get(extension, params){
    return fetch(formURL(extension,params))
            .then(res => res.json());
}

export function post(extension, body){
    payload.body = body;
    return fetch(formURL(extension), payload)
    .then(res => res.json());
}

export function put(extension, body, params){
    payload.body = body;
    return fetch(formURL(extension,params),payload)
        .then(res => res.json());
}

export function del(extension, params){
    return fetch(formURL(extension,params))
        .then(res => res.json());
}

function formURL(extension, params){
    return url+extension+getUnitedParams(params);
}

function getUnitedParams(params){
    let resultStr = String('');
    if(params){
        let i = 0;
        for(let key in params){
            if(i === 0){
                resultStr = resultStr + "?"+ key +"="+ params[key];
            }
            else{
                resultStr = resultStr + "&" + key +"="+ params[key];
            }
            i++;
        }
    }
    return resultStr;
}

