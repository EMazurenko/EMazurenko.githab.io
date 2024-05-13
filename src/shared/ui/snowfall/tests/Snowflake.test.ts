import Snowflake from 'src/shared/ui/snowfall/model/Snowflake';

describe('Snowflake', () => {
  it('Should move with VELOCITY per second', () => {
    const snowflake = new Snowflake(1);
    let currentTimeMs = Date.now();

    //Холостой проход для инициализации дельты
    snowflake.fall(currentTimeMs);
    expect(snowflake.pos.y).toBe(0);

    //Прошла одна секунда
    currentTimeMs += 1 * 1000;
    snowflake.fall(currentTimeMs);
    expect(snowflake.pos.y).toBe(Snowflake.FALL_VELOCITY);
  });
});
