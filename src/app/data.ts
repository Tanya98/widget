import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IInfo {
    img: string;
    img2: string;
    title: string;
    address: string;
    phone: number;
    weather: {
        title: string;
        icon: string;
        water: number;
        temperature: number;
    };
    social_info: {
        title: string;
        img: string;
        followers: number;
        following: number;
    };
    type: string;
}

const _data: IInfo[] = [
    {
        img: 'assets/images/marina-bay-sands.jpg',
        img2: 'assets/images/tour-marina-bay.jpg',
        title: 'Marina Bay Sands',
        address: '10 Bayfront Ave, Сингапур 018956',
        phone: 6566888868,
        weather: {
            title: 'Marina Bay Sands',
            icon: 'assets/images/cloudy.png',
            water: 23,
            temperature: 30
        },
        social_info: {
            title: 'Marina Bay Sands',
            img: 'assets/images/marina-bay-sands.jpg',
            followers: 2850,
            following: 675,
        },
        type: 'hotel'
    },
    {
        img: 'assets/images/abu-dabi.jpg',
        img2: 'assets/images/tour-abu-dabi.jpg',
        title: 'Emirates Palace',
        address: 'West Corniche Road - ОАЭ',
        phone: 97126909000,
        weather: {
            title: 'Emirates Palace',
            icon: 'assets/images/cloudy.png',
            water: 25,
            temperature: 35
        },
        social_info: {
            title: 'Emirates Palace',
            img: 'assets/images/abu-dabi.jpg',
            followers: 3030,
            following: 889,
        },
        type: 'hotel'
    },
    {
        img: 'assets/images/sheraton-hotel.jpg',
        img2: 'assets/images/tour-shoraton.jpg',
        title: 'Sheraton Spring Resort',
        address: '5858 Taihu Rd, Wuxing Qu, Huzhou Shi',
        phone: 865722299999,
        weather: {
            title: 'Sheraton Spring Resort',
            icon: 'assets/images/cloudy.png',
            water: 24,
            temperature: 28
        },
        social_info: {
            title: 'Sheraton Spring Resort',
            img: 'assets/images/sheraton-hotel.jpg',
            followers: 2345,
            following: 768,
        },
        type: 'hotel'
    },
    {
        img: 'assets/images/marina-bay-sands.jpg',
        img2: 'assets/images/fishing-singapure.jpg',
        title: 'Longkang Fishing',
        address: '71, Jalan Lekar,Singapore 698950',
        phone: 6566888868,
        weather: {
            title: 'Longkang Fishing ',
            icon: 'assets/images/cloudy.png',
            water: 23,
            temperature: 30
        },
        social_info: {
            title: 'Longkang Fishing',
            img: 'assets/images/marina-bay-sands.jpg',
            followers: 2850,
            following: 675,
        },
        type: 'fishing'
    },
    {
        img: 'assets/images/abu-dabi.jpg',
        img2: 'assets/images/fishing-emirates.jpg',
        title: 'Finishing Touch Dubai',
        address: 'Unit 16, Promenade Level, Cluster',
        phone: 97126909000,
        weather: {
            title: 'Emirates Palace',
            icon: 'assets/images/cloudy.png',
            water: 25,
            temperature: 35
        },
        social_info: {
            title: 'Finishing Touch Dubai',
            img: 'assets/images/abu-dabi.jpg',
            followers: 3030,
            following: 889,
        },
        type: 'fishing'
    },
    {
        img: 'assets/images/sheraton-hotel.jpg',
        img2: 'assets/images/fishing-shoraton.jpg',
        title: 'China Tours Finishing',
        address: '5858 Taihu Rd, Wuxing Qu',
        phone: 865722299999,
        weather: {
            title: 'China Tours Finishing',
            icon: 'assets/images/cloudy.png',
            water: 24,
            temperature: 28
        },
        social_info: {
            title: 'China Tours Finishing',
            img: 'assets/images/sheraton-hotel.jpg',
            followers: 2345,
            following: 768,
        },
        type: 'fishing'
    },
    {
        img: 'assets/images/marina-bay-sands.jpg',
        img2: 'assets/images/tour-marina-bay.jpg',
        title: 'Sentosa',
        address: 'Сентоса, Сингапур',
        phone: 865722299999,
        weather: {
            title: 'Sentosa',
            icon: 'assets/images/cloudy.png',
            water: 24,
            temperature: 28
        },
        social_info: {
            title: 'Sentosa',
            img: 'assets/images/marina-bay-sands.jpg',
            followers: 2345,
            following: 768,
        },
        type: 'tour'
    },
];
export const data$: Observable<IInfo[]> = of(_data)
    .pipe(
        delay(3000),
    );
