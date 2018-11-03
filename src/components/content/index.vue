<template>
        <div id="queryEvent">
          <div class="queryDate">
            <Row>
            <Col span="3" style="line-height:32px">路段：{{}}</Col>
            <Col span="3" style="line-height:32px">收费站：{{}}</Col>
              <Col span="6">开始日期：<DatePicker type="date" style="width: 150px"></DatePicker>
              </Col>
              <Col span="6">结束日期：<DatePicker type="date" style="width: 150px"></DatePicker>
              </Col>
              <Col span="2"><Button type="success">查询</Button></Col>
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
                  title: '路段名',
                  key: 'id',
                  align:'center'
                },
                {
                  title: '站名',
                  key: 'station',
                  align:'center'
                },
                {
                  title: '操作员',
                  key: 'type',
                  align:'center'
                },
                {
                  title: '班次',
                  key: 'time',
                  align:'center'
                },
                {
                  title: '检测时间',
                  key: 'start',
                  align:'center'
                },
                {
                  title: '通行卡卡号',
                  key: 'end',
                  align:'center'
                },
                {
                  title: '车辆',
                  key: 'position',
                  align:'center'
                },
                {
                  title: '车牌颜色',
                  key: 'weather',
                  align:'center'
                },
                {
                  title: '车型',
                  key: 'event',
                  align:'center'
                },
                {
                  title:'重量',
                  key:'look',
                  align:'center'
                },
                {
                  title: '货物',
                  key: 'event',
                  align:'center'
                },
                {
                  title:'免费金额',
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
      