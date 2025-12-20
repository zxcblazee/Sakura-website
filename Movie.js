
const header = document.createElement("h1");
header.textContent = "Введите фильм, который вас интересует";
document.body.appendChild(header);


const inputTitle = document.createElement("input");
inputTitle.type = "text";
inputTitle.placeholder = "Название";
document.body.appendChild(inputTitle);


const inputYear = document.createElement("input");
inputYear.type = "text";
inputYear.placeholder = "Год";
document.body.appendChild(inputYear);


const inputActors = document.createElement("input");
inputActors.type = "text";
inputActors.placeholder = "Герой";
document.body.appendChild(inputActors);


const button = document.createElement("button");
button.textContent = "ОК";
document.body.appendChild(button);


const table = document.createElement("table");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>Название</th><th>Год</th><th>Главные герои</th>";
table.appendChild(headerRow);
document.body.appendChild(table);


button.addEventListener("click", () => {
    const title = inputTitle.value.trim();
    const year = inputYear.value.trim();
    const actors = inputActors.value.trim();

    if (title === "" || year === "" || actors === "") return;

    const row = document.createElement("tr");
    row.innerHTML = `<td>${title}</td><td>${year}</td><td>${actors}</td>`;
    table.appendChild(row);

    
    inputTitle.value = "";
    inputYear.value = "";
    inputActors.value = "";
});