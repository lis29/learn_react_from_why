const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve('src'),
      "@components": pathResolve('src/components'),
      "@assets": pathResolve('src/assets'),
      "@common": pathResolve('src/common'),
      "@pages": pathResolve('src/pages'),
      "@service": pathResolve('src/service')
    }
  }
}