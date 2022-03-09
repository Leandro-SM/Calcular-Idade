window.onload = () => {
    var botaoCalcular = document.getElementById("calcularIdade");
    botaoCalcular.addEventListener("click", calcularIdade, false);
};

function calcularIdade(){
    var dataNascimento = document.querySelector("#dataNascimento").value;

    if(!dataNascimento){
        alert("Insira a Data de Nascimento");
        return;
    }

    var hoje = new Date();
    var dataNascimento = new Date(dataNascimento);

    var idade = hoje.getFullYear() - dataNascimento.getFullYear();

    if( ((hoje.getMonth() + "" + hoje.getDate()) * 1) <=
        ((dataNascimento.getMonth() + "" + dataNascimento.getDate()) * 1) ) {
            idade = idade - 1;
        }

        document.querySelector(".apresentarIdade").innerHTML = "<p><b>Você tem: </b>" + idade + " anos </p>";
}