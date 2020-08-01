const db = {
    search: function(query) {
        console.log(`Szukam w bazie danych frazy: ${query}`);
    }
};

function searchDb(query) {
    if(!query) {
        throw new Error("Nie podano frazy wyszukiwania!");
    }

    console.log("Otwieram połączenie");

    db.search(query);

    console.log("Zamykam połączenie");
}

try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połącznie");
}
