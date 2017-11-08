<template>
    <div class="one">
        <wx-logo></wx-logo>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="player-wrap ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
            <player :audioUrl="audioUrl"></player>
        </div>
        <div class="body">
            <p class="section ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                {{text_1}}
            </p>
            <!-- <p class="section ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                {{text_2}}
            </p> -->
        </div>
    </div>
</template>

<script>
import wxLogo from 'base/logo/logo'

import WxTitle from 'base/title/title.vue'
import Player from 'base/player/player.vue'

import { CHANNEL_AUDIO, CHANNEL_AUDIO_TEXT_1, CHANNEL_AUDIO_TEXT_2 } from "config/index"

const titleUrl = require('./about.png')

export default {
    name:'one',
    components:{
        wxLogo,
        WxTitle,
        Player
    },
    data () {
        return {
            titleUrl:titleUrl,
            audioUrl:CHANNEL_AUDIO,
            text_1:CHANNEL_AUDIO_TEXT_1,
            text_2:CHANNEL_AUDIO_TEXT_2
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.one
    fullpage()
    .hd
        position absolute
        top 130px
        width 100%
        height 50px
    .player-wrap
        position absolute
        top 220px
        left 80px
        width 480px
    .body
        position absolute
        top 260px
        left 10%
        width 80%
        // height 600px
        overflow auto
        font-size 28px
        color #ffffff
        line-height 2
        .section
            text-indent 2em
            margin-bottom 16px
</style>


