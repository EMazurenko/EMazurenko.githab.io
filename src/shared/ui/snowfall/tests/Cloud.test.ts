import Cloud from 'src/shared/ui/snowfall/model/Cloud';

describe('Cloud', () => {
  it('Should first not null for one-size pool', () => {
    const cloud = new Cloud(1, 100);

    const firstSnowflake = cloud.getSnowflake();
    expect(firstSnowflake).not.toBeNull();
  });

  it('Should second null on second getting for one-size pool', () => {
    const cloud = new Cloud(1, 100);

    const firstSnowflake = cloud.getSnowflake();
    expect(firstSnowflake).not.toBeNull();

    const secondSnowflake = cloud.getSnowflake();
    expect(secondSnowflake).toBeNull();
  });

  it('Should third not null after return for one-size pool', () => {
    const cloud = new Cloud(1, 100);

    const firstSnowflake = cloud.getSnowflake();
    expect(firstSnowflake).not.toBeNull();

    const secondSnowflake = cloud.getSnowflake();
    expect(secondSnowflake).toBeNull();

    cloud.returnSnowflake(firstSnowflake);
    const thirdSnowflake = cloud.getSnowflake();
    expect(thirdSnowflake).not.toBeNull();
  });

  it('Should zero y-position after regetting from pool', () => {
    const cloud = new Cloud(1, 100);

    let snowflake = cloud.getSnowflake();
    snowflake.pos.y = 100;
    cloud.returnSnowflake(snowflake);
    snowflake = cloud.getSnowflake();
    expect(snowflake.pos.y).toBe(0);
  });
});
