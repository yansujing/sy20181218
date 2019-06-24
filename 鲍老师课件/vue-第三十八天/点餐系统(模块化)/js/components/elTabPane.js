

export default {
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    template: `<TransitionCom name='slideLeft'>
                 <div v-show='isActive' class='tab-panel-content'>
                   <slot></slot>
                 </div>
               </TransitionCom>`
};