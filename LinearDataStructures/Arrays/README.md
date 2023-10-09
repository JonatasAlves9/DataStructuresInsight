# Arrays in TypeScript

Arrays are a fundamental data structure used to store a collection of items, typically of the same type. In TypeScript, arrays can be defined in multiple ways, offering both static and dynamic behaviors.

## Basic Array Operations

Arrays in TypeScript support various operations, including:

- **Accessing elements**: Use the index to access an element.
- **Modifying elements**: Directly set the value using the index.
- **Finding elements**: Using methods like `indexOf`.

## Example Implementation

Below is a simple class that showcases basic array operations:

```typescript
class Example {
private array: number[] = [10, 20, 30, 40, 50];

    // Method to find the index of an item
    findItem(item: number): number {
        return this.array.indexOf(item);
    }
}
```

### Using the `findItem` Method

The `findItem` method uses the native `indexOf` function to return the index of the given item. If the item is present in the array, it returns the index (zero-based) of the first occurrence. If not, it returns `-1`.

```typescript
const example = new Example();
console.log(example.findItem(30));  // Output: 2
console.log(example.findItem(100)); // Output: -1
```

## Benefits of Arrays

- **Fast access**: Accessing elements in an array using an index is very fast.
- **Predictable size**: Especially in the case of static arrays, you know the amount of memory you're allocating.
- **Easy to use**: Most programming languages, including TypeScript, have built-in methods and properties to work with arrays.

## Considerations

- Arrays in TypeScript are zero-indexed, meaning the first item is at index `0`.
- Dynamic arrays (like JavaScript arrays or TypeScript's `Array<T>`) can grow or shrink, but static arrays have a fixed size.
- Ensure you're accessing valid indices to avoid out-of-bounds errors.
