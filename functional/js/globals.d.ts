interface BabyNameRecord {
    name: string;
    sex: string;
    count: number;
}
declare const BABYNAMES: Array<BabyNameRecord>;

interface WeatherRecord {
    date: string;
    precipitation: number,
    tempMax: number,
    tempMin: number,
    rain: boolean
}
declare const WEATHER: Array<WeatherRecord>;
