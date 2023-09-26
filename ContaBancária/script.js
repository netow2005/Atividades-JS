class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else if (valor > 500 && this.tipo === "Conta Universitária") {
            console.log("Limite de saque excedido para Conta Universitária (Limite: R$ 500).");
            return false;
        }
        return false;
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (tipo === "Conta Corrente") {
        const cartaoCredito = parseFloat(prompt("Informe o limite do cartão de crédito:"));
        const conta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
        contas.push(conta);
    } else if (tipo === "Conta Poupança") {
        const conta = new ContaPoupanca(agencia, numero, saldo);
        contas.push(conta);
    } else if (tipo === "Conta Universitária") {
        const conta = new ContaUniversitaria(agencia, numero, saldo);
        contas.push(conta);
    }

    document.getElementById("agencia").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("saldo").value = "";
}

function sacarConta() {
    const numeroConta = document.getElementById("numeroConta").value;
    const valorSaque = parseFloat(document.getElementById("valorSaque").value);

    const conta = contas.find(c => c.numero === numeroConta);

    if (conta) {
        if (conta.sacar(valorSaque)) {
            alert("Saque realizado com sucesso.");
        } else {
            if (conta.tipo === "Conta Universitária" && valorSaque > 500) {
                alert("Limite de saque excedido para Conta Universitária (Limite: R$ 500).");
            } else {
                alert("Saldo insuficiente para o saque.");
            }
        }
    } else {
        alert("Conta não encontrada.");
    }

    document.getElementById("numeroConta").value = "";
    document.getElementById("valorSaque").value = "";
}

function visualizarContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    for (const conta of contas) {
        const item = document.createElement("li");
        item.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: ${conta.saldo}`;
        listaContas.appendChild(item);
    }
}

document.getElementById("inserirButton").addEventListener("click", inserirConta);
document.getElementById("visualizarButton").addEventListener("click", visualizarContas);
document.getElementById("sacarButton").addEventListener("click", sacarConta);
