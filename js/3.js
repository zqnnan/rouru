window.onload=function(){

     // 获取 html 元素
    /*网页字跟随页面自动变化*/
    function setRem(){
        /*获取当前页面的宽度*/
        var width = document.body.offsetWidth;
        /*设置页面的字体大小*/
        var nowFont=width/375*20;
        /*通过标签名称来获取元素*/
        var htmlFont=document.getElementsByTagName('html')[0];
        // 给获取到的元素的字体大小赋值
        htmlFont.style.fontSize =nowFont+"px";
    }
     setRem();
     window.onresize=setRem;  //监听屏幕变化

// 导航


 $('.abox a').mouseover(function(){
  var ind= $(this).index('.abox a')
console.log(ind)
   $('.hidee div').eq(ind).fadeIn().siblings().fadeOut()
    
 })
 $('.abox a').mouseout(function(){
    $('.hidee div').hide()
 })



























}


