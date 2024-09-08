type Circle = {
    kind: 'circle',
    radius: number
}
type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number
}
type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.round(Math.PI * shape.radius * shape.radius);
    } else if (shape.kind === 'rectangle') {
        return Math.round(shape.width * shape.height);
    }
}
export { getArea }