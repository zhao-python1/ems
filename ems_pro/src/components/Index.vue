<template>
    		<div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
            <p>
              2009/11/20
              <router-link to="/login">安全退出</router-link>
            </p>
						<!--<p @click="last_login">-->
							<!--2009/11/20-->
							<!--<br />-->
							<!--安全退出-->
						<!--</p>-->
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
						Welcome!{{user_msg}}用户界面
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>ID</td>
							<td>Name</td>
							<td>Photo</td>
							<td>Salary</td>
							<td>Age</td>
							<td>Operation</td>
						</tr>
						<tr v-for="(emp,index) in emp_li" :key="emp.id" :chass="index%2==0?'row1':'row2'">
							<td>{{emp.id}}</td>
							<td>{{emp.emp_name}}</td>
							<td><img :src="emp.img" style="height: 60px;"></td>
							<td>{{emp.salary}}</td>
							<td>{{emp.age}}</td>
							<td><a href="javascript:;" @click="del(emp.id)">删除</a>
                <!--<a href="javascript:;" @click="updates(emp.id)">修改员工</a>-->
                 <router-link :to="'/updates/'+emp.id">修改</router-link>
              </td>
						</tr>
					</table>
					<p>
						<!--<input type="button" class="button" value="Add Employee"/>-->
            <el-button type="success"><router-link to="/add">添加员工</router-link></el-button>
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
        name: "Index",
        data(){
            return{
              user_msg:'',
              'emp_li':[],
            }
        },
        methods:{
          //获取所有员工信息、find
          find(){
            this.$axios.get('http://127.0.0.1:8000/empp/duck/').then(res=>{
              this.emp_li = res.data.results;
            }).catch(error=>{
              this.$message.error('查询出问题了');
            })
          },
          //删除员工的

          del(id){
                this.$axios({
                url:'http://127.0.0.1:8000/empp/duck/'+`${id}/`,
                method:'delete',
              }).then(res=>{
                  this.$message('删除成功');
                  this.find()
                  // this.$router.push('/index')
              }).catch(error=>{
                  this.$message.error('删除失败');
              })
            },
          last_login(){
            this.$router.push('/index')
          },

          // 更新员工
          // updates(id){}
          lasts(){
            // this.$axios.('http://127.0.0.1:8000/empp/duck/')

          }
        },
        // //vue 的生命周期函数
        created() {
          let username = sessionStorage.getItem('user');
           console.log(username)
          this.user_msg = username;
          if(username){

          }else {
            this.$message.error('还没登陆');
            this.$router.push('/login')
          }
          //页面加载完成前，获取数据
          this.find();
        }
    }
</script>

<style scoped>

</style>
