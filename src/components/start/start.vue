<template>
    <div class="start">
        <div class="star-1 ani" swiper-animate-effect="wxStar" swiper-animate-duration="1s" swiper-animate-delay="1.25s"></div>
        <div class="star-2 ani" swiper-animate-effect="wxStar" swiper-animate-duration="0.75s" swiper-animate-delay="1.25s"></div>
        <div class="star-3 ani" swiper-animate-effect="wxStar" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s"></div>
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="cube-left ani" swiper-animate-effect="wxBangF" swiper-animate-duration="0.35s" swiper-animate-delay="0.9s"></div>
        <div class="cube-right ani" swiper-animate-effect="wxBang" swiper-animate-duration="0.35s" swiper-animate-delay="0.9s"></div>
        <div class="line-left ani" swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="line-right ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="title-wrap">
            <div class="border-1 ani" swiper-animate-effect="wxRotate" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
            <div class="border-2 ani" swiper-animate-effect="wxRotatex" swiper-animate-duration="0.75s" swiper-animate-delay="0.2s"></div>
            <div class="radio-title ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.6s">2018年河南人民广播电台</div>
            <div class="title-text ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.9s"></div>
            <div class="channel-title ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.75s" swiper-animate-delay="1.2s">[&nbsp;&nbsp;新闻广播&nbsp;&nbsp;]</div>
        </div>
        <div class="time-address">
            <div class="titlec ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s"></div>
            <div class="time ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'start'
}
</script>


<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.start
    fullpage()
    .star-1
        position absolute
        top 200px
        left 0
        width 154px
        height 80px
        bgimage('./star.png',2.406rem)
    .star-2
        position absolute
        bottom 500px
        left 0
        width 154px
        height 80px
        bgimage('./star.png',2.406rem)
    .star-3
        position absolute
        bottom 120px
        left 0
        width 154px
        height 80px
        bgimage('./star.png',2.406rem)
    .logo
        position absolute
        top 30px
        left 57px
        width 202px
        height 45px
        bgimage('../imgs/logo.png',3.15rem)
    .cube-left
        position absolute
        bottom 285px
        left 40px
        width 77px
        height 166px
        bgimage('../imgs/cube-left.png',1.2rem)
    .cube-right
        position absolute
        top 180px
        right 0
        width 147px
        height 214px
        bgimage('../imgs/cube-right.png',2.3rem)
    .line-left
        position absolute
        bottom 60px
        left 0
        width 91px
        height 224px
        bgimage('../imgs/line-left.png',1.42rem)
    .line-right
        position absolute
        top 0px
        right 0
        width 77px
        height 180px
        bgimage('../imgs/line-right.png',1.203rem)
    .title-wrap
        position absolute
        top 160px
        left 50px
        width 540px
        height 526px
        .border-1
            position absolute
            bottom 0
            left 0
            width 100%
            height 100%
            background url('../imgs/border-1.png') center bottom no-repeat
            background-size 8.125rem auto
        .border-2
            position absolute
            bottom 0
            left 0
            width 100%
            height 100%
            background url('../imgs/border-2.png') center top no-repeat
            background-size 8.406rem auto
        .radio-title
            position absolute
            top 134px
            left 0
            width 100%
            text-align center
            font-size 38px
            color #ffffff
            letter-spacing 0.14em
        .title-text
            position absolute
            top 199px
            left 0
            width 100%
            height 134px
            bgimage('../imgs/title.png',6.58rem)
        .channel-title
            position absolute
            top 346px
            left 0
            width 100%
            text-align center
            font-size 40px
            color #ffffff
            letter-spacing 0.14em
    .time-address
        position absolute
        bottom 160px
        left 199px
        width 242px
        height 92px
        .titlec
            position absolute
            top 0
            left 0
            width 100%
            height 32px
            bgimage('../imgs/titlec.png',3.67rem)
        .time
            position absolute
            bottom 0
            left 0
            width 100%
            height 38px
            bgimage('../imgs/time-address.png',3.78rem)
</style>

