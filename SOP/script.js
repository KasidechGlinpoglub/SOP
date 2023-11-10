  // รอให้หน้าเว็บโหลดเสร็จแล้วค่อยเรียกฟังก์ชัน startAnimation()
  document.addEventListener('DOMContentLoaded', function () {
    startAnimation();
  });

  function startAnimation() {
    // ดึงอินสแตนซ์ของ <h1>, <p>, และ <img> มา
    const elementsToAnimate = document.querySelectorAll('h1, p, img');
    
    // เพิ่ม class "animate" เพื่อใช้กับแอนิเมชัน fadeInUp
    elementsToAnimate.forEach(element => {
      element.classList.add('animate');
    });
    
    // เริ่มแอนิเมชัน float โดยเพิ่ม class "float" เข้ากับ <img>
    const imagesToAnimate = document.querySelectorAll('img');
    imagesToAnimate.forEach(img => {
      img.classList.add('float');
    });
  }