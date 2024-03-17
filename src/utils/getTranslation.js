import translate from 'translate';

translate.engine = 'google';
translate.key = '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';

export async function translateText(text, target) {
    try {
        const translatedText = await translate(text, target);
        return translatedText;
    } catch (error) {
        console.error("Error translating text:", error);
        return null;
    }
}

