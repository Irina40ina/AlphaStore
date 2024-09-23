import apartments from "@/data/apartments";  

// let ex = {
//     "aptType": [
//         "Квартира"
//     ],
//     "aptArea": [
//         "20",
//         "70"
//     ],
//     "roomCount": [
//         "1",
//         "2"
//     ],
//     "floor": [
//         "1",
//         "12"
//     ],
//     "totalFloor": [
//         "1",
//         "15"
//     ],
//     "hasElevator": "true",
//     "hasPark": "false",
//     "hasBalcony": "false",
//     "hasAllowChild": "true",
//     "hasAllowAnimals": "true",
//     "cost": [
//         "20000",
//         "120000"
//     ],
//     "country": "Россия",
//     "city": "Санкт-Петербург"
// }


// Получение всей недвижимости с сервера 
export async function fetchApts(params) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                // Фильтрация по ТИПУ апартамента
                function filterAptsByType(apts, aptType) {
                    if(Array.isArray(aptType) && aptType.length) {
                        return apts.filter((el) => aptType.includes(el.aptType));
                    }
                    else {
                        return apts;
                    }
                }
                // Фильтрация по Площади
                function filterAptsByArea(apts, aptArea) {
                    if(aptArea && Array.isArray(aptArea)) {
                        return apts.filter((el) => +aptArea[0] <= el.aptArea && el.aptArea <= +aptArea[1])
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по Количеству комнат
                function filterAptsByRoomCount(apts, roomCount) {
                    if(typeof roomCount === 'string') roomCount = [...roomCount];
                    if(Array.isArray(roomCount) && roomCount) {
                        return apts.filter((el) => {
                            return roomCount.includes(el.roomCount + '');
                        });
                    }                    
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по Требуемому Этажу
                function filterAptsByFloor(apts, floor) {
                    if(floor && Array.isArray(floor)) {
                        return apts.filter((el) => floor[0] <= el.floor && el.floor <= floor[1])
                    } 
                    else {
                        return apts;
                    }
                }  

                const filteredByType = filterAptsByType(apartments, params.aptType);
                const filteredByArea = filterAptsByArea(filteredByType, params.aptArea);
                const filteredAptsByRoomCount = filterAptsByRoomCount(filteredByArea, params.roomCount);
                const filteredAptsByFloor = filterAptsByFloor(filteredAptsByRoomCount, params.floor);
                
                console.log('FILTER', filteredAptsByFloor);
                resolve(filteredAptsByFloor);

                // let result = apartments.filter(el => params.aptType[0] === el.aptType);
                // console.log(params.roomCount)

                // result = Array.isArray(params.aptArea) && params.aptArea.length > 0
                // ? result.filter((el) => params.aptArea[0] <= el.aptArea && el.aptArea <= params.aptArea[1])
                // : result;

                // params.roomCount !== undefined
                // ? result.filter((el) => params.roomCount.includes(el.roomCount + '')) 
                // : result;
                // Array.isArray(params.floor) && params.floor.length > 0
                // ? result.filter((el) => params.floor[0] <= el.floor && el.floor <= params.floor[1])
                // : result;
                // Array.isArray(params.totalFloor) && params.totalFloor.length > 0
                // ? result.filter((el) => params.totalFloor[0] <= el.totalFloor && el.totalFloor <= params.totalFloor[1])
                // : result;
                // params.hasElevator !== null
                // ? result.filter((el) => el.hasElevator === stringToBoolean(params.hasElevator))
                // : result;
                // params.hasBalcony !== null
                // ? result.filter((el) => el.hasBalcony === stringToBoolean(params.hasBalcony))
                // : result;
                // params.hasPark !== null
                // ? result.filter((el) => el.hasPark === stringToBoolean(params.hasPark))
                // : result;
                // params.hasAllowChild !== null
                // ? result.filter((el) => el.hasAllowChild === stringToBoolean(params.hasAllowChild))
                // : result;
                // params.hasAllowAnimals !== null
                // ? result.filter((el) => el.hasAllowAnimals === stringToBoolean(params.hasAllowAnimals))
                // : result;
                // Array.isArray(params.cost) && params.cost.length > 0
                // ? result.filter((el) => params.cost[0] <= el.cost && el.cost <= params.cost[1])
                // : result;
                // params.country !== undefined
                // ? result.filter((el) => params.country[0] === el.country)
                // : result;
                // params.city !== undefined
                // ? result.filter((el) => params.city[0] === el.city)
                // : result;

                // console.log(result)

            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchApts  => ', err);
            reject(err);
        }
    });
}

function stringToBoolean(str) {
    return str === 'true';
}

// // 1-ый фильтр Тип жилья
// let result = apartments.filter(el => params.aptType.includes(el.aptType));
// // 2-ой фильтр Лифт
// result
//     .filter(el => el.hasElevator == params.hasElevator)
//     .filter(el => el.hasBalcony == params.hasBalcony)
//     .filter(el => el.hasPark == params.hasPark);


