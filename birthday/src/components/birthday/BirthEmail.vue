<template>
  <div id="BirthEmail">
    <img src="../../assets/images/wis5.png">
    <div class="wishesText">
      <div>
        <span>亲爱的</span>
        <span>XX(SCXXXX):</span>
        <div>
          <span>今天是X月X日，是您的生日，也是您为中原服务XXX天的日子，祝您生日快乐、身体健康、家庭和睦！并衷心感谢您为公司发展做出的积极贡献！</span>
        </div>
        <div>中原地产</div>
      </div>
    </div>
    <div class="more">更多祝福</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthEmail{
	font-size:36px;
	text-align:center;
	padding:30px;
}
#BirthEmail .wishesText{
	text-align: left;
}
#BirthEmail  .more{
	width:100px;height:100px;
	border-radius: 50%;
	background-color:#e7e7e7;
}
</style>