const container = document.getElementById("questions");

const scale = [
"Totalmente en desacuerdo",
"En desacuerdo",
"Neutral",
"De acuerdo",
"Totalmente de acuerdo"
];

questions.forEach(q => {

const div = document.createElement("div");
div.classList.add("question");

div.innerHTML = `
<p>${q.id}. ${q.text}</p>

<div class="options">

${scale.map((label,index)=>`
<label>
<input type="radio"
name="q${q.id}"
value="${index+1}"
required>
<br>
${label}
</label>
`).join("")}

</div>
`;

container.appendChild(div);

});

document.getElementById("testForm")
.addEventListener("submit", function(e){

e.preventDefault();

let total = 0;

questions.forEach(q=>{

const response =
document.querySelector(`input[name="q${q.id}"]:checked`);

let value = parseInt(response.value);

if(q.reverse){
value = 6 - value;
}

total += value;

});

let level = "";

if(total <= 14){
level = "Estrés parental bajo";
}
else if(total <= 24){
level = "Estrés parental moderado";
}
else{
level = "Estrés parental alto";
}

alert(`
Puntaje total: ${total}

Resultado:
${level}
`);

});
