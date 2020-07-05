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
                    欢迎:{{$route.params.id}}来到修改页面
                </h1>
                <form action="emplist.html" method="post">
                    <table cellpadding="0" cellspacing="0" border="0"
                           class="form_table">
                        <tr>
                            <td valign="middle" align="right">
                                id:
                            </td>
                            <td valign="middle" align="left">
                                {{$route.params.id}}
                            </td>
                        </tr>
                        <tr>
                            <td valign="middle" align="right">
                                name:
                            </td>
                            <td valign="middle" align="left">
                                <input type="text" class="inputgri" name="name" v-model="emp_name"/>
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
                                <input type="text" class="inputgri" name="age"/>
                            </td>
                        </tr>
                    </table>
                    <p>
                        <el-button type="success" @click="update_emp">change</el-button>
                    </p>
                </form>
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
        name: "Updates",
        data(){
            return{
                emp_name:"",
                salary:"",
            }
        },
        methods:{
            get_emp_id(id){

                let ids = this.$route.params.id;
                this.$axios({
                    url:"http://127.0.0.1:8000/empp/duck/"+`${ids}`,
                    method:"get",
                }).then(res=>{
                    this.emp_name = res.data.results["emp_name"];
                    this.salary = res.data.results["salary"]
                }).catch(error=>{
                    this.$message.error("出错了")
                })
            },
          created() {
            this.get_emp_id()
          },
            update_emp(){
                let id = this.$route.params.id;
                let photo = this.$refs.photo.files[0];
                let formdata = new FormData();
                formdata.append("emp_name",this.emp_name);
                formdata.append("img",photo);
                formdata.append("salary",this.salary);
                this.$axios({
                    url:"http://127.0.0.1:8000/empp/duck/"+`${id}/`,
                    method:"patch",
                    data:formdata,
                    headers:{
                        "content-type":"multipart/form-data"
                    }
                }).then(res=>{
                    console.log(res.data);
                    this.$message("已经成功修改了");
                    this.$router.push("/index")
                }).catch(error=>{
                    this.$message.error("修改不成功")
                })
            }
        },

    }
</script>

<style scoped>

</style>
