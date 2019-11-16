const {World, Cell} = require('./index')

describe('Game of Life', () => {
    it('works', () => {
        const world = new World()
        expect(world.updateStatus()).toBe(true)
    })

    describe("count neighbors", ()=>{
        it("should return number of 0", ()=>{
            const world = new World(3, 3)
            expect(world.countNeighbor(1, 1)).toBe(0)
        })
        
        it("should return 1 neighbor that is alive", ()=>{
            const world = new World(3, 3)
            expect(world.countNeighbor(1, 1)).toBe(1)
        })
    })

    describe('updateStatus', () => {
        it('should return true when number of neighbors is 2', () => {
            const cell = new Cell()
            expect(cell.updateStatus(2)).toBe(true)
        })
        
        it('should return true when number of neighbors is 3', () => {
            const cell = new Cell()
            expect(cell.updateStatus(3)).toBe(true)
        })
        
        it('should return false when number of neighbors is 1', () => {
            const cell = new Cell()
            expect(cell.updateStatus(1)).toBe(false)
        })

        it('should return false when number of neighbors is 1', () => {
            const cell = new Cell()
            expect(cell.updateStatus(0)).toBe(false)
        })
        
        it('should return false when number of neighbors is 1', () => {
            const cell = new Cell()
            expect(cell.updateStatus(4)).toBe(false)
        })
    })

})