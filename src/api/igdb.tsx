export default async function handler(req: any, res: any) {
    const CLIENT_ID = "YOUR_TWITCH_CLIENT_ID";
    const CLIENT_SECRET = "YOUR_TWITCH_CLIENT_SECRET";

    const tokenRes = await fetch(
        `https://id.twitch.tv/oauth2/token` +
        `?client_id=${CLIENT_ID}` +
        `&client_secret=${CLIENT_SECRET}` +
        `&grant_type=client_credentials`,
        { method: "POST" }
    );

    const { access_token } = await tokenRes.json();

    const igdbRes = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
            "Client-ID": CLIENT_ID,
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "text/plain",
        },
        body: `
      fields name, cover.url, rating;
      where rating > 80 & cover != null;
      sort rating desc;
      limit 10;
    `,


    });

    const data = await igdbRes.json();
    res.status(200).json(data);
}
