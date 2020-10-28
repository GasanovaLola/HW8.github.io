// 1

/*var obj = { 
    a: 10, 
    b: 12, 
    c: { 
        f: 13, 
        g: { 
            m: 20
        } 
    } 
} 

function convert(obj, newObj = {}) {
    for (var key in obj) {
        if (obj[key] instanceof Object) {
            convert(obj[key], newObj);
        }
        else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

console.log(convert(obj));*/

// 2

/*function assignObjects(obj1, obj2, newObj = {}) {
    for (var i = 0, size = arguments.length; i < size; i++) {
        for (var key in arguments[i]) {
            newObj[key] = arguments[i][key];
        }
    }

    return newObj;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));*/

// 3

function assignObjects(obj1, obj2, obj3, obj4, newObj = {}) {
    for (var i = 0, size = arguments.length; i < size; i++) {
        for (var key in arguments[i]) {
            newObj[key] = arguments[i][key];
        }
    }

    return newObj;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 },{u: 78, i: 9}, {f: 5, y: 7, r: 9}));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));


