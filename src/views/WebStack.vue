<template>
  <div class="app">
    <div class="header">
      <h1 class="title">Explore</h1>
      <div class="subtitle">
        <span>technologies</span>
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
          name: 'Vue.js',
          icon: 'V',
          description:
            'Web development using Vue.js. This is a great framework for building single-page applications with a lot of features and interactivity.',
          tags: ['Responsive', 'Single-Page', 'Components', 'Reusable'],
          category: 'Frontend Frameworks',
        },
        {
          name: 'Node.js',
          icon: '🟢',
          description:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building scalable network applications.",
          tags: ['Backend', 'API', 'Database', 'Scalable'],
          category: 'Backend Runtime',
        },
        {
          name: 'Express.js',
          icon: '🚀',
          description:
            'Fast, unopinionated, minimalist web framework for Node.js, perfect for building APIs and web applications.',
          tags: ['Framework', 'API', 'Middleware', 'Minimal'],
          category: 'Backend Runtime',
        },
        {
          name: 'MongoDB',
          icon: '🍃',
          description:
            'NoSQL document database that provides high performance, high availability, and easy scalability.',
          tags: ['NoSQL', 'Document', 'Scalable', 'Cloud'],
          category: 'Databases',
        },
        {
          name: 'MySQL',
          icon: '🐬',
          description:
            'Popular open-source relational database management system used by millions of applications.',
          tags: ['SQL', 'Relational', 'Popular', 'Reliable'],
          category: 'Databases',
        },
        {
          name: 'Next.js',
          icon: '▲',
          description:
            'React framework that enables functionality such as server-side rendering and generating static websites.',
          tags: ['React', 'SSR', 'Static', 'Full-Stack'],
          category: 'Frontend Frameworks',
        },
        {
          name: 'TypeScript',
          icon: '🔷',
          description:
            'Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
          tags: ['Types', 'JavaScript', 'Tooling', 'Scale'],
          category: 'Languages',
        },
        {
          name: 'React',
          icon: '⚛️',
          description:
            'JavaScript library for building user interfaces, allowing developers to create large web applications that can change data without reloading the page.',
          tags: ['UI', 'Components', 'SPA', 'Virtual DOM'],
          category: 'Frontend Frameworks',
        },
        {
          name: 'Tailwind CSS',
          icon: '🎨',
          description:
            'Utility-first CSS framework packed with classes that can be composed to build any design.',
          tags: ['CSS', 'Utility', 'Design', 'Responsive'],
          category: 'CSS Frameworks',
        },
        {
          name: 'Firebase',
          icon: '🔥',
          description:
            'Platform developed by Google for creating mobile and web applications, providing a variety of tools and services to help developers build high-quality apps.',
          tags: ['Backend', 'Realtime Database', 'Authentication', 'Hosting'],
          category: 'Backend Runtime',
        },
        {
          name: 'HTML',
          icon: '📄',
          description: 'The standard markup language for creating web pages and web applications.',
          tags: ['Markup', 'Structure', 'Web'],
          category: 'Frontend Basics',
        },
        {
          name: 'CSS',
          icon: '🎨',
          description:
            'A style sheet language used for describing the presentation of a document written in HTML.',
          tags: ['Styling', 'Design', 'Responsive'],
          category: 'Frontend Basics',
        },
        {
          name: 'JavaScript',
          icon: '🟨',
          description:
            'A versatile programming language that enables interactive web pages and dynamic user interfaces.',
          tags: ['Scripting', 'Dynamic', 'Interactive'],
          category: 'Frontend Basics',
        },
        {
          name: 'Python',
          icon: '🐍',
          description:
            'A high-level, interpreted programming language known for its readability and versatility.',
          tags: ['Scripting', 'Versatile', 'Readable'],
          category: 'Languages',
        },
        {
          name: 'PHP',
          icon: '🐘',
          description:
            'A popular general-purpose scripting language that is especially suited to web development.',
          tags: ['Scripting', 'Web Development', 'Server-Side'],
          category: 'Languages',
        },
        {
          name: 'C++',
          icon: '🔵',
          description:
            'A modern, object-oriented programming language developed by Microsoft, widely used for building Windows applications and games.',
          tags: ['Object-Oriented', 'Microsoft', 'Windows'],
          category: 'Languages',
        },

        {
          name: 'Lua',
          icon: '🟢',
          description:
            'A lightweight, high-level programming language designed primarily for embedded use in applications.',
          tags: ['Scripting', 'Embedded', 'Lightweight'],
          category: 'Languages',
        },
        {
          name: 'Bootstrap',
          icon: '🛠️',
          description:
            'Popular CSS framework for developing responsive and mobile-first websites quickly and easily.',
          tags: ['CSS', 'Responsive', 'Framework', 'Mobile-First'],
          category: 'CSS Frameworks',
        },
        {
          name: 'Roblox Game Development',
          icon: '🎮',
          description:
            'Creating games on the Roblox platform using Lua scripting language, focusing on interactive and engaging gameplay.',
          tags: ['Game Development', 'Lua', 'Roblox'],
          category: 'Game Development',
        },
        {
          name: 'Unreal Engine',
          icon: '🔵',
          description:
            'A powerful game engine used for developing high-quality games, simulations, and visualizations.',
          tags: ['Game Engine', 'C++', 'Visual Scripting'],
          category: 'Game Development',
        },
        {
          name: 'Godot Engine',
          icon: '🟢',
          description:
            'An open-source game engine for creating both 2D and 3D games, known for its flexibility and ease of use.',
          tags: ['Game Engine', 'GDScript', 'Open Source'],
          category: 'Game Development',
        },
        //  arudino figma and git and PS and AI
        {
          name: 'Arduino',
          icon: '🛠️',
          description:
            'An open-source electronics platform based on easy-to-use hardware and software, ideal for building interactive projects.',
          tags: ['Electronics', 'Open Source', 'Prototyping'],
          category: 'Hardware',
        },
        {
          name: 'Figma',
          icon: '🎨',
          description:
            'A web-based UI/UX design tool that allows for collaborative design and prototyping of user interfaces.',
          tags: ['Design', 'UI/UX', 'Prototyping', 'Collaboration'],
          category: 'Design Tools',
        },
        {
          name: 'Git',
          icon: '🐙',
          description:
            'A distributed version control system that allows developers to track changes in their code and collaborate with others.',
          tags: ['Version Control', 'Collaboration', 'Code Management'],
          category: 'Version Control',
        },
        {
          name: 'Photoshop',
          icon: '🖼️',
          description:
            'A powerful image editing software used for creating and manipulating images, graphics, and designs.',
          tags: ['Image Editing', 'Graphics', 'Design'],
          category: 'Design Tools',
        },
        {
          name: 'Illustrator',
          icon: '🖌️',
          description:
            'A vector graphics editor used for creating illustrations, logos, and complex graphics.',
          tags: ['Vector Graphics', 'Illustration', 'Design'],
          category: 'Design Tools',
        },
        {
          name: 'OpenAPI (Swagger)',
          icon: '📃',
          description:
            'A specification for defining RESTful APIs, enabling both humans and computers to understand the capabilities of a service.',
          tags: ['Documentation', 'REST', 'Specification', 'Tools'],
          category: 'APIs',
        },
        {
          name: 'JSON-RPC',
          icon: '🔗',
          description:
            'A remote procedure call protocol encoded in JSON, allowing for simple and lightweight API communication.',
          tags: ['RPC', 'JSON', 'Lightweight'],
          category: 'APIs',
        },
        {
          name: 'Firebase Realtime Database API',
          icon: '🔥',
          description:
            'A cloud-hosted NoSQL database that lets you store and sync data between your users in real time.',
          tags: ['Realtime', 'NoSQL', 'Cloud', 'Sync'],
          category: 'APIs',
        },
        {
          name: 'Stripe API',
          icon: '💳',
          description:
            'A powerful API for handling online payments, subscriptions, and financial transactions.',
          tags: ['Payments', 'Transactions', 'Finance', 'REST'],
          category: 'APIs',
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
