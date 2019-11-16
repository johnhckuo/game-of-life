class World{
    constructor(width, height){
        var worldArr = []
        for (var i = 0 ; i < height ; i++){
            const row = new Array(height)
            worldArr.push(row)
        }

    }


    countNeighbor(x, y){
        return 0
    }
}

class Cell {
    constructor() {

    }

    updateStatus(neighbors) {
        if (neighbors < 2 || neighbors > 3) return false
        return true
    }
}

module.exports = {
    World,
    Cell
}