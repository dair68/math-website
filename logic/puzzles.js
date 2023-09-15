const rows = document.getElementsByClassName("puzzle-row");

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const puzzle = row.children[1].innerHTML;
    row.onclick = () => {console.log("fetching \"" + puzzle + "\" puzzle!")};
}