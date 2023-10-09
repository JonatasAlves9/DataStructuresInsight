class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    append(value: T): void {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode
            return
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }

        current.next = newNode

    }

    delete(value: T): void {
        if (this.head && this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previousCurrent: ListNode<T> | null = null;

        while (current !== null && current.value !== value) {
            previousCurrent = current;
            current = current.next;
        }

        if (current !== null) {
            if (previousCurrent !== null) {
                previousCurrent.next = current.next;
            }
        }
    }

    search(value: T): T | undefined {
        let current = this.head;

        while (current !== null && current.value !== value) {
            current = current.next
        }

        if (current !== null) {
            return current.value
        } else {
            return undefined
        }
    }

    print(): void {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next
        }
    }
}

const list = new LinkedList<number>();
console.log('Teste de append:')
list.append(1);
list.append(2);
list.append(3);
list.print(); // Isso imprimirá: 1, 2, 3
console.log('Teste de Delete: ')
list.delete(2)
list.print(); // Isso imprimirá: 1, 2, 3
console.log('Teste do search: ')
console.log(list.search(3))
