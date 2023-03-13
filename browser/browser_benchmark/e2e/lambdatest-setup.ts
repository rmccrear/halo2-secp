const caps_chrome = {
  browserName    : 'Chrome',
  browserVersion : 'latest',
  'LT:Options'   : {
      platform   : 'Windows 10',
      build      : 'Halo2 on Chrome Windows 10 build',
      name       : 'Halo2 on Chrome Windows 10',
      resolution : '1366x768',
      user       : process.env.LT_USERNAME,
      accessKey  : process.env.LT_ACCESS_KEY,
      network    : true,
      video: false,
      console: true,
      tunnel: true
  }
};

const caps_edge = {
  browserName    : 'MicrosoftEdge',
  browserVersion : 'latest',
  'LT:Options'   : {
      platform   : 'Windows 10',
      build      : 'Halo2 on Edge Windows 10 build',
      name       : 'Halo2 on Edge Windows 10',
      resolution : '1366x768',
      user       : process.env.LT_USERNAME,
      accessKey  : process.env.LT_ACCESS_KEY,
      network    : true,
      video: false,
      console: true,
      tunnel: true
  }
};

export const capabilities_list = [caps_chrome, caps_edge];
