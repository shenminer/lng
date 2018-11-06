/**
 * Created by llb4 on 2016/12/6.
 */

//var ID=0;
$(function(){
    $.ajax({
        headers:{
            "Content-type": "application/json",
            token:$.session.get('token')
        },
        url: " http://localhost:8090/restapi/account/accountInfo?token="+$.session.get('token'),
        type: "GET",
        datatype: "json",
        success: function (data, textStatus) {
            $.session.set('ID', data.id);
        },
        error: function(){alert("错误啦！请求ID时");}
    });
});
$(function(){
    setTimeout(function(){
            $.ajax({
                headers: {
                    "Content-type": "application/json",
                    token: $.session.get('token')
                },
                url: " http://localhost:8090/restapi/product/getProduct?accountId="+$.session.get('ID')+"&start=0&limit=10",
                type: "GET",
                datatype: "json",
                error: function(){alert("错误啦！第一次请求数据时"+$.session.get('ID'))},
                success: function (data, textStatus) {
                    //alert("233");
                    $("#dg").datagrid({
                        method: "GET",
                        rownumbers: true,
                        singleSelect: true,
                        pagination: true,
                        data: data.list,
                        frozenColumns: [[
                            {
                                field: 'ck',
                                checkbox: true
                            },
                            {
                                title: '产品名称', field: 'list.name', width: 80, formatter: formatname
                            },
                            {
                                title: '用户简称', field: 'list.account.shortName', width: 60,
                                formatter: formatshortName
                            },
                            {
                                title: '结算模式', field: 'list.account.settlementMode', width: 60,
                                formatter: formatsettlementMode
                            },
                            {
                                title: '产品规格', field: 'list.specification', width: 70,
                                formatter: formatspecification
                            },
                            {
                                title: '数据时间', field: 'time', width: 180,
                                formatter: formattime
                            }
                        ]],
                        columns: [[
                            {
                                title: '储罐液位1(毫米汞柱)', field: 'list.data.storageLiquidLevel1',
                                width: 100, formatter: formatstorageLiquidLevel1
                            },
                            {
                                title: '储罐压力1(千帕)', field: 'list.data.storagePressure1',
                                width: 100, formatter: formatstoragePressure1
                            },
                            {
                                title: '储罐液位2(毫米汞柱)', field: 'list.data.storageLiquidLevel2',
                                width: 100, formatter: formatstorageLiquidLevel2
                            },
                            {
                                title: '储罐压力2(千帕)', field: 'list.data.storagePressure2',
                                width: 100, formatter: formatstoragePressure2
                            },
                            {
                                title: '气化后压力(千帕)', field: 'list.data.gasifyPressure',
                                width: 100, formatter: formatgasifyPressure
                            },
                            {
                                title: '气化后温度', field: 'list.data.gasifyTemperature',
                                width: 100, formatter: formatgasifyTemperature
                            },
                            {
                                title: '出口电磁阀1', field: 'list.data.outValve1',
                                width: 80, formatter: formatoutValve1
                            },
                            {
                                title: '出口电磁阀2', field: 'list.data.outValve2',
                                width: 80, formatter: formatoutValve2
                            },
                            {
                                title: '进口电磁阀1', field: 'list.data.inValve1',
                                width: 80, formatter: formatinValve1
                            },
                            {
                                title: '进口电磁阀2', field: 'list.data.inValve2',
                                width: 80, formatter: formatinValve2
                            },
                            {
                                title: '储罐增压阀1', field: 'list.data.storageValve1',
                                width: 80, formatter: formatstorageValve1
                            },
                            {
                                title: '储罐增压阀2', field: 'list.data.storageValve2',
                                width: 80, formatter: formatstorageValve2
                            },
                            {
                                title: '流量计切断阀', field: 'list.data.flowCutValve',
                                width: 100, formatter: formatflowCutValve
                            },
                            {
                                title: '累计流量', field: 'list.data.totalFlow',
                                width: 80, formatter: formattotalFlow
                            },
                            {
                                title: '流量计切断阀', field: 'list.data.flowCutValve',
                                width: 100, formatter: formatflowCutValve
                            },
                            {
                                title: '瞬时流量', field: 'list.data.instantFlow',
                                width: 80, formatter: formatinstantFlow
                            },
                            {
                                title: '温度1', field: 'list.data.temperature1',
                                width: 60, formatter: formattemperature1
                            },
                            {
                                title: '压力', field: 'list.data.pressure',
                                width: 60, formatter: formatpressure
                            },
                            {
                                title: '温度2', field: 'list.data.temperature2',
                                width: 60, formatter: formattemperature2
                            },
                            {
                                title: '温度3', field: 'list.data.temperature3',
                                width: 60, formatter: formattemperature3
                            },
                            {
                                title: '火焰探测 ', field: 'list.data.fireDetector',
                                width: 80, formatter: formatfireDetector
                            },
                            {
                                title: '可燃气体探测', field: 'list.data.combustibleGasDetector',
                                width: 100, formatter: formatcombustibleGasDetector
                            },
                            {
                                title: '经度', field: 'list.data.longitude',
                                width: 60, formatter: formatlongitude
                            },
                            {
                                title: '纬度', field: 'list.data.latitude',
                                width: 60, formatter: formatlatitude
                            },
                            {
                                title: '质量流量', field: 'list.data.massFlow',
                                width: 70, formatter: formatmassFlow
                            },
                            {
                                title: '体积流量', field: 'list.data.volumeFlow',
                                width: 70, formatter: formatvolumeFlow
                            },
                            {
                                title: '校准体积流量', field: 'list.data.gaugedVolumeFlow',
                                width: 100, formatter: formatgaugedVolumeFlow
                            },
                            {
                                title: '密度', field: 'list.data.density',
                                width: 60, formatter: formatdensity
                            },
                            {
                                title: '参考密度', field: 'list.data.referenceDensity',
                                width: 80, formatter: formatreferenceDensity
                            },
                            {
                                title: '温度', field: 'list.data.temperature',
                                width: 60, formatter: formattemperature
                            },
                            {
                                title: '压力', field: 'list.data.pressure2',
                                width: 60, formatter: formatpressure2
                            },
                            {
                                title: '累计质量流量', field: 'list.data.totalMassFlow',
                                width: 100, formatter: formattotalMassFlow
                            },
                            {
                                title: '累积体积流量', field: 'list.data.totalGaugedVolumeFlow',
                                width: 100, formatter: formattotalGaugedVolumeFlow
                            },
                            {
                                title: '累积校准体积流量', field: 'list.data.date',
                                width: 100, formatter: formatdate
                            }
                        ]]
                    })
                }
            });
    },100)
});

function get_data(){
    $.ajax({
        headers:{
            "Content-type": "application/json",
            token:$.session.get('token')
        },
        url: " http://localhost:8090/restapi/product/getProduct?accountId="+$.session.get('ID')+"&start=0&limit=10",
        type: "GET",
        datatype: "json",
        error: function(){alert("错误啦！第二次请求数据时"+$.session.get('ID'))},
        success: function (data, textStatus) {
            $("#dg").datagrid({
                method:"GET",
                rownumbers:true,
                singleSelect:true,
                pagination:true,
                data:data.list,
                frozenColumns:[[
                    {
                        field:'ck',
                        checkbox:true
                    },
                    {
                        title:'产品名称',field:'list.name',width:80,formatter:formatname
                    },
                    {
                        title:'用户简称',field:'list.account.shortName',width:60,
                        formatter:formatshortName
                    },
                    {
                        title:'结算模式',field:'list.account.settlementMode',width:60,
                        formatter:formatsettlementMode
                    },
                    {
                        title:'产品规格',field:'list.specification',width:70,
                        formatter:formatspecification
                    },
                    {
                        title:'数据时间',field:'time',width:180,
                        formatter:formattime
                    }
                ]],
                columns:[[
                    {
                        title:'储罐液位1(毫米汞柱)',field:'list.data.storageLiquidLevel1',
                        width:100,formatter:formatstorageLiquidLevel1
                    },
                    {
                        title:'储罐压力1(千帕)',field:'list.data.storagePressure1',
                        width:100,formatter:formatstoragePressure1
                    },
                    {
                        title:'储罐液位2(毫米汞柱)',field:'list.data.storageLiquidLevel2',
                        width:100,formatter:formatstorageLiquidLevel2
                    },
                    {
                        title:'储罐压力2(千帕)',field:'list.data.storagePressure2',
                        width:100,formatter:formatstoragePressure2
                    },
                    {
                        title:'气化后压力(千帕)',field:'list.data.gasifyPressure',
                        width:100,formatter:formatgasifyPressure
                    },
                    {
                        title:'气化后温度',field:'list.data.gasifyTemperature',
                        width:100,formatter:formatgasifyTemperature
                    },
                    {
                        title:'出口电磁阀1',field:'list.data.outValve1',
                        width:80,formatter:formatoutValve1
                    },
                    {
                        title:'出口电磁阀2',field:'list.data.outValve2',
                        width:80,formatter:formatoutValve2
                    },
                    {
                        title:'进口电磁阀1',field:'list.data.inValve1',
                        width:80,formatter:formatinValve1
                    },
                    {
                        title:'进口电磁阀2',field:'list.data.inValve2',
                        width:80,formatter:formatinValve2
                    },
                    {
                        title:'储罐增压阀1',field:'list.data.storageValve1',
                        width:80,formatter:formatstorageValve1
                    },
                    {
                        title:'储罐增压阀2',field:'list.data.storageValve2',
                        width:80,formatter:formatstorageValve2
                    },
                    {
                        title:'流量计切断阀',field:'list.data.flowCutValve',
                        width:100,formatter:formatflowCutValve
                    },
                    {
                        title:'累计流量',field:'list.data.totalFlow',
                        width:80,formatter:formattotalFlow
                    },
                    {
                        title:'流量计切断阀',field:'list.data.flowCutValve',
                        width:100,formatter:formatflowCutValve
                    },
                    {
                        title:'瞬时流量',field:'list.data.instantFlow',
                        width:80,formatter:formatinstantFlow
                    },
                    {
                        title:'温度1',field:'list.data.temperature1',
                        width:60,formatter:formattemperature1
                    },
                    {
                        title:'压力',field:'list.data.pressure',
                        width:60,formatter:formatpressure
                    },
                    {
                        title:'温度2',field:'list.data.temperature2',
                        width:60,formatter:formattemperature2
                    },
                    {
                        title:'温度3',field:'list.data.temperature3',
                        width:60,formatter:formattemperature3
                    },
                    {
                        title:'火焰探测 ',field:'list.data.fireDetector',
                        width:80,formatter:formatfireDetector
                    },
                    {
                        title:'可燃气体探测',field:'list.data.combustibleGasDetector',
                        width:100,formatter:formatcombustibleGasDetector
                    },
                    {
                        title:'经度',field:'list.data.longitude',
                        width:60,formatter:formatlongitude
                    },
                    {
                        title:'纬度',field:'list.data.latitude',
                        width:60,formatter:formatlatitude
                    },
                    {
                        title:'质量流量',field:'list.data.massFlow',
                        width:70,formatter:formatmassFlow
                    },
                    {
                        title:'体积流量',field:'list.data.volumeFlow',
                        width:70,formatter:formatvolumeFlow
                    },
                    {
                        title:'校准体积流量',field:'list.data.gaugedVolumeFlow',
                        width:100,formatter:formatgaugedVolumeFlow
                    },
                    {
                        title:'密度',field:'list.data.density',
                        width:60,formatter:formatdensity
                    },
                    {
                        title:'参考密度',field:'list.data.referenceDensity',
                        width:80,formatter:formatreferenceDensity
                    },
                    {
                        title:'温度',field:'list.data.temperature',
                        width:60,formatter:formattemperature
                    },
                    {
                        title:'压力',field:'list.data.pressure2',
                        width:60,formatter:formatpressure2
                    },
                    {
                        title:'累计质量流量',field:'list.data.totalMassFlow',
                        width:100,formatter:formattotalMassFlow
                    },
                    {
                        title:'累积体积流量',field:'list.data.totalGaugedVolumeFlow',
                        width:100,formatter:formattotalGaugedVolumeFlow
                    },
                    {
                        title:'累积校准体积流量',field:'list.data.date',
                        width:100,formatter:formatdate
                    }
                ]]
            })
        }
    })
}

window.setInterval("get_data()",10000);



//*************************显示表格结束****************


function formatname(value,rec){
    return rec.name;
}
function formatstorageLiquidLevel1(value,rec){
    return rec.data.storageLiquidLevel1;
}
function formatsettlementMode(value,rec){
    return rec.account.settlementMode;
}
function formatstorageLiquidLevel2(value,rec){
    return rec.data.storageLiquidLevel2;
}
function formatshortName(value,rec){
    return rec.account.shortName;
}
function formatspecification(value,rec){
    return rec.specification;
}
function formattime(){
    var myDate = new Date();
    return myDate.toLocaleString();
}
function formatstoragePressure1(value,rec){
    return rec.data.storagePressure1;
}
function formatstoragePressure2(value,rec){
    return rec.data.storagePressure2;
}
function formatgasifyPressure(value,rec){
    return rec.data.gasifyPressure;
}
function formatgasifyTemperature(value,rec){
    return rec.data.gasifyTemperature;
}
function formatoutValve1(value,rec){
    return rec.data.outValve1;
}
function formatoutValve2(value,rec){
    return rec.data.outValve2;
}
function formatinValve1(value,rec){
    return rec.data.inValve1;
}
function formatinValve2(value,rec){
    return rec.data.inValve2;
}
function formatstorageValve1(value,rec){
    return rec.data.storageValve1;
}
function formatstorageValve2(value,rec){
    return rec.data.storageValve2;
}
function formatflowCutValve(value,rec){
    return rec.data.flowCutValve;
}
function formattotalFlow(value,rec){
    return rec.data.totalFlow;
}
function formatinstantFlow(value,rec){
    return rec.data.instantFlow;
}
function formattemperature1(value,rec){
    return rec.data.temperature1;
}
function formatpressure(value,rec){
    return rec.data.pressure;
}
function formattemperature2(value,rec){
    return rec.data.temperature2;
}
function formattemperature3(value,rec){
    return rec.data.temperature3;
}
function formatfireDetector(value,rec){
    return rec.data.fireDetector;
}
function formatcombustibleGasDetector(value,rec){
    return rec.data.combustibleGasDetector;
}
function formatlongitude(value,rec){
    return rec.data.longitude;
}
function formatlatitude(value,rec){
    return rec.data.latitude;
}
function formatmassFlow(value,rec){
    return rec.data.massFlow;
}
function formatvolumeFlow(value,rec){
    return rec.data.volumeFlow;
}
function formatgaugedVolumeFlow(value,rec){
    return rec.data.gaugedVolumeFlow;
}
function formatdensity(value,rec){
    return rec.data.density;
}
function formatreferenceDensity(value,rec){
    return rec.data.referenceDensity;
}
function formattemperature(value,rec){
    return rec.data.temperature;
}
function formatpressure2(value,rec){
    return rec.data.pressure2;
}
function formattotalMassFlow(value,rec){
    return rec.data.totalMassFlow;
}
function formattotalVolumeFlow(value,rec){
    return rec.data.totalVolumeFlow;
}
function formattotalGaugedVolumeFlow(value,rec){
    return rec.data.totalGaugedVolumeFlow;
}
function formatdate(value,rec){
    return rec.data.date;
}


//8**********************显示详细折线图******************

function draw_picture(n){
    $.ajax({
        url:'http://localhost:8090/restapi/product/'+$.session.get('ID')+'/data/'+n+'?start=2016-10-1 14:54:44&limit=2016-12-27 14:57:49',
        type:'get',
        dataType:'text',
        contentType: "application/json;charset=utf-8",
        //Content-Type:'/json',
        headers:{
            "token":$.session.get('token'),
            "Content-Type":'application/json'
        },
        success:function(value){
            var json = eval('(' + value + ')');
            alert(n);
            var data = [];
            var dataSeries = { type: "line" };
            var dataPoints = [];
            //alert(json.date);
            for(var i=0;i<json.length;i++){
                //y += (Math.random() * 10 - 5);
                var mydate=new Date(json[i].date);
                //alert(mydate.toLocaleString());
                dataPoints.push({
                    x:mydate.getUTCSeconds(),
                    y:json[i].value
                });

            }
            dataSeries.dataPoints = dataPoints;
            data.push(dataSeries);
            var chart = new CanvasJS.Chart("recordCvs",
                {
                    zoomEnabled: true,
                    zoomType: "xy",
                    /*title:{
                     text: "Enable Zooming on X & Y Axis"
                     },*/
                    legend: {
                        horizontalAlign: "right",
                        verticalAlign: "center"
                    },
                    axisY:{
                        includeZero: false
                    },
                    data: data // random generator below
                });
            chart.render();
        },
        error:function(){
            alert("用户名或密码错误！");
        }
    });
}
$(function () {
    $("#draw").click(function () {
        var row = $("#dg").datagrid("getSelections");
        if (row == null || row.length == 0) {
            alert("没有选中任何记录，不能显示详情！");
            $("#draw").removeAttr('data-target');
        }
        if (row.length == 1) {
            $("#draw").attr('data-target', '#mydraw');
            draw_picture(1);
            $("#getHistory").click(function(){
                draw_picture(1);
            }
            );
            $("#tankPressure").click(function(){
                    draw_picture(2);
                    $("#getHistory").removeClass("active");
                }
            );
            $("#gasifyPressure").click(function(){
                    draw_picture(3);
                    $("#getHistory").removeClass("active");
                }
            );

            $("#weatherglass").click(function(){
                    draw_picture(4);
                    $("#getHistory").removeClass("active");
                }
            );

            $("#instantFlow").click(function(){
                    draw_picture(5);
                    $("#getHistory").removeClass("active");
                }
            );

            $("#flowmeterPressure").click(function(){
                    draw_picture(6);
                    $("#getHistory").removeClass("active");
                }
            );

            $("#totalFlow").click(function(){
                    draw_picture(7);
                    $("#getHistory").removeClass("active");
                }
            );

            $("#importValve").click(function(){
                    draw_picture(8);
                    $("#getHistory").removeClass("active");
                }
            );
            $("#AddPressure").click(function(){
                    draw_picture(9);
                    $("#getHistory").removeClass("active");
                }
            );
            $("#outportValue").click(function(){
                    draw_picture(10);
                    $("#getHistory").removeClass("active");
                }
            );
        }
    })
});

$(function () {
    $("#getShortName").click(function () {
        var row = $("#dg").datagrid("getSelections");
        if (row == null || row.length == 0) {
            alert("没有选中任何记录，不能显示详情！");
            $("#getShortName").removeAttr('data-target');
        }
        /*if (row.length > 1) {
         alert("不能一次显示多条记录详情！");
         }*/
        //alert(row);
        if (row.length == 1) {
            $.ajax({
                type: 'get',
                headers: {
                    "Content-type": "application/json",
                    token: $.session.get('token')
                },
                url: " http://localhost:8090/restapi/product/getProduct?accountId="+$.session.get('ID')+"&start=0&limit=4",
                dataType: 'json',
                success: function (data) {
                    $("#getShortName").attr('data-target', '#getShortnameDetail');
                    $("#shortDetail").find("input").attr('readonly', 'readonly');
                    $("#name").val(row[0].account.name);
                    $("#shortName").val(row[0].account.shortName);
                    $("#region").val(row[0].account.region);
                    $("#investmentScale").val(row[0].account.investmentScale);
                    $("#investmentMethod").val(row[0].account.investmentMethod);
                    $("#center").val(row[0].account.center);
                    $("#settlementMode").val(row[0].account.settlementMode);
                    $("#deliveryMethod").val(row[0].account.deliveryMethod);
                    $("#earlyWarningThreshold").val(row[0].account.earlyWarningThreshold);
                    $("#linkman").val(row[0].account.linkman);
                    $("#contact").val(row[0].account.contact);
                    $("#signedClient").val(row[0].account.signedClient);
                    $("#status").val(row[0].account.status);
                    $("#type").val(row[0].account.type);
                    $("#progress").val(row[0].account.progress);
                    $("#salesman").val(row[0].account.salesman);
                    $("#industry").val(row[0].account.industry);
                    $("#address1").val(row[0].account.address);
                    $("#contractUnitPrice").val(row[0].account.contractUnitPrice);
                    $("#unit").val(row[0].account.unit);
                    $("#remark").val(row[0].account.remark);
                    $("#operator").val(row[0].account.operator);
                    $("#operationTime").val(row[0].account.operationTime);
                }
            });
        }

    });
});