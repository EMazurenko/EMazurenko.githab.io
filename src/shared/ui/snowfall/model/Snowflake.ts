class Snowflake {
  static readonly FALL_VELOCITY = 10; // Скорость падения в координатах в секунду
  private static readonly FLAKE_SIZES = [4, 5, 6];
  private readonly id: number;
  private readonly size: number;
  private xPos: number;
  private yPos: number;
  private lastFallTimeMs: number;

  constructor(id: number) {
    this.id = id;
    this.size = Snowflake.FLAKE_SIZES[Math.floor(Math.random() * Snowflake.FLAKE_SIZES.length)];
    this.clear();
  }

  clear() {
    this.yPos = 0;
  }

  set posX(x: number) {
    this.xPos = x;
  }

  get pos() {
    return { x: this.xPos, y: this.yPos };
  }

  get key() {
    return this.id;
  }

  get height() {
    return this.size;
  }

  fall(currentTimeMs: number) {
    if (this.lastFallTimeMs) {
      const deltaSeconds = (currentTimeMs - this.lastFallTimeMs) / 1000;
      this.yPos += Math.round(Snowflake.FALL_VELOCITY * deltaSeconds);
    }
    this.lastFallTimeMs = currentTimeMs;
  }
}

export default Snowflake;
