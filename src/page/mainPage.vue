<template>
  <div class="layout">
    <Layout>
      <Header>
        <h1>
          <img src="../assets/images/admin_logo.png" alt="">
        </h1>
        <h2 @click="exit()">
          <i class="iconfont icon-guanji"></i>
          <span>安全退出</span>
        </h2>
      </Header>
      <Layout>
        <Content>
          <Layout>
            <Sider hide-trigger :style="{background: '#fff',minHeight:'685px'}">
              <Menu theme="light" width="auto">
                <Submenu name="1">
                  <template slot="title">
                    全局管理
                  </template>
                  <MenuItem name="1-1" to="/onlineStatus">终端在线</MenuItem>
                  <MenuItem name="1-2" to="/queryEvent">热力图</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    稽查数据管理
                  </template>
                  <MenuItem name="2-1" to="/onlineStatus">稽查数据列表</MenuItem>
                  <MenuItem name="2-2" to="/queryEvent">稽查数据统计分析</MenuItem>
                </Submenu>
                <MenuItem name="3" to="/onlineStatus">路段管理</MenuItem>
                <MenuItem name="4" to="/onlineStatus">收费站管理</MenuItem>
                <MenuItem name="5" to="/onlineStatus">管理处管理</MenuItem>
                <MenuItem name="6" to="/onlineStatus">识别点管理</MenuItem>
                <MenuItem name="7" to="/onlineStatus">事件上报</MenuItem>
                <MenuItem name="8" to="/onlineStatus">政策法规</MenuItem>
                <MenuItem name="9" to="/onlineStatus">用户管理</MenuItem>
                <MenuItem name="10" to="/onlineStatus">个人中心</MenuItem>
              </Menu>
            </Sider>
            <Content :style="{minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      exit() {
        alert('退出...');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

  .ivu-layout-header {
    background-color: #19a97b;
    height: 70px;
    line-height: 70px;
    border: 0;

    h1 {
      float: left;

      img {
        width: auto;
        max-width: 300px;
        height: 70px;
        vertical-align: middle;
      }
    }

    h2 {
      float: right;
      position: relative;
      top: -5px;
      cursor: pointer;

      span {
        min-width: 100px;
        position: absolute;
        top: 25px;
        left: -10px;
        color: #fff;
        font-size: 12px;
      }

      .iconfont {
        font-size: 28px;
        color: #fff;
      }
    }
  }

</style>
