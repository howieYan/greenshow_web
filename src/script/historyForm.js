function remove() {
    $.DialogByZ.Confirm({Title: "", Content: "确定要删除吗？",FunL:confirmL,FunR:confirmL})
}
function compile() {
    !function(){
        //页面一打开就执行，放入ready是为了layer所需配件（boot、扩展模块）加载完毕
        layer.ready(function(){
            layer.open({
                type: 2,
                title: '编辑页',
                maxmin: true,
                area: ['80%', '70%'],
                content: '../html/historyCompileFrom.html'
            });
        });
    }();
}
function addText() {
    !function(){
        //页面一打开就执行，放入ready是为了layer所需配件（boot、扩展模块）加载完毕
        layer.ready(function(){
            layer.open({
                type: 2,
                title: '添加页',
                maxmin: true,
                area: ['80%', '70%'],
                content: '../html/addHistoryFrom.html'
            });
        });
    }();
}
function confirmL(){
    $.DialogByZ.Close();
    $.DialogByZ.Autofade({Content: "已删除！！！"})
}
//    function Immediate(){
//        //location.href="http://sc.chinaz.com/jiaoben/"
//        window.open("http://localhost:63342/Adminto/index.html?_ijt=hidlmfdm2t62o8t2mea9ppcp4e")
//    }