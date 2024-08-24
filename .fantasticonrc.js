const uuid = require('uuid').v4();

module.exports = {
  inputDir: 'public/icons/svgs',
  outputDir: 'public/icons/fonts',
  assetTypes: ['scss'],
  name: `FViecIcons-${uuid}`,
  prefix: 'fv',
  pathOptions: {
    scss: 'styles/_fv_icons.scss',
  },
  fontsUrl: '/icons/fonts',
};
