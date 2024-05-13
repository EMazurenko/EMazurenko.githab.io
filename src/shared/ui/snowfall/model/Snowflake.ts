class Snowflake {
  private static readonly FLAKE_SIZES = [4, 5, 6];
  private readonly id: number;
  private readonly size: number;
  private xPos: number;
  private yPos: number;

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
}

export default Snowflake;
