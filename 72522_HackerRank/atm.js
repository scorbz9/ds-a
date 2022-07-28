// isn't fast enough, o(n^2) because of shift inside of while loop
// idk how to make it faster

function getFinalOrder(k, amount) {
    // associate person position w/ person amount in 2D array
    let queue = amount.map((ele, i) => [ i + 1, ele ]);
    let result = [];
    console.log(queue)

    while (queue.length) {
        let currentPerson = queue.shift();
        let [ currentPersonPosition, currentPersonAmount ] = currentPerson;

        if (currentPersonAmount - k <= 0) {
            result.push(currentPersonPosition)
        } else {
            queue.push([ currentPersonPosition, currentPersonAmount - k ]);
        }
    }

    return result;
}
