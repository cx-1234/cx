<template>
  <div class="home">
       <div class="login">
            <form  class="login-form">
                   <h3 class="title">智慧宿管云平台</h3>
                   <div class="el-form-itme is-required el-form-itme--mediun">
                      <div class="el-form-item__content">
                         <div class="el-input el-input--medium el-input--prefix">
                              <input v-model="username" autocomplete="off" placeholder="账号" class="el-input__inner">
                              <span class="el-input__predix">
                                    <i class="el-icon-user-solid"></i>
                              </span>
                        </div>
                      </div>
                   </div>

                    <div class="el-form-itme is-required el-form-itme--mediun">
                      <div class="el-form-item__content">
                         <div class="el-input el-input--medium el-input--prefix">
                              <input v-model="password" type="password"  autocomplete="off" placeholder="密码" class="el-input__inner">
                              <span class="el-input__predix">
                                    <i class="el-icon-unlock"></i>
                              </span>
                        </div>
                      </div>
                   </div>

                    <div class="el-form-itme is-required el-form-itme--mediun">
                      <div class="el-form-item__content">
                         <div class="el-input el-input--medium el-input--prefix"  prop="verifycode">
                              <input v-model="code" autocomplete="off" placeholder="验证码" class="el-input__inner el-input__yz"> 
                              <span class="el-input__predix">
                                    <i class="el-icon-key"></i>
                              </span>  
                              
                        </div>

                      </div>
                       <img :src="imgurl" @click="img()" width="100" height="30" class="img3">
                   </div>
                   
                   <div class="ji">
                        <template>
                        <!-- `checked` 为 true 或 false -->
                        <el-checkbox v-model="checked">记住密码</el-checkbox>
                      </template>
                    </div> 

                    <div class="deng" @click='deng1'>
                      登录
                    </div>
            </form>
               <span class="zw1">Copyright © 2019-2020 smartdormitory.cn All Rights Reserved.</span>

       </div>

     
  </div>
</template>
<style>
     *{
       margin: 0;
       padding: 0;
       list-style: none;
     }
     .login{
         background: url(../assets/beijin.jpg) no-repeat;
         background-size: cover;
         height: 100%;
         display: flex;
         width: 100%;
         position: fixed;
         text-align: center;
         justify-content: center;
     }
     .title{
        margin-bottom: 22px;
     }
  .login-form{
    border-radius: 6px;
    background: #fff;
    width: 400px;
    padding: 25px 25px 5px 25px;
    text-align: center;
    margin: 95px 0;
     }
     /* .el-form-itme {
        margin-bottom: 22px;
     }  */
     *, :after, :before {
    box-sizing: inherit;
}

   .login-form .el-input, .login-form .el-input input {
    height: 38px;
   }
   .el-input--prefix .el-input__inner {
    padding-left: 30px;
   }
   .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
  .el-input__icon, .el-input__prefix {
    height: 100%;
    text-align: center;
    transition: all .3s;
}
  .el-input__prefix {
    position: absolute;
    left: 5px;
    top: 0;
    color: #c0c4cc;
}
.el-icon-user-solid:before{
    color: #dcdfe6;
    float: left;
    margin: -53px 370px 0 0;
}
.el-icon-unlock:before{
   color: #dcdfe6;
    float: left;
    margin: -53px 370px 0 0;
}
.el-input__yz{
   width: 200px;
   margin: 0 196px 0 0;
}
.el-icon-key:before{
    color: #dcdfe6;
    float: left;
    margin: -53px 370px 0 0;
}
.ji{
  margin: -30px 300px 0 0;
}
.deng{
  color: white;
  background: #46a6ff;
  border-radius: 6px;
  line-height: 40px;
  margin: 20px 0; 
  cursor: pointer;
}
.zw1{
  position: absolute;
  bottom: 20px;
  color: white;
}
.yzm img{
  float: right;
  width: 100px;
  margin: -30px 40px;
}
.img3{
  float: right;
  margin: -70px 40px 0 0;
  }
</style>

<script>
export default {
    data() {
      return {
        checked: false,
        username:"",
        password:"",
        imgurl:"",
        uuid:"",
        code:""
      };
    },
    created() {
      this.$axios({
            method:"get",
            url:"http://122.112.253.28:8095/prod-api/captchaImage",
      }).then((result)=>{
            this.imgurl = "data:image/gif;base64," + result.data.data.img;
            this.uuid = result.data.data.uuid;
      });
    },
     methods: {
        img(){
             this.$axios({
            method:"get",
            url:"http://122.112.253.28:8095/prod-api/captchaImage",
           }).then((result)=>{
            this.imgurl = "data:image/gif;base64," + result.data.data.img;
            this.uuid = result.data.data.uuid;
          });
        },

          deng1(){
            this.$axios({
               method:"post",
               url:"http://122.112.253.28:8095/prod-api/admin/login",
               data:{
              username:this.username,
              password:this.password,
              uuid:this.uuid,
              code:this.code,
              }
               
            }).then((result)=>{
               if(result.data.code){
                 sessionStorage.setItem("token",result.data.data.tokenHead + result.data.data.token);
                 this.$router.push({
                    path:'Yzm'
                 })
                
               }

          });
         }
          
     },
     
       

}
</script>
