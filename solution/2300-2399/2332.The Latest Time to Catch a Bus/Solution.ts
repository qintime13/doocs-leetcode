function latestTimeCatchTheBus(buses: number[], passengers: number[], capacity: number): number {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);
    let [j, c] = [0, 0];
    for (const t of buses) {
        c = capacity;
        while (c && j < passengers.length && passengers[j] <= t) {
            --c;
            ++j;
        }
    }
    --j;
    let ans = c > 0 ? buses.at(-1)! : passengers[j];
    while (j >= 0 && passengers[j] === ans) {
        --ans;
        --j;
    }
    return ans;
}
