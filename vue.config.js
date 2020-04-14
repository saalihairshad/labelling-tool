// webpack.config.js


module.exports = {

    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/basic/_variables.scss";
                @import "@/assets/scss/basic/_mixins.scss";
                @import "@/assets/scss/basic/_responsive-helper.scss";`

            }
        }
    }

}
