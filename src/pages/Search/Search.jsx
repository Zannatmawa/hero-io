import React, { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");


    return (
        <div>
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input value={search}
                    onChange={(e) => setSearch(e.target.value)} className='w-[350px]' type="search" required placeholder="Search" />
                <button className="btn btn-primary">Search</button>
            </label>

            {

            }

        </div>
    )
}

export default Search