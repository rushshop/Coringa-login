let plataforma = "mobile";
let tipo = "media";
let auxiliosSelecionados = ["hs"];
let ultimaConfig = null;
let intervaloBarra = null;

const modelosPorMarca = {
  Apple: [
    "iPhone 6", "iPhone 6 Plus", "iPhone 6s", "iPhone 6s Plus",
    "iPhone 7", "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus",
    "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
    "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
    "iPhone SE 2020",
    "iPhone 12 Mini", "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
    "iPhone 13 Mini", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
    "iPhone SE 2022",
    "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
    "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
    "iPhone 16", "iPhone 16 Plus", "iPhone 16 Air", "iPhone 16 Pro", "iPhone 16 Pro Max",
    "iPhone 16e",
    "iPhone 17", "iPhone 17 Air", "iPhone 17 Pro", "iPhone 17 Pro Max"
  ],

  Samsung: [
    "Galaxy A01", "Galaxy A02", "Galaxy A03", "Galaxy A04", "Galaxy A05", "Galaxy A06",
    "Galaxy A10", "Galaxy A10s", "Galaxy A11", "Galaxy A12", "Galaxy A13", "Galaxy A14", "Galaxy A15", "Galaxy A16",
    "Galaxy A20", "Galaxy A20s", "Galaxy A21s", "Galaxy A22", "Galaxy A23", "Galaxy A24", "Galaxy A25", "Galaxy A26",
    "Galaxy A30", "Galaxy A30s", "Galaxy A31", "Galaxy A32", "Galaxy A33", "Galaxy A34", "Galaxy A35", "Galaxy A36",
    "Galaxy A50", "Galaxy A50s", "Galaxy A51", "Galaxy A52", "Galaxy A52s", "Galaxy A53", "Galaxy A54", "Galaxy A55", "Galaxy A56",
    "Galaxy A70", "Galaxy A71", "Galaxy A72", "Galaxy A73",
    "Galaxy M10", "Galaxy M11", "Galaxy M12", "Galaxy M13", "Galaxy M14", "Galaxy M15",
    "Galaxy M20", "Galaxy M21", "Galaxy M22", "Galaxy M23",
    "Galaxy M30", "Galaxy M31", "Galaxy M32", "Galaxy M33", "Galaxy M34", "Galaxy M35",
    "Galaxy M51", "Galaxy M52", "Galaxy M53", "Galaxy M54", "Galaxy M55",
    "Galaxy S8", "Galaxy S8 Plus", "Galaxy S9", "Galaxy S9 Plus",
    "Galaxy S10", "Galaxy S10 Plus", "Galaxy S10e",
    "Galaxy S20", "Galaxy S20 Plus", "Galaxy S20 Ultra", "Galaxy S20 FE",
    "Galaxy S21", "Galaxy S21 Plus", "Galaxy S21 Ultra", "Galaxy S21 FE",
    "Galaxy S22", "Galaxy S22 Plus", "Galaxy S22 Ultra",
    "Galaxy S23", "Galaxy S23 Plus", "Galaxy S23 Ultra", "Galaxy S23 FE",
    "Galaxy S24", "Galaxy S24 Plus", "Galaxy S24 Ultra",
    "Galaxy S25", "Galaxy S25 Plus", "Galaxy S25 Edge", "Galaxy S25 Ultra",
    "Galaxy Note 8", "Galaxy Note 9", "Galaxy Note 10", "Galaxy Note 10 Plus",
    "Galaxy Note 20", "Galaxy Note 20 Ultra",
    "Galaxy Z Flip", "Galaxy Z Flip 3", "Galaxy Z Flip 4", "Galaxy Z Flip 5", "Galaxy Z Flip 6",
    "Galaxy Z Fold", "Galaxy Z Fold 3", "Galaxy Z Fold 4", "Galaxy Z Fold 5", "Galaxy Z Fold 6"
  ],

  Xiaomi: [
    "Redmi 7", "Redmi 7A", "Redmi 8", "Redmi 8A",
    "Redmi 9", "Redmi 9A", "Redmi 9C", "Redmi 9T",
    "Redmi 10", "Redmi 10A", "Redmi 10C",
    "Redmi 12", "Redmi 12C", "Redmi 13C", "Redmi 14C",
    "Redmi Note 7", "Redmi Note 7 Pro",
    "Redmi Note 8", "Redmi Note 8 Pro",
    "Redmi Note 9", "Redmi Note 9S", "Redmi Note 9 Pro",
    "Redmi Note 10", "Redmi Note 10S", "Redmi Note 10 Pro",
    "Redmi Note 11", "Redmi Note 11S", "Redmi Note 11 Pro", "Redmi Note 11 Pro Plus",
    "Redmi Note 12", "Redmi Note 12S", "Redmi Note 12 Pro", "Redmi Note 12 Pro Plus",
    "Redmi Note 13", "Redmi Note 13 Pro", "Redmi Note 13 Pro Plus",
    "Redmi Note 14", "Redmi Note 14 Pro", "Redmi Note 14 Pro Plus",
    "POCO C31", "POCO C40", "POCO C50", "POCO C55", "POCO C65", "POCO C75",
    "POCO M2", "POCO M2 Pro", "POCO M3", "POCO M3 Pro",
    "POCO M4", "POCO M4 Pro", "POCO M5", "POCO M5s",
    "POCO M6", "POCO M6 Pro", "POCO M7 Pro",
    "POCO X2", "POCO X3", "POCO X3 NFC", "POCO X3 Pro",
    "POCO X4 Pro", "POCO X5", "POCO X5 Pro",
    "POCO X6", "POCO X6 Pro", "POCO X7", "POCO X7 Pro",
    "POCO F1", "POCO F2 Pro", "POCO F3", "POCO F4", "POCO F4 GT",
    "POCO F5", "POCO F5 Pro", "POCO F6", "POCO F6 Pro",
    "POCO F7", "POCO F7 Pro", "POCO F7 Ultra",
    "Xiaomi Mi 8", "Xiaomi Mi 8 Lite",
    "Xiaomi Mi 9", "Xiaomi Mi 9T", "Xiaomi Mi 9T Pro",
    "Xiaomi Mi 10", "Xiaomi Mi 10 Lite", "Xiaomi Mi 10T", "Xiaomi Mi 10T Pro",
    "Xiaomi Mi 11", "Xiaomi Mi 11 Lite", "Xiaomi Mi 11 Ultra",
    "Xiaomi 11T", "Xiaomi 11T Pro",
    "Xiaomi 12", "Xiaomi 12 Pro", "Xiaomi 12T", "Xiaomi 12T Pro",
    "Xiaomi 13", "Xiaomi 13 Lite", "Xiaomi 13 Pro", "Xiaomi 13T", "Xiaomi 13T Pro",
    "Xiaomi 14", "Xiaomi 14 Pro", "Xiaomi 14 Ultra", "Xiaomi 14T", "Xiaomi 14T Pro",
    "Xiaomi 15", "Xiaomi 15 Pro", "Xiaomi 15 Ultra"
  ],

  Motorola: [
    "Moto E5", "Moto E5 Plus", "Moto E6", "Moto E6 Plus",
    "Moto E7", "Moto E7 Plus", "Moto E13", "Moto E20", "Moto E22", "Moto E22i", "Moto E30", "Moto E32", "Moto E40",
    "Moto G6", "Moto G6 Plus", "Moto G6 Play",
    "Moto G7", "Moto G7 Play", "Moto G7 Plus", "Moto G7 Power",
    "Moto G8", "Moto G8 Play", "Moto G8 Plus", "Moto G8 Power",
    "Moto G9", "Moto G9 Play", "Moto G9 Plus", "Moto G9 Power",
    "Moto G10", "Moto G20", "Moto G22", "Moto G30", "Moto G31", "Moto G32", "Moto G34", "Moto G35",
    "Moto G41", "Moto G42", "Moto G52", "Moto G53", "Moto G54", "Moto G55",
    "Moto G60", "Moto G60s", "Moto G62", "Moto G71", "Moto G72", "Moto G73", "Moto G75", "Moto G82", "Moto G84", "Moto G85", "Moto G86", "Moto G100",
    "Moto One", "Moto One Action", "Moto One Fusion", "Moto One Fusion Plus", "Moto One Hyper", "Moto One Macro", "Moto One Vision", "Moto One Zoom",
    "Moto Edge", "Moto Edge Plus",
    "Moto Edge 20", "Moto Edge 20 Lite", "Moto Edge 20 Pro",
    "Moto Edge 30", "Moto Edge 30 Neo", "Moto Edge 30 Fusion", "Moto Edge 30 Pro",
    "Moto Edge 40", "Moto Edge 40 Neo", "Moto Edge 40 Pro",
    "Moto Edge 50", "Moto Edge 50 Neo", "Moto Edge 50 Fusion", "Moto Edge 50 Pro", "Moto Edge 50 Ultra",
    "Moto Edge 60", "Moto Edge 60 Fusion", "Moto Edge 60 Pro",
    "Moto Edge 70",
    "Moto Razr 40", "Moto Razr 40 Ultra", "Moto Razr 50", "Moto Razr 50 Ultra", "Moto Razr 60", "Moto Razr 60 Ultra"
  ],

  Realme: [
    "Realme C2", "Realme C3", "Realme C11", "Realme C12", "Realme C15", "Realme C17",
    "Realme C20", "Realme C21", "Realme C25", "Realme C25s", "Realme C30", "Realme C30s",
    "Realme C31", "Realme C33", "Realme C35", "Realme C53", "Realme C55", "Realme C61", "Realme C63", "Realme C65", "Realme C67", "Realme C75", "Realme C75x",
    "Realme 3", "Realme 3 Pro", "Realme 5", "Realme 5 Pro",
    "Realme 6", "Realme 6 Pro", "Realme 7", "Realme 7 Pro",
    "Realme 8", "Realme 8 Pro", "Realme 8i",
    "Realme 9", "Realme 9i", "Realme 9 Pro", "Realme 9 Pro Plus",
    "Realme 10", "Realme 10 Pro", "Realme 10 Pro Plus",
    "Realme 11", "Realme 11 Pro", "Realme 11 Pro Plus",
    "Realme 12", "Realme 12 Plus", "Realme 12 Pro", "Realme 12 Pro Plus",
    "Realme 13", "Realme 13 Plus", "Realme 13 Pro", "Realme 13 Pro Plus",
    "Realme 14", "Realme 14 Pro", "Realme 14 Pro Plus",
    "Realme Narzo 20", "Realme Narzo 30", "Realme Narzo 30A", "Realme Narzo 50", "Realme Narzo 50A", "Realme Narzo 50i",
    "Realme Narzo 60", "Realme Narzo 60 Pro", "Realme Narzo 70", "Realme Narzo 70x", "Realme Narzo 70 Pro", "Realme Narzo 80", "Realme Narzo 80 Pro",
    "Realme GT", "Realme GT Master", "Realme GT Neo", "Realme GT Neo 2", "Realme GT Neo 3", "Realme GT Neo 5",
    "Realme GT 2", "Realme GT 2 Pro", "Realme GT 3", "Realme GT 5", "Realme GT 6", "Realme GT 6T", "Realme GT 7", "Realme GT 7 Pro"
  ],

  Asus: [
    "Zenfone Max", "Zenfone Max Plus", "Zenfone Max Pro M1", "Zenfone Max Pro M2",
    "Zenfone 3", "Zenfone 3 Max", "Zenfone 3 Zoom",
    "Zenfone 4", "Zenfone 4 Max", "Zenfone 4 Selfie",
    "Zenfone 5", "Zenfone 5 Lite", "Zenfone 5Z",
    "Zenfone 6", "Zenfone 7", "Zenfone 7 Pro", "Zenfone 8", "Zenfone 8 Flip",
    "Zenfone 9", "Zenfone 10", "Zenfone 11 Ultra", "Zenfone 12 Ultra",
    "ROG Phone", "ROG Phone 2", "ROG Phone 3", "ROG Phone 5", "ROG Phone 5s",
    "ROG Phone 5s Pro", "ROG Phone 6", "ROG Phone 6 Pro", "ROG Phone 6D", "ROG Phone 6D Ultimate",
    "ROG Phone 7", "ROG Phone 7 Ultimate", "ROG Phone 8", "ROG Phone 8 Pro",
    "ROG Phone 9", "ROG Phone 9 Pro", "ROG Phone 9 Pro Edition"
  ],

  "Red Magic": [
    "Red Magic 3", "Red Magic 3S",
    "Red Magic 5G", "Red Magic 5S",
    "Red Magic 6", "Red Magic 6 Pro", "Red Magic 6R", "Red Magic 6S Pro",
    "Red Magic 7", "Red Magic 7 Pro", "Red Magic 7S", "Red Magic 7S Pro",
    "Red Magic 8", "Red Magic 8 Pro", "Red Magic 8 Pro Plus", "Red Magic 8S Pro", "Red Magic 8S Pro Plus",
    "Red Magic 9 Pro", "Red Magic 9 Pro Plus", "Red Magic 9S Pro",
    "Red Magic 10 Pro", "Red Magic 10 Pro Plus", "Red Magic 10S Pro", "Red Magic 10S Pro Plus"
  ],

  Nubia: [
    "Nubia Z17", "Nubia Z18", "Nubia Z20", "Nubia Z30 Pro",
    "Nubia Z40 Pro", "Nubia Z50", "Nubia Z50 Ultra",
    "Nubia Z60 Ultra", "Nubia Z70 Ultra",
    "Nubia Neo", "Nubia Neo 2"
  ],

  Infinix: [
    "Infinix Smart 4", "Infinix Smart 5", "Infinix Smart 6", "Infinix Smart 7", "Infinix Smart 8", "Infinix Smart 9",
    "Infinix Hot 8", "Infinix Hot 9", "Infinix Hot 10", "Infinix Hot 10 Play",
    "Infinix Hot 11", "Infinix Hot 11S", "Infinix Hot 12", "Infinix Hot 12 Play",
    "Infinix Hot 20", "Infinix Hot 20 Play", "Infinix Hot 20S",
    "Infinix Hot 30", "Infinix Hot 30 Play",
    "Infinix Hot 40", "Infinix Hot 40i", "Infinix Hot 40 Pro",
    "Infinix Hot 50", "Infinix Hot 50 Pro", "Infinix Hot 60", "Infinix Hot 60 Pro",
    "Infinix Note 7", "Infinix Note 8", "Infinix Note 10", "Infinix Note 11", "Infinix Note 12",
    "Infinix Note 12 Pro", "Infinix Note 30", "Infinix Note 30 Pro", "Infinix Note 40", "Infinix Note 40 Pro",
    "Infinix Note 50", "Infinix Note 50 Pro",
    "Infinix Zero 8", "Infinix Zero X", "Infinix Zero X Pro", "Infinix Zero 20", "Infinix Zero 30", "Infinix Zero 40",
    "Infinix GT 10 Pro", "Infinix GT 20 Pro", "Infinix GT 30 Pro"
  ],

  Tecno: [
    "Tecno Spark 5", "Tecno Spark 6", "Tecno Spark 7", "Tecno Spark 8", "Tecno Spark 8C",
    "Tecno Spark 9", "Tecno Spark 10", "Tecno Spark 10C", "Tecno Spark 10 Pro",
    "Tecno Spark 20", "Tecno Spark 20C", "Tecno Spark 20 Pro",
    "Tecno Spark 30", "Tecno Spark 30 Pro", "Tecno Spark 40", "Tecno Spark 40 Pro",
    "Tecno Camon 12", "Tecno Camon 15", "Tecno Camon 16", "Tecno Camon 17", "Tecno Camon 18",
    "Tecno Camon 19", "Tecno Camon 20", "Tecno Camon 20 Pro", "Tecno Camon 20 Premier",
    "Tecno Camon 30", "Tecno Camon 30 Pro", "Tecno Camon 40", "Tecno Camon 40 Pro",
    "Tecno Pova", "Tecno Pova Neo", "Tecno Pova 2", "Tecno Pova 3", "Tecno Pova 4", "Tecno Pova 4 Pro",
    "Tecno Pova 5", "Tecno Pova 5 Pro", "Tecno Pova 6", "Tecno Pova 6 Pro", "Tecno Pova 7", "Tecno Pova 7 Pro",
    "Tecno Phantom X", "Tecno Phantom X2", "Tecno Phantom X2 Pro", "Tecno Phantom V Flip", "Tecno Phantom V Flip 2", "Tecno Phantom V Fold", "Tecno Phantom V Fold 2"
  ],

  Huawei: [
    "Huawei Y5", "Huawei Y6", "Huawei Y7", "Huawei Y8p", "Huawei Y9", "Huawei Y9 Prime",
    "Huawei P10", "Huawei P10 Plus", "Huawei P20", "Huawei P20 Lite", "Huawei P20 Pro",
    "Huawei P30", "Huawei P30 Lite", "Huawei P30 Pro", "Huawei P40", "Huawei P40 Lite", "Huawei P40 Pro",
    "Huawei P50", "Huawei P50 Pro", "Huawei P60", "Huawei P60 Pro",
    "Huawei Pura 70", "Huawei Pura 70 Pro", "Huawei Pura 70 Ultra",
    "Huawei Pura 80", "Huawei Pura 80 Pro", "Huawei Pura 80 Ultra",
    "Huawei Nova 3", "Huawei Nova 3i", "Huawei Nova 5T", "Huawei Nova 7", "Huawei Nova 7i",
    "Huawei Nova 8", "Huawei Nova 9", "Huawei Nova 10", "Huawei Nova 11", "Huawei Nova 12", "Huawei Nova 13", "Huawei Nova 13 Pro",
    "Huawei Mate 10", "Huawei Mate 10 Pro", "Huawei Mate 20", "Huawei Mate 20 Pro",
    "Huawei Mate 30", "Huawei Mate 30 Pro", "Huawei Mate 40", "Huawei Mate 40 Pro",
    "Huawei Mate 50", "Huawei Mate 50 Pro", "Huawei Mate 60", "Huawei Mate 60 Pro",
    "Huawei Mate 70", "Huawei Mate 70 Pro"
  ],

  Oppo: [
    "Oppo A1k", "Oppo A3", "Oppo A3 Pro", "Oppo A3s", "Oppo A5", "Oppo A5 Pro", "Oppo A9",
    "Oppo A12", "Oppo A15", "Oppo A16", "Oppo A17", "Oppo A31",
    "Oppo A52", "Oppo A53", "Oppo A54", "Oppo A55", "Oppo A57", "Oppo A58",
    "Oppo A74", "Oppo A76", "Oppo A77", "Oppo A78", "Oppo A79", "Oppo A94", "Oppo A96",
    "Oppo Reno", "Oppo Reno 2", "Oppo Reno 2F", "Oppo Reno 3", "Oppo Reno 4", "Oppo Reno 4 Pro",
    "Oppo Reno 5", "Oppo Reno 5 Pro", "Oppo Reno 6", "Oppo Reno 6 Pro",
    "Oppo Reno 7", "Oppo Reno 7 Pro", "Oppo Reno 8", "Oppo Reno 8 Pro",
    "Oppo Reno 10", "Oppo Reno 10 Pro", "Oppo Reno 11", "Oppo Reno 11 Pro",
    "Oppo Reno 12", "Oppo Reno 12 Pro", "Oppo Reno 13", "Oppo Reno 13 Pro", "Oppo Reno 14", "Oppo Reno 14 Pro",
    "Oppo Find X", "Oppo Find X2", "Oppo Find X3", "Oppo Find X3 Pro", "Oppo Find X5", "Oppo Find X5 Pro",
    "Oppo Find X6", "Oppo Find X6 Pro", "Oppo Find X7", "Oppo Find X7 Ultra",
    "Oppo Find X8", "Oppo Find X8 Pro", "Oppo Find X8 Ultra"
  ],

  Vivo: [
    "Vivo Y11", "Vivo Y12", "Vivo Y15", "Vivo Y16", "Vivo Y17", "Vivo Y20", "Vivo Y21", "Vivo Y22",
    "Vivo Y27", "Vivo Y28", "Vivo Y29", "Vivo Y33", "Vivo Y35", "Vivo Y36", "Vivo Y51", "Vivo Y53", "Vivo Y55", "Vivo Y73", "Vivo Y76",
    "Vivo V11", "Vivo V15", "Vivo V17", "Vivo V19", "Vivo V20", "Vivo V21", "Vivo V23", "Vivo V25",
    "Vivo V27", "Vivo V29", "Vivo V30", "Vivo V40", "Vivo V40 Pro", "Vivo V50", "Vivo V50 Pro",
    "Vivo X50", "Vivo X50 Pro", "Vivo X60", "Vivo X60 Pro", "Vivo X70", "Vivo X70 Pro",
    "Vivo X80", "Vivo X80 Pro", "Vivo X90", "Vivo X90 Pro",
    "Vivo X100", "Vivo X100 Pro", "Vivo X100 Ultra",
    "Vivo X200", "Vivo X200 Pro", "Vivo X200 Ultra"
  ],

  OnePlus: [
    "OnePlus 3", "OnePlus 3T", "OnePlus 5", "OnePlus 5T", "OnePlus 6", "OnePlus 6T",
    "OnePlus 7", "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro",
    "OnePlus 8", "OnePlus 8 Pro", "OnePlus 8T",
    "OnePlus 9", "OnePlus 9 Pro", "OnePlus 9R", "OnePlus 9RT",
    "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 11", "OnePlus 11R",
    "OnePlus 12", "OnePlus 12R",
    "OnePlus 13", "OnePlus 13R", "OnePlus 13T", "OnePlus 13S",
    "OnePlus Nord", "OnePlus Nord 2", "OnePlus Nord 2T", "OnePlus Nord 3", "OnePlus Nord 4",
    "OnePlus Nord CE", "OnePlus Nord CE 2", "OnePlus Nord CE 3", "OnePlus Nord CE 4", "OnePlus Nord CE 4 Lite", "OnePlus Nord CE 5",
    "OnePlus Nord N10", "OnePlus Nord N20", "OnePlus Nord N30"
  ],

  Honor: [
    "Honor 7X", "Honor 8X", "Honor 9X", "Honor 10", "Honor 10 Lite",
    "Honor 20", "Honor 20 Pro", "Honor 30", "Honor 30 Pro",
    "Honor 50", "Honor 50 Lite", "Honor 60", "Honor 70", "Honor 70 Pro",
    "Honor 80", "Honor 90", "Honor 90 Lite",
    "Honor 200", "Honor 200 Pro", "Honor 300", "Honor 300 Pro", "Honor 400", "Honor 400 Pro",
    "Honor X6", "Honor X7", "Honor X8", "Honor X8a", "Honor X9",
    "Honor Magic 3", "Honor Magic 4", "Honor Magic 4 Pro",
    "Honor Magic 5", "Honor Magic 5 Pro", "Honor Magic 6", "Honor Magic 6 Pro",
    "Honor Magic 7", "Honor Magic 7 Pro", "Honor Magic V3"
  ],

  Google: [
    "Pixel", "Pixel XL", "Pixel 2", "Pixel 2 XL", "Pixel 3", "Pixel 3 XL",
    "Pixel 3a", "Pixel 3a XL", "Pixel 4", "Pixel 4 XL", "Pixel 4a",
    "Pixel 5", "Pixel 5a", "Pixel 6", "Pixel 6 Pro", "Pixel 6a",
    "Pixel 7", "Pixel 7 Pro", "Pixel 7a", "Pixel 8", "Pixel 8 Pro", "Pixel 8a",
    "Pixel 9", "Pixel 9 Pro", "Pixel 9 Pro XL", "Pixel 9 Pro Fold", "Pixel 9a",
    "Pixel 10", "Pixel 10 Pro", "Pixel 10 Pro XL", "Pixel 10 Pro Fold",
    "Pixel Fold"
  ],

  Sony: [
    "Xperia XZ", "Xperia XZ Premium", "Xperia XZ1", "Xperia XZ2", "Xperia XZ3",
    "Xperia 1", "Xperia 1 II", "Xperia 1 III", "Xperia 1 IV", "Xperia 1 V", "Xperia 1 VI", "Xperia 1 VII",
    "Xperia 5", "Xperia 5 II", "Xperia 5 III", "Xperia 5 IV", "Xperia 5 V",
    "Xperia 10", "Xperia 10 II", "Xperia 10 III", "Xperia 10 IV", "Xperia 10 V", "Xperia 10 VI",
    "Xperia L3", "Xperia L4"
  ],

  ZTE: [
    "ZTE Blade A5", "ZTE Blade A7", "ZTE Blade A31", "ZTE Blade A51", "ZTE Blade A71",
    "ZTE Blade V10", "ZTE Blade V20", "ZTE Blade V30", "ZTE Blade V40", "ZTE Blade V50",
    "ZTE Axon 10 Pro", "ZTE Axon 11", "ZTE Axon 20", "ZTE Axon 30", "ZTE Axon 40", "ZTE Axon 50",
    "ZTE Axon 60", "ZTE Axon 60 Ultra"
  ]
};

function carregarMarcas() {
  const marcaSelect = document.getElementById("marca");
  marcaSelect.innerHTML = "";

  Object.keys(modelosPorMarca).forEach(function(marca) {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca;
    marcaSelect.appendChild(option);
  });
}

function carregarModelos() {
  const marca = document.getElementById("marca").value;
  const modeloSelect = document.getElementById("modelo");

  modeloSelect.innerHTML = "";

  modelosPorMarca[marca].forEach(function(modelo) {
    const option = document.createElement("option");
    option.value = modelo;
    option.textContent = modelo;
    modeloSelect.appendChild(option);
  });
}

function esconderMensagemInjetado() {
  const msg = document.getElementById("mensagemInjetado");

  if (msg) {
    msg.remove();
  }
}

function mostrarMensagemInjetado() {
  esconderMensagemInjetado();

  const boxAuxilio = document.getElementById("processo").parentElement;
  const msg = document.createElement("div");

  msg.id = "mensagemInjetado";
  msg.className = "injecao-msg";
  msg.innerText = "Auxílio injetado";

  boxAuxilio.appendChild(msg);

  setTimeout(function() {
    esconderMensagemInjetado();
  }, 2500);
}

function limparResultado() {
  const resultado = document.getElementById("resultado");
  const processo = document.getElementById("processo");
  const progresso = document.getElementById("progresso");
  const porcentagem = document.getElementById("porcentagem");
  const logs = document.getElementById("logsProcesso");

  if (intervaloBarra) {
    clearInterval(intervaloBarra);
  }

  resultado.style.display = "none";
  processo.style.display = "none";
  progresso.style.width = "0%";
  porcentagem.innerText = "0%";
  logs.innerHTML = "";

  esconderMensagemInjetado();

  document.querySelectorAll(".auxilio").forEach(function(card) {
    card.classList.remove("finalizado");
  });

  ultimaConfig = null;
}

function abrirPlataforma(novaPlataforma, botao) {
  plataforma = novaPlataforma;

  document.querySelectorAll(".tab").forEach(function(item) {
    item.classList.remove("ativo");
  });

  document.querySelectorAll(".area").forEach(function(area) {
    area.classList.remove("ativa");
  });

  botao.classList.add("ativo");
  document.getElementById("area-" + novaPlataforma).classList.add("ativa");

  limparResultado();
}

function mudarTipo(novoTipo, botao) {
  tipo = novoTipo;

  document.querySelectorAll(".tipo").forEach(function(item) {
    item.classList.remove("ativo");
  });

  botao.classList.add("ativo");

  limparResultado();
}

function mudarAuxilio(novoAuxilio, card) {
  card.classList.remove("finalizado");

  if (auxiliosSelecionados.includes(novoAuxilio)) {
    if (auxiliosSelecionados.length === 1) {
      return;
    }

    auxiliosSelecionados = auxiliosSelecionados.filter(function(item) {
      return item !== novoAuxilio;
    });

    card.classList.remove("ativo");
  } else {
    auxiliosSelecionados.push(novoAuxilio);
    card.classList.add("ativo");
  }

  document.querySelectorAll(".auxilio").forEach(function(item) {
    item.classList.remove("finalizado");
  });

  limparResultado();
}

function limitar(valor, min, max) {
  return Math.max(min, Math.min(max, Math.round(valor)));
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pegarModeloAtual() {
  if (plataforma === "mobile") {
    return document.getElementById("modelo").value;
  }

  if (plataforma === "emulador") {
    return document.getElementById("tipoEmulador").value;
  }

  return document.getElementById("mapeador").value;
}

function pegarBase() {
  let config = "";
  let base = 90;
  let dpi = 600;
  let botao = 50;

  if (plataforma === "mobile") {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;

    config = marca + " " + modelo;

    const modeloForte =
      modelo.includes("Pro Max") ||
      modelo.includes("Pro Plus") ||
      modelo.includes("Pro") ||
      modelo.includes("Plus") ||
      modelo.includes("Ultra") ||
      modelo.includes("ROG") ||
      modelo.includes("Red Magic") ||
      modelo.includes("Nubia") ||
      modelo.includes("Legion") ||
      modelo.includes("GT") ||
      modelo.includes("Find X") ||
      modelo.includes("Mate") ||
      modelo.includes("Fold") ||
      modelo.includes("Flip") ||
      modelo.includes("Edge") ||
      modelo.includes("X100") ||
      modelo.includes("X90") ||
      modelo.includes("X200") ||
      modelo.includes("F7") ||
      modelo.includes("F6") ||
      modelo.includes("F5") ||
      modelo.includes("F4");

    const modeloMedio =
      modelo.includes("Note") ||
      modelo.includes("Reno") ||
      modelo.includes("Nord") ||
      modelo.includes("Pova") ||
      modelo.includes("Camon") ||
      modelo.includes("Zero") ||
      modelo.includes("Velvet") ||
      modelo.includes("Wing") ||
      modelo.includes("Magic") ||
      modelo.includes("Pixel") ||
      modelo.includes("Xperia");

    if (marca === "Apple") {
      dpi = "iPhone não usa DPI";
      botao = 48;

      if (modelo.includes("Pro Max")) {
        base = 104;
      } else if (modelo.includes("Pro")) {
        base = 102;
      } else if (modelo.includes("Air") || modelo.includes("Plus")) {
        base = 100;
      } else {
        base = 97;
      }
    } else if (marca === "Samsung") {
      if (modelo.includes("Ultra") || modelo.includes("Fold")) {
        base = 104;
        dpi = 720;
      } else if (modelo.includes("S2") || modelo.includes("Flip") || modelo.includes("Edge")) {
        base = 100;
        dpi = 680;
      } else if (modelo.includes("A5") || modelo.includes("A7") || modelo.includes("M5")) {
        base = 97;
        dpi = 640;
      } else {
        base = 93;
        dpi = 600;
      }
    } else if (marca === "Xiaomi") {
      if (modelo.includes("POCO F") || modelo.includes("Pro Plus") || modelo.includes("Ultra")) {
        base = 104;
        dpi = 740;
      } else if (modelo.includes("Pro") || modelo.includes("POCO X")) {
        base = 100;
        dpi = 700;
      } else if (modelo.includes("Note")) {
        base = 96;
        dpi = 650;
      } else {
        base = 92;
        dpi = 600;
      }
    } else if (marca === "Motorola") {
      if (modelo.includes("Edge")) {
        base = 100;
        dpi = 680;
      } else if (modelo.includes("G8") || modelo.includes("G7") || modelo.includes("G6") || modelo.includes("G5")) {
        base = 96;
        dpi = 630;
      } else {
        base = 92;
        dpi = 590;
      }
    } else if (marca === "Asus" || marca === "Red Magic" || marca === "Nubia") {
      if (modelo.includes("ROG") || modelo.includes("Red Magic") || modelo.includes("Nubia")) {
        base = 106;
        dpi = 780;
      } else {
        base = 99;
        dpi = 690;
      }
    } else if (modeloForte) {
      base = 101;
      dpi = 700;
    } else if (modeloMedio) {
      base = 96;
      dpi = 640;
    } else {
      base = 92;
      dpi = 590;
    }
  }

  if (plataforma === "emulador") {
    const emulador = document.getElementById("tipoEmulador").value;
    const ram = Number(document.getElementById("ramPc").value);

    config = emulador + " / " + ram + "GB RAM";
    base = ram >= 16 ? 96 : ram >= 8 ? 90 : 84;
    dpi = ram >= 16 ? 820 : ram >= 8 ? 740 : 650;
    botao = 48;
  }

  if (plataforma === "mobilador") {
    const mapeador = document.getElementById("mapeador").value;
    const modoMobilador = document.getElementById("modoMobilador").value;
    const dpiMobilador = Number(document.getElementById("dpiMobilador").value);

    config = mapeador + " / " + modoMobilador + " / " + dpiMobilador + " DPI";

    if (mapeador === "GG Mouse Pro") {
      base = 94;
      botao = 47;
    }

    if (mapeador === "Panda Mouse Pro") {
      base = 91;
      botao = 49;
    }

    if (modoMobilador === "Puxada rápida") {
      base += 5;
      botao -= 2;
    }

    if (modoMobilador === "Mira estável") {
      base -= 4;
      botao += 2;
    }

    if (modoMobilador === "Capa alta") {
      base += 7;
      botao -= 3;
    }

    if (modoMobilador === "Controle pesado") {
      base -= 7;
      botao += 4;
    }

    dpi = dpiMobilador;
  }

  return { config, base, dpi, botao };
}

function montarConfig() {
  const dados = pegarBase();

  let dpi = dados.dpi;
  let botao = dados.botao;

  const faixas = {
    pesada: { min: 50, max: 100 },
    media: { min: 100, max: 150 },
    leve: { min: 150, max: 200 }
  };

  const faixa = faixas[tipo];

  let ajusteSensi = 0;

  if (auxiliosSelecionados.includes("hs")) {
    ajusteSensi += 3;
    botao -= 2;
  }

  if (auxiliosSelecionados.includes("recoil")) {
    ajusteSensi -= 4;
    botao += 2;
  }

  if (auxiliosSelecionados.includes("precisao")) {
    ajusteSensi -= 1;
  }

  if (auxiliosSelecionados.includes("capa")) {
    ajusteSensi += 5;
    botao -= 3;
  }

  if (auxiliosSelecionados.includes("dpi")) {
    if (typeof dpi === "number" && plataforma !== "mobilador") {
      dpi += 35;
    }
  }

  if (auxiliosSelecionados.includes("estavel")) {
    ajusteSensi -= 3;
    botao += 1;
  }

  if (tipo === "pesada") {
    botao += 3;

    if (typeof dpi === "number" && plataforma !== "mobilador") {
      dpi -= 80;
    }
  }

  if (tipo === "leve") {
    botao -= 3;

    if (typeof dpi === "number" && plataforma !== "mobilador") {
      dpi += 80;
    }
  }

  function valorNaFaixa(percentual, variacao) {
    const tamanho = faixa.max - faixa.min;
    const baseCalculada = faixa.min + (tamanho * percentual / 100);
    return limitar(baseCalculada + ajusteSensi + numeroAleatorio(-variacao, variacao), faixa.min, faixa.max);
  }

  const sensi = {
    "Geral": valorNaFaixa(88, 4),
    "Red Dot": valorNaFaixa(92, 4),
    "Mira 2x": valorNaFaixa(78, 5),
    "Mira 4x": valorNaFaixa(62, 5),
    "AWM": valorNaFaixa(35, 5),
    "Olhadinha": valorNaFaixa(86, 4)
  };

  if (typeof dpi === "number" && plataforma !== "mobilador") {
    dpi = limitar(dpi + numeroAleatorio(-20, 20), 360, 900);
  }

  if (typeof dpi === "number" && plataforma === "mobilador") {
    dpi = limitar(dpi, 400, 3200);
  }

  botao = limitar(botao + numeroAleatorio(-1, 1), 35, 60) + "%";

  return {
    config: dados.config,
    sensi: sensi,
    dpi: dpi,
    botao: botao
  };
}

function nomeAuxilio(nome) {
  if (nome === "hs") return "99% HS";
  if (nome === "recoil") return "Controle de Recuo";
  if (nome === "precisao") return "Precisão Alta";
  if (nome === "capa") return "Puxada Capa";
  if (nome === "dpi") return "DPI Otimizado";
  if (nome === "estavel") return "Mira Estável";
  return "Auxílio";
}

function nomesAuxilios() {
  return auxiliosSelecionados.map(function(item) {
    return nomeAuxilio(item);
  }).join(" + ");
}

function finalizarAuxilios() {
  document.querySelectorAll(".auxilio").forEach(function(card) {
    const nome = card.dataset.auxilio;

    if (auxiliosSelecionados.includes(nome)) {
      card.classList.add("finalizado");
    } else {
      card.classList.remove("finalizado");
    }
  });
}

function gerarSensi() {
  esconderMensagemInjetado();

  document.querySelectorAll(".auxilio").forEach(function(card) {
    card.classList.remove("finalizado");
  });

  ultimaConfig = montarConfig();

  carregarBarra("Gerando sensi...", [
    "Detectando plataforma selecionada...",
    "Reajustando números da sensi...",
    "Calculando configuração escolhida...",
    "Otimizando DPI, botão e mira...",
    "Finalizando sensibilidade..."
  ], 99, function() {
    mostrarResultado();

    const modeloFinal = pegarModeloAtual();

    document.getElementById("statusProcesso").innerHTML =
      `<div class="frase-capa">
        <strong>SENSI 100% CAPA</strong>
        <span>Melhor sensi para ${modeloFinal}</span>
      </div>
      <span class="status-ok">Finalizado. Sensibilidade gerada.</span>`;
  });
}

function injetarPreset() {
  esconderMensagemInjetado();

  carregarBarra("Injetando auxílio...", [
    "Preparando auxílio selecionado...",
    "Carregando 99% HS e puxada capa...",
    "Aplicando controle e precisão...",
    "Sincronizando auxílio...",
    "Finalizando injeção..."
  ], 99, function() {
    document.getElementById("processo").style.display = "none";

    finalizarAuxilios();
    mostrarMensagemInjetado();
  });
}

function carregarBarra(titulo, etapas, maximo, callback) {
  if (intervaloBarra) {
    clearInterval(intervaloBarra);
    intervaloBarra = null;
  }

  const processo = document.getElementById("processo");
  const tituloProcesso = document.getElementById("tituloProcesso");
  const porcentagem = document.getElementById("porcentagem");
  const progresso = document.getElementById("progresso");
  const status = document.getElementById("statusProcesso");
  const miniHs = document.getElementById("miniHs");
  const miniRecoil = document.getElementById("miniRecoil");
  const miniPrecisao = document.getElementById("miniPrecisao");
  const logs = document.getElementById("logsProcesso");

  const modeloAtual = pegarModeloAtual();
  const modoInjecao = titulo.toLowerCase().includes("injetando");

  processo.style.display = "block";
  tituloProcesso.innerText = titulo;
  porcentagem.innerText = "0%";
  progresso.style.width = "0%";

  status.innerHTML =
    `<div class="frase-capa">
      <strong>SENSI 100% CAPA</strong>
      <span>Melhor sensi para ${modeloAtual}</span>
    </div>
    Iniciando processamento...`;

  miniHs.innerText = "0%";
  miniRecoil.innerText = "0%";
  miniPrecisao.innerText = "0%";

  logs.innerHTML =
    `<div class="log">Aguardando análise da plataforma...</div>
    <div class="log">Aguardando configuração...</div>
    <div class="log">Preparando cálculo...</div>`;

  let valor = 0;

  intervaloBarra = setInterval(function() {
    valor += 3;

    if (valor > maximo) {
      valor = maximo;
    }

    progresso.style.width = valor + "%";
    porcentagem.innerText = valor + "%";

    miniHs.innerText = limitar(valor + 2, 0, 99) + "%";
    miniRecoil.innerText = limitar(valor - 8, 0, 95) + "%";
    miniPrecisao.innerText = limitar(valor + 1, 0, 98) + "%";

    let etapaAtual = "";

    if (valor <= 20) {
      etapaAtual = etapas[0];

      logs.innerHTML =
        `<div class="log ok">Plataforma selecionada: ${plataforma}</div>
        <div class="log">Analisando: ${modeloAtual}</div>
        <div class="log">Preparando base da sensi...</div>`;
    } else if (valor <= 40) {
      etapaAtual = etapas[1];

      logs.innerHTML =
        `<div class="log ok">Modelo analisado: ${modeloAtual}</div>
        <div class="log ok">Tipo de sensi: ${tipo}</div>
        <div class="log">Reajustando Geral, Red Dot e 2x...</div>`;
    } else if (valor <= 60) {
      etapaAtual = etapas[2];

      if (modoInjecao) {
        logs.innerHTML =
          `<div class="log ok">Auxílios selecionados: ${nomesAuxilios()}</div>
          <div class="log ok">Preparando injeção</div>
          <div class="log">Sincronizando auxílio...</div>`;
      } else {
        logs.innerHTML =
          `<div class="log ok">Configuração calculada</div>
          <div class="log ok">Sensi 100% capa carregada</div>
          <div class="log">Reajustando 4x, AWM e Olhadinha...</div>`;
      }
    } else if (valor <= 80) {
      etapaAtual = etapas[3];

      if (modoInjecao) {
        logs.innerHTML =
          `<div class="log ok">Controle preparado</div>
          <div class="log ok">Precisão preparada</div>
          <div class="log">Finalizando injeção...</div>`;
      } else {
        logs.innerHTML =
          `<div class="log ok">DPI reajustado</div>
          <div class="log ok">Botão de atirar reajustado</div>
          <div class="log">Finalizando ajuste da sensibilidade...</div>`;
      }
    } else {
      etapaAtual = etapas[4];

      if (modoInjecao) {
        logs.innerHTML =
          `<div class="log ok">Auxílio injetado</div>`;
      } else {
        logs.innerHTML =
          `<div class="log ok">Sensibilidade finalizada</div>`;
      }
    }

    status.innerHTML =
      `<div class="frase-capa">
        <strong>SENSI 100% CAPA</strong>
        <span>Melhor sensi para ${modeloAtual}</span>
      </div>
      ${etapaAtual}`;

    if (valor >= maximo) {
      clearInterval(intervaloBarra);
      intervaloBarra = null;
      callback();
    }
  }, 75);
}

function mostrarResultado() {
  const resultado = document.getElementById("resultado");
  const cards = document.getElementById("cardsResultado");
  const texto = document.getElementById("textoFinal");
  const info = document.getElementById("infoConfig");

  cards.innerHTML = "";
  info.innerText = "Sensibilidade gerada";

  texto.innerHTML =
    `<div class="sensi-lista">
      <div class="sensi-linha">
        <span>Geral</span>
        <strong>${ultimaConfig.sensi["Geral"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>Red Dot</span>
        <strong>${ultimaConfig.sensi["Red Dot"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>Mira 2x</span>
        <strong>${ultimaConfig.sensi["Mira 2x"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>Mira 4x</span>
        <strong>${ultimaConfig.sensi["Mira 4x"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>AWM</span>
        <strong>${ultimaConfig.sensi["AWM"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>Olhadinha</span>
        <strong>${ultimaConfig.sensi["Olhadinha"]}</strong>
      </div>

      <div class="sensi-linha">
        <span>DPI</span>
        <strong>${ultimaConfig.dpi}</strong>
      </div>

      <div class="sensi-linha">
        <span>Botão de atirar</span>
        <strong>${ultimaConfig.botao}</strong>
      </div>
    </div>`;

  resultado.style.display = "block";
}

function iniciar() {
  carregarMarcas();
  carregarModelos();

  document.querySelectorAll(".tab").forEach(function(botao) {
    if (!botao.hasAttribute("onclick")) {
      botao.addEventListener("click", function() {
        abrirPlataforma(botao.dataset.plataforma, botao);
      });
    }
  });

  document.querySelectorAll(".tipo").forEach(function(botao) {
    if (!botao.hasAttribute("onclick")) {
      botao.addEventListener("click", function() {
        mudarTipo(botao.dataset.tipo, botao);
      });
    }
  });

  document.querySelectorAll(".auxilio").forEach(function(card) {
    if (!card.hasAttribute("onclick")) {
      card.addEventListener("click", function() {
        mudarAuxilio(card.dataset.auxilio, card);
      });
    }
  });

  const elementosParaLimpar = [
    "modelo",
    "tipoEmulador",
    "ramPc",
    "mapeador",
    "modoMobilador",
    "dpiMobilador"
  ];

  elementosParaLimpar.forEach(function(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.addEventListener("change", limparResultado);
    }
  });

  const marca = document.getElementById("marca");

  if (marca) {
    marca.addEventListener("change", function() {
      carregarModelos();
      limparResultado();
    });
  }

  const btnGerar = document.getElementById("btnGerar");
  const btnInjetar = document.getElementById("btnInjetar");

  if (btnGerar && !btnGerar.hasAttribute("onclick")) {
    btnGerar.addEventListener("click", gerarSensi);
  }

  if (btnInjetar && !btnInjetar.hasAttribute("onclick")) {
    btnInjetar.addEventListener("click", injetarPreset);
  }
}
iniciar();
