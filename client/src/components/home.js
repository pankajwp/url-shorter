import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

export default function Home() {
    const [shortUrl, setShortUrl] = useState(null);
    const [ipAdd, setIpAdd] = useState(null);

    const { handleSubmit, register, errors } = useForm({
        criteriaMode: "all",
    });

    async function getUrlData(e) {
        const ip = await axios.get("https://api.ipify.org?format=json");
        const data = await axios.post("/api/short", e);
        if (data.status === 200) {
            const dataRet = data.data;
            setShortUrl(dataRet.uniqueCode);
            setIpAdd(ip.data.ip);
        }
    }

    let shortUrlLink;
    if (shortUrl !== null) {
        const url = `api/short/${shortUrl}/${ipAdd}`;
        shortUrlLink = (
            <>
                <p>Here is your short URL:</p>
                <a target="_blank" rel="noopener noreferrer" href={url}>
                    shortUrl
                </a>
            </>
        );
    }

    return (
        <>
            <div className="row">
                <div className="col mt-5">
                    <form onSubmit={handleSubmit(getUrlData)}>
                        <div className="form-group">
                            <input
                                type="url"
                                className="form-control form-control-lg"
                                placeholder="* Please enter your url to be shorten"
                                name="originalUrl"
                                ref={register({
                                    required: "This input is required.",
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="originalUrl"
                                render={({ messages }) => {
                                    return messages
                                        ? Object.entries(messages).map(
                                              ([type, message]) => (
                                                  <p
                                                      className="error"
                                                      key={type}
                                                  >
                                                      {message}
                                                  </p>
                                              )
                                          )
                                        : null;
                                }}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn btn-info btn-block mt-4"
                        />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">{shortUrlLink}</div>
            </div>
        </>
    );
}
