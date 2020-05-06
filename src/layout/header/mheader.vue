<template>
<div class="app-module-car app-module-car-colorfff app-module-car-header">
  <div class="app-module-car">
    <div class="app-module head">
      <el-row :gutter="0">
        <el-col :span="12">
          <img @click="$router.push('/')" src="../../assets/img/mastohost_logo.png" alt="">
        </el-col>
        <el-col :span="12" align="right">
          <div class="mheadbtnlist hidden-xs-only">
            <a href="javascript:;" @click="$router.push('/')">{{$t("mheaderTopbtnlist1")}}</a>
            <a href="javascript:;" @click="$router.push({path: 'pricing'})">{{$t("mheaderTopbtnlist2")}}</a>
            <a href="javascript:;">{{$t("mheaderTopbtnlist3")}}</a>
            <a href="javascript:;">{{$t("mheaderTopbtnlist4")}}</a>
          </div>
          <font-icon @handleIconClick="handleIconClick" :style="{marginTop: '22.5px', fontSize: '28px'}" :IconClass="'fa fa-bars hidden-sm-and-up'"></font-icon>
        </el-col>
      </el-row>
    </div>
  </div>
  <div :style="{height: carFoldHeight}" class="app-module-car app-module-car-fold hidden-sm-and-up">
    <div>
      <el-input
        placeholder="请输入内容">
      </el-input>
    </div>
    <div>
      <el-input
        placeholder="请输入内容">
      </el-input>
    </div>
    <div>
      <el-input
        placeholder="请输入内容">
      </el-input>
    </div>
    <div>
      <el-input
        placeholder="请输入内容">
      </el-input>
    </div>
  </div>
</div>
</template>

<script>
import './mheader.less'
export default {
  name: 'mheader',
  data () {
    return {
      carFoldHeight: 0,
      carFoldDisplay: 'true'
    }
  },
  methods: {
    handleIconClick (val) {
      if (val === true) {
        this.carFoldHeight = 'auto'
      } else {
        this.carFoldHeight = 0
      }
    }
  }
}
</script>

<style scoped>

</style>
