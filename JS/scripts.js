function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

function toggleTable() {
    var lTable = document.getElementById("climbs");
    lTable.style.display = (lTable.style.display === "table") ? "none" : "table";
}
