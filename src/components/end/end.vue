<template>
    <div class="end">
        <div class="logo ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
		<div class="link-border ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.75s" @click="goToLink()">
			<div class="link-btn ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
		</div>
		<div class="qr-wrap">
			<img class="qr-app ani" src="../imgs/qr-app.png" swiper-animate-effect="bounceInUp" swiper-animate-duration="1s" swiper-animate-delay="0s" />
			<div class="logo-app ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
		</div>
    </div>
</template>

<script>
export default {
	name:'end',
	methods:{
		goToLink () {
			this.$emit('goToLink')
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin.styl'
.end
	fullpage()
	.logo
		position absolute
		top 100px
		left 156px
		width 327px
		height 205px
		bgimage('../imgs/logo-big.png',5.11rem)
	.link-border
		position absolute
		top 400px
		left 101px
		width 438px
		height 86px
		bgimage('../imgs/link-border.png',6.84rem)
		.link-btn
			position absolute
			top 15px
			left 53px
			width 331px
			height 53px
			bgimage('../imgs/link-btn.png',5.172rem)
	.qr-wrap
		position absolute
		bottom 200px 
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

