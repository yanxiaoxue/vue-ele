<template>
  <div>
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="../../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>

      <section class="title_head ellipsis">
        <span class="title_text">用户等级说明</span>
      </section>
    </header>
    <section id="scroll_section" class="scroll_container">
      <section class="markdown">
        <p>
          <img src="../../assets/img/phote1.png" alt />
          1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。
          <br />
          <br />
          <br />
          <img src="../../assets/img/phote2.png" alt />
          2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。
          <br />
          <br />
          <br />
          <img src="../../assets/img/phote3.png" alt />
          3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。
          <br />
          <br />
          <br />
          <img src="../../assets/img/phote4.png" alt />
          4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~
          <br />
          <br />
          <br />
          <img src="../../assets/img/phote5.png" alt />
          5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。
          <br />
          <br />
          <br />
          <img src="../../assets/img/phote6.png" alt />
          6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。","phototutorialCaption":"教我拍大片
          <br />
          <br />
          <br />
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.head_goback {
  left: 0.4rem;
  width: 0.6rem;
  height: 1rem;
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  font-size: 0.65rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login_span {
  color: #fff;
}
.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title_text {
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
h2 {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.markdown {
  font-size: 0.65rem;
  padding: 0 0.7rem;
  color: #666;
  padding-bottom: 2rem;
}
</style>