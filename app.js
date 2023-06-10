let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')
let out01 = document.getElementById('out01')
let but01 = document.getElementById('but01')


but1.onclick = f1
but2.onclick = f2

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr1 = []

function f1() {
    if (arr1.length >= 20) {
        return
    }
    else {
        for (i=0; i<20; i++) {
            arr1.push(random(1,9))
        }
        out1.innerText = arr1
    }
}

function f2() {
    console.log(arr1)
    const arr2 = []
    let counter = 0
    for (x in arr1) {
        if (arr1[x] === 5) {
            arr2.push(0)
            counter++
        }
        else {
            arr2.push(arr1[x])
        }
    }
    out2.innerText = arr2
    out3.innerText = counter+' шт заменили'
}

but01.onclick = f3




function f3() {
    const arr01 = []
    const arr02 = []
    let str = ''
    if (arr01.length < 100) {
        for (i=0; i<100; i++) {
            arr01.push(random(10,100))
        }
        console.log(arr01)
    }
    for (x in arr01) {
        if (arr02.includes(arr01[x]) || arr01[x] % 5 == 0 || arr01[x] % 11 == 0) {
            continue
        }
        else {
            arr02.push(arr01[x])
        }
    }
    console.log(arr02)
    if (arr02.length % 3 == 0) {
        for (i=0; i<arr02.length; i+=3) {
            str += '<tr><td>'+arr02[i]+'</td><td>'+arr02[i+1]+'</td><td>'+arr02[i+2]+'</td></tr>'
        }
        console.log('0')
    }
    if (arr02.length % 3 == 1) {
        for (i=0; i<arr02.length-1; i+=3) {
            str += '<tr><td>'+arr02[i]+'</td><td>'+arr02[i+1]+'</td><td>'+arr02[i+2]+'</td></tr>'
        }
        str += '<tr><td>'+arr02[arr02.length-1]+'</td></tr>'
        console.log(1)
    }
    if (arr02.length % 3 == 2) {
        for (i=0; i<arr02.length-2; i+=3) {
            str += '<tr><td>'+arr02[i]+'</td><td>'+arr02[i+1]+'</td><td>'+arr02[i+2]+'</td></tr>'
        }
        str += '<tr><td>'+arr02[arr02.length-2]+'</td></td><td>'+arr02[arr02.length-1]+'</td></tr>'
        console.log(3)
    }
    out01.innerHTML = str
    
}

