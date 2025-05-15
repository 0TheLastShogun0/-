class Patient {
    constructor (f, i, o, d, s, sh) {
this.F = f;
this.I = i;
this.O = o;
this.D = new Date(d);
this.S = s;
this.SH = sh;
    }
    setById () {
        document.getElementById("F").textContent =this.F;
        document.getElementById("I").textContent =this.I;
        document.getElementById("O").textContent =this.O;
        document.getElementById("Y").textContent =this.D.getFullYear();
        document.getElementById("S").textContent =this.S;
        document.getElementById("SH").textContent =this.SH;
    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
Ivanov.setById();
let Petrow = new Patient('Петров', 'Иван', 'Иванович', new Date(1981, 9, 11), "м", "Назначено");
Petrow.setById();
let Sidorow = new Patient('Сидоров', 'Иван', 'Иванович', new Date(1982, 9, 11), "м", "Назначено");
Sidorow.setById();