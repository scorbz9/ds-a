function minNum(threshold, points) {
    let currentMin = points[0];
    let currentMax = points[0]
    let problemsSolved = 1;
    let solvedAProblem = true;

    for (let i = 1; i < points.length; i += 1) {
        if (points[i] > currentMax) currentMax = points[i];
        else if (points[i] < currentMin) currentMin = points[i];

        let currentDiff = currentMax - currentMin;
        console.log(currentDiff)
        if (solvedAProblem && currentDiff < threshold) {
            // we don't meet the threshold here and we have the option to skip, so we skip
            solvedAProblem = false;
            continue;
        } else if (currentDiff >= threshold) {
            // we've met threshold, return amount of problems taken
            problemsSolved += 1;
            return problemsSolved;
        }

        // we've had to solve current problem
        solvedAProblem = true;
        problemsSolved += 1;
    }

    return points.length;
}
