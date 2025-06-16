/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Update paths to match your project structure
    theme: {
      extend: {}, // Extend or override default theme values here
    },
    plugins: [    
      require('@tailwindcss/line-clamp'),
    ], // Add any plugins here (e.g., forms, typography)
  };