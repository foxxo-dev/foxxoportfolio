<template>
  <div id="navbar">
    <div id="logo">
      <img src="@/assets/logolight.svg" alt="Logo" />
    </div>
    <nav>
      <a>Home</a>
      <a>Web Stack</a>
      <a>Projects</a>
    </nav>
    <div id="sideContainer">
      <div id="hamburgerMenuIcon">☰</div>
      <button id="contactButton">Contact</button>
    </div>
  </div>

  <RouterView id="pageContainer" />

  <!-- <ProjectCarousel /> -->
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
  --page-offset: 0.5rem;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 6rem);
  margin-inline: auto;
  height: 3.5rem;
  margin-top: 0.5rem;
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
  margin-top: var(--page-offset);
  overflow: auto;
  width: calc(100vw - 2rem);
  margin-inline: auto;
  border-radius: 2.5rem 2.5rem 0 0;
  height: calc(100vh - 4rem - var(--page-offset));
}
img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
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
