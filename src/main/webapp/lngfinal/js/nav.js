/* 
* @Author: anchen
* @Date:   2016-11-09 12:45:17
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-21 20:30:46
*/
$(function(){
        $(".haschild").click(function(){
         if($(this).children('a').is(":hidden"))
        {
          $(this).addClass('highlight')
          .children('a').show().end()
          .siblings().removeClass('highlight')
          .children('a').hide();
          $(this).find("#tubiao").attr('class', 'glyphicon glyphicon-chevron-down');
          $(this).siblings().find("#tubiao").attr('class', 'glyphicon glyphicon-chevron-left');
        }
        else
        {
            $(this).removeClass('highlight')
            .children('a').hide();
            $(this).find("#tubiao").attr('class', 'glyphicon glyphicon-chevron-left');
        }
        });
         $(".hidden-xs").html($.session.get('username'));//绑定登录用户
//*********************请求到登录用户的id用session保存**************************
    $.ajax({
     headers:{token:$.session.get('token')},
     url:'http://localhost:8090/restapi/account/accountInfo?token='+$.session.get('token')+'',
     type:"get",
     dataType:"json",
     success:function(data){
         //alert( data);
        $("#userid").val(data.id);
        $.session.set('userid',data.id);
    }
  })
});

//******************修改密码*******************************
function confirm(){//点击确认触发
        $.ajax({
          headers:{token:$.session.get('token')},
          url: 'http://localhost:8090/restapi/account/changePassword',
          type: 'put',
          contentType: "application/json;charset=utf-8",
          data: JSON.stringify({
          "id":$.session.get('userid'),
          "password":$("#newpassword").val(),
           }),
          success:function(){
            alert("修改成功！")
            $("#mymodal1").modal("hide");
          }
        })
      }
//*************************修改密码结束*************************