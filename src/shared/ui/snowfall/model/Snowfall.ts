import Snowflake from "src/shared/ui/snowfall/model/Snowflake";
import Cloud from "src/shared/ui/snowfall/model/Cloud";
import Snowheap from "src/shared/ui/snowfall/model/Snowheap";

class Snowfall {
  private static NEW_SNOWFLAKE_TIMEOUT = 1000 / 1.5;
  private static THAW_SNOWHEAP_TIMEOUT = 1000;
  private static SNOWFLAKE_COUNT = 10;

  private cloud: Cloud;
  private fallingSnowflakes: Snowflake[] = [];
  private snowheap: Snowheap;

  private lastNewSnowflakeMs: number;
  private lastThawSnowheapMs: number;

  constructor(frontWidth: number, bottomLine: number) {
    this.cloud = new Cloud(Snowfall.SNOWFLAKE_COUNT, frontWidth);
    this.snowheap = new Snowheap(bottomLine);
  }

  loop() {
    const currentTimeMs = Date.now();
    this.newSnowflake(currentTimeMs);
    this.fallSnowflakes(currentTimeMs);
    this.thawSnowheap(currentTimeMs);
  }

  private newSnowflake(currentTimeMs: number) {
    if (this.checkTimeout(currentTimeMs, this.lastNewSnowflakeMs, Snowfall.NEW_SNOWFLAKE_TIMEOUT)) {
      const newSnowflake = this.cloud.getSnowflake();
      newSnowflake && this.fallingSnowflakes.push(newSnowflake);
      this.lastNewSnowflakeMs = currentTimeMs;
    }
  }

  private checkTimeout(currentTimeMs: number, lastTimeMs: number, threshold: number) {
    if (!lastTimeMs) {
      return true;
    }
    return lastTimeMs + threshold > currentTimeMs;
  }

  private fallSnowflakes(currentTimeMs: number) {
    const refreshFallingSnowflakes: Snowflake[] = [];
    for(const snowflake of this.fallingSnowflakes) {
      snowflake.fall(currentTimeMs);
      if (this.snowheap.isFallenSnowflake(snowflake)) {
        this.cloud.returnSnowflake(snowflake);
      }
      refreshFallingSnowflakes.push(snowflake);
    }
    this.fallingSnowflakes = refreshFallingSnowflakes;
  }

  private thawSnowheap(currentTimeMs: number) {
    if (this.checkTimeout(currentTimeMs, this.lastThawSnowheapMs, Snowfall.THAW_SNOWHEAP_TIMEOUT)) {
      this.snowheap.thaw();
      this.lastThawSnowheapMs = currentTimeMs;
    }
  }

}

export default Snowfall;