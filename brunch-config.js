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
        'node_modules/semantic-ui-sass',
        'node_modules/semantic-ui-sass/scss',
        'app/scss/custom'
      ],
      precision: 8
    }
  },
  copycat: {
    verbose: true,
    onlyChanged: true,
    "fonts": [

    ],
    "images": [
      "app/assets/img"
    ],
    "media": [
      "app/assets/media"
    ]
  }
};

exports.npm = {
  enabled: true,
  compilers: ["babel-brunch"],
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
};
