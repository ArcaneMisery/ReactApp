
export function getMemeGeneratorForm(value?: {topText: string, bottomText: string}) {
    return {
        topText: value?.topText || null,
        bottomText: value?.bottomText || null
    };
}