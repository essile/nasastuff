const TodaysPhotoUrl = "https://api.nasa.gov/planetary/apod?api_key=mJBcNFN2GFabGmwER594dcB2Q1aucasNGUsdvo9t";

export function TodayfromNasa(callback) {
    // fetch(TodaysPhotoUrl+"&date=2018-10-26")
    fetch(TodaysPhotoUrl)
    .then(function (response) {
        if (!response.ok) {
            const errorviesti = {
                status: response.status,
                statusText: response.statusText,
                viesti: "Getting data from Nasa"
            };
            throw errorviesti;
        }
        return response.json();
    })
    .then(function (lista) {
        callback(lista);
    });
}