<template>
  <div>
    <v-stage class="pers" :style="cssVars" ref="card" :config="fancardSize" @mousemove="handleMouseMove">
      <v-layer>
        <v-image :config="fancardBGConfig" />
      </v-layer>
      <v-layer>
        <v-circle ref="glare" :config="glareConfig" />
      </v-layer>
      <v-layer>
        <v-text :config="{text: name, x: 20, y: 115, fontSize: 24, fill: '#445750'}"></v-text>
        <v-text :config="{text: '2020年01月01日', x: 20, y: 157, fontSize: 14, fill: '#445750'}"></v-text>
        <v-text :config="{text: 'No. 00000000', x: 20, y: 190, fontSize: 14, fill: '#445750'}"></v-text>
        <v-text :config="{text: text}"></v-text>
      </v-layer>
    </v-stage>
    <button v-on:click="save()">save</button>
    <ul>
      <li>{{ name }}</li>
      <li>{{ location }}</li>
      <li>{{ moment }}</li>
      <li>{{ point }}</li>
      <li>{{ word }}</li>
      <li>{{ date }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fancardSize: {
        x:50,
        y:50,
        width: 365,
        height: 230,
      },
      text: '',
      glareConfig: {
        width: 400,
        height: 400,
        fillRadialGradientStartPoint: { x: 0, y: 0 },
        fillRadialGradientStartRadius: 10,
        fillRadialGradientEndPoint: { x: 0, y: 0 },
        fillRadialGradientEndRadius: 200,
        fillRadialGradientColorStops: [0, 'rgba(255,255,255,0.2)', 1, 'rgba(255,255,255,0)'],
        globalCompositeOperation: 'screen'
      },
      transform3D: {
        x: 0,
        y: 0
      },
      fancardBGConfig: null
    }
  },
  computed: {
    name() { return this.$store.state.fancard.name },
    location() { return this.$store.state.fancard.location },
    moment() { return this.$store.state.fancard.moment },
    point() { return this.$store.state.fancard.point },
    word() { return this.$store.state.fancard.word },
    date() { return this.$store.state.fancard.date },
    cssVars() {
      return {
        '--degX': this.transform3D.x + 'deg',
        '--degY': this.transform3D.y + 'deg',
      }
    }
  },
  created() {
    const image = new window.Image();
    image.src = 'img/bg.fancard1@3x.png';
    image.onload = () => {
      // set image only when it is loaded
      this.fancardBGConfig = {
        image: image,
        x: 0,
        y: 0,
        width: 365,
        height: 230
      }
    };
  },
  mounted: function () {
    this.$store.commit('fancard/loadFancard');

    this.$refs.card.getNode().absolutePosition({x:0,y:0});
  },
  methods: {
    writeMessage(message) {
      this.text = message;
    },
    handleMouseMove(event) {
      const glare = this.$refs.glare.getNode();
      const node = this.$refs.card.getNode();
      var transform = node.getAbsoluteTransform().copy();
      // to detect relative position we need to invert transform
      transform.invert();

      // get pointer (say mouse or touch) position
      var pos = node.getStage().getPointerPosition();

      const mousePos = transform.point(pos);
      const x = Math.round(mousePos.x);
      const y = Math.round(mousePos.y);
      glare.x(x);
      glare.y(y);
      glare.getLayer().draw();

      this.transform3D.x = Math.round((182.5-y) / 18.25);
      this.transform3D.y = Math.round((115-x) / -11.5);
      this.writeMessage('x: ' + x + ', y: ' + y + ', degX: ' + this.transform3D.x + ', degY:' + this.transform3D.y);
    },
    save() {
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

<style scoped>
.pers {
  transform-origin: center center;
  transform: perspective(50em) rotateY(var(--degY)) rotateX(var(--degX));
}

canvas {
  margin: 0 auto;
}
</style>
