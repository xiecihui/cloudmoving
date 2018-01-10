//点击优惠种类类型 触发事件
//二级联动下拉框 
 $.ajax({
     type: "GET",
     url: "/static/temp/select-couponclass.json",
     async:false,
     dataType: "json",
     success: function(data){
              var  alldata = data.alldata;
              function classList(){
                  var res ='';
                  for (var i = 0; i < alldata.length; i++) {
                    res +="<option value= "+alldata[i].tit+">"+alldata[i].tit +"</option>"
                  }
                  $('#couponclass').append(res);
              }
              classList();
              function couponName(){
                  var res ='';
                  for (var i = 0; i < alldata[0].text.length; i++) {
                    res +="<option value= "+alldata[0].text[i]+">"+alldata[0].text[i]
                              +"</option>"
                  }
                  $('#select1').append(res);
              }
              couponName();
              $('#couponclass').change(function(){
                    var _val = ($("#couponclass").val());
                    var res ='';
                    for (var i = 0; i < alldata.length; i++) {
                      if(_val == alldata[i].tit ){
                           for (var j = 0; j < alldata[i].text.length; j++) {
                              res +="<option value= "+alldata[i].text[j]+">"+alldata[i].text[j]
                              +"</option>"
                          }
                      }
                    }
                   $('#select1').empty();
                   $('#select1').append(res);     
              })

       }
 });    

//具体的种类选择 触发事件
$("#add").click(function(){
  $("#select1 option:selected").appendTo("#select2");
});
$("#add_all").click(function(){
  $("#select1 option").appendTo("#select2");
});
$("#remove").click(function(){
  $("#select2 option:selected").appendTo("#select1");
}); 
$("#remove_all").click(function(){
  $("#select2 option").appendTo("#select1");
}); 
$("#select1").dblclick(function(){
  $("#select1 option:selected").appendTo("#select2"); 
});
$("#select2").dblclick(function(){
    $("#select2 option:selected").appendTo("#select1"); 
});