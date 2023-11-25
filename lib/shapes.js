class Triangle {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<polygon points="150,20 230,160 70,160" fill="${this.color}"/>`
    }
}

class Circle {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square {
    constructor(color) {
        this.color = color
    }
    setColor(color) {
        this.color = color
    }
    render() {
        return `<rect x="70" y="40" width="160" height="160" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Triangle, Square }
