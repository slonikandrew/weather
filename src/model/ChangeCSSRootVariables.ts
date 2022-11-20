import { Theme } from "../context/ThemeContext";

export function changeCSSRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
        '--body-background',
        '--components-background', 
        '--card-background', 
        '--card-shadow', 
        '--text-color'
    ];
    components.forEach(item => {
        root.style.setProperty(`${item}-default`, `var(${item}-${theme})`);
    });
}