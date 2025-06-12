const getData = async ()=>{
    try{
        const response = await fetch("stock.json");
        const data = await response.json();
        console.log(data);
        
        return data;
    } catch (error){
        alert(`ERROR ${error}`)
        console.log('hubo un error', error)
    }
}




export { getData }