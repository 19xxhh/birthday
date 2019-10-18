<template>
  <div id="BirthEmail2">
    <div class="pic"></div>
    <!-- <img src="../../assets/images/wis11.png"> -->
    <div class="wishesText">
      <div>
        <span>亲爱的</span>
        <span>XX(SCXXXX):</span>
        <div>
          <span>今天是X月X日，是您的生日，也是您为中原服务XXX天的日子，祝您生日快乐、身体健康、家庭和睦！并衷心感谢您为公司发展做出的积极贡献！</span>
        </div>
        <div  class="zy">
          <span>中原地产</span>
        </div>
      </div>
    </div>
    <div class="more">
      <div>更多</div>
      <div>祝福</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthEmail2{
  font-size:20px;
	text-align:center;
  padding:10px;
  color:#549cfb;
}
#BirthEmail2 .wishesText{
	text-align: left;
  height:260px;
  line-height: 38px;
}
#BirthEmail2  .more{
  /* width:100px;height:100px; */
  height:100px;width:100px;
	border-radius: 50%;
  background-color:#549cfb;
  color:#fff;
  margin:0 auto;
}
#BirthEmail2  .more :nth-child(1){
  padding-top:25px;
}
#BirthEmail2  .pic{
  background:url("../../assets/images/wis11.png") repeat;
  background-size: cover;
  width:100%;height:250px;
}
.zy{
  text-align: right;
}
</style>