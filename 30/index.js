const db = {
    search: function() {
        database.search();
        console.log("Szukam w bazie danych");
    }
};

function searchDb() {
    console.log("Otwieram połączenie");

    db.search();

    console.log("Zamykam połączenie");
}


try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połączenie");
}


// const data = JSON.parse('{"firstName": "Piotr"');

function parseJson(json) {
    try {
        return JSON.parse(json);
    } catch(e) {
        return null;
    }
}

const data = parseJson('{"firstName": "Piotr"}');

console.log(data);
