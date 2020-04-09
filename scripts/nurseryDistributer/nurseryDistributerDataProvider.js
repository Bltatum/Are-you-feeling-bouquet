let nurseryDistributer = [] 

export const getNurseryDistributer =()=>{
    return fetch('http://localhost:8088/nurseryDistributer')
    .then(res => res.json())
    .then(parsed => {
        nurseryDistributer = parsed
    })
}

export const useNurseryDistributer =()=> nurseryDistributer.slice()