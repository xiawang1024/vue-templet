<template>
    <div class="video-wrap">
        <video :src="videoUrl" id="wx-video" controls></video>
    </div>
</template>

<script>
export default {
    name:'video-wrap',
    props : {
        videoUrl:{
            type:String,
            default:''
        }
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
