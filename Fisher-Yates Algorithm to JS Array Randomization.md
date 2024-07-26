# From Fisher-Yates Algorithm to a JavaScript Function for Randomizing an Array

The Fisher-Yates algorithm is a method for randomly shuffling a defined sequence of items. The process involves repeatedly picking a random item from the list, placing it in a new shuffled sequence, and then removing it from the original list. This continues until every item is moved to the new sequence. This shuffle ensures that every possible order of the items is equally likely.

The modern Fisher-Yates shuffle, introduced by Richard Durstenfeld in 1964 and popularized by Donald E. Knuth as "Algorithm P (Shuffling)," is optimized for computer use. This version improves on the original by swapping elements directly rather than counting remaining numbers. This optimization reduces the time complexity from \( O(n^2) \) (in the naive implementation) to \( O(n) \).

### Fisher-Yates Original Method

1. **List the Numbers**: 
    - Write down numbers from 1 to N.

2. **Pick and Strike**: 
    - Randomly choose a number \( k \) and strike out the k-th number on the list, placing it at the end of a new list.

3. **Repeat**: 
    - Continue choosing and striking numbers until none are left.

The final list of struck-out numbers is a random permutation of the original list. If the random choices are fair and unbiased, so will be the final shuffled sequence.

### Modern Method

To shuffle an array of `n` elements (zero-based indexing):

1. For `i` from `n-1` down to `1`:
   - Generate a random index `j` such that `0 ≤ j ≤ i`
   - Swap the elements at indices `i` and `j`

## Transforming the Algorithm into JavaScript for This Memory Game

1. **Define the Function**:
    - Create a function `randomizerArraySimb` that takes an array `array` as its parameter.

    ```javascript
    function randomizerArraySimb(array) {
        }
    ```

2. **Loop Backwards**:
    - Use a `for` loop to iterate from the end of the array to the beginning.

    ```javascript
        for (let i = array.length - 1; i > 0; i--) {
    ```

3. **Generate a Random Index**:
    - Inside the loop, generate a random index `random` between `0` and `i`.

    ```javascript
            const random = Math.floor(Math.random() * (i + 1));
    ```

4. **Swap Elements**:
    - Swap the elements at indices `i` and `random`. This line uses destructuring assignment to perform the swap:

    ```javascript
            [array[i], array[random]] = [array[random], array[i]];
        }
    ```

5. **Return the Shuffled Array**:
    - The array is shuffled in place and returned.

    ```javascript
        return array;
    }
    ```

### Complete JavaScript Code

```javascript

function randomizerArraySimb(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
    return array;
}

