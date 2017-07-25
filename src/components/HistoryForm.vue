<template>
    <div>
        <div class="border_radius">
        <h2>
            <span></span>
            历史
            <button class="tip_btn_add" @click="addText">添加</button>
        </h2>
        <div class="cont_box">
            <table class="table">
                <thead>
                <tr class="row">
                    <th class="col">图片</th>
                    <th class="col">时间</th>
                    <th class="col">内容</th>
                    <th class="col">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="row">
                    <td class="col">
                        <img :src="'/static/apply_1.png'" alt="">
                    </td>
                    <td class="col">2015年07月14日</td>
                    <td class="col">远行当选优仕队队长</td>
                    <td class="col">
                        <button @click="compile" type="button" class="zbox-btn zbox-btn0 zbox-btn-blue zbox-btn-outlined">编辑</button>
                        <button @click="remove" id="" type="button" class="zbox-btn zbox-btn1 zbox-btn-blue zbox-btn-outlined">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>
<script>
import '../script/jquery.min.js'
import '../script/zdialog.js'
import '../script/layer.js'
import '../script/index.js'
import '../script/historyFrom.js'

export default {
  name: 'HistoryForm',
  data () {
    return {
      name: 'HistoryForm',
      team: null,
      events: {
        page: 0,
        size: 5,
        list: []
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
@import '../css/index.css';
@import '../css/zdialog.css';
@import '../css/layer.css';
.border_radius{
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    border-radius:10px;
    width: 94%;
    height: 96%;
    margin:3% 3%;
    background: #ffffff;
}
.border_radius>h2{
    padding: 20px;
    line-height: 26px;
    font-size: 16px;
}
.border_radius>h2>span{
    width: 3px;
    height: 25px;
    background: #e7711d;
    display: block;
    float: left;
    margin-right: 10px;
}
.cont_box{
    margin: 5%;
    width: 90%;
}
.table {
    width: 100%;
    border-left: 1px solid #ddd;
    display: block;
}
thead{
    display: block;
    width: 100%;
}
tbody{
    display: block;
    width: 100%;
}
.table th {
    background-color: #efefef;
    line-height: 23px;
    font-weight: 600;
    white-space: nowrap;
    position: relative;
}
.table th, .table td {
    min-width: 45px;
    max-width: 500px;
    padding: 10px 8px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-left: 0;
    text-align: left;

}
.tip_btn_add{
    background: #337ab7;
    border: 1px solid #337ab7;
    float: right;
    color: #ffffff;
    padding: 5px 10px;
}
.table td>img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>
