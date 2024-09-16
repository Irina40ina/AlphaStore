import locations from "@/data/locations";  


// Получение локаций с сервера (типо)
export async function fetchLocations() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(locations);
            }, 600);
        } catch (err) {
            console.error(import.meta.url + ':fetchLocations  => ', err);
            reject(err);
        }
    });
}