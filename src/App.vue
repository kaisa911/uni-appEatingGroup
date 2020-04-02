<script lang="ts">
import { Vue } from 'vue-property-decorator';
import './static/iconfont/iconfont.css';

export default class App extends Vue implements Global.IVue {
  mpType: String = 'app';
  onLaunch() {
    console.log('App Launch');
  }
  onShow() {
    console.log('App Show');
  }
  onHide() {
    console.log('App Hide');
  }
}
</script>

<style>
/*每个页面公共css */
</style>
