import Vue from 'vue'
import style from './index.scss'

const Component = {
  name: 'Component',
  data: () => ({
    red: false,
    strong: false,
  }),
  render() {
    return (
      <div>
        <h1>CSS modules demo</h1>
        <hr />
        <p class={ [style.sample, style.italic] }>
          This content is styled unconditionally with <code>sample</code> and <code>italic</code>
        </p>
        <hr />
        <p class={
          [
            // unconditional styles
            style.sample,
            // conditional styles with enable booleans
            {
              [style.red]: this.red,
              [style.strong]: this.strong
            }
          ]
        }>
          This content is styled conditionally, but always has the <code>sample</code> class enabled
        </p>
        <p>
          <input type="checkbox" onChange={() => this.red = !this.red} />
          class: <code>red</code>
        </p>
        <p>
          <input type="checkbox" onChange={() => this.strong = !this.strong} />
          class: <code>strong</code>
        </p>
      </div>
    )
  }
}

const app = new Vue(Component)
app.$mount('#app');
