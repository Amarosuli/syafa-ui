// @ts-nocheck
import { writable, derived } from 'svelte/store';

export const collorSet = {
   none: '',
   main: 'bg-main text-main-foreground',
   primary: 'bg-primary text-primary-foreground',
   secondary: 'bg-secondary text-secondary-foreground',
   muted: 'bg-muted text-muted-foreground',
   info: 'bg-info text-info-foreground',
   success: 'bg-success text-success-foreground',
   warning: 'bg-warning text-warning-foreground',
   error: 'bg-error text-error-foreground',
   ghost: 'bg-ghost text-ghost-foreground'
};

/**
 @description collorSet contain object respectifely to system collors.
 */

export const buttonCollor = {
   main: `${collorSet.main} hover:bg-main/80`,
   primary: `${collorSet.primary} hover:bg-primary/80`,
   secondary: `${collorSet.secondary} hover:bg-secondary/80`,
   muted: `${collorSet.muted} hover:bg-muted/80`,
   info: `${collorSet.info} hover:bg-info/80`,
   success: `${collorSet.success} hover:bg-success/80`,
   warning: `${collorSet.warning} hover:bg-warning/80`,
   error: `${collorSet.error} hover:bg-error/80`,
   ghost: `${collorSet.ghost} hover:bg-ghost-foreground/10`
};

export const buttonVariant = {
   outline: 'outline outline-ghost-foreground/10 outline-[0.5px]',
   rounded: 'rounded-lg',
   ghost: 'bg-transparant'
};


/**
 * @description
 * Toggler is costumize writable
 * Toggler use in Sheet and DropdownMenu Component as Context
 */
export function toggler() {
   const store = writable(false);
   const { set, subscribe, update } = store;

   function toggle() {
      update((v) => (v = !v));
   }

   function setFalse() {
      update((v) => (v = false));
   }

   function setTrue() {
      update((v) => (v = true));
   }
   return {
      subscribe,
      set,
      toggle,
      setFalse,
      setTrue,
      hide: () => setFalse(),
      show: () => setTrue()
   };
}

/**
 *
 * @description
 * Store to manage modal
 */
function createModal() {
   const modal = writable([]);

   const { set, subscribe, update } = modal;

   function register(name) {
      update((array) => (array = [...array, { name: name, shown: false }]));
   }

   function deregister(name) {
      update((array) => (array = array.filter((v) => v.name !== name)));
   }

   function listen(name) {
      return derived(modal, ($modal) => $modal.find((v) => v.name === name && v.shown === true));
   }

   function toggle(name) {
      update(
         (array) =>
         (array = array.map((v) => {
            if (v.name === name) {
               v.shown = !v.shown;
            }
            return v;
         }))
      );
   }

   function show(name) {
      update(
         (array) =>
         (array = array.map((v) => {
            if (v.name === name) v.shown = true;
            return v;
         }))
      );
   }
   function hide(name) {
      update(
         (array) =>
         (array = array.map((v) => {
            if (v.name === name) v.shown = false;
            return v;
         }))
      );
   }

   return {
      subscribe,
      register,
      deregister,
      listen,
      toggle,
      hide,
      show
   };
}

export const modal = createModal();

/**
 *
 * @description
 * Tab Store
 */
export function tabStore() {
   const store = writable('');
   const { set, subscribe, update } = store;

   function select(id) {
      update((v) => (v = id));
   }

   return {
      subscribe,
      select
   };
}

/**
 *
 * @param {*} node
 * @returns
 */
export function clickOutSide(node) {
   /**
    *
    * @param {*} event
    */
   const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
         node.dispatchEvent(new CustomEvent('clickOutSide'), node);
      }
   };

   document.addEventListener('click', handleClick, true);

   return {
      destroy() {
         document.addEventListener('click', handleClick, true);
      }
   };
}

/**
 @description themeInit is a function to follow what OS preference currently apply for theme.
 
   ### Note
   This function should run on browser,  
   So it would best to wrap inside the onMount() helper from svelte.  
   Manual toggle approach simply by switching the 'dark' class of documentElement.  

   ```js
   document.documentElement.classList.add('dark') 
   // to apply dark theme, or
   document.documentElement.classList.remove('dark') 
   // to apply light theme.
   ```  
 */
export function themeInit() {
   // localStorage.theme = 'dark';
   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
   } else {
      document.documentElement.classList.remove('dark');
   }

   // Whenever the user explicitly chooses light mode
   // localStorage.theme = 'light';

   // Whenever the user explicitly chooses dark mode
   // localStorage.theme = 'dark';

   // Whenever the user explicitly chooses to respect the OS preference
   // localStorage.removeItem('theme');
}
