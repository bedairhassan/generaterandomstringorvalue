var generateRandomValueOnce = (max, list) => {

    var func = (max, list) => {
        var value = Math.floor(Math.random() * max)
        var found = list.filter(item => item === value).length >= 1

        if (!found) {
            return value;
        }
    }

    while (true) {

        var ret = func(max, list)

        if (ret !== undefined) {

            return ret
        }
    }
}


// first use !
var list = [1, 2, 3, 4, 5, 6]
console.log(generateRandomValueOnce(10, list))
