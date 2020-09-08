import React, { useEffect, useState } from "react";
import axios from "axios";
import { uniqueCountries } from "../utils/countries";

export default function Stats() {
    console.count("stats");
    const [lists, setLists] = useState([]);
    useEffect(() => {
        async function fetchStats() {
            const res = await axios.get("/api/url-stats");
            if (res.status === 200) {
                setLists(res.data);
            }
        }

        fetchStats();
    }, []);

    let listRow = "Loading..";
    if (lists.length >= 1) {
        listRow = lists.map((item) => {
            return (
                <div key={item.id} className="row mb-5">
                    <div className="col">
                        {item.originalUrl}
                        <br />
                        {item.shortUrl}
                        <br />
                        Total Clicks: {item.url_stats.length}
                        <br />
                        Top Countries:{" "}
                        {uniqueCountries(item.url_stats)
                            .sort()
                            .join(", ")}
                    </div>
                </div>
            );
        });
    }

    return (
        <>
            {lists.length > 1 && <h2>Analytics</h2>}
            {listRow}
        </>
    );
}
