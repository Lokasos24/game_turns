export default async function dataFetchs(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(err){
        console.log(`Aqui esta el error: ${err}`)
    }
}