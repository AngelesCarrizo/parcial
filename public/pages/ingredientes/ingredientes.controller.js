const btnCreate = document.getElementById("create")


btnCreate.addEventListener('click',()=>{
    const name = document.getElementById("name").value
    
})

/*window.addEventListener('load', function() {
    Llenar lista con los ingredientes existentes*/

    /*const li = document.createElement('li')
    li.textContent = `${ing}: ${quantity}`
    document.getElementById('list').appendChild(li)
})*/
window.addEventListener('load', async function() {
    try {
        const response = await fetch('http://localhost:3001/ing');
        if (!response.ok) {
            throw new Error('Error al obtener los ingredientes');
        }
        const ingredientes = await response.json();
        const listaIngredientes = document.getElementById('list');

        listaIngredientes.innerHTML = '';
        
        ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente.nombre;
            listaIngredientes.appendChild(li);
        });
    } catch (error) {
        console.error(error);
      
    }
});