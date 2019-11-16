class World{
    constructor(columns, rows){
        this.columns = columns
        this.rows = rows
    }
    createArray(){
        this.Arr = []
        for (var i = 0 ; i < this.rows ; i++){
            const row = new Array(this.columns)
            this.Arr.push(row)
        }
        return true
    }

    getArrayColumns(){
        return this.Arr[0].length
    }

    getArrayRows(){
        return this.Arr.length
    }

    insertData(x, y, value){
        this.Arr[y][x] = value
        return this.Arr[y][x]
    }

    getCell(x, y){
        return this.Arr[y][x]
    }

    countNeighbor(x, y){
        let counter = 0 

        
        if ((y > 0) && (this.Arr[y-1][x] == 1)) counter++
        if ((y > 0) && (this.Arr[y-1][x+1] == 1)) counter++
        if ((y > 0) &&(this.Arr[y-1][x-1] == 1)) counter++
        if (this.Arr[y+1][x+1] == 1 )counter++
        if (this.Arr[y+1][x] == 1 )counter++
        if (this.Arr[y+1][x-1] == 1 )counter++
        if (this.Arr[y][x-1] == 1 )counter++
        if (this.Arr[y][x+1] == 1 )counter++

        return counter
    }

}

module.exports = {World}