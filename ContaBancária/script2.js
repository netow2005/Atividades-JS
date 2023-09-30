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

document.getElementById("extratoButton").addEventListener("click", verExtrato);