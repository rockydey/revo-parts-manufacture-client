import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/part').then(res => res.json()))

    const start = parts?.length - 6;
    const end = parts?.length;

    return (
        <section className='my-20 lg:mx-28 md:mx-12 mx-6'>
            <div className="divider">
                <h1 className='text-center text-3xl uppercase tracking-wide'>All Car Parts</h1>
            </div>
            {
                isLoading ? <Loading /> : <div id='parts' className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        parts.slice(start, end).map(part => <Part
                            key={part._id}
                            part={part}
                        ></Part>)
                    }
                </div>
            }
        </section>
    );
};

export default Parts;