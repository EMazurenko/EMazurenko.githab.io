import Snowflake from "src/shared/ui/snowfall/model/Snowflake";
import SnowDistribution from "src/shared/ui/snowfall/model/SnowDistribution";

class Cloud {
  private readonly snowflakePool: Snowflake[];
  private readonly distribution: SnowDistribution;

  constructor(poolSize: number, frontWidth: number) {
    this.distribution = new SnowDistribution(frontWidth);
    this.snowflakePool = new Array<Snowflake>(poolSize);
    for(let i = 0; i< poolSize; i++) {
      this.snowflakePool[i] = new Snowflake(i);
    }
  }

  getSnowflake() {
    if (this.snowflakePool.length) {
      const snowflake = this.snowflakePool.shift();
      snowflake.posX = this.distribution.randomPos();
      return snowflake;
    }
    return null;
  }

  returnSnowflake(snowflake: Snowflake) {
    snowflake.clear();
    this.snowflakePool.push(snowflake);
  }

}

export default Cloud;