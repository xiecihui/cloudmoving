/*弹窗页表单验证*/
function FormValidator(){
	var body = layer.getChildFrame('body', index),
	    result = true,
	    str='';
	body.find('.list-box .required').not("#withholdDate").each(function(i){
		if($(this).val()==''){
			result = false;
			str='必填项不能为空'
		}
	})
	if(body.find('.textbox-value').val()==''){
		    result = false;
		    str +='日期不能为空';
	}
	
	layer.msg(str);
	return result;
}



