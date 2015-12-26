(function(){
  function getFileName(title){
    return title
      .replace(/[(){}\[\]\/\.,;!?`@%^#$£]/g, '')
      .replace(/ +/g, '_')
      + ".txt";
  }

  function Article(title){
    this.title = title;
    this.filename = getFileName(title);
    this.likes = {facebook: 0, twitter: 0, googlePlus: 0};
  };

  function Archive(){
    this._store = [];
  }

  Archive.prototype.addArticle = function(article){
    if (!(article instanceof Article)) {
      throw new Error('Types are incompatible');
    }
    this._store.push(article);
  };

  Archive.prototype.getArticles = function(){
    return this._store
      .map(function(article, index){
        article.articleId = index;
        return article;
      });
  };

  Archive.prototype.like = function(title, network){
    var article = this._store.filter(function(article){
      return article.title = title;
    })[0];

    if (article && article.likes[network] >= 0)
      article.likes[network]++;
    return article.likes;
  };

  Archive.prototype.remove = function(title){
    this._store = this._store.filter(function(article){
      return article.title !== title;
    });

    return this.getArticles();
  };
}());
