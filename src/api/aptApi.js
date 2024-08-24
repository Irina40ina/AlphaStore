import apartments from "@/data/apartments";  


// Получение квартир с сервера (типо)
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
