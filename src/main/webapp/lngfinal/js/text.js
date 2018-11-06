/**
 * Created by llb4 on 2016/12/8.
 */
$(function() {
    $.ajax({
        headers: {
            "Content-type": "application/json",
            token: $.session.get('token')
        },
        url: " http://localhost:8090/restapi/product/getProduct?accountId=1&start=0&limit=4",
        type: "GET",
        datatype: "json",
        // data: {applyFormID: $("#dg").val()},
        success: function (data, textStatus) {
            // alert("dddd");

            createShowingTable(data.list);
            $("#dg").attr("data-options","rownumbers:true,singleSelect:true,pagination:true");
        },
        error: function () {
            alert("用户名或密码错误！");
        }
    })


    function createShowingTable(data) {
        //获取后台传过来的jsonData,并进行解析
        // alert("------->进入当前的数据展现");
        // var dataArray = $.parseJSON(data.jsonData);
        // //此处需要让其动态的生成一个table并填充数据
        var tableStr = "<table id='dg' style='width:100%;' class='easyui-datagrid' data-options='rownumbers:true,singleSelect:true,pagination:true' border='1px'>";
        // var tableStr =  "<table id='dg'style='width:100%;' border='1px'>";
        // $("#dg").attr("data-options","rownumbers:true,singleSelect:true,pagination:true");
       tableStr = tableStr + "<thead><tr><th>产品名称</th><th>客户简称</th><th>IMEI</th><th>款式</th><th>所属地区</th><th>数据时间</th><th>储罐液位1</th><th>储罐压力1</th><th>气化后压力</th></tr></thead> ";
        // tableStr.appendTo("#dg");
        var len = data.length;
        if (len >= 10) {
            len = 10;
        }
        for (var i = 0; i < len; i++) {
            tableStr = tableStr + "<tr><th>" + data[i].name + "</th>" + "<th>" + data[i].specification + "</th>" + "<th>" + data[i].imei + "</th>" + "<th>" + data[i].type + "</th> " + "<th>" + data[i].region + "" +
                "" + "</th>" + "<th>" + data[i].data +"</th>" + "<th>" + data[i].data.storageLiquidLevel1 +"</th></tr>";
        }
        tableStr = tableStr + "</table>";
        // //将动态生成的table添加的事先隐藏的div中.
        $("#table").html(tableStr);
        // var table = $("<table border = \"1\" id='dg'>");
        // table.appendTo($("#table"));
        // for(var i=0;i<data.length;i++){
        //     var tr=$("<tr></tr>");
        //     tr.appendTo(table);
        // }
    }
})