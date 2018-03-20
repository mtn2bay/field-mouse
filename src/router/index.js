import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Report from '../components/Report';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/report',
      component: Report,
      meta: {
        title: 'Report',
      },
    },
    {path: '*', redirect: '/report'},
  ],
});

router.replace('/report');

module.exports = router;
