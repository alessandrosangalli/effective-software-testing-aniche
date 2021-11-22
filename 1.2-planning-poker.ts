
export interface Estimate {developer: string, value: number}

export default class PlanningPoker {
  public identifyExtremes (estimates: Estimate[]): {lowestEstimate: Estimate | null, highestEstimate: Estimate | null} {
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
