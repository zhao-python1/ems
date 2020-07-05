<template>
    		<div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
							</p>
						</div>
						<div id="topheader">
							<h1 id="title">
								<a href="#">main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						注册
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">用户名:</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="username" v-model="username" />
								</td>
							</tr>
							<tr><td valign="middle" align="right">真实姓名:</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="real_name"/>
								</td>
							</tr>
							<tr><td valign="middle" align="right">密码:</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password" @onblur="pwds1"/>
								</td>
							</tr>
              <tr><td valign="middle" align="right">确认密码:</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="qu_pwd" @onblur="pwds2"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									性别:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="gendeer=1"/>
								</td>
							</tr>

						</table>
						<p>
							<el-button type="success" @click="user_re">注册</el-button>
						</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Register_b",
      data(){
        return{
                 username:'',
                 password:'',
                 real_name:'',
                 gendeer:0,
                 qu_pwd:'',
        }
      },
        methods:{
          //可以向后端提交注册请求
          user_re(){
             this.$axios({
               url:'http://127.0.0.1:8000/empp/register/',
               method:'post',
               data:{
                 username:this.username,
                 password:this.password,
                 real_name:this.real_name,
                 gendeer:this.gendeer,
                 qu_pwd:this.qu_pwd,
               }
             }).then(res=>{
                 console.log(res.data['message']);
                 //如果创建成功，跳转到登录页面
                 if (res.data['message']){
                   //调到登录界面
                   this.$message('这是成功的注册哦');
                   this.$router.push('/login')
                 }
             }).catch(error=>{
                 console.log(error);
                 this.$message.error('错了哦，注册失败了');
             })
          },
          pwds1(){
            if (this.password.length<6){
              this.$message.error('密码长度不能小于六位')
            }
          },
          pwds2(){
            if (this.password !== this.qu_pwd){
              this.$message.error('两次密码不一致')
            }
          },
        }
    }
</script>

<style scoped>

</style>
