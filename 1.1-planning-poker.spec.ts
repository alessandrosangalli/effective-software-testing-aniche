import PlanningPoker, { Estimate } from './1.1-planning-poker'

describe('Figure 1.1 - Planning Poker bug when have estimates in ascending order', () => {
  it('This bug causes us not to get the lowest estimate', () => {
    const estimates: Estimate[] = [
      {
        developer: 'Ross',
        value: 2
      },
      {
        developer: 'Phoebe',
        value: 4
      },

      {
        developer: 'Monica',
        value: 8
      },
      {
        developer: 'Chandler',
        value: 16
      }
    ]

    const planningPoker = new PlanningPoker()

    const expectedWrongResult = {
      lowestEstimate: undefined, // instead of null we should receive  'Ross' instead of null
      highestEstimate: 'Chandler'
    }

    expect(planningPoker.identifyExtremes(estimates)).toEqual(expectedWrongResult)
  })
})
