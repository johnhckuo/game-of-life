const {World, Cell} = require("./index")

describe("game of life test case", ()=>{
    // initialize
    describe("init world", ()=>{
        it("should create a world without error", ()=>{
            let world = new World(3, 3)
            expect(world.height).toBe(3)
        })
        it("should create a world without error", ()=>{
            let world = new World(-1, 3)
            expect(world.width).toBe(0)
        })

        it("should create a array containing world", ()=>{
            let world = new World(3,3 )
            expect(world.createStatesOfCells()).toBe(true)
        })

        it("cell status should not be undefined", ()=>{
            let world = new World(3,3 )
            world.createStatesOfCells()
            expect(world.statesOfCells[0][0].alive).toBe(false)
        })

        it("should return the width of array we just created", ()=>{
            let world = new World(3,3 )
            world.createStatesOfCells()
            expect(world.getWidth()).toBe(3)
        })

        it("should return the height of array we just created", ()=>{
            let world = new World(4,4 )
            world.createStatesOfCells()
            expect(world.getHeight()).toBe(4)
        })
    })

    //insert data
    describe("insert data", ()=>{
        describe("init a cell", ()=>{
            const cell = new Cell(true)
            expect(cell.alive).toBe(true)
        })

        describe("init a cell", ()=>{
            const cell = new Cell(3)
            expect(cell.alive).toBe(true)
        })

        describe("insert cell into array1", ()=>{
            const cell = new Cell(true)
            let world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, 0, cell)).toBe(true)
        })

        describe("insert cell into array2", ()=>{
            const cell = new Cell(false)
            let world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, 3, cell)).toBe(false)
        })

        describe("insert cell into array3", ()=>{
            const cell = new Cell(false)
            let world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, -1, cell)).toBe(false)
        })
    })

    //count neightbor
    describe("check the number of neighbor",()=>{
        
        describe("check the neighbor of empty array 1", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            world.setCurrentCoord(0, 0)
            expect(world.getAliveNeighborNumber()).toBe(0)
        })


        describe("check boundary of the cell stats", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            expect(()=>{world.setCurrentCoord(4, 4)}).toThrow()

        })

        describe("check boundary of the cell stats", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            expect(world.setCurrentCoord(1, 1)).toBe(true)

        })

        describe("check boundary of the cell stats", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            expect(()=>{world.setCurrentCoord(-1, -1)}).toThrow()

        })

        describe("check boundary of the cell stats", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            expect(world.setCurrentCoord(0, 0)).toBe(true)

        })


        describe("check alive", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(1,1, cell)
            expect(world.checkAlive(1 ,1)).toBe(true)
            expect(world.checkAlive(1 ,0)).toBe(false)

        })

        describe("check the neighbor of empty array 2", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(1,1, cell)
            world.setCurrentCoord(0, 0)
            expect(world.getAliveNeighborNumber()).toBe(1)
        })

        describe("check the neighbor of empty array 3", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            //world.insertCell(1,1, cell)
            world.setCurrentCoord(1, 1)
            expect(world.getAliveNeighborNumber()).toBe(0)
        })

        describe("check the neighbor of empty array 4", ()=>{
            let world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(0,0, cell)
            world.insertCell(0,1, cell)
            world.insertCell(1,0, cell)
            world.insertCell(2,2, cell)
            world.insertCell(2,1, cell)
            world.insertCell(1,2, cell)
            world.setCurrentCoord(1, 1)
            expect(world.getAliveNeighborNumber()).toBe(6)
            world.setCurrentCoord(2, 0)
            expect(world.getAliveNeighborNumber()).toBe(2)
        })
    })


    //update state of cell
    describe("update the state of cell", ()=>{
        describe("getting state of cell", ()=>{
            const cell = new Cell(true)
            expect(cell.getState()).toBe(true)
        })

        describe("getting state of cell", ()=>{
            const cell = new Cell(false)
            expect(cell.getState()).toBe(false)
        })

        describe("check if cell status need to update", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.setCurrentCoord(0, 0)
            let counter = world.getAliveNeighborNumber()
            expect(world.nextCellStatus(0, 0, counter)).toBe(false)
        })

        describe("check if cell status need to update", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.insertCell(0, 0, new Cell(true))
            world.insertCell(1, 0, new Cell(true))
            world.setCurrentCoord(1, 1)
            expect(world.nextCellStatus()).toBe(false)
        })

        describe("check if cell status need to update", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.insertCell(0, 0, new Cell(true))
            world.insertCell(1, 0, new Cell(true))
            world.insertCell(2, 0, new Cell(true))
            world.setCurrentCoord(1, 1)
            expect(world.nextCellStatus()).toBe(true)
        })

        describe("check if cell status need to update", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.insertCell(0, 0, new Cell(true))
            world.insertCell(1, 0, new Cell(true))
            world.insertCell(2, 0, new Cell(true))
            world.insertCell(2, 2, new Cell(true))
            world.insertCell(1, 1, new Cell(true))
            world.setCurrentCoord(1, 1)
            expect(world.nextCellStatus()).toBe(false)
            world.insertCell(1, 1, new Cell(false))
            expect(world.nextCellStatus()).toBe(false)

        })


        describe("update cell status 1", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.setCurrentCoord(1, 1)
            expect(world.updateStatesOfCells()).toBe(true)
        })

        describe("update cell status 2", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.insertCell(0, 0, new Cell(true))
            world.insertCell(1, 0, new Cell(true))
            world.insertCell(1, 1, new Cell(true))
            world.setCurrentCoord(0, 0)
            expect(world.updateStatesOfCells()).toBe(true)
            expect(world.getStatesOfCells(0, 0)).toBe(true)

        })
    })

    // insert randomize data
    describe("populating data", ()=>{
        describe("test getting random data", ()=>{
            const cell = new Cell(true)
            cell.randomizeState()
            expect(cell.getState() == true || cell.getState() == false).toBeTruthy()
        })

        describe("create a random world", ()=>{
            let world = new World(3, 3)
            world.createRandomStatesOfCells()
            for (let i = 0 ; i < 3 ; i++){
                for (let j = 0 ; j < 3 ; j++){
                    expect(world.statesOfCells[i][j].alive == true || world.statesOfCells[i][j].alive == false).toBeTruthy()
                }
            }
        })
    })

    //simulate
    describe("simulate game of life in randomize world", ()=>{
        describe("automatically detect neighbor number, check the rules, and updae the cell state", ()=>{
            let world = new World(3 ,3)
            world.createStatesOfCells()
            world.insertCell(0, 0, new Cell(true))
            world.insertCell(1, 0, new Cell(true))
            world.insertCell(2, 0, new Cell(true))
            world.setCurrentCoord(1, 1)
            expect(world.updateStatesOfCells()).toBe(true)
            world.insertCell(2, 1, new Cell(true))
        })

        describe("init world", ()=>{
            let world = new World(3 ,3)
            world.createRandomStatesOfCells()
            for (let i = 0 ; i < 3 ; i++){
                for (let j = 0 ; j < 3 ; j++){
                    expect(world.statesOfCells[i][j].alive == true || world.statesOfCells[i][j].alive == false).toBeTruthy()
                    world.setCurrentCoord(i,j)
                    expect(world.updateStatesOfCells()).toBe(true)
                    expect(world.statesOfCells[i][j].alive == true || world.statesOfCells[i][j].alive == false).toBeTruthy()
                }
            }
        })
    })



})
