interface ArrayOperations {
    addItem(item: number): void;
    removeItem(item: number): void;
    findItem(item: number): number;
}

class EnhancedExampleTypescript implements ArrayOperations {
    private array: Array<number> = [1, 2, 3, 4, 5, 6, 7];

    getArray(): Array<number> {
        return this.array;
    }

    addItem(item: number): void {
        this.array.push(item);
    }


    removeItem(item: number): void {

        const index = this.array.indexOf(item);
        this.array.splice(index, 1)

    }

    findItem(item: number): number {
        return this.array.indexOf(item);
    }
}

// Testando
const example = new EnhancedExampleTypescript();
console.log(example.getArray());  // [1, 2, 3, 4, 5, 6, 7]
example.addItem(8);
console.log(example.getArray());  // [1, 2, 3, 4, 5, 6, 7, 8]
example.removeItem(4);
console.log(example.getArray());  // [1, 2, 3, 5, 6, 7, 8]
console.log(example.findItem(5)); // 3
