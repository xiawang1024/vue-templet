<template>
    <div class="end-list">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="list-wrap ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
            <div class="list" v-for="(item,index) in imgUrls" v-bind:key="index" @click="openLink(item.link_url)">
                <img :src="item.icon_url" alt="" class="img">
            </div>
        </div>
        <div class="qr-wrap">
			<img class="qr-app ani" src="../imgs/qr-app.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="0s" />
			<div class="logo-app ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
		</div>
    </div>
</template>

<script>
// const 
export default {
    name:'end-list',
    data () {
        return {
            imgUrls:[]
        }
    },
    mounted () {
        for(let i = 0; i < 12; i++) {
            let index = i + 1
            let item = require('./link-' + index + '.png')
            this.imgUrls.push({
                icon_url:item,
                link_url:'http://www.hndt.com'
            })
        }
        this.$nextTick(() => {})
    },
    methods:{
        openLink(url) {
            window.location.href = url
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.end-list
    fullpage()
    .logo
        position absolute
        top 30px
        left 57px
        width 202px
        height 45px
        bgimage('../imgs/logo.png',3.15rem)
    .list-wrap
        position absolute
        top 160px
        left 78px
        width 484px
        display flex
        flex-wrap wrap
        justify-content space-between
        .list
            width 204px
            height 64px
            margin-bottom 30px
            .img
                display block
                width 100%
                height 100%
    .qr-wrap
        position absolute
        bottom 80px 
        left 235px
        width 170px
        height 240px
        .qr-app
            position absolute
            top 0
            left 0
            width 170px
            height 170px
            // bgimage('../imgs/qr-app.png',2.656rem)
        .logo-app
            position absolute
            bottom 0
            left 0
            width 170px
            height 40px
            bgimage('../imgs/logo-app.png',2.656rem)
</style>

