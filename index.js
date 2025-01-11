async function generateImage() {
  const prompt = document.getElementById('prompt').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = '⏳ Görsel üretiliyor...';

  try {
    const response = await fetch(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`);

    if (response.ok) {
      const imageUrl = response.url;
      resultDiv.innerHTML = `<img src="${imageUrl}" alt="Üretilen Görsel" style="width:100%; border-radius:8px;">`;
    } else {
      resultDiv.innerText = '❌ Görsel üretilemedi!';
      console.error('Hata:', response.status, response.statusText);
    }
  } catch (error) {
    resultDiv.innerText = '❌ Bir hata oluştu!';
    console.error('Hata:', error);
  }
}
