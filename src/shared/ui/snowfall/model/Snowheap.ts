import Snowflake from "src/shared/ui/snowfall/model/Snowflake";

export interface FallPlace {
  xPos: number;
  height: number;
}

class Snowheap {
  static readonly THAW_VELOCITY = 2;
  private readonly baseline: number;
  readonly fallPlaces: FallPlace[] = [];

  constructor(baseline) {
    this.baseline = baseline;
  }

  thaw() {
    for (const place of this.fallPlaces) {
      if (this.baseline - place.height >= Snowheap.THAW_VELOCITY)
        place.height -= Snowheap.THAW_VELOCITY;
    }
  }

  isFallenSnowflake(snowflake: Snowflake) {
    const fallPlace = this.getFallPlace(snowflake.pos.x);
    if (snowflake.pos.y >= fallPlace.height) {
      fallPlace.height -= snowflake.height;
      return true;
    }
    return false;
  }

  private getFallPlace(xPos: number) {
    for (const place of this.fallPlaces) {
      if (place.xPos === xPos) {
        return place;
      }
    }
    const fallPlace = {xPos: xPos, height: this.baseline};
    this.fallPlaces.push(fallPlace);
    return fallPlace;
  }

}

export default Snowheap;