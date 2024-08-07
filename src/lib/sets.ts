/**
 @description collorSet contain object respectifely to system collors.
 */


 type Link = {
   href: string;
   title: string;
   isDisabled: boolean;
}

export const navbarLink : Link[] = [
   { href: '/system-collor', title: 'System Collor' , isDisabled: false},
   { href: '/button', title: 'Button' , isDisabled: false},
   { href: '/link', title: 'Link' , isDisabled: false},
   { href: '/typography', title: 'Typography' , isDisabled: true},
   { href: '/form', title: 'Form' , isDisabled: true},
   { href: '/field', title: 'Field' , isDisabled: true},
   { href: '/sheet', title: 'Sheet' , isDisabled: true},
   { href: '/modal', title: 'Modal' , isDisabled: true},
   { href: '/dropdown-menu', title: 'Dropdown Menu' , isDisabled: true},
   { href: '/accordion', title: 'Accordion' , isDisabled: false},
   { href: '/combobox', title: 'Combobox' , isDisabled: true},
   { href: '/tabs', title: 'Tabs' , isDisabled: false},
   { href: '/list', title: 'List' , isDisabled: false},
   { href: '/badge', title: 'Badge' , isDisabled: true},
   { href: '/menu', title: 'Menu' , isDisabled: true},
   { href: '/sign', title: 'Sign' , isDisabled: true},
   { href: '/card', title: 'Card' , isDisabled: true},
   { href: '/collapsible', title: 'Collapsible' , isDisabled: false},
   { href: '/data-table', title: 'Data Table' , isDisabled: true},
   { href: '/loader', title: 'Loader' , isDisabled: false},
   { href: '/notification', title: 'Notification' , isDisabled: true},
   { href: '/spacer', title: 'Spacer' , isDisabled: true},
   { href: '/stat', title: 'Stat' , isDisabled: false},
   { href: '/table', title: 'Table' , isDisabled: true},
   { href: '/title', title: 'Title' , isDisabled: true},
   { href: '/preview', title: 'Preview', isDisabled: true }
];
