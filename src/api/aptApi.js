import apartments from "@/data/apartments";  


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
                    if(aptArea && Array.isArray(aptArea) && aptArea.length > 0) {
                        return apts.filter((el) => +aptArea[0] <= el.aptArea && el.aptArea <= +aptArea[1])
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по Количеству комнат
                function filterAptsByRoomCount(apts, roomCount) {
                    if(typeof roomCount === 'string') roomCount = [...roomCount];
                    if(Array.isArray(roomCount) && roomCount && roomCount.length > 0) {
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
                    if(floor && Array.isArray(floor) && floor.length > 0) {
                        return apts.filter((el) => floor[0] <= el.floor && el.floor <= floor[1])
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по этажности дома
                function filterAptsByTotalFloor(apts, floor) {
                    if(floor && Array.isArray(floor) && floor.length > 0) {
                        return apts.filter((el) => floor[0] <= el.floor && el.floor <= floor[1])
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по лифту
                function filterAptsByElevator(apts, hasElevator) {
                    if(hasElevator && hasElevator !== null) {
                        return apts.filter((el) => el.hasElevator === stringToBoolean(hasElevator))
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по балкону
                function filterAptsByBalcony(apts, hasBalcony) {
                    if(hasBalcony && hasBalcony !== null) {
                        return apts.filter((el) => el.hasBalcony === stringToBoolean(hasBalcony))
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по парковке
                function filterAptsByPark(apts, hasPark) {
                    if(hasPark && hasPark !== null) {
                        return apts.filter((el) => el.hasPark === stringToBoolean(hasPark))
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по детям
                function filterAptsByAllowChild(apts, hasAllowChild) {
                    if(hasAllowChild && hasAllowChild !== null) {
                        return apts.filter((el) => el.hasAllowChild === stringToBoolean(hasAllowChild))
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по животным
                function filterAptsByAllowAnimals(apts, hasAllowAnimals) {
                    if(hasAllowAnimals && hasAllowAnimals !== null) {
                        return apts.filter((el) => el.hasAllowAnimals === stringToBoolean(hasAllowAnimals))
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по стоимости
                function filterAptsByCost(apts, cost) {
                    if(cost && Array.isArray(cost) && cost.length > 0) {
                        return apts.filter((el) => cost[0] <= el.cost && el.cost <= cost[1])
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по стране
                function filterAptsByCountry(apts, country) {
                    if(country && country !== '') {
                        return apts.filter((el) => el.country === country)
                    } 
                    else {
                        return apts;
                    }
                }  
                // Фильтрация по городу
                function filterAptsByCity(apts, city) {
                    if(city && city !== '') {
                        return apts.filter((el) => el.city === city)
                    } 
                    else {
                        return apts;
                    }
                }  
                
                const filteredByType = filterAptsByType(apartments, params.aptType);
                const filteredByArea = filterAptsByArea(filteredByType, params.aptArea);
                const filteredAptsByRoomCount = filterAptsByRoomCount(filteredByArea, params.roomCount);
                const filteredAptsByFloor = filterAptsByFloor(filteredAptsByRoomCount, params.floor);
                const filteredAptsByTotalFloor = filterAptsByTotalFloor(filteredAptsByFloor, params.totalFloor);
                const filteredAptsByElevator = filterAptsByElevator(filteredAptsByTotalFloor, params.hasElevator);
                const filteredAptsByBalcony = filterAptsByBalcony(filteredAptsByElevator, params.hasBalcony);
                const filteredAptsByPark = filterAptsByPark(filteredAptsByBalcony, params.hasPark);
                const filteredAptsByAllowChild = filterAptsByAllowChild(filteredAptsByPark, params.hasAllowChild);
                const filteredAptsByAllowAnimals = filterAptsByAllowAnimals(filteredAptsByAllowChild, params.hasAllowAnimals);
                const filteredAptsByCost = filterAptsByCost(filteredAptsByAllowAnimals, params.cost);
                const filteredAptsByCountry = filterAptsByCountry(filteredAptsByCost, params.country);
                const filteredAptsByCity = filterAptsByCity(filteredAptsByCountry, params.city);
                
                // console.log('FILTER', filteredAptsByCity);
                resolve(filteredAptsByCity);

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


