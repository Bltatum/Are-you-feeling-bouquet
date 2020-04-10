let nurseryFlowers = [] 

export const getNurseryFlowers=()=>{
    return fetch('http://localhost:8088/nurseryFlowers')
    .then(res => res.json())
    .then(parsed => {
        nurseryFlowers= parsed
    })
}

export const useNurseryFlowers=()=> nurseryFlowers.slice()