let distributers = [] 

export const getDistributers =()=>{
    return fetch('http://localhost:8088/distributers')
    .then(res => res.json())
    .then(parsed => {
        distributers = parsed
    })
}

export const useDistributers =()=> distributers.slice()