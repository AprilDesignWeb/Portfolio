module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio//' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/main.scss";`
            }
        }
    }
}