//var webpack=require('webpack')

module.exports = {
    entry: "./js/runoob1.js",
    output: {
        filename: "bundle.js",
    },
    devServer: {
        inline: true,
        port: 8181
    },
    module: {
        loaders: [
            { test:/\.css$/,
             loader: "style-loader!css-loader" }
            /*
            这边采的坑Module not found: Error: Can't resolve '' in 'D:\webProject\webPackReactProject' 
            由于loader前面多谢了!

             */
            
        ]
    }
};
