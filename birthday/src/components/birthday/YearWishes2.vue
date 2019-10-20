<template>
  <div id="YearWishes2">
    <div class="top">
      <div   class="head">
        <img src="../../assets/images/head.png">
        <img class="crown" src="../../assets/images/crown.png">
      </div>
      <!-- <div>
        <img class="crown" src="../../assets/images/crown.png">
      </div> -->
      <div class="middle">
        <div>XXXXXX组</div>
        <div>2019-9-9</div>
        <div>——XXXX年XX月XX日入职——</div>
        <div>今天是Ta的入职纪念日，送上祝福！</div>
      </div>
    </div>
    <img src="../../assets/images/title.png">
    <div class="present">
      <img src="../../assets/images/per4.png">
      <img src="../../assets/images/per4.png">
      <img src="../../assets/images/per4.png">
      <img src="../../assets/images/per4.png">
    </div>
    <div class="inputText">
      <input class="textWord" type="text" placeholder="系统随机给一段祝福文字，自己可编辑" maxlength="140">
      <div class="change">
        <img src="../../assets/images/fic4.png">
        <span>换一条</span>
        <span class="count">17/140</span>
      </div>
    </div>
    <div class="no-yuy">
      <div class="yuy"></div>
      <!-- <img src="../../assets/images/yuy.png"> -->
      <img class="del" src="../../assets/images/del.png">
    </div>
    <img class="back1" src="../../assets/images/back1.png">
    <div class="bth">
      <button>发送祝福</button>
    </div>
    <img src="../../assets/images/title1.png">
    <div class="wishes">
      <div>
        <img src="../../assets/images/butt-my1.png">
      </div>
      <div class="wisheswords">
        <div>
          <span>XXX</span>
          <span  class="wishesText">XXXXX组</span>
        </div>
        <div  class="wishesText">
          <span>2019-9-9</span>
          <span>12:12</span>
        </div>
        <div>祝：事业蒸蒸日上</div>
        <div class="yuy"></div>
        <div class="cake">
          <img src="../../assets/images/wis3.png">
          <span>发财鲤</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

#YearWishes2{
	font-size:20px;
	text-align:center;
	padding:10px;
}
#YearWishes2 .top{
	background:url("../../assets/images/back.png") no-repeat;
	padding-top:30px;
	/* position:relative; */
  color:#fff;
}
.head{
  position:relative;
  /* width:100%;height:20px; */
  width:200px;
  margin:0 auto;
}
#YearWishes2 .top .crown{
	position:absolute;
	left:5%;
  z-index:1;
}
#YearWishes2 .middle{
	text-align:center;
	padding-bottom:80px;
}
#YearWishes2 .present{
	margin-top:30px;
}
#YearWishes2 .inputText{
	width:80%;height:200px;
	border:1px solid #ccc;
	text-align: left;
	margin-left:90px;
}
#YearWishes2  .change{
	font-size:14px;
	color:#ccc;
	margin:120px 0 0 10px;
}
#YearWishes2  .count{
	flex-direction: row-reverse;
}
#YearWishes2 .yuy{
  background:url("../../assets/images/yuy.png") no-repeat;
  background-size:contain;
}
#YearWishes2  .del{
	position:absolute;
	left:85%;top:-10px;
}
#YearWishes2  .back1{
	margin-top:20px;
}
#YearWishes2 .btn button{
	width:80%;height:60px;
}
#YearWishes2  .wishes{
	display:flex;
	text-align: left;
}

#YearWishes2 .wishes .wishesText{
	color:#ccc;
	font-size:14px;
}
#YearWishes2 .wisheswords{
	margin-top:20px;
}
#YearWishes2 .cake{
	position:relative;
}
#YearWishes2 .cake span{
	position:absolute;
	left:18%;top:20%;
}
</style>