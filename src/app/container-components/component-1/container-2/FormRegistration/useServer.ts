"use server"


export default async function UseServer(props:FormData){
    const promise = new Promise((resolve , reject)=>setTimeout(()=>{resolve("inviato con sucesso")},5000))
    const obj = {
        message:promise.then((e)=>{return(e)})
    }
    return(obj)
}