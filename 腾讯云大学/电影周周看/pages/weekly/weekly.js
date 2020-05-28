// pages/weekly/weekly.js
Page({

  /**
   * 组件的初始数据
   */
  data: {
    weeklyMovieList:[
      {
      "name":"教父",
      "comment":"你为什么这样对我",
      "imagePath":"/image/20170331085734.jpg",
      "isHeightLevel":true,
      "id":1291841
    },
      {
      "name":"铁达尼",
      "comment":"一艘大船",
      "imagePath":"/image/600x800.jpg",
      "isHeightLevel":true,
      "id":1292722
    },
      {
      "name":"刚枪",
      "comment":"刚就对了",
      "imagePath":"/image/20170331085454.jpg",
      "isHeightLevel":false,
      "id":1295644
    }
  ],
    count : 100,
    currSwiper:0
  },

  onLoad: function(options){
    this.setData({
      currSwiper : this.data.weeklyMovieList.length - 1 
    })
  },

  onShareAppMessage:function(res){//转发API
    return {
      title: '每周推荐',
    }
  },

  toCurrSwiper : function(event){
    this.setData({
      currSwiper : this.data.weeklyMovieList.length - 1 
    })
  },
  
  toMovieDetail : function(event){
    let movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?movieId=' + movieId,
    })
  }

  
})
