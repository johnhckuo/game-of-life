const {World} = require("./index")

describe("game of life test case", ()=>{
    describe("world test init case", ()=>{

        it("create a world with width of 3", ()=>{
            const world = new World(3, 3)
            expect(world.columns).toBe(3)
        })
        
        it("create a world with height of 3", ()=>{
            const world = new World(3, 3)
            expect(world.rows).toBe(3)
        })

        it("create a 2d array", ()=>{
            const world = new World(3, 3)

            expect(world.createArray()).toBe(true)
        })

        it("get 2d array width", ()=>{
            const world = new World(3, 1)
            world.createArray()
            expect(world.getArrayColumns()).toBe(3)
        })

        it("get 2d array height", ()=>{
            const world = new World(1, 3)
            world.createArray()
            expect(world.getArrayRows()).toBe(3)
        })

        it("insert data into 2d array", ()=>{
            const world = new World(3, 3)
            world.createArray()
            expect(world.insertData(0,0,0)).toBe(0)
        })

        it("insert data into 2d array", ()=>{
            const world = new World(3, 3)
            world.createArray()
            expect(world.insertData(0,0,1)).toBe(1)
        })

        it("return certain value of the 2d array", ()=>{
            const world = new World(3, 3)
            world.createArray()
            world.insertData(0,0,1)
            expect(world.getCell(0,0)).toBe(1)
        })
        
        it("return certain value of the 2d array", ()=>{
            const world = new World(3, 3)
            world.createArray()
            world.insertData(0,0,2)
            expect(world.getCell(0,0)).toBe(2)
        })
    })

    describe("game of life test case", ()=>{

        it(" should return living neighbor number", ()=>{
            const world = new World(3, 3)
            world.createArray()
            //world.insertData(0,0,1)
            expect(world.countNeighbor(1, 1)).toBe(0)
        })

        it(" should return living neighbor number of 1", ()=>{
            const world = new World(3, 3)
            world.createArray()
            world.insertData(0,0,1)
            expect(world.countNeighbor(1, 1)).toBe(1)
        })

        it(" should return living neighbor number of 1", ()=>{
            const world = new World(3, 3)
            world.createArray()
            world.insertData(1,1,1)
            expect(world.countNeighbor(0,0)).toBe(1)
        })
    })

    describe("cell test case", ()=>{



    })

})