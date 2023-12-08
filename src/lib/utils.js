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
