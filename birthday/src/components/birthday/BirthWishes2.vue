<template>
  <div id="BirthWishes2">
    <img src="../../assets/images/wis5.png">
    <div class="moddle">
      <div class="text">
        <div class="hi">Hi,XX:</div>
        <div>快乐是属于你的，美丽是属于你的。幸福是属于你的，健康是属于你的。今天这个世界都是属于你的。祝你生日快乐！</div>
      </div>			
      <img src="../../assets/images/yuy.png">
      <div class="cake">
        <img src="../../assets/images/wis3.png">
        <span>黄金西式蛋糕</span>
      </div>
      <div class="bottom">
        <div>XXXXXX组</div>
        <div>2019-9-9</div>
      </div>	
    </div>
    <button>更多祝福</button>
    <button>回复Ta</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthWishes2{
	font-size:36px;
	text-align:center;
	padding:30px;
}
#BirthWishes2 .moddle{
	border:15px solid pink;
	padding:40px;
}
#BirthWishes2 .text{
	text-align:left;
	padding:80px;
	margin-top:-30px;
}
#BirthWishes2 .hi{
	margin-bottom:20px;
}
#BirthWishes2 .cake{
	text-align:left;
	margin-left:80px;
	position:relative;
}
#BirthWishes2 span{
	position:absolute;
	left:18%;top:15%;
}

#BirthWishes2 button{
	width:40%;height:80px;
	border-radius: 10px;
	margin-top:80px;
	font-size:36px;
}
#BirthWishes2 .bottom{
	text-align:right;
	padding-right:80px;
}

</style>