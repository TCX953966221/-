function reg()//注册方法
{
	var mail = document.getElementById("mail").value;
	var option = document.getElementById("option").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var code = document.getElementById("code").value;
	var tel = document.getElementById("tel").value;
	if(check_mail_reg()==true&&check_psw1_reg()==true&&check_psw2_reg()==true&&check_code_reg()==true&&check_tel_reg()==true)
	{
		alert(
			'确认注册信息\n'+
			'电子邮箱：'+mail+'@'+option+'\n'+
			'密码：'+password1+'\n'+
			'手机号码：'+tel+'\n'+
			'注册成功！！！\n'
		);
		return true;
	}
	alert("您的输入有错误，请检查后提交！！\n");
	return false;
}
function check_mail_reg()//检验电子邮箱
{
	var mail = document.getElementById("mail").value;
	var mail_check=/^[a-zA-Z]\w{5,17}$/;
	var mailInfo = document.getElementById("mailInfo");
	if(mail.match(mail_check)==null){
		mailInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		mailInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_psw1_reg()//检验密码
{
	var psw1 = document.getElementById("password1").value;
	var psw1_check=/^[0-9a-zA-Z.,;'/]{6,16}$/;
	var psw1Info = document.getElementById("psw1Info");
	if(psw1.match(psw1_check)==null){
		psw1Info.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		psw1Info.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_psw2_reg()//检验确认密码
{
	var psw1 = document.getElementById("password1").value;
	var psw2 = document.getElementById("password2").value;
	var psw2_check=/^[0-9a-zA-Z.,;'/]{6,16}$/;
	var psw2Info = document.getElementById("psw2Info");
	if(psw1!=psw2){
		psw2Info.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else{
		psw2Info.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_code_reg()//检验验证码
{
	var code = document.getElementById("code").value;
	var code_check=2907;
	var codeInfo = document.getElementById("codeInfo");
	if(code=="" || code!=code_check){
		codeInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		codeInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}

function check_tel_reg()//检验手机号码
{
	var tel = document.getElementById("tel").value;
	var tel_check=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var telInfo = document.getElementById("telInfo");
	if(tel.match(tel_check)==null){
		telInfo.innerHTML="<font color='red' size='4'>×</font>";
		return false;
	}else {
		telInfo.innerHTML="<font color='green' size='4'>√</font>";
	}
	return true;
}