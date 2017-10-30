<template>
    <div class="one">
        <div class="logo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="progress-wrap">
            <progress-bar @percentChange="onPercentChange" :percent="percent"></progress-bar>
        </div>
    </div>
</template>

<script>
import ProgressBar from 'base/progressbar/progressbar.vue'
export default {
    name:'one',
    components:{
        ProgressBar
    },
    data () {
        return {
            currentTime:0,
            duration:0,
        }
    },
    computed:{
        percent() {
            return this.currentTime / this.duration;
        }
    },
    mounted () {
        this.audio = document.getElementById('audio');
        this.watchPlayPercent()
    },
    methods:{
        onPercentChange(percent) {
            this.audio.currentTime = this.duration * percent
        },
        //监听播放信息
        watchPlayPercent() {
            this.audio.addEventListener('timeupdate', (e) => {
                this.currentTime = e.target.currentTime;
                this.duration = e.target.duration;
            })  
        },
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
    .progress-wrap
        position absolute
        left 60px
        top 200px
        width 80%
</style>


