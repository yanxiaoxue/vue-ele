<template>
  <div>
    <header id="head_top">
      <section class="head_goback">
        <a href @click.prevent="$router.go(-1)">
          <img src="./../assets/img/leftjt.png" alt style="width:150%" />
        </a>
      </section>
      <section class="title_head ellipsis">
        <span class="title_text">选择地址</span>
      </section>
    </header>
    <div class="bodycc">
      <ul>
        <li @click="handleAddress">
          <div>
            <header class="header">
              <span>{{this.address.id}}</span>
              <span>{{this.address.phnum}}</span>
            </header>
            <div class="content">
              <span>{{this.address.lable}}</span>
              <span>{{this.address.address}}</span>

            </div>
          </div>
        </li>
      </ul>
    </div>

    <router-link to="/addaddress" class="add_icon_footer">
      <img src="./../assets/img/add.png" alt />
      <span>新增收货地址</span>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {},
      address:{}
    };
  },
  created() {
    this.getData();
  },
  methods:{
    getData(){
      this.user = this.$route.params.userId;
      console.log(this.user);
      this.address = JSON.parse(localStorage.getItem('addAddress'));

      console.log(this.address);
    },
    handleAddress(){
      this.$router.push({
        name: "confirmOrder",
        params: { newAddress: this.address }
      });
    }
  }
};
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
.add_icon_footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 204;
}
img {
  height: 24px;
  width: 24px;
}
a {
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

.add_icon_footer span {
  font-size: 0.7rem;
  color: #3190e8;
  margin-left: 0.3rem;
}
.bodycc {
  margin-top: 50px;
}
.bodycc li{
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid #eeeeee;
}
.bodycc li .header span:first-of-type{
  font-size: 0.8rem;
  font-weight: 700;
}
.bodycc li .header span:last-of-type{
  font-size: 0.7rem;
  color: #444;
}
.bodycc li .content span:first-of-type{
  font-size: 0.6rem;
  color: #fff;
  background: red;
  border-radius: 0.2rem;
}
.bodycc li .content span:last-of-type{
  font-size: 0.65rem;
  color: #cccccc;
  margin-left: 0.3rem;
}
</style>