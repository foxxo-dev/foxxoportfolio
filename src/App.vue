<template>
  <div id="navbar">
    <div id="logo">
      <img src="@/assets/logolight.svg" alt="Logo" />
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/webstack">Web Stack</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <div id="sideContainer">
      <div id="hamburgerMenuIcon">☰</div>
      <button id="contactButton" @click="$router.push('/contact')" style="cursor: pointer">
        Contact
      </button>
    </div>
  </div>

  <RouterView id="pageContainer" />

  <footer>
    <div class="footerContainer">
      <span class="footerText">© 2025 Adam Buksowicz. All rights reserved.</span>
      <!-- CC BY NC -->
      <br />
      <span class="footerText">
        This work is licensed under a
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          >Creative Commons Attribution-NonCommercial 4.0 International License</a
        >.
      </span>
    </div>
  </footer>
</template>

<script>
import ProjectCarousel from './components/ProjectCarusel.vue'

export default {
  name: 'App',
  components: {
    ProjectCarousel,
  },
  mounted() {},
}
</script>

<style scoped>
#pageContainer {
  --page-offset: 1rem;
}
#navbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-inline: auto;
  height: 3.5rem;
  padding-top: 1.5rem;
  left: 50%;
  padding-inline: 3rem;
  transform: translateX(-50%);
  background: black;
  z-index: 5;
  padding-bottom: 1.5rem;
}
nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  line-height: 0;
}
a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

#sideContainer {
  outline: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 10vw;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem;
}
button {
  all: unset;
  background: #22aaff;
  padding: 0.3rem 1.5rem;
  border-radius: 10rem;
}
#hamburgerMenuIcon {
  font-size: 1.25rem;
  cursor: pointer;
  padding-left: 0.5rem;
  display: none;
}
#pageContainer {
  margin-top: calc(var(--page-offset) + 3.5rem);
  overflow: auto;
  width: calc(100vw - 2rem);
  margin-inline: auto;
  border-radius: 2.5rem 2.5rem 0 0;
  min-height: calc(100vh - 4rem - var(--page-offset));
}
img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}
footer {
  background: linear-gradient(to top, #22aaff71 0%, transparent 100%);
  color: #ffffff;
  padding: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  text-align: center;
}
.footerText {
  font-weight: 500;
}
footer a {
  color: #fff;
  text-decoration: underline;
}
@media (max-width: 600px) {
  nav {
    display: none;
  }
  #hamburgerMenuIcon {
    display: block;
  }
}
</style>
