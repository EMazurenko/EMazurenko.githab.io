class SnowDistribution {
  private static readonly NUM_DICE = 5;
  private static readonly COUNT_FACE = 6;
  private readonly rateWidth: number;
  private readonly halfWidth: number;

  constructor(frontWidth: number) {
    this.halfWidth = frontWidth / 2;
    this.rateWidth = frontWidth / (SnowDistribution.NUM_DICE * SnowDistribution.COUNT_FACE);
  }

  randomPos(): number {
    const r = this.calcRandomValue();
    return Math.round(
        this.containsInFirstHalfInterval(r)
        ? (r - Math.ceil(SnowDistribution.NUM_DICE / 2)) * this.rateWidth + this.halfWidth
        : (r - Math.floor(SnowDistribution.NUM_DICE / 2)) * this.rateWidth - this.halfWidth
    );
  }

  private calcRandomValue() {
    let randomValue = 0;
    for (let i = 0; i < SnowDistribution.NUM_DICE; i++) {
        randomValue += Math.ceil(Math.random() * SnowDistribution.COUNT_FACE);
    }
    return randomValue;
  }

  private containsInFirstHalfInterval(r:number) {
    return r < Math.ceil((SnowDistribution.NUM_DICE + SnowDistribution.NUM_DICE * SnowDistribution.COUNT_FACE) / 2);
  }

}

export default SnowDistribution;