function waktuParkir(time_in_second: number) {
    if (time_in_second <= 0) {
        throw new Error('Invalid value: value must be more than 0')
    }
    const sisa_detik: number = time_in_second % 3600;
    const jam: number = (time_in_second / 3600 >> 0);
    var billed_hours: number = 0;
    if (sisa_detik == 0 && jam > 0) {
        billed_hours = jam - 1;
    }
    else {
        billed_hours = jam;
    }
    const menit: number = sisa_detik / 60 >> 0;
    const detik: number = sisa_detik % 60;

    var biaya_awal: number = 1000;
    var biaya_tambahan: number = 2000;

    const biaya: number = biaya_awal + billed_hours * biaya_tambahan;

    console.log('=======================================================')
    console.log(`Waktu parkir \t\t: ${(jam.toString().length < 2) ? `0${jam}` : jam}:${(menit.toString().length < 2) ? `0${menit}` : menit}:${(detik.toString().length < 2) ? `0${detik}` : detik}`);
    console.log(`Total biaya parkir \t: Rp.${biaya}`);
    console.log('=======================================================')

}

try {
    waktuParkir(1000)
    waktuParkir(3600)
    waktuParkir(4000)
    waktuParkir(7200)
    waktuParkir(8000)
    waktuParkir(-1)
} catch (error) {
    console.log(`Program error: ${error.message}`)
}