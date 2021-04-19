<template>
  <div class="yzm">
    <el-container style="height: 500px;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div class="logo1">
          <img src="../assets/di.png" alt class="img4" />
          <span class="zhihui">智慧云管理平台</span>
        </div>

        <el-menu
          default-active="23"
          class="el-menu-verticol-demo"
          background-color="#304156"
          text-color="#409eff"
          unique-opened:true
        >
          <el-menu-item index="23" class="as-item">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu :name="index+1" v-for="(item,index) in list" :key="index" :index="index+''">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>{{item.meta.title}}</span>
            </template>
                <el-menu-item  v-for="(item2,i) in item.children"
              :key="i"
              :index="index + '-' + i">
                <i :class="item2.meta.icon"></i>
                {{item2.meta.title}}
              </el-menu-item>
        
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="width:1000px">
        <el-header>
          <div class="daohang1">
            <div class="daohang1-left">
              <i class="el-icon-s-fold"></i>
              <span class="shouye1">首页</span>
            </div>

            <div class="daohang1-right">
              <ul class="ul1">
                <li>
                  <img src="../assets/收索.png" alt />
                </li>
                <li>
                  <img src="../assets/放大.png" alt />
                </li>
                <li>
                  <img src="../assets/布局大小.png" alt />
                </li>
              </ul>

              <div class="tui">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>布局设置</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>

        <el-main>
          <div class="d1">
            <div class="kaizha" @click="kaizha">开闸</div>
            <div class="donghao">
              <template>
                <span class="span2">宿舍栋号</span>
                <el-select v-model="value" placeholder="请选择栋号" class="ll1">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>

              <template>
                <span class="span2">楼层</span>
                <el-select v-model="value2" placeholder="请选择楼层" class="ll1">
                  <el-option
                    v-for="item in options"
                    :key="item.value2"
                    :label="item.label2"
                    :value="item.value2"
                  ></el-option>
                </el-select>
              </template>

              <template>
                <span class="span2">宿舍号</span>
                <el-select v-model="value3" placeholder="请选择宿舍号" class="ll1">
                  <el-option
                    v-for="item in options"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                  ></el-option>
                </el-select>
              </template>
            </div>
            <div class="shijian">
              <template>
                <div class="block">
                  <span class="demonstration">请选择日期</span>&nbsp;
                  <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
              </template>
              <div class="chaxun">查询</div>
            </div>
          </div>

          <div class="d1">
              <div class="box"  v-for="item in alls" :key="item.id">
              <div class="title">
                <div class="titleLeft">
                  {{item.roomName}}
                </div>
              <div class="titleRight">
                宿舍人数{{item.total}}
              </div>
              </div>
              <div class="content">
              <el-badge :value="item.normal" class="item" type="primary">
            <el-button size="small">正常</el-button>
          </el-badge>
          <el-badge :value="item.leaveCount" class="item" type="warning">
            <el-button size="small">请假</el-button>
          </el-badge>
          <el-badge :value="item.comebacklate" class="item" type="warning">
            <el-button size="small">晚归</el-button>
          </el-badge>
          <el-badge :value="item.absence" class="item" type="warning">
            <el-button size="small">缺勤</el-button>
          </el-badge>
              </div>
          </div>
   </div>

            
        </el-main>

      </el-container>
    </el-container>
    </div>
</template>
<style>
.content .item{
  margin: 10px 20px;

}
.box{
  width: 230px;
  height: 180px;
  box-shadow:  0 2px 12px 0 rgb(0 0 0 / 10%);
  float: left;
  margin: 10px 20px;
}
.title{
  height: 30px;
}
.titleLeft{
  float: left;
  margin: 30px 20px 0;
}
.titleRight{
  float: right;
  margin: 30px 17px 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
  padding: 0 0;
  border: 1px solid #bfbfbf;
  background: white;
  height: 80px;
}

.el-aside {
  background-color: #304156;
  color: #333;
  text-align: center;
  height: 100%;
  position: fixed;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.logo1 {
  background: #2b2f3a;
  height: 50px;
}
.logo1 .img4 {
  height: 40px;
  width: 35px;
  margin: 5px 0 0 20px;
  float: left;
}
.zhihui {
  color: white;
  font-size: 15px;
  font-weight: 600;
  line-height: 50px;
}
.daohang1 {
  height: 50px;
  box-shadow: 0 0 2px 2px #e3e3e3;
}
.daohang1-left {
  float: left;
  margin: 0 0 0 250px;
}
.shouye1 {
  font-size: 14px;
  color: #bfbfbf;
  float: right;
  margin-left: 30px;
}
.el-icon-s-fold:before {
  font-size: 30px;
  line-height: 50px;
}
.daohang1-right {
  float: right;
  width: 250px;
  margin: 10px 100px;
}
.ul1 li > img {
  width: 30px;
  height: 30px;
  float: left;
  margin: 0 20px;
}
.tui {
  float: right;
  margin: -40px 0 0 50px;
}
.img7 {
  width: 20px;
  height: 20px;
}
.d1 {
  height: 300px;
  width: 1080px;
  margin: 0 0 0 230px;
}
.kaizha {
  border-radius: 6px;
  width: 80px;
  height: 40px;
  background: #ff0000;
  line-height: 40px;
  color: white;
  font-size: 13px;
}
.span2 {
  font-size: 13px;
  font-weight: 700;
}
.donghao .ll1 {
  margin: 0 20px;
}
.block {
  float: left;
  margin: 70px 0 0 340px;
}
.chaxun {
  background: #1890ff;
  border-radius: 6px;
  width: 80px;
  height: 30px;
  margin: 73px 320px 0 0;
  cursor: pointer;
  float: right;
  line-height: 30px;
  color: white;
}
.el-main {
  line-height: 0;
}
.el-row{
  border: 1px solid red;
  width: 1100px;
  margin: 0 0 0 210px;
}
.index_hz2_4 {
  margin-top: 10px;
  height: 630px;
}
.index_hz2_4_1 {
  margin-top: 15px;
  margin-left: 20px;
  float: left;
  width: 203px;
  height: 174px;
  border-radius: 5px 5px 5px 5px;
  border: 1px rgba(235, 235, 235, 0.815) solid;
  box-shadow: 0 0 10px #e9e8e8;
}
.index_hz2_4_1 .p {
  padding-left: 5px;
  font-size: 16px;
  color: #646464;
  font-weight: bold;
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: -2px;
  margin-left: -1px;
  border-bottom: 1px rgb(226, 226, 226) soild;
}

.kuang {
  width: 170px;
  margin: auto;
  height: 80px;
}


</style>


<script>
export default {
    data() {
      return {
         alls: [],
        value:"",
        value3:"",
        title:"",
        icon:"",
        list:"",
        index2:"",
        dong:"",
        cheng:"",
        Time:"",
        children:[],
        iconfont:"iconfont",
        formInline:{
           user:"",
           region:["1212424"]
        },
          options: [{
          value: '1',
          label: '2',
          value2:'1',
          label2:'2',
          value3:'1',
          label3:'2'
        }, {
          value: '3',
          label: '4',
          value2:'3',
          label2:'4',
          value3:'3',
          label3:'4'
        }, {
          value: '5',
          label: '6',
           value2:'5',
          label2:'6',
          value3:'5',
          label3:'6'
        }, 
        ],
        
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2:'',
        valaue3:''
      }
        value: ''
        
      },
  created() {
      this.get(),
       this.all()
        

      
      },
      methods:{
        kaizha(){
           this.$router.push({
             path:'Banji'
           })
        },
        all(){
this.$axios({
        method: "get",
        url: 'http://122.112.253.28:8095/prod-api/smartdor/sdAttence/listAbsenceDormitory?checkDate=&building=&storey=&bdormitory=',
        headers: {
          //把token放到请求头才能请求，这里的'Bearer '表示是后台希望更加的安全，依据后台给的信息看到底是加还是不加
          Authorization: window.sessionStorage.token
        }
      }).then(quan => {
        console.log(quan);
        for(var i=0;i<quan.data.data.list.length;i++){
      this.$data.alls.push(quan.data.data.list[i]);
        }
      
        // console.log(this.alls);
      });
        },
        get(){
  var th = this;
       this.$axios({
         method:"get",
         url:`http://122.112.253.28:8095/prod-api/sys/menu/getRouters`,
         headers:{
             //存储sessionStorage里面的token
             Authorization:window.sessionStorage.token
         }
       }).then(result=>{
         th.list = result.data.data;
        //  conslon.log(th.dictLavel)
        console.log(result.data.data)
       })
        }

      }
     
      
      
}


</script>

