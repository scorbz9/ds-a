function playlist(songs) {
    let tracker = new Set();
    let combinations = 0;
    for (let i = 0; i < songs.length; i += 1) {
        let currentSongLength = songs[i];
        let nextHighestMultiple = Math.ceil(currentSongLength / 60) * 60;
        let complement = nextHighestMultiple - currentSongLength;
        console.log(i, 'currentSongLength =', currentSongLength, 'complement =', complement)

        if (tracker.has(complement)) {
            combinations += 1;
            console.log('+1');
        }

        tracker.add(currentSongLength)
        console.log(tracker)
    }

    return combinations;
}

console.log(playlist([30, 20, 150, 100, 40]))
