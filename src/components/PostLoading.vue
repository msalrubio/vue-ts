<template>
  <div class="loader">
    <span>Cargando</span>
    <div class="circle"></div>
  </div>
</template>

<style lang="scss" scoped>
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    visibility: visible;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    align-items: center;
    z-index: 1;
    top: 0;
    left: 0;
    span {
      position: relative;
      left: 50%;
      font-weight: bold;
    }
    .circle {
      border: 8px solid rgba(255, 253, 253, 0.9);
      width: 180px;
      height: 180px;
      border-radius: 50%;
      border-left-color: transparent;
      margin: 0 auto;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
