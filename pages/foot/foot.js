Page({
 data:{
   count:5,
   c:0
 },
 onLoad(options){
  var a = options.a
  console.log(a)
  this.setData({
    c:a
  })
 },
})