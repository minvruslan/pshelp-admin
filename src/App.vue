<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { version } from '../package.json'

export default {
  name: 'App',
  data () {
    return {
      frontendVersion: version,
      updateDocumentHeightTimeoutHandler: null,
      updateDocumentHeightCallCount: 0
    }
  },
  mounted () {
    // eslint-disable-next-line
    console.log('Frontend version:', this.frontendVersion)

    this.updateDocumentHeight()

    window.addEventListener('resize', () => {
      if (this.updateDocumentHeightTimeoutHandler !== null) {
        clearTimeout(this.updateDocumentHeightTimeoutHandler)
        this.updateDocumentHeightTimeoutHandler = null
      }

      this.updateDocumentHeightCallCount = 0
      this.updateDocumentHeight()
    })
  },
  methods: {
    updateDocumentHeight () {
      if (this.updateDocumentHeightTimeoutHandler !== null) {
        clearTimeout(this.updateDocumentHeightTimeoutHandler)
        this.updateDocumentHeightTimeoutHandler = null
      }

      this.updateDocumentHeightCallCount += 1
      const vh = window.innerHeight * 0.01

      if (vh >= this.$CONSTANTS.SETTINGS.DOCUMENT_HEIGHT_MINIMUM_VH) {
        this.updateDocumentHeightCallCount = 0
        document.documentElement.style.setProperty('--vh', `${vh}px`)

        return
      }

      if (this.updateDocumentHeightCallCount <= 5) {
        this.updateDocumentHeightTimeoutHandler = setTimeout(
          () => { this.updateDocumentHeight() },
          this.$CONSTANTS.SETTINGS.UPDATE_DOCUMENT_HEIGHT_TIMEOUT_1
        )

        return
      }

      if (this.updateDocumentHeightCallCount > 5 && this.updateDocumentHeightCallCount <= 10) {
        this.updateDocumentHeightTimeoutHandler = setTimeout(
          () => { this.updateDocumentHeight() },
          this.$CONSTANTS.SETTINGS.UPDATE_DOCUMENT_HEIGHT_TIMEOUT_2
        )

        return
      }

      if (this.updateDocumentHeightCallCount > 10) {
        this.updateDocumentHeightCallCount = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: #FFF;
  overflow: hidden;
}
</style>
