<template>
  <div id="recentProjects">
    <div id="scrollContainer" ref="scrollContainer" @wheel="handleWheel">
      <div id="projectsWrapper">
        <div v-for="project in projects" :key="project.id" class="project">
          <div class="frame">
            <div class="logo">{{ project.logo }}</div>
            <span class="title">{{ project.name }}</span>
            <span class="description">{{ project.description }}</span>
            <div class="chips">
              <div v-for="tag in project.tags" :key="tag" class="chip">
                {{ tag }}
              </div>
            </div>
            <a :href="project.href" class="cta-btn">Try now, for free!</a>
          </div>
        </div>

        <!-- See All Projects Card -->
        <router-link to="/projects" class="project seeAllProject">
          <div class="frame seeAllFrame">
            <div class="seeAllIcon">⋯</div>
            <span class="title">See All Projects</span>
            <span class="description"
              >Explore my complete portfolio of projects and discover more amazing work</span
            >
            <div class="cta-btn seeAllBtn">View All Projects</div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="navigation">
      <button @click="scrollLeft" class="nav-btn" :disabled="currentPage === 0">
        <img
          src="@/assets/icons/arrow-down.svg"
          alt="Left Arrow"
          style="transform: rotate(90deg)"
        />
      </button>
      <div id="pagesIndicator">
        <div
          v-for="(_, index) in totalPages"
          :key="index"
          class="pageIndicator"
          :class="{ active: currentPage === index }"
          @click="goToPage(index)"
        ></div>
      </div>
      <button @click="scrollRight" class="nav-btn" :disabled="currentPage === totalPages - 1">
        <img
          src="@/assets/icons/arrow-down.svg"
          alt="Left Arrow"
          style="transform: rotate(-90deg)"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCarousel',
  data() {
    return {
      projects: [
        {
          id: -1,
          name: 'University.App',
          description:
            'A web application designed to help students manage their university life, including schedules, assignments, and grades.',
          tags: ['Vue', 'University', 'Backend', 'AI'],
          logo: '🏫',
          href: 'https://example.com/university-app',
        },
        {
          id: 0,
          name: 'Study +',
          description:
            ' It is a tool that uses AI to assist with studying, providing summaries and explanations.',
          tags: ['AI', 'Vue', 'API', 'Web App'],
          logo: '📚',
          href: 'https://study-plus.foxxo.app',
        },
        {
          id: 1,
          name: 'Roasted Toasted',
          description:
            'Roast your friends, with a fun game! You have 30 seconds to type your roast, and take turns with your friends.',
          tags: ['Game', 'Vanilla', 'Indev'],
          logo: '🔥',
          href: 'https://roastedtoasted.foxxo.app',
        },
        {
          id: 2,
          name: 'ASW Navi',
          description: 'A tool that helps you navigate through the complex hallways of ASW.',
          tags: ['Navigator', 'Algorithm', 'Vue', 'PWA'],
          logo: '🗺️',
          href: 'https://asw-navi.foxxo.app',
        },
        {
          id: 3,
          name: 'Party Play',
          description:
            'Party Play is an all in one app, where you can either host a party or add your song to one!',
          tags: ['Music', 'Vanilla', 'Spotify API', 'Realtime'],
          logo: '🎶',
          href: 'https://party-play.foxxo.app/',
        },
        {
          id: 4,
          name: 'This is Poland',
          description:
            'A simple website that showcases the beauty of Poland, with a focus on its culture, history, and natural beauty.',
          tags: ['Mobile Only', 'Singlepage', 'UN Day'],
          logo: '🇵🇱',
          href: 'https://thisispoland.thelpro.studio',
        },
      ],
      currentPage: 0,
      scrollAmount: 340,
    }
  },
  computed: {
    totalPages() {
      return this.projects.length + 1 // +1 for "See All" card
    },
  },
  methods: {
    scrollRight() {
      if (this.currentPage < this.totalPages - 1) {
        this.$refs.scrollContainer.scrollLeft += this.scrollAmount
        this.currentPage++
      }
    },
    scrollLeft() {
      if (this.currentPage > 0) {
        this.$refs.scrollContainer.scrollLeft -= this.scrollAmount
        this.currentPage--
      }
    },
    goToPage(pageIndex) {
      this.$refs.scrollContainer.scrollLeft = pageIndex * this.scrollAmount
      this.currentPage = pageIndex
    },
    handleWheel(e) {
      e.preventDefault()
      this.$refs.scrollContainer.scrollLeft += e.deltaY
    },
  },
  mounted() {
    const scrollContainer = this.$refs.scrollContainer
    scrollContainer.addEventListener('scroll', () => {
      this.currentPage = Math.round(scrollContainer.scrollLeft / this.scrollAmount)
    })
  },
}
</script>

<style scoped>
#recentProjects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: 100%;
  color: black;
}

#scrollContainer {
  width: 100%;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
}

#scrollContainer::-webkit-scrollbar {
  display: none;
}

#scrollContainer {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#projectsWrapper {
  display: flex;
  padding: 1rem;
  gap: 1.5rem;
}

.project {
  min-width: 320px;
  max-width: 320px;
  height: 420px;
  border-radius: 16px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.project:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.frame {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  background: white;
  color: black;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.frame::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.frame::before {
  background: linear-gradient(135deg, #cacaca, #6f6f6f);
}

.logo {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.title {
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
  line-height: 1.3;
}
.seeAllProject .title {
  color: white;
}

.description {
  font-size: 0.9rem;
  color: #000000;
  opacity: 0.8;
  line-height: 1.5;
  flex-grow: 1;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.chip {
  padding: 0.3rem 0.8rem;
  background-color: #000;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

.cta-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: linear-gradient(135deg, #5d5d5d, #000000);
  color: white;
  text-align: center;
  text-decoration: none;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(215, 215, 215, 0.4);
}

/* See All Projects Styles */
.seeAllProject .frame {
  background: black;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.seeAllFrame::before {
  background: linear-gradient(135deg, #6b7280, #4b5563);
}

.seeAllIcon {
  font-size: 4rem;
  color: white;
  margin-bottom: 1rem;
}
img {
  width: 24px;
  height: 24px;
}

.seeAllBtn {
  background: linear-gradient(135deg, #8be4ff, #b0c5ff);
  color: black;
}

.seeAllBtn:hover {
  box-shadow: 0 8px 25px rgba(107, 114, 128, 0.4);
}

/* Navigation */
.navigation {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.nav-btn {
  background-color: #374151;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: black;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background-color: #4b5563;
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

#pagesIndicator {
  display: flex;
  gap: 0.75rem;
}

.pageIndicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #5e5e5e;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pageIndicator:hover {
  background-color: #7c7c7c;
}

.pageIndicator.active {
  background-color: #ffffff;
  width: 32px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .project {
    min-width: 280px;
    max-width: 280px;
    height: 380px;
  }

  #projectsWrapper {
    gap: 1rem;
  }

  #recentProjects {
    padding: 2rem 0.5rem;
  }
}
</style>
