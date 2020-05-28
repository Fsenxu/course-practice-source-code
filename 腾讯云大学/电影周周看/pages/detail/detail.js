// pages/detail/detail.js
Page({
 

  /**
   * 组件的初始数据
   */
  data: {
    movie:{}
  },
 onLoad:function(options){
   var that = this;
   wx.showNavigationBarLoading({
     complete: (res) => {},
   })
   wx.request({
     url: 'https://douban.uieee.com/v2/movie/subject/'+options.movieId,
     //method:"GET",
     //data:{},
     header:{
       "content-type":"json"
     },
     success:function(res){
        if(res.statusCode===200)
        that.setData({
          movie:res.data
        })
     },
     fail:function(){

     },
     complete:function(){
      wx.hideNavigationBarLoading({
        complete: (res) => {},
      })
     }

   })
 }



})
