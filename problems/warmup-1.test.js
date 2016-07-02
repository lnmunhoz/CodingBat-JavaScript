import { assert } from 'chai'
import {
  sleepIn,
  monkeyTrouble,
  sumDouble,
  diff21,
  parrotTrouble,
  makes10,
  nearHundred,
  posNeg,
  notString,
  missingChar,
  frontBack,
  front3
} from './warmup-1';

describe('Warmup-1:', function() {
  it('sleepIn(false, false) should return true', () => assert.isTrue(sleepIn(false, false)))
  it('sleepIn(true, false) should return false', () => assert.isFalse(sleepIn(true, false)))
  it('sleepIn(false, true) should return true',  () => assert.isTrue(sleepIn(false, true)))

  it('monkeyTrouble(true, true) should return true',    () => assert.isTrue(monkeyTrouble(true, true)))
  it('monkeyTrouble(false, false) should return false', () => assert.isTrue(monkeyTrouble(false, false)))
  it('monkeyTrouble(true, false) should return true',   () => assert.isTrue(monkeyTrouble(true, false)))

  it('sumDouble(1, 2) should return 3', () => assert.equal(sumDouble(1, 2), 3))
  it('sumDouble(3, 2) should return 5', () => assert.equal(sumDouble(3, 2), 5))
  it('sumDouble(2, 2) should return 8', () => assert.equal(sumDouble(2, 2), 8))

  it('diff21(19) should return 2', () => assert.equal(diff21(19), 2))
  it('diff21(10) should return 11',() => assert.equal(diff21(10), 11))
  it('diff21(21) should return 0', () => assert.equal(diff21(21), 0))

  it('parrotTrouble(true, 6) should return true' ,  () => assert.isTrue(parrotTrouble(true, 6)))
  it('parrotTrouble(true, 7) should return false',  () => assert.isFalse(parrotTrouble(true, 7)))
  it('parrotTrouble(false, 6) should return false', () => assert.isFalse(parrotTrouble(false, 6)))

  it('makes10(9, 10) should return true', () => assert.isTrue(makes10(9, 10)))
  it('makes10(9, 9) should return false', () => assert.isFalse(makes10(9, 9)))
  it('makes10(1, 9) should return false', () => assert.isFalse(makes10(1, 9)))

  it('nearHunded(93) should return true', () => assert.isTrue(nearHunded(93)))
  it('nearHunded(90) should return true', () => assert.isTrue(nearHunded(90)))
  it('nearHunded(89) should return true', () => assert.isTrue(nearHunded(89)))

  it('posNeg(1, -1, false) should return true', () => assert.isTrue(posNeg(1, -1, false)))
  it('posNeg(-1, 1, false) should return true', () => assert.isTrue(posNeg(-1, 1, false)))
  it('posNeg(-4, -5, true) should return true', () => assert.isTrue(posNeg(-4, -5, true)))

  it("notString('candy'), should return 'not candy')", () => assert.equal(notString('candy'), 'not candy'))
  it("notString('x'), should return 'not x')",         () => assert.equal(notString('x'), 'not x'))
  it("notString('bad'), should return 'not bad')",     () => assert.equal(notString('bad'), 'not bad'))

  it ("missingChar('kitten', 1) should return 'ktten'", () => assert.equal(missingChar('kitten', 1), 'ktten'))
  it ("missingChar('kitten', 0) should return 'itten'", () => assert.equal(missingChar('kitten', 0), 'itten'))
  it ("missingChar('kitten', 4) should return 'kittn'", () => assert.equal(missingChar('kitten', 4), 'kittn'))

  it("frontBack('code') should return 'eodc'", () =>  assert.equal(frontBack('code'), 'eodc'))
  it("frontBack('a') should return 'a'",       () =>  assert.equal(frontBack('a'), 'a'))
  it("frontBack('ab') should return 'ba'",     () =>  assert.equal(frontBack('ab'), 'ba'))

  it("front3('Java') should return 'JavJavJav'",      () => assert.equal(front3('Java'), 'JavJavJav'))
  it("front3('Chocolate') should return 'Chochocho'", () => assert.equal(front3('Chocolate'), 'Chochocho'))
  it("front3('abc') should return 'abcabcabc'",       () => assert.equal(front3('abc'), 'abcabcabc'))
});
