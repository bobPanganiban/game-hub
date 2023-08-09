const getCroppedImageUrl = (url: string) => {
    console.log(url)
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);

    return newUrl;
}

export default getCroppedImageUrl;