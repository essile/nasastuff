const TodaysPhotoUrl = "https://api.nasa.gov/planetary/apod?api_key=mJBcNFN2GFabGmwER594dcB2Q1aucasNGUsdvo9t";

export function TodayfromNasa(callback) {
    fetch(TodaysPhotoUrl)
        .then(function (response) {
            if (!response.ok) {
                const errorviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "No valid content found from Nasa database"
                };
                throw errorviesti;
            }
            return response.json();
        })
        .then(function (list) {
            callback(list);
        });
}

export function ArchivedfromNasa(date, callback) {
    console.log("haloo");
    // fetch(TodaysPhotoUrl+"&date=2018-10-26")
    fetch(TodaysPhotoUrl + "&date=" + date)
        .then(function (response) {
            if (!response.ok) {
                const errorMessage = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "No valid content found from Nasa database"
                };
                throw errorMessage;
            }
            return response.json();
        })
        .then(function (list) {
            callback(list);
        });
}