<template>
  <div id="queryEvent">
    <div class="queryDate">
      <Row>
        <Col span="5">开始日期：<DatePicker type="date" style="width: 150px"></DatePicker>
        </Col>
        <Col span="5">结束日期：<DatePicker type="date" style="width: 150px"></DatePicker>
        </Col>
        <Col span="2"><Button type="success">查询</Button></Col>
        <Col span="3" style="line-height:32px">共：{{}}条数据</Col>
      </Row>
      <Table style="margin-top:20px" border :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns1: [{
            title: '序号',
            key: 'id',
            align:'center'
          },
          {
            title: '所属站',
            key: 'station',
            align:'center'
          },
          {
            title: '类型',
            key: 'type',
            align:'center'
          },
          {
            title: '发生时间',
            key: 'time',
            align:'center'
          },
          {
            title: '开始桩号',
            key: 'start',
            align:'center'
          },
          {
            title: '结束桩号',
            key: 'end',
            align:'center'
          },
          {
            title: '位置',
            key: 'position',
            align:'center'
          },
          {
            title: '天气情况',
            key: 'weather',
            align:'center'
          },
          {
            title: '事件描述',
            key: 'event',
            align:'center'
          },
          {
            title:'查看',
            key:'look',
            align:'center'
          }
        ],
        data1: [
          
        ]
      }
    }
  }

</script>

<style>
  #queryEvent {
    height: 100%;
    padding: 24px;
  }

</style>
