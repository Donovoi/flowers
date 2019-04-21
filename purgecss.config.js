module.exports = {
  content: ['index.html', 'contactus.html', 'findus.html', 'products.html', 'js/*.js'],
  css: ['css/*.css'],
  extractors: [
    {
      extractor: class{
        static extract(content){
          return content.match(/[A-z0-9-:\/]+/g) || [];
        }
      },
      extensions: ['html', 'js'],
    },
  ],
};