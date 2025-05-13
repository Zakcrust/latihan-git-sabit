enum VehicleType {
    MOTORCYCLE = 1,
    CAR = 2,
}

const Vehicles = [
    {
        id: 1,
        name: "Motor"
    },
    {
        id: 2,
        name: "Mobil"
    }
]
function waktuParkir2(time_in_second: number, vehicle_type: number) {
    if (time_in_second <= 0) {
        throw new Error('Invalid value: value must be more than 0')
    }
    if (vehicle_type != VehicleType.CAR && vehicle_type != VehicleType.MOTORCYCLE) {
        throw new Error("Invalid vehicle type: please input 1 (motorcycle) or 2 (car)");
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

    const biaya_awal: number = 1000;
    const biaya_motor: number = 2000;
    const biaya_mobil: number = 3000;
    var biaya = 0;

    if (vehicle_type == VehicleType.MOTORCYCLE) {
        biaya = biaya_awal + billed_hours * biaya_motor;
    }
    else if (vehicle_type == VehicleType.CAR) {
        biaya = biaya_awal + billed_hours * biaya_mobil;
    }

    console.log('=======================================================')
    console.log(`Jenis kendaraan : ${Vehicles.find(vehicle => vehicle.id == vehicle_type)}`);
    console.log(`Waktu parkir \t\t: ${(jam.toString().length < 2) ? `0${jam}` : jam}:${(menit.toString().length < 2) ? `0${menit}` : menit}:${(detik.toString().length < 2) ? `0${detik}` : detik}`);
    console.log(`Total biaya parkir \t: Rp.${biaya}`);
    console.log('=======================================================')
}

waktuParkir2(1000, 1)
waktuParkir2(1000, 2)
waktuParkir2(3600, 1)
waktuParkir2(3600, 2)
waktuParkir2(5000, 1)
waktuParkir2(5000, 2)
waktuParkir2(7200, 1)
waktuParkir2(7200, 2)