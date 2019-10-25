<template>
  <div id="BirthEmail2">
    <div class="pic"></div>
    <!-- <img src="../../assets/images/wis11.png"> -->
    <div class="wishesText">
      <div>
        <span>亲爱的</span>
        <span>XX(SCXXXX):</span>
        <div>
          <span>&nbsp;&nbsp;今天是X月X日，是您的生日，也是您为中原服务XXX天的日子，祝您生日快乐、身体健康、家庭和睦！并衷心感谢您为公司发展做出的积极贡献！</span>
        </div>
        <div  class="zy">
          <span>中原地产</span>
        </div>
      </div>
    </div>
    <div class="more">—— 更多祝福 ——</div>
    <!-- <div class="email"></div> -->
    <!-- <img src="../../assets/images/wis14.png" alt=""> -->
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#BirthEmail2{
  font-size:18px;
	text-align:center;
  padding:10px;
  background-color:#549cfb;
}
#BirthEmail2 .wishesText{
	text-align: left;
  height:260px;
  line-height: 38px;
  background-color: #fff;
  padding:10px;
  margin:-2px 22px 10px 22px;
}
#BirthEmail2  .more{
  width:100%;;height:150px;
	border-radius: 50%;
  color:#fff;
  margin:0 auto;
  /* background: url("../../assets/images/wis14.png") no-repeat; */
  background-size: cover;
}

#BirthEmail2  .pic{
  background:url("../../assets/images/wis11.png") repeat;
  background-size: cover;
  width:100%;height:220px;
}
.zy{
  text-align: right;
}
/* #BirthEmail2  .email{
  background: url("../../assets/images/wis14.png") no-repeat;
  background-size: contain;
  width:100%;height:200px;
  z-index:5;
} */
</style>