// RECURSION EXE.0 CALLSTACK !!! 

function takeShower(){
    return 'showering'
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = [`cereal`, `eggs`, `bacon`]
    return items[Math.floor(Math.random() * items.length)]
}

function wakeUp(){
    takeShower()
    eatBreakfast()
    console.log(`ok ready to go!`)
}

wakeUp()