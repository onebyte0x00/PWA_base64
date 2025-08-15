document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
    });
  });

  // Text encoding/decoding
  const textInput = document.getElementById('text-input');
  const textOutput = document.getElementById('text-output');
  
  document.getElementById('encode-text').addEventListener('click', () => {
    textOutput.value = btoa(textInput.value);
  });
  
  document.getElementById('decode-text').addEventListener('click', () => {
    try {
      textOutput.value = atob(textInput.value);
    } catch (e) {
      textOutput.value = "Invalid Base64!";
    }
  });
  
  document.getElementById('copy-text').addEventListener('click', () => {
    textOutput.select();
    document.execCommand('copy');
  });

  // Image encoding
  const imageInput = document.getElementById('image-input');
  const imageOutput = document.getElementById('image-output');
  const imagePreview = document.getElementById('image-preview');
  
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      imagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  });
  
  document.getElementById('encode-image').addEventListener('click', () => {
    const file = imageInput.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      imageOutput.value = event.target.result.split(',')[1] || event.target.result;
    };
    reader.readAsDataURL(file);
  });
  
  document.getElementById('copy-image').addEventListener('click', () => {
    imageOutput.select();
    document.execCommand('copy');
  });
});
