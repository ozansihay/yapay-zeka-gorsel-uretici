async function generateImage() {
    const prompt = document.getElementById('prompt').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '⏳ Görsel üretiliyor...';

    try {
        const response = await fetch(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`);
        
        if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            resultDiv.innerHTML = `<img src="${imageUrl}" alt="Üretilen Görsel">`;
        } else {
            resultDiv.innerText = '❌ Görsel üretilemedi!';
            console.error('Sunucu hatası:', response.status, response.statusText);
        }
    } catch (error) {
        resultDiv.innerText = '❌ Bir hata oluştu!';
        console.error('Hata:', error);
    }
}
