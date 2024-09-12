import locations from "@/data/locations";  


// Получение квартир с сервера (типо)
export async function fetchLocations() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(locations);
            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchApts  => ', err);
            reject(err);
        }
    });
}