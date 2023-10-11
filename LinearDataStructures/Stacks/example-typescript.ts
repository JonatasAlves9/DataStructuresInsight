class Stack<T> {
    items: T[] = []

    push(item: T) {
        this.items.push(item)
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop()
        }
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    peek(): T{
        return this.items[this.items.length - 1]
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());  // 3
console.log(stack.pop());   // 3
console.log(stack.peek());  // 2
