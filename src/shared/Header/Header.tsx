import Select, { StylesConfig } from 'react-select';
import { GlobalSVGSelector } from '../../assets/icons/global/GlobalSVGSelector';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import s from "./Header.module.scss";

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {

    const {theme, changeTheme} = useTheme();

    const options = [
        { value: 'spb', label: 'Санкт-Петербург' },
        { value: 'moscow', label: 'Москва' },
        { value: 'krsk', label: 'Красноярск' }
      ];

    const colourStyles: StylesConfig = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '204px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === Theme.DARK ? '#fff' : '#000'
        })
    };    

    function setTheme() {
        changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return(<header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSVGSelector id="header-logo"/>
            </div>
            <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme} onClick={setTheme}>
                <GlobalSVGSelector id="change-theme"/>                
            </div>
            <Select defaultValue={options[0]} options={options} styles={colourStyles} />
        </div>
    </header>);
}