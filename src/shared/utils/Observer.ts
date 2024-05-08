type Listener<T> = (observable: T) => void;

class Observer<T> {
  private listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener);
  }

  removeListener(listener: Listener<T>) {
    this.listeners = this.listeners.filter(lis => lis !== listener);
  }

  notify(observable: T) {
    this.listeners.forEach(list => list(observable));
  }
}

export default Observer;