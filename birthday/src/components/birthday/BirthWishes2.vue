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
    <!-- <van-button round  type="info">回复更多</van-button>
    <van-button round  type="info">回复Ta</van-button> -->
  </div>
</template>
<script>
import { Button } from 'vant';
export default {
  
  
}
</script>
<style scoped>
#BirthWishes2{
  font-size:18px;
	text-align:center;
  padding:10px;
  background-color: #549cfb;
  background-size: cover;
}
#BirthWishes2 .moddle{
	border:5px solid pink;
  background-color: #fff;
  margin-top:-45px;
  margin-bottom:-30px;
}
#BirthWishes2 .text{
	text-align:left;
	padding:20px 30px 10px 30px;
}
#BirthWishes2 .hi{
	margin-bottom:20px;
}
#BirthWishes2 .cake{
	text-align:left;
	margin-left:30px;
	position:relative;
  height:70px;
}
#BirthWishes2 span{
	position:absolute;
	left:40%;top:40%;
}

#BirthWishes2 button{
	width:40%;height:80px;
	border-radius: 10px;
	margin:30px 10px 0 0;
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
  width:100%;height:50px;
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
#BirthWishes2 van-button{
  font-size:18px;
}
</style>