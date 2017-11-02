<template>
    <div class="three">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="body">
            <div class="line line-1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
            <div class="line line-2 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.15s"></div>
            <div class="section section-1">
                <div class="text ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="0.5s">
                    {{channelPics[0].text}}
                </div>
                <div class="img-wrap">
                    <div class="border ani" swiper-animate-effect="wxCircle" swiper-animate-duration="1.25s" swiper-animate-delay="2s"></div>
                    <img :src="channelPics[0].url" alt="" class="img ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                </div>
            </div>
            
            <div class="section section-2">                
                <div class="img-wrap">
                    <div class="border ani" swiper-animate-effect="wxCircle" swiper-animate-duration="1.25s" swiper-animate-delay="2s"></div>
                    <img :src="channelPics[1].url" alt="" class="img ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
                </div>
                <div class="text ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="1s">
                    {{channelPics[1].text}}
                </div>
            </div>
            
            <div class="section section-3">
                <div class="text ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="1.5s">
                    {{channelPics[2].text}}
                </div>
                <div class="img-wrap">
                    <div class="border ani" swiper-animate-effect="wxCircle" swiper-animate-duration="1.25s" swiper-animate-delay="2s"></div>
                    <img :src="channelPics[2].url" alt="" class="img ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="1.5s">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WxTitle from 'base/title/title.vue'

import { CHANNEL_PICS } from 'config/index'

const titleUrl = require('./active.png') 

export default {
    name:'three',
    components:{
        WxTitle
    },
    data () {
        return {
            titleUrl:titleUrl,
            channelPics:CHANNEL_PICS
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
        .line
            position absolute
            width 300px
            height 4px
            background #f4df99
            &.line-1
                top 200px
                right 100px
                transform rotate(-40deg)
            &.line-2
                top 400px
                left 100px
                transform rotate(40deg)
        .section
            display flex
            align-items center
            justify-content space-around
            position absolute
            width 100%
            height 228px
            &.section-1
                top 0
                left 0
            &.section-2
                top 230px
                left 0
            &.section-3
                top 425px
            .text   
                width 240px
                text-indent 2em
                color #ffffff
                font-size 24px
                line-height 1.6
            .img-wrap
                position relative
                width 200px
                height 200px
                .border 
                    position absolute
                    top -30px
                    left -30px
                    width 260px
                    height 260px
                    bgimage('./pic-border.png',4.06rem)     
                    opacity 0           
                .img
                    position relative
                    display block
                    width 200px
                    height 200px
                    border-radius 50%
                    border 3px solid #f4df99
                    box-sizing border-box
</style>
