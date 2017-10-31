<template>
    <div class="three">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="body">
            <div class="section-1">
                <div class="text"></div>
                <img src="" alt="" class="img">
            </div>
            <div class="section-2">
                <div class="text"></div>
                <img src="" alt="" class="img">
            </div>
            <div class="section-3">
                <div class="text"></div>
                <img src="" alt="" class="img">
            </div>
        </div>
    </div>
</template>

<script>
import WxTitle from 'base/title/title.vue'

const titleUrl = require('./active.png') 

export default {
    name:'three',
    components:{
        WxTitle
    },
    data () {
        return {
            titleUrl:titleUrl
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.three
    fullpage()
    .logo
        position absolute
        top 30px
        left 57px
        width 202px
        height 45px
        bgimage('../imgs/logo.png',3.15rem)
    .hd
        position absolute
        top 130px
        width 100%
        height 50px
    .body
        position absolute
        top 240px
        left 40px
        width 560px
        height 645px

</style>
