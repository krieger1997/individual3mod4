

const URL = "www.themealdb.com/api/json/v1/1/";
const endpoint = "categories.php";

const muestraCategorias= async ()=>{
  
  await fetch(`${URL}${endpoint}`).then(response=>{
    if(!response.ok){
      throw new Error(`HTTP ERROR.\n El status code es ${response.status}\n ${URL}${endpoint}`)
    }
    response.json().then(data=>{
      console.log("DATA: ",data)
    })




  }).catch(error=>{
    console.error(error)
  })


}

muestraCategorias();