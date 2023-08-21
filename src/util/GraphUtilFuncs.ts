export function getBarGraphHeight(value: number, highestValue: number): number {
    return (70 * value) / highestValue;
}

export function getHighestValue<Type extends { value: number }>(data: Type[]): number {
    let highestValue: number = 0;

    for (let el of data) {
        if (el.value > highestValue) highestValue = el.value;
    }

    return highestValue;
}