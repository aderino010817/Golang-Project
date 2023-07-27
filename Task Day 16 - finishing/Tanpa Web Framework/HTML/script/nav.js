let condition = false

function bukacok() {
    let ulbuka = document.getElementById("ulbuka");
    if (!condition) {
        ulbuka.style.display = "flex";
        condition = true;
        console.log(condition)
    } else {
        ulbuka.style.display = "none";
        condition = false;
        console.log(condition)
    }
}