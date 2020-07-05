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
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
            添加员工
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="photo"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" />
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="添加员工" @click="adds" />
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
        name: "Adds",
        data(){
          return{
            emp_name:'',
            img:'',
            salary:'',

          }
        },
        methods: {
          adds() {
            // console.log(this.$refs.photo.files[0]);
            // let photo = this.$refs.photo.files[0];
            //ajax请求借助于formData
            let formdata = new FormData();
            formdata.append('emp_name',this.emp);
            formdata.append('img',this.$refs.photo.files[0]);
            formdata.append('salary',this.salary);

            this.$axios({
              url: 'http://127.0.0.1:8000/empp/duck/',
              method: "post",
              data: formdata,
              headers:{
                "content-type":"multipart/form-data"
              },
            }).then(res => {
              console.log(res.data);
              //添加成功后返回员工列表
              this.$router.push("/index");
            }).catch(error => {
              this.$message.error('添加不成功');
            })
          }
        }
    }
</script>

<style scoped>

</style>
