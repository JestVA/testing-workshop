// monkey-patching
import thumbWar from '../thumb-war'
import * as utils from '../utils'
// import the utils module (see hint #1 at the bottom of the file)

test('returns winner', () => {
	const originalGetWinner = utils.getWinner
	utils.getWinner = (p1, p2) => p2

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')

  expect(winner).toBe('Kent C. Dodds')

	// so that other tests using this utility don't blow up
	utils.getWinner = originalGetWinner
})


































Hint #1:

import * as utils from '../utils'





Hint #2:

const originalGetWinner = utils.getWinner






Hint #3:

utils.getWinner = functionThatAlwaysReturnsPlayer2






Hint #4:

expect(winner).toBe('Kent C. Dodds')






Hint #5:

utils.getWinner = originalGetWinner

 */
