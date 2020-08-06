// const name = "saika";

// falsy:
// 0
// null
// undefined
// ""
// NaN

// truthy:
// '0'
// ' '
// []
// {}

let name = 12;
if( name || name==0 ){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}