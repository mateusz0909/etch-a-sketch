const app = document.querySelector('#app')

const createGrid = () => {
    deleteGrid()
    let numberOfScquares = Number(window.prompt("Enter number of squares"))
    let containerWidth = (numberOfScquares*10)+(numberOfScquares*2) 
    console.log(containerWidth)
    app.style.width = `${containerWidth}px`
    for (let index = 0; index < (numberOfScquares*numberOfScquares); index++) {
        const newDiv = document.createElement('div')
        newDiv.addEventListener("mouseover", ()=> {
            newDiv.style.backgroundColor = 'red'
        })
        app.appendChild(newDiv)
    }
    
}

const deleteGrid = () => {
    app.innerHTML=''
 }