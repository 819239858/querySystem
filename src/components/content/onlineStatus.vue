<template>
  <div id="onlineStatus">

  </div>
</template>

<script>
  var map;
  export default {
    data() {
      return {
        district: '',
        polygons: [],
        cityCode: '',
      }
    },
    mounted() {
      map = new AMap.Map('onlineStatus', {
        zoom: 7, //级别
        resizeEnable: true,
      });
      var opts = {
        subdistrict: 1, //返回下一级行政区
        showbiz: false //最后一级返回街道信息
      };
      this.district = new AMap.DistrictSearch(opts); //注意：需要使用插件同步下发功能才能这样直接使用
      this.district.search('中国', function (status, result) {
        console.log(status,result);
        if (status == 'complete') {
          this.getData(result.districtList[0]);
        } else {
          console.log('error');
        }
      });
    },
    methods: {
      getData(data, level) {
        var bounds = data.boundaries;
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            var polygon = new AMap.Polygon({
              map: map,
              strokeWeight: 1,
              strokeColor: '#0091ea',
              fillColor: '#80d8ff',
              fillOpacity: 0.2,
              path: bounds[i]
            });
            this.polygons.push(polygon);
          }
          map.setFitView(); //地图自适应
        }

        var subList = data.districtList;
        
      }
    }
  }
</script>

<style>
  #onlineStatus {
    width: 100%;
    height: 100%;
  }

</style>
