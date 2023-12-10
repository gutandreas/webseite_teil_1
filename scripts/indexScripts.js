function ladeWeisheit(){
    console.log("Button wurde gedrückt")
    let element = document.getElementById("weisheitsParagraph")

    let arrayMitWeisheiten = ["Wer den Rappen nicht ehrt, ist den Franken nicht wert...",
        "Innovation ist der Treibstoff für langfristiges Wachstum.",
        "Vertrauen ist die Währung der Wirtschaft.",
        "Geld allein macht nicht glücklich, aber es beruhigt die Nerven.",
        "Das Geheimnis des Wohlstands liegt nicht im Besitz, sondern im Geben."]

    let zufallszahl = getRandomInteger(0, arrayMitWeisheiten.length)

    element.innerText = arrayMitWeisheiten[zufallszahl]
}

function getRandomInteger(lowerBound, upperBound){
    randomInteger = Math.floor(Math.random() * upperBound + lowerBound)
    return randomInteger
}

function findePassendeKandidaten(){

    let kandidatenliste = []

    // Daten Peter Müsli
    let minJahresEinkommenMuesli = 100000
    let minFerienMuesli = 6
    let autoMuesli = true
    let eigenesBueroMuesli = false
    let jahresarbeitszeitMuesli = true

    // Daten Petra Katzmann
    let minJahresEinkommenKatzmann = 120000
    let minFerienKatzmann = 5
    let autoKatzmann = false
    let eigenesBueroKatzmann = true
    let jahresarbeitszeitKatzmann = true

    // Daten Klaus Hund
    let minJahresEinkommenHund = 80000
    let minFerienHund = 6
    let autoHund = true
    let eigenesBueroHund = false
    let jahresarbeitszeitHund = false

    // Auswertung Peter Müsli
    if (document.getElementById("jahreseinkommen").value > minJahresEinkommenMuesli
        && document.getElementById("ferienwochen").value > minFerienMuesli
        && (autoMuesli == false || document.getElementById("auto").checked)
        && (eigenesBueroMuesli == false || document.getElementById("buero").checked)
        && (jahresarbeitszeitMuesli == false || document.getElementById("jahresarbeitszeit").checked)){
        kandidatenliste.push("Peter Müsli")
    }

    // Auswertung Petra Katzmann
    if (document.getElementById("jahreseinkommen").value > minJahresEinkommenKatzmann
        && document.getElementById("ferienwochen").value > minFerienKatzmann
        && (autoKatzmann == false || document.getElementById("auto").checked)
        && (eigenesBueroKatzmann == false || document.getElementById("buero").checked)
        && (jahresarbeitszeitKatzmann == false || document.getElementById("jahresarbeitszeit").checked)){
        kandidatenliste.push("Petra Katzmann")
    }

    // Auswertung Klaus Hund
    if (document.getElementById("jahreseinkommen").value > minJahresEinkommenHund
        && document.getElementById("ferienwochen").value > minFerienHund
        && (autoHund == false || document.getElementById("auto").checked)
        && (eigenesBueroHund == false || document.getElementById("buero").checked)
        && (jahresarbeitszeitHund == false || document.getElementById("jahresarbeitszeit").checked)){
        kandidatenliste.push("Klaus Hund")
    }

    // Anzeige
    document.getElementById("passendeKandidaten").innerText = kandidatenliste.join(", ")
}