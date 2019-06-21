//  3.Sort array of objects by number of object properties

const myArr=[
    {name: 'Eisha', Rno: 2},
    {name: 'Maria', Rno: 21},
    {name: 'Tabinda', Rno: 3},
    {name: 'Ammar', Rno: 13}
]
myArr.sort(function(a,b){return a.Rno-b.Rno});
console.log(myArr)
