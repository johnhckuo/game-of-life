class World{
    constructor(width, height){
        width < 0 ? this.width = 0 : this.width = width
        height < 0 ? this.height = 0 : this.height = height
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

    updateStatesOfCells(columnOffsets, rowOffsets, status){
        if (this.checkOutOfBoundary(columnOffsets, rowOffsets)) return false
        this.statesOfCells[rowOffsets][columnOffsets].alive = status
        return true
    }

    getStatesOfCells(columnOffset, rowOffsets){
        if (this.checkOutOfBoundary(columnOffset, rowOffsets)) return false
        return this.statesOfCells[rowOffsets][columnOffset].alive
    }

    getWidth(){
        return this.statesOfCells[0].length
    }
    getHeight(){
        return this.statesOfCells.length
    }

    insertCell(columnOffsets, rowOffsets, cell){
        if (
            (columnOffsets > this.width-1) || 
            (rowOffsets > this.height-1) ||
            (columnOffsets < 0 ) ||
            (rowOffsets < 0)){
                return false
            } 
        this.statesOfCells[rowOffsets][columnOffsets] = cell
        return true
    }

    getAliveNeighborNumber(columnOffsets, rowOffsets){
        let counter = 0
        for (var i = columnOffsets-1 ; i <= columnOffsets+1 ; i++){
            for (var j = rowOffsets-1 ; j <= rowOffsets+1 ; j++){
                if ((i == columnOffsets) && (j == rowOffsets)) continue
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

    checkOutOfBoundary(columnOffsets, rowOffsets){
        if ((columnOffsets <0 ) || (columnOffsets >= this.width)) return true
        else if ((rowOffsets <0 ) || (rowOffsets >= this.height)) return true
        return false
    }

    nextCellStatus(columnOffsets, rowOffsets){
        if (this.getAliveNeighborNumber(columnOffsets, rowOffsets) < 2 && (this.statesOfCells[rowOffsets][columnOffsets].alive)){
            return false
        }else if (((this.getAliveNeighborNumber(columnOffsets, rowOffsets) == 2) || (this.getAliveNeighborNumber(columnOffsets, rowOffsets) == 3)) && (this.statesOfCells[rowOffsets][columnOffsets].alive)){
            return true 
        }else if (this.getAliveNeighborNumber(columnOffsets, rowOffsets) > 3 && (this.statesOfCells[rowOffsets][columnOffsets].alive)){
            return false
        }else if (this.getAliveNeighborNumber(columnOffsets, rowOffsets) == 3 && (!this.statesOfCells[rowOffsets][columnOffsets].alive)){
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


}
module.exports = {World, Cell}
