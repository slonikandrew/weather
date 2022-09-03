import React, {useEffect, useState} from 'react';
import Select, { StylesConfig } from 'react-select';
import { GlobalSVGSelector } from '../../assets/icons/global/GlobalSVGSelector';
import s from "./Header.module.scss";

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {

    const [theme, setTheme] = useState('light');

    const options = [
        { value: 'spb', label: 'Санкт-Петербург' },
        { value: 'moscow', label: 'Москва' },
        { value: 'krsk', label: 'Красноярск' }
      ];

    const colourStyles: StylesConfig = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '204px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000'
        })
    };    

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');        
    }

    useEffect(() => {
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
        
    }, [theme]);

    return(<header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSVGSelector id="header-logo"/>
            </div>
            <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                <GlobalSVGSelector id="change-theme"/>                
            </div>
            <Select defaultValue={options[0]} options={options} styles={colourStyles} />
        </div>
    </header>);
}