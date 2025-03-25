(async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        console.log("Error");
    } else {
        let dataList = await response.json();
        console.log(dataList); // This should log the dataList

        dataList.forEach(data => {
            let container = document.querySelector(".container");
            let h1 = document.createElement("h1");
            h1.innerText = data.title;
            
            let span = document.createElement("span");
            span.innerText = data.description;
            
            let box = document.createElement("div");
            box.classList.add("box");
            box.appendChild(h1);
            box.appendChild(document.createElement("br"));
            box.appendChild(span);
            
            container.append(box);
        });
    }
})();
