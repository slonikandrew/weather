import React from 'react';
import { ThisDay } from './components/ThisDay/ThisDay';
import s from "./Home.module.scss";

interface HomeProps {

}

export const Home = (props: HomeProps) => {
    return(<div className={s.home}>
        <ThisDay />
    </div>);
}