<template>
  <div id="BirthWishes">
    <img src="../../assets/images/per20.png" alt="">
    <div class="happy">
      <div>HAPPY BIRTHDAY</div>
      <div>生日快乐</div>
    </div>
    <div class="text">
      <div class="hi">Hi,XX:</div>
      <div>快乐是属于你的，美丽是属于你的。幸福是属于你的，健康是属于你的。今天这个世界都是属于你的。祝你生日快乐！</div>
    </div>
    <div class="yuy"></div>			
    <!-- <img src="../../assets/images/yuy.png"> -->
    <div class="bottom">
      <div>XXXXXX组</div>
      <div>2019-9-9</div>
    </div>
    <mt-button class="moreWishes">更多祝福</mt-button>
    <mt-button  type="primary">回复Ta</mt-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthWishes{
  font-size:20px;
	text-align:center;
  padding:10px;
}
#BirthWishes .happy{
  /* margin-top:30%; */
  color:#549cfb;
}
#BirthWishes .text{
	text-align:left;
  width:100%;height:200px;
  line-height: 30px;
}
#BirthWishes .hi{
  margin-bottom:20px;
  
}
#BirthWishes button{
	width:40%;height:60px;
  border-radius:5px;
  margin:10px;
}
#BirthWishes .bottom{
	text-align:right;
	padding-right:40px;
}
.moreWishes{
  border:1px solid #549cfb;
  color:#549cfb;
}
.yuy{
  background: url("../../assets/images/yuy.png") no-repeat;
  width:100%;height:100px;
  background-size: contain;
}
</style>