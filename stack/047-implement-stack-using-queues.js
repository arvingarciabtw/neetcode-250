class MyStack {
  // == TWO QUEUES ==
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(x) {
    this.q2.push(x);

    while (!this.q1.isEmpty()) {
      this.q2.push(this.q1.pop());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    return this.q1.pop();
  }

  top() {
    return this.q1.front();
  }

  empty() {
    return this.q1.isEmpty();
  }

  // == ONE QUEUE ==
  constructor() {
    this.q = new Queue();
  }

  push(x) {
    this.q.push(x);

    for (let i = this.q.size() - 1; i > 0; i--) {
      this.q.push(this.q.pop());
    }
  }

  pop() {
    return this.q.pop();
  }

  top() {
    return this.q.front();
  }

  empty() {
    return this.q.isEmpty();
  }

  // == QUEUE OF QUEUES ==
  constructor() {
    this.q = null;
  }

  push(x) {
    const newQueue = new Queue();
    newQueue.enqueue(x);
    newQueue.enqueue(this.q);
    this.q = newQueue;
  }

  pop() {
    if (this.q === null) return -1;

    const top = this.q.dequeue();
    this.q = this.q.dequeue();
    return top;
  }

  top() {
    if (this.q === null) return -1;
    return this.q.front();
  }

  empty() {
    return this.q === null;
  }
}
