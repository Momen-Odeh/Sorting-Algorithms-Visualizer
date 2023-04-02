const arraySize = document.getElementById('arraySize')
const arraySpeed = document.getElementById('arraySpeed')
const arraySizeLabel = document.getElementById('arraySizeLabel')
const arraySpeedLabel = document.getElementById('arraySpeedLabel')
const randomizeBtn = document.getElementById('randomize-btn')
const SloveBtn = document.getElementById('Slove-btn')
const sortArea = document.getElementById('sortArea')

let size = 5
let speed = 1
let arr = []
let arrSteps = []
let newColumn


//Listeners
randomizeBtn.addEventListener("click",randomElements)
SloveBtn.addEventListener("click",sloveElements)
arraySize.addEventListener('input',arraySizeControl)
arraySpeed.addEventListener('input',arraySpeedControl)
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
function selectionSort(array,size) {
    arrSteps = []
    // 
    for (let step = 0; step < size - 1; step++) {
        let min_idx = step;
  
        for (let i = step + 1; i < size; i++) {
  
          // To sort in descending order, change > to < in this line.
          // Select the minimum element in each loop.
          if (array[i] < array[min_idx]) {
            min_idx = i;
          }
        }
  
        // put min at the correct position
        arrSteps.push({
            index1:step,
            index2:min_idx,
            swap:true,
            finish: false
          })
        let temp = array[step];
        array[step] = array[min_idx];
        array[min_idx] = temp;
      }
    // 
    return array
}
function insertionSort(array,size) {
    arrSteps = []
    // 
    for (let step = 1; step < size; step++) {
        
        let key = array[step];
        let j = step - 1;
  
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && key < array[j]) {
          array[j + 1] = array[j];
          arrSteps.push({
            index1:j + 1,
            index2:j,
            swap:true,
            finish: false
          })
          --j;
        }
  
        // Place key at after the element just smaller than it.
        array[j + 1] = key;
        arrSteps.push({
            index1:j + 1,
            index2:step,
            swap:true,
            finish: false
          })

      }
    // 
    return array
} 
function generateRandomArray(length) {
    let arr = Array.from({length}, () => Math.floor(Math.random() * 100));
    return arr;
}
function arraySpeedControl(){
    speed = (this.value/100).toFixed(2)
    arraySpeedLabel.innerHTML = `Sorting Speed: X ${speed}  `
}
function arraySizeControl(){
    size = this.value
    arraySizeLabel.innerHTML = `Array Size: ${size}`
    
}

function randomElements(){
    if(size < 30){
        sortArea.style.width="50%"
        
    }
    else if(size < 50){
        sortArea.style.width="75%"

    }
    else{
        sortArea.style.width="95%"
    }
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
            await delay(400/speed)
        // },1000*i)
        // setTimeout(()=>{
            sortArea.children[index1].style.backgroundColor = "#acd6e6"
            sortArea.children[index2].style.backgroundColor = "#acd6e6"
            if(finish)
            {
                sortArea.children[index2].style.backgroundColor = "#dfae4a"
            }
            await delay(400/speed)
        // },1100*i)

    }
    
    sortArea.children[0].style.backgroundColor = "#dfae4a"


}
function sloveElements (){
    
    console.log(bubbleSort(arr,size))
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


