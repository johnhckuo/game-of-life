class World{
    constructor(width, height){
        width < 0 ? this.width = 0 : this.width = width
        height < 0 ? this.height = 0 : this.height = height
        this.statesOfCells = [] 
        this.columnOffset = -1
        this.rowOffset = -1
    }

    setCurrentCoord(columnOffset, rowOffset){
        if (this.isOutOfBoundary(columnOffset, rowOffset)) return false
        this.columnOffset = columnOffset
        this.rowOffset = rowOffset
        return true
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

    createRandomStatesOfCells(){
        for (let i = 0 ; i < this.height ; i++){
            this.statesOfCells.push(new Array(this.width))
            for (let j = 0 ; j< this.width ; j++){
                let cell = new Cell(false)
                cell.randomizeState()
                this.statesOfCells[i][j] = cell.getState()
            }
        }
        return true
    }

    updateStatesOfCells(){
        let status = this.nextCellStatus()
        this.statesOfCells[this.rowOffset][this.columnOffset].alive = status
        return true
    }

    getStatesOfCells(){
        return this.statesOfCells[this.rowOffset][this.columnOffset].alive
    }

    getWidth(){
        return this.statesOfCells[0].length
    }
    getHeight(){
        return this.statesOfCells.length
    }

    setCurrentCoord(columnOffset, rowOffset){
        if (this.isOutOfBoundary(columnOffset, rowOffset)){
            console.error("coordinate out of boundary")
            throw {
                name: "Error",
                message: "coordinate out of boundary"
            }
        }
        this.columnOffset = columnOffset
        this.rowOffset = rowOffset
        return true
    }

    isOutOfBoundary(columnOffset, rowOffset){
        if ((columnOffset > this.width-1) 
            || (rowOffset > this.height-1) 
            || (columnOffset < 0 ) 
            || (rowOffset < 0)){
                return true
            } 
        return false
    }

    insertCell(columnOffset, rowOffset, cell){
        if (this.isOutOfBoundary(columnOffset, rowOffset)) return false
        this.statesOfCells[rowOffset][columnOffset] = cell
        return true
    }

    getAliveNeighborNumber(){
        let counter = 0
        for (var i = this.columnOffset-1 ; i <= this.columnOffset+1 ; i++){
            for (var j = this.rowOffset-1 ; j <= this.rowOffset+1 ; j++){
                if ((i == this.columnOffset) && (j == this.rowOffset)) continue
                else if (this.checkAlive(i, j)) counter = counter+1       
            }
        }
        return counter
    }

    checkAlive(columnOffset, rowOffset){
        if (this.isOutOfBoundary(columnOffset, rowOffset)) return false
        if (this.statesOfCells[rowOffset][columnOffset].alive) return true
        else return false
    }

    nextCellStatus(){
        let aliveNeighbor = this.getAliveNeighborNumber()
        if (aliveNeighbor < 2 && (this.statesOfCells[this.rowOffset][this.columnOffset].alive)){
            return false
        }else if ((aliveNeighbor == 2 || aliveNeighbor == 3) && (this.statesOfCells[this.rowOffset][this.columnOffset].alive)){
            return true 
        }else if (aliveNeighbor > 3 && (this.statesOfCells[this.rowOffset][this.columnOffset].alive)){
            return false
        }else if (aliveNeighbor == 3 && (!this.statesOfCells[this.rowOffset][this.columnOffset].alive)){
            return true
        }
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

    getState(){
        return this.alive
    }

    randomizeState(){
        const newState = Math.random() >= 0.5
        this.alive = newState
    }


}
module.exports = {World, Cell}
