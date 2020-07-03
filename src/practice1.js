const parseData = (input) => {
    const key = input.column.map((key) => key.name);
    return input.data.map((data) => (
        Object.assign(...(data.map((value, i) => ({ [key[i]]: value }))
        ))))
}
export { parseData };