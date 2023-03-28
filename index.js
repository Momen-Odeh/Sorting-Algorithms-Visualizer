const arraySize = document.getElementById('arraySize')
const arraySizeLabel = document.getElementById('arraySizeLabel')
const randomizeBtn = document.getElementById('randomize-btn')
const SloveBtn = document.getElementById('Slove-btn')
const sortArea = document.getElementById('sortArea')

let size = 5
let arr = []
let newColumn

//Listeners
randomizeBtn.addEventListener("click",randomElements)
SloveBtn.addEventListener("click",sloveElements)
arraySize.addEventListener('input',arraySizeControl)
// 
function generateRandomArray(length) {
    let arr = Array.from({length}, () => Math.floor(Math.random() * 100));
    return arr;
}
function arraySizeControl(){
    size = this.value
    arraySizeLabel.innerHTML = `Array Size: ${size}`
}

function randomElements(){
    arr = generateRandomArray(size)
    console.log(sortArea.children.length);
    let index=sortArea.children.length;
    while (index !== 0) {
        sortArea.children[--index].remove()
    }
    let col
    for(let i=0;i<arr.length;i++)
    {
        col = newColumn.cloneNode(true)
        col.style.height=`${arr[i]}%`
        col.children[0].innerHTML =arr[i]
        sortArea.append(col)
    }
    console.log(sortArea.children[0]);
    
}
function sloveElements (){
    
    // console.log(sortArea.append(newColumn))
}

function initFirstSort()
{
    arr = generateRandomArray(5)
    newColumn = sortArea.children[0].cloneNode(true)
    sortArea.children[0].remove()
    let col
    for(let i=0;i<arr.length;i++)
    {
        col = newColumn.cloneNode(true)
        col.style.height=`${arr[i]}%`
        col.children[0].innerHTML =arr[i]
        sortArea.append(col)
    }
}

// Main Code ***************************
initFirstSort()


