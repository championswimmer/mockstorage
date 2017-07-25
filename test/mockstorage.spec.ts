import { MockStorage } from "../dist"
import {expect} from "chai"
import 'mocha'

let myStorage: MockStorage

describe('MockStorage', () => {
  before(() => {
    myStorage = new MockStorage()
  })
  it('setItem, getItem', () => {
    myStorage.setItem('a', '10')
    expect(myStorage.getItem('a')).to.equal('10')
  })
})
