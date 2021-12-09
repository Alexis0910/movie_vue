<template>
  <footer id="footer">
    <div class="container">
      <div class="footerInner">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="tmdblogo" />
          <p>Hi There 🤩</p>
        </div>
        <div class="menus">
          <div class="menu">
            <a href="#"><strong>THE BASICS</strong></a>
            <a href="#"><span>About TMDB</span></a>
            <a href="#"><span>Contact Us</span></a>
            <a href="#"><span>Support Forums</span></a>
            <a href="#"><span>API</span></a>
            <a href="#"><span>System Status</span></a>
          </div>
          <div class="menu">
            <a href="#"><strong>GET INVOLVED</strong></a>
            <a href="#"><span>Contribution Bible</span></a>
            <a href="#"><span>3rd Party Applications</span></a>
            <a href="#"><span>Add New Movie</span></a>
            <a href="#"><span>Add New TV Show</span></a>
          </div>
          <div class="menu">
            <a href="#"><strong>COMMUNITY</strong></a>
            <a href="#"><span>Guidelines</span></a>
            <a href="#"><span>Discussions</span></a>
            <a href="#"><span>Leaderboard</span></a>
            <a href="#"><span>Twitter</span></a>
          </div>
          <div class="menu">
            <a href="#"><strong>LEGAL</strong></a>
            <a href="#"><span>Terms of Use</span></a>
            <a href="#"><span>API Terms of Use</span></a>
            <a href="#"><span>Privacy Policy</span></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
#footer {
  background-color: #022540;
  height: 326px;
  box-sizing: border-box;

  .footerInner {
    display: flex;
    margin: 0 auto;
    width: 60%;
    color: #fff;
    justify-content: space-between;
    padding-top: 40px;

    .logo {
      display: inline-grid;

      img {
        display: bolck;
        width: 140px;
        padding-bottom: 30px;
      }

      p {
        display: block;
        padding: 10px 20px 0 20px;
        background-color: #fff;
        border-radius: 10px;
        color: #02b4e4;
        text-align: center;
        font-size: 18px;
        line-height: normal;
      }
    }

    .menus {
      display: contents;

      .menu {
        padding-top: 40px;
        display: block;
        font-size: 13px;

        strong {
          display: block;
          line-height: 2;
          font-weight: 700;
        }

        span {
          display: block;
          font-weight: 300;
          line-height: 2;
        }
      }
    }
  }
}
</style>
