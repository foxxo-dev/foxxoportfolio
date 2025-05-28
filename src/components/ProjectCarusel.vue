<template>
  <div id="recentProjects">
    <div id="scrollContainer" ref="scrollContainer" @wheel="handleWheel">
      <div id="projectsWrapper">
        <div v-for="project in projects" :key="project.id" class="project">
          <div class="frame" :class="project.colorClass">
            <div class="logo">{{ project.logo }}</div>
            <span class="title">{{ project.name }}</span>
            <span class="description">{{ project.description }}</span>
            <div class="chips">
              <div v-for="tag in project.tags" :key="tag" class="chip">
                {{ tag }}
              </div>
            </div>
            <button class="cta-btn" :class="project.colorClass">Try now for free</button>
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
      <button @click="scrollLeft" class="nav-btn" :disabled="currentPage === 0">←</button>
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
        →
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
          id: 1,
          name: 'AI Headshot Generator',
          description:
            'AI Headshot Generator is an easy and quick tool that can effortlessly transform your everyday snapshots into AI professional photos',
          tags: ['AI', 'React', 'Node.js'],
          logo: '🤖',
          colorClass: 'green-gradient',
        },
        {
          id: 2,
          name: 'Erase.bg',
          description:
            'Erase.bg is a smart AI background removal tool that lets you erase the background for FREE',
          tags: ['AI', 'Python', 'OpenCV'],
          logo: '🎨',
          colorClass: 'pink-gradient',
        },
        {
          id: 3,
          name: 'Upscale.media',
          description:
            'Upscale.media is an AI image upscaling tool that lets you enlarge & enhance your images for FREE',
          tags: ['AI', 'TensorFlow', 'Next.js'],
          logo: '📸',
          colorClass: 'blue-gradient',
        },
                {
          id: 1,
          name: 'AI Headshot Generator',
          description:
            'AI Headshot Generator is an easy and quick tool that can effortlessly transform your everyday snapshots into AI professional photos',
          tags: ['AI', 'React', 'Node.js'],
          logo: '🤖',
          colorClass: 'green-gradient',
        },
        {
          id: 2,
          name: 'Erase.bg',
          description:
            'Erase.bg is a smart AI background removal tool that lets you erase the background for FREE',
          tags: ['AI', 'Python', 'OpenCV'],
          logo: '🎨',
          colorClass: 'pink-gradient',
        },
        {
          id: 3,
          name: 'Upscale.media',
          description:
            'Upscale.media is an AI image upscaling tool that lets you enlarge & enhance your images for FREE',
          tags: ['AI', 'TensorFlow', 'Next.js'],
          logo: '📸',
          colorClass: 'blue-gradient',
        },
                {
          id: 1,
          name: 'AI Headshot Generator',
          description:
            'AI Headshot Generator is an easy and quick tool that can effortlessly transform your everyday snapshots into AI professional photos',
          tags: ['AI', 'React', 'Node.js'],
          logo: '🤖',
          colorClass: 'green-gradient',
        },
        {
          id: 2,
          name: 'Erase.bg',
          description:
            'Erase.bg is a smart AI background removal tool that lets you erase the background for FREE',
          tags: ['AI', 'Python', 'OpenCV'],
          logo: '🎨',
          colorClass: 'pink-gradient',
        },
        {
          id: 3,
          name: 'Upscale.media',
          description:
            'Upscale.media is an AI image upscaling tool that lets you enlarge & enhance your images for FREE',
          tags: ['AI', 'TensorFlow', 'Next.js'],
          logo: '📸',
          colorClass: 'blue-gradient',
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
  color: white;
  background-color: #0f0f0f;
}

#scrollContainer {
  width: 100%;
  max-width: 1200px;
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
  background: #1a1a1a;
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
}

.green-gradient .frame::before {
  background: linear-gradient(135deg, #4ade80, #22c55e);
}

.pink-gradient .frame::before {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
}

.blue-gradient .frame::before {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
}

.logo {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.title {
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
  line-height: 1.3;
}

.description {
  font-size: 0.9rem;
  color: #a1a1aa;
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
  background-color: #374151;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #d1d5db;
}

.cta-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: white;
  text-align: center;
}

.green-gradient .cta-btn {
  background: linear-gradient(135deg, #4ade80, #22c55e);
}

.pink-gradient .cta-btn {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
}

.blue-gradient .cta-btn {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(74, 222, 128, 0.4);
}

/* See All Projects Styles */
.seeAllProject .frame {
  background: #262626;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.seeAllFrame::before {
  background: linear-gradient(135deg, #6b7280, #4b5563);
}

.seeAllIcon {
  font-size: 4rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.seeAllBtn {
  background: linear-gradient(135deg, #6b7280, #4b5563);
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
  color: white;
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
  background-color: #4b5563;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pageIndicator:hover {
  background-color: #6b7280;
}

.pageIndicator.active {
  background-color: #22c55e;
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
