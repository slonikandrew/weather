import React from 'react';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";

interface HomeProps {

}

export const Home = (props: HomeProps) => {
    return(<div className={s.home}>
        <div className={s.wrapper}>
            <ThisDay />
            <ThisDayInfo />
        </div>
        <Days />
    </div>);
}