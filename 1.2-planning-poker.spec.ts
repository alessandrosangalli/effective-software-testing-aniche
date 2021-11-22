import PlanningPoker, { Estimate } from './1.1-planning-poker'

describe('Figure 1.2 - Planning Poker bug when have estimates in ascending order', () => {
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
      lowestEstimate: null, // instead of null we should receive { developer: 'Ross', value: 2 }
      highestEstimate: { developer: 'Chandler', value: 16 }
    }

    expect(planningPoker.identifyExtremes(estimates)).toEqual(expectedWrongResult)
  })
})
