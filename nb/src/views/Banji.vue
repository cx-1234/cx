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
            <el-menu-item v-for="(item2,i) in item.children" :key="i" :index="index + '-' + i">
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
            <div class="d2">
              <span>班级名称:</span> &nbsp;
              <el-input v-model="input" placeholder="请输入班级名称"></el-input>&nbsp;
              <span>班主任名称:</span> &nbsp;
              <el-input v-model="input1" placeholder="请输入班主任名称"></el-input>&nbsp;
              <span>状态:</span> &nbsp;
              <el-select v-model="value2" placeholder="班级状态">
                <el-option
                  v-for="item in options"
                  :key="item.value2"
                  :label="item.label"
                  :value="item.value2"
                ></el-option>
              </el-select>
              <span class="shousuo">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
              </span>
            </div>
            <div class="anniu">
              <el-button type="primary" icon="el-icon-plus">新增</el-button>
              <el-button type="success" icon="el-icon-edit">修改</el-button>
              <el-button type="danger" icon="el-icon-delete-solid">删除</el-button>
            </div>

            <div class="liebiao">
              <template>
                <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                >
                  <el-table-column type="selection" width="55"></el-table-column>,
                  <el-table-column prop="id" label="序号" width="120"></el-table-column>
                  <el-table-column prop="className" label="班级名称" width="120"></el-table-column>
                  <el-table-column prop="classTeacherName" label="班主任名称" width="120"></el-table-column>
                  <el-table-column prop="createTime" label="创建时间" width="120"></el-table-column>
                  <el-table-column prop="modifyTime" label="修改时间" width="120"></el-table-column>
                  <el-table-column prop="status" label="状态" width="120">
                    <el-switch
                        v-model="value"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                      </el-switch>
                  </el-table-column>
                  <el-table-column  label="操作" show-overflow-tooltip>
                      <el-button type="primary" icon="el-icon-edit" circle></el-button> 
                       <el-button type="danger" icon="el-icon-delete" circle></el-button>
                  </el-table-column>
                </el-table>
              </template>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-input {
  width: 150px;
}
.el-main {
  text-align: left;
}
.shousuo {
  margin: 0 20px;
}
.anniu {
  margin-top: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      add: "",
      input: "",
      input1: "",
      value2: "",
      list: "",
       value: false,
      tableData: [],
      options: [
        {
          value2: "选项1",
          label: "正常"
        },
        {
          value2: "选项2",
          label: "停用"
        }
      ]
    };
  },
  created() {
    this.ad();
  },
  methods: {
    ad() {
      this.$axios({
        method: "get",
        url:
          "http://122.112.253.28:8095/prod-api/basedata/bclass/list?pageNum=1&pageSize=10",
        headers: {
          Authorization: window.sessionStorage.token
        }
      }).then(cha => {
        console.log(cha);
        this.tableData=cha.data.data.list;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
