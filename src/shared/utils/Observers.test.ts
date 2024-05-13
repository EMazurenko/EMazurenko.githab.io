import Observer from 'src/shared/utils/Observer';

describe('Observers', () => {
  it('Should call listener', () => {
    const observableTarget = 1;
    let observableResult: number;

    const observer = new Observer<number>();
    const handleListen = (value: number) => {
      observableResult = value;
    };

    observer.addListener(handleListen);
    observer.notify(observableTarget);
    expect(observableResult).toBe(observableTarget);
  });

  it('Should remove listener', () => {
    const observableTarget = 1;
    let observableResult = 0;

    const observer = new Observer<number>();
    const handleListen = (value: number) => {
      observableResult = value;
    };

    observer.addListener(handleListen);
    observer.removeListener(handleListen);
    observer.notify(observableTarget);
    expect(observableResult).toBe(observableResult);
  });
});
