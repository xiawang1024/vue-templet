<template>
    <div class="title-wrap">
        <div class="title-left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.65s"></div>
        <div class="title-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.65s"></div>
        <div class="title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
            <img :src="titleUrl" alt="" class="img">
        </div>
    </div>
</template>

<script>
export default {
    name:'title-wrap',
    props : {
        titleUrl:{
            type:String,
            default:''
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.title-wrap
    position relative
    width 100%
    height 50px
    .title-left
        position absolute
        top 6px
        left 180px
        width 136px
        height 13px
        bgimage('./title-left.png',2.125rem)
    .title-right
        position absolute
        bottom 6px
        right 180px
        width 215px
        height 15px
        bgimage('./title-right.png',3.359rem)
    .title
        position relative
        text-align center
        font-size 0
        .img
            width auto
            height 50px
</style>

