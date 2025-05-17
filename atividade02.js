/* **Objetivo:**
Praticar a criação de variáveis com diferentes tipos de dados e exibir suas informações no console utilizando 
`typeof` e concatenação de `strings`*/


/*1°) Crie uma variável para cada um dos tipos de dados listados abaixo e exiba o tipo de cada uma no console.

✅ **`String**` (texto)

✅ **`Number**` (número)

✅ **`Boolean**` (verdadeiro ou falso)

✅ **`Array**` (lista de elementos)

✅ **Objeto** (estrutura que contém várias informações) */


// string//
var nome= 'sabrina';

// number//
var idade= 22

//boolean//
var developer= true;

//array//
var jogos= ['valorant', 'minecraft',' clash royale'];

//objeto//
var endereco ={
    cidade: 'sao luis',
    estado: 'Maranhao'
};

console.log( typeof nome, idade, developer, jogos, endereco);





/* 2°) Agora, utilize typeof para verificar o tipo de cada variável e exibir no console: */

console.log( typeof nome);
console.log( typeof idade);
console.log( typeof developer);
console.log( typeof jogos);
console.log( typeof endereco);



/* 3°) Agora, crie duas variáveis:

✅ **Nome** (tipo `string`)

✅ **Idade** (tipo `number`)

Depois, exiba a seguinte mensagem no console:

📝 **"Olá, eu me chamo [nome] e tenho [idade] anos."** */

let meuNome= 'sabrina';
let minhaIdade= 22;

console.log(` Olá, eu me chamo ${meuNome} e tenho ${minhaIdade} anos`);



/* ### **Desafio Extra:**

📌 **Modifique o código para que o nome sempre seja exibido em letras maiúsculas.**

💡 **Dica:** Utilize `.toUpperCase()` para converter o texto: */


console.log(` Olá, eu me chamo ${meuNome.toUpperCase()} e tenho ${minhaIdade} anos`);
