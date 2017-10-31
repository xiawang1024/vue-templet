<template>
    <div class="three">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="body">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="section section-1">
                <div class="text">
                    新闻广播目前采用中波657、调频95.4、调频102.3三频发射
                </div>
                <div class="img-wrap">
                    <div class="border"></div>
                    <img src="http://www.hndt.com/fm/954/201710/23/1912900/res/dgr267l3.jpg?1508724845337" alt="" class="img">
                </div>
            </div>
            
            <div class="section section-2">                
                <div class="img-wrap">
                    <div class="border"></div>
                    <img src="http://www.hndt.com/fm/954/201710/23/1912900/res/dgr267l3.jpg?1508724845337" alt="" class="img">
                </div>
                <div class="text">
                    新闻广播目前采用中波657、调频95.4、调频102.3三频发射
                </div>
            </div>
            
            <div class="section section-3">
                <div class="text">
                    新闻广播目前采用中波657、调频95.4、调频102.3三频发射
                </div>
                <div class="img-wrap">
                    <div class="border"></div>
                    <img src="http://www.hndt.com/fm/954/201710/23/1912900/res/dgr267l3.jpg?1508724845337" alt="" class="img">
                </div>
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
                .img
                    position relative
                    display block
                    width 200px
                    height 200px
                    border-radius 50%
                    border 3px solid #f4df99
                    box-sizing border-box
</style>
