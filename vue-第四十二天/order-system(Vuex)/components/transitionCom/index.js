
export default {
    name: 'TransitionCom',
    props: {
        isGroup: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    template: `<transition name='slideLeft' v-if='!isGroup'>
                 <slot></slot>
               </transition>
               <transition-group name='slideLeft' tag='div' class='current-order-ul' v-else>
                 <slot></slot>
               </transition-group>`
};

