<template>
  <div>
    <section class="nkr-title nkr-form">
      <div class="nkr-nakirikumi">百鬼組</div>
      <div class="nkr-application">入組申請書</div>
    </section>

    <section class="nkr-form">
      <form>
        <ul>
          <li>
            <label>名稱</label>
            <input class="input" type="text">
          </li>
          <li>
            <label>所在地</label>
            <input class="input" type="text">
          </li>
          <li>
            <label>入教契機</label>
            <textarea class="input"></textarea>
          </li>
          <li>
            <label>最喜歡大小姐的哪一點？</label>
            <textarea class="input"></textarea>
          </li>
          <li>
            <label>想對大小姐說的話？</label>
            <textarea class="input"></textarea>
          </li>
          <li>
            <label>入教日期</label>
            <input class="input" type="text">
          </li>
          <li>
            <label></label>
            <button class="button is-medium">入教</button>
          </li>
        </ul>
      </form>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
