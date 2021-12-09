<template>
  <div>
    <Header />
    <main id="detail_main">
      <section id="banner">
        <div class="banner">
          <div class="container">
            <div class="wrap">
              <div class="poster">
                <img src="../assets/img/eternals.png" alt="Movie" />
              </div>
              <div class="content">
                <h2>이터널스</h2>
                <strong>2021 · 157분 · 액션/모험/SF</strong>
                <em class="star">★★★☆☆</em><em>5.7</em>
                <p>
                  수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의
                  히어로들이 "어벤져스: 엔드게임" 이후 인류의 가장 오래된 적
                  '데비안츠'에 맞서기 위해 다시 힘을 합치면서 벌어지는 이야기
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="container">
      <section class="movieDetail">
        <article class="cast">
          <h1>주요 출연진</h1>
          <div class="wrap">
            <div class="castCard" v-for="cast in casts" :key="cast.id">
              <img
                :src="
                  'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                  cast.profile_path
                "
                alt="castCard"
              />
              <div class="desc">
                <!-- <h2>{{ cast.also_known_as[0] }}</h2> -->
                <h4>Sersi</h4>
              </div>
            </div>
          </div>
        </article>
        <!-- //cast -->
        <!-- <article class="media">
                <h1>미디어</h2>
                <div class="">
                    
                </div>
            </article> -->

        <aside class="aside">
          <div class="info_wrap">
            <div class="info">
              <h3>Status</h3>
              <p>Released</p>
            </div>
            <div class="info">
              <h3>Original Language</h3>
              <p>English</p>
            </div>
            <div class="info">
              <h3>Budget</h3>
              <p>$200,000,000.00</p>
            </div>
            <div class="info">
              <h3>Revenue</h3>
              <p>$336,000,000.00</p>
            </div>
            <div class="info keywords">
              <h3>Keywords</h3>
              <div class="words">
                <ul>
                  <li>boredom</li>
                  <li>supernatural</li>
                  <li>superhero</li>
                  <li>based on comic</li>
                </ul>
              </div>
            </div>
            <div class="info score">
              <h3>Content Score</h3>
              <span>100</span>
              <p>Yes! Looking good!</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
    <!--  //movieDetail -->
    <div class="container">
      <article class="recommendations">
        <h1>추천</h1>
        <div class="wrap">
          <div class="recoCard">
            <img
              src="https://www.themoviedb.org/t/p/w250_and_h141_face/7OcRErUXXdAVAHg6y5cjn56ivtu.jpg"
              alt="recoCard"
            />
            <div class="desc">
              <span>라스트 나잇 인 소호</span>
              <span>75%</span>
            </div>
          </div>
          <div class="recoCard">
            <img
              src="https://www.themoviedb.org/t/p/w250_and_h141_face/dK12GIdhGP6NPGFssK2Fh265jyr.jpg"
              alt="recoCard"
            />
            <div class="desc">
              <span>레드 노티스</span>
              <span>80%</span>
            </div>
          </div>
          <div class="recoCard">
            <img
              src="https://www.themoviedb.org/t/p/w250_and_h141_face/7OcRErUXXdAVAHg6y5cjn56ivtu.jpg"
              alt="recoCard"
            />
            <div class="desc">
              <span>라스트 나잇 인 소호</span>
              <span>75%</span>
            </div>
          </div>
          <div class="recoCard">
            <img
              src="https://www.themoviedb.org/t/p/w250_and_h141_face/dK12GIdhGP6NPGFssK2Fh265jyr.jpg"
              alt="recoCard"
            />
            <div class="desc">
              <span>레드 노티스</span>
              <span>80%</span>
            </div>
          </div>
        </div>
      </article>
      <!-- //recommendations -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

export default {
  components: {
    Header,
    Footer,
  },

  setup() {
    const casts = ref([]);

    fetch(
      `https://api.themoviedb.org/3/person/97576-gemma-chan?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        casts.value = data;
        // console.log(casts.value);
      })
      .catch((error) => console.log('error', error));

    return {
      casts,
    };
  },
};
</script>

<style lang="scss">
#detail_main {
  width: 100%;
  color: #fff;

  #banner {
    width: 100%;
    background-color: #070306;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(../assets/img/banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 800px;

    .banner {
      height: 100%;
      width: 100%;

      .wrap {
        padding-top: 80px;

        .poster {
          float: left;

          img {
            width: 400px;
          }
        }

        .content {
          padding-left: 430px;
          height: 598px;
          position: relative;

          h2 {
            font-family: 'GmarketSans';
            font-weight: 500;
            font-size: 80px;
            line-height: 1;
            padding-bottom: 8px;
          }

          strong {
            display: block;
            font-size: 22px;
            padding-bottom: 20px;
          }

          em {
            display: inline-block;
            color: #fff;
            font-size: 20px;
            padding-bottom: 20px;
          }

          .star {
            color: #ff9d00;
            display: inline;
            font-size: 20px;
            padding-bottom: 20px;
          }

          p {
            font-size: 24px;
            font-weight: 300;
          }
        }
      }
    }
  }
  // #detail_banner {
  //     width: 100%;
  //     background-color: #fff;
  //     background-image: url(../img/banner.png) no-repeat center;
  //     background-size: cover;
  //     height: 500px;

  //     .detail_banner {
  //         height: 100%;
  //         width: 100%;

  //         .wrap {

  //             .poster {
  //                 float: left;

  //                 img {
  //                     width: 300px;
  //                 }
  //             }

  //             .content {
  //                 padding-left: 230px;
  //                 position: relative;

  //                 h2 {
  //                     font-size: 26px;
  //                     padding-bottom: 5px;

  //                     span {
  //                         font-weight: 400;
  //                         color: #888;
  //                     }
  //                 }

  //                 em {
  //                     font-size: 10px;
  //                 }

  //                 .score_wrap {
  //                     width: 200px;
  //                     display: grid;
  //                     grid-template-columns: repeat(5, 1fr);
  //                     grid-gap: 20px;
  //                     padding: 15px 0;

  //                     .circle_wrap {
  //                         display: flex;

  //                         .circle {
  //                             width: 30px;
  //                             height: 30px;
  //                             border: 1px solid #555;
  //                             background: #555;
  //                         }

  //                         .score {

  //                             p {
  //                                 font-size: 10px;
  //                                 font-weight: 700;
  //                             }
  //                         }
  //                     }

  //                     .circle {
  //                         width: 20px;
  //                         height: 20px;
  //                         border: 1px solid #555;
  //                         background: #555;
  //                     }
  //                 }

  //                 .overview {
  //                     font-size: 16px;
  //                     font-weight: 400;
  //                     padding-bottom: 10px;
  //                 }

  //                 p {
  //                     font-size: 10px;
  //                 }

  //                 .creator {
  //                     font-size: 14px;
  //                     font-weight: 400;
  //                     padding: 20px 0 5px 0;
  //                 }
  //             }
  //         }
  //     }
  // }
}

//movieDetail
.movieDetail {
  // background-color: #02B4E4;
  font-family: 'S-CoreDream' !important;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  // height:100vh;
  .cast {
    box-sizing: border-box;
    width: 70%;
    height: 400px;
    margin-bottom: 50px;

    h1 {
      display: block;
      font-size: 25px;
      padding: 20px 0;
    }

    .wrap {
      width: 100%;
      overflow-y: hidden;
      overflow-x: scroll;
      display: -webkit-box;

      .castCard {
        margin: 15px 10px;
        width: 140px;
        height: 270px;
        border-radius: 10px;
        // border: 1px solid #000;
        box-shadow: 0px 10px 10px rgba(45, 45, 45, 0.2);

        img {
          border-radius: 10px 10px 0 0;
        }

        .desc {
          padding: 10px;

          h2 {
            font-size: 15px;
            font-weight: 500;
            padding-bottom: 10px;
          }

          h4 {
            font-weight: 300;
          }
        }
      }
    }
  }

  .aside {
    width: 25%;
    padding-top: 20px;

    .info_wrap {
      .info {
        padding-top: 20px;

        h3 {
          padding-bottom: 5px;
        }

        p {
        }
      }

      .keywords {
        .words {
          ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            li {
              background: rgb(212, 212, 212);
              border: 1px solid rgb(148, 148, 148);
              border-radius: 5px;
              padding: 5px 8px;
              margin: 0 5px 5px 0;
            }
          }
        }
      }

      .score {
        span {
          display: block;
          width: 100%;
          background: #000;
          border-radius: 10px;
          padding: 8px 11px;
          color: #fff;
        }
      }
    }
  }
}

.recommendations {
  box-sizing: border-box;
  width: 70%;
  height: 250px;
  margin-bottom: 50px;
  border-top: 1px solid rgb(119, 119, 119);
  overflow: hidden;

  h1 {
    display: block;
    font-size: 25px;
    padding: 20px 0;
  }

  .wrap {
    overflow: auto;
    width: 100%;

    .recoCard {
      width: 200px;
      height: 180px;
      display: inline-block;
      margin: 15px 10px;

      img {
        border-radius: 10px;
        width: 200px;
      }

      desc {
        display: flex;
        justify-content: space-between;

        span {
          display: inline-block;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
