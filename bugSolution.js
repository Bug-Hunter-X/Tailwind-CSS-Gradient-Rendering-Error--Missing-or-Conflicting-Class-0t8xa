```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'blue-500': '#007bff',
        'purple-500': '#6f42c1' // Make sure purple-500 color is defined correctly
      }
    }
  },
  plugins: []
}

<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text with a gradient background</p>
</div>
```
Ensure that `purple-500` (and any other colors in your gradient) is correctly defined in your `tailwind.config.js` file's `theme.colors` object, and make sure your configuration file is correctly imported and processed by your build process (e.g., using `@tailwind base`, `@tailwind components`, and `@tailwind utilities` in your CSS file).  If the issue persists, check for conflicting plugins that could be interfering with Tailwind's styles.