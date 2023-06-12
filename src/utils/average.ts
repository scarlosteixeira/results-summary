
interface Data {
    score: number;
}
function average(...args: Data[]): string{
    const total = args.reduce((acc, val) => acc + val.score, 0);
    return (total / args.length).toFixed(0);
}

export default average;
