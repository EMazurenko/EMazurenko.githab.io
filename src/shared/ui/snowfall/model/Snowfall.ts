import Snowflake from 'src/shared/ui/snowfall/model/Snowflake';
import Cloud from 'src/shared/ui/snowfall/model/Cloud';
import Snowheap from 'src/shared/ui/snowfall/model/Snowheap';
import Observer, { Listener } from 'src/shared/utils/Observer';

class Snowfall {
  private static NEW_SNOWFLAKE_TIMEOUT = 1000 / 1.5;
  private static THAW_SNOWHEAP_TIMEOUT = 1000;
  private static SNOWFLAKE_COUNT = 10;

  private cloud: Cloud;
  private fallingSnowflakes: Snowflake[] = [];
  private snowheap: Snowheap;

  private lastNewSnowflakeMs: number;
  private lastThawSnowheapMs: number;

  private snowflakesObserver: Observer<Snowflake[]> = new Observer<Snowflake[]>();
  private snowheapObserver: Observer<Snowheap> = new Observer<Snowheap>();

  constructor(frontWidth: number, bottomLine: number) {
    this.cloud = new Cloud(Snowfall.SNOWFLAKE_COUNT, frontWidth);
    this.snowheap = new Snowheap(bottomLine);
  }

  addSnowflakesListener(listener: Listener<Snowflake[]>) {
    this.snowflakesObserver.addListener(listener);
  }

  removeSnowflakesListener(listener: Listener<Snowflake[]>) {
    this.snowflakesObserver.removeListener(listener);
  }

  addSnowheapListener(listener: Listener<Snowheap>) {
    this.snowheapObserver.addListener(listener);
  }

  removeSnowheapListener(listener: Listener<Snowheap>) {
    this.snowheapObserver.removeListener(listener);
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
    for (const snowflake of this.fallingSnowflakes) {
      snowflake.fall(currentTimeMs);
      if (this.snowheap.isFallenSnowflake(snowflake)) {
        this.cloud.returnSnowflake(snowflake);
        this.snowheapObserver.notify(this.snowheap);
      }
      refreshFallingSnowflakes.push(snowflake);
    }
    this.fallingSnowflakes = refreshFallingSnowflakes;
    this.snowflakesObserver.notify(refreshFallingSnowflakes);
  }

  private thawSnowheap(currentTimeMs: number) {
    if (this.checkTimeout(currentTimeMs, this.lastThawSnowheapMs, Snowfall.THAW_SNOWHEAP_TIMEOUT)) {
      this.snowheap.thaw();
      this.lastThawSnowheapMs = currentTimeMs;
      this.snowheapObserver.notify(this.snowheap);
    }
  }
}

export default Snowfall;
