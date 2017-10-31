<template>
    <div class="two">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="video-box">
            <wx-video :videoUrl="videoUrl"></wx-video>
        </div>
    </div>
</template>

<script>
import WxTitle from 'base/title/title.vue'
import wxVideo from 'base/video/video.vue'

const titleUrl = require('./channel-title.png') 
const videoUrl = 'http://www.hndt.com/fm/954/201708/07/1897761/res/1uTCq0ay.mp4'

export default {
    name:'two',
    components :{ 
        WxTitle,
        wxVideo
    },
    data () {
        return {
            titleUrl:titleUrl,
            videoUrl:videoUrl
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.two
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
    .video-box
        position absolute
        top 240px
        left 50px
        width 540px
        height 340px
</style>
