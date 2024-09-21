import apartments from "@/data/apartments";  


// Получение всей недвижимости с сервера 
export async function fetchApts() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(apartments);
            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchApts  => ', err);
            reject(err);
        }
    });
}
// Получение недвижимости с сервера по типу
export async function fetchSelectedApts(selectedApts) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let result = apartments.filter(el => el.aptType === selectedApts);
                resolve(result);
            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchApts  => ', err);
            reject(err);
        }
    });
}


