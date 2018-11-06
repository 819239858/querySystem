<template>
  <div id="login">
    <vue-particles color="#fff"></vue-particles>
    <div class="user_login">
      <strong>湖南省高速公路移动稽查管理平台</strong>
      <em>Hunan higway Green Car Data Search System</em>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username">
          <Input type="text" v-model="formInline.username" placeholder="账号">
          <Icon size="20" color="#0c9076" type="ios-person" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon size="20" color="#0c9076" type="ios-lock" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="recode" inline>
          <Row>
            <Col span="8">
            <Input type="text" v-model="formInline.recode" placeholder="验证码">
            <Icon size="20" color="#0c9076" type="ios-mail" slot="prepend"></Icon>
            </Input>
            </Col>
            <Col span="8" class="recodeBtn">
            <Button @click="createCode()">{{code}}</Button>
            </Col>
            <Col span="8" class="codeBtn">
            <Button @click="checkCode()">验证码检验</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button long type="primary" @click="handleSubmit('formInline')" style="font-size:16px;">立即登陆</Button>
          <Row>
            <Col span="24">
            <p class="mark">© 2017-2019</p>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (value.toUpperCase() !== this.code.toUpperCase()) {
          callback(new Error('输入的验证码不正确!'));
        } else
          callback();
      };
      return {
        code: '',
        formInline: {
          username: '',
          password: '',
          recode: '',
        },
        ruleInline: {
          username: [{
            required: true,
            message: '请输入您的账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入您的密码.',
            trigger: 'blur'
          }],
          recode: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      }
    },
    mounted() {
      this.createCode();
    },
    methods: {
      
      //登录提交
      handleSubmit(name) {
        if (this.formInline.recode.toUpperCase() !== this.code.toUpperCase()) {
          this.createCode();
          return false;
        }
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            return false;
          }
        })
      },
      login(){
        this.$http({
          method:'post',
          url:'',
          data:{
            username:this.formInline.username,
            password:this.formInline.password
          }
        }).then(res=>{
          console.log(res);
          this.$router.push("/");
        }).catch(error => {
          console.log(error);
        })
      },
      //创建验证码
      createCode() {
        this.code = "";
        var codeLength = 4;
        var selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l',
          'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
          'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
          var charIndex = Math.floor(Math.random() * 60);
          this.code += selectChar[charIndex];
        }
        if (this.code.length != codeLength) {
          this.createCode();
        }
      },
      //验证码检验
      checkCode() {
        var inputCode = this.formInline.recode.toUpperCase();
        var codeToUp = this.code.toUpperCase();
        if (inputCode.length <= 0) {
          this.createCode();
          return false;
        } else if (inputCode != codeToUp) {
          this.formInline.recode = "";
          this.createCode();
          return false;
        } else {
          return true;
        }
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #login {
    position: relative;
    background: #16a085;
    height: 100%;

    .user_login {
      width: 460px;
      height: auto;
      overflow: hidden;
      position: absolute;
      left: 50%;
      margin-left: -230px;
      top: 20%;
      padding: 40px;
      box-shadow: 0 -15px 30px #0d957a;
      border-radius: 5px;

      strong {
        font-size: 20px;
        display: block;
        font-weight: bold;
        text-align: center;
        color: #45bda6;
        text-shadow: 0 0 1px #0e947a;
      }

      em {
        display: block;
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 8px;
        font-weight: bold;
        text-align: center;
        color: #45bda6;
        text-shadow: 0 0 1px #0e947a;
      }

      .mark {
        text-align: center;
        margin: 5px 0;
        font-size: 12px;
        color: #53c6b0;
      }

      .ivu-form {
        margin: 0 auto;
        width: 300px;
      }

      .ivu-input {
        background-color: #5cbdaa;
      }

      .ivu-input-group-prepend {
        background-color: #5cbdaa;
      }

      .ivu-btn-primary {
        background-color: #048f74;
        border-color: #048f74;
      }
    }
  }

</style>
