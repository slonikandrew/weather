import { GlobalSVGSelector } from '../../../../assets/icons/global/GlobalSVGSelector';
import { Weather } from '../../../../store/types/types';
import s from "./ThisDay.module.scss";

type Props = {
    weather: Weather;
}

  export const ThisDay = ({ weather }: Props) => {

    return(<div className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
                <div className={s.this__temp}>{Math.floor(weather.main.temp)}&#176;</div>
                <div className={s.this__day_name}>Сегодня</div>
            </div>
            <GlobalSVGSelector id="sun" />
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>Время: <span>21:54</span></div>
            <div className={s.this__city}>Санкт-Петербург</div>
        </div>
    </div>);
}