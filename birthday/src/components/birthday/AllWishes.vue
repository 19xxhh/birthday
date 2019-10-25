<template>
  <div id="AllWishes" >
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
        <!-- <img class="yuy" src="../../assets/images/yuy.png"> -->
        <div class="cake">
          <img src="../../assets/images/wis3.png">
          <span>发财鲤</span>
        </div>
      </div>
      <div>
        <img class="more" src="../../assets/images/new.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#AllWishes{
  font-size:18px;
	text-align:center;
	padding:10px;
}
#AllWishes .wisheswords{
  width:100%;
}
#AllWishes  .wishes{
	display:flex;
	text-align: left;
}

#AllWishes .wishes .wishesText{
	color:#ccc;
	font-size:18px;
}

#AllWishes .cake{
	position:relative;
}
#AllWishes .cake span{
	position:absolute;
	left:35%;top:40%;
}
#AllWishes .wishes .more{
	margin-top:30px;
}
#AllWishes .yuy{
  width:100%;height:60px;
  background:url("../../assets/images/yuy.png") no-repeat;
  background-size: contain;
}
</style>