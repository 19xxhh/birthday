<template>
  <div id="Member">
    <div class="wishes">
      <div>
        <img src="../../assets/images/head.png">
      </div>
      <div class="wisheswords">
        <div>
          <span>XXX</span>
          <span  class="wishesText">XXXXX组</span>
        </div>
        <div class="wishesText">
          <span>XX月XX日</span>
        </div>
      </div>
      <div  class="wishesText more">
        <img src="../../assets/images/icon.png">
        <span>今天</span>
        <div>送祝福 &gt;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #Member{
	font-size:36px;
	text-align:center;
	padding:30px;
}
#Member  .wishes{
	display:flex;
	text-align: left;
  border-bottom: 1px solid #ccc;
}

#Member .wishes .wishesText{
	color:#ccc;
	font-size:26px;
}
#Member .wisheswords{
	margin-top:50px;
	padding-right:100px;
}
#Member .cake{
	position:relative;
}
#Member .cake span{
	position:absolute;
	left:18%;top:20%;
}
#Member .wishes .more{
	margin-top:50px;
	justify-content: flex-end;
}
</style>