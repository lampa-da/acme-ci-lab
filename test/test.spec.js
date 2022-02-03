const {expect} = require('chai')
const { syncAndSeed, models: { Movie, Role, Actor} } = require('../db')

describe('API', ()=>{
  before(()=> syncAndSeed())
  it('data seeded', async()=>{
    const movies = await Movie.findAll()
    const actors = await Actor.findAll()
    const roles = await Role.findAll()
    expect(movies.length).to.not.equal(0)
    expect(actors.length).to.not.equal(0)
    expect(roles.length).to.not.equal(0)
  })
})
