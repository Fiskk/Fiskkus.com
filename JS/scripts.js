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

function RunNoteGenertor(delay, iterations) {
  let Notes = ('E','F','F#','G','G#','A','A#','B','C','C#','D','D#');
  let String = ('E-String', 'A-String');

  let SecondBetweenNotes = ;
  let Iterations = 20;


}
