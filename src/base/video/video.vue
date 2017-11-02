<template>
    <div class="video-wrap">
        <video :src="videoUrl" id="wx-video" controls></video>
    </div>
</template>

<script>
import Bus from 'event/index'
export default {
    name:'video-wrap',
    props : {
        videoUrl:{
            type:String,
            default:''
        }
    },
    mounted () {
        setTimeout(() => {
            this.video = document.getElementById('wx-video');
            this.audio = document.getElementById('wx-audio');
            this.video.addEventListener('play',() => {
                this.audio.pause()
                Bus.$emit('isPause',false)
            })
        },20)
        
    }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.video-wrap
    width 100%
    #wx-video
        width 100%
</style>
