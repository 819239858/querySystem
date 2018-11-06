<template>
  <div id="onlineStatus">

  </div>
</template>

<script>
  var map;
  import geo_data from '../../util/geo_data';
  export default {
    data() {
      return {
        // center:[112.979352,28.21347],
        currentTime: '',
        timer: null,
        geo_data,
        markerList: []
      };
    },
    mounted() {
      var _this = this;
      map = new AMap.Map("onlineStatus", {
        zoom: 7, //级别
        resizeEnable: true
      });
      this.getTime();
      this.drawBounds();
      this.drawMarks();
      this.showMapType();

      //   this.timer = setInterval(() => {
      //     this.currentTime =
      //       `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
      //   }, 1000);
      // },
      // beforeDestroy() {
      //   if (this.timer) {
      //     clearInterval(this.timer); //在vue实例销毁钱，清除我们的定时器
      //   }
    },
    methods: {
      //划区域
      drawBounds() {
        AMap.plugin("AMap.DistrictSearch", function () {
          // 创建行政区查询对象
          var district = new AMap.DistrictSearch({
            // 返回行政区边界坐标等具体信息
            extensions: "all",
            // 设置查询行政区级别为 区
            level: "district"
          });

          district.search("湖南", function (status, result) {
            // 获取朝阳区的边界信息
            var bounds = result.districtList[0].boundaries;
            var polygons = [];
            if (bounds) {
              for (var i = 0, l = bounds.length; i < l; i++) {
                //生成行政区划polygon
                var polygon = new AMap.Polygon({
                  map: map,
                  strokeWeight: 3,
                  path: bounds[i],
                  fillOpacity: 0,
                  fillColor: "#fff",
                  strokeColor: "#191da9"
                });
                polygons.push(polygon);
              }
              // 地图自适应
              map.setFitView();
            }
          });
        });
      },
      //画标记
      drawMarks() {
        var _this = this;
        map.clearMap();
        //设置marker
        for (let i = 0; i < this.geo_data.length; i++) {
          this.markerList[i] = new AMap.Marker({
            position: this.geo_data[i].position,
            icon: require("../../assets/images/point.png"),
            offset: new AMap.Pixel(-13, -30)
          });
        }
        map.add(this.markerList);
        //设置marker信息与事件
        for (let i = 0; i < this.markerList.length; i++) {
          this.markerList[i].setLabel({
            //修改label相对于maker的位置
            offset: new AMap.Pixel(20, -20),
            content: `<div class='info'>${this.geo_data[i].title}</div>`
          });
          //鼠标点击marker弹出自定义的信息窗体
          AMap.event.addListener(this.markerList[i], "click", function () {
            infoWindow.open(map, _this.markerList[i].getPosition());
          });
          //实例化信息窗体
          let title = `<span style="font-size:11px;color:#F00;">${this.geo_data[i].title}</span>:路况连线`,
            content = [];
          content.push(
            `<object width="640" height="377" id="SampleMediaPlayback" name="SampleMediaPlayback" type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">
              <param name="movie" value="swfs/SampleMediaPlayback.swf"> 
              <param name="quality" value="high"> 
              <param name="bgcolor" value="#000000"> 
              <param name="allowfullscreen" value="true"> 
              <param name="flashvars" value="&amp;src=rtmp://222.247.57.142/live/83&amp;autoHideControlBar=true&amp;streamType=live&amp;autoPlay=true&amp;verbose=true">
              <embed src="swfs/SampleMediaPlayback.swf" width="350" height="300" id="SampleMediaPlayback" quality="high" bgcolor="#000000" name="SampleMediaPlayback" allowfullscreen="true" pluginspage="http://www.adobe.com/go/getflashplayer" flashvars="&amp;src=rtmp://222.247.57.142/live/83&amp;autoHideControlBar=true&amp;streamType=live&amp;autoPlay=true&amp;verbose=true" type="application/x-shockwave-flash"> 
            </object>`
          );
          content.push(
            `<table>
          <tbody><tr><td>版本号:</td><td v-html="">时间:${this.currentTime}</td></tr>
            <tr><td>纬度:</td><td>经度:</td></tr>
            <tr><td>事件描述:</td></tr>
            <tr><td>温度:</td><td>湿度:</td><td>PM2.5:</td></tr>
            <tr><td>TVOC:</td><td>甲醛:</td></tr>
          </tbody></table>`
          );
          let infoWindow = new AMap.InfoWindow({
            isCustom: true, //使用自定义窗体
            content: this.createInfoWindow(title, content.join("")),
            offset: new AMap.Pixel(16, -45)
          });
        }
      },
      //创建弹出窗体
      createInfoWindow(title, content) {
        var info = document.createElement("div");
        info.className = "custom-info input-card content-window-card";

        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("div");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow;

        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);

        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);

        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
      },
      //关闭窗体
      closeInfoWindow() {
        map.clearInfoWindow();
      },
      //显示当前时间
      getTime() {
        var now = new Date();
        this.currentTime = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() +
          ":" +
          now.getMinutes() + ":" + now.getSeconds();
        //等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
        setTimeout(this.getTime, 1000);
        return this.currentTime;
      },
      showMapType() {
        AMap.plugin(["AMap.MapType"], function () {
          //地图类型切换
          var type = new AMap.MapType({
            defaultType: 0 //使用2D地图
          });
          map.addControl(type);
        });
      }
    },
    watch: {
      
    }
  };

</script>

<style>
  #onlineStatus {
    width: 100%;
    height: 100%;
  }

  .content-window-card {
    position: relative;
    box-shadow: none;
    bottom: 0;
    left: 0;
    width: auto;
    padding: 0;
  }

  .content-window-card p {
    height: 2rem;
  }

  .custom-info {
    border: solid 1px silver;
  }

  div.info-top {
    position: relative;
    background: none repeat scroll 0 0 #F9F9F9;
    border-bottom: 1px solid #CCC;
    border-radius: 5px 5px 0 0;
  }

  div.info-top div {
    display: inline-block;
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    line-height: 31px;
    padding: 0 10px;
  }

  div.info-top img {
    position: absolute;
    top: 10px;
    right: 10px;
    transition-duration: 0.25s;
  }

  div.info-top img:hover {
    box-shadow: 0px 0px 5px #000;
  }

  div.info-middle {
    font-size: 12px;
    padding: 10px 6px;
    line-height: 20px;
  }

  div.info-bottom {
    height: 0px;
    width: 100%;
    clear: both;
    text-align: center;
  }

  div.info-bottom img {
    position: relative;
    z-index: 104;
  }

  span {
    margin-left: 5px;
    font-size: 11px;
  }

  .info-middle img {
    float: left;
    margin-right: 6px;
  }

</style>
