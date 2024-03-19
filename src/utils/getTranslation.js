import axios from 'axios';

export const getTranslation = async (lyrics) => {

    try {
        const options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: {
                'to[0]': 'en',
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
            },
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '2d1153971amsh42ff866e3a13899p10c022jsn5ea1c0841888',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            data: [
                {
                    Text: lyrics 
                }
            ]
        };

        const response = await axios.request(options);
        const translatedLyrics = response.data[0].translations[0].text;
        console.log("Translated Lyrics:", translatedLyrics) ;
        return translatedLyrics;
    } catch (error) {
        console.error("Error translating lyrics:", error);
    }
}
