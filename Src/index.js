let container = document.querySelector(".container")


(async()=>{
    const reqsponse = await fetch("https://fakestoreapi.com/products/1");
    if(!reqsponse.ok){
        console.log("Error")
    }else{
        let data = await reqsponse.json();
        console.log(data); 
        let h1 = document.createElement("h1")
        h1.innerText = data.title
        let span = document.createElement("span")
        span.innerText = data.description
        let box = document.createElement("div")
        box.classList.add("box")
        box.appendChild(h1)
        box.appendChild(document.createElement("br"))
        box.appendChild(span)
        container.append(box)
    };
})()