function fakeFetch(todos) {
    const SuccessInit= ["body success", { "status" : 200 , "statusText" : "Ok" }];
    const ErrorData = ["body error", { "status" : 400 , "statusText" : "Error" }];
    const url = 'https://jsonplaceholder.typicode.com/todos';
    let randomNumber = Math.random()
    setTimeout(() => {
        if(randomNumber < .5) {
            fetch(todos)
                .then(response => response.json())
                .then(json => console.log(json))
            console.log(SuccessInit);
        } else {
          console.log(ErrorData);
        }
    }, 2000);
    
}

export default fakeFetch