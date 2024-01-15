const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    // Input directory: src
    // Output directory: _site
  
    // The following copies to `_site/img`
    eleventyConfig.addPassthroughCopy("src/style.css");

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
      components: "src/_includes/components/**/*.webc",
    });


    return {
      dir: {
        input: "src"
      }
    }
  
  };
