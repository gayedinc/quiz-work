let score = 0;
let totalQuestions = 10;

// Soru 1
let answer1 = prompt("Javascript Quiz'e hoş geldiniz.\nQuiz 10 sorudan oluşmaktadır. Seçtiğiniz şıkkı cevap kutusuna yazabilirsiniz.\n1. Soru\nCSS hangi yapıda uygulanır?\na) HTML dosyasında\nb) JavaScript dosyasında\nc) Sadece CSS dosyasında\nd) Tüm dosyalarda");
if (answer1 === "a") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
} else if (answer1 !== "a") {
  alert('Yanlış cevap verdiniz. Doğru cevap: a)  HTML dosyasında')
}

// Soru 2
let answer2 = prompt("2. Soru\nCSS’de hangi seçici tüm HTML öğelerini hedefler?\na) .classname\nb) #\nc) *\nd) element adı");
if (answer2 === "c") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer2 !== "c") {
  alert('Yanlış cevap verdiniz. Doğru cevap: c) *')
}

// Soru 3
let answer3 = prompt("3. Soru\nCSS’de float özelliği ne için kullanılır?\na) Öğeyi sayfanın ortasına yerleştirmek için\nb) Öğeleri yan yana dizmek için\nc) Öğenin arka plan rengini ayarlamak için\nd) Öğenin yazı tipini değiştirmek için");
if (answer3 === "b") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer3 !== "b") {
  alert('Yanlış cevap verdiniz. Doğru cevap: b) Öğeleri yan yana dizmek için')
}

// Soru 4
let answer4 = prompt("4. Soru\nborder: 1px solid black;\n bu kod parçası ne ifade eder?\na) Tüm kenar boşluklarını 1px yapar.\nb) Kenar çizgisi ekler.\nc) Öğeyi gizler.\nd) Metni kalın yapar.");
if (answer4 === "b") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer4 !== "b") {
  alert('Yanlış cevap verdiniz. Doğru cevap: b) Kenar çizgisi ekler.')
}

// Soru 5
let answer5 = prompt("5. Soru\nflex düzeni, hangi CSS özelliği ile kullanılır?\na) display\nb) position\nc) float\nd) overflow");
if (answer5 === "a") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer5 !== "a") {
  alert('Yanlış cevap verdiniz. Doğru cevap: a) display')
}

// Soru 6
let answer6 = prompt("6. Soru\nCSS'de hangi özelliği kullanarak metni büyük harfe dönüştürebilirsiniz?\na) text-transform\nb) text-size\nc) text-style\nd) font-transform");
if (answer6 === "a") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer6 !== "a") {
  alert('Yanlış cevap verdiniz. Doğru cevap: a) text-transform')
}

// Soru 7
let answer7 = prompt("7. Soru\nZ-index özelliği hangi durumda kullanılır?\na) Öğelerin arka plan rengini ayarlamak için\nb) Öğelerin sayfa üzerindeki yığılma sırasını kontrol etmek için\nc) Metinlerin boyutunu değiştirmek için\nd) Öğelerin kenar boşluklarını ayarlamak için");
if (answer7 === "b") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer7 !== "b") {
  alert('Yanlış cevap verdiniz. Doğru cevap: b) Öğelerin sayfa üzerindeki yığılma sırasını kontrol etmek için.')
}

// Soru 8
let answer8 = prompt("8. Soru\nCSS custom properties (değişkenler) ile ilgili aşağıdakilerden hangisi doğrudur?\na) Sadece renk değerlerini saklamak için kullanılır.\nb) Değişkenler yalnızca JavaScript ile erişilebilir.\nc) CSS değişkenleri, -- ile başlayan özel adlara sahiptir.\nd) Değişkenler sadece bir kez tanımlanabilir.");
if (answer8 === "c") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer8 !== "c") {
  alert('Yanlış cevap verdiniz. Doğru cevap: c) CSS değişkenleri, -- ile başlayan özel adlara sahiptir.')
}

// Soru 9
let answer9 = prompt("9. Soru\nposition özelliği ile ilgili olarak aşağıdakilerden hangisi yanlıştır?\na) absolute konumlandırma, öğeyi normal akıştan çıkarır.\nb) fixed konumlandırma, öğeyi sayfaya sabitler ve kaydırıldığında yerini korur.\nc) sticky konumlandırma, öğeyi belirli bir noktada sabitler.\nd) static konumlandırma, öğeyi diğer öğelere göre esnek bir şekilde ayarlar.");
if (answer9 === "d") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer9 !== "d") {
  alert('Yanlış cevap verdiniz. Doğru cevap: d) static konumlandırma, öğeyi diğer öğelere göre esnek bir şekilde ayarlar.')
}

// Soru 10
let answer10 = prompt("10. Soru\nCSS'de calc() fonksiyonu ne için kullanılır?\na) Öğelerin boyutunu hesaplamak için\nb) Animasyon süresini ayarlamak için\nc) Metin rengini ayarlamak için\nd) Öğenin yazı tipini değiştirmek için");
if (answer10 === "a") {
  score++;
  alert('Tebrikler! Cevabınız doğru.')
}
else if (answer10 !== "a") {
  alert('Yanlış cevap verdiniz. Doğru cevap: a) Öğelerin boyutunu hesaplamak için')
}

// Sonuçları göster
alert("Toplam " + score + " doğru, " + (totalQuestions - score) + " yanlış yaptınız.");
