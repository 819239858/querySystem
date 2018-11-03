<template>
  <div class="layout">
    <Layout>
      <Header>
        <h1>
          <img src="../assets/images/admin_logo.png" alt="">
        </h1>
        <h2>
          <i class="iconfont icon-guanji"></i>
          <span>安全退出</span>
        </h2>
      </Header>
      <Layout>
        <Content>
          <Layout>
            <Sider hide-trigger :style="{background: '#fff',minHeight:'685px'}">
              <Menu active-name="1-2" theme="light" width="auto">
                <Submenu name="1">
                  <template slot="title">
                    全局管理
                  </template>
                  <MenuItem name="1-1" to="/onlineStatus">终端在线情况</MenuItem>
                  <MenuItem name="1-2" to="/queryEvent">事件上报查询</MenuItem>
                </Submenu>
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
        min-width:100px;
        position: absolute;
        top:20px;
        left:-10px;
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
