//declare an empty variable for useMoods()
let moods = []

//export getMoods function
export const getMoods = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/moods')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (moods)
        .then(parsedMoods => {
            moods = parsedMoods
        })

}

//export function to return moods.slice()
export const useMoods = () => moods.slice();