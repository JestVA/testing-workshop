import {isPasswordAllowed, userToJSON} from '../auth'

// generated tests (factory...)
// this test is easier to add to (for many parameters)
describe('isPasswordAllowed', () => {
  const allowedPasswords = ['asb.cB7']
  const disallowedPasswords = ['fffffffffff', '', '88888888888']

  allowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  disallowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be false`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })
})

// Or like this
const allowedPasswords = ['asb.cB7']
const disallowedPasswords = ['fffffffffff', '', '88888888888']

allowedPasswords.forEach(pwd => {
  it(`isPasswordAllowed: "${pwd}" should be allowed`, () => {
    expect(isPasswordAllowed(pwd)).toBe(true)
  })
})

disallowedPasswords.forEach(pwd => {
  it(`isPasswordAllowed: "${pwd}" should be false`, () => {
    expect(isPasswordAllowed(pwd)).toBe(true)
  })
})

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('fffffffffff')).toBe(false)
  expect(isPasswordAllowed('88888888888')).toBe(false)
  expect(isPasswordAllowed('skl.8eVf')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }
  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
})
