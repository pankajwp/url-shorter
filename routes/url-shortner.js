const validUrl = require("valid-url");
const shortid = require("shortid");
const IPinfo = require("node-ipinfo");
const keys = require("../config/dev");

//console.log(keys.asn);

const ipinfo = new IPinfo(keys.token);

module.exports = async (app, db) => {
    app.post("/api/short", async (req, res) => {
        const { originalUrl } = req.body;
        if (validUrl.isUri(originalUrl)) {
        } else {
            return res.status(404).json("Invalid Url format");
        }

        try {
            const checkUrl = await db.Url.findOne({ where: { originalUrl } });
            if (checkUrl !== null) {
                return res.status(200).json(checkUrl);
            } else {
                const mainUrl = "http://localhost:3000";
                const uniqueCode = shortid.generate();
                const shortUrl = mainUrl + "/" + uniqueCode;
                const url = { originalUrl, mainUrl, shortUrl, uniqueCode };
                const savedUrl = await db.Url.create(url);
                return res.status(200).json(savedUrl);
            }
        } catch (error) {
            return res.status(404).json({ error });
        }
    });

    app.get("/api/short/:item/:ip", async (req, res) => {
        const utlCode = req.params.item.trim();
        const ipAdd = req.params.ip.trim();
        const fetchUrl = await db.Url.findOne({
            where: { uniqueCode: utlCode },
        });
        if (fetchUrl !== null) {
            try {
                let countryLocation = null;
                let ipAddress = ipAdd !== "undefined" ? ipAdd : null;
                if (ipAddress !== null) {
                    const { asn, hostname, city } = await ipinfo.lookupIp(
                        ipAddress
                    );
                    if (typeof asn !== "undefined") {
                        const { asnf, name, country } = await ipinfo.lookupASN(
                            asn.asn
                        );
                        countryLocation = country;
                    }
                }
                const urlStatObj = {
                    urlId: fetchUrl.id,
                    location: countryLocation,
                    ip: ipAddress,
                };
                const saveStats = await db.UrlStats.create(urlStatObj);
                // console.log(saveStats);
                return res.redirect(fetchUrl.originalUrl);
            } catch (err) {
                console.log(err);
                return res.redirect("http://localhost:3000");
            }
        } else {
            return res.redirect("http://localhost:3000");
        }
    });

    app.get("/api/url-stats", async (req, res) => {
        try {
            const stats = await db.Url.findAll({ include: [db.UrlStats] });
            return res.status(200).json(stats);
        } catch (err) {
            return res.status(404).json(err);
        }
    });
};
