function greet(){
    console.log("Hello");
}
greet();

let logGreeting2 = (miParametro) => miParametro();
logGreeting2(greet);

let logGreeting3 = (miParametro) => miParametro();
logGreeting3(function(){
    console.log('Hello from a function created on the fly');
})

let color = "rojo";
let talla = "M";
let modelo = "Clasico";

console.log(`Juan tiene una playera
talla ${talla}
de color ${color}
modelo ${modelo}`);