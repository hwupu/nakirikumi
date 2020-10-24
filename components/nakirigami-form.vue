<template>
  <div>
    <section class="nkr-title nkr-form">
      <div class="nkr-nakirikumi">百鬼組</div>
      <div class="nkr-application">入組申請書</div>
    </section>

    <section class="nkr-form">
      <form v-on:submit.prevent="save">
        <ul>
          <li>
            <label>名稱</label>
            <input class="input" type="text" v-model="name">
          </li>
          <li>
            <label>所在地</label>
            <input class="input" type="text" v-model="location">
          </li>
          <li>
            <label>入教契機</label>
            <textarea class="input" v-model="moment"></textarea>
          </li>
          <li>
            <label>最喜歡大小姐的哪一點？</label>
            <textarea class="input" v-model="point"></textarea>
          </li>
          <li>
            <label>想對大小姐說的話？</label>
            <textarea class="input" v-model="word"></textarea>
          </li>
          <li>
            <label>入教日期</label>
            <b-datepicker v-model="date"></b-datepicker>
          </li>
          <li>
            <label></label>
            <input class="button is-medium" type="submit" value="入教">
          </li>
        </ul>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      location: '',
      moment: '',
      point: '',
      word: '',
      date: new Date(),
      serial: ''
    }
  },
  mounted: function () {
    this.$store.commit('fancard/loadFancard');
    this.name = this.$store.state.fancard.name;
    this.location = this.$store.state.fancard.location;
    this.moment = this.$store.state.fancard.moment;
    this.point = this.$store.state.fancard.point;
    this.word = this.$store.state.fancard.word;
    this.date = new Date(this.$store.state.fancard.date);
  },
  methods: {
    save () {
      const fancard = {
        name: this.name,
        location: this.location,
        moment: this.moment,
        point: this.point,
        word: this.word,
        date: this.date.toString(),
        serial: this.serial,
      };
      this.$store.commit('fancard/saveFancard', fancard);
      this.$store.commit('signFancard');
    }
  }
}
</script>
