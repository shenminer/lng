/**
 * Created by zhous on 2016/11/23.
 */

    /*$("#login").click(function() {*/

    //})

$(function(){
    $("#login").click(function(){
        var username=$("#username").val();
        $.session.set('username', username);
        var password=$("#password").val();
        $.ajax({
            url:'http://localhost:8090/restapi/account/login',
            type:"post",
            dataType:"text",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({
					"username":username,
					"password":password
			}),
            success:function(data){
                         $.session.set('token', data);
                         window.location.href="index.html";        
                        },
            error: function(){alert("用户名或密码错误！");}
        })
    })
});

