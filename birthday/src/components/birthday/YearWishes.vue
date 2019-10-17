<template>
  <div id="YearWishes">
    <img src="../../assets/images/wis.png">
      <div class="text">
        <div class="hi">Hi,XX:</div>
        <div>过去一年和你共事的过程很愉快，也感谢你的帮助。愿你像一艘稳稳行驶的三角帆船，勇敢探索前方更广阔的海洋！</div>
      </div>	
      <div class="yuy">	
        <img src="../../assets/images/yuy.png">
      </div>
      <div class="bottom">
        <div>XXXXXX组</div>
        <div>2019-9-9</div>
      </div>
      <div class="wishes">
        <img src="../../assets/images/wis1.png">
        <span>福袋</span>
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

/*公共样式*/
#YearWishes{
	font-size:36px;
	text-align:center;
	padding:30px;
}
#YearWishes .moddle{
	border:15px solid pink;
	padding:40px;
}
#YearWishes .text{
	text-align:left;
	padding:80px;
}
#YearWishes .hi{
	margin-bottom:20px;
}
#YearWishes button{
	width:40%;height:80px;
	border-radius: 10px;
	margin-top:80px;
	font-size:36px;
}

#YearWishes .bottom{
	text-align:right;
	padding-right:80px;
}

/*私有样式*/
#YearWishes .wishes{
	position:relative;
}
#YearWishes .wishes span{
	position:absolute;
	left:25%;top:40%;
}
#YearWishes .wishes img{
	position:absolute;
	left:80px;top:0px;
}

</style>