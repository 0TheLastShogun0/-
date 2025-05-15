var person = {
    "Snils 1" : ["Бородина", "Камила", "Дмитриевная", 1, "апреля", 2005, "ж", "исполнено"],
    "Snils 2" : ["Новосельский", "Константин", "Александрович", 6, "сентября", 2002, "м", "методвод"],
    "Snils 3" : ["Новосельский", "Павел", "Александрович", 22, "март", 2005, "м", "назначена"],
};
console.log(person);

/*Snils4="Snils 4"
let lastname;
       lastname=prompt("Введите имя пациента", lastname);
       // console.log(lastname);
       infoPazient[0]= lastname;
       console.log(infoPazient);
       let firstname ;
       firstname=prompt("Введите фамилию пациента",firstname);
      //  console.log(firstname);
       infoPazient[1]= firstname;
       console.log(infoPazient);
       let middlename;
       middlename=prompt("Введите отчество пациента", middlename);
       // console.log(middlename);
       infoPazient[2]= middlename;
       console.log(infoPazient);
       let date;
       date=prompt("Введите день рожения пациента", date);
       // console.log(date);
       infoPazient[3]= date;
       console.log(infoPazient);
       let month;
       month=prompt("Введите месяц рожения пациента", month);
       // console.log(month);
       infoPazient[4]= month;
       console.log(infoPazient);
       let year;
       year=prompt("Введите год рожения пациента", year);
       // console.log(year);
       infoPazient[4]= year;
       console.log(infoPazient);
       let gender;
       gender=prompt("Введите пол пациента", gender);
       // console.log(gender);
       infoPazient[5]= gender;
       console.log(infoPazient);
console.log(person); */
let Snils;
var FirstFunction = function (person,Snils) {
Snils=prompt("Введите Snils пациента", Snils);
infoname=person[Snils];
//console.log(infoname);
alert("Информация о пациенте"+ infoname);
statusPrive = person [Snils][7];
console.log(statusPrive);
};
/* let phase;
phase=prompt("Введите действие или медотвод или назначено или исполнено", phase);
infoname.push(phase);
console.log(infoname);
person[Snils]=infoname;
console.log(person);*/
 SecondsFunction = function (statusPrive, infoname) {
if (statusPrive === "исполнено"){
    alert("Отказ в прививке"+ infoname);
} else if (statusPrive === "методвод") {
    alert("Отказ в прививке" + infoname);
} else {
    alert("Исполнить прививку" + infoname)
}
}
ForSeconds = FirstFunction(person, Snils);
SecondsFunction(statusPrive, infoname);

while (confirm("Продолжить проверку прививочного статуса?")) {
ForSeconds = FirstFunction(person, Snils);
SecondsFunction(statusPrive, infoname);
}

console.log("Сеанс проверки прививочного статуса закончен")