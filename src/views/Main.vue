<template>
  <div>
    <Header />
    <main id="moviemain">
      <section id="banner">
        <div class="banner">
          <div class="container">
            <div class="wrap">
              <div class="poster">
                <img src="../assets/img/eternals.png" alt="Movie" />
              </div>
              <div class="content">
                <h2>이터널즈</h2>
                <strong>2021 · 157분 · 액션/모험/SF</strong>
                <em class="star">★★★☆☆</em><em>5.7</em>
                <p>
                  수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의
                  히어로들이 "어벤져스: 엔드게임" 이후 인류의 가장 오래된 적
                  '데비안츠'에 맞서기 위해 다시 힘을 합치면서 벌어지는 이야기
                </p>
                <router-link to="Detail">상세정보</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="top-list">
        <div class="container">
          <h2>TOP10 콘텐츠</h2>
          <div class="swiper-container2">
            <swiper
              :slides-per-view="7"
              :space-between="100"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide v-for="(movie, idx) in movies" :key="movie.id">
                <h1>{{ idx + 1 }}</h1>
                <div class="poster">
                  <img
                    :src="
                      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                      movie.poster_path
                    "
                    alt="Movie"
                  />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <section class="list">
        <div class="container">
          <h2>인기있는 스트리밍</h2>
          <div class="swiper-container">
            <swiper
              :slides-per-view="7"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              @reachEnd="swiper"
              @fromEdge="swiper"
            >
              <swiper-slide v-for="movie in movies" :key="movie.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      "
                      alt="Movie"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">
                        {{ movie.title }}
                      </h3></a
                    >
                    <p class="list_date">{{ movie.release_date }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <section class="list">
        <div class="container">
          <h2>개봉 예정 영화</h2>
          <div class="swiper-container">
            <swiper
              :slides-per-view="7"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              @reachEnd="swiper"
              @fromEdge="swiper"
            >
              <swiper-slide v-for="movie in upcomingnmovies" :key="movie.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      "
                      alt="upcomingMovie"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">{{ movie.title }}</h3></a
                    >
                    <p class="list_date">{{ movie.release_date }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <section class="list">
        <div class="container">
          <h2>마블 영화</h2>
          <div class="swiper-container">
            <swiper
              :slides-per-view="7"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              @reachEnd="swiper"
              @fromEdge="swiper"
            >
              <swiper-slide v-for="movie in marvlemovies" :key="movie.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      "
                      alt="marvlemovies"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">{{ movie.title }}</h3></a
                    >
                    <p class="list_date">{{ movie.release_date }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <section class="list">
        <div class="container">
          <h2>DC코믹스 영화</h2>
          <div class="swiper-container">
            <swiper
              :slides-per-view="7"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              @reachEnd="swiper"
              @fromEdge="swiper"
            >
              <swiper-slide v-for="movie in dcmovies" :key="movie.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      "
                      alt="dcmovies"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">{{ movie.title }}</h3></a
                    >
                    <p class="list_date">{{ movie.release_date }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>

      <section class="list">
        <div class="container">
          <h2>2011 오스카 수상작</h2>
          <div class="swiper-container">
            <swiper
              :slides-per-view="7"
              :space-between="20"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              @reachEnd="swiper"
              @fromEdge="swiper"
            >
              <swiper-slide v-for="movie in oscarmovies" :key="movie.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path
                      "
                      alt="oscarmovies"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">{{ movie.title }}</h3></a
                    >
                    <p class="list_date">{{ movie.release_date }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

export default {
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const movies = ref([]);
    const upcomingnmovies = ref([]);
    const marvlemovies = ref([]);
    const dcmovies = ref([]);
    const oscarmovies = ref([]);

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.results;
      })
      .catch((error) => console.log('error', error));

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        upcomingnmovies.value = data.results;
      })
      .catch((error) => console.log('error', error));

    fetch(
      `https://api.themoviedb.org/3/list/1?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        marvlemovies.value = data.items;
      })
      .catch((error) => console.log('error', error));

    fetch(
      `https://api.themoviedb.org/3/list/3?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        dcmovies.value = data.items;
      })
      .catch((error) => console.log('error', error));

    fetch(
      `https://api.themoviedb.org/3/list/4?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        oscarmovies.value = data.items;
      })
      .catch((error) => console.log('error', error));

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      movies,
      upcomingnmovies,
      marvlemovies,
      dcmovies,
      oscarmovies,
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
#moviemain,
#tvmain {
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

          a {
            font-size: 18px;
            position: absolute;
            bottom: 0;
            padding: 12px 48px;
            background: #000;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 50px;
            text-align: center;
            font-weight: 300;
          }
        }
      }
    }
  }

  .top-list {
    width: 100%;
    height: 405px;
    background-color: #141414;
    box-sizing: border-box;
    padding: 50px 0;

    .container {
      h2 {
        font-weight: 500;
        color: #fff;
        font-size: 40px;
      }

      .swiper-container2 {
        width: 100%;
        height: 100%;

        .swiper-wrapper {
          display: flex;

          .swiper-slide {
            display: flex;
            position: relative;
            align-items: center;

            h1 {
              font-family: 'NEXONLv2Gothic';
              font-weight: 700;
              font-size: 250px;
              color: #000;
              -webkit-text-stroke: 5px rgb(71, 71, 71);
              line-height: 1;
            }

            .poster {
              position: absolute;
              transform: translate(55%, 0%);

              img {
                width: 180px;
              }
            }
          }
        }
      }
    }
  }
}

.list {
  background-color: #000;
  padding: 50px 0;

  &:nth-child(even) {
    background-color: #141414;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
  }

  .swiper-container {
    height: 100%;

    .swiper-wrapper {
      display: flex;

      .swiper-slide {
        display: flex;

        .poster {
          width: 200px;
          position: relative;

          .info-img {
            cursor: pointer;

            &:hover {
              .poster_img {
                filter: brightness(50%);
              }

              .poster_hover {
                opacity: 1;
              }
            }

            .poster_img {
              width: 200px;
              height: 300px;
              transition: filter 0.3s;
            }

            .poster_hover {
              position: absolute;
              top: 45%;
              left: 50%;
              transform: translate(-50%, -50%);
              opacity: 0;
              transition: opacity 0.3s;
            }
          }

          .info {
            .list_title {
              font-size: 20px;
              font-weight: 500;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .list_date {
              font-size: 18px;
              color: rgb(132, 132, 132);
            }
          }
        }
      }
    }
  }
}
#tvmain {
  display: block;

  #banner {
    width: 100%;
    background-color: #070306;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(../assets/img/simpsons.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 800px;
  }
}
</style>
