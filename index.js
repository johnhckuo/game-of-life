class World{
    constructor(width, height){
        if (width < 0) {
            width = 0
        }

        if (height < 0){
            height = 0
        }
        this.height = height
        this.width = width  
        this.statesOfCells = [] 
    }

    createStatesOfCells(){
        for (let i = 0 ; i < this.height ; i++){
            this.statesOfCells.push(new Array(this.width))
            for (let j = 0 ; j< this.width ; j++){
                this.statesOfCells[i][j] = new Cell(false)
            }
        }
        return true
    }

    getWidth(){
        return this.statesOfCells[0].length
    }
    getHeight(){
        return this.statesOfCells.length
    }

    insertCell(x, y, cell){
        if (
            (x > this.width-1) || 
            (y > this.height-1) ||
            (x < 0 ) ||
            (y < 0)){
                return false
            } 
        this.statesOfCells[y][x] = cell
        return true
    }

    getAliveNeighborNumber(x, y){
        let counter = 0
        for (var i = x-1 ; i <= x+1 ; i++){
            for (var j = y-1 ; j <= y+1 ; j++){
                if ((i == x) && (j == y)) continue
                else if (this.checkAlive(i, j)) counter = counter+1       
            }
        }
        return counter
    }

    checkAlive(i ,j){
        if (this.checkOutOfBoundary(i,j)) return false
        else if (this.statesOfCells[j][i].alive) return true
        else return false
    }

    checkOutOfBoundary(x, y){
        if ((x <0 ) || (x >= this.width)) return true
        else if ((y <0 ) || (y >= this.height)) return true
        return false
    }
}

class Cell{
    constructor(alive){
        if (typeof(alive) != "boolean"){
            alive = true
        }
        this.alive = alive
    }


}
module.exports = {World, Cell}
