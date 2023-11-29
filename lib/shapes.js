//Base class for diffent shapes to inherit values through oop
class Shapes {
    //Constructor to initialize shapes with a color
    constructor(color) {
        //Sets the color property
        this.color = color
    }
    //Method to change the color of the shape
    setColor(color) {
        //Updates the color property
        this.color = color
    }
}
//Class for triangle that inherits from shapes
class Triangle extends Shapes {
    //Method to render the triangle as an SVG
    render() {
        //Returns the SVG as a triangle with the color property
        return `<polygon points="150,20 230,160 70,160" fill="${this.color}"/>`
    }
}
//Class for circle that inherits from shapes
class Circle extends Shapes {
    //Method to render the circle as an SVG
    render() {
        //Returns the SVG as a circle with the color property
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
//Class for square that inherits from shapes
class Square extends Shapes {
    //Method to render the square as an SVG
    render() {
        //Returns the SVG as a square with the color property
        return `<rect x="70" y="40" width="160" height="160" fill="${this.color}"/>`
    }
}
//Export the circle, triangle, and square classes for use in other modules
module.exports = { Circle, Triangle, Square }
