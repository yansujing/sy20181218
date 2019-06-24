

export default {
  name: 'BarCom',
  props: {
    barTitle: {
      type: String,
      required: true
    }
  },
  template: `<div class='bar'>
                <h1 class='bar-title'>{{barTitle}}</h1>
                <div class='bar-content'>
                  <slot></slot>
                </div>
              </div>`
};