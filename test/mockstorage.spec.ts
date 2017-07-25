import { MockStorage } from "../dist"
import {expect} from "chai"
import 'mocha'

let myStorage: MockStorage

describe('MockStorage', () => {
  before(() => {
    myStorage = new MockStorage()
    myStorage.setItem('b', '50')
  })
  it('length', () => {
    expect(myStorage.length).to.equal(1)
  })
  it('getItem', () => {
    expect(myStorage.getItem('b')).to.equal('50')
  })
  it('setItem', () => {
    myStorage.setItem('a', '10')
    expect(myStorage.getItem('a')).to.equal('10')
  })
  it('key', () => {
    expect(myStorage.key(0)).to.equal('b')
  })
  it('removeItem', () => {
    myStorage.removeItem('a')
    expect(myStorage.getItem('a')).to.be.an('undefined')
  })
  it('clear', () => {
    myStorage.clear()
    expect(myStorage.length).to.equal(0)
  })
})
