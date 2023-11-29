//Imports inquirer
const inquirer = require('inquirer')
//File systems
const fs = require('fs')
//Shapes module with circle triangle and square classes
const { Circle, Triangle, Square } = require('./lib/shapes.js')
//Main function for the logo generation 
async function main () {
    //Uses inquirer to present the user with prompts for input
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose a text color(keywords or hexidecimal value)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose your logos shape',
            choices: ['Triangle','Circle','Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the shapes color(keywords or hexidecimal value)',
        },
    ])
    //Shape choices maps the shapes choices from our prompts to their respective classes
    const shapeChoices = {
        Triangle: Triangle,
        Circle: Circle,
        Square: Square,
    }
    //Selects shape based on user input
    const ShapeClass = shapeChoices[answers.shape]
    //Instantiate the selected shape with the selected color
    const shape = new ShapeClass(answers.shapeColor)
    //Constructs the SVG logo
    const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="50">${answers.text}</text>
    </svg>`
    //Writes the SVG content to an svg file to see the logo
    fs.writeFile('./examples/logo.svg', svgLogo, (err) => {
        if (err) {
            //Logs any errors to the console
            console.error(err)
        }
        //Confirmation message on successfully written file
        console.log("Generated logo.svg")
    })
}
//Calls the main function
main()