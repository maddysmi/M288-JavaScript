/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let model = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
//Foto
    let htmlObj = document.getElementById("foto");
    htmlObj.src =
    `${model.foto.img}`;

//Name
    htmlObj = document.getElementById("name");
    htmlObj.innerHTML =
        `Vorname: ${model.name.firstname}<br>`+
        `Nachname: ${model.name.lastname}<br>`+
        `Alter: ${model.name.age}`;

//Hobbies
htmlObj = document.getElementById("hobbies");
htmlObj.innerHTML =
    `${model.hobbies.one}<br>`+
    `${model.hobbies.two}<br>`+
    `${model.hobbies.three}<br>`+
    `${model.hobbies.four}`;

    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (lernendenListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    model = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    model = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (model === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    model = lernendenListe[index];
    //zeige den Eintrag
    showUI();
}