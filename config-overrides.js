const { useBabelRc, override, addBabelPlugins, addBabelPresets } = require('customize-cra')
// @flow

//const es6Compat = process.env.BABEL_ES_COMPAT === "6" || process.env.NODE_ENV === "test";

module.exports = override(

    useBabelRc()

//     addBabelPresets(
//         "@babel/preset-env",
//         // {
//         //   targets: es6Compat ? "maintained node versions" : "> 0.25%, not dead"
//         // },
//         "@babel/react",
//         "@babel/preset-flow"  
//     ),

//   addBabelPlugins(
//     "@babel/plugin-transform-flow-comments",
//     "@babel/plugin-proposal-class-properties",
//     "babel-plugin-preval"
//   )
)





 
module.exports = function override(config, env) {





    //do stuff with the webpack config...
    return config;
  }

