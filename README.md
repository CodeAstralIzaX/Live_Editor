# Live Editor

Live Editor is a web-based tool that allows you to preview HTML, CSS, and JavaScript code live in your browser in real-time. This editor provides a futuristic design and easy-to-use interface, making it a great tool for web developers to test and visualize their code instantly.

## Features

- **Real-time Preview**: See your HTML, CSS, and JavaScript code rendered live as you type.
- **Template Examples**: Load predefined templates for HTML, CSS, and JavaScript to kickstart your project.
- **Clear Button**: Clear all code inputs with a single click.
- **Auto-Save**: Automatically save your work in session storage to prevent data loss.
- **Mobile Friendly**: Responsive design for use on different devices.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/CodeAstralIzaX/live-editor.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd live-editor
    ```

3. **Open `index.html` in your browser:**
    You can simply double-click on `index.html` or serve it using a local server.

## Usage

### Loading an Example

- Click the `Example` button to load predefined templates for HTML, CSS, and JavaScript.

### Clearing the Editor

- Click the `Clear` button to clear all code inputs.

### Writing and Previewing Code

- Write your HTML, CSS, and JavaScript code in their respective textareas.
- The live preview will automatically update as you type.

## Structure

live-editor/
├── css/
│ └── global.css # Main stylesheet for the editor
├── js/
│ ├── jquery.min.js # jQuery library
│ └── editor.js # Main JavaScript for handling editor functionality
├── img/
│ └── ico/ # Icons for the editor
├── index.html # Main HTML file
├── README.md # Project documentation


## CSS Styles

Here’s a brief overview of the CSS styles used in the project:

- **Futuristic Design**: The editor uses a dark theme with neon-like accents for a modern look.
- **Responsive Layout**: The layout adjusts for mobile devices with a columnar arrangement.
- **Hover Effects**: Buttons and links have hover effects for better user interaction.

## JavaScript Functionality

### Template Examples

The editor includes a set of predefined templates that can be loaded by clicking the `Example` button. These templates include common HTML structures with corresponding CSS and JavaScript.

### Real-time Preview

The editor updates the preview pane in real-time as you type in the HTML, CSS, and JavaScript textareas. This is achieved using the `onkeyup` event listener that triggers the `updatePreview` function.

### Auto-Save

The editor saves the current state of your code in the browser’s session storage, ensuring that your work is not lost if the page is accidentally refreshed or closed.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
    ```sh
    git checkout -b feature-branch
    ```
3. **Make your changes and commit them:**
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch:**
    ```sh
    git push origin feature-branch
    ```
5. **Submit a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **jQuery**: For simplifying DOM manipulation and event handling.
- **Google Fonts**: For the 'Roboto Mono' font used in the project.
- **Favicon and Icons**: From various sources for a cohesive design.

## Contact

- **Author**: Prem Kumar E
- **GitHub**: [CodeAstralIzaX](https://github.com/CodeAstralIzaX)

Feel free to reach out if you have any questions or suggestions!
