<template>
  <div>
    <el-button type="primary" size="mini" @click="handleI18Nclick" class="home-enzh">
      {{enAndzh}}
    </el-button>
    <div class="app-module a-banner">
      <div class="homobanner">
        <img src="@/assets/img/timg.png" alt="">
      </div>
      <h1 class="banner-text">
        {{$t("Mastodon")}}
      </h1>
    </div>
    <div class="app-module-car">
      <div class="app-module center">
        <el-row :gutter="30">
          <el-col :span="8" :xs="24">
            <h2>
              {{$t("Howitworks")}}
            </h2>
            <div class="text">
              {{$t("HowitworksCont")}}
              <div>
                <el-button size="medium" @click="$router.push({path: 'how'})">{{$t("HowitworksBtntext")}}</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              {{$t("pricing")}}
            </h2>
            <div class="text">
              {{$t("pricingCont")}}
              <div>
                <el-button size="medium" @click="$router.push({path: 'pricing'})">{{$t("pricingBtntext")}}</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              {{$t("Needhelp")}}
            </h2>
            <div class="text">
              {{$t("NeedhelpCont")}}
              <div>
                <el-button size="medium">{{$t("NeedhelpBtntext")}}</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorfff">
      <div class="app-module center">
        <h1>
          {{$t("WhatisMastodon")}}
        </h1>
        <el-row :gutter="0">
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/mastodon-4.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("MicrobloggingNetwork")}}
              </h2>
              <div>
                {{$t("MicrobloggingNetworkText")}}
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/Elephants.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("Decentralized")}}
              </h2>
              <div>
                {{$t("DecentralizedText")}}
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/birds.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("OpenSource")}}
              </h2>
              <div>
                {{$t("OpenSourceText")}}
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="color-btn clearfix">
          <el-button size="medium">
            <a target="_blank" href="https://joinmastodon.org/">{{$t("VisitMastodonWebsite")}}</a>
          </el-button>
        </div>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorfff">
      <div class="app-module center">
        <h1>
          {{$t("AndwhatisMastohost")}}
        </h1>
        <el-row :gutter="0">
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/hosted1.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("hosting")}}
              </h2>
              <div>
                {{$t("hostingText")}}
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/hosted2.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("installation")}}
              </h2>
              <div>
                {{$t("installationText")}}
              </div>
            </div>
          </el-col>
          <el-col :span="8" :xs="24">
            <h2>
              <img src="@/assets/img/hosted3.png" alt="">
            </h2>
            <div class="text">
              <h2>
                {{$t("maintenance")}}
              </h2>
              <div>
                {{$t("maintenanceText")}}
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="color-btn clearfix">
          <el-button size="medium" @click="$router.push({path: 'pricing'})">{{$t("ViewPlansandDetails")}}</el-button>
        </div>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorred">
      <div class="app-module center">
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2 class="tit app-module-car-colorredtit">
              {{$t("Contacts")}}
            </h2>
            <div class="text">
              <h2 style="padding-top:40px;">
                <a href="javascript:;">
                  info@masto.host
                </a>
              </h2>
              <div class="marginbt65">
                <a href="javascript:;">
                  info@mastodon.social
                </a>
              </div>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/contactimg.png" alt="">
            </h2>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorfff mg">
      <div class="app-module center">
        <h1 class="other-mg">
          <div class="tit">
            {{$t("othersOpinion")}}
          </div>
          <div class="cont">
            {{$t("othersOpinionText")}}
          </div>
        </h1>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser1.png" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @GinnyMcQueen@kitty.town
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion1")}}
              </div>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser2.png" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @GinnyMcQueen@kitty.town
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion2")}}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser3.jpg" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @ lilithsaintcrow @ raggedfeathers.com
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion3")}}
              </div>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser4.png" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @GinnyMcQueen@kitty.town
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion4")}}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser5.png" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @lilithsaintcrow@raggedfeathers.com
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion5")}}
              </div>
            </div>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2>
              <img src="@/assets/img/hosteduser6.jpg" alt="">
            </h2>
            <div class="text">
              <h2>
                <a href="javascript:;">
                  @GinnyMcQueen@kitty.town
                </a>
              </h2>
              <div>
                {{$t("userOthersOpinion6")}}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="app-module-car app-module-car-colorblue">
      <div class="app-module center">
        <el-row :gutter="0">
          <el-col :span="12" :xs="24">
            <h2 class="img">
              <img src="@/assets/img/boke1.png" alt="">
            </h2>
          </el-col>
          <el-col :span="12" :xs="24">
            <h2 class="tit">
              {{$t("Blog")}}
            </h2>
            <div class="text">
              <h2>
                {{$t("BlogText1")}}
                <br>
                {{$t("BlogText2")}}
                <br>
                {{$t("BlogText3")}}
              </h2>
              <div>
                <el-button size="medium">{{$t("BlogBtn")}}</el-button>
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
  name: 'home',
  data () {
    return {
      enAndzh: this.$cookies.get('zI18n') ? this.$cookies.get('zI18n') : 'EN'
    }
  },
  methods: {
    handleI18Nclick () {
      let zy = this.enAndzh === 'ZH' ? this.enAndzh = 'EN' : this.enAndzh = 'ZH'
      this.$i18.locale = zy
      this.$cookies.set('zI18n', zy)
    }
  },
  mounted () {
    if (!this.$cookies.get('zI18n')) {
      this.$cookies.set('zI18n', 'EN')
      this.$i18.locale = 'EN'
    }
    // document.title = this.$route.meta.title
  }
}
</script>

<style scoped>

</style>
