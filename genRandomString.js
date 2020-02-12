var find = (list, index) => {

    for (let i = 0; i < list.length; i++) {

        if (i == index) {

            return { obj: list[i], found: true }
        }
    }

    return { obj: null, found: false }
}


var genRWord = (Exception, list) => {

    while (true) {
        var index = Math.floor(Math.random() * list.length)
        //console.log({ index: index })

        var f = find(list, index)
        //console.log(f)

        var tryAgain = Exception.filter(item => f.obj === item).length > 0
        if (tryAgain) {
            //console.log('tryagain: ', tryAgain)
            continue;
        }

        if (f.found) {
            return find(list, index).obj
        } else {
            throw new Exception("not found")
        }
    }
}

var givenList = ['this1', 'this2']
var found = []

found = [...found, genRWord(found, givenList)]
console.log(found)

found = [...found, genRWord(found, givenList)]
console.log(found)

// See It Again -> genRWord(found, givenList) -> no need to push it to found list !
// Do Not See It Again -> found = [...found, genRWord(found, givenList)]