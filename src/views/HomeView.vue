<template>
  <main>
    <div id="landing">
      <div id="rating">
        <div id="starContainer">
          <img src="@/assets/icons/star.svg" alt="Star Icon" />
          <img src="@/assets/icons/star.svg" alt="Star Icon" />
          <img src="@/assets/icons/star.svg" alt="Star Icon" />
          <img src="@/assets/icons/star.svg" alt="Star Icon" />
          <img src="@/assets/icons/star_gray.svg" alt="Gray Star Icon" />
        </div>
        <span> Rated by {{ ratings }} happy clients </span>
      </div>
      <span id="slogan"> Bring your vision to life. </span>
      <p id="description">
        Hi! I am a developer from Poland. I love to code and enjoy flying in Microsoft Flight
        Simulator. I am also a designer, and I can design your website, or code it!
      </p>
    </div>
    <div id="arrowDown" @click="scrollDown">
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow Down" />
    </div>
    <div id="trustedUs">
      <span> Trusted by: </span>
      <div id="trustedLogos">
        <img src="@/assets/logos/UniversityLogo.png" alt="Trusted Logo 1" />
        <img src="@/assets/logos/nimoweb.svg" alt="Trusted Logo 2" />
        <img src="@/assets/logos/studypluslogo.png" alt="Trusted Logo 3" />
        <img src="@/assets/logos/partyplaylogo.png" alt="Trusted Logo 4" />
        <img src="@/assets/logos/aswnavilogo.png" alt="Trusted Logo 5" />
      </div>
    </div>
    <h2 class="header">Explore technologies ——</h2>
    <div class="cardContainer rows1">
      <div class="card category">Categories</div>
      <div class="card">
        <div class="card_tech">
          <img src="@/assets/icons/html.svg" alt="HTML Icon" />
        </div>
        <span class="card_title">Standard Web Development</span>
        <div class="card_description">
          <p>
            Web development using HTML, CSS and Vanilla Javascript. This is the most flexible form
            of web development for small webpages.
          </p>
        </div>
        <div class="spacer"></div>
        <div class="card_pills">
          <span class="card_pill">Single-Page</span>
          <span class="card_pill">Changable</span>
        </div>
      </div>
      <div class="card">
        <div class="card_tech">
          <img src="@/assets/icons/vue.svg" alt="vue Icon" />
        </div>
        <span class="card_title">Vue.js</span>
        <div class="card_description">
          <p>
            Web development using Vue.js. This is a great framework for building single-page
            applications with a lot of features and interactivity.
          </p>
        </div>
        <div class="spacer"></div>
        <div class="card_pills">
          <span class="card_pill">Responsive</span>
          <span class="card_pill">Single-Page</span>
          <span class="card_pill">Components</span>
          <span class="card_pill">Reusable</span>
        </div>
      </div>
      <div class="card">
        <div class="card_tech">
          <img src="@/assets/icons/node.svg" style="width: 2rem" alt="Node Icon" />
        </div>
        <span class="card_title">Node.js</span>
        <div class="card_description">
          <p>
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for
            building scalable network applications.
          </p>
        </div>
        <div class="spacer"></div>
        <div class="card_pills">
          <span class="card_pill">Backend</span>
          <span class="card_pill">API</span>
          <span class="card_pill">Database</span>
          <span class="card_pill">Scalable</span>
          <span class="card_pill">Multi-Purpouse</span>
        </div>
      </div>
      <div class="card more">
        <div class="spacer"></div>
        <span class="tripledot">...</span>
        <span class="card_title">More technologies</span>
        <div class="spacer"></div>
        <button class="card_pill" @click="$router.push('/technologies')">Explore</button>
      </div>
    </div>
    <div class="scroller"></div>
    <h2 class="header">Projects ——</h2>
    <p class="header_description">
      Here are some of my projects. I have worked on many more, but these are the ones I am most
      proud of. Click on the cards buttons to view the whole project.
    </p>
    <ProjectCarusel />
    <div class="scroller"></div>
  </main>
</template>

<script>
import ProjectCarusel from '@/components/ProjectCarusel.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      message: 'Welcome to the Home View!',

      ratingsTotal: 2,
      ratings: 0,
      ratingsClock: null,
    }
  },
  components: {
    ProjectCarusel,
  },
  methods: {
    approachRatings() {
      this.ratings += Math.ceil((this.ratingsTotal - this.ratings) / 5)
    },
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    this.ratingsClock = setInterval(() => {
      if (this.ratings < this.ratingsTotal) {
        this.approachRatings()
      } else {
        clearInterval(this.ratingsClock)
      }
    }, 800)
  },
}
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
}
main {
  position: relative;
}
#landing {
  height: calc(100vh - 5rem);
  width: 100%;
  background: linear-gradient(to bottom, #22aaff 0%, #22aaff15 80%, transparent 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#starContainer {
  display: flex;
  gap: 0.15rem;
}
#rating {
  background: white;
  color: black;
  border-radius: 10vw;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
#slogan,
.header {
  font-size: 6rem;
  font-weight: 500;
  text-align: center;
}
.header {
  text-align: left;
  font-size: 5rem;
  max-width: 40rem;
}
.line {
  display: block;
  width: 10rem;
  height: 0.5rem;
  background: #ffffff;
  margin-top: 0.5rem;
  border-radius: 0.25rem;
}
/* cards */
.cardContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
.rows1 {
  grid-template-rows: 1fr;
}
.card {
  background: #fff;
  color: #000;
  border-radius: 1rem;
  max-width: 20rem;
  aspect-ratio: 6/7;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  padding: 1rem;
  gap: 0.5rem;
}
.card_tech {
  width: 3rem;
  aspect-ratio: 1;
  background: black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}
.card_tech img {
  width: 1.5rem;
  aspect-ratio: 1;
  object-fit: contain;
}
.card_title {
  font-size: 1.3rem;
  font-weight: bold;
}
.spacer {
  flex-grow: 1;
}
.card_pills {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}
.card_pill {
  background: black;
  color: white;
  padding: 0.2rem 1.3rem;
  border-radius: 10vw;
}
.category,
.more {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  place-items: center;
  background: transparent;
  color: white;
  opacity: 0.6;
}
.more {
  grid-template-rows: auto auto 1fr auto;
  opacity: 1;
  border: 2px solid white;
}
.card .tripledot {
  font-size: 5rem;
  font-weight: bold;
  opacity: 0.6;
  text-align: center;
  line-height: 0.5;
}
.card button {
  background: white;
  color: black;
  padding: 0.5rem 1.5rem;

  border: none;
  cursor: pointer;
}
/* continuation */
#description {
  line-height: 1.6;
  max-width: 70ch;
  opacity: 0.8;
  text-align: center;
  margin-top: 1rem;
}
#arrowDown {
  position: absolute;
  top: calc(100vh - 10rem);
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  opacity: 0.8;
  cursor: pointer;
  width: 2rem;
}

/* Trusted By Section */

#trustedUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  opacity: 0.6;
  filter: grayscale(100%);
  font-size: 0.8rem;
}
#trustedLogos {
  display: flex;
  gap: 3rem;
  margin-top: 0.5rem;
}
#trustedLogos img {
  height: 4.5rem;
  object-fit: contain;
}
.scroller {
  height: 10rem;
}
/* Header Description */
.header_description {
  max-width: 60ch;
  font-size: 1.2rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-top: 1rem;
}
</style>
