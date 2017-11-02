<template>
    <div class="two">
        <wx-logo></wx-logo>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="video-box ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
            <wx-video :videoUrl="videoUrl"></wx-video>
        </div>
        <div class="body">
            <p class="section ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">
                {{text_1}}
            </p>
        </div>
    </div>
</template>

<script>
import wxLogo from 'base/logo/logo'
import WxTitle from 'base/title/title.vue'
import wxVideo from 'base/video/video.vue'

import { CHANNEL_VIDEO, CHANNEL_VIDEO_TEXT_1 } from 'config/index'

const titleUrl = require('./channel-title.png') 

export default {
    name:'two',
    components :{ 
        wxLogo,
        WxTitle,
        wxVideo
    },
    data () {
        return {
            titleUrl:titleUrl,
            videoUrl:CHANNEL_VIDEO,
            text_1:CHANNEL_VIDEO_TEXT_1
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.two
    fullpage()
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
    .body
        position absolute
        top 610px
        left 10%
        width 80%
        font-size 28px
        color #ffffff
        line-height 2
        .section
            text-indent 2em
</style>
