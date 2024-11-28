// If-Else  ve swich case suallari

// 1)Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən
//  if-else if-else konstruksiyasını yaradın.

let number = 5;
let zero = 0

if (number > zero) {
    console.log("Daxil etdiyiniz rəqəm müsbət bir rəqəmdir.");
} else if (number < zero) {
    console.log("Daxil etdiyiniz rəqəm mənfi bir rəqəmdir.");
} else {
    console.log("Daxil etdiyiniz rəqəm 0'dır.");
}

// 2)
// Müəyyən bir istifadəçi roluna
//  (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları
//  qaytaran keçid-case strukturunu yazın.

let istifadeciRolu = "Baş Admin";

switch(istifadeciRolu) {
    case "Admin": console.log("İstifadəçinin rolu Admindir.");
    break
    case "İstifadəçi": console.log("İstifadəçinin rolu İstifadəçidir.");
    break
    case "Qonaq": console.log("İstifadəçinin rolu Qonaqdır.");
    break
    default: console.log("İstifadəçi rolu düzgün yazılmayıb!")
}

// 3)
// Ədədin cüt və ya tək olduğunu müəyyən edən if-else 
// konstruksiyasını yazın.

let num1 = 5;

if (num1 % 2 == 0) {
    console.log(`${num1} cüt ədəddir.`);
} else {
    console.log(`${num1} tək ədəddir.`); // num1 % 2 == 1
}

// (==, ===, !==, <=, =>) isdifade edilecek suallar:
// 5)
// == və === operatorları arasındakı fərqi göstərən numune 
// yazın.

let number1 = 5;
let number2 = "5";

if (number1 == number2) {
    console.log("Rəqəmlər bərabərdir.") // TRUE
} else {
    console.log("Rəqəmlər bərabər deyil.") // FALSE
}

// NOT 1: BURDA TİPLƏRİ FƏRQLİ OLSA BELƏ RƏQƏMLƏR EYNİ OLDUĞU ÜÇÜN TRUE OLUR.

console.log(number1 === number2); // FALSE

// NOT 2: BURDA RƏQƏMLƏR EYNİ OLSA BELƏ TİPLƏRİ FƏRQLİDİ ONA GÖRƏ DƏ NƏTİCƏ FALSE OLUR
// NOT 3: AMMA ƏGƏR number2 = 5 OLSAYDI NƏTİCƏ TRUE OLACAQDI ÇÜNKİ TİPLƏRİ DƏ EYNİ OLARDI


// 6)
// !== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını 
// yoxlayan ifadə yaradın.

let a = 9;

if (a !== 10) {
    console.log("a 10'a bərabər deyil.")
} else {
    console.log("a 10'a bərabərdir.")
}


// 7)
// Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.

let b = 13;
let minEded = 5;
let maxEded = 10;

if (b > minEded && b < maxEded) {
    console.log(`${b} ədədi ${minEded}'dən böyük və ${maxEded}'dən kiçikdir.`);
} else if (b == minEded && b < maxEded) {
    console.log(`${b} ədədi ${minEded}'ə bərabərdir və ${maxEded}'dan kiçikdir.`)
} else if (b == maxEded && b > minEded) {
    console.log(`${b} ədədi ${maxEded}'ə bərabərdir və ${minEded}'dan böyükdür.`)
} else {
    console.log(`${b} ədədi ${minEded}'dən kiçik və ya ${maxEded}'dən böyükdür.`);
}

// 8)
// Əgər varsa istifadəçi adı dəyişənini, əks halda
//  isə "Anonim"i qaytaran nullish coalescing  operatorundan 
// istifadə edin.

// Məntiqi Operatorlar (!, ||, &&)

// 9)Boolean dəyərinin tərsini qaytaran ifadə yazın.
    

// 10)
// Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

let ad = "Elnur"; // AD YUSİF OLMADIĞI ÜÇÜN ELSE İŞƏ DÜŞƏCƏK ÇÜNKİ && İŞARƏSİ İKİ MƏLUMATIN DA DOĞRU OLMASINI TƏLƏB EDİR
let soyad = "Gaziyev";

console.log("Zəhmət olmasa ad və soyadınızı qeyd edin!")
if (ad == "Yusif" && soyad == "Gaziyev") {
    console.log("Ad və soyadınız doğrudur.")
} else {
    console.log("Zəhmət olmasa ad və ya soyadınızı düzgün qeyd edin")
}

// 11)
// İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan 
// ||. ifadə yaratmaq.

let ingilisDiliBiliyi = true;
let menimSenedim = "IELTS Sertifikatı";

if (ingilisDiliBiliyi == true) {
    if (menimSenedim == "IELTS Sertifikatı" || menimSenedim == "TOEFL Sertifikatı") {
        console.log("Siz Avropa da təhsil üçün müraciət edə bilərsiniz.")
    } else {
        console.log("Sizin IELTS və ya TOEFL sertifikatınız olmadığı üçün Avropa'da təhsil ala bilməzsiniz!")
    }
} else {
    console.log("Sizin ingilis dili biliyiniz yoxdur!")
}

// 12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.

let eded = -7;

if (eded > 0 && eded % 2 == 0) {
    console.log(`${eded} həm müsbət həm də cüt ədəddir.`)
} else if (eded < 0) {
    console.log(`${eded} mənfi bir ədəddir.`)
} else if (eded > 0 && eded % 2 == 1) {
    console.log(`${eded} müsbət bir ədəd olsa belə tək ədəddir.`);
} else {
    console.log(`${eded} müsbət bir rəqəm və ya ədəd deyil!`)
}

// 13)
// İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.

let nickname = "yusif";
let parol = 12345;

if (nickname == "yusif" && parol == 12345) {
    console.log("İstifadəçi adı və şifrə doğrudur.")
} else if (nickname !== "yusif" && parol !== 12345) {
    console.log("İstifadəçi adı və şifrə yanlışdır.")
} else {
    console.log("İstifadəçi adı və ya şifrə yanlışdır.")
}

// 14)
// Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.

let eded1 = 1;

if (eded1 <= 0) {
    switch (eded1) {
        case 0:
            console.log(`${eded1} sıfırdır.`)
            break;
        default:
            console.log(`${eded1} mənfi bir ədəddir.`)
    }
} else {
    console.log(`${eded1} müsbət bir ədəd ola bilməz çünki ədədin mənfi və ya 0 olduğunu yoxlayırıq!`)
}