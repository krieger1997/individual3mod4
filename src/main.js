

const URL = "https://www.themealdb.com/api/json/v1/1/";
const endpoint = "categories.php";

const muestraCategorias= async ()=>{
  
  await fetch(`${URL}${endpoint}`).then( async (response)=>{
    if(!response.ok){
      throw new Error(`HTTP ERROR.\n El status code es ${response.status}\n ${URL}${endpoint}`)
    }
    await response.json().then(data=>{
      console.log("============== INICIO =============")
      console.log("DATA GENERAL: ",data.categories)
      data.categories.forEach((element) => {
        console.log('%c CATEGORÍA: '+element.strCategory, 'background: #222; color: #bada55');
        console.table(element)
      });
    })

  }).catch(error=>{
    console.error(error)
  })

}
  
muestraCategorias().then(res=>{
  console.log("============== FIN =============")
})
