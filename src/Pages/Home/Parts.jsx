import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch('parts.json').then(res => res.json()))

    return (
        <section className='my-20 lg:mx-28 md:mx-12 mx-6'>
            <div className="divider">
                <h1 className='text-center text-3xl uppercase tracking-wide'>All Car Parts</h1>
            </div>
            {
                isLoading ? <Loading /> : <div id='parts' className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        parts.slice(0, 6).map(part => <Part
                            key={part.id}
                            part={part}
                        ></Part>)
                    }
                </div>
            }
        </section>
    );
};

export default Parts;