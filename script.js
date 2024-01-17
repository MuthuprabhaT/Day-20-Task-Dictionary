function api(){

    const taskInput=document.getElementById("taskInput");
    const addTask=document.getElementById("addTask");

    addTask.addEventListener("click", function(){
        const taskValue=taskInput.value.trim();

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${taskValue}`)
        .then((res) => res.json())
        .then((data) => {

        const nounMean = data[0].meanings[0].definitions[0].definition;
        let arr = [];
        arr.unshift(nounMean);

        const mainPage = document.getElementById("mainCon");
        const main = document.createElement("div");
        main.setAttribute("class", "col-lg-4 col-md-6 col-sm-12");
        mainPage.appendChild(main);

        for(i=0; i<arr.length; i++){
            main.innerHTML = `
            <div class="card m-3 c-card p-3 c-card bg-dark text-white" id="card">
            <div class="card-body">
            <h4 class="text-warning fw-bold">Meaning of ${taskValue} :</h4>
            <h6 class="fw-bold"><u><em>noun :</em></u></h6>
            <p class="card-text text-center h6">${arr[i]}</p>
            </br>
            </div>
            </div>`;
        }

        taskInput.value="";
        })
        .catch(err => {
            alert("No Definitions Found!!!");
        })
    });
 }

api();