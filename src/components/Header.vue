<template>
  <header id="header">
    <div class="container">
      <div class="headerInner">
        <div class="headerTitle">
          <span>뷰.JS</span>
          <div class="headerTab">
            <router-link to="Main"><span>영화</span></router-link>
            <router-link to="tv"><span>TV</span></router-link>
          </div>
        </div>
        <div class="headerSearch">
          <input
            type="text"
            class="headerInput"
            placeholder="검색어를 입력하세요!"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import Main from '@/views/Main.vue';
// import Detail from '@/views/Detail.vue';
// import tv from '@/views/tv.vue';
//
</script>

<style lang="scss">
#header {
  width: 100%;
  height: 80px;
  background-color: #000;

  .headerInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2px;

    .headerTitle {
      display: flex;
      margin-top: 20px;
      margin-right: 10px;

      span {
        color: #fff;
        font-size: 22px;
        font-weight: 500;
        margin-right: 20px;
      }

      .headerTab {
        span {
          cursor: pointer;
        }
      }
    }

    .headerSearch {
      input {
        padding: 7px 15px;
        margin-top: 19px;
        width: 1000px;
        border-radius: 20px;
        border: none;
        line-height: 5px;
        background: rgb(49, 49, 49);
        color: #fff;
      }
    }
  }
}
</style>
