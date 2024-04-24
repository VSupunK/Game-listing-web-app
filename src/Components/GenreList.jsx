import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function GenreList({ genreId,selectedGenresName }) {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, []);

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        });
    };

    return (
        <div className='px-6'>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>

            {genreList.map((item, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setActiveIndex(index);
                        genreId(item.id);
                        selectedGenresName(item.name);
                    }}
                    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-slate-400 p-2 rounded-lg group hover:dark:bg-gray-950 
                        ${activeIndex === index ? 'bg-slate-400 dark:bg-gray-950' : ''}`}>
                    <img
                        src={item.image_background}
                        alt={item.name}
                        className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 
                            ${activeIndex === index ? 'scale-105' : ''}`} />
                    <h3 className={`dark:text-white text-[18px] font-thin group-hover:font-bold transition-all ease-out duration-300 
                        ${activeIndex === index ? 'font-bold' : ''}`}>
                        {item.name}
                    </h3>
                </div>
            ))}
        </div>
    );
}

export default GenreList;
