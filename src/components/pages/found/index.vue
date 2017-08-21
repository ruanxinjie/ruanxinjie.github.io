<template>
	<div class="box">
		<div class="classification">
			<span @click="page_classification();classification_click()"><img  src="/static/found_img/dog_p.png"/></span>
			<span @click="page_brand();classification_click()"><img src="/static/found_img/cat_n.png"/></span>
		</div>
		<router-view></router-view>
		<ul>
			<router-link to="item.url" v-for="(item,index) in dogType">{{item.name}}</router-link>
		</ul>
	</div>
</template>

<script>
	import headerTop from '@/components/common/header'
	export default{
		name:'found',
		data(){
			return{
				dogType:[],
				active:"dog"
			}
		},
		components:{
			headerTop
		},
		mounted(){
			this.$axios.get("/static/json/classification.json").then(
				(res) => {
					this.dogType=res.data;
				},
				(err) => {
					console.log(err)
				}
			)
		},
		methods:{
			page_classification(){
				
			},
			page_brand(){
				
			},
			classification_click(){
				let span=document.getElementsByClassName("classification")[0].getElementsByTagName("span");
				for(let i=0;i<span.length;i++){
					let off=span[i].firstChild.src.lastIndexOf('.')
					let arr=span[i].firstChild.src.split('');
					arr[off-1]="n";
					span[i].firstChild.src=arr.join('');
				}
				let Othis=event.currentTarget
				let off=Othis.firstChild.src.lastIndexOf('.')
				let this_arr=Othis.firstChild.src.split('');
				this_arr[off-1]="p";
				Othis.firstChild.src=this_arr.join('');
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.box{
		position: absolute;
		top: 1.44rem;
		left: 0;
		width: 100%;
	}
	.classification{
		border-bottom: 5px solid #fa0e8a;
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		justify-content: space-around;
		height: 1.44rem;
		span{
			text-align: center;
			img{
				display: block;
				width: 2.35rem;
				height:1.06rem;
				margin-top: 0.24rem;
			}
		}
	}
</style>