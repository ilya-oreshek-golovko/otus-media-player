const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@pages": path.resolve(__dirname, 'src', "pages"),
      "@favoriets": path.resolve(__dirname, 'src', "pages", "Favoriets"),
      "@feed": path.resolve(__dirname, 'src', "pages", "Feed"),
      "@library": path.resolve(__dirname, 'src', "pages", "Library"),
      "@player": path.resolve(__dirname, 'src', "pages", "Player"),
      "@trending": path.resolve(__dirname, 'src', "pages", "Trending"),
      "@shared": path.resolve(__dirname, 'src', "shared"),
      "@routing": path.resolve(__dirname, 'src', "pages", "Routing"),
      "@home": path.resolve(__dirname, 'src', "pages", "Home"),
      "@images": path.resolve(__dirname, 'src', "images")
    },
  },
};