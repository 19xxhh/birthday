<template>
  <div id="Year">
    <div class="text">
      <div>
        <span>亲爱的</span>
        <span class="name">XX(SCXXXX):</span>
      </div>
      <div>
        <span>&nbsp;&nbsp;又到了这个特别的日子，这时候我们相逢X周年的纪念日。很高兴能与你为伴，为着同一个目标和梦想共同拼搏。感谢你的辛勤付出，新的一程愿我们继续风雨同舟。</span>
      </div>
      <div>中原地产</div>
    </div>
    <mt-button size="large" type='primary'>更多祝福</mt-button>
    <div class="pic">
      <img src="../../assets/images/butt-my1.png">
      <img src="../../assets/images/wis8.png">
      <img src="../../assets/images/wis7.png">
    </div>
  </div>
</template>
<script>
import {Button} from 'mint-ui'
export default {
  
}
</script>
<style scoped>
#Year{
  font-size:18px;
	text-align:center;
	padding:10px;
	background: url("../../assets/images/wis6.png") no-repeat;
  background-size:contain;
}
#Year .text{
	margin-top:50%;
	background-color: #fff;
	width:80%;height:300px;
	text-align: left;
	padding:80px 30px 60px 30px;
	color:#549cfb;
}
#Year  .name{
	font-size:26px;
}

#Year .pic{
  position:relative;
}
#Year  .pic :nth-child(1){
	position:absolute;
	left:8%;top:-500px;
}
#Year  .pic :nth-child(2){
	position:absolute;
	left:65%;top:-550px;
}
#Year  .pic :nth-child(3){
	position:absolute;
	left:10%;top:-150px;
}
</style>