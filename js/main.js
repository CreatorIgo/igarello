const list = document.querySelectorAll('.list')

function addTasks() {
    const btn = document.querySelector('.add__btn')
    const addBtn = document.querySelector('.add__item-btn')
    const cancelBtn = document.querySelector('.cancel__item-btn')
    const textArea = document.querySelector('.textarea')
    const form = document.querySelector('.form')
    
    let value

    btn.addEventListener('click', () => {
        form.style.display = 'block'
        btn.style.display = 'none'
        addBtn.style.display = 'none'

        textArea.addEventListener('input', (e)=>{
            value = e.target.value

            if (value) {
                addBtn.style.display = 'block'
            }
            else{
                addBtn.style.display = 'none' 
            }
        })

        cancelBtn.addEventListener('click', () =>{
            textArea.value = ''
            value = ''
            btn.style.display = 'flex' 
            form.style.display = 'none'
        })
    })
}

addTasks();