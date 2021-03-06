// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
    'js/vendor.js': /(?!app)/,
    'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: 'app.css'
  }
};

exports.plugins = {
  babel: {
    presets: ['env']
  },
  sass: {
    options: {
      includePaths: [
        'node_modules/semantic-ui-sass', // import semantic-ui-sass
        'node_modules/sass-semantic-ui/src', // import sass-semantic-ui
        'node_modules/font-awesome/scss', // import font-awesome scss files
        'app/scss/custom' // import custom scss files
      ],
      precision: 8
    }
  },
  copycat: {
    verbose: true,
    onlyChanged: true,
    'fonts': [
      'node_modules/font-awesome/fonts'
    ],
    'img': [
      "app/assets/img"
    ],
    'media': [
      'app/assets/media'
    ]
  }
};

exports.npm = {
  enabled: true,
  compilers: ['babel-brunch'],
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
};
