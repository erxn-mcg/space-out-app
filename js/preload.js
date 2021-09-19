
const path = require('path');
const url = require('url');

const customTitlebar = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2a3444'),
    icon: url.format('./img/logo.svg'),
    maximizable: false,
    minimizable: false
  });

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})