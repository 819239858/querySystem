<template>
  <div id="queryEvent">
    <div class="queryDate">
      <Row>
        <Col span="5">开始日期：<DatePicker type="date" v-model="startTime" style="width: 150px"></DatePicker>
        </Col>
        <Col span="5">结束日期：<DatePicker type="date" v-model="endTime" style="width: 150px"></DatePicker>
        </Col>
        <Col span="2"><Button type="primary" @click="search()">查询</Button></Col>
        <Col span="3" style="line-height:32px">共：{{}}条数据</Col>
      </Row>
      <Table style="margin-top:20px" border :columns="columns1" :data="data1"></Table>
      <Modal v-model="modal" title="查看图片" footer-hide width="1000px">
        <table>
          <tr>
            <td>
              <div class="image1" style="float: right; width: 450px;height: 320px;margin: 5px 5px 5px 5px;">
                <img src="Image/null" width="100%" height="100%">
              </div>
            </td>
            <td>
              <div class="image1" style="float: right; width: 450px;height: 320px;margin: 5px 5px 5px 5px;">
                <img src="Image/null" width="100%" height="100%">
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="image1" style="float: right; width: 450px;height: 320px;margin: 5px 5px 5px 5px;">
                <img src="Image/null" width="100%" height="100%">
              </div>
            </td>
            <td>
              <div class="image1" style="float: right; width: 450px;height: 320px;margin: 5px 5px 5px 5px;">
                <img src="Image/null" width="100%" height="100%">
              </div>
            </td>
          </tr>
        </table>
      </Modal>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: '',
        modal: false,
        columns1: [{
            title: '序号',
            key: 'id',
            align: 'center'
          },
          {
            title: '所属站',
            key: 'station',
            align: 'center'
          },
          {
            title: '类型',
            key: 'type',
            align: 'center'
          },
          {
            title: '发生时间',
            key: 'time',
            align: 'center'
          },
          {
            title: '开始桩号',
            key: 'start',
            align: 'center'
          },
          {
            title: '结束桩号',
            key: 'end',
            align: 'center'
          },
          {
            title: '位置',
            key: 'position',
            align: 'center'
          },
          {
            title: '天气情况',
            key: 'weather',
            align: 'center'
          },
          {
            title: '事件描述',
            key: 'event',
            align: 'center'
          },
          {
            title: '查看',
            key: 'look',
            align: 'center',
            render: (h, params) => {
              return h('a', {
                style: {
                  color: '#5cbdaa'
                },
                on: {
                  click: () => {
                    this.modal = true
                  }
                }
              }, '图片');
            }
          }
        ],
        data1: [{
          id: 1,
          station: '冷水江南站',
          type: 0,
          time: new Date(),
          start: 'k11',
          end: 'k44',
          position: '27.626651_111.436233',
          weather: '雨',
          event: '冲关下高速',
        }]
      }
    },
    methods: {
      search() {
        if (new Date(this.startTime) > 0 && new Date(this.endTime) > 0) {
          if (new Date(this.startTime) > new Date(this.endTime)) {
            this.$Message.warning("开始日期不能大于结束日期");
            return false;
          }
        }else{
          this.$Message.warning("请选择开始日期或结束日期");
          return false;
        }
        return true;
      }
    }
  }

</script>

<style lang="less" scoped>
  #queryEvent {
    height: 100%;
    padding: 24px;
  }

</style>
