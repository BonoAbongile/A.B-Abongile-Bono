var form = document.querySelector('.humans')

form.addEventListener('submit', function(e){
    e.preventDefault()

    var task = document.getElementById('name-input').value
    var date = document.getElementById('email-input').value
    var rate = document.getElementById('sub-input').value
    var desc = document.getElementById('message-input').value

    var myObject = {

        name: task,
        email: date,
        subject: rate,
        message: desc
        
    }

    var myArray = []

    if(localStorage.getItem('tasks') != null){
        myArray = JSON.parse(localStorage.getItem('tasks'))
        myArray.push(myObject)
        localStorage.setItem('tasks', JSON.stringify(myArray))
    }

    else{
        myArray.push(myObject)
        localStorage.setItem('tasks', JSON.stringify(myArray))
    }
})