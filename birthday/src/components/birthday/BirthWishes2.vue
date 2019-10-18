<template>
  <div id="BirthWishes2">
    <div class="top"></div>
    <!-- <img src="../../assets/images/wis5.png"> -->
    <div class="moddle">
      <div class="text">
        <div class="hi">Hi,XX:</div>
        <div>快乐是属于你的，美丽是属于你的。幸福是属于你的，健康是属于你的。今天这个世界都是属于你的。祝你生日快乐！</div>
      </div>
      <div class="yuy"></div>				
      <!-- <img src="../../assets/images/yuy.png"> -->
      <div class="cake">
        <img src="../../assets/images/wis3.png">
        <span>黄金西式蛋糕</span>
      </div>
      <div class="bottom">
        <div>XXXXXX组</div>
        <div>2019-9-9</div>
      </div>	
    </div>
    <mt-button  class="moreWishes">更多祝福</mt-button>
    <mt-button class="re">回复Ta</mt-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthWishes2{
  font-size:20px;
	text-align:center;
  padding:10px;
  background-color: #549cfb;
  background-size: cover;
}
#BirthWishes2 .moddle{
	border:15px solid pink;
  background-color: #fff;
	/* padding:40px; */
}
#BirthWishes2 .text{
	text-align:left;
	padding:80px 30px 30px 30px;
  margin-top:-30px;
}
#BirthWishes2 .hi{
	margin-bottom:20px;
}
#BirthWishes2 .cake{
	text-align:left;
	margin-left:30px;
	position:relative;
}
#BirthWishes2 span{
	position:absolute;
	left:40%;top:40%;
}

#BirthWishes2 button{
	width:40%;height:80px;
	border-radius: 10px;
	margin:80px 10px 0 0;
	font-size:24px;
}
#BirthWishes2 .bottom{
	text-align:right;
	padding-right:50px;
}
.top{
  width:100%;height:300px;
  background: url("../../assets/images/wis5.png") no-repeat;
  background-size: contain;
}
.yuy{
  background: url("../../assets/images/yuy.png") no-repeat;
  width:100%;height:100px;
  background-size: contain;
}
#BirthWishes2 .re{
  background-color: pink;
}
#BirthWishes2 .moreWishes{
  border:1px solid #fff;;
  background-color: #549cfb;
  color:#fff;
}
</style>