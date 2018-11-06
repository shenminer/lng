/* 
* @Author: anchen
* @Date:   2016-11-27 19:54:56
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-21 20:31:50
*/
// ***********************重载资源***********************************
function loading(){
   $.ajax({
           headers:{token:$.session.get('token')},
           url:'http://localhost:8090/admin/account/findAll',
           type:"get",
           dataType:"json",
           success:function(data){
             //alert(typeof data);
             $("#dg").datagrid({
                // data:$.parseJSON(data),string转json
                data:data,
                method:'get',//获取数据 
                rownumbers:true,//显示行号
                pagination:true//允许分页
              });
            }       
          });
 }
//***********************重置用户表单********************************
 function resetform()
 {
    $("#username").removeAttr('readonly');
    $("#password").removeAttr('readonly');
    $("#name").removeAttr('readonly');
    $("#username").val("");
    $("#password").val("");
    $("#name").val("");
    $("#shortName").val("");
    $("#region").val("");
    $("#investmentScale").find("option[text='---请选择---']").attr("selected",true);
    $("#investmentMethod").find("option[text='---请选择---']").attr("selected",true);
    $("#center").find("option[text='---请选择---']").attr("selected",true);
    $("#settlementMode").find("option[text='---请选择---']").attr("selected",true);
    $("#deliveryMethod").find("option[text='---请选择---']").attr("selected",true);
    $("#earlyWarningThreshold").val("");
    $("#linkman").val("");
    $("#contact").val("");
    $("#signedClient").val("");
    $("#status").find("option[text='---请选择---']").attr("selected",true);
    $("#type").find("option[text='---请选择---']").attr("selected",true);
    $("#progress").find("option[text='---请选择---']").attr("selected",true);
    $("#salesman").val("");
    $("#industry").val("");
    $("#address").val("");
    $("#contractUnitPrice").val("");
    $("#unit").find("option[text='---请选择---']").attr("selected",true);
    $("#remark").val("")      
 }
 // *****************************************************************
 
 $(function(){
// *************************请求用户的全部信息***********************
    loading();//加载用户信息
// *************分页js***************
    var pager = $('#dg').datagrid().datagrid('getPager');
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


//******************添加用户信息*******************
function addcustom(){
    resetform();//重置custom表单
    $(".customedit").attr({"disabled":"disabled"});//修改按钮禁用
    $(".customsubmit").removeAttr('disabled');//提交按钮可用
     $(".customsubmit").off("click").on("click",function(){
      if($("#username").val() && $("#password").val() && $("#name").val() && $("#region").val() && $("#investmentScale").find("option:selected").text())
        $.ajax({
            headers:{token:$.session.get('token')},
            url:'http://localhost:8090/admin/account/create',
            type:"post",
            dataType:"json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                    "username":$("#username").val(),
                    "password":$("#password").val(),
                    "name":$("#name").val(),
                    "shortName":$("#shortName").val(),
                    "region":$("#region").val(),
                    "investmentScale":$("#investmentScale").find("option:selected").text(),
                    "investmentMethod":$("#investmentMethod").find("option:selected").text(),
                    "center":$("#center").find("option:selected").text(),
                    "settlementMode":$("#settlementMode").find("option:selected").text(),
                    "deliveryMethod":$("#deliveryMethod").find("option:selected").text(),
                    "earlyWarningThreshold":$("#earlyWarningThreshold").val(),
                    "linkman":$("#linkman").val(),
                    "contact":$("#contact").val(),
                    "signedClient":$("#signedClient").val(),
                    "status":$("#status").find("option:selected").text(),
                    "type":$("#type").find("option:selected").text(),
                    "progress":$("#progress").find("option:selected").text(),
                    "salesman":$("#salesman").val(),
                    "industry":$("#industry").val(),
                    "address":$("#address").val(),
                    "contractUnitPrice":$("#contractUnitPrice").val(),
                    "unit":$("#unit").find("option:selected").text(),
                    "remark":$("#remark").val()       
            }),
            success:function(){
                alert("添加成功！");
                loading();
                $("#mymodal").modal("hide");
            },
            error: function(){
                alert("添加失败！用户名相同")
               }
        });
      else
        alert("有红色*未填写！");
     });
}


//********************删除单个选中用户信息********************
 function del(){
         var rows=$("#dg").datagrid('getSelections');//获取选择行
              $.ajax({
                  type: 'delete',
                  headers:{token:$.session.get('token')},
                  url: 'http://localhost:8090/admin/account/'+rows[0].id+'/delete',
                  contentType: "application/json;charset=utf-8",
                  dataType: 'json',
                  success: function(){
                    alert("删除成功！");
                    loading();
                    $("#mymodal").modal("hide");
                  }
              });  
    }


//********************编辑用户信息***********************
function edit(){
  $(".customedit").removeAttr('disabled');
  $(".customsubmit").attr({"disabled":"disabled"});//禁用customsubmit按钮
  var rows = $("#dg").datagrid("getSelections");
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
    // alert(rows[0].id);
     $(".edit").attr('data-toggle','modal');
    $(".edit").attr('data-target','#mymodal');
    $("#username").attr('readonly', 'readonly');
    $("#password").attr('readonly', 'readonly');//禁用文本框
    $("#name").val(rows[0].name);
    $("#name").attr('readonly', 'readonly');
    $("#shortName").val(rows[0].shortName);
    $("#region").val(rows[0].region);
    $("#investmentScale").find("option:selected").text(rows[0].investmentScale);//覆盖了默认项
    $("#investmentMethod").find("option:selected").text(rows[0].investmentMethod);
    $("#center").find("option:selected").text(rows[0].center);
    $("#settlementMode").find("option:selected").text(rows[0].settlementMode);
    $("#deliveryMethod").find("option:selected").text(rows[0].deliveryMethod);
    $("#earlyWarningThreshold").val(rows[0].earlyWarningThreshold);
    $("#linkman").val(rows[0].linkman);
    $("#contact").val(rows[0].contact);
    $("#signedClient").val(rows[0].signedClient);
    $("#status").find("option:selected").text(rows[0].status);
    $("#type").find("option:selected").text(rows[0].type);
    $("#progress").find("option:selected").text(rows[0].progress);
    $("#salesman").val(rows[0].salesman);
    $("#industry").val(rows[0].industry);
    $("#address").val(rows[0].address);
    $("#contractUnitPrice").val(rows[0].contractUnitPrice);
    $("#unit").find("option:selected").text(rows[0].unit);
    $("#remark").val(rows[0].remark);  
}


//***************************确认修改***************************
$(".customedit").off("click").on("click",function(){
     $.ajax({
            headers:{token:$.session.get('token')},
            url:'http://localhost:8090/admin/account/update',
            type:"put",
            dataType:"json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
                    "id":rows[0].id,
                    "username":$("#username").val(),
                    "name":$("#name").val(),
                    "shortName":$("#shortName").val(),
                    "region":$("#region").val(),
                    "investmentScale":$("#investmentScale").find("option:selected").text(),
                    "investmentMethod":$("#investmentMethod").find("option:selected").text(),
                    "center":$("#center").find("option:selected").text(),
                    "settlementMode":$("#settlementMode").find("option:selected").text(),
                    "deliveryMethod":$("#deliveryMethod").find("option:selected").text(),
                    "earlyWarningThreshold":$("#earlyWarningThreshold").val(),
                    "linkman":$("#linkman").val(),
                    "contact":$("#contact").val(),
                    "signedClient":$("#signedClient").val(),
                    "status":$("#status").find("option:selected").text(),
                    "type":$("#type").find("option:selected").text(),
                    "progress":$("#progress").find("option:selected").text(),
                    "salesman":$("#salesman").val(),
                    "industry":$("#industry").val(),
                    "address":$("#address").val(),
                    "contractUnitPrice":$("#contractUnitPrice").val(),
                    "unit":$("#unit").find("option:selected").text(),
                    "remark":$("#remark").val()       
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
function search(){
  if($("#normalSearch").val())//如果搜素框不空，执行
  {
    $.ajax({
           headers:{token:$.session.get('token')},
           url:'http://localhost:8090/admin/account/findAccount/'+$("#normalSearch").val()+'',
           type:"get",
           dataType:"json",
           success:function(data){
             $("#dg").datagrid({
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

$(document).ready(function(){
$("#normalSearch").change(function(){//change()监控文本框
   if($("#normalSearch").val())//如果搜素框不空，执行
   {
    $.ajax({
           headers:{token:$.session.get('token')},
           url:'http://localhost:8090/admin/account/findAccount/'+$("#normalSearch").val()+'',
           type:"get",
           dataType:"json",
           success:function(data){
             $("#dg").datagrid({
                data:data,
                method:'get',
                rownumbers:true,
                pagination:true
              });
            }       
          });
  }
  loading();
});
})