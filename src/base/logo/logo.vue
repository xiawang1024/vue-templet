<template>
    <div class="logo-wrap">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div v-show="isShowChannelLogo" class="channel_logo ani" :style="logoStyleObj" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    </div>
</template>

<script>
import { CHANNEL_LOGO } from 'config/index'
export default {
    name:'logo-wrap',
    props : {
        isShowChannelLogo:{
            type:Boolean,
            default:true
        }
    },
    data () {
        return {
            logoStyleObj:{
                background:`url(${CHANNEL_LOGO}) left center no-repeat`,
                backgroundSize:'contain'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixin.styl"
.logo
    position absolute
    top 30px
    left 57px
    width 202px
    height 45px
    bgimage('./logo.png',3.15rem)
.channel_logo
    position absolute
    top 25px
    left 280px
    width 260px
    height 55px
</style>
