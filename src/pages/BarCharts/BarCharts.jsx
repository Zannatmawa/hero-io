import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';


const Example = ({ apps }) => {

    return (
        <>
            {/* {
                apps.map((app, appIndex) => (
                    <>
                        {app.ratings.map((rating, ratingIndex) => (
                            <BarChart
                                key={ratingIndex}

                                width={150}
                                height={40}
                                data={[rating]}
                            >
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        ))}
                    </>
                ))
            } */}

            {/* {

                apps.map((app) => {
                    app.ratings.map((b) =>
                        <BarChart className='rotate-90' width={150} height={40} data={b}>
                            <Bar dataKey={b.count} fill="#8884d8" />
                        </BarChart>
                    )
                })

            } */}
        </>

    );
};

export default Example;
