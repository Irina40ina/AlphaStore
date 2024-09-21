import apartments from "@/data/apartments";  


// Получение всей недвижимости с сервера 
export async function fetchApts(params) {
    return new Promise((resolve, reject) => {
        // function filterByKey(array, key) {
        //     array.filter((el) =>  == key)
        //     return array;
        // }
        try {
            setTimeout(() => {
                // 1-ый фильтр Тип жилья
                let result = apartments.filter(el => params.aptType.includes(el.aptType));
                // 2-ой фильтр Лифт
                result
                    .filter(el => el.hasElevator == params.hasElevator)
                    .filter(el => el.hasBalcony == params.hasBalcony)
                    .filter(el => el.hasPark == params.hasPark);
                resolve(result);
            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchApts  => ', err);
            reject(err);
        }
    });
}



