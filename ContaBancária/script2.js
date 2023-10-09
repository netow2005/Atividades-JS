function verExtrato() {
    const numeroConta = document.getElementById("numeroContaExtrato").value;

    if (!numeroConta) {
        alert("Informe o número da conta.");
    } else {
      
        const extratoLista = document.getElementById("extratoLista");
        extratoLista.innerHTML = "";

       
        const historicoDeSaldo = [
            { data: "01/01/2023", saldo: 1000 },
            { data: "02/01/2023", saldo: 800 },
            { data: "03/01/2023", saldo: 1200 },
        ];

        for (const entrada of historicoDeSaldo) {
            const itemSaldo = document.createElement("li");
            itemSaldo.textContent = `Data: ${entrada.data}, Saldo: R$ ${entrada.saldo.toFixed(2)}`;
            extratoLista.appendChild(itemSaldo);
        }
    }
}


const ctx1 = document.getElementById("grafico1").getContext("2d");
new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["Categoria A", "Categoria B", "Categoria C"],
        datasets: [{
            label: "Gráfico de Barras 1",
            data: [10, 20, 30],
            backgroundColor: ["red", "green", "blue"],
        }],
    },
});


const ctx2 = document.getElementById("grafico2").getContext("2d");
new Chart(ctx2, {
    type: "pie",
    data: {
        labels: ["Categoria X", "Categoria Y", "Categoria Z"],
        datasets: [{
            data: [40, 30, 20],
            backgroundColor: ["orange", "purple", "pink"],
        }],
    },
});


const ctx3 = document.getElementById("grafico3").getContext("2d");
new Chart(ctx3, {
    type: "line",
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        datasets: [{
            label: "Gráfico de Linha 1",
            data: [10, 20, 15, 30, 25],
            borderColor: "blue",
            fill: false,
        }],
    },
});





document.getElementById("extratoButton").addEventListener("click", verExtrato);