<template>
    <div class="player">
        <audio :src="audioUrl" id="wx-audio"></audio>
        <div class="play-core">
            <div class="progress-wrap">
                <progress-bar @percentChange="onPercentChange" :percent="percent"></progress-bar>
            </div>
            <div class="play-btn-wrap" :class="isPause ? 'isPause' : '' " @click="playSwitch()">

            </div>
        </div>
    </div>
</template>

<script>
import Bus from 'event/index'
import ProgressBar from 'base/progressBar/progressBar.vue'
export default {
    name:'player',
    components:{
        ProgressBar
    },
    props : {
        audioUrl:{
            type:String,
            default:''
        }
    },
    data () {
        return {
            isPause:false,
            currentTime:0,
            duration:0
        }
    },
    computed:{
        percent() {
            return this.currentTime / this.duration;
        }
        
    },
    mounted () {
        this.audio = document.getElementById('wx-audio');
        this.video = document.getElementById('wx-video')
        this.audio.addEventListener('play',() => {
            this.video.pause()
        })
        this.watchPlayPercent()
        Bus.$on('isPause',(flag) => {
            this.isPause = flag
        })
    },
    methods:{
        playSwitch() {
            if(this.audio.paused){
                this.audio.play()
                this.isPause = true
            }else {
                this.audio.pause()
                this.isPause = false
            }
            this.$nextTick(() => {})
        },
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
.player
    width 100%
    #wx-audio
        display none 
    .play-core
        width 100%
        display flex
        align-items center
        justify-content space-between
        .progress-wrap
            flex 1
            margin-right 24px
        .play-btn-wrap
            width 74px
            height 74px
            bgimage('./play-icon.png',1.156rem)
            &.isPause
                bgimage('./pause-icon.png',1.156rem)
</style>
