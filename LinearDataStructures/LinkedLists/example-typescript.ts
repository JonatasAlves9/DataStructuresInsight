class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    append(value: T):void {
        const newNode = new ListNode(value);
        if (this.head === null){
            this.head = newNode
            return
        }

        let current = this.head;
        while (current.next !== null){
            current = current.next
        }

        current.next = newNode

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
list.append(1);
list.append(2);
list.append(3);
list.print(); // Isso imprimirá: 1, 2, 3
