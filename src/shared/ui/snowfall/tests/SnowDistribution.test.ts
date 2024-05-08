import SnowDistribution from "src/shared/ui/snowfall/model/SnowDistribution";

describe('SnowDistribution', () => {
  it('Should inverse bell distribution', () => {
    const snowDistribution = new SnowDistribution(100);
    const distributionResults: {[idx: number]: number} = {};
    const distributionIdx: number[] = [];

    for (let i = 0; i < 1000; i++) {
      const r = snowDistribution.randomPos();
      if (r in distributionResults) {
        distributionResults[r] += 1;
      } else {
        distributionResults[r] = 1;
        distributionIdx.push(r);
      }
    }

    const countIdx = distributionIdx.length;
    const sortedDistributionIdx = distributionIdx.sort((a,b) => a > b ? 1 : -1);

    const firstIdx = sortedDistributionIdx[0];
    const firstQuarterIdx = sortedDistributionIdx.slice(Math.round(countIdx/4),Math.round(countIdx/4) + 1)[0];
    const firstThirdIdx = sortedDistributionIdx.slice(Math.round(countIdx/3),Math.round(countIdx/3) + 1)[0];
    const halfIdx = sortedDistributionIdx[Math.round(countIdx/2)];
    const lastThirdIdx = sortedDistributionIdx.slice(Math.round(2 * countIdx/3),Math.round(2 * countIdx/3) + 1)[0];
    const lastQuarterIdx = sortedDistributionIdx.slice(Math.round(3 * countIdx/4),Math.round(3 * countIdx/4) + 1)[0];
    const lastIdx = sortedDistributionIdx[countIdx - 1];

    expect(
        (distributionResults[firstIdx] > distributionResults[firstQuarterIdx]) &&
        (distributionResults[firstQuarterIdx] > distributionResults[firstThirdIdx]) &&
        (distributionResults[firstThirdIdx] > distributionResults[halfIdx]) &&
        (distributionResults[halfIdx] < distributionResults[lastThirdIdx]) &&
        (distributionResults[lastThirdIdx] < distributionResults[lastQuarterIdx]) &&
        (distributionResults[lastQuarterIdx] < distributionResults[lastIdx])
    ).toBeTruthy();
  });
});