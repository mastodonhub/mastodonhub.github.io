<template>
  <div class="howBox">
    <div class="app-module-car app-module-car-colorzi">
      <div class="app-module center">
        <h1>
          {{$t("StartingaMastodon")}}
        </h1>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2 class="img">
              <img src="@/assets/img/starmas1.png" alt="">
            </h2>
          </el-col>
          <el-col :span="12" :xs="24" class="pd">
            <div>
              <h2 class="tit">
                {{$t("StartingaMastodonStep1")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("StartingaMastodonStep1text1")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("StartingaMastodonStep2")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("StartingaMastodonStep1text2")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("StartingaMastodonStep3")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("StartingaMastodonStep1text3")}}
                </h2>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorzi app-module-car-colorzifffff">
      <div class="app-module center">
        <h1>
          {{$t("MastodonreceivedMoney")}}
        </h1>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24" class="pd">
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedMoneyMaile1")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("MastodonreceivedMoneyMaile1text1")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedMoneyMaile2")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("MastodonreceivedMoneyMaile1text2")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedMoneyMaile3")}}
              </h2>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2 class="img">
              <img src="@/assets/img/starmas2.png" alt="">
            </h2>
          </el-col>
        </el-row>
        <div :style="{fontSize: '14px', color: 'hsl(0,1%,69%)'}">
          {{$t("MastodonreceivedMoneyMaileSm")}}
        </div>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorzi app-module-car-colorzic">
      <div class="app-module center">
        <h1>
          {{$t("MastodonreceivedService")}}
        </h1>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2 class="img">
              <img src="@/assets/img/starmas3.png" alt="">
            </h2>
          </el-col>
          <el-col :span="12" :xs="24" class="pd">
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedService1")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("MastodonreceivedServiceText1")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedService2")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("MastodonreceivedServiceText2")}}
                </h2>
              </div>
            </div>
            <div>
              <h2 class="tit">
                {{$t("MastodonreceivedService3")}}
              </h2>
              <div class="text">
                <h2>
                  {{$t("MastodonreceivedServiceText3")}}
                </h2>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import './index.less'
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
