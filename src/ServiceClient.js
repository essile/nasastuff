const TodaysPhotoUrl = "https://api.nasa.gov/planetary/apod?api_key=mJBcNFN2GFabGmwER594dcB2Q1aucasNGUsdvo9t";
const apiAllUsersUrl = "http://localhost:60935/api/users"

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

export function newRegisteredUser(userObject, callback) {
    console.log("uutta rekisteröidään...");
    console.dir(userObject);
    return fetch(apiAllUsersUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userObject)
    })
    .then(function(response) {
        callback(response.status);
    });
}