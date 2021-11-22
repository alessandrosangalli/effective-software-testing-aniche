import PlanningPoker, { Estimate } from './1.2-planning-poker'

describe('Figure 1.2 - Fixing the bug of figure 1.1', () => {
  it('Now we cant input estimates in ascending order.', () => {
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

    const expectedResult = {
      lowestEstimate: 'Ross',
      highestEstimate: 'Chandler'
    }

    expect(planningPoker.identifyExtremes(estimates)).toEqual(expectedResult)
  })
})
