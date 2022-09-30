(function(win,doc){
		
    change()   
    function change(){
      doc.documentElement.style.fontSize = doc.documentElement.clientWidth*100/1920 +"px";
      console.log("1rem="+doc.documentElement.clientWidth*100/1920 +"px")
    }
    //窗口大小改变事件
    win.addEventListener("resize",change,false)
    //横竖屏事件
    win.addEventListener("orientationchange",change,false)

})(window,document)