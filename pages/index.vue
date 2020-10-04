<template>
  <div>
    <h1>Application</h1>
    <input v-model="name">
    <v-stage ref="card" :config="configKonva">
      <v-layer>
        <v-text :config="{text: name}"></v-text>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
    <button v-on:click="save()">save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    }
  },
  methods: {
    save() {
      console.log(this.$refs.card);
      var dataUri = this.$refs.card.getStage().toDataURL({ pixelRatio: 3 });
      var link = document.createElement('a');
      link.download = 'card.png';
      link.href = dataUri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // delete link;
    }
  }
}
</script>
