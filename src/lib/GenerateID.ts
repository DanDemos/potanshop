let lastId = 0;

export function GenerateID (prefix='id') {
    lastId++;
    return `${lastId}`;
}