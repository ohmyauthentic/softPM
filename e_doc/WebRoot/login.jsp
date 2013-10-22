<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>登录</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	<link rel="stylesheet" href="css/form5.css" type="text/css" media="screen" title="no title" charset="utf-8"/>

  </head>
  
  <body>
    <div class="container">
		
		<div id="container_demo">
			
			<div id="wrapper">
				<div id="login" class="form animate">
					<form action="#" method="get" autocomplete="on">
						<h1><span>登录</span></h1>
						<div>
							<label for="username" class="uname" >用户名</label>
							<input type="text" id="username" required="required" placeholder="请输入用户名"/>
						</div>
						<div>
							<label for="password" class="youpasswd" >密码</label>
							<input type="password" name="password" required="required" placeholder="请输入密码" id="password" />
						</div>			
							
						<div class="login button">
							<input type="submit" value="登录" class="btn" />
						</div> 
						<div class="change_link">
							还没有账号 ? <a href="#toregister"  class="to_register">赶快来注册吧</a>
						</div>
					</form>
				</div>
				
				
				
			</div>
		</div>
	</div>
  </body>
</html>
