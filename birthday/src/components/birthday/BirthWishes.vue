<template>
  <div id="BirthWishes">
    <div class="happy">
      <div>HAPPY BIRTHDAY</div>
      <div>生日快乐</div>
    </div>
    <div class="text">
      <div class="hi">Hi,XX:</div>
      <div>快乐是属于你的，美丽是属于你的。幸福是属于你的，健康是属于你的。今天这个世界都是属于你的。祝你生日快乐！</div>
    </div>			
    <img src="../../assets/images/yuy.png">
    <div class="bottom">
      <div>XXXXXX组</div>
      <div>2019-9-9</div>
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
#BirthWishes{
	font-size:36px;
	text-align:center;
	padding:30px;
}
#BirthWishes .happy{
	margin-top:30%;
}
#BirthWishes .text{
	text-align:left;
	padding:80px;
}
#BirthWishes .hi{
	margin-bottom:20px;
}
#BirthWishes button{
	width:40%;height:60px;
	border-radius: 10px;
}
#BirthWishes .bottom{
	text-align:right;
	padding-right:80px;
}

</style>