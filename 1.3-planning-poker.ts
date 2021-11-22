
export interface Estimate {developer: string, value: number}

export class MinimumNumberOfEstimatesError extends Error {
  constructor () {
    super()
    this.message = 'There has to be more than 1 estimate in the list'
  }
}

export default class PlanningPoker {
  public identifyExtremes (estimates: Estimate[]): {lowestEstimate: Estimate | null, highestEstimate: Estimate | null} {
    // We dont need the estimates === null verification because in Typescript "estimates: Estimate[]" never will be null
    if (estimates.length <= 1) {
      throw new MinimumNumberOfEstimatesError()
    }

    let lowestEstimate: Estimate | null = null
    let highestEstimate: Estimate | null = null

    for (const estimate of estimates) {
      if (highestEstimate === null || estimate.value > highestEstimate.value) {
        highestEstimate = estimate
      }

      if (lowestEstimate === null || estimate.value < lowestEstimate.value) {
        lowestEstimate = estimate
      }
    }

    return {
      lowestEstimate,
      highestEstimate
    }
  }
}
