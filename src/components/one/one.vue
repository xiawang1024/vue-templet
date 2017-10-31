<template>
    <div class="one">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="hd">
            <wx-title :titleUrl="titleUrl"></wx-title>
        </div>
        <div class="player-wrap ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
            <player :audioUrl="audioUrl"></player>
        </div>
        <div class="body">
            <p class="section ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                新闻广播全天候贯穿整点新闻和服务资讯，是资讯的高地，民意的窗口，担负着党委政府政令传达、舆论引导的重要政治任务。主要听众为20岁-50岁的政府官员、企业管理者、公务员、白领、高校学者、知识分子。他们关注新闻，他们热爱活动，丰富及时的资讯使他们在运筹帷幄中更添自信和从容，新闻广播是受众收听倾向最为强烈的广播媒体之一。
            </p>
            <p class="section ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.2s">
                新闻广播目前采用中波657、调频95.4、调频102.3三频发射，全省覆盖率达96%以上。其中中波300千瓦的发射率，让新闻广播傲视群雄，响彻中原！
            </p>
        </div>
    </div>
</template>

<script>
import WxTitle from 'base/title/title.vue'
import Player from 'base/player/player.vue'

const titleUrl = require('./about.png')

export default {
    name:'one',
    components:{
        WxTitle,
        Player
    },
    data () {
        return {
            titleUrl:titleUrl,
            audioUrl:'http://os5c06eeu.bkt.clouddn.com/%E5%86%8D%E8%A7%81%E4%BA%8C%E4%B8%81%E7%9B%AE.m4a'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.one
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
    .player-wrap
        position absolute
        top 220px
        left 80px
        width 480px
    .body
        position absolute
        top 330px
        left 7%
        width 86%
        // height 600px
        overflow auto
        font-size 24px
        color #ffffff
        line-height 2
        .section
            text-indent 2em
            margin-bottom 16px
</style>


