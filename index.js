const arraySize = document.getElementById('arraySize')
const arraySizeLabel = document.getElementById('arraySizeLabel')
const randomizeBtn = document.getElementById('randomize-btn')
const SloveBtn = document.getElementById('Slove-btn')
const sortArea = document.getElementById('sortArea')

let size = 5
let arr = []
let arrSteps = []
let newColumn

//Listeners
randomizeBtn.addEventListener("click",randomElements)
SloveBtn.addEventListener("click",sloveElements)
arraySize.addEventListener('input',arraySizeControl)
//
function bubbleSort(array,size) {
    arrSteps = []
    for (let i = 0; i < size - 1; i++)
    {
      for (let j = 0; j < size - i - 1; j++)
      {
        if (array[j] > array[j + 1]) 
        {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          arrSteps.push({
            index1:j,
            index2:j+1,
            swap:true,
            finish: j === (size - i - 2)
          });
        }
        else{
            arrSteps.push({
                index1:j,
                index2:j+1,
                swap:false,
                finish: j === (size - i - 2)
              });
        }
        
      }
      
    }
        return array
  } 
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
function delay(ms)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('success')
        }, ms);
    })
}
async function applyMovement(arrSteps){
    for(let i=0;i< arrSteps.length ;i++)
    {
        let {index1,index2,swap,finish} = arrSteps[i]
        // setTimeout(()=>{
            sortArea.children[index1].style.backgroundColor = "#6de38a"
            sortArea.children[index2].style.backgroundColor = "#6de38a"
            if(swap)
            {
                sortArea.children[index1].before(sortArea.children[index2]);
            }
            await delay(500)
        // },1000*i)
        // setTimeout(()=>{
            sortArea.children[index1].style.backgroundColor = "#acd6e6"
            sortArea.children[index2].style.backgroundColor = "#acd6e6"
            if(finish)
            {
                sortArea.children[index2].style.backgroundColor = "#dfae4a"
            }
            await delay(500)
        // },1100*i)

    }
    
    sortArea.children[0].style.backgroundColor = "#dfae4a"


}
function sloveElements (){
    
    console.log(bubbleSort(arr,size))
    // console.log(arrSteps)
    applyMovement(arrSteps)
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


