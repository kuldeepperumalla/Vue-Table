
module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
          },
        },
      ],
      "jest": {
        "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
      },
    },
  ],
}

// webpack.config.js

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

exports.plugins.push(
  new VuetifyLoaderPlugin({
    match(originalTag, { kebabTag, camelTag, path, component }) {
      if (kebabTag.startsWith('core-')) {
        return [originalTag, `import ${originalTag} from '@/components/core/${originalTag.substring(4)}.vue'`]
      }
    }
  })
)