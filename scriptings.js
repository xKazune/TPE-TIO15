let contendorPersonajes = document.getElementById("personajesContainer");

let personajesArray = [{
    nombre: "Bart Simpson",
    descripcion: "bart es el hijo de homero, es amarillo y travieso.",
},
 {
    nombre: "Carl carlson",
    descripcion: "Carlton  Carlson es un personaje ficticio de la serie animada Los Simpson.Carl no es solamente colega y supervisor de Homer en la planta de energ�a nuclear de Springfield sino adem�s uno de sus mejores amigos desde la infancia, y como a �l mismo le gusta llamarse, un Lenny urbano"
}, 
{
    nombre:"Homero Simpson",
    descripcion: "Su color de piel es amarillo, es calvo y gordo."
}, 
{
    nombre:"Maggie Simpson",
    descripcion: "maggie es la hija de homero y marge."
}, 
 {
    nombre:"Charls Montgomery Burns",
    descripcion:"Charles Montgomery Plantagenet Schicklgruber Burns, conocido como Charles Montgomery Burns es un personaje principal de la serie animada Los Simpson.Es un personaje malvado y recurrente. Es el propietario de la Planta Nuclear de Springfield y es el jefe de Homer Simpson. Es atendido casi todo el tiempo por Waylon Smithers, su leal y adulador ayudante, asesor, confidente y admirador secreto. El se�or Burns es el ciudadano m�s rico, poderoso y anciano de Springfield. Sus rasgos m�s comunes son la avaricia, la taca�er�a y el ego�smo. �l personifica un gran n�mero de caracter�sticas sobre el gran empresario americano"
} ];


function agregarPersonajesTabla(personajes) {
   
    personajes.forEach((element, index)=> {
        let tr = document.createElement ("tr");
        tr.className= `personajeSimpson${index}`
        tr.innerHTML+= `
            <td>${element.nombre}</td>
            <td>${element.descripcion}</td>
            <td>${element.nombre.includes("Simpson") ? "Sí" : "No"}</td>
        
        `
    contendorPersonajes.appendChild(tr);
    });

}

agregarPersonajesTabla(personajesArray);