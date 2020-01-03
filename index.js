const defaultConfig = require('./default.config');

const addOverlaySection = () => {
  const body = document.querySelector('body');
  const section = document.createElement('div');
  section.id = 'gitterOverlay';
  section.classList.add('section');
  body.insertBefore(section, body.firstChild);

  return section;
};

// eslint-disable-next-line max-len
const hasCustomBreakpointSettings = (config) => Object.keys(config.responsiveCols).length > 0;

const addDefaultCols = (parent, config) => {
  for (let i = 1; i <= config.cols; i++) {
    const col = document.createElement('div');
    col.classList.add('gitterCol');
    col.classList.add('w-col-1');
    parent.appendChild(col);
  }
};

const addCustomCols = (parent, config) => {
  const { responsiveCols } = config;
  const breakpoints = Object.keys(responsiveCols);
  const maxCols = Math.max(...Object.values(responsiveCols));

  for (let i = 1; i <= maxCols; i++) {
    const col = document.createElement('div');
    col.classList.add('gitterCol');

    breakpoints.forEach((breakpoint) => {
      col.classList.add(`${breakpoint}:w-col-1`);

      if (i <= responsiveCols[breakpoint]) {
        col.classList.add(`${breakpoint}:block`);
      } else {
        col.classList.add(`${breakpoint}:hidden`);
      }
    });

    parent.appendChild(col);
  }
};

const addCols = (parent, config) => {
  if (hasCustomBreakpointSettings(config)) {
    addCustomCols(parent, config);
  } else {
    addDefaultCols(parent, config);
  }
};

const gridOverlay = (customConfig) => {
  const section = addOverlaySection();

  const config = {
    ...defaultConfig,
    ...customConfig,
  };

  addCols(section, config);
};

export default gridOverlay;
