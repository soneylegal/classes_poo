function Motor(potencia, tipo) {
    this.potencia = potencia;
    this.tipo = tipo;
}

function Carro(cor, modelo, velocidadeMaxima, motor) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
    let _velocidadeMaxima = velocidadeMaxima;
    this.motor = motor;

    this.liga = function () {
        console.log(`O carro está ligado. Motor: ${this.motor.tipo}`);
    };

    this.acelera = function (quantidade) {
        this.velocidadeAtual += quantidade;
        if (this.velocidadeAtual > _velocidadeMaxima) {
            this.velocidadeAtual = _velocidadeMaxima;
        }
        console.log(`Velocidade atual: ${this.velocidadeAtual} km/h`);
    };

    this.informaMarcha = function () {
        if (this.velocidadeAtual < 0) {
            return -1;
        } else if (this.velocidadeAtual <= 39) {
            return 1;
        } else if (this.velocidadeAtual <= 79) {
            return 2;
        } else {
            return 3;
        }
    };

    this.verificaVelocidade = function () {
        if (this.velocidadeAtual > _velocidadeMaxima) {
            console.log("Atenção: Velocidade máxima excedida!");
        } else {
            console.log("Velocidade dentro do limite.");
        }
    };

    this.getVelocidadeMaxima = function () {
        return _velocidadeMaxima;
    };

    this.setVelocidadeMaxima = function (novaVelocidadeMaxima) {
        if (novaVelocidadeMaxima > 0) {
            _velocidadeMaxima = novaVelocidadeMaxima;
        }
    };
}


const motorV8 = new Motor(450, "V8");
const carroEsportivo = new Carro("Vermelho", "Ferrari", 300, motorV8);
carroEsportivo.liga();
carroEsportivo.acelera(50);
console.log(`Marcha atual: ${carroEsportivo.informaMarcha()}`);
carroEsportivo.acelera(100);
console.log(`Marcha atual: ${carroEsportivo.informaMarcha()}`);

const motorGasolina = new Motor(150, "Gasolina");
const fusca = new Carro("Verde", "Fusca", 80, motorGasolina);
console.log(`Carro: ${fusca.cor}, ${fusca.modelo}`);
console.log(`Velocidade Atual: ${fusca.velocidadeAtual}`);
console.log(`Velocidade Máxima: ${fusca.getVelocidadeMaxima()}`);
console.log(`Motor: ${fusca.motor.potencia}, ${fusca.motor.tipo}`);

fusca.liga();
fusca.acelera(20);
console.log(`Velocidade Atual do Fusca: ${fusca.velocidadeAtual}`);
console.log(`Marcha Atual: ${fusca.informaMarcha()}`);
fusca.acelera(30);
console.log(`Marcha Atual após aceleração: ${fusca.informaMarcha()}`);
fusca.acelera(40);
console.log(`Marcha Atual após aceleração máxima: ${fusca.informaMarcha()}`);

const motorEletrico = new Motor(200, "Elétrico");
const carroEletrico = new Carro("Azul", "Tesla", 150, motorEletrico);

carroEletrico.liga();
carroEletrico.acelera(50);
console.log(`Marcha Atual: ${carroEletrico.informaMarcha()}`);
carroEletrico.acelera(120);
console.log(`Velocidade Atual: ${carroEletrico.velocidadeAtual}`);
carroEletrico.verificaVelocidade();
