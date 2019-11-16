const {World, Cell} = require("./index")

describe("game of life test case", ()=>{
    // initialize
    describe("init world", ()=>{
        it("should create a world without error", ()=>{
            const world = new World(3, 3)
            expect(world.height).toBe(3)
        })
        it("should create a world without error", ()=>{
            const world = new World(-1, 3)
            expect(world.width).toBe(0)
        })

        it("should create a array containing world", ()=>{
            const world = new World(3,3 )
            expect(world.createStatesOfCells()).toBe(true)
        })

        it("cell status should not be undefined", ()=>{
            const world = new World(3,3 )
            world.createStatesOfCells()
            expect(world.statesOfCells[0][0].alive).toBe(false)
        })

        it("should return the width of array we just created", ()=>{
            const world = new World(3,3 )
            world.createStatesOfCells()
            expect(world.getWidth()).toBe(3)
        })

        it("should return the height of array we just created", ()=>{
            const world = new World(4,4 )
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
            const world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, 0, cell)).toBe(true)
        })

        describe("insert cell into array2", ()=>{
            const cell = new Cell(false)
            const world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, 3, cell)).toBe(false)
        })

        describe("insert cell into array3", ()=>{
            const cell = new Cell(false)
            const world = new World(3, 3)
            world.createStatesOfCells()
            expect(world.insertCell(0, -1, cell)).toBe(false)
        })
    })

    //count neightbor
    describe("check the number of neighbor",()=>{
        
        describe("check the neighbor of empty array 1", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            expect(world.getAliveNeighborNumber(0 ,0)).toBe(0)
        })


        describe("check boundary of the cell stats", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            expect(world.checkOutOfBoundary(4, 4)).toBe(true)

        })

        describe("check boundary of the cell stats", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            expect(world.checkOutOfBoundary(1, 1)).toBe(false)

        })

        describe("check boundary of the cell stats", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            expect(world.checkOutOfBoundary(-1, -1)).toBe(true)

        })

        describe("check boundary of the cell stats", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            expect(world.checkOutOfBoundary(0, 0)).toBe(false)

        })


        describe("check alive", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(1,1, cell)
            expect(world.checkAlive(1 ,1)).toBe(true)
            expect(world.checkAlive(1 ,0)).toBe(false)

        })

        describe("check the neighbor of empty array 2", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(1,1, cell)
            expect(world.getAliveNeighborNumber(0 ,0)).toBe(1)
        })

        describe("check the neighbor of empty array 3", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            //world.insertCell(1,1, cell)
            expect(world.getAliveNeighborNumber(1 ,1)).toBe(0)
        })

        describe("check the neighbor of empty array 4", ()=>{
            const world = new World(3,3)
            world.createStatesOfCells()
            const cell = new Cell(true)
            world.insertCell(0,0, cell)
            world.insertCell(0,1, cell)
            world.insertCell(1,0, cell)
            world.insertCell(2,2, cell)
            world.insertCell(2,1, cell)
            world.insertCell(1,2, cell)
            expect(world.getAliveNeighborNumber(1 ,1)).toBe(6)
            expect(world.getAliveNeighborNumber(2 ,0)).toBe(2)
        })
    })


    //update state of cell

    // insert randomize data




})
