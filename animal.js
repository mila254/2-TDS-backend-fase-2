const animal = {
    nome: "tom" , //string
    especie: "Cachorro",
    idade: 2, //number
    tutor: false,
    vacinado: true
};

console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 2;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com a idade ${animal.idade} e possui sua vacina em dia(${animal.vacinado}).`);
