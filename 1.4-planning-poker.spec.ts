import PlanningPoker, { Estimate, MinimumNumberOfEstimatesError } from './1.3-planning-poker'

// We dont need the estimates === null verification because in Typescript this method never accepts null inpput
describe('Figure 1.4 - Test cases for null, empty list, and list with a single element', () => {
  it('Should reject empty list of estimates', () => {
    const planningPoker = new PlanningPoker()

    expect(() => { planningPoker.identifyExtremes([]) }).toThrow(new MinimumNumberOfEstimatesError())
  })

  it('Should reject single estimate', () => {
    const planningPoker = new PlanningPoker()

    const singleEstimate: Estimate[] = [{
      developer: 'Eleanor',
      value: 1
    }]

    expect(() => { planningPoker.identifyExtremes(singleEstimate) }).toThrow(new MinimumNumberOfEstimatesError())
  })
})
