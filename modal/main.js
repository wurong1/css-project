(function() {  // 采用立即调用的方式可以避免全局变量污染，文件末尾的btnTest将定义在window上成为全局变量
    /*建立模态框对象*/  
    var modalBox = {};  
    /*获取模态框*/  
    modalBox.modal = document.getElementById("myModal");  
    /*获得trigger按钮*/  
    modalBox.triggerBtn = document.getElementById("triggerBtn");  
    /*获得关闭按钮*/  
    modalBox.closeBtn = document.getElementById("closeBtn");  
    /*模态框显示*/  
    modalBox.show = function() {  
        console.log(this.modal);  
        this.modal.style.display = "flex";  
    }  
    /*模态框关闭*/  
    modalBox.close = function() {  
        this.modal.style.display = "none";  
    }  
    /*当用户点击模态框内容之外的区域，模态框也会关闭*/  
    modalBox.outsideClick = function() {  
        var modal = this.modal;  
        window.onclick = function(event) { // 利用事件代理，在window中的所有点击事件都会被监听，但是target对应实际点击的dom
            if(event.target == modal) { // modal宽高占满了整个屏幕
                modal.style.display = "none";  
            }  
        }  
    }  
    /*模态框初始化*/  
    modalBox.init = function() {  
        var that = this;  
        this.triggerBtn.onclick = function() {  
            that.show();  
        }  
        this.closeBtn.onclick = function() {  
            that.close();  
        }  
        this.outsideClick();  
    }  
    modalBox.init();  
})();


var btnTest = document.getElementById('test')
btnTest.addEventListener('click', function(){ // modal覆盖了btnTest,所以浮窗出现的时候点击btn不会触发click事件
    console.log('1111111111111111')
})