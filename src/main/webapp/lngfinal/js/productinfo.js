/* 
* @Author: anchen
* @Date:   2016-12-07 20:24:31
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-21 20:31:51
*/
function loading(){
       $.ajax({
        headers:{token:$.session.get('token')},
        url:'http://localhost:8090/restapi/product/getProduct?accountId='+$.session.get('userid')+'&start=0&limit=10',
        type:"get",
        dataType:"json",
        success:function(data){
            $("#pg").datagrid({
                data:data.list,
                method:'get',//获取数据
                rownumbers:true,//显示行号
                pagination:true,//允许分页
        });
    }
});
}
function formatname(value,rec){
    return rec.account.name;
}
//***********************重置用户表单********************************
function resetform()
{
    $("#account").removeAttr('readonly');
    $("#name").removeAttr('readonly');
    $("#account").val("");
    $("#name").val("")
    $("#specification").find("option[text='---请选择---']").attr("selected",true);
    $("#imei").val("");
    $("#type").find("option[text='---请选择---']").attr("selected",true);
    $("#address").val("");

}
// *****************************************************************

$(function(){
// *************************请求该用户的产品的全部信息***********************
    $.ajax({
        headers:{token:$.session.get('token')},
        url:'http://localhost:8090/restapi/product/getProduct?accountId='+$.session.get('userid')+'&start=0&limit=10',
        type:"get",
        dataType:"json",
        success:function(data){
            //var account1 = data.list.account;
            $("#pg").datagrid({
                data:data.list,
                method:'get',//获取数据
                rownumbers:true,//显示行号
                pagination:true,//允许分页
                frozenColumns: [[
                            {
                                field: 'ck',
                                checkbox: true
                            },
                            {
                                title: '产品编码', field: 'id', width: 80
                            },
                            {
                                title: '产品名称', field: 'name', width: 80,
                            }
                        ]],
                columns: [[
                            {
                                title: '所属客户', field: 'accountname',
                                width: 80,formatter:accountnameFormat
                            },
                            {
                                title: 'IMEI', field: 'imei',
                                width: 100
                            },
                            {
                                title: '产品规格', field: 'specification',
                                width: 100
                            },
                            {
                                title: '型号', field: 'type',
                                width: 100
                            },
                            {
                                title: '产品地址', field: 'address',
                                width: 200
                            },
                            {
                                title: '经度', field: 'longitude',
                                width: 100
                            },
                            {
                                title: '纬度', field: 'latitude',
                                width: 80
                            },]]
            });
        }
    })
    //添加公司下拉框的选择项
     $.ajax({
           headers:{token:$.session.get('token')},
           url:'http://localhost:8090/admin/account/findAll',
           type:"get",
           dataType:"json",
           success:function(data){  
             addoption(data);
          }
      })

// *************分页js***************
    var pager = $('#pg').datagrid().datagrid('getPager');
    //     function pagerFilter(data){
    //     if (typeof data.length == 'number' && typeof data.splice == 'function'){    // 判断数据是否是数组
    //         data = {
    //             total: data.length,
    //             rows: data
    //         }
    //     }
    //     var dg = $(this);
    //     var opts = dg.datagrid('options');
    //     var pager = dg.datagrid('getPager');
    //     pager.pagination({
    //         onSelectPage:function(pageNum, pageSize){
    //             opts.pageNumber = pageNum;//页数
    //             opts.pageSize = pageSize;//每一页的数量
    //             pager.pagination('refresh',{
    //                 pageNumber:pageNum,
    //                 pageSize:pageSize
    //             });
    //             dg.datagrid('loadData',data);
    //         }
    //     });
    //     if (!data.originalRows){
    //         data.originalRows = (data.rows);
    //     }
    //     var start = (opts.pageNumber-1)*parseInt(opts.pageSize);//解析字符串，返回整数
    //     var end = start + parseInt(opts.pageSize);
    //     data.rows = (data.originalRows.slice(start, end));//slice()提取字符串的某个部分
    //     return data;
    // }
    // //********获取数据**********
    //  function getData(){
    //          $('#dg').datagrid({
    //         url: 'TwoDataGrid1.ashx',
    //         method: 'get',
    //     })
    //     }

    // $(function(){//加载数据
    //     $('#dg').datagrid({loadFilter:pagerFilter}).datagrid('loadData', getData());
    //     // 加载数据datagrid({
    // });
});
  
 function addoption(data)
 {
        var obj=data;
        var i=0;
        $.each(obj,function(){
        $("#customname").append('<option>'+obj[i++].name+'</option>')
    });
 }

//******************添加产品信息*******************
function addproduct(){
    resetform();//重置custom表单
    $(".productedit").attr({"disabled":"disabled"});//修改按钮禁用
    $(".productsubmit").removeAttr('disabled');//提交按钮可用
     $(".productsubmit").off("click").on("click",function(){
    // $(".productsubmit").click(function(){
        $.ajax({
            headers:{token:$.session.get('token')},
            url:'http://localhost:8090/admin/product/add',
            type:"post",
            dataType:"json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                "name":$("#name").val(),
                "specification":$("#specification").find("option:selected").text(),
                "imei":$("#imei").val(),
                "type":$("#type").find("option:selected").text(),
                "address":$("#address").val(),
                "longitude":"",
                "latitude":"",
                "account":{"id":$.session.get('userid')},
            }),
            success:function(){
                alert("添加成功！");
                loading();
                $("#mymodal").modal("hide");
            },
            error: function(){
                alert("添加失败！有红色*未填写，或产品名相同")
            }
        });
    });
}


//********************删除单个选中用户信息********************
function del(){
    var rows=$("#pg").datagrid('getSelections');//获取选择行
    $.ajax({
        type: 'delete',
        headers:{token:$.session.get('token')},
        url: 'http://localhost:8090/admin/product/'+rows[0].id+'/delete',
        contentType: "application/json;charset=utf-8",
        dataType: 'json',
        success: function(){
            alert("删除成功！");
            loading();
            $("#mymodal").modal("hide");
        }
    });
}
//********************编辑产品信息***********************
function edit(){
    $(".productedit").removeAttr('disabled');
    $(".productsubmit").attr({"disabled":"disabled"});//禁用customsubmit按钮
    var rows = $("#pg").datagrid("getSelections");
    if (rows == null || rows.length == 0){
        alert("没有选中任何记录，不能执行该操作");
        $(".edit").removeAttr('data-toggle');//防止弹出框弹出
        $(".edit").removeAttr('data-target');//防止弹出框弹出
    }
    if (rows.length>1){
        alert("修改操作不能选择多条记录");
        $(".edit").removeAttr('data-toggle');
        $(".edit").removeAttr('data-target');
    }
    //如果只选择了一行则可以进行修改，否则不操作
    if (rows.length == 1) {
        $(".edit").attr('data-toggle','modal');
        $(".edit").attr('data-target','#mymodal');
        $("#custom").attr('readonly', 'readonly');
        $("#name").attr('readonly', 'readonly');//禁用文本框
        $("#imei").attr('readonly','readonly');
        $("#name").val(rows[0].name);
        $("#specification").find("option:selected").text(rows[0].specification);
        $("#imei").val(rows[0].imei);
        $("#type").find("option:selected").text(rows[0].type);
        $("#address").val(rows[0].address);
    }
//***************************确认修改***************************
$(".productedit").off("click").on("click",function(){
        $.ajax({
            headers:{token:$.session.get('token')},
            url:'http://localhost:8090/admin/product/'+rows[0].id+'/update',
            type:"put",
            dataType:"json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                "name":$("#name").val(),
                "specification":$("#specification").find("option:selected").text(),
                "region":"",
                //"imei":$("#imei").val(),
                "type":$("#type").find("option:selected").text(),
            }),
            success:function(){
                alert("编辑成功！");
                loading();
                $("#mymodal").modal("hide");//表单隐藏
            },
            error: function(){
                alert("编辑失败！")
            }
        });
    })
}


//*****************搜索用户信息*******************
function productsearch(){
    if($("#productnormalSearch").val())//如果搜素框不空，执行
    {
        $.ajax({
            headers:{token:$.session.get('token')},
            url:'http://localhost:8090/restapi/product/findProduct/'+$("#productnormalSearch").val()+'',
            type:"get",
            dataType:"json",
            success:function(data){
                $("#pg").datagrid({
                    data:data,
                    method:'get',
                    rownumbers:true,
                    pagination:true
                });
            }
        });
    }
    else
        loading();
};

function accountnameFormat(value,rec){
    return rec.account.name;
}