import Snowheap from 'src/shared/ui/snowfall/model/Snowheap';
import Snowflake from 'src/shared/ui/snowfall/model/Snowflake';

describe('Snowheap', () => {
  it('Should append fall place', () => {
    const snowheap = new Snowheap(20);

    const snowflake = new Snowflake(1);
    snowflake.posX = 1;

    expect(snowheap.fallPlaces.length).toBe(0);
    expect(snowheap.isFallenSnowflake(snowflake)).not.toBeTruthy();
    expect(snowheap.fallPlaces[0].xPos).toBe(snowflake.pos.x);
  });

  it('Should is fallen snowflake', () => {
    const baseline = 10;
    const snowheap = new Snowheap(baseline);

    const snowflake = new Snowflake(1);
    snowflake.posX = 1;
    snowflake.fall(1 * 1000);
    snowflake.fall(2 * 1000);

    expect(snowheap.isFallenSnowflake(snowflake)).toBeTruthy();
    expect(snowheap.fallPlaces[0].height).toBe(baseline - snowflake.height);
  });

  it('Should snowheap thaw', () => {
    const baseline = 10;
    const snowheap = new Snowheap(baseline);
    snowheap.fallPlaces.push({ xPos: 1, height: 0 });
    snowheap.fallPlaces.push({ xPos: 2, height: baseline - Snowheap.THAW_VELOCITY });
    snowheap.fallPlaces.push({ xPos: 3, height: baseline - 2 * Snowheap.THAW_VELOCITY });
    snowheap.thaw();

    expect(snowheap.fallPlaces.reduce((sum, place) => (sum += place.height), 0)).toBe(
      baseline - Snowheap.THAW_VELOCITY
    );
  });
});
