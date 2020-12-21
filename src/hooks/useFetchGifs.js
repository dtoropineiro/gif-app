import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const timeout = 1000;
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(images => {

            setTimeout(() => {
                setState({
                    data: images,
                    loading: false
            });
            }, timeout);
        })
    },[category]);

    return state; //{data: [], loading: true};
}