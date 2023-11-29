//Imports the shape classes from the shapes.js to run tests
const { Triangle, Circle, Square } = require('./shapes')
//Tests if the triangle class renders correctly and in the color blue
test('Triangle is generated in the color blue', () => {
    //Creates a new instance of triangle with the color blue
    const triangle = new Triangle('blue')
    //Expects the render method to produce an SVG for a blue triangle
    expect(triangle.render()).toEqual('<polygon points="150,20 230,160 70,160" fill="blue"/>')
})
//Tests if the circle class renders correctly and in the color red
test('Circle is generated in the color of red', () => {
    //Creates a new instance of circle with the color red
    const circle = new Circle('red')
    //Expects the render method to produce an SVG for a red circle
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>')
})
//Tests if the square class renders correctly and in the color green
test('Square is generated in the color of green', () => {
    //Creates a new instance of square with the color green
    const square = new Square('green')
    //Expects the render method to produce an SVG for a green square
    expect(square.render()).toEqual('<rect x="70" y="40" width="160" height="160" fill="green"/>')
})