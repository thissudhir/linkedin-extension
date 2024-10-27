# LinkedIn AI Reply Chrome Extension

### Objective

The **LinkedIn AI Reply** Chrome extension is a demo extension to help users generate automated replies on LinkedIn. It does not rely on actual API calls, but it demonstrates proficiency in using React, TypeScript, and Tailwind CSS, along with the WXT framework.

### Tech Stack

- **Framework**: [WXT](https://wxt.dev/)
- **Languages**: React, TypeScript, and Tailwind CSS
- **Design**: Figma (for reference icons and layout structure)

### Extension Functionality

1. Displays an AI icon when a LinkedIn message input field is focused.
2. Hides the AI icon when the input field is no longer focused.
3. Shows a modal centered on the screen when clicking the AI icon.
4. Closes the modal on clicking outside of it.
5. Allows the user to enter a command in the modal’s input field.
6. Displays a dummy response upon clicking the "Generate" button.
7. Inserts the generated response into the LinkedIn message input field when the "Insert" button is clicked.

---

### Project Structure

```
├── entrypoints/
│   ├── popup/
│   │   ├── App.tsx         # Main popup application logic
│   │   ├── app.css         # Core styles, primarily using Tailwind CSS
│   │   ├── index.html      # HTML file for the popup
│   │   ├── main.tsx        # Main entry point for the popup React app
│   │   └── style.css       # Additional styles for the popup
│   │
├── public/                 # Static assets like icons and images
│
├── package-lock.json       # Dependency lock file
├── package.json            # Package configuration and dependencies
├── postcss.config.js       # Configuration for PostCSS
├── tailwind.config.js      # Tailwind CSS configuration
├── wxt.config.ts           # WXT framework configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```

### File Explanations

- **entrypoints/popup/App.tsx**: Main logic for the popup application, managing the display and interactions of the AI icon and modal.
- **entrypoints/popup/app.css**: Core popup styles using Tailwind CSS.
- **entrypoints/popup/index.html**: Base HTML file for the popup UI.
- **entrypoints/popup/main.tsx**: Entry point for initializing the popup app.
- **entrypoints/popup/style.css**: Additional custom styling for the popup, if any.
- **public/**: Contains static assets like icons and images used in the extension.
- **postcss.config.js**: PostCSS configuration to handle Tailwind CSS processing.
- **tailwind.config.js**: Tailwind CSS configuration for customizing styles and themes.
- **wxt.config.ts**: Configuration file for the WXT framework, specifying build and setup options.
- **tsconfig.json**: TypeScript configuration, ensuring consistent type checking and compiler options.

### Getting Started

#### Prerequisites

- **Node.js** and **npm** installed.
- **WXT Framework** installed.

#### Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/thissudhir/linkedin-extension
   cd linkedin-extension
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Build the Extension**:

   ```bash
   npm run build
   ```

4. **Load the Extension in Chrome**:
   - Open `chrome://extensions/` in your browser.
   - Enable "Developer mode."
   - Click "Load unpacked" and select the `dist` folder.

### Usage

1. **Focus** on any LinkedIn message input field to reveal the AI icon.
2. **Click** the icon to open the modal.
3. **Enter** a command and click "Generate" to view a response.
4. **Click** "Insert" to place the generated response into the message input field.

---

### Notes

- Avoid using external libraries for UI or icons.
- Focus on code quality and edge case handling.
- Actual API calls, authentication, and database setup are not required.
