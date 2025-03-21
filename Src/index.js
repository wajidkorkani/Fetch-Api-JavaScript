// let container = document.querySelector(".container")


(async()=>{
    const reqsponse = await fetch("https://api.freeapi.app/api/v1/public/randomproducts?page=8&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches");
    if(!reqsponse.ok){
        console.log("Error")
    }else{
        let data = await reqsponse.json();
        console.log(data);
        
        // data.forEach(element => {
            
    };
})()