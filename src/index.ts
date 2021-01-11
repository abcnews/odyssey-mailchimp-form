import acto from '@abcnews/alternating-case-to-object';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import App from './components/App/App.svelte';

const init = () => {
  selectMounts('mailchimp').forEach(mountEl => {
    mountEl.classList.add('u-full');
    new App({
      target: mountEl,
      props: acto(getMountValue(mountEl))
    });
  });
};

declare global {
  interface Window {
    __ODYSSEY__: any;
  }
}

if (window.__ODYSSEY__) {
  init();
} else {
  window.addEventListener('odyssey:api', init);
}
