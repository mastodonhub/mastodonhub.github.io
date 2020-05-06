<template>
  <div>
    <div class="app-module-car app-module-car-colorfff ft">
      <div class="app-module center">
        <el-row :gutter="0">
          <el-col :span="6" :xs="24">
            <div class="text">
              <h2 class="t-lf">
                {{$t("ServiceinOpenBeta")}}
              </h2>
              <div class="t-lf ft-explain">
                {{$t("ServiceinOpenBetaText")}}
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="text">
              <h2 class="t-lf">
                {{$t("AbouttheService")}}
              </h2>
              <div class="t-lf ft-explain">
                <a href="javascript:;">{{$t("AbouttheServiceT1")}}</a>
                <a href="javascript:;">{{$t("AbouttheServiceT2")}}</a>
                <a href="javascript:;">{{$t("AbouttheServiceT3")}}</a>
                <a href="javascript:;">{{$t("AbouttheServiceT4")}}</a>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="text">
              <h2 class="t-lf">
                {{$t("ServiceBlog")}}
              </h2>
              <div class="t-lf ft-explain">
                <a href="javascript:;"> {{$t("ServiceBlogT1")}}</a>
                <a href="javascript:;"> {{$t("ServiceBlogT2")}}</a>
                <a href="javascript:;"> {{$t("ServiceBlogT3")}}</a>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="text">
              <h2 class="t-lf">
                {{$t("ConTacts")}}
              </h2>
              <div class="t-lf ft-explain noboder">
                Email:
                <a href="javascript:;">
                  info@masto.host
                </a>
                <br>
                Mastodon:
                <a href="javascript:;">
                  @mastohost@mastodon.social
                </a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mfooter'
}
</script>

<style scoped>

</style>
