async function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = '⏳ Görsel üretiliyor...';

  try {
    const response = await fetch(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`);

    if (response.ok) {
      const imageUrl = response.url;  // Pollinations direkt URL döndürüyor.
      resultDiv.innerHTML = `<img src="${imageUrl}" alt="Üretilen Görsel">`;
    } else {
      resultDiv.innerText = '❌ Görsel üretilemedi!';
    }
  } catch (error) {
    resultDiv.innerText = '❌ Bir hata oluştu!';
    console.error('Hata:', error);
  }
}
