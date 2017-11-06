<template>
    <div class="end-list">
        <wx-logo :isShowChannelLogo="false"></wx-logo>
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
import wxLogo from 'base/logo/logo'

const CHANNEL_LINK = [{
        name:'新闻广播',
        link: 'http://hndt.com/h5/shows/01/index.html'
    },
    {
        name:'交通广播',
        link: 'http://hndt.com/h5/shows/02/index.html'
    },
    {
        name:'戏曲广播',
        link: 'http://hndt.com/h5/shows/03/index.html'
    },
    {
        name:'音乐广播',
        link: 'http://hndt.com/h5/shows/04/index.html'
    },
    {
        name:'影视广播',
        link: 'http://hndt.com/h5/shows/05/index.html'
    },
    {
        name:'农村广播',
        link: 'http://hndt.com/h5/shows/06/index.html'
    },
    {
        name:'私家车广播',
        link: 'http://hndt.com/h5/shows/07/index.html'
    },
    {
        name:'教育广播',
        link: 'http://hndt.com/h5/shows/08/index.html'
    },
    {
        name:'乐龄1056',
        link: 'http://hndt.com/h5/shows/09/index.html'
    },
    {
        name:'天籁之音',
        link: 'http://hndt.com/h5/shows/10/index.html'
    },
    {
        name:'网络广播',
        link: 'http://hndt.com/h5/shows/11/index.html'
    },
    {
        name:'河南广播云平台',
        link: 'http://hndt.com/h5/shows/12/index.html'
    }
]
export default {
    name:'end-list',
    components:{
        wxLogo
    },
    data () {
        return {
            imgUrls:[],
            linkList:CHANNEL_LINK
        }
    },
    mounted () {
        for(let i = 0; i < 12; i++) {
            let index = i + 1
            let item = require('./link-' + index + '.png')
            this.imgUrls.push({
                icon_url:item,
                link_url:this.linkList[i].link
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
    .list-wrap
        position absolute
        top 140px
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
        height 230px
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

