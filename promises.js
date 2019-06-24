const p1=new Promise((resolve,reject)=>{
        resolve('in promise 1')
})
const p2=new Promise((resolve,reject)=>{
        resolve('in promise 2')
})

const a=false
const b=false

//p3 will resolve if both of a and b are false
//p3 implemented using function 

const p3=new Promise(function(resolve,reject){
        if(a){
            reject({
                name:'a',
                msg:'its value is true making our condition false'
            })}
        else if(b){
            reject({
                name:'a',
                msg:'its value is true making our condition false'
            })
        }
        else{
            resolve('In promise 3')
        }
        })
    

    Promise.all([p1,p2,p3
    ]).then( result => console.log( result ))
    .catch( err => console.log(err.name+' '+err.msg))

    Promise.race([p1,p2,p3
    ]).then( result => console.log( result ))
    .catch( err => console.log(err.name+' '+err.msg))
    
