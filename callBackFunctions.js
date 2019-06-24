const a=true
const b=true
function cb(callback,errorCallback){
    if(!a){
        errorCallback('first condition is not true')
    }
    else if(!b){
        errorCallback('second condition is not true')
    }
    else callback('both are true')
}
cb((msg)=>console.log('success!! ' + msg),
(err)=>console.log('failed!! ' + err))