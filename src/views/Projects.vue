<template>
  <div class="app">
    <div class="header">
      <h1 class="title">Explore</h1>
      <div class="subtitle">
        <span>projects</span>
        <div class="line"></div>
      </div>
      <div class="categories">Categories</div>
    </div>

    <div class="filter-buttons">
      <button
        class="filter-btn"
        :class="{ active: currentFilter === 'all' }"
        @click="filterTechnologies('all')"
      >
        All
      </button>
      <button
        v-for="category in categories"
        :key="category"
        class="filter-btn"
        :class="{ active: currentFilter === category }"
        @click="filterTechnologies(category)"
      >
        {{ category }}
      </button>
    </div>

    <div class="cardContainer">
      <div v-for="tech in filteredTechnologies" :key="tech.name" class="card">
        <div class="card_tech">{{ tech.icon }}</div>
        <div class="card_title">{{ tech.name }}</div>
        <div class="card_description">{{ tech.description }}</div>
        <div class="spacer"></div>
        <div class="card_pills">
          <span v-for="tag in tech.tags" :key="tag" class="card_pill">
            {{ tag }}
          </span>
        </div>
        <a :href="tech.href" target="_blank" rel="noopener noreferrer" class="button">
          {{ tech.special || 'Open Project!' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologiesExplorer',
  data() {
    return {
      currentFilter: 'all',
      webStackData: [
        {
          name: 'Party Play',
          icon: '🎉',
          description:
            'A fun and interactive web application for organizing and managing parties and events.',
          tags: ['Vanilla', 'Web App', 'Party Management'],
          category: 'Vanilla Web Apps',
          href: 'https://party-play.foxxo.app',
          special: 'Start the party now!',
        },
        {
          name: 'This is Poland',
          icon: '🇵🇱',
          description:
            'A web application showcasing the beauty and culture of Poland, with interactive maps and guides.',
          tags: ['Vanilla', 'Web App', 'Culture'],
          category: 'Vanilla Web Apps',
          href: 'https://thisispoland.thelpro.studio',
          special: 'Explore Poland!',
        },
        {
          name: 'AI Talk',
          icon: '🤖',
          description:
            'A web application that allows users to chat with an AI, providing a fun and interactive experience.',
          tags: ['AI', 'Web App', 'Chat'],
          category: 'AI Web Apps',
          href: 'https://aitalk.foxxo.app',
          special: 'Chat with AI!',
        },
        {
          name: 'Study +',
          icon: '📚',
          description:
            'A web application that uses AI to assist with studying, providing summaries and explanations.',
          tags: ['AI', 'Vue', 'API', 'Web App'],
          category: 'AI Web Apps',
          href: 'https://study-plus.foxxo.app',
          special: 'Start studying!',
        },
        {
          name: 'Roasted Toasted',
          icon: '🔥',
          description:
            'A fun game where you can roast your friends! Type your roast in 30 seconds and take turns.',
          tags: ['Game', 'Vanilla', 'Indev'],
          category: 'Games',
          href: 'https://roastedtoasted.foxxo.app',
          special: 'Roast your friends!',
        },
        {
          name: 'Genorth Railway',
          icon: '🚂',
          description:
            'A roblox game where you get to drive around trains around the city of Genorth, and explore the world.',
          tags: ['Roblox', 'Game', 'Indev'],
          category: 'Games',
          href: 'https://example.com/genorth-railway',
          special: 'Play now!',
        },
        {
          name: 'Playsavvy',
          icon: '🛝',
          description:
            'A platform for finding fun playgrounds around the world, with user reviews and ratings.',
          tags: ['React', 'Web App', 'Playgrounds'],
          category: 'React Web Apps',
          href: 'https://playsavvy.foxxo.app',
          special: 'Discover strategies!',
        },
        {
          name: 'Flappy Potato',
          icon: '🥔',
          description:
            'A fun and addictive game where you control a potato and try to avoid obstacles.',
          tags: ['Game', 'PHP', 'Discontinued'],
          category: 'Games',
          href: 'https://flappypotato.foxxo.app',
        },
        {
          name: 'ASW Navi',
          icon: '🗺️',
          description:
            'A tool that helps you navigate through the complex hallways of ASW, with interactive maps and guides.',
          tags: ['Navigator', 'Algorithm', 'Vue', 'PWA'],
          category: 'Vue Web Apps',
          href: 'https://asw-navi.foxxo.app',
          special: 'Navigate ASW!',
        },
        {
          name: 'Fex Code',
          icon: '💻',
          description:
            'A very simple programming language that allows you to write code in a very simple way, with a focus on simplicity and ease of use.',
          tags: ['Programming Language', 'Indev'],
          category: 'Programming Languages',
          href: 'https://github.com/foxxo-dev/fexcode',
          special: 'Check it out on GitHub!',
        },
      ],
    }
  },
  computed: {
    categories() {
      return [...new Set(this.webStackData.map((tech) => tech.category))]
    },
    filteredTechnologies() {
      if (this.currentFilter === 'all') {
        return this.webStackData
      }
      return this.webStackData.filter((tech) => tech.category === this.currentFilter)
    },
  },
  methods: {
    filterTechnologies(category) {
      this.currentFilter = category
    },
  },
}
</script>

<style scoped>
.button {
  text-decoration: none;
  background: linear-gradient(135deg, #555, #000);
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  background: #000;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 2rem;
  min-height: 100vh;
}

.header {
  margin-bottom: 3rem;
}

.title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.subtitle {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 300;
}

.line {
  height: 2px;
  background: white;
  flex: 1;
  max-width: 200px;
}

.categories {
  margin: 2rem 0;
  opacity: 0.6;
  font-size: 1rem;
}

.cardContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
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
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
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

.card_description {
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.8;
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
  font-size: 0.8rem;
}

.more {
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1fr;
  place-items: center;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.more:hover {
  opacity: 0.8;
  transform: translateY(-4px);
}

.tripledot {
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
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.card button:hover {
  background: #f0f0f0;
  transform: translateY(-1px);
}

.more button {
  background: white;
  color: black;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.filter-btn:hover,
.filter-btn.active {
  background: white;
  color: black;
  opacity: 1;
}

@media (max-width: 768px) {
  .app {
    padding: 1rem;
  }

  .cardContainer {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card {
    max-width: none;
  }
}
</style>
