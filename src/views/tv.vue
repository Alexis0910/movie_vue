<template>
  <div>
    <Header />
    <main id="tvmain">
      <section id="banner">
        <div class="banner">
          <div class="container">
            <div class="wrap">
              <div class="poster">
                <img src="../assets/img/simpsons.jpg" alt="Movie" />
              </div>
              <div class="content">
                <h2>심슨네 가족들 (1989)</h2>
                <strong>1989 · 가족,애니메이션,코미디</strong>
                <em class="star">★★★★☆</em><em>7.9</em>
                <p>
                  1989년 12월 FOX에서 방영을 시작한 애니메이션. 미국의
                  스프링필드를 배경으로 먹는 걸 유난히 밝히고 게으르며 독특한
                  성격의 가장 호머, 항상 사고만 치고 다니는 남편과 아이들의
                  뒤치다꺼리를 도맡아 하는 엄마 마지, 하루라도 장난을 치지 않고
                  넘어가는 날이 없는 장난꾸러기 아들 바트, 나이에 비해 꽤나
                  어른스럽고 똑똑한 리사, 그리고 말은 한마디도 못하지만 의외의
                  대활약을 보여주는 막내 메기 등 각각의 개성 만점 가족
                  구성원들이 펼치는 극적인 하루하루를 그리고 있다.
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
              <swiper-slide v-for="(tv, idx) in tvs" :key="tv.id">
                <h1>{{ idx + 1 }}</h1>
                <div class="poster">
                  <img
                    :src="
                      'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                      tv.poster_path
                    "
                    alt="tv"
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
              <swiper-slide v-for="tv in airingtodaytvs" :key="tv.id">
                <div class="poster">
                  <div class="info-img">
                    <img
                      class="poster_img"
                      :src="
                        'https://image.tmdb.org/t/p/w500' + tv.backdrop_path
                      "
                      alt="tv"
                    />
                    <span class="poster_hover"
                      ><img src="img/hover.svg" alt="▶"
                    /></span>
                  </div>
                  <div class="info">
                    <a href="#"
                      ><h3 class="list_title">
                        {{ tv.name }}
                      </h3></a
                    >
                    <p class="list_date">{{ tv.first_air_date }}</p>
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
    const tvs = ref([]);
    const airingtodaytvs = ref([]);

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        tvs.value = data.results;
      })
      .catch((error) => console.log('error', error));

    fetch(
      `https://api.themoviedb.org/3/tv/35?api_key=b268e83b3937d59cde485651022111c1&language=ko-KR?`
    )
      .then((response) => response.json())
      .then((data) => {
        airingtodaytvs.value = data.first_air_date;
        airingtodaytvs.value = data.backdrop_path;
        airingtodaytvs.value = data.name;
        console.log(data.items);
      })
      .catch((error) => console.log('error', error));

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
      tvs,
      airingtodaytvs,
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
