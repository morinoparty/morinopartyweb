<template>
  <nav id="nav_bottom">
    <div class="content">
      <i class="fas fa-taxi"></i>
      <label>
        はじめての方へ
      </label>
    </div>
    <div class="content">
      <i class="fas fa-taxi"></i>
      <label>
        特徴
      </label>
    </div>
    <div class="content">
      <i class="fas fa-taxi"></i>
      <label>
        特徴
      </label>
    </div>
  </nav>
</template>

<style lang="scss">
nav#nav_bottom {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(43, 139, 48, 0.5);
  border: solid 2px white;
  backdrop-filter: blur(10px);
  padding: 10px 25px;
  border-radius: 50px;
  .content {
    display: inline-block;
    min-width: 50px;
    height: 50px;
    text-align: center;
    color: white;
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
    i {
      font-size: 2rem;
    }
    label {
      font-size: 0.8rem;
      font-weight: normal;
      display: block;
      text-align: center;
    }
  }
}
</style>
