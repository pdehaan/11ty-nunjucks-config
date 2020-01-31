const path = require("path");

const del = require("del");
const Nunjucks = require("nunjucks");

const dir = {
  input: "src",
  output: "_site",
  includes: "_includes"
};

const includesDir = path.join(dir.input, dir.includes);

del.sync(dir.output);

module.exports = eleventyConfig => {
  
  // const env = new Nunjucks.Environment(
  //   // we need to pass in our includes dir here
  //   new Nunjucks.FileSystemLoader([includesDir]),
  //   { autoescape: false }
  // );


  const env = Nunjucks.configure(includesDir, {
    autoescape: false
  });

  eleventyConfig.setLibrary("njk", env);
  return {
    dir
  };
};
