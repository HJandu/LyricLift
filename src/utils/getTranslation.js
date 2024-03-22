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
                'X-RapidAPI-Key': 'b5872dee32msh3166213a4941ed6p1342a1jsnb11ef804b7de',
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
