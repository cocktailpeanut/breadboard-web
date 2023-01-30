const path = require('path');
const packagejson = require('./package.json')
const Breadmachine = require('breadmachine');
(async () => {
  const bread = new Breadmachine()
  await bread.init({
    version: packagejson.version,
    config: path.resolve(__dirname, "breadboard.yaml"),
    releases: {
      feed: "https://github.com/cocktailpeanut/breadboard-web/releases.atom",
      url: "https://github.com/cocktailpeanut/breadboard-web/releases"
    }
  })
})();
