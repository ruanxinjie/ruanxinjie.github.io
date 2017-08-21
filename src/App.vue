<template>
  <div id="app">
    <header-top></header-top>
    <router-view></router-view>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
	import headerTop from '@/components/common/header'
	import footerBottom from '@/components/common/footer'
export default {
  data(){
  	return{}
  },
  components:{
  	footerBottom,
  	headerTop
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
</style>
