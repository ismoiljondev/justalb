"use client";
import Link from "next/link";
import "./honor.css";
import { useState } from "react";

const Honor = () => {
  const [cn, setCn] = useState("");

  const change = () => {
    setCn("anim");

    setTimeout(() => {
      setCn("");
    }, 1500);
  };

  return (
    <>
      <div className="bg-wework p-20">
        <p className="text-6xl font-medium text-center">Sharaf Kodeksi</p>
      </div>
      <h3 className=" p-5 text-4xl lg:pl-36">Albison Sharaf Kodeksi</h3>
      <main className="p-5 reswidth mb-72 lg:pl-36">
        <p>
          Bir talabani noldan o'qitib toki uni dasturchi qilib tayyorlash va ish
          bilan ta'minlash uchun har bir talabaga Albison IT kompaniyasi
          o'rtacha 2000$ sarflaydi. Nimaga aynan 2000$? Pastda{" "}
          <a onClick={change} className="text-blue" href={"/honor#second"}>
            batafsil*
          </a>{" "}
          <br />
          <br />
          Albison Akademyasi tomonidan taqdim etilgan kurs yurtimizda yagona
          ekanligini sababli qonunchiligimizga zid kelmaydigan qoidalar asosida
          ta'lim berib, dasturlashni o'rganishni boshlagandan dasturchi bo'lib
          ish topishgacha bo'lgan Ushbu kodeks Albison Akademyasi va bilim
          olmoqchi bo'lgan talabalarni haq-huqlarini himoya qilish uchun
          yaratilgan. Chet elda "Honor Code" - "Sharaf kodeksi" deb ataladigan
          tizimni milliy modulini ishlab chiqishning asosiy maqsadi yurtimizda
          ishonch asosida ta'lim berish va uni nazorat qilish bo'yicha
          tamoyillarni ommaga taqdim etishdan iborat. Albison oʻquv
          materiallarining barcha foydalanuvchilardan Albison taʼlim
          tajribasidan kelib chiqqan holda, ta'lim sifatini taʼminlash uchun
          quyidagi standartlarga rioya qilishlari shart. Barcha talabalar
          Albison kurslaridan foydalanish shartlari va har qanday xulq-atvor
          qoidalari, shu bilan birga Albison Akademyasi tomonidan
          shaklantirilgan dastur asosida ta'lim olishi va tashkilot tomonidan
          tuzilgan qonun-qoidalarga amal qilishi talab etiladi. Ta'lim olish
          mobaynida noto'g'ri xatti-harakatlar va qoidalarga amal qilmaslik
          Albison taqdim etayotgan ta'lim sifatiga ta'siri sababli talaba
          kursdan chetlatilishi mumkin. <br />
          <br /> Sharaf kodeksi tinglovchilarning yoshi, ta'lim olish salohiyati
          va yashash muhitidan kelib chiqqan holda o'zlariga tegishli ravishda
          quyidagi bo'limlardan tashkil topgan. <br />
          <br />{" "}
          <strong>
            Hurmatli ota-onalar dasturlash bu kompyuter oldida o'yin o'ynab
            o'tirish emas, balki aql idrokni ishlatib, kerak bo'lsa bir kichik
            masalaga yechim topish uchun soatlab vaqt sarflash va tinimsiz bilim
            olishdan iborat. Voyaga yetmagan tinglovchilar ularning ota-onalari
            yoki o'rnini bosuvchi shaxslar tomonidan roziligi va sharaf kodeksi
            bilan to'liq tanishib chiqqanlaridan so'ng ta'lim olishlari mumkin:
          </strong>
          <br />
          <br />
          <i>
            <b>12 yoshgacha bo'lgan tinglovchilar</b>
          </i>
          <br />
          <span>
            Albison Akademyasi bu yoshdagi tinglovchilarni dasturlash kurslariga
            qabul qilmaydi. Ota-onalarga farzandi ingliz tili va matematikani
            mustahkam o'rganishi uchun barcha sharoitlarni yaratib berishlarini
            tavsiya etamiz.
          </span>
          <br />
          <br />
          <i>
            <b>12- 18 yoshgacha bo'lgan tinglovchilar</b>
          </i>
          <br />
          <span>
            Albison Akademyasi bu yoshdagi tinglovchilarni shartli ravishda
            dasturlash kurslariga qabul qilishimiz mumkin. Bu yoshda miyaning
            kognitiv tizimini rivojlantirish o'ta muhim. Farzandingiz ingliz
            tilini mukammal o'rganishi nafaqat keyinchalik dasturlash kasbini
            tezroq egallashiga sabab bo'ladi, balki dunyo qarashi ham kengayib
            dasturlashni o'zi uchun kerak yoki kerak emasligini aniqlab oladi.
            Eng muhimi o'zi nima o'rganayotgani va nima uchun o'rganayotganini
            anglab yetadi. Demak ingliz tili yuqori darajada biladigan
            tinglovchilar dasturlashni tezroq agar mantiqiy fikrlashi ham kuchli
            bo'lsa dasturlashni mukammal o'rgana oladi. <br />
            <br />
            <strong>
              Yuqoridagi tavsiyalarimiz sizga maqul kelmasa farzandingizni
              boshqa dasturlash kurslariga yo'naltirishingiz mumkin. Lekin hech
              qachon farzandizni o'zi xohlamagan va qiziqmagan sohani
              o'rganishga majburlamang.
            </strong>
          </span>
          <br />
          <br />
          <i>
            <b>28 yoshdan katta bo'lgan tinglovchilar</b>
          </i>
          <br />
          <span>
            Ko'p hollarda bu yoshdagi tinglovchilarning asosiy ishi bo'ladi va
            dasturlashni ikkinchi darajadagi soha sifatida ko'radilar. Shu
            sababdan tinglovchilar dasturlashni o'rganish uchun har kuni kamida
            besh soatdan ajrata olmaganliklari sababli biz dasturlash
            kurslarimizga qabul qila olmaymiz.
          </span>
          <br />
          <br />
          <i>
            <b>18-28 yoshgacha bo'lgan tinglovchilar.</b>
          </i>
          <br />
          <span>
            Bu yoshdagi tinglovchilar bizning potensial talabalarimiz
            hisoblanib, dasturlash kurslarini o'rganishlari uchun Albison
            Akademyasi tomonidan shartlar belgilangan. Dasturlash kurslarida
            ta'lim olish uchun tinglovchilar quyidagi shartlarni o'qib chiqib
            barcha shartlarga roziliklarini bildiradilar:
            <br />
          </span>
        </p>

        <br />

        <ol className="list-decimal">
          <li>
            <strong>Kursga ro'yxatdan o'tish:</strong> talaba grant asosida
            ta'lim olishi uchun Albison Akademiyasida ro'yxatdan o'tishi uchun
            bir martalik ro'yxatdan o'tish to'lovini amalga oshirishi shart. Bu
            to'lov xizmat ko'rsatish uchun to'lov hisoblanmaydi va barcha grant
            kurslar tinglovchilaridan oyma-oy to'lov talab qilinmasligi va shu
            bilan birga tinglovchi akademiya tomonidan belgilangan
            qonun-qoidalar asosida sifatli ta'lim olishini ta'minlaydi. Grant
            kurslardan kompaniya hech qanday moddiy foyda ko'rmasligi va
            tinglovchi tomonidan ro'yxatdan o'tish to'lovi dasturlash kursini
            to'liq yakunlashi va texnik suhbatdan muvafaqqiyatli o'tganidan
            so'ng tinglovchiga rag'batlantirish sifatida qaytarib berilishi
            mumkin. Aksariyat hollorda tinglovchilar dasturlashni o'rganishga
            beparvolik bilan qarab,<span id="second"> Albison Akademyasi</span>
            tomonidan taqdim etilayotgan grant kurslarini suiisteʼmol qilishi
            ya'ni dasturlash kurslarini tugatmasdan kursni tashlab ketish,
            ustozlarga nisbatan hurmatsizlik qilish va berilgan vazifalarga
            jiddiy yondashmaslik kuzatilishi mumkin. Bu kabi holatlarda Albison
            Akademyasi tinglovchini kursdan chetlatish sababi bilan tanishtirgan
            holda kursdan chetlatadi.
          </li>
          <br />
          <li className={cn}>
            <strong>2000$ lik dasturlash kursi:</strong> *qanday qilib Albison
            Akademyasi 2000$ lik kursni bepul taqdim etishi mumkin degan savol
            hammani qiziqtiradi. Grant kurslar hech davlat yoki nodavlat
            tashkiloti tomonidan moliyalashtirilmagan. Bundan tashqari
            jamoamizdagi har bir ustoz ixtiryoriy volontyorlik asosida ishlaydi.
            Aslida har bir dasturchining vaqti pul bilan o'lchanib, har bir dars
            o'tadigan, uyga vazifa tekshiradigan, loyihalarda ishlashni
            o'rgatadigan va suhbatga tayyorlaydigan "senyor" dasturchilar, o'quv
            dasturini ishlab chiqadigan ustozlar daromadsiz sizlar uchun vaqt
            ajratadilar. Ushbu eslatma tinglovchi qanday kursda ta'lim
            olayotgani va ularga sarflanadigan resurslarni qadriga yetishi hamda
            ustozlarga bo'lgan hurmatni hech qachon yo'qotmasligi shart
            ekanligini bildiradi. Tinglovchilarga sifatli ta'lim berish
            maqsadida ustozlar tarkibi kompaniya dasturchilari ichidan saralab
            olinadi. Barcha ustozlarning bilim berish saviyasi yuqori bo'lgani
            sababli grant kurs davomida tinglovchilar har xil ustozlarda ta'lim
            olishlari mumkin. Tinglovchi tomonidan ustozlarga nisbatan
            tajavuzkorlik yoki agressiv harakatlar kuzatilgan holatlarda
            tinglovchi tushuntirishlarsiz kursdan chetlatiladi hamda yetkazilgan
            zarar O'zbekiston Respublikasining belgilangan qonunchiligiga binoan
            chora ko'riladi.
          </li>
          <br />
          <li>
            <strong>O'quv materiallari:</strong> grant kurslar o'quv
            materiallari Albison Akademyasi tomonidan tuzilgan va kompaniya
            mulki hisoblanadi. Ushbu materiallar video darsliklar, nazariy va
            amaliy mashqlarning elektron shakli, o'quv dasturi, uyga vazifa va
            yakuniy imtihonlar uchun loyihalarning barchasi kompaniya tomonidan
            tuzilgan bo'lib ulardan barcha tinglovchilar bepul foydalanishga
            haqlidir. Agar tinglovchilar tomonidan ularga taqdim etilgan o'quv
            materiallari jismoniy yoki yuridik shaxslar tomonidan tijorat
            maqsadida tarqatilayotgani ma'lum bo'lsa tinglovchi kursdan
            chetlatiladi hamda O'zbekiston Respublikasining qonunchiligiga
            binoan mualliflik huquqini buzganlik bo'yicha jazo qo'llaniladi.
            Izoh: biz hech qachon sifatli ta'lim berib, ularni ish bilan
            ta'minlay oladigan grant kurslar ochilishiga va bizning o'quv
            materillarimizdan foydalanishiga qarshi emasmiz. Lekin ba'zi
            hollarda tinglovchilarimiz dasturlash kursini to'liq tugatmasdan
            o'quv markazlarida bizning o'quv materiallarimizdan foydalangan
            holda ta'lim berishlari kuzatilmoqda. Shu sababdan o'quv
            materiallaridan faqat shaxsiy maqsadlarda foydalanishingiz maqsadga
            muvofiq.
          </li>
          <br />
          <li>
            <strong>Halollik va rostgo'ylik: </strong>
            dasturlash kurslarini o'rganishni boshlagan har bir tinglovchi dars
            jarayonidan tashqari o'rganish jarayoni uchun javobgar. Albison
            Akademyasi dars berish tizimi ham ishonch asosida yaratilgan bo'lib,
            biz har bir tinglovchi dars jarayonida va darsdan tashqari
            beriladigan har bir topshiriqni o'zi bajarishiga ishonamiz. Uyga
            vazifa, oraliq va yakuniy imtihonlar har doim tinglovchi tomonidan
            bajarilishi va boshqa kurs tinglovchilardan ko'chirmasligi talab
            etiladi. Topshiriqlarni har qanday ko'rinishda qisman yoki to'liq
            ko'chirish holati aniqlanganda ko'chirgan va ko'chirtirgan
            tinglovchi kursdan chetlatiladi. Izoh: Hech qachon ta'lim olish
            jarayonida ustozlarga yolg'on gapirishga yoki firibgarlik qilishga
            urinmang. Biz o'zimiz bergan topshiriqdan yoki boshqa tinglovchidan
            ko'chirganingizni albatta aniqlaymiz.
          </li>
          <br />
          <li>
            <strong>Barqarorlik va tinimsiz mehnat: </strong>
            darslarga muntazam qatnashish va uyga berilgan topshiriqlarni to'liq
            bajarib borish bu dasturlashni mukammal o'rganishingiz garovi. Agar
            tinglovchi har xil fors-major jumladan betob bo'lib qolish, oilaviy
            sabablarga ko'ra kela olmasligi ma'lum bo'lsa Albison Akademyasi
            ma'muriyatini oldindan ogohlantirishi talab etiladi. Bunday holatda
            keyingi qatnashadigan darsida qolib ketgan uyga vazifani topshirishi
            va o'quv dasturidan qolib ketmaslik uchun videodarsliklardan
            foydalanishi mumkin. Tinglovchi uch martadan ko'p sababsiz dars
            qoldirish yoki uyga vazifani bajarmasligi kursdan chetlatilishiga
            olib keladi. Barcha darslar bir-biriga bog'liq bo'lgani uchun
            tinglovchilar o'quv dasturini to'liq o'zlashtirib borishi talab
            etiladi. Faqat shundagina yakuniy imtihonlardan o'ta olish
            imkoniyati bo'ladi. Tinglovchi Albison Akademyasi tomonidan
            beligilangan oraliq imtihonlardan o'ta olmasa bilim darajasiga mos
            boshqa guruhda grant asosida ta'lim olishi uchun faqat bir marta
            imkoniyat beriladi. Barcha tinglovchilar kurs davomida Albison
            Akademyasi tomonidan tuzilgan dars jadvaliga muvofiq onlayn yoki
            oflayn ta'lim olishlari mumkin. Guruhdagi tinglovchilarning o'quv
            dasturini o'zlashtirishiga qarab kurs davomiyligi kompaniya
            tomonidan uzaytirilishi va dars jadvaliga o'zgartirish kiritilishi
            mumkin. Tinglovchi Albison Akademyasi tomonidan taqdim etilgan dars
            jadvaliga muvofiq ta'lim olishi shart. Har bir tinglovchi dasturlash
            kursini yakunlab ishga kirishi shart. Dasturlash kursni
            yakunlamasdan tashlab ketgan tinglovchi unga ajratilgan grantni
            yo'qotadi. Izoh: Kursni yakunlab kompaniyamizga ishlab berishingiz
            yoki oyligingizdan berishingizni talab qilmaymiz. <br />
            <br />
            <strong>
              Bizning asosiy maqsadimiz Albison Akademiyasida ta'lim olib,
              kursni bitirgan har bir talaba dasturlashda o'z o'rnini
              topishidir.
            </strong>
          </li>
        </ol>
      </main>
    </>
  );
};

export default Honor;
