class ListNodeDouble<T> {
    value: T;
    next: ListNodeDouble<T> | null = null;
    previous: ListNodeDouble<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

class LinkedDoublePointList<T> {
    head: ListNodeDouble<T> | null = null;
    tail: ListNodeDouble<T> | null = null;

    append(value: T): void {
        const newNode = new ListNodeDouble(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return
        }

        if (this.tail) {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
    }

    print(): void {
        let current = this.head;

        while(current !== null){
            console.log(current.value)
            current = current.next
        }
    }
}

const listOfNumbers = new LinkedDoublePointList<number>();
console.log('Teste de append:')
listOfNumbers.append(1);
listOfNumbers.append(2);
listOfNumbers.append(3);
listOfNumbers.print(); // Isso imprimirá: 1, 2, 3
