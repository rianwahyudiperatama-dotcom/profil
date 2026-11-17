// JavaScript Document
function mulaiGame() {

    alert("Yang...");

    prompt("Kenapa?");

    alert("Tadi kan aku ngeliatin Dewi lewat kan.");
    prompt("Tau gak?");

    alert("Ih amit-amit dah.");
    alert("Dia pake bulu mata.");
    alert("Aku juga suka bingung deh.");
    alert("Sama cewek kayak gitu.");
    alert("Muka pas-pasan aja, gak ngaca apa?");

    // PILIHAN PERTAMA
    let pilihan1 = prompt(
        "PILIHAN PLAYER L1\n\n" +
        "1. Wkwkwk kamu juga bukannya\n" +
        "2. ...\n" +
        "3. Yah kamu ngapain ngurusin orang"
    );

    if (pilihan1 == "1") {

        alert("Wkwkwk kamu juga bukannya.");
        alert("Aku mah beda sama dia.");
        alert("Aku paling kesel deh liat cewek.");
        alert("Udah kegatelan.");
        alert("Merasa paling cantik.");

    } else if (pilihan1 == "2") {

        alert("...");

    } else if (pilihan1 == "3") {

        alert("Yah kamu ngapain ngurusin orang.");
        alert("Abis dia tuh centil tau, ya!");

    } else {

        alert("Pilihan tidak tersedia, dianggap memilih nomor 2.");

    }

    // PILIHAN KEDUA
    let pilihan2 = prompt(
        "PILIHAN PLAYER L1\n\n" +
        "1. Mana pake softlens lagi\n" +
        "2. Ya udah lah orang lain ini\n" +
        "3. Iya, dia suka liat aku begitu"
    );

    if (pilihan2 == "1") {

        alert("Mana pake softlens lagi.");
        alert("Yang warna item.");
        alert("Biar dikira unyu kali.");
        alert("Padahal udah kayak burung onta.");

        let pilihan3 = prompt(
            "Kamu mau jawab apa?\n\n" +
            "1. Ya udah lah orang lain ini\n" +
            "2. Iya, dia suka liat aku begitu"
        );

        if (pilihan3 == "1") {
            alert("Ya udah lah orang lain ini.");
            alert("Aku kan pengen ngobrol sama kamu.");
        } else {
            alert("Iya, dia suka liat aku begitu.");
            alert("OOHHH!!");
            alert("Jadi kamu suka liatin dia???");
            alert("Lah bukan itu maksudku.");
            alert("Ya udah liatin dia aja sampai puas!");

            let pilihan4 = prompt(
                "PILIHAN PLAYER L1\n\n" +
                "1. Bener ya, aku liatin\n" +
                "2. Iya udah, jangan ngomongin orang terus"
            );

            if (pilihan4 == "1") {

                alert("Bener ya, aku liatin.");
                alert("Oh boleh-boleh, boleh banget!!");

                // ENDING 2
                alert("ABIS ITU PUTUS!");

                return;

            } else {

                alert("Iya udah, jangan ngomongin orang terus.");
                alert("Iya, denger kok.");
                alert("Hmm...");
                alert("Pulang lah yuk.");
                alert("Ayuk.");

                // ENDING 1
                alert("SELAMET! Kalian berhasil pulang bareng.");

                return;
            }
        }

    } else if (pilihan2 == "2") {

        alert("Ya udah lah orang lain ini.");
        alert("Aku kan pengen ngobrol sama kamu.");

    } else if (pilihan2 == "3") {

        alert("Iya, dia suka liat aku begitu.");
        alert("OOHHH!!");
        alert("Jadi kamu suka liatin dia???");
        alert("Lah bukan itu maksudku.");
        alert("Ya udah liatin dia aja sampai puas!");

        let pilihan4 = prompt(
            "PILIHAN PLAYER L1\n\n" +
            "1. Bener ya, aku liatin\n" +
            "2. Iya udah, jangan ngomongin orang terus"
        );

        if (pilihan4 == "1") {

            alert("Bener ya, aku liatin.");
            alert("Oh boleh-boleh, boleh banget!!");
            alert("ABIS ITU PUTUS!");

            return;

        } else {

            alert("Iya udah, jangan ngomongin orang terus.");
            alert("Iya, denger kok.");
            alert("Hmm...");
            alert("Pulang lah yuk.");
            alert("Ayuk.");
            alert("SELAMET! Kalian berhasil pulang bareng.");

            return;
        }

    } else {

        alert("Pilihan tidak tersedia.");

    }

    // PERCAKAPAN LANJUTAN
    alert("Tapi dia tuh ya...");
    alert("Kebangetan orangnya.");
    alert("Ya udah jangan ngomongin orang terus.");
    alert("Kamu kok gak ngerti banget sih.");
    alert("Aku kan pengen ngobrol sama kamu.");

    // PILIHAN KETIGA
    let pilihan5 = prompt(
        "Kamu dengerin aku ngomong gak sih?\n\n" +
        "1. Iya, aku dengerin\n" +
        "2. Kamu ngomongin orang terus\n" +
        "3. Iya denger kok"
    );

    if (pilihan5 == "1") {

        alert("Iya, aku dengerin.");
        alert("Oh, gitu...");
        alert("Pulang lah yuk.");
        alert("Ayuk.");

        // ENDING 1
        alert("SELAMET! Kalian berhasil pulang bareng.");

    } else if (pilihan5 == "2") {

        alert("Kamu ngomongin orang terus.");

        // ENDING 3
        alert("MEREKA GAK NGOBROL LAGI SELAMANYA.");

    } else if (pilihan5 == "3") {

        alert("Iya denger kok.");
        alert("Hmm...");
        alert("Pulang lah yuk.");
        alert("Ayuk.");

        // ENDING 1
        alert("SELAMET! Kalian berhasil pulang bareng.");

    } else {

        alert("Kamu tidak menjawab.");
        alert("Mereka akhirnya tidak jadi pulang bersama.");

    }

}